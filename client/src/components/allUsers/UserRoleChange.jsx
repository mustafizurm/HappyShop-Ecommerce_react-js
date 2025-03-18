import React, { useContext, useState } from "react";
import { ROLE } from "../../common";
import { userContext } from "../../context/useUserContext";
import { userRoleUpdateFunck } from "../../helper/allApi";

const UserRoleChange = ({userUpdate}) => {
		const { setBoxShow, fetchAllUser  } = useContext(userContext);
	
    const [userRole, setUserRole] = useState(userUpdate.role);
    const handelUserRole = (e) => {
        setUserRole(e.target.value);
    };

	const fetchUpdateUser = async (id) => {
		const response = await userRoleUpdateFunck(userRole, id);
		if(response.success === true){
			fetchAllUser()
			console.log(response.message)
		} else{
			console.log(response.message)
		}
	}
    return (
        <section className="absolute left-[50%] top-[50%] bg-white shadow-2xs customShadow px-[15px] py-[15px] min-w-[300px] transform translate-[-50%]">
			<i onClick={()=> {setBoxShow(false)}} className="fa-solid fa-x absolute right-[20px] cursor-pointer"></i>
            <div>
                <h2 className="mb-[8px] font-bold">Change User Role</h2>
                <div className="flex">
                    <p>Name: {userUpdate.name}</p>
                </div>
                <div className="mt-[7px flex]">
                    <p>Email:{userUpdate.email}</p>
                </div>
                <div className="mt-[19px] flex justify-between">
                    <p>Role:</p>
                    {/* <select
                        className="customBorder"
                        value={userRole}
                        onChange={(e) => {
                            handelUserRole(e);
                        }}
                    >
                        {Object.values(ROLE).map((el, index) => {
                            return <option key={index}>{el}</option>;
                        })}
                    </select> */}
					<select name="" id="" value={userRole} onChange={(e)=> handelUserRole(e)}>
						<option value="User">User</option>
						<option value="Admin">Admin</option>
					</select>
                </div>
                <button onClick={()=> {setBoxShow(false), fetchUpdateUser(userUpdate._id)}}  className="bg-red-500 m-auto block rounded-2xl py-[3px] px-[10px] cursor-pointer mt-[15px] text-white">
                    Change Role
                </button>
            </div>
        </section>
    );
};

export default UserRoleChange;
