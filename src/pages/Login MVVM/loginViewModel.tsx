import { useState } from "react";
import {LoginData, LoginModel} from "./loginModel";



export function useLoginViewModel(model: LoginModel){
  const [loginData, setLoginData] = useState<LoginData>(model.getLoginData());
  const [verifyPassword, setVerifyPassword] = useState<boolean>(false);

  const updateLoginData = (data: LoginData) => {
    setLoginData(data);
    model.setLoginData(data);
    setVerifyPassword(!model.isPasswordValid());
  };

  const requestLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    if(model.isPasswordValid()){
      await model.requestLogin();
    } else {
      setVerifyPassword(true);
    }
  };

  return {
    loginData,
    verifyPassword,
    updateLoginData,
    requestLogin,
  };

}