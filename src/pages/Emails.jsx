import { useEffect } from "react";
import { useOutletContext  } from "react-router-dom";
import { fetchEmails } from "../api/email";
import EmailForm from "../components/pages/email/EmailForm";
import EmailList from "../components/pages/email/EmailList";
import useFetch from "../hooks/useFetch";

const Emails = () => {
    const { data, isFetched, error, fetchData } = useFetch(fetchEmails, {});

    const [isModalShow, setIsModalShow, labelFilter] = useOutletContext();

    // useEffect(() => {
    //     console.log(data.Receiver.concat(data.Cc, data.Bcc).sort((a, b) => b.id - a.id));
    // }, [data]);

    const handleLabelFilter = (item) => {
        if (!labelFilter) return true;
        return (item.ReceiverLabel === labelFilter || item.CcLabel === labelFilter || item.BccLabel === labelFilter);
    }

    const handleModalClose = (type, isRefetch) => {
        isRefetch && fetchData();
        setIsModalShow(prev => ({ ...prev, [type]: false }))
    }

    return (
        <>
            {
                isFetched && data.status && (
                    <EmailList
                        data={
                            data.Receiver.concat(data.Cc, data.Bcc)
                            .sort((a, b) => b.id - a.id)
                            .filter(handleLabelFilter)
                        }
                        // data={data.data.filter(handleLabelFilter)}
                    />
                )
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