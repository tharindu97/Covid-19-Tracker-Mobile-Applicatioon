import React from 'react';
import { View, Text } from "react-native";
import { fetchData } from '../api/Api';

const Test = () => {
    const [pcrUpdate, setPcrUpdate] = React.useState([]);
    const [antigenUpdate, setAntigenUpdate] = React.useState([]);
    const [covidUpdate, setCovidUpdate] = React.useState({});

    React.useEffect(() => {
        load();
    }, []);

    async function load() {
        const data = await fetchData();
        setPcrUpdate(data.daily_pcr_testing_data);
        setAntigenUpdate(data.daily_antigen_testing_data);
        setCovidUpdate(data);
    }

    const {
        total_pcr_testing_count,
        total_antigen_testing_count
    } = covidUpdate;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Total PCR: {total_pcr_testing_count}</Text>
            <Text>Total Antigent: {total_antigen_testing_count}</Text>

            <Text>Pcr Test</Text>
            {pcrUpdate.slice(0, 9).map((item, index) => (
                <View key={index}>
                    <Text>{item.date}</Text>
                </View>
            ))}
            <Text>Antigent Test</Text>
            {antigenUpdate.slice(0, 9).map((item, index) => (
                <View key={index}>
                    <Text>{item.date}</Text>
                </View>
            ))}
        </View>
    );
}

export default Test;