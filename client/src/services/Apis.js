import commonApiFucntion from "./ApiCall";

const API_URL = "http://localhost:4600"

export const registerApi = async(data)=>{
    return await commonApiFucntion( 'POST',`${API_URL}/register`,data);
}

export const loginApi = async(data)=>{
    return await commonApiFucntion( 'POST',`${API_URL}/login`,data);
}