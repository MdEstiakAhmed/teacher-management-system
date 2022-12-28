import { useEffect, useRef } from "react";
import { updateOtherInfo } from "../../../api/user";

const form = {
    academic: [
        { name: "Degree", label: "Degree", placeholder: "Degree" },
        { name: "Major", label: "Major", placeholder: "Major" },
        { name: "Institute", label: "Institute", placeholder: "Institute" },
        { name: "PassingYear", label: "Passing Year", placeholder: "Passing Year" },
        { name: "CGPA", label: "CGPA", placeholder: "CGPA" },
    ],
    training: [
        { name: "Titlee", label: "Titlee", placeholder: "Titlee" },
        { name: "Institute", label: "Institute", placeholder: "Institute" },
        { name: "Duration", label: "Duration", placeholder: "Duration" },
        { name: "Year", label: "Year", placeholder: "Year" },
    ],
    teaching: [
        { name: "CourseCode", label: "Course Code", placeholder: "Course Code" },
        { name: "CourseTitle", label: "Course Title", placeholder: "Course Title" },
    ],
    publication: [
        { name: "Title", label: "Title", placeholder: "Title" },
        { name: "Journal", label: "Journal", placeholder: "Journal" },
        { name: "Year", label: "Year", placeholder: "Year" },
        { name: "Volume", label: "Volume", placeholder: "Volume" },
        { name: "Page", label: "Page", placeholder: "Page" },
    ],
    awardAndScholarship: [
        { name: "Title", label: "Title", placeholder: "Title" },
        { name: "Organization", label: "Organization", placeholder: "Organization" },
        { name: "Year", label: "Year", placeholder: "Year" },
    ],
    experience: [
        { name: "Designation", label: "Designation", placeholder: "Designation" },
        { name: "Organization", label: "Organization", placeholder: "Organization" },
        { name: "Duration", label: "Duration", placeholder: "Duration" },
    ]
};

const formType = {
    academic: "academicinfo",
    training: "traininginfo",
    teaching: "teachinginfo",
    publication: "publicationinfo",
    awardAndScholarship: "awardscholarshipinfo",
    experience: "experienceinfo"
}

const OtherInformationForm = ({ data, type, onClose }) => {
    const sectionRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        ;[...formRef.current].forEach((input) => {
            if(input.name !== "submit" && data[input.name]){
                input.value = data[input.name];
            }
        });
    }, [data])

    const checkClickEvent = (e) => {
        if(e.target === sectionRef.current){
            onClose("generalInfo")
        }
    }

    useEffect(() => {
        if(sectionRef.current){
            let element = sectionRef.current
            element.addEventListener('click', checkClickEvent);
            return () => {
                element.removeEventListener('click', checkClickEvent);
            };
        }
    }, [sectionRef.current]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        let response = {};
        response = await updateOtherInfo(formType[type], data.id, formRef);
        response.status && onClose("otherInfo");
    }

    const closeForm = (e) => {
        e.preventDefault();
        onClose("otherInfo")
    }

    return (
        <>
            <section className="addFormArea" ref={sectionRef}>
                <div className="popUp contentArea">
                    <h3 className="title">{`Update ${type} info`}</h3>
                    <form ref={formRef} onSubmit={handleFormSubmit}>
                        {
                            form[type].map((item, index) => (
                                <>
                                    <InputBox
                                        key={index}
                                        data={item}
                                    />
                                </>
                            ))
                        }
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0 10px" }}>
                            <input type="submit" name="submit" value="Change" />
                            <button className="Button primaryButton warning" onClick={closeForm}>Cancel</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
export default OtherInformationForm;

const InputBox = ({ data }) => {
    return (
        <div className="inputBox">
            <label>{data.label}</label>
            <input type="text" name={data.name} placeholder={data.placeholder} />
        </div>
    )
}