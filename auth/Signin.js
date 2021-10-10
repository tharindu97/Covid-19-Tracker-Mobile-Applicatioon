import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import { auth } from '../firebase';

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Navigation")
            }
        })
        return unsubscribe
    }, [])

    const handleSignUp = () => {
        navigation.navigate('Signup');
    }

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with:', user.email);
            })
            .catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <Image source={require('../assets/icon.png')} style={{ width: 220, height: 200, resizeMode: "contain" }} />
            <Text style={{ fontSize: 40, fontWeight: "bold", textAlign: "center", marginBottom: 30, }}>Login Now</Text>
            <View style={styles.inputContainer}>
                <Text style={{ padding: 5 }}>Enter Your Email</Text>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <Text style={{ paddingBottom: 5, paddingTop: 20 }}>Enter Your Password</Text>
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 17, paddingTop: 10 }}>Don't have a account? <Text style={{ color: "#00BFA6" }} onPress={handleSignUp}>Register</Text></Text>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Signin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: '#D4F5E9',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        paddingHorizontal: 40,
        marginTop: 40,
    },
    button: {
        backgroundColor: '#00BFA6',
        width: "100%",
        padding: 15,
        borderRadius: 40,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
})