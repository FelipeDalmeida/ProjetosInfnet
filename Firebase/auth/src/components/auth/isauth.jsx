import { Stack } from "@mui/material"
import Text from "../text/text"


const IsAuth=()=>{


    return <Stack
    direction="column"
    sx={{alignItems: "center",
    height: "calc(100vh - 60px)",
    justifyContent: "center"}}>
        <Text text={"Você está logado."} type={"h2"}/>
        <Text text={"Parabéns"} style={{marginTop:0}}/>
        
    </Stack>
}

export default IsAuth