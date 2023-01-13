import { useRef } from "react";
import usePseudoElementClick from "../../../hooks/usePseudoElementClick";
import { addEvent } from "../../../api/event";

const EventAddForm = ({ onClose }) => {
    const sectionRef = useRef(null);
    const formRef = useRef(null);

    usePseudoElementClick(sectionRef, () => onClose("addForm"));

    const closeForm = (e) => {
        e.preventDefault();
        onClose("addForm", true);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = {};
        response = await addEvent(formRef);
        response.status && onClose("addForm", true);
    }
    return (
        <>
            <section className="addFormArea" ref={sectionRef}>
                <div className="popUp contentArea">
                    <h3 className="title">Add Event</h3>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="inputBox">
                            <label>Title</label>
                            <input type="text" name="Title" placeholder="Title" />
                        </div>
                        <div className="inputBox">
                            <label>Label</label>
                            <input type="text" name="Label" placeholder="Label" />
                        </div>
                        <div class="inputBox">
                            <label>Start Date Time</label>
                            <input type="datetime-local" name="StartDateTime" placeholder="Start Date Time" />
                        </div>
                        <div class="inputBox">
                            <label>End Date Time</label>
                            <input type="datetime-local" name="EndDateTime" placeholder="End Date Time" />
                        </div>
                        <div className="inputBox">
                            <label>Whole Day</label>
                            <select name="WholeDay" id="WholeDay">
                                <option value="">Select</option>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </div>
                        <div className="inputBox">
                            <label>Event URL</label>
                            <input type="text" name="EventURL" placeholder="Event URL" />
                        </div>
                        <div className="inputBox">
                            <label>Location</label>
                            <input type="text" name="Location" placeholder="Location" />
                        </div>
                        <div class="inputBox">
                            <label>Description</label>
                            <textarea name="Description" placeholder="Description" />
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
export default EventAddForm;