import { useState } from "react";
import { fetchTodo } from "../api/todo";
import TodoAddForm from "../components/pages/todo/TodoAddForm";
import TodoEditForm from "../components/pages/todo/TodoEditForm";
import useFetch from "../hooks/useFetch";

const Todo = () => {
    const { data, isFetched, error, fetchData } = useFetch(fetchTodo, {});
    const [isModalShow, setIsModalShow] = useState({
        addForm: false,
        editForm: false,
    });
    const [selectedTodo, setSelectedTodo] = useState(null);

    const [priorityFilter, setPriorityFilter] = useState('');
    const [completedFilter, setCompletedFilter] = useState(false);
    const [search, setSearch] = useState('');

    const handleModalOpen = (type) => {
        setIsModalShow(prev => ({ ...prev, [type]: true }))
    }

    const handleModalClose = (type, isRefetch) => {
        if (isRefetch) fetchData();
        setIsModalShow(prev => ({ ...prev, [type]: false }))
    }

    const handlePriorityFilter = (item) => {
        if (!priorityFilter) return true;
        return item.Priority === priorityFilter;
    }

    const handleSearchFilter = (item) => {
        if (!search) return true;
        return item.Title.toLowerCase().includes(search.toLowerCase());
    }

    return (
        <>
            {
                isModalShow.addForm && (
                    <TodoAddForm
                        onClose={handleModalClose}
                    />
                )
            }
            {
                isModalShow.editForm && selectedTodo && (
                    <TodoEditForm
                        taskData={selectedTodo}
                        onClose={handleModalClose}
                    />
                )
            }
            <div className="todoArea contentArea">
                <div className="leftSide">
                    <button className="button primaryButton" onClick={() => handleModalOpen("addForm")}>Add Task</button>
                    <ul className="tabs">
                        <li className="active"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> My Task</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star font-medium-3 me-50"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Important</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check font-medium-3 me-50"><polyline points="20 6 9 17 4 12"></polyline></svg> Completed</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash font-medium-3 me-50"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Deleted</li>
                    </ul>
                    <div className="tags">
                        <h4 className="tagTitle">Tags</h4>
                        <ul className="tagList">
                            <li className={`all ${priorityFilter === 'All' && 'active'}`} onClick={() => setPriorityFilter("")}>All</li>
                            <li className={`low ${priorityFilter === 'Low' && 'active'}`} onClick={() => setPriorityFilter("Low")}>Low</li>
                            <li className={`medium ${priorityFilter === 'Medium' && 'active'}`} onClick={() => setPriorityFilter("Medium")}>Medium</li>
                            <li className={`high ${priorityFilter === 'High' && 'active'}`} onClick={() => setPriorityFilter("High")}>High</li>
                            <li className={`urgent ${priorityFilter === 'Urgent' && 'active'}`} onClick={() => setPriorityFilter("Urgent")}>Urgent</li>
                        </ul>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="header">
                        <button className="menuButton">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div className="search">
                            <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </div>
                    </div>
                    <ul className="taskList">
                        {
                            isFetched && data.data?.length && data.data.filter(handleSearchFilter).filter(handlePriorityFilter).map((item, index) => (
                                <TodoItem
                                    key={item.id}
                                    item={item}
                                    setSelectedTodo={setSelectedTodo}
                                    handleModalOpen={handleModalOpen}
                                />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Todo;

// urgent, high, medium, low

const TodoItem = ({ item, setSelectedTodo, handleModalOpen }) => {
    let { Title, Priority, DueDate } = item;

    const taskPriority = {
        Urgent: 'urgent',
        High: 'high',
        Medium: 'medium',
        Low: 'low'
    };

    const clickOnTask = () => {
        setSelectedTodo(item)
        handleModalOpen("editForm")
    }
    return (
        <li>
            <div className="titleArea">
                <input type="checkbox" name="" id="" />
                <button className="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                </button>
                <div className="taskTitle" onClick={clickOnTask}>{Title}</div>
            </div>
            <div className="taskDetails">
                <div
                    className={`taskTag ${taskPriority[Priority]}`}
                >
                    {Priority}
                </div>
                <div className="taskDate">{DueDate}</div>
                {/* <img src="images/user.png" alt="userName" className="userThumb" /> */}
            </div>
        </li>
    )
}