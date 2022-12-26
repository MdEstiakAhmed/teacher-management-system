import { useEffect, useRef } from "react";
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
            console.log(formRef.current.Phone.value);
        }
    }
    
    const handleAddUser = async(e) => {
        e.preventDefault();
        const response = await createUser(formRef.current);
        response.status && onClose();
    }
    return (
        <section className="addFormArea">
            <div className="popUp contentArea">
                <h3 className="title">Add Information</h3>
                <form onSubmit={handleAddUser} ref={formRef}>
                    <div className="inputBox">
                        <label>Employee ID</label>
                        <input type="text" name="EmployeeID" placeholder="Employee ID" />
                    </div>
                    <div className="inputBox">
                        <label>Phone</label>
                        <input type="text" name="Phone" placeholder="Phone" />
                    </div>
                    <div className="inputBox">
                        <label>Designation</label>
                        <input type="text" name="Designation" placeholder="Designation" />
                    </div>
                    <div className="inputBox">
                        <label>Department</label>
                        <input type="text" name="Department" placeholder="Department" />
                    </div>
                    <div className="inputBox">
                        <label>Gender</label>
                        <select name="Gender" id="Gender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="inputBox">
                        <label>Blood Group</label>
                        <select name="BloodGroup" id="BloodGroup">
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>
                    <div className="inputBox">
                        <label>Date of Birth</label>
                        <input type="date" name="DateOfBirth" placeholder="Date of Birth" />
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