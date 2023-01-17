import { useEffect, useState } from 'react'
import {verifyUserConected} from '../../services/auth'
import IsAuth from '../../components/auth/isauth'
import NotAuth from '../../components/auth/notAuth'
const AuthPageTest=()=>{
    const [auth,setAuth]=useState(false)

    useEffect(()=>{verifyUserConected(setAuth)})

    return auth?<IsAuth/>:<NotAuth/>
}

export default AuthPageTest