import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { fetchData } from '../api/Api';
import { captureRef } from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';

const Global = () => {
    const [covidUpdate, setCovidUpdate] = React.useState({});
    const viewRef = useRef();
    React.useEffect(() => {
        load();
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

    async function load() {
        const data = await fetchData();
        setCovidUpdate(data);
    }
    const {
        update_date_time,
        global_new_cases,
        global_total_cases,
        global_deaths,
        global_new_deaths,
        global_recovered,
    } = covidUpdate;

    return (
        <View style={{ backgroundColor: "white" }}>
            <View style={{ flexDirection: "column" }}>
                <View collapsable={false} ref={viewRef} style={{ padding: 10 }}>
                    <Text style={styles.topic}>Daily Updates in World</Text>
                    <View style={styles.container}>
                        <View style={[styles.row, { backgroundColor: "#FFC3C3" }]}>
                            <Text style={[styles.title, { color: "#FB5656" }]}>New Deaths</Text>
                            <Text style={[styles.subTitle, { color: "#FB5656" }]}>{global_new_deaths}</Text>
                        </View>
                        <View style={[styles.row, { backgroundColor: "#C1EDFF" }]}>
                            <Text style={[styles.title, { color: "#21B7CC" }]}>New Cases</Text>
                            <Text style={[styles.subTitle, { color: "#21B7CC" }]}>{global_new_cases}</Text>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ flex: 2, textAlign: "left", fontSize: 20, marginLeft: 20, color: "#45C652", fontWeight: "bold" }}>Recovered</Text>
                            <Text style={{ flex: 1, textAlign: "right", fontSize: 16, marginRight: 20, color: "#45C652" }}>{global_recovered}</Text>
                        </View>
                    </View>
                    <Text style={{ textAlign: "right", margin: 10 }}>{update_date_time}</Text>

                    <Text style={styles.topic}>Total Statistics</Text>

                    <View style={styles.column}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ flex: 2, textAlign: "left", fontSize: 20, marginLeft: 10 }}>Total Death</Text>
                            <Text style={{ flex: 1, textAlign: "right", fontSize: 16, marginRight: 10 }}>{global_deaths}</Text>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ flex: 2, textAlign: "left", fontSize: 20, marginLeft: 10 }}>Total Cases</Text>
                            <Text style={{ flex: 1, textAlign: "right", fontSize: 16, marginRight: 10 }}>{global_total_cases}</Text>
                        </View>
                    </View>

                    <Text style={{ textAlign: "right", margin: 10 }}>{update_date_time}</Text>
                </View>
                <TouchableOpacity onPress={onShare}>
                    <View style={styles.button}>
                        <Text style={[styles.title, { color: "white" }]}>SHARE</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    row: {
        flex: 1,
        backgroundColor: "#FB5656",
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
        height: 45,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20,
        backgroundColor: "#00BFA6",
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

export default Global;