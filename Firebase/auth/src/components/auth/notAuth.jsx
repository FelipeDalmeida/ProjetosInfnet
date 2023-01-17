import { Stack } from "@mui/material"
import Text from "../text/text"


const NotAuth=()=>{


    return <Stack
    direction="column"
    sx={{alignItems: "center",
    height: "calc(100vh - 60px)",
    justifyContent: "center"}}>
        <Text text={"Você não está logado :/."} type={"h2"}/>
        <Text text={"Faça seu login"} style={{marginTop:0}}/>
        
    </Stack>
}

export default NotAuth