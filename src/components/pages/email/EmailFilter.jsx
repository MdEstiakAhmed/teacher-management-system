const EmailFilter = ({labelFilter, setLabelFilter}) => {
    return (
        <>
            <ul className="tabs">
                <li className="active"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Inbox</a></li>
                <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Sent</a></li>
                <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" tag="i" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 20h4L18.5 9.5a1.5 1.5 0 0 0-4-4L4 16v4m9.5-13.5l4 4"></path></svg> Draft</a></li>
                <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Starred</a></li>
                <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" tag="i" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="9"></circle><path d="M12 17v.01m0-3.51a1.5 1.5 0 0 1 1-1.5a2.6 2.6 0 1 0-3-4"></path></g></svg> Spam</a></li>
                <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Trash</a></li>
            </ul>
            <div className="labels">
                <h4 className="labelTitle">Labels</h4>
                <ul className="labelList">
                    <li className={`all ${labelFilter === "" && 'active'}`} onClick={() => setLabelFilter("")}>All</li>
                    <li className={`personal ${labelFilter === "personal" && 'active'}`} onClick={() => setLabelFilter("personal")}>Personal</li>
                    <li className={`important ${labelFilter === "important" && 'active'}`} onClick={() => setLabelFilter("important")}>Important</li>
                    <li className={`private ${labelFilter === "private" && 'active'}`} onClick={() => setLabelFilter("private")}>Private</li>
                    <li className={`company ${labelFilter === "company" && 'active'}`} onClick={() => setLabelFilter("company")}>Company</li>
                </ul>
            </div>
        </>
    )
}
export default EmailFilter;