import { fetchAllTeacherList, fetchUserList } from "../../../api/home";
import useFetch from "../../../hooks/useFetch";
import StackBarChart from "../../chart/StackBarChart";
import LoaderPulse from "../../loader/LoaderPulse";

const AllTeacherListAnalytics = ({ width }) => {
    const { data, isLoading, error, fetchData } = useFetch(fetchAllTeacherList);
    const { data: teachers } = useFetch(fetchUserList);

    if (isLoading) {
        return (
            <div className="loader-wrapper">
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
    else if (!isLoading && !error && data?.data?.length && teachers?.data?.length) {
        let usersData = [];

        let userList = [];
        data.data.forEach(item => {
            if (!userList.includes(item.Assignee)) userList.push(item.Assignee);
        })

        userList.forEach(item => {
            let completed = 0, incomplete = 0;
            data.data.forEach(task => {
                if (task.Assignee === item) {
                    if (task.TaskCompleted) completed++;
                    else incomplete++;
                }
            })
            usersData.push(
                {
                    id: item,
                    completedTask: completed,
                    incompleteTask: incomplete,
                    completePercentage: (completed / (completed + incomplete)) * 100,
                    incompletePercentage: (incomplete / (completed + incomplete)) * 100
                }
            )
        })

        // sort usersData by completePercentage
        usersData.sort((a, b) => {
            if(b.completePercentage > a.completePercentage) {
                return b.completePercentage - a.completePercentage;
            }
            else if(b.completePercentage === a.completePercentage && b.incompletePercentage > a.incompletePercentage) {
                return b.incompletePercentage - a.incompletePercentage;
            }
            else if (b.completePercentage === a.completePercentage && b.incompletePercentage === a.incompletePercentage) {
                return (b.completedTask + b.incompleteTask) - (a.completedTask + a.incompleteTask);
            }
            else {
                return b.id - a.id;
            }
        })

        console.log(usersData);

        return (
            <div>
                <StackBarChart
                    label={
                        usersData.map(item => {
                            let data = teachers.data.find(teacher => teacher.id === item.id);
                            return data.first_name + " " + data.last_name;
                        })
                    }
                    datasets={[
                        {
                            label: 'Completed',
                            data: usersData.map(item => item.completedTask),
                            backgroundColor: '#54A0FF',
                            barThickness: 15,      
                        },
                        {
                            label: 'Incomplete',
                            data: usersData.map(item => item.incompleteTask),
                            backgroundColor: '#d2dae2',
                            barThickness: 15,      
                        },
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