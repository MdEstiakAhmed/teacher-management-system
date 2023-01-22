import { fetchAllTeacherList } from "../../../api/home";
import useFetch from "../../../hooks/useFetch";
import HorizontalBarChart from "../../chart/HorizontalBarChart";
import LoaderPulse from "../../loader/LoaderPulse";

const AllTeacherListAnalytics = ({width}) => {
    const { data, isLoading, error, fetchData } = useFetch(fetchAllTeacherList);

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
        let usersList = {};
        let total = [], completed = [];
        data.data.forEach(item => {
            if (!usersList[item.Assignee]) usersList[item.Assignee] = {totalTask: 0, completedTask: 0}
            usersList[item.Assignee].totalTask = usersList[item.Assignee].totalTask + 1;
            if (item.TaskCompleted) usersList[item.Assignee].completedTask = usersList[item.Assignee].completedTask + 1;
        });

        Object.keys(usersList).forEach(item => {
            total.push(usersList[item].totalTask)
            completed.push(usersList[item].completedTask)
        })
        return (
            <div>
                <HorizontalBarChart
                    label={Object.keys(usersList)}
                    datasets={[
                        {
                            label: 'Total task',
                            data: total,
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        },
                        {
                            label: 'Completed',
                            data: completed,
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        }
                    ]}
                />
            </div>
        )
    }
    else {
        return (<></>)
    }
}
export default AllTeacherListAnalytics;