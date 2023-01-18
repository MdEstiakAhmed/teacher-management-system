import { useEffect } from "react";
import { fetchInboxEmails } from "../../api/email";
import EmailList from "../../components/pages/email/EmailList";
import useFetch from "../../hooks/useFetch";

const Inbox = ({ labelFilter, isRefetch, setIsRefetch }) => {
    const { data, isFetched, fetchData } = useFetch(fetchInboxEmails, {});

    useEffect(() => {
        if (isRefetch) {
            fetchData();
            setIsRefetch(false)
        }
    }, [isRefetch]);

    const handleLabelFilter = (item) => {
        if (!labelFilter) return true;
        return (item.ReceiverLabel === labelFilter || item.CcLabel === labelFilter || item.BccLabel === labelFilter);
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
                    />
                )
            }
        </>
    )
}
export default Inbox;