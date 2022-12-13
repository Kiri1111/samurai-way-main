import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Myposts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

type ProfileProps = {
    profile: ProfileType
}
export const Profile = (props: ProfileProps) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer
            />
        </div>


    );
}