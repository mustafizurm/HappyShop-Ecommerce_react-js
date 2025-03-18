import React from "react";
import adminPic from "././../../assets/img/admin.png";
import { Link, Outlet } from "react-router-dom";
import "../../assets/css/admin/AdminPanel.css"

const Admin_panel = () => {
    return (
        <section className=" grid-cols-12 hidden lg:grid customStyle">
            <div className=" bg-white shadow-2xs col-span-5 md:col-span-3 lg:col-span-2 px-[25px]">
                <div className="flex flex-col justify-center items-center mt-[30px]">
                    <img src={adminPic} alt="" className="mb-[15px]" />
                    <h3 className="lg:text-[12px]">Mustafizur Rahman</h3>
                    <p>ADMIN</p>
                </div>
                <div className="grid gap-1 mt-[30px]">
                    <Link to={"allUsers"}>
                        <p className="hover:bg-gray-200 cursor-pointer p-[4px] text-[14px]">
                            All Users
                        </p>
                    </Link>
                    <Link to={"allProduct"}>
                        <p className="hover:bg-gray-200 cursor-pointer p-[4px] text-[14px]">
                            All Product
                        </p>
                    </Link>
                    <Link to={"createProduct"}>
                        <p className="hover:bg-gray-200 cursor-pointer p-[4px] text-[14px]">
                            Create Product
                        </p>
                    </Link>
                </div>
            </div>
            <div className="customMaxWidth overflow-y-scroll bg-gray-200 col-span-7 md:col-span-9 lg:col-span-10">
                <Outlet />
            </div>
        </section>
    );
};

export default Admin_panel;
