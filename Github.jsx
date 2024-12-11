import React, { useEffect, useState } from "react";

export default function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/TihamiDev').then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data)
        })
    },[])
    return (
    <div className="text-center m-4 bg-white p-8 rounded-lg shadow-md">
        {/* Profile Picture */}
        <img
            src={data.avatar_url}
            alt="GitHub Profile"
            className="w-40 h-40 rounded-full mx-auto mb-4 border-2 border-gray-200"
        />

        {/* Name */}
        <h1 className="text-4xl font-bold mb-2 text-gray-900">{data.name}</h1>
        <p className="text-base text-gray-600 mb-4">{data.bio}</p>

        {/* Followers and Repositories Count */}
        <div className="flex justify-center space-x-8 mb-4">
            <div>
                <p className="text-2xl font-semibold text-gray-800">{data.followers}</p>
                <p className="text-sm text-gray-500">Followers</p>
            </div>
            <div>
                <p className="text-2xl font-semibold text-gray-800">{data.public_repos}</p>
                <p className="text-sm text-gray-500">Repositories</p>
            </div>
        </div>

        {/* Additional Info */}
        <div className="text-sm text-gray-700 mb-6">
            <p className="mb-1">Location: {data.location || "Not Available"}</p>
            <p className="mb-1">Company: {data.company || "Not Available"}</p>
            <p>
                GitHub Profile:{" "}
                <a href={data.html_url} className="text-blue-600 hover:underline">
                    {data.html_url}
                </a>
            </p>
        </div>

        {/* Repository List */}
        <div className="text-left bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Repositories</h2>
            {/* Check if repositories exist */}
            {data.repositories ? (
                <ul>
                    {data.repositories.map((repo) => (
                        <li key={repo.id} className="mb-2">
                            <a
                                href={repo.html_url}
                                className="text-blue-500 hover:underline text-lg font-medium"
                            >
                                {repo.name}
                            </a>
                            <p className="text-sm text-gray-600">
                                {repo.description || "No description available"}
                            </p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No repositories available.</p> // Or loading spinner/message
            )}
        </div>
    </div>
);


}