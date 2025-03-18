import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../context/useUserContext";
import "../../assets/css/allUsers/allUsers.css";
import UserRoleChange from "../../components/allUsers/userRoleChange";

const AllUsers = () => {
    const { users, boxShow, setBoxShow, fetchAllUser, } = useContext(userContext);

	const [userUpdate, setUserUpdate] = useState({

	})


	useEffect(() => {
		fetchAllUser()
	}, []);

	const updateHandeler = () => {
		setBoxShow(true)
	}



    return (
        <section className="m-[5px]">
            <table className="w-[100%]">
                <thead className="">
                    <tr>
                        <th className="py-[10px]">Sr.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Created Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className=" py-[10px]">
                    {users && users.users.map((el, index) => {
                        return (
                            <tr key={index} className="text-center">
                                <td className="py-[10px]">{index + 1}</td>
                                <td className="">{el.name}</td>
                                <td>{el.email}</td>
                                <td>{el.role}</td>
                                <td>March 2 2024</td>
                                <td>
                                    <button>
                                        <i onClick={()=> {updateHandeler(),setUserUpdate(el) }} className="fa-solid fa-pencil cursor-pointer bg-red-300 hover:bg-red-500 rounded-4xl p-[6px] text-white"></i>
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
			{
				boxShow === true ?  <UserRoleChange userUpdate={userUpdate} />  : ''
			}
        </section>
    );
};

export default AllUsers;



