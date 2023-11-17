import { ReactNode, createContext, useContext, useEffect, useState } from "react"
import Cookies from 'js-cookie';
import { getUserInfo } from "../axios/auth";

export type IUser = {
  socialNr: String,
  roles: String[]
}

export type IAuthContext = {
  user: IUser|null
  setUser:(c: IUser) => void
}

const AuthContext = createContext<IAuthContext>({
  user: null,
  setUser: () => {},
})


function AuthContextProvider ({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUser|null>(null)

  useEffect(()=>{
    if(user != null)
      return;

    const token = Cookies.get("Authorization")
    if(token == null)
      return;

    getUserInfo().then(u => {
      setUser(u)
  })
  }, [user])

  return (
    <AuthContext.Provider value= {{user, setUser}}>
      {children}
    </AuthContext.Provider>
    )
  }
export default AuthContextProvider

export const useAuth = () => useContext(AuthContext)