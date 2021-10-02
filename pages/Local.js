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
            <Text style={{ height: 20 }}>Daily Updates in Sri Lanka</Text>
            <View style={styles.container}>
                <View style={styles.row}></View>
                <View style={styles.row}></View>
            </View>
            <View style={styles.container}>
                <View style={styles.row}></View>
                <View style={styles.row}></View>
            </View>
            <Text style={{ textAlign: "right", margin: 10 }}>{update_date_time}</Text>

            <Text style={{ height: 20 }}>Total Statistics</Text>

            <View style={styles.column}></View>
            <View style={styles.column}></View>

            <Text style={{ textAlign: "right", margin: 10 }}>{update_date_time}</Text>
            <View style={styles.button}></View>
            {/* <Text>Update:  {update_date_time}</Text>
            <Text>New Cases: {local_new_cases}</Text>
            <Text>Total Cases: {local_total_cases}</Text>
            <Text>Total Deaths: {local_new_deaths}</Text>
            <Text>New Deaths: {local_deaths}</Text>
            <Text>Recoverd: {local_recovered}</Text>
            <Text>Active Cases: {local_active_cases}</Text> */}
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
    },
    column: {
        height: 70,
        margin: 5,
        backgroundColor: "#DAFFD3"
    },
    button: {
        height: 45,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20,
        backgroundColor: "#00BFA6"
    }
});

export default Local;