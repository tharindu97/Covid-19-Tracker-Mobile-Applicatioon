import axios from "axios";

export async function fetchData() {
    const res = await axios.create({
        baseURL: "https://www.hpb.health.gov.lk/api/get-current-statistical"
    }).get();
    return res.data.data;
}
// export async function fetchTotalFacilityList(branchId) {
//     const configs = {
//       headers: {
//         Authorization: window.localStorage.getItem('loginToken'),
//       }
//     }
  
//     const res = await axios.get(`${baseURL}/b4u-core/facility/search?branchId=${branchId}&size=${1000}`, configs)
//     return res
//   }