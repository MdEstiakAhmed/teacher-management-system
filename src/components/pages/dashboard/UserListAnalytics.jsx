import { fetchUserList } from "../../../api/home";
import useFetch from "../../../hooks/useFetch";
import DoughnutChart from "../../chart/DoughnutChart";
import LoaderPulse from "../../loader/LoaderPulse";

const UserListAnalytics = ({width}) => {
    const { data, isLoading, error, fetchData } = useFetch(fetchUserList);

    if(isLoading) {
        return (
            <div className="loader-wrapper" style={{width: width}}>
                <LoaderPulse />
            </div>
        )
    }
    else if (error) {
        return (
            <div>
                <button className="button primaryButton" onClick={fetchData}>Reload</button>
            </div>
        )
    }
    else if(!isLoading && !error && data?.data?.length){
        let active=0, inactive=0;
        data.data.forEach(item => {
            if(item.is_active) active++;
            else inactive++;
        })
        return (
            <div>
                <DoughnutChart
                    label={["active", "inactive"]}
                    data={[active, inactive]}
                />
            </div>
        )
    }
    else {
        return (<></>)
    }
}
export default UserListAnalytics;