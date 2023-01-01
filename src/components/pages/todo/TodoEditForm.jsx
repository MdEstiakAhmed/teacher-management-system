import { useEffect, useRef } from "react";
import { updateTodo } from "../../../api/todo";
import usePseudoElementClick from "../../../hooks/usePseudoElementClick";

const TodoEditForm = ({ taskData, onClose }) => {
    const sectionRef = useRef(null);
    const formRef = useRef(null);

    usePseudoElementClick(sectionRef, () => onClose("editForm"));

    useEffect(() => {
        console.log(taskData);
        ;[...formRef.current].forEach((input) => {
            if(input.name !== "submit" && taskData[input.name]){
                input.value = taskData[input.name];
            }
        });
    }, [taskData])

    const closeForm = (e) => {
        e.preventDefault();
        onClose("editForm", true);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = {};
        response = await updateTodo(formRef, taskData.id);
        response.status && onClose("editForm");
    }
    return (
        <>
            <section className="addFormArea" ref={sectionRef}>
                <div className="popUp contentArea">
                    <h3 className="title">Add task</h3>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="hidden" name="Assignee" />
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
export default TodoEditForm;