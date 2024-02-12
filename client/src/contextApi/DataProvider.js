
import {createContext, useState} from "react"

export const dataContext = createContext(null)


const DataProvider = ({children}) =>{

    const [account,setAccount] = useState({
        name:"",
        email:"",
        phone:""
    })

    return (
        <dataContext.Provider value={{account,setAccount}}>
            {children}
        </dataContext.Provider>
    )


}


export default DataProvider;