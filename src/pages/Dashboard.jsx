import { useEffect, useRef, useState } from "react";
import StackBarChart from "../components/chart/StackBarChart";
import AllTeacherListAnalytics from "../components/pages/dashboard/AllTeacherListAnalytics";
import EventListAnalytics from "../components/pages/dashboard/EventListAnalytics";
import MeAsSupervisorListAnalytics from "../components/pages/dashboard/MeAsSupervisorListAnalytics";
import MyTaskListAnalytics from "../components/pages/dashboard/MyTaskListAnalytics";
import UserListAnalytics from "../components/pages/dashboard/UserListAnalytics";

const Dashboard = () => {
    const containerRef = useRef(null);

    const [isDataShow, setIsDataShow] = useState();

    useEffect(() => {
        if (containerRef?.current?.clientWidth) {
            setIsDataShow(containerRef.current.clientWidth)
        }
    }, [containerRef]);
    return (
        <>
            <div className="analyticsArea" ref={containerRef}>
                {
                    isDataShow ? (
                        <div className="analyticsArea-wrapper">
                            <div className="analyticsArea-group">
                                <div className="contentArea">
                                    <h3 className="title">Users</h3>
                                    <div className="chart">
                                        <UserListAnalytics
                                            width={containerRef.current.clientWidth / 4 || 0}
                                        />
                                    </div>
                                </div>
                                <div className="contentArea">
                                    <h3 className="title">My Task</h3>
                                    <div className="chart">
                                        <MyTaskListAnalytics
                                            width={containerRef.current.clientWidth / 4 || 0}
                                        />
                                    </div>
                                </div>
                                <div className="contentArea">
                                    <h3 className="title">Me as supervisor</h3>
                                    <div className="chart">
                                        <MeAsSupervisorListAnalytics
                                            width={containerRef.current.clientWidth / 4 || 0}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="analyticsArea-group">
                                <div className="contentArea">
                                    <h3 className="title">Events</h3>
                                    <div className="chart">
                                        <EventListAnalytics
                                            width={containerRef.current.clientWidth / 4 || 0}
                                        />
                                    </div>
                                </div>
                                <div className="contentArea large">
                                    <h3 className="title">Teacher's ranking</h3>
                                    <AllTeacherListAnalytics
                                        width={containerRef.current.clientWidth / 4 || 0}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : ""
                }
            </div>
        </>
    );
}

export default Dashboard;