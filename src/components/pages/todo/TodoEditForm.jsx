import { useEffect, useRef, useState } from "react";
import { updateTodo } from "../../../api/todo";
import { fetchUsers } from "../../../api/users";
import useFetch from "../../../hooks/useFetch";
import useGetContext from "../../../hooks/useGetContext";
import usePseudoElementClick from "../../../hooks/usePseudoElementClick";

const TodoEditForm = ({ taskData, onClose }) => {
    const sectionRef = useRef(null);
    const formRef = useRef(null);

    const { userState: { data: { id } = {} } = {} } = useGetContext();

    const [users, setUsers] = useState([])
    const { data } = useFetch(fetchUsers, {});

    useEffect(() => {
        if (data?.data?.length) {
            setUsers(
                data.data.reduce((acc, item) => {
                    if (item.id !== id) {
                        return [...acc, { value: item.id, label: item.username }]
                    }
                    else {
                        return acc;
                    }
                }, [])
            )
        }
    }, [data]);

    usePseudoElementClick(sectionRef, () => onClose("editForm"));

    useEffect(() => {
        console.log(taskData);
        ;[...formRef.current].forEach((input) => {
            if (input.name !== "submit" && taskData[input.name]) {
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
        response.status && onClose("editForm", true);
    }
    return (
        <>
            <section className="addFormArea" ref={sectionRef}>
                <div className="popUp contentArea">
                    <h3 className="title">Add task</h3>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="inputBox">
                            <label>Title</label>
                            <input type="text" name="Title" placeholder="Title" />
                        </div>
                        <div className="inputBox">
                            <label>Assignee</label>
                            <select name="Assignee" id="Assignee">
                                <option value="">Select User</option>
                                {
                                    users.map(item => (
                                        <option value={item.value}>{item.label}</option>
                                    ))
                                }
                            </select>
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
                            <input type="submit" name="submit" value="Update" />
                            <button className="Button primaryButton warning" onClick={closeForm}>Cancel</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
export default TodoEditForm;