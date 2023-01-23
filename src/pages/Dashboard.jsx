import { useEffect, useRef, useState } from "react";
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
            <div className="contentArea analyticsArea" ref={containerRef}>
                {
                    isDataShow ? (
                        <div className="analyticsArea-wrapper">
                            <div className="analyticsArea-group1">
                                <UserListAnalytics
                                    width={containerRef.current.clientWidth / 4 || 0}
                                />
                                <MyTaskListAnalytics
                                    width={containerRef.current.clientWidth / 4 || 0}
                                />
                                <MeAsSupervisorListAnalytics
                                    width={containerRef.current.clientWidth / 4 || 0}
                                />
                                <EventListAnalytics
                                    width={containerRef.current.clientWidth / 4 || 0}
                                />
                            </div>
                            <div className="analyticsArea-group2">
                                <AllTeacherListAnalytics
                                    width={containerRef.current.clientWidth / 4 || 0}
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