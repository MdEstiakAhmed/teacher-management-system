const Email = () => {
    return (
        <>
            <div class="emailArea todoArea contentArea">
                    <div class="leftSide">
                        <button class="button primaryButton">Compose</button>
                        <ul class="tabs">
                            <li class="active"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Inbox</a></li>
                            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Sent</a></li>
                            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" tag="i" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20h4L18.5 9.5a1.5 1.5 0 0 0-4-4L4 16v4m9.5-13.5l4 4"></path></svg> Draft</a></li>
                            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Starred</a></li>
                            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" tag="i" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="9"></circle><path d="M12 17v.01m0-3.51a1.5 1.5 0 0 1 1-1.5a2.6 2.6 0 1 0-3-4"></path></g></svg> Spam</a></li>
                            <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Trash</a></li>
                        </ul>
                        <div class="labels">
                            <h4 class="labelTitle">Labels</h4>
                            <ul class="labelList">
                                <li class="personal"><a href="#">Personal</a></li>
                                <li class="important"><a href="#">Important</a></li>
                                <li class="private"><a href="#">Private</a></li>
                                <li class="company"><a href="#">Company</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="rightSide">
                        <div class="emailList">
                            <div class="header">
                                <div class="headerTop">
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
                                <div class="headerBottom">
                                    <div class="buttonArea">
                                        <input type="checkbox" name="" id=""/>
                                        <button class="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                        </button>
                                        <button class="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <div class="buttonArea">
                                        <input type="checkbox" name="" id=""/>
                                        <button class="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                        </button>
                                    </div>
                                    <div class="emailDetail">
                                        <img src="images/user.png" alt="user" class="userThumb"/>
                                        <div class="emailInfo">
                                            <h4 class="emailSender">John Doe</h4>
                                            <p class="emailSubject">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                    <div class="emailDate">
                                        <div class="labels">
                                            <span class="company"></span>
                                            <span class="private"></span>
                                            <span class="personal"></span>
                                            <span class="important"></span>
                                        </div>
                                        <p class="date">Jul 12</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="buttonArea">
                                        <input type="checkbox" name="" id=""/>
                                        <button class="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                        </button>
                                    </div>
                                    <div class="emailDetail">
                                        <img src="images/user.png" alt="user" class="userThumb"/>
                                        <div class="emailInfo">
                                            <h4 class="emailSender">John Doe</h4>
                                            <p class="emailSubject">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                    <div class="emailDate">
                                        <div class="labels">
                                            <span class="personal"></span>
                                            <span class="private"></span>
                                            <span class="company"></span>
                                            <span class="important"></span>
                                        </div>
                                        <p class="date">Jul 12</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* <div class="emailDetailArea">
                            <div class="detailHeader">
                                <div class="detailHeaderLeft">
                                    <button class="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                    </button>
                                    <h4 class="emailSubject">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                                </div>
                                <div class="detailHeaderRight">
                                    <div class="emailActions">
                                        <button class="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                        </button>
                                        <div class="dropdown">
                                            <button class="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                            </button>
                                            <ul>
                                                <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Draft</a></li>
                                                <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg> Spam</a></li>
                                                <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Trash</a></li>
                                            </ul>
                                        </div>
                                        <div class="dropdown">
                                            <button class="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                                            </button>
                                            <ul class="labelList">
                                                <li><a href="#">Personal</a></li>
                                                <li><a href="#">Important</a></li>
                                                <li><a href="#">Private</a></li>
                                                <li><a href="#">Company</a></li>
                                            </ul>
                                        </div>
                                        <button class="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        </button>
                                        <button class="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                        </button>
                                        <div class="controls">
                                            <button class="button"><svg xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
                                            <button class="button"><svg xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="labelsArea">
                                <a href="#" class="personal">Personal</a>
                                <a href="#" class="important">Important</a>
                                <a href="#" class="private">Private</a>
                                <a href="#" class="company">Company</a>
                            </div>
                            <div class="emailDetail">
                                <div class="header">
                                    <div class="senderInfo">
                                        <img src="images/user.png" alt="user" class="thumb"/>
                                        <div class="details">
                                            <h3 class="name">John Doe</h3>
                                            <p class="email">example@email.com</p>
                                        </div>
                                    </div>
                                    <div class="emailDate">
                                        <p>Dec 10, 2022</p>
                                    </div>
                                </div>
                                <div class="emailBody">
                                    <p>Hi John,</p>
                                    <p>Thank you for your order. We will send you the product as soon as possible.</p>
                                    <p>Thanks</p>
                                    <p>John Doe</p>
                                </div>
                            </div>
                            <div class="emailDetail">
                                <div class="header">
                                    <div class="senderInfo">
                                        <img src="images/user.png" alt="user" class="thumb"/>
                                        <div class="details">
                                            <h3 class="name">John Doe</h3>
                                            <p class="email">example@email.com</p>
                                        </div>
                                    </div>
                                    <div class="emailDate">
                                        <p>Dec 10, 2022</p>
                                    </div>
                                </div>
                                <div class="emailBody">
                                    <p>Hi John,</p>
                                    <p>Thank you for your order. We will send you the product as soon as possible. Thank you for your order. We will send you the product as soon as possible. Thank you for your order. We will send you the product as soon as possible.</p>
                                    <p>Thanks</p>
                                    <p>John Doe</p>
                                </div>
                            </div>
                        </div>  */}
                    </div>
                </div>
        </>
    );
}

export default Email;