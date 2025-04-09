import React, { useState } from 'react'
import { toast } from "react-toastify";
// import { useAuth } from './auth';

const defaultContactFormData = {
    username: "",
    email: "",
    message: "",
};

const Contact = () => {

    const [contact, setContact] = useState(defaultContactFormData);
    // const [userData, setUserData] = useState(true);

    // if (userData && user) {
    //     setContact({
    //         username: user.username,
    //         email: user.email,
    //         message: "",
    //     });

    //     setUserData(false);

    // }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        });
    };

    // const { user } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/form/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            });
            if (response.ok) {
                setContact(defaultContactFormData);
                const data = await response.json();
                console.log(data);
                toast.success("message send successfully");
            }
        } catch (error) {
            alert("message not send");
            console.log(error);
        }
    };

    return (
        <>
            <div className="mt-[120px] w-full">
                <div className="h-auto md:h-[120px] justify-between px-[20px] md:px-[60px] bg-[#4444441e] flex flex-col md:flex-row items-start md:items-center py-4">
                    <p className="text-[22px] md:text-[25px] text-[#444]">Contact</p>
                    <p className="text-[18px] md:text-[20px] text-[#444]">Karnataka Aluminium / Contact</p>
                </div>

                <div className="px-[20px] md:px-[60px] py-[30px] md:py-[50px] text-[18px] md:text-[20px] text-[#444]">
                    <p>
                        Your dream home is never complete without tastefully done interiors. Be it styling cues from a friend’s
                        place you have visited or your own ideas about interiors, please pick up the phone and talk to us. We
                        will do it the way you have always wanted it. Alternately, if you would like to know more about Dhikalpa
                        Interiors do drop in a line. We will get in touch with you at the earliest.
                    </p>
                </div>

                <div className="px-[20px] md:px-[60px] flex flex-col lg:flex-row w-full gap-[40px] md:gap-[100px] justify-center items-center">
                    <div className="flex flex-col gap-[30px] items-center w-full lg:w-[50%]">
                        <div className="flex flex-col md:flex-row gap-[30px] items-center">
                            <div className="h-[220px] w-[90%] md:w-[350px] shadow-2xl rounded-[5px] flex items-center justify-center flex-col">
                                <h2 className='text-[24px] md:text-[30px]'>Email</h2>
                                <p className='text-[16px] md:text-[20px] text-center break-words'>karnatakaaluminium@gmail.com</p>
                            </div>
                            <div className="h-[220px] w-[90%] md:w-[350px] shadow-2xl rounded-[5px] flex items-center justify-center flex-col">
                                <h2 className='text-[24px] md:text-[30px]'>Phone</h2>
                                <p className='text-[16px] md:text-[20px] text-center break-words'>9876543210</p>
                            </div>
                        </div>
                        <div className="h-[220px] w-[90%] md:w-[350px] shadow-2xl rounded-[5px] flex items-center justify-center flex-col">
                            <h2 className='text-[24px] md:text-[30px]'>Address</h2>
                            <p className='text-[16px] md:text-[20px] text-center break-words'>Dharward, Karnatak</p>
                        </div>
                    </div>

                    <div className="w-full lg:w-[50%] flex justify-center">
                        <div className="flex flex-col gap-[20px] mt-[40px] md:mt-[90px] w-[90%] md:w-[70%]">
                            <p className='text-[#444] text-[18px] md:text-[20px]'>
                                Have questions or need assistance? Reach out to us, and we'll get back to you as soon as possible!
                            </p>
                            <form onSubmit={handleSubmit}>
                                <div className="flex gap-[20px] flex-col">
                                    <div className="flex flex-col mt-[10px] gap-[5px]">
                                        <label htmlFor="name" className='text-lg md:text-xl capitalize'>Username</label>
                                        <input className='h-[40px] px-[10px] border-[2px] capitalize border-black rounded-[5px]' type="text" name="username" placeholder="Enter your username" value={contact.username}
                                            onChange={handleInput} required />
                                    </div>
                                    <div className="flex flex-col mt-[10px] gap-[5px]">
                                        <label htmlFor="email" className='text-lg md:text-xl capitalize'>Email</label>
                                        <input className='h-[40px] px-[10px] border-[2px] border-black rounded-[5px]' type="email" name="email" placeholder="Enter your email" value={contact.email}
                                            onChange={handleInput} required />
                                    </div>
                                    <div className="flex flex-col mt-[10px] gap-[5px]">
                                        <label htmlFor="message" className='text-lg md:text-xl capitalize'>Message</label>
                                        <input className='h-[40px] px-[10px] border-[2px] border-black rounded-[5px]' type="text" name="message" placeholder="Enter your message" value={contact.message}
                                            onChange={handleInput} required />
                                    </div>
                                    <div className="pt-[10px]">
                                        <button className='w-full h-[40px] bg-[#00712D] text-white rounded-[5px] text-lg md:text-xl'>Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Contact