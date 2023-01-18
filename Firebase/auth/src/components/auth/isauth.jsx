import { Stack } from "@mui/material"
import { useEffect, useState } from "react"
import Text from "../text/text"
import Input from "../textfield/input"
import { getDBData,setDBData } from "../../services/db"

const IsAuth=({userID})=>{

    

    const [nome,setNome]=useState("")
    const [info,setInfo]=useState(null)
    
    const atualizaDB=(e)=>{
        setNome(e.target.value)
        setInfo({...info,name:e.target.value})
        setDBData(userID,{...info,name:e.target.value})
        
    }

    

    useEffect(()=>{

        let ignore = false;
        
        const carregaDB=async()=>{
            
            if (!ignore) await getDBData(userID,setInfo).catch((error)=>{if(error.response){return null}}); 
            console.log("carregaDB")
            console.log(`Info:${info}`)   
        }
        const carregaInfo=()=>{
            if(info){
                if (!ignore) setNome(info.name)
                console.log("carregaInfo")
            }
        }
        carregaInfo();
        if(info){ignore = true}
        
        carregaDB();
        
        
        console.log("useEffect")
       
    },[info])
  

    return <Stack
    direction="column"
    sx={{alignItems: "center",
    height: "calc(100vh - 60px)",
    justifyContent: "center"}}>
        <Input type="text" value={nome} onChange={atualizaDB} label={"Nome"}/>
        <Text text={"Você está logado."} type={"h2"}/>
        <Text text={"Parabéns"} style={{marginTop:0}}/>
        
    </Stack>
}

export default IsAuth