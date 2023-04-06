import React from "react";
import profilepic from "../assets/my_img.png";

function Profile(props) {
    return (
        <div className="flex flex-col items-center">
            <img
                className="rounded-full m-0 w-36 h-36 object-cover"
                src={profilepic}
                alt="profile picture"
            />
            <h1 className="text-4xl font-semibold m-5">Lil King</h1>
            <hr className="w-[300px] h-1 bg-gray-200 rounded-[20px] border-none mb-6" />
        </div>
    );
}

export default Profile;
