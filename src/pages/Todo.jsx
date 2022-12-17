const Todo = () => {
    return (
        <div class="todoArea contentArea">
                    <div class="leftSide">
                        <button class="button primaryButton">Add Task</button>
                        <ul class="tabs">
                            <li class="active"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> My Task</a></li>
                            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star font-medium-3 me-50"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Important</a></li>
                            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check font-medium-3 me-50"><polyline points="20 6 9 17 4 12"></polyline></svg> Completed</a></li>
                            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash font-medium-3 me-50"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Deleted</a></li>
                        </ul>
                        <div class="tags">
                            <h4 class="tagTitle">Tags</h4>
                            <ul class="tagList">
                                <li class="low"><a href="#">Low</a></li>
                                <li class="medium"><a href="#">Medium</a></li>
                                <li class="high"><a href="#">High</a></li>
                                <li class="urgent"><a href="#">Urgent</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="rightSide">
                        <div class="header">
                            <button class="menuButton">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <div class="search">
                                <input type="text" placeholder="Search"/>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </div>
                        </div>
                        <ul class="taskList">
                            <li>
                                <div class="titleArea">
                                    <input type="checkbox" name="" id=""/>
                                    <button class="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                    </button>
                                    <div class="taskTitle">This is test Task</div>
                                </div>
                                <div class="taskDetails">
                                    <div class="taskTag urgent">Urgent</div>
                                    <div class="taskDate">Aug 08</div>
                                    <img src="images/user.png" alt="userName" class="userThumb"/>
                                </div>
                            </li>
                            <li>
                                <div class="titleArea">
                                    <input type="checkbox" name="" id=""/>
                                    <button class="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                    </button>
                                    <div class="taskTitle">This is test Task</div>
                                </div>
                                <div class="taskDetails">
                                    <div class="taskTag low">Low</div>
                                    <div class="taskDate">Aug 08</div>
                                    <img src="images/user.png" alt="userName" class="userThumb"/>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
    );
}

export default Todo;