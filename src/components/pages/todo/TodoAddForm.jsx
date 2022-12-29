import { useRef } from "react";
import { addTodo } from "../../../api/todo";
import usePseudoElementClick from "../../../hooks/usePseudoElementClick";
import useGetContext from "../../../hooks/useGetContext";

const TodoAddForm = ({ onClose }) => {
    const sectionRef = useRef(null);
    const formRef = useRef(null);
    const {userState: {data: {id} = {}} = {}} = useGetContext();

    usePseudoElementClick(sectionRef, () => onClose("addForm"));

    const closeForm = (e) => {
        e.preventDefault();
        onClose("addForm", true);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = {};
        response = await addTodo(formRef);
        response.status && onClose("generalInfo");
    }
    return (
        <>
            <section className="addFormArea" ref={sectionRef}>
                <div className="popUp contentArea">
                    <h3 className="title">Add task</h3>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="hidden" name="Assignee" value={id} />
                        <div className="inputBox">
                            <label>Title</label>
                            <input type="text" name="Title" placeholder="Title" />
                        </div>
                        <div class="inputBox">
                            <label>Due Date</label>
                            <input type="date" name="DueDate" placeholder="Due Date" />
                        </div>
                        <div className="inputBox">
                            <label>Priority</label>
                            <select name="Priority" id="Priority">
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                                <option value="Urgent">Urgent</option>
                            </select>
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
export default TodoAddForm;