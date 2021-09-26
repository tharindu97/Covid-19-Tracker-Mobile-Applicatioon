import React from 'react';
import { View, Text } from "react-native";
import { fetchData } from '../api/Api';

const Global = () => {
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
        global_new_cases,
        global_total_cases,
        global_deaths,
        global_new_deaths,
        global_recovered,
    } = covidUpdate;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Update: {update_date_time}</Text>
            <Text>Total Deaths: {global_deaths}</Text>
            <Text>New Cases: {global_new_cases}</Text>
            <Text> REcoverd: {global_recovered}</Text>
            <Text>New Deaths: {global_new_deaths}</Text>
            <Text>Total Cases: {global_total_cases}</Text>
        </View>
    );
}

export default Global;