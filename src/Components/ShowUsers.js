import React, { useState, useEffect } from "react";
import axios from 'axios';

const url = `https://randomuser.me/api/?page=4&results=60&seed=abc`

const ShowUsers = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function getUsers() {
            setLoading(true);
            const response = await axios.get(url);
            setLoading(false);
            setUser(response.data.results);

            // console.log(user)
        }

        getUsers()
    }, [])

    const perPage = 4;
    const skip = page * perPage - perPage;
    const pages = [...Array(10).keys()].map((num) => num + 1);


    return (
        <article>
            <h1>Altschool's Students Profile</h1>

            {loading ? (
                <p style={{ color: "blue", textAlign: "center", fontSize: "2rem", padding: "3rem 0" }}>Loading...</p>
            ) : (
                <section>
                    <ul>
                        {user.slice(skip, skip + perPage).map((data) => {
                            const id = `${data.id.value}`
                            const name = `${data.name.first} ${data.name.last}`;
                            const pic = `${data.picture.large}`;
                            const gender = `${data.gender}`;
                            const tel = `${data.cell}`;
                            const userName = `${data.login.username}`;

                            return (
                                <li key={id} className="card-container">
                                    <div className="card">
                                        <div>
                                            <img src={`${pic}`} alt="user pic" style={{ width: "10rem", height: "10rem", borderRadius: ".5rem" }} />
                                        </div>
                                        <div className="card-info">
                                            <h2 className="text-2xl font-bold">Student's Info</h2>
                                            <p><b>Name:</b> {name}</p>
                                            <p><b>Gender:</b> {gender}</p>
                                            <p><b>Telephone:</b> {tel}</p>
                                            <p><b>Slack Username:</b> {userName}</p>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="pagination">
                        <button
                            disabled={page <= 1}
                            onClick={() => setPage((page) => page - 1)}
                            className={page === 1 ? "disabled" : ""}
                        >Prev Page
                        </button>

                        {pages.map((num) => (
                            <button key={num} onClick={() => setPage((page) => num)}>
                                {num}
                            </button>
                        ))}

                        <button
                            disabled={page >= 10}
                            onClick={() => setPage((page) => page + 1)}
                            className={page >= 10 ? "disabled" : ""}
                        >Next Page</button>
                    </div>
                </section>
            )}
        </article>
    )
}

export default ShowUsers;
