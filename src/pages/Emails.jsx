import { useOutletContext  } from "react-router-dom";
import { fetchEmails } from "../api/email";
import EmailForm from "../components/pages/email/EmailForm";
import EmailList from "../components/pages/email/EmailList";
import useFetch from "../hooks/useFetch";

const Emails = () => {
    const { data, isFetched, error, fetchData } = useFetch(fetchEmails, {});

    const [isModalShow, setIsModalShow, labelFilter] = useOutletContext();

    const handleLabelFilter = (item) => {
        if (!labelFilter) return true;
        return item.Label === labelFilter;
    }

    const handleModalClose = (type, isRefetch) => {
        isRefetch && fetchData();
        setIsModalShow(prev => ({ ...prev, [type]: false }))
    }

    return (
        <>
            {
                isFetched && data.data?.length && (
                    <EmailList
                        data={data.data.filter(handleLabelFilter)}
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