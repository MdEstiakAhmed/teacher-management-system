import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { menuList } from "../../assets/data/dashboardMenu";
import logo from '../../assets/images/logo.png'

const sidebarList = {
    "/": "dashboard",
    "/email": "email",
    "/chat": "chat",
    "/todo": "todo",
    "/event": "event",
    "/users": "users",
    "/users/": "users",
}

const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if(location.pathname.includes("/users")) {
            setActiveMenu("users")
        }
        else {
            setActiveMenu(sidebarList[location.pathname])
        }
    }, [location.pathname]);

    const handleMenuClick = (e, item) => {
        e.preventDefault()
        navigate(item.url)
        setActiveMenu(item.name)
    }
    return (
        <>
            <aside className="sidebarArea">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="menu">
                    <ul>
                        {
                            menuList.map((item, index) => (
                                <li key={index}>
                                    <span className={activeMenu === item.name ? "active" : ""} onClick={(e) => handleMenuClick(e, item)}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;