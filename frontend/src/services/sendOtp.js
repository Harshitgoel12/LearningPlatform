import { setLoading } from "../slices/authslice"
import axios from "axios"
export const sendOtp =(email,navigate)=>{
    return async(dispatch)=>{
        dispatch(setLoading(true))
      try {
        //step 1 -> call the api the send the mail
        console.log(email);
            const data= await axios.post("http://localhost:8080/api/v1/send-otp",
              {email},
            {withCredentials:true});
             //step2 -> if something went wrong then throw an error
           if(data.data.success==false){
            throw new Error(data.data.message);
           }
        //step3 -> navigate to verify otp page
        navigate("/verify-otp")
        
      } catch (error) {
        
      }
      //setloading ko false mark karna hai 
      dispatch(setLoading(false));
    }
}