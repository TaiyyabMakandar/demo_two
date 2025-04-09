import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../pages/auth";


export const AdminUpdate = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
    });

    const params = useParams();
    const { authorizationToken } = useAuth();

    const getSingleUserData = async () => {

        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            const data = await response.json();
            console.log(`users single data: ${data}`);
            setData(data);

            //ya likne se page refresh nahi hoga after deletion
            // if (response.ok) {
            //     getAllUsersData();
            // }

        } catch (error) {
            console.log(error);
        }


    };

    useEffect(() => {
        getSingleUserData();
    }, []);

    const handleInput = () => {

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken,
                },
                body: JSON.stringify(data),
            }
            );
            if (response.ok) {
                toast.success("Update Successfully");
            } else {
                toast.success("Not Update");
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">update user data</h1>
                </div>
                <div className="container grid grid-two-cols">
                    {/* <div className="contact-img">
                        <img src="/images/contact.svg" alt="contact" />
                    </div> */}

                    <section className="section-form">
                        <form>
                            <div>
                                <label htmlFor="username">username</label>
                                <input type="text" name="username" id="username" autoComplete="off"
                                    value={data.username}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email">email</label>
                                <input type="email" name="email" id="email" autoComplete="off"
                                    value={data.email}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phone">phone</label>
                                <input type="phone" name="phone" id="phone" autoComplete="off"
                                    value={data.phone}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <button type="submit">submit</button>
                            </div>

                        </form>
                    </section>
                </div>
            </section>
        </>
    );
}
