import axios from "axios";

export default axios.create({
    baseURL: "https://www.hpb.health.gov.lk/api/get-current-statistical"
});