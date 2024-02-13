import {createContext, useEffect, useState} from "react"

export const dataContext = createContext(null)

const DataProvider = ({children}) =>{

    const [account,setAccount] = useState({
        name:"",
        email:"",
        phone:""
    })
   
    useEffect(()=>{
        const data = window.localStorage.getItem("user")
        if(data!==null)setAccount(JSON.parse(data))
    },[])

    useEffect(()=>{
        window.localStorage.setItem("user",JSON.stringify(account))
    },[account])


    return (
        <dataContext.Provider value={{account,setAccount}}>
            {children}
        </dataContext.Provider>
    )


}


export default DataProvider;