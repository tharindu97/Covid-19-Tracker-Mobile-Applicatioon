import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from "react-native";
import { fetchData } from '../../api/Api';
import { captureRef } from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';

const Home = () => {

    const [isLoding, setIsLoding] = React.useState(false);
    const [covidUpdate, setCovidUpdate] = React.useState({});

    const viewRef = useRef();
    React.useEffect(() => {
        load();
        setTimeout(() => {
            setIsLoding(true)
        }, 1500);
    }, []);



    async function onShare() {
        try {
            const uri = await captureRef(viewRef, {
                quality: 0.7,
                format: 'png',
            });
            await Sharing.shareAsync(uri);
        } catch (error) {
            alert(error.message);
        }
    };

    async function imageDownload() {
        try {
            await captureRef(viewRef, {
                quality: 0.7,
                format: 'png',
            }).then(async (value) => {
                const { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    Alert.alert(
                        "Permission",
                        "invalied your permission",
                        [
                            { text: "OK", onPress: () => console.log("save done") }
                        ],
                        { cancelable: false }
                    );
                }
                MediaLibrary.saveToLibraryAsync(value);
                Alert.alert(
                    "Save report",
                    "report save succefuly",
                    [
                        { text: "OK", onPress: () => console.log("save done") }
                    ],
                    { cancelable: false }
                );
            });
        } catch (error) {
            alert(error.message);
        }
    }

    async function load() {
        const data = await fetchData();
        setCovidUpdate(data);
    }

    const {
        update_date_time,
        local_new_cases,
        local_total_cases,
        local_deaths,
        local_new_deaths,
        local_recovered,
        local_active_cases,
        total_pcr_testing_count,
        total_antigen_testing_count
    } = covidUpdate;

    if (!isLoding) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#00BFA6" />
            </View>
        );
    }
    return (
        <View style={{ backgroundColor: "white" }}>
            <ScrollView>

                <View style={{ flexDirection: "column" }}>
                    <View collapsable={false} ref={viewRef} style={{ padding: 10, }}>
                        <Text style={styles.topic}>Daily Updates</Text>
                        <View style={styles.container}>
                            <View style={[styles.row, { backgroundColor: "#FFC3C3" }]}>
                                <Text style={[styles.title, { color: "#FB5656" }]}>New Deaths</Text>
                                <Text style={[styles.subTitle, { color: "#FB5656" }]}>{local_new_deaths}</Text>
                            </View>
                            <View style={[styles.row, { backgroundColor: "#C1EDFF" }]}>
                                <Text style={[styles.title, { color: "#21B7CC" }]}>New Cases</Text>
                                <Text style={[styles.subTitle, { color: "#21B7CC" }]}>{local_new_cases}</Text>
                            </View>
                        </View>
                        <View style={styles.container}>
                            <View style={[styles.row, { backgroundColor: "#D4F5E9" }]}>
                                <Text style={[styles.title, { color: "#45C652" }]}>Recoverd</Text>
                                <Text style={[styles.subTitle, { color: "#45C652" }]}>{local_recovered}</Text>
                            </View>
                            <View style={[styles.row, { backgroundColor: "#F4DDFF" }]}>
                                <Text style={[styles.title, { color: "#FC55FF" }]}>Active Cases</Text>
                                <Text style={[styles.subTitle, { color: "#FC55FF" }]}>{local_active_cases}</Text>
                            </View>
                        </View>
                        <Text style={{ textAlign: "right", margin: 10, marginBottom: 10 }}>{update_date_time}</Text>

                        <View style={styles.column}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ flex: 2, textAlign: "left", fontSize: 20, marginLeft: 10 }}>Total PCR Testing</Text>
                                <Text style={{ flex: 1, textAlign: "right", fontSize: 16, marginRight: 10 }}>{total_pcr_testing_count}</Text>
                            </View>
                        </View>

                        <View style={styles.column}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ flex: 2, textAlign: "left", fontSize: 20, marginLeft: 10 }}>Total Antigent Testing</Text>
                                <Text style={{ flex: 1, textAlign: "right", fontSize: 16, marginRight: 10 }}>{total_antigen_testing_count}</Text>
                            </View>
                        </View>

                        <View style={styles.container}>
                            <View style={[styles.row, { backgroundColor: "#FFC3C3" }]}>
                                <Text style={[styles.title, { color: "#FB5656" }]}>Total Death</Text>
                                <Text style={[styles.subTitle, { color: "#FB5656" }]}>{local_deaths}</Text>
                            </View>
                            <View style={[styles.row, { backgroundColor: "#C1EDFF" }]}>
                                <Text style={[styles.title, { color: "#21B7CC" }]}>Total Cases</Text>
                                <Text style={[styles.subTitle, { color: "#21B7CC" }]}>{local_total_cases}</Text>
                            </View>
                        </View>

                        <Text style={{ textAlign: "right", margin: 10 }}>{update_date_time}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.button}>
                            <TouchableOpacity onPress={onShare}>
                                <Text style={[styles.title, { color: "#00BFA6" }]}>SHARE</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.button}>
                            <TouchableOpacity onPress={imageDownload}>
                                <Text style={[styles.title, { color: "#00BFA6" }]}>DOWNLOAD</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    row: {
        flex: 1,
        height: 80,
        margin: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    column: {
        height: 70,
        margin: 5,
        borderRadius: 10,
        backgroundColor: "#D4F5E9",
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        flex: 1,
        height: 45,
        margin: 10,
        borderRadius: 20,
        borderColor: "#00BFA6",
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },

    subTitle: {
        fontSize: 18,
    },
    topic: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    }
});

export default Home;