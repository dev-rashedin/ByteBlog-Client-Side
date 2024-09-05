import axios from "axios"
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
   const interceptor = axiosSecure.interceptors.response.use((res) => {
      return res;

    }, (error) => {

      console.log('error from axios interceptor',error)
      
       if (error.response?.status === 401 || error.response?.status === 403) {
         //console.log('logout user');
         logOut();
         navigate('/login');
     }
     
     return Promise.reject(error)
    })

    return () => {
      axiosSecure.interceptors.response.eject(interceptor)
    }
    
  },[axiosSecure, logOut, navigate])

  

  return axiosSecure;
}
export default useAxiosSecure