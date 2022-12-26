import { useParams } from "react-router-dom";
import { fetchUser } from "../api/users";
import useFetch from "../hooks/useFetch";
import { userPersonalInfo as data } from "../assets/test-data/userApiResponse";
import { useState } from "react";
import { ChangePasswordForm } from "../components/pages/user/ChangePasswordForm";

const User = () => {
    const { id } = useParams();
    // const { data, isFetched, error } = useFetch(fetchUser, { id });

    const [isModalShow, setIsModalShow] = useState({
        changePassword: false,
        editInfo: false,
    });

    const handleModalOpen = (type) => {
        setIsModalShow(prev => ({...prev, [type]: true}));
    }
    const handleModalClose = (type) => {
        setIsModalShow(prev => ({...prev, [type]: false}));
    }

    return (
        <>
            {
                isModalShow.changePassword && (
                    <ChangePasswordForm onClose={handleModalClose} />
                )
            }
            <div className="userDetailArea">
                <div className="leftSide">
                    <div className="contentArea">
                        <div className="userIdentity">
                            <img src="images/user.png" alt="user" />
                            <h3 className="title">{`${data.data.first_name} ${data.data.last_name}`}</h3>
                            <p className="designation">{data.personal_info.Designation}</p>
                        </div>
                        <div className="userHeighlight">
                            <div className="iconCard">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <div className="details">
                                    <h4 className="count">10</h4>
                                    <p className="title">Email</p>
                                </div>
                            </div>
                            <div className="iconCard">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <div className="details">
                                    <h4 className="count">10</h4>
                                    <p className="title">Email</p>
                                </div>
                            </div>
                        </div>
                        <ul className="userDetail">
                            <li>Department : <span>{data.personal_info.Department}</span></li>
                            <li>Phone : <span>{data.personal_info.Phone}</span></li>
                            <li>Gender : <span>{data.personal_info.Gender}</span></li>
                            <li>Blood Group : <span>{data.personal_info.BloodGroup}</span></li>
                            <li>DOB : <span>{data.personal_info.DateOfBirth}</span></li>
                        </ul>
                        <div className="buttonArea">
                            <button className="button primaryButton">Edit</button>
                            <button className="button primaryButton warning" onClick={() => handleModalOpen("changePassword")}>Change Password</button>
                            {/* <button className="button primaryButton danger">Delete</button> */}
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="contentArea academicInfo">
                        <h3 className="title">Academic Information</h3>
                        <div className="content">
                            <div className="heading">
                                <p className="dateTime">2022</p>
                                <button className="edit">
                                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" tag="i" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"></path><path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3l8.385-8.415zM16 5l3 3"></path></g></svg>
                                </button>
                            </div>
                            <p className="infoTitle">MSc in CSE</p>
                            <p>Dhaka University</p>
                            <p>3.00</p>
                        </div>
                        <div className="content">
                            <div className="heading">
                                <p className="dateTime">2022</p>
                                <button className="edit">
                                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"></path><path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3l8.385-8.415zM16 5l3 3"></path></g></svg>
                                </button>
                            </div>
                            <p className="infoTitle">BSc in CSE</p>
                            <p>Dhaka University</p>
                            <p>3.00</p>
                        </div>
                    </div>
                    <div className="contentArea trainingInfo">
                        <h3 className="title">Training Information</h3>
                        <div className="content">
                            <div className="heading">
                                <p className="dateTime">2022</p>
                                <button className="edit">
                                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"></path><path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3l8.385-8.415zM16 5l3 3"></path></g></svg>
                                </button>
                            </div>
                            <p className="infoTitle">Diploma in Computer</p>
                            <p>Creative IT institute</p>
                            <p>6 Months</p>
                        </div>
                    </div>
                    <div className="contentArea teachingInfo">
                        <h3 className="title">Teaching Information</h3>
                        <div className="content">
                            <div className="heading">
                                <p className="dateTime">CSE 301</p>
                                <button className="edit">
                                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"></path><path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3l8.385-8.415zM16 5l3 3"></path></g></svg>
                                </button>
                            </div>
                            <p className="infoTitle">Computer Theory</p>
                            <p>5 Credit</p>
                        </div>
                    </div>
                    <div className="contentArea publicationInfo">
                        <h3 className="title">Publication Information</h3>
                        <div className="content">
                            <div className="heading">
                                <p className="dateTime">2022</p>
                                <button className="edit">
                                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"></path><path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3l8.385-8.415zM16 5l3 3"></path></g></svg>
                                </button>
                            </div>
                            <p className="infoTitle">A paper on Computer</p>
                            <p>International Journal</p>
                        </div>
                    </div>
                    <div className="contentArea awardAndScolarshipInfo">
                        <h3 className="title">Award and Scolarship Information</h3>
                        <div className="content">
                            <div className="heading">
                                <p className="dateTime">2022</p>
                                <button className="edit">
                                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"></path><path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3l8.385-8.415zM16 5l3 3"></path></g></svg>
                                </button>
                            </div>
                            <p className="infoTitle">Best Student Award</p>
                            <p>University</p>
                        </div>
                    </div>
                    <div className="contentArea experienceInfo">
                        <h3 className="title">Experience Information</h3>
                        <div className="content">
                            <div className="heading">
                                <p className="dateTime">2022</p>
                                <button className="edit">
                                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"></path><path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3l8.385-8.415zM16 5l3 3"></path></g></svg>
                                </button>
                            </div>
                            <p className="infoTitle">Web Developer</p>
                            <p>Company</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default User;