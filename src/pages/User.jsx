import { useParams } from "react-router-dom";
// import { fetchUser } from "../api/users";
import useFetch from "../hooks/useFetch";
import { userPersonalInfo as data } from "../assets/test-data/userApiResponse";
import { useEffect, useState } from "react";
import { ChangePasswordForm } from "../components/pages/user/ChangePasswordForm";
import InfoSection from "../components/pages/user/InfoSection";
import { userGeneralInfo, academicInfo, awardAndScholarshipInfo, experienceInfo, publicationInfo, teachingInfo, trainingInfo } from "../assets/test-data/userInfo";
import { fetchUserInfo, fetchUser } from "../api/user";
import useGetContext from "../hooks/useGetContext";
import GeneralInfoForm from "../components/pages/user/GeneralInfoForm";
import OtherInformationForm from "../components/pages/user/OtherInformationForm";

const User = () => {
    const { id } = useParams();
    const { userState } = useGetContext();

    const [userInfo, setUserInfo] = useState({
        general: {},
        personal: {},
        academic: [],
        training: [],
        teaching: [],
        publication: [],
        awardAndScholarship: [],
        experience: [],
    })

    const [otherInfoModalData, setOtherInfoModalData] = useState({})

    useEffect(() => {
        // setUserInfo({
        //     general: userGeneralInfo.data,
        //     personal: userGeneralInfo.personal_info,
        //     academic: academicInfo.data.filter(item => item.user == id),
        //     training: trainingInfo.data.filter(item => item.user == id),
        //     teaching: teachingInfo.data.filter(item => item.user == id),
        //     publication: publicationInfo.data.filter(item => item.user == id),
        //     awardAndScholarship: awardAndScholarshipInfo.data.filter(item => item.user == id),
        //     experience: experienceInfo.data.filter(item => item.user == id),
        // })

        fetchParallelUserInfo();
    }, [])

    const fetchParallelUserInfo = async () => {
        const userGeneralInfo = fetchUser({ id });
        const academicInfoPromise = fetchUserInfo("academicinfo");
        const trainingInfoPromise = fetchUserInfo("traininginfo");
        const teachingInfoPromise = fetchUserInfo("teachinginfo");
        const publicationInfoPromise = fetchUserInfo("publicationinfo");
        const awardScholarshipInfoPromise = fetchUserInfo("awardscholarshipinfo");
        const experienceInfoPromise = fetchUserInfo("experienceinfo");

        const results = await Promise.all([userGeneralInfo, academicInfoPromise, trainingInfoPromise, teachingInfoPromise, publicationInfoPromise, awardScholarshipInfoPromise, experienceInfoPromise]);


        setUserInfo(() => {
            return {
                general: results[0].data || {},
                personal: results[0].personal_info || {},
                academic: results[1].data?.filter(item => item.user == id) || [],
                training: results[2].data?.filter(item => item.user == id) || [],
                teaching: results[3].data?.filter(item => item.user == id) || [],
                publication: results[4].data?.filter(item => item.user == id) || [],
                awardAndScholarship: results[5].data?.filter(item => item.user == id) || [],
                experience: results[6].data?.filter(item => item.user == id) || [],
            }
        })
    }

    const [isModalShow, setIsModalShow] = useState({
        changePassword: false,
        editInfo: false,
        generalInfo: false,
        otherInfo: false,
    });

    const handleModalOpen = (type, value) => {
        setIsModalShow(prev => ({ ...prev, [type]: value ? value : true }));
    }
    const handleModalClose = (type) => {
        setOtherInfoModalData({})
        setIsModalShow(prev => ({ ...prev, [type]: false }));
    }

    return (
        <>
            {
                isModalShow.changePassword && (
                    <ChangePasswordForm onClose={handleModalClose} />
                )
            }
            {
                isModalShow.generalInfo && (
                    <GeneralInfoForm
                        data={{
                            general: userInfo.general,
                            personal: userInfo.personal
                        }}
                        onClose={handleModalClose}
                    />
                )
            }

            {
                isModalShow.otherInfo && (
                    <OtherInformationForm
                        onClose={handleModalClose}
                        type={isModalShow.otherInfo}
                        // data={userInfo[isModalShow.otherInfo]}
                        data={otherInfoModalData}
                    />
                )
            }
            <div className="userDetailArea">
                <div className="leftSide">
                    <div className="contentArea">
                        <div className="userIdentity">
                            <img src="images/user.png" alt="user" />
                            <h3 className="title">{`${userInfo.general?.first_name || ""} ${userInfo.general?.last_name || ""}`}</h3>
                            <p className="designation">{userInfo.personal?.Designation || ""}</p>
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
                            <li>Department : <span>{userInfo.personal?.Department || ""}</span></li>
                            <li>Phone : <span>{userInfo.personal?.Phone || ""}</span></li>
                            <li>Gender : <span>{userInfo.personal?.Gender || ""}</span></li>
                            <li>Blood Group : <span>{userInfo.personal?.BloodGroup || ""}</span></li>
                            <li>DOB : <span>{userInfo.personal?.DateOfBirth || ""}</span></li>
                        </ul>
                        {
                            id == userState.data.id && (
                                <div className="buttonArea">
                                    <button className="button primaryButton" onClick={() => handleModalOpen("generalInfo")}>Edit</button>
                                    <button className="button primaryButton warning" onClick={() => handleModalOpen("changePassword")}>Change Password</button>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="rightSide">
                    {
                        InfoSectionList.map(item => (
                            <InfoSection
                                type={item.type}
                                title={item.title}
                                data={userInfo[item.data]}
                                classes={item.classes}
                                key={item.type}
                                handleModalOpen={handleModalOpen}
                                setOtherInfoModalData={setOtherInfoModalData}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default User;

const InfoSectionList = [
    {
        type: "academic",
        title: "Academic Information",
        data: "academic",
        classes: "academicInfo"
    },
    {
        type: "training",
        title: "Training Information",
        data: "training",
        classes: "trainingInfo"
    },
    {
        type: "teaching",
        title: "Teaching Information",
        data: "teaching",
        classes: "teachingInfo"
    },
    {
        type: "publication",
        title: "Publication Information",
        data: "publication",
        classes: "publicationInfo"
    },
    {
        type: "awardAndScholarship",
        title: "Award and Scolarship Information",
        data: "awardAndScholarship",
        classes: "awardAndScolarshipInfo"
    },
    {
        type: "experience",
        title: "Experience Information",
        data: "experience",
        classes: "experienceInfo"
    }
]