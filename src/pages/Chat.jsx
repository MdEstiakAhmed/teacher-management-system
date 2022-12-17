const Chat = () => {
    return (
        <>
            <div class="chatArea contentArea">
                <div class="leftSide">
                    <div class="header">
                        <div class="userThumb active">
                            <img src="images/user.png" alt="user" />
                        </div>
                        <div class="search">
                            <input type="text" placeholder="Search" id="search" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </div>
                    </div>
                    <div class="chatList">
                        <h3 class="title">Chats</h3>
                        <ul>
                            <li>
                                <div class="userThumb offline">
                                    <img src="images/user.png" alt="user" />
                                </div>
                                <div class="chatDetails">
                                    <h4 class="userName">John Doe</h4>
                                    <p class="lastMessage">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                                </div>
                                <div class="chatTime">
                                    <p class="time">12:30</p>
                                    <div class="unreadCount">2</div>
                                </div>
                            </li>
                            <li>
                                <div class="userThumb">
                                    <img src="images/user.png" alt="user" />
                                </div>
                                <div class="chatDetails">
                                    <h4 class="userName">John Doe</h4>
                                    <p class="lastMessage">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                                </div>
                                <div class="chatTime">
                                    <p class="time">12:30</p>
                                    <div class="unreadCount">2</div>
                                </div>
                            </li>
                            <li>
                                <div class="userThumb">
                                    <img src="images/user.png" alt="user" />
                                </div>
                                <div class="chatDetails">
                                    <h4 class="userName">John Doe</h4>
                                    <p class="lastMessage">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                                </div>
                                <div class="chatTime">
                                    <p class="time">12:30</p>
                                    <div class="unreadCount">2</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="contactList">
                        <h3 class="title">Contacts</h3>
                        <ul>
                            <li>
                                <div class="userThumb">
                                    <img src="images/user.png" alt="user" />
                                </div>
                                <div class="contactDetails">
                                    <h4 class="userName">John Doe</h4>
                                    <p class="designation">Admin</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="rightSide">
                    <div class="header">
                        <div class="userDetails">
                            <button class="backButton button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                            </button>
                            <div class="userThumb">
                                <img src="images/user.png" alt="user" />
                            </div>
                            <h4 class="userName">John Doe</h4>
                        </div>
                        <div class="Actions">
                            <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                            </div>
                            <div class="dropdown">
                                <ul>
                                    <li><a href="#">View Profile</a></li>
                                    <li><a href="#">Clear Chat</a></li>
                                    <li><a href="#">Delete Chat</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="body">
                        <div class="chat">
                            <div class="message sender">
                                <div class="thumb">
                                    <img src="images/user.png" alt="user" />
                                </div>
                                <div class="messageDetails">
                                    <p class="messageText">Hi</p>
                                    <p class="messageTime">12:30</p>
                                </div>
                            </div>
                            <div class="message reciver">
                                <div class="thumb">
                                    <img src="images/user.png" alt="user" />
                                </div>
                                <div class="messageDetails">
                                    <p class="messageText">Hello</p>
                                    <p class="messageTime">11:30</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                        <div class="inputBox">
                            <input type="text" placeholder="Type a message" id="message" />
                        </div>
                        <div class="sendButton">
                            <button class="button primaryButton"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13"></path><path d="M22 2L15 22L11 13L2 9L22 2Z"></path></svg></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chat;