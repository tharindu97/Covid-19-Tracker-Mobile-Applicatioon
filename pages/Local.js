import React from 'react';
import { View, Text } from "react-native";
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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Update:  {update_date_time}</Text>
            <Text>New Cases: {local_new_cases}</Text>
            <Text>Total Cases: {local_total_cases}</Text>
            <Text>Total Deaths: {local_new_deaths}</Text>
            <Text>New Deaths: {local_deaths}</Text>
            <Text>Recoverd: {local_recovered}</Text>
            <Text>Active Cases: {local_active_cases}</Text>
        </View>
    );
}

export default Local;