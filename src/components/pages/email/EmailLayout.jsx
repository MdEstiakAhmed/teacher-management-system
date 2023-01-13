import { useState } from "react";
import { Outlet } from "react-router-dom";
import EmailFilter from "./EmailFilter";

const EmailLayout = () => {
    const [labelFilter, setLabelFilter] = useState("");

    const [isModalShow, setIsModalShow] = useState({
        addForm: false
    });

    const handleModalOpen = (type) => {
        setIsModalShow(prev => ({ ...prev, [type]: true }))
    }

    return (
        <>
            <div className="emailArea todoArea contentArea">
                <div className="leftSide">
                    <button className="button primaryButton" onClick={() => handleModalOpen("addForm")}>Compose</button>
                    <EmailFilter
                        labelFilter={labelFilter}
                        setLabelFilter={setLabelFilter}
                    />
                </div>
                <div className="rightSide">
                    <Outlet context={[isModalShow, setIsModalShow, labelFilter]} />
                </div>
            </div>
        </>
    )
}
export default EmailLayout;