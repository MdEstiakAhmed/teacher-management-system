import { useEffect, useRef } from "react";
import { addEmail } from "../../../api/email";
import { fetchUsers } from "../../../api/users";
import useFetch from "../../../hooks/useFetch";
import usePseudoElementClick from "../../../hooks/usePseudoElementClick";

const EmailForm = ({ onClose }) => {
    const sectionRef = useRef(null);
    const formRef = useRef(null);

    const { data, isFetched, error } = useFetch(fetchUsers, {});



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
            <section className="addFormArea" ref={sectionRef}>
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
                        <div class="inputBox">
                            <label>Body</label>
                            <textarea name="Body" placeholder="Body" />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0 10px" }}>
                            <input type="submit" name="submit" value="Change" />
                            <button className="Button primaryButton warning" onClick={closeForm}>Cancel</button>
                        </div>
                    </form>
                </div>
            </section>
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