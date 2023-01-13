import { NavLink,  } from "react-router-dom";
import { menuList } from "../../assets/data/dashboardMenu";
import logo from '../../assets/images/logo.png'

const Sidebar = () => {

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
                                    <NavLink to={item.url} className={({isActive}) => isActive ? "active" : ""}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </NavLink>
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