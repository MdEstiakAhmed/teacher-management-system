import { useState } from "react";
import { menuList } from "../assets/data/dashboardMenu";

const Dashboard = () => {
    const [activeMenu, setActiveMenu] = useState("dashboard");
    return (
        <>
            <section className="dashboardArea">
                <aside className="sidebarArea">
                    <div className="logo">
                        <img src="images/logo.png" alt="logo"/>
                    </div>
                    <div className="menu">
                        <ul>
                            {
                                menuList.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.url} className={activeMenu === item.name ? "active" : ""}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </aside>
                <main className="mainArea">
                    <div className="container">
                        <div className="titleArea">
                            <h3 className="title">Dashboard</h3>
                            <div className="userArea">
                                <div className="user">
                                    <div className="userDetails">
                                        <h4 className="userName">John Doe</h4>
                                        <p className="userDesignation">Admin</p>
                                    </div>
                                    <img src="images/user.png" alt="user"/>
                                </div>
                            </div>
                        </div>
                        <div className="contentArea">

                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}

export default Dashboard;