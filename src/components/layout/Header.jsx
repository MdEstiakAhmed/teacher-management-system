import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { headerTitle } from "../../assets/data/headerTitle";
import { CheckboxIcon, ProfileIcon, SignOutIcon } from "../../assets/icons/icons";
import useGetContext from "../../hooks/useGetContext";
import useOutsideClick from "../../hooks/useOutsideClick";
import userLogo from "../../assets/images/user.png";

const Header = () => {
    const location = useLocation();
    const headerRef = useRef(null);
    const isClicked = useOutsideClick(headerRef);
    const { authAction, userAction, userState } = useGetContext();
    const [title, setTitle] = useState("");
    const [isShowPopUp, setIsShowPopUp] = useState(false);

    useEffect(() => {
        let title = headerTitle[location.pathname];
        if(location.pathname.includes("/users/")) {
            title = "User Details";
        }
        setTitle(title);
    }, [location.pathname])

    useEffect(() => {
        if (isClicked) {
            setIsShowPopUp(false);
        }
    }, [isClicked])

    const handlePopUpShow = () => {
        setIsShowPopUp(prev => !prev);
    }

    const handleSignOut = () => {
        authAction.unsetAuth();
        userAction.unsetUser();
    }
    return (
        <div className="titleArea">
            <h3 className="title">{title}</h3>
            <div className="userArea">
                <div className="user">
                    <div className="userDetails" >
                        <h4 className="userName">{`${userState.data?.first_name} ${userState.data?.last_name}`}</h4>
                        <p className="userDesignation">
                            {userState.data?.is_superuser ? "Admin" : useState.data?.is_staff ? "Employee" : ""}
                        </p>
                    </div>
                    <div className="userImage" ref={headerRef}>
                        <img src={`http://127.0.0.1:8000${userState.data?.ProfilePic}`} alt="user" onClick={handlePopUpShow} />
                        {
                            (isShowPopUp) ? (
                                <ul className="userPopup card" >
                                    <li className="user">
                                        <img src={`http://127.0.0.1:8000${userState.data?.ProfilePic}`} alt="user" />
                                        <div className="userDetails">
                                            <h4 className="userName">{`${userState.data?.first_name} ${userState.data?.last_name}`}</h4>
                                            <p className="userDesignation">{userState.data?.is_superuser ? "Admin" : useState.data?.is_staff ? "Employee" : ""}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <Link to={`/users/${userState.data.id}`}>
                                            <ProfileIcon />
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/todo">
                                            <CheckboxIcon />
                                            Todo
                                        </Link>
                                    </li>
                                    <li className="signOut" onClick={handleSignOut}>
                                        <Link to="/login">
                                            <SignOutIcon />
                                            Sign Out
                                        </Link>
                                    </li>
                                </ul>
                            ) : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;