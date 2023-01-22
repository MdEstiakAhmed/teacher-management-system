import { fetchEventList } from "../../../api/home";
import useFetch from "../../../hooks/useFetch";
import DoughnutChart from "../../chart/DoughnutChart";
import LoaderPulse from "../../loader/LoaderPulse";

const EventListAnalytics = ({width}) => {
    const { data, isLoading, error, fetchData } = useFetch(fetchEventList);

    if (isLoading) {
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
    else if (!isLoading && !error && data?.data?.length) {
        let total = data.data.length, complete = 0;
        data.data.forEach(item => {
            if (new Date(item.EndDateTime).getTime() > new Date().getTime()) {
                complete++;
            }
        })
        return (
            <div>
                <DoughnutChart
                    label={["Total event", "Completed event"]}
                    data={[total, complete]}
                />
            </div>
        )
    }
    else {
        return (<></>)
    }
}
export default EventListAnalytics;