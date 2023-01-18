import { useEffect, useState } from 'react'
import {verifyUserConected} from '../../services/auth'
import IsAuth from '../../components/auth/isauth'
import NotAuth from '../../components/auth/notAuth'
const AuthPageTest=()=>{
    const [auth,setAuth]=useState(false)
    const [userID,setUserID]=useState("")



    useEffect(()=>{
        verifyUserConected(setAuth,setUserID)
        console.log(userID)},[auth,userID])
        

    return auth?<IsAuth userID={userID}/>:<NotAuth/>
}

export default AuthPageTest