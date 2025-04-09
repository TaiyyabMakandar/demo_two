import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from './auth';

const URL = "http://localhost:5000/api/auth/login";

const Login = () => {

    const [user, setUser] = useState({
        email: "",
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
    }

    const handleBtn = () => {
        navigate("/register");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);

        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            console.log("login form", response);
            // const res_data = await response.json();

            if (response.ok) {
                toast.success("Login successfull");
                const res_data = await response.json();
                // //stored the token in localhost ------------
                console.log("response from server", res_data);
                storeTokenInLs(res_data.token);

                setUser({ email: "", password: "" });
                navigate("/");
            } else {
                toast.error("invalid credentials");
                console.log("invalid credentials");
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <div className="max-w-screen-xl mx-[auto] my-[0]">
                <div className="flex justify-around">
                    <div className="">
                        <img src="../../public/images/login.jpg" alt="" className='h-[500px] w-[500px]' />
                    </div>
                    <div className="flex flex-col gap-[20px] mt-[90px] w-[30%]">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col mt-[10px] gap-[5px]">
                                <label htmlFor="email" className='text-xl capitalize'>Email</label>
                                <input className='h-[40px] px-[10px] border-[2px] border-black rounded-[5px] ' type="email" name="email" placeholder="enter your email" required
                                    value={user.email}
                                    onChange={handleInput} />
                            </div>
                            <div className="flex flex-col mt-[10px] gap-[5px]">
                                <label htmlFor="password" className='text-xl capitalize'>Password</label>
                                <input className='h-[40px] px-[10px] border-[2px] border-black rounded-[5px] ' type="password" name="password" placeholder="enter your password" required
                                    value={user.password}
                                    onChange={handleInput} />
                            </div>
                            <div className="pt-[20px]  ">
                                <button className='w-full h-[40px] bg-[green] text-white rounded-[5px] text-xl'>Sign In</button>
                            </div>
                            <div className="flex gap-[5px] pt-[10px]">
                                <p className='font-semibold text-gray-700'>Don't have an account?</p>
                                <button className='text-blue-700 font-semibold' onClick={handleBtn}>Sign Up Free!</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login