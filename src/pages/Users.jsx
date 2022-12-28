import useFetch from "../hooks/useFetch";
import { fetchUsers } from "../api/users";
import { DeleteIcon, EditIcon, ViewIcon } from "../assets/icons/icons";
import { usersApiResponse } from "../assets/test-data/usersApiResponse";
import { UserForm } from "../components/pages/users/UserForm";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGetContext from "../hooks/useGetContext";



const Users = () => {
    const { data, isFetched, error } = useFetch(fetchUsers, {});
    const { userState } = useGetContext()
    const [isAddModalShow, setIsAddModalShow] = useState(false);

    const handleModalOpen = () => {
        setIsAddModalShow(true)
    }
    const handleModalClose = () => {
        setIsAddModalShow(false);
    }
    return (
        <>
            {
                isAddModalShow && (
                    <UserForm
                        onClose={handleModalClose}
                        type="add"
                    />
                )
            }
            <div className="userList contentArea">
                <div className="userListHeader">
                    <div className="userSearch">
                        <input type="text" placeholder="Search" />
                    </div>
                    {
                        userState.data.is_superuser && (
                            <div className="userListActions">
                                <button className="Button primaryButton" onClick={handleModalOpen}>Add User</button>
                            </div>
                        )
                    }
                </div>
                <div className="userListBody">
                    <table className="userListTable">
                        <thead>
                            <tr>
                                <th className="User">User</th>
                                <th className="Designation">Designation</th>
                                <th className="Status">Status</th>
                                <th className="Actions">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                // true && usersApiResponse.status && usersApiResponse.data.length && usersApiResponse.data.map((user) => (
                                isFetched && data.status && data.data.length && data.data.map((user) => (
                                    <UserRow
                                        key={user.id}
                                        id={user.id}
                                        name={`${user.first_name} ${user.last_name}`}
                                        email={user.email}
                                        designation={user.personal_info?.Designation || "N/A"}
                                        status={user.is_active}
                                    />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Users;

const UserRow = ({ id, name, email, designation, status }) => {
    return (
        <tr>
            <td className="User">
                <img src="images/user.png" alt="user" />
                <div className="userDetails">
                    <h4 className="userName">{name}</h4>
                    <p className="userEmail">{email}</p>
                </div>
            </td>
            <td className="Designation">{designation}</td>
            <td className={`Status ${status ? 'active' : 'deactive'}`}>
                <span>{status ? 'Active' : 'Inactive'}</span>
            </td>
            <td className="Actions">
                {/* <button className="Button secondaryButton">
                    <EditIcon />
                </button>
                <button className="Button secondaryButton">
                    <DeleteIcon />
                </button> */}
                <button className="Button secondaryButton">
                    <Link to={`/users/${id}`}>
                        <ViewIcon />
                    </Link>
                </button>
            </td>
        </tr>
    )
}

// deactive || active
