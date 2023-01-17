import { useState } from "react";
import { useNavigate } from "react-router-dom";
import placeholder from "../../assets/images/placeholder.jpg";

const EmailList = ({data}) => {
    const [search, setSearch] = useState("");

    const handleSearchFilter = (item) => {
        if (!search) return true;
        return item.Subject.toLowerCase().includes(search.toLowerCase());
    }
    return (
        <>
            <div className="emailList">
                <div className="header">
                    <div className="headerTop">
                        <button className="menuButton">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div className="search">
                            <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </div>
                    </div>
                    <div className="headerBottom">
                        <div className="buttonArea">
                            <input type="checkbox" name="" id="" />
                            <button className="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                            </button>
                            <button className="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <ul>
                    {
                        data.filter(handleSearchFilter).map(item => (
                            <EmailItem
                                key={item.id}
                                item={item}
                            />
                        ))
                    }
                </ul>
            </div>
        </>
    )
}
export default EmailList;

const EmailItem = ({item}) => {
    // company, private, personal, important
    const {Subject, Label, Date, Sender, id} = item;
    const navigate = useNavigate()
    return (
        <li onClick={() => navigate(`/emails/${id}`)}>
            <div className="buttonArea">
                <input type="checkbox" name="" id="" />
                <button className="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                </button>
            </div>
            <div className="emailDetail">
                <img src="images/user.png" alt="user" className="userThumb" />
                <div className="emailInfo">
                    <h4 className="emailSender">{Sender}</h4>
                    <p className="emailSubject">{Subject}</p>
                </div>
            </div>
            <div className="emailDate">
                <div className="labels">
                    <span className={Label}></span>
                </div>
                <p className="date">{Date}</p>
            </div>
        </li>
    )
}