const User = () => {
    return (
        <>
        <div class="userList contentArea">
                    <div class="userListHeader">
                        <div class="userSearch">
                            <input type="text" placeholder="Search"/>
                        </div>
                        <div class="userListActions">
                            <button class="Button primaryButton">Add User</button>
                        </div>
                    </div>
                    <div class="userListBody">
                        <table class="userListTable">
                            <thead>
                                <tr>
                                    <th class="User">User</th>
                                    <th class="Designation">Designation</th>
                                    <th class="Status">Status</th>
                                    <th class="Actions">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="User">
                                        <img src="images/user.png" alt="user"/>
                                        <div class="userDetails">
                                            <h4 class="userName">John Doe</h4>
                                            <p class="userEmail">example@email.com</p>
                                        </div>
                                    </td>
                                    <td class="Designation">Admin</td>
                                    <td class="Status active">
                                        <span>Active</span>
                                    </td>
                                    <td class="Actions">
                                        <button class="Button secondaryButton">
                                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" tag="i" class="v-icon notranslate v-theme--light iconify iconify--tabler" width="1em" height="1em" viewBox="0 0 24 24">
                                                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                                    <path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"></path>
                                                    <path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3l8.385-8.415zM16 5l3 3"></path>
                                                </g>
                                            </svg>
                                        </button>
                                        <button class="Button secondaryButton">
                                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" tag="i" class="v-icon notranslate v-theme--light iconify iconify--tabler" width="1em" height="1em" viewBox="0 0 24 24">
                                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                                            </svg>
                                        </button>
                                        <button class="Button secondaryButton">
                                            <a href="userDetail.html">
                                                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" tag="i" class="v-icon notranslate v-theme--light v-icon--size-default nav-item-icon iconify iconify--tabler" width="1em" height="1em" viewBox="0 0 24 24">
                                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                                        <circle cx="12" cy="12" r="2"></circle>
                                                        <path d="M22 12c-2.667 4.667-6 7-10 7s-7.333-2.333-10-7c2.667-4.667 6-7 10-7s7.333 2.333 10 7"></path>
                                                    </g>
                                                </svg>
                                            </a>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="User">
                                        <img src="images/user.png" alt="user"/>
                                        <div class="userDetails">
                                            <h4 class="userName">John Doe</h4>
                                            <p class="userEmail">example@email.com</p>
                                        </div>
                                    </td>
                                    <td class="Designation">Admin</td>
                                    <td class="Status deactive">
                                        <span>Deactive</span>
                                    </td>
                                    <td class="Actions">
                                        {/* <!-- <button class="Button secondaryButton">
                                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" tag="i" class="v-icon notranslate v-theme--light iconify iconify--tabler" width="1em" height="1em" viewBox="0 0 24 24">
                                                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                                    <path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"></path>
                                                    <path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3l8.385-8.415zM16 5l3 3"></path>
                                                </g>
                                            </svg>
                                        </button>
                                        <button class="Button secondaryButton">
                                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" tag="i" class="v-icon notranslate v-theme--light iconify iconify--tabler" width="1em" height="1em" viewBox="0 0 24 24">
                                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                                            </svg>
                                        </button> --> */}
                                        <button class="Button secondaryButton" >
                                            <a href="userDetail.html">
                                                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" tag="i" class="v-icon notranslate v-theme--light v-icon--size-default nav-item-icon iconify iconify--tabler" width="1em" height="1em" viewBox="0 0 24 24">
                                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                                        <circle cx="12" cy="12" r="2"></circle>
                                                        <path d="M22 12c-2.667 4.667-6 7-10 7s-7.333-2.333-10-7c2.667-4.667 6-7 10-7s7.333 2.333 10 7"></path>
                                                    </g>
                                                </svg>
                                            </a>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        </>
    );
}

export default User;