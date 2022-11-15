import React from "react";
import { UserProvider, useUser } from "./UserContext";


const LoggedInUser = () => {
    const { user } = useUser()
    return (
        <div>
            <span>Logged In User: {user.name}</span>
        </div>
    )
}

const Header = () => {
    return (
        <header>
            <h1>Blog</h1>
            <LoggedInUser />
        </header>
    )
}

const Page = () => {
    const { user } = useUser()

    return (
        <div>
           <p>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
           </p>
           <p>Author:{user.name}</p>
        </div>
    )
}

const SimpleBlog = () => {
    return (
        <UserProvider>
            <Header />
            <Page />
        </UserProvider>
    )
}


export default SimpleBlog;