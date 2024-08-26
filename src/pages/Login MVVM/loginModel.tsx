export interface LoginData {
  email: string;
  password: string;
};

export class LoginModel {
  private loginData: LoginData = {email: '', password: ''};

  setLoginData(data: LoginData){
    this.loginData = data;
  }

  getLoginData(): LoginData{
    return this.loginData;
  }

  async requestLogin(): Promise<void>{
    console.log(`Envia ${this.loginData.email} e ${this.loginData.password} para o backend`)
  }

  isPasswordValid(): boolean {
    return this.loginData.password.length > 5;
  }

}