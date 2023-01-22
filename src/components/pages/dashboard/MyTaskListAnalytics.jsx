import { fetchMyTaskList } from "../../../api/home";
import useFetch from "../../../hooks/useFetch";
import DoughnutChart from "../../chart/DoughnutChart";
import LoaderPulse from "../../loader/LoaderPulse";

const MyTaskListAnalytics = ({width}) => {
    const { data, isLoading, error, fetchData } = useFetch(fetchMyTaskList);

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
        let total = data.data.length, complete=0;
        data.data.forEach(item => {
            if(item.TaskCompleted) complete++;
        })
        return (
            <div>
                <DoughnutChart
                    label={["Total", "Completed by me"]}
                    data={[total, complete]}
                />
            </div>
        )
    }
    else {
        return (<></>)
    }
}
export default MyTaskListAnalytics;