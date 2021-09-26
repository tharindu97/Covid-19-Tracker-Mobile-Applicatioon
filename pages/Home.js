import React from 'react';
import { View, Text } from "react-native";
import { fetchData } from '../api/Api';

const Home = () => {
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
        total_pcr_testing_count,
        total_antigen_testing_count
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
            <Text>Total Anitigent: {total_antigen_testing_count}</Text>
            <Text>Total PCR: {total_pcr_testing_count}</Text>
        </View>
    );

}

export default Home;