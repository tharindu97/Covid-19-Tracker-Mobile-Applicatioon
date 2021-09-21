import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomePage({ navigation }) {
    return (
        <View style={styles.container}>
            <View
                style={styles.body1}
            >
                <Text></Text>
            </View>

            <View
                style={styles.body2}
            >
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: "row",
        padding: 10,
    },
    body1: {
        flex: 1,
        height: 100,
        backgroundColor: "#FFC3C3",
        margin: 10
    },
    body2: {
        flex: 1,
        height: 100,
        backgroundColor: "#C1EDFF",
        margin: 10
    }
});
