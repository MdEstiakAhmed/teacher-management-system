import { useParams } from "react-router-dom";
import { fetchUser } from "../api/users";
import useFetch from "../hooks/useFetch";
import { userPersonalInfo as data } from "../assets/test-data/userApiResponse";
import { useEffect, useState } from "react";
import { ChangePasswordForm } from "../components/pages/user/ChangePasswordForm";
import InfoSection from "../components/pages/user/InfoSection";
import { personalInfo, academicInfo, awardAndScholarshipInfo, experienceInfo, publicationInfo, teachingInfo, trainingInfo } from "../assets/test-data/userInfo";
import { fetchUserInfo } from "../api/user";
import useGetContext from "../hooks/useGetContext";

const User = () => {
    const { id } = useParams();
    // const { data, isFetched, error } = useFetch(fetchUser, { id });
    const {userState} = useGetContext();

    const [userInfo, setUserInfo] = useState({
        personal: [],
        academic: [],
        training: [],
        teaching: [],
        publication: [],
        awardAndScholarship: [],
        experience: [],
    })

    useEffect(() => {
        setUserInfo({
            personal: personalInfo.data,
            academic: academicInfo.data,
            training: trainingInfo.data,
            teaching: teachingInfo.data,
            publication: publicationInfo.data,
            awardAndScholarship: awardAndScholarshipInfo.data,
            experience: experienceInfo.data,
        })

        // fetchParallelUserInfo();
    }, [])

    const fetchParallelUserInfo = async () => {
        // const personalInfoPromise = fetchUserInfo("personalinfo");
        const academicInfoPromise = fetchUserInfo("academicinfo");
        const trainingInfoPromise = fetchUserInfo("traininginfo");
        const teachingInfoPromise = fetchUserInfo("teachinginfo");
        const publicationInfoPromise = fetchUserInfo("publicationinfo");
        const awardScholarshipInfoPromise = fetchUserInfo("awardscholarshipinfo");
        const experienceInfoPromise = fetchUserInfo("experienceinfo");

        const results = await Promise.all([academicInfoPromise, trainingInfoPromise, teachingInfoPromise, publicationInfoPromise, awardScholarshipInfoPromise, experienceInfoPromise]);

        setUserInfo(() => {
            return {
                // personal: results[0].data.filter(item => item.user === userState.data.id),
                academic: results[0].data.filter(item => item.user === id),
                training: results[1].data.filter(item => item.user === id),
                teaching: results[2].data.filter(item => item.user === id),
                publication: results[3].data.filter(item => item.user === id),
                awardAndScholarship: results[4].data.filter(item => item.user === id),
                experience: results[5].data.filter(item => item.user === id)
            }
        })
    }

    const [isModalShow, setIsModalShow] = useState({
        changePassword: false,
        editInfo: false,
    });

    const handleModalOpen = (type) => {
        setIsModalShow(prev => ({ ...prev, [type]: true }));
    }
    const handleModalClose = (type) => {
        setIsModalShow(prev => ({ ...prev, [type]: false }));
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
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <div className="details">
                                    <h4 className="count">10</h4>
                                    <p className="title">Email</p>
                                </div>
                            </div>
                            <div className="iconCard">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
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
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <InfoSection
                        type="academic"
                        title="Academic Information"
                        data={userInfo.academic}
                        classes="academicInfo"
                    />
                    <InfoSection
                        type="training"
                        title="Training Information"
                        data={userInfo.training}
                        classes="trainingInfo"
                    />
                    <InfoSection
                        type="teaching"
                        title="Teaching Information"
                        data={userInfo.teaching}
                        classes="teachingInfo"
                    />
                    <InfoSection
                        type="publication"
                        title="Publication Information"
                        data={userInfo.publication}
                        classes="publicationInfo"
                    />
                    <InfoSection
                        type="awardAndScholarship"
                        title="Award and Scolarship Information"
                        data={userInfo.awardAndScholarship}
                        classes="awardAndScolarshipInfo"
                    />
                    <InfoSection
                        type="experience"
                        title="Experience Information"
                        data={userInfo.experience}
                        classes="experienceInfo"
                    />
                </div>
            </div>
        </>
    );
}

export default User;