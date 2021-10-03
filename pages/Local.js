import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { fetchData } from '../api/Api';

const Local = () => {
    const [covidUpdate, setCovidUpdate] = React.useState({});
    React.useEffect(() => {
        load();
    }, []);

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
    } = covidUpdate;
    return (
        <View style={{ padding: 10, flexDirection: "column" }}>
            <Text style={styles.topic}>Daily Updates in Sri Lanka</Text>
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
            <Text style={{ textAlign: "right", margin: 10 }}>{update_date_time}</Text>

            <Text style={styles.topic}>Total Statistics</Text>

            <View style={styles.column}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ flex: 2, textAlign: "left", fontSize: 20, marginLeft: 10 }}>Total Death</Text>
                    <Text style={{ flex: 1, textAlign: "right", fontSize: 16, marginRight: 10 }}>{local_deaths}</Text>
                </View>
            </View>
            <View style={styles.column}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ flex: 2, textAlign: "left", fontSize: 20, marginLeft: 10 }}>Total Cases</Text>
                    <Text style={{ flex: 1, textAlign: "right", fontSize: 16, marginRight: 10 }}>{local_total_cases}</Text>
                </View>
            </View>

            <Text style={{ textAlign: "right", margin: 10 }}>{update_date_time}</Text>
            <View style={styles.button}>
                <Text style={[styles.title, { color: "white" }]}>SHARE</Text>
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
        backgroundColor: "#DAFFD3",
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

export default Local;