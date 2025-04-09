import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from './auth';

const URL = "http://localhost:5000/api/auth/register";

const Registration = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const navigate = useNavigate();

    const { storeTokenInLs } = useAuth();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleBtn = () => {
        navigate("/login");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            if (response.ok) {
                const res_data = await response.json();
                console.log("response form server", res_data);
                storeTokenInLs(res_data.token);

                setUser({ username: "", email: "", phone: "", password: "" });
                navigate("/");
            }

        } catch (error) {
            console.log("Error during registration:", error);
        }

    };

    return (
        <>
            <div className="max-w-screen-xl mx-[auto] my-[0] ">
                {/* <h1 className='text-center'>Sign Up Form</h1> */}
                <div className="flex justify-around">
                    <div className="">
                        <img src="../../public/images/register.jpg" alt="" className='h-[500px] w-[500px]' />
                    </div>
                    <div className="flex flex-col gap-[20px] mt-[90px] w-[30%]">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col mt-[10px] gap-[5px]">
                                <label htmlFor="username" className='text-xl capitalize'>Username</label>
                                <input className='h-[40px] px-[10px] border-[2px] border-black rounded-[5px] ' type="username" name="username" placeholder="enter your username" required
                                    value={user.username}
                                    onChange={handleInput} />
                            </div>
                            <div className="flex flex-col mt-[10px] gap-[5px]">
                                <label htmlFor="email" className='text-xl capitalize'>Email</label>
                                <input className='h-[40px] px-[10px] border-[2px] border-black rounded-[5px] ' type="email" name="email" placeholder="enter your email" required
                                    value={user.email}
                                    onChange={handleInput} />
                            </div>
                            <div className="flex flex-col mt-[10px] gap-[5px]">
                                <label htmlFor="phone" className='text-xl capitalize'>Phone</label>
                                <input className='h-[40px] px-[10px] border-[2px] border-black rounded-[5px] ' type="number" name="phone" placeholder="enter your phone" required
                                    value={user.phone}
                                    onChange={handleInput} />
                            </div>
                            <div className="flex flex-col mt-[10px] gap-[5px]">
                                <label htmlFor="password" className='text-xl capitalize'>Password</label>
                                <input className='h-[40px] px-[10px] border-[2px] border-black rounded-[5px] ' type="password" name="password" placeholder="enter your password" required
                                    value={user.password}
                                    onChange={handleInput} />
                            </div>
                            <div className="pt-[20px]">
                                <button className='w-full h-[40px] bg-[#00712D] text-white rounded-[5px] text-xl'>Sign Up</button>
                            </div>
                            <div className="flex gap-[5px] pt-[10px]">
                                <p className='font-semibold text-gray-700'>Already Logged In?</p>
                                <button className='text-blue-700 font-semibold' onClick={handleBtn}>Login Here!</button>
                            </div>
                        </form>
                        {/* <div className="flex gap-[5px] ">
                            <p className='font-semibold text-gray-700'>Don't have an account?</p>
                            <button className='text-blue-700 font-semibold' onClick={handleSubmit}>Sign Up Free!</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration