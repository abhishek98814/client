import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [User, setUser] = useState(null)
    const [ready, setReady] = useState(false)
    // useEffect(() => {
    //     if (!User) {
    //         axios.get('http://localhost:8080/profile', { withCredentials: true }).then(({ data }) => {
    //             setUser(data);
    //             setReady(true);
    //         });
    //     }
    // }, [])
    return (
        <UserContext.Provider value={{ User, setUser, ready }}>
            {children}
        </UserContext.Provider>
    )
}
