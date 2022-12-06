import { useState, createContext } from "react";

export const UserData = createContext()

function Context({children}) {
    const [data, setUser] = useState({});
    console.log("in userdata: ")
    return (
        <UserData.Provider value={{data, setUser}}>
            {children}
        </UserData.Provider>
    )
}

export default Context;
