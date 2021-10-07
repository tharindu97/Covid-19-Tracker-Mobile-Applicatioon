import React from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { fetchData } from '../api/Api';

const Test = () => {
    const [isLoding, setIsLoding] = React.useState(false);
    const [pcrUpdate, setPcrUpdate] = React.useState([]);
    const [antigenUpdate, setAntigenUpdate] = React.useState([]);
    const [covidUpdate, setCovidUpdate] = React.useState({});

    React.useEffect(() => {
        load().then(
            setIsLoding(true)
        );
    }, []);

    async function load() {
        const data = await fetchData();
        setPcrUpdate(data.daily_pcr_testing_data);
        setAntigenUpdate(data.daily_antigen_testing_data);
        setCovidUpdate(data);
    }

    const {
        total_pcr_testing_count,
        total_antigen_testing_count,
        update_date_time,
    } = covidUpdate;

    if (!isLoding) {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loding.....!</Text>
            </View>
        );
    }

    return (
        <View style={{ padding: 10, flexDirection: "column" }}>
            <ScrollView>
                <View>
                    <Text style={styles.topic}>Testing Details</Text>
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
                    <Text style={{ textAlign: "right", margin: 10, marginBottom: 10 }}>{update_date_time}</Text>
                    <ScrollView>
                        <View style={{ flexDirection: "row", }}>
                            <View style={{ flex: 1 }}>
                                {pcrUpdate.slice(0, 9).map((item, index) => (
                                    <View key={index}>
                                        <View style={styles.container}>
                                            <View style={[styles.row, { backgroundColor: "#C1EDFF" }]}>
                                                <Text style={[styles.title, { color: "#21B7CC" }]}>PCR Testing</Text>
                                                <Text style={[styles.subTitle, { color: "#21B7CC" }]}>{item.pcr_count}</Text>
                                            </View>
                                        </View>
                                        <Text></Text>
                                    </View>
                                ))}
                            </View>
                            <View style={{ flex: 1 }}>
                                {antigenUpdate.slice(0, 9).map((item, index) => (
                                    <View key={index}>
                                        <View style={styles.container}>
                                            <View style={[styles.row, { backgroundColor: "#D4F5E9" }]}>
                                                <Text style={[styles.title, { color: "#45C652" }]}>Antigen Testing</Text>
                                                <Text style={[styles.subTitle, { color: "#45C652" }]}>{item.antigen_count}</Text>
                                            </View>
                                        </View>
                                        <Text style={{ textAlign: "right", paddingRight: 10 }}>{item.date}</Text>
                                    </View>
                                ))}
                            </View>
                            <View style={{ height: 30 }}>

                            </View>
                        </View>
                    </ScrollView>
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

export default Test;