import { useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import EmailForm from "../components/pages/email/EmailForm";
import Draft from "./emails/Draft";
import Important from "./emails/Important";
import Inbox from "./emails/Inbox";
import Sent from "./emails/Sent";
import Trash from "./emails/Trash";

const Emails = () => {
    const { type } = useParams();
    const [isModalShow, setIsModalShow, labelFilter] = useOutletContext();

    const [isRefetch, setIsRefetch] = useState()

    const handleModalClose = (type, refetch) => {
        setIsRefetch(refetch)
        setIsModalShow(prev => ({ ...prev, [type]: false }))
    }

    return (
        <>
            {
                type === "inbox" ? (
                    <Inbox
                        labelFilter={labelFilter}
                        isRefetch={isRefetch}
                        setIsRefetch={setIsRefetch}
                    />
                ) :
                    type === "sent" ? (
                        <Sent
                            labelFilter={labelFilter}
                            isRefetch={isRefetch}
                            setIsRefetch={setIsRefetch}
                        />
                    ) :
                        type === "draft" ? (
                            <Draft
                                labelFilter={labelFilter}
                                isRefetch={isRefetch}
                                setIsRefetch={setIsRefetch}
                            />
                        ) :
                            type === "starred" ? (
                                <Important
                                    labelFilter={labelFilter}
                                    isRefetch={isRefetch}
                                    setIsRefetch={setIsRefetch}
                                />
                            ) :
                                type === "trash" ? (
                                    <Trash
                                        labelFilter={labelFilter}
                                        isRefetch={isRefetch}
                                        setIsRefetch={setIsRefetch}
                                    />
                                ) : ""
            }
            {
                isModalShow.addForm && (
                    <EmailForm
                        onClose={handleModalClose}
                    />
                )
            }
        </>
    );
}

export default Emails;