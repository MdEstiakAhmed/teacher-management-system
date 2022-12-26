import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { menuList } from "../../assets/data/dashboardMenu";
import logo from '../../assets/images/logo.png'



const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState("dashboard");
    const navigate = useNavigate();

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