import { useEffect, useRef, useState } from "react";
import { addEmail } from "../../../api/email";
import { fetchUsers } from "../../../api/users";
import useFetch from "../../../hooks/useFetch";
import usePseudoElementClick from "../../../hooks/usePseudoElementClick";

const EmailForm = ({ onClose }) => {
    const sectionRef = useRef(null);
    const formRef = useRef(null);

    const { data, isFetched, error } = useFetch(fetchUsers, {});

    const [showCC, setShowCC] = useState(false);
    const [showBCC, setShowBCC] = useState(false);



    usePseudoElementClick(sectionRef, () => onClose("addForm"));

    const closeForm = (e) => {
        e.preventDefault();
        onClose("addForm");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = {};
        response = await addEmail(formRef);
        response.status && onClose("addForm", true);
    }
    return (
        <>
            <div className="composeArea contentArea">
                <div className="headerArea">
                    <h3 className="title">Compose Email</h3>
                    <div className="iconArea">
                        {/* <button className="button"><svg data-v-4ab93e20="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line data-v-4ab93e20="" x1="5" y1="12" x2="19" y2="12"></line></svg></button> */}
                        <button className="button" onClick={closeForm}><svg data-v-4ab93e20="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line data-v-4ab93e20="" x1="18" y1="6" x2="6" y2="18"></line><line data-v-4ab93e20="" x1="6" y1="6" x2="18" y2="18"></line></svg></button>
                    </div>
                </div>
                <div className="composeBody">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="inputBox">
                            <label htmlFor="Receivere">To: </label>
                            <input type="text" name="Receivere" id="Receivere" />
                            <span className="cursor" onClick={() => setShowCC(prev => !prev)}>Cc</span>
                            <span className="cursor" onClick={() => setShowBCC(prev => !prev)}>Bcc</span>
                        </div>
                        {
                            showCC && (
                                <div className="inputBox">
                                    <label htmlFor="cc">Cc: </label>
                                    <input type="text" placeholder="" name="Cc" id="Cc" />
                                </div>
                            )
                        }
                        {
                            showBCC && (
                                <div className="inputBox">
                                    <label htmlFor="Bcc">Bcc: </label>
                                    <input type="text" name="Bcc" id="Bcc" placeholder="" />
                                </div>
                            )
                        }
                        <div className="inputBox">
                            <label htmlFor="Subject">Subject: </label>
                            <input type="text" name="Subject" id="Subject" placeholder="" />
                        </div>
                        <div className="inputBox">
                            <textarea id="Body" cols="30" rows="10" placeholder="body" name="Body"></textarea>
                        </div>
                        <button className="button primaryButton" type="submit">Send</button>
                    </form>
                </div>
            </div>

            {/* <section className="addFormArea" ref={sectionRef}>
                <div className="popUp contentArea">
                    <h3 className="title">Compose Email</h3>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="inputBox">
                            <label>Receiver</label>
                            <select name="Receiver" id="Receiver">
                                <UsersOptions
                                    users={data?.data || []}
                                    title="Select Receiver"
                                />
                            </select>
                        </div>
                        <div className="inputBox">
                            <label>CC</label>
                            <select name="CarbonCopy" id="CarbonCopy">
                                <UsersOptions
                                    users={data?.data || []}
                                    title="Select CC"
                                />
                            </select>
                        </div>
                        <div className="inputBox">
                            <label>BCC</label>
                            <select name="BlindCarbonCopy" id="BlindCarbonCopy">
                                <UsersOptions
                                    users={data?.data || []}
                                    title="Select BCC"
                                />
                            </select>
                        </div>
                        <div className="inputBox">
                            <label>Subject</label>
                            <input type="text" name="Subject" placeholder="Subject" />
                        </div>
                        <div className="inputBox">
                            <label>Body</label>
                            <textarea name="Body" placeholder="Body" />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0 10px" }}>
                            <input type="submit" name="submit" value="Change" />
                            <button className="Button primaryButton warning" onClick={closeForm}>Cancel</button>
                        </div>
                    </form>
                </div>
            </section> */}
        </>
    )
}
export default EmailForm;

const UsersOptions = ({ users, title }) => {
    return (
        <>
            <option value="">{title}</option>
            {
                users.map((user) => (
                    <option value={user.id} key={user.id}>{user.email}</option>
                ))
            }
        </>
    )
}