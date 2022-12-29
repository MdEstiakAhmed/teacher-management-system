import { useState } from "react";
import { fetchEmails } from "../api/email";
import EmailDetails from "../components/pages/email/EmailDetails";
import EmailFilter from "../components/pages/email/EmailFilter";
import EmailForm from "../components/pages/email/EmailForm";
import EmailList from "../components/pages/email/EmailList";
import useFetch from "../hooks/useFetch";

const Email = () => {
    const { data, isFetched, error, fetchData } = useFetch(fetchEmails, {});

    const [isModalShow, setIsModalShow] = useState({
        addForm: false
    });

    const [labelFilter, setLabelFilter] = useState("");

    const handleLabelFilter = (item) => {
        if (!labelFilter) return true;
        return item.Label === labelFilter;
    }

    const handleModalOpen = (type) => {
        setIsModalShow(prev => ({ ...prev, [type]: true }))
    }

    const handleModalClose = (type, isRefetch) => {
        isRefetch && fetchData();
        setIsModalShow(prev => ({ ...prev, [type]: false }))
    }

    return (
        <>
            {
                isModalShow.addForm && (
                    <EmailForm
                        onClose={handleModalClose}
                    />
                )
            }
            <div className="emailArea todoArea contentArea">
                <div className="leftSide">
                    <button className="button primaryButton" onClick={() => handleModalOpen("addForm")}>Compose</button>
                    <EmailFilter
                        labelFilter={labelFilter}
                        setLabelFilter={setLabelFilter}
                    />
                </div>
                <div className="rightSide">
                    {
                        isFetched && data.data?.length && (
                            <EmailList
                                data={data.data.filter(handleLabelFilter)}
                            />
                        )
                    }

                    {/* <EmailDetails /> */}
                </div>
            </div>
        </>
    );
}

export default Email;