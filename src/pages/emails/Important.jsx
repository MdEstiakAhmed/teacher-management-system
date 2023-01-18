import { useEffect, useState } from "react";
import { fetchInboxEmails, fetchSentEmails } from "../../api/email";
import EmailList from "../../components/pages/email/EmailList";
import useFetch from "../../hooks/useFetch";

const Important = ({ labelFilter, isRefetch, setIsRefetch }) => {
    const { data: inboxData, isFetched: isInboxFetched, fetchData: inboxFetchData } = useFetch(fetchInboxEmails, {});
    const { data: sentData, isFetched: isSentFetched, fetchData: sentFetchData } = useFetch(fetchSentEmails, {});

    const [allMails, setAllMails] = useState([]);

    useEffect(() => {
        let tempMails = [];
        if(isInboxFetched && inboxData.status){
            tempMails = tempMails.concat(inboxData.Receiver, inboxData.Cc, inboxData.Bcc);
        }
        if(isSentFetched && sentData.status){
            tempMails = tempMails.concat(sentData.data);
        }
        console.log(tempMails);
        setAllMails(tempMails);
    }, [inboxData, sentData]);

    useEffect(() => {
        if (isRefetch) {
            inboxFetchData();
            sentFetchData();
            setIsRefetch(false)
        }
    }, [isRefetch]);

    const handleImportantFilter = (item) => {
        return (item.ReceiverImportant === true || item.CcImportant === true || item.BccImportant === true || item.SenderImportant === true);
    }

    const handleLabelFilter = (item) => {
        if (!labelFilter) return true;
        return (item.ReceiverLabel === labelFilter || item.CcLabel === labelFilter || item.BccLabel === labelFilter || item.SenderLabel === labelFilter);
    }

    return (
        <>
            {
                allMails.length ? (
                    <EmailList
                        data={
                            allMails
                            .filter(handleImportantFilter)
                            .filter(handleLabelFilter)
                            .sort((a, b) => b.id - a.id)
                        }
                    />
                ) : ""
            }
        </>
    )
}
export default Important;