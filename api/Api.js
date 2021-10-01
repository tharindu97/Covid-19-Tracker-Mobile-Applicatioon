import axios from "axios";

export async function fetchData() {
    const res = await axios.create({
        baseURL: "https://www.hpb.health.gov.lk/api/get-current-statistical"
    }).get();
    return res.data.data;
}
