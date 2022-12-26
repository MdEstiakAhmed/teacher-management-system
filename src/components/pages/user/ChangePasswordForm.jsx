import { useRef } from "react";
import { changePassword } from "../../../api/auth";

export const ChangePasswordForm = ({ onClose }) => {
    const formRef = useRef(null);
    
    const handleChangePassword = async(e) => {
        e.preventDefault();
        const response = await changePassword(formRef);
        response.status && onClose("changePassword");
    }
    const cancelChangePassword = (e) => {
        e.preventDefault();
        onClose("changePassword")
    }
    return (
        <section className="addFormArea">
            <div className="popUp contentArea">
                <h3 className="title">Change Password</h3>
                <form onSubmit={handleChangePassword} ref={formRef}>
                    <div className="inputBox">
                        <label>Old Password</label>
                        <input type="password" name="old_password" placeholder="**********" />
                    </div>
                    <div className="inputBox">
                        <label>New Password</label>
                        <input type="password" name="new_password1" placeholder="**********" />
                    </div>
                    <div className="inputBox">
                        <label>New Confirm Password</label>
                        <input type="password" name="new_password2" placeholder="**********" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0 10px" }}>
                        <input type="submit" name="submit" value="Change" />
                        <button className="Button primaryButton warning" onClick={cancelChangePassword}>Cancel</button>
                    </div>
                </form>
            </div>
        </section>
    )
}