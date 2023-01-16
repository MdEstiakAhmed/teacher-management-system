import { useEffect, useRef, useState } from "react";
import { updateTodo } from "../../../api/todo";
import { fetchUsers } from "../../../api/users";
import useFetch from "../../../hooks/useFetch";
import useGetContext from "../../../hooks/useGetContext";
import usePseudoElementClick from "../../../hooks/usePseudoElementClick";

const TodoEditForm = ({ taskData, onClose }) => {
    const sectionRef = useRef(null);
    const formRef = useRef(null);

    const { userState: { data: { id, is_superuser } = {} } = {} } = useGetContext();

    const [users, setUsers] = useState([])
    const { data } = useFetch(fetchUsers, {});

    const [access, setAccess] = useState("limited"); // Access: "all" or "limited"

    useEffect(() => {
        if (is_superuser || id === taskData.user) {
            setAccess("all");
        }
        else {
            setAccess("limited");
        }
    }, []);

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

    useEffect(() => {
        if (users.length && formRef.current["Assignee"].value) {
            formRef.current["Assignee"].value = taskData["Assignee"]
        }
    }, [users]);

    usePseudoElementClick(sectionRef, () => onClose("editForm"));

    useEffect(() => {
        ;[...formRef.current].forEach((input) => {
            if (input.name !== "submit" && taskData[input.name]) {
                if(input.type === "checkbox"){
                    input.checked = taskData[input.name];
                }
                else {
                    input.value = taskData[input.name];
                }
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
                        {
                            access === "all" ? (
                                <>
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
                                                    <option key={item.value} value={item.value}>{item.label}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="inputBox">
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


                                </>
                            ) : ""
                        }
                        <div className="inputBox" style={{ display: "flex" }}>
                            <input type="checkbox" name="Important" id="Important" />
                            <label htmlFor="Important">Important</label>
                        </div>
                        <div className="inputBox" style={{ display: "flex" }}>
                            <input type="checkbox" name="Completed" id="Completed" />
                            <label htmlFor="Completed">Completed</label>
                        </div>
                        <div className="inputBox">
                            <label>Description</label>
                            <textarea name="Description" placeholder="Description" />
                        </div>
                        {
                            access === "all" ? (
                                <>
                                    <div className="inputBox">
                                        <label>Comment</label>
                                        <textarea name="Comment" placeholder="Comment" />
                                    </div>
                                    <div className="inputBox" style={{ display: "flex" }}>
                                        <input type="checkbox" name="TaskCompleted" id="TaskCompleted" />
                                        <label htmlFor="TaskCompleted">Task Completed</label>
                                    </div>
                                </>
                            ) : ""
                        }
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