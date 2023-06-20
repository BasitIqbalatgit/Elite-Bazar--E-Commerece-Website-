import axios from "axios";


const url="http://localhost:5000";


export const addProduct = async (Data)=>{
    return await axios.post(`${url}/product`,Data)
}


export const getProduct = async () => {
    return await axios.get(`${url}/dashboard/db-item`);
  
  }

  // User Related API
   
  export const postUser = async (Data)=>{
    return await axios.post(`${url}/user`,Data);
  }












///Huzaifa's code delete it later

export const insertform = async (Data) => {
    return await axios.post(`${url}/ADMISSION`,Data);
  
  
  }
  
  //login
  
  export const insertlogin= async (data) => {
    return await axios.post(`${url}/LOGIN`,data);
  
  
  }
  //get data
  export const getlogin= async () => {
    return await axios.get(`${url}/ADMIN`);
  
  
  }
  export const deleteUsers = async (id) =>{
    return await axios.delete(`${url}/ADMIN/${id}`)
  }