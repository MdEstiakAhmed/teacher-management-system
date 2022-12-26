import { useEffect, useRef } from "react";
import { signup } from "../../../api/auth";
import { createUser } from "../../../api/users";

export const UserForm = ({ onClose, type }) => {
    const formRef = useRef(null);

    useEffect(() => {
        if (formRef) {
            setData()
        }
    }, [formRef]);

    const setData = () => {
        const formData = new FormData(formRef.current);
        for (const key of formData.keys()) {
            console.log(key);
            // console.log(formRef.current.Phone.value);
        }
    }
    
    const handleAddUser = async(e) => {
        e.preventDefault();
        const formData = {}
        ;[...formRef.current].forEach(input => {
            if(input.type !== 'submit') {
                formData[input.name] = input.value;
            }
        })
        const response = await signup(formData);
        response.status && onClose();
    }
    return (
        <section className="addFormArea">
            <div className="popUp contentArea">
                <h3 className="title">Add Information</h3>
                <form onSubmit={handleAddUser} ref={formRef}>
                    <div className="inputBox">
                        <label>Username</label>
                        <input type="text" name="username" placeholder="Username" />
                    </div>
                    <div className="inputBox">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" />
                    </div>
                    <div className="inputBox">
                        <label>Password</label>
                        <input type="password" name="password1" placeholder="Password" />
                    </div>
                    <div className="inputBox">
                        <label>Confirm Password</label>
                        <input type="password" name="password2" placeholder="Confirm Password" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0 10px" }}>
                        <input type="submit" name="submit" value="Save" />
                        <button className="Button primaryButton warning" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </section>
    )
}