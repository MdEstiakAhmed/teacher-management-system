import { useEffect, useRef } from "react";
import AllTeacherListAnalytics from "../components/pages/dashboard/AllTeacherListAnalytics";
import EventListAnalytics from "../components/pages/dashboard/EventListAnalytics";
import MeAsSupervisorListAnalytics from "../components/pages/dashboard/MeAsSupervisorListAnalytics";
import MyTaskListAnalytics from "../components/pages/dashboard/MyTaskListAnalytics";
import UserListAnalytics from "../components/pages/dashboard/UserListAnalytics";

const Dashboard = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef) {
            console.log(containerRef.current.clientWidth);
        }
    }, [containerRef]);
    return (
        <>
            <div className="contentArea analyticsArea" ref={containerRef}>
                {
                    containerRef?.current?.clientWidth ? (
                        <div className="analyticsArea-wrapper">
                            <div className="analyticsArea-group1">
                                <UserListAnalytics
                                    width={containerRef?.current?.clientWidth / 4 || 0}
                                />
                                <MyTaskListAnalytics
                                    width={containerRef?.current?.clientWidth / 4 || 0}
                                />
                                <MeAsSupervisorListAnalytics
                                    width={containerRef?.current?.clientWidth / 4 || 0}
                                />
                                <EventListAnalytics
                                    width={containerRef?.current?.clientWidth / 4 || 0}
                                />
                            </div>
                            <div className="analyticsArea-group2">
                                <AllTeacherListAnalytics
                                    width={containerRef?.current?.clientWidth / 4 || 0}
                                />
                            </div>
                        </div>
                    ) : ""
                }
            </div>
        </>
    );
}

export default Dashboard;