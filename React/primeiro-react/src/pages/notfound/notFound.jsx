import Button from '../../components/button/button'
import Text from '../../components/text/text'
import Logo from '../../components/img/logo'
import imgLogo from '../../assets/img/logo.png'
import Imput from '../../components/textbox/input'
import { useParams } from 'react-router'

const NotFound=()=>{
    let styleTitulo={
        'color':'rgb(227, 82, 20)',
        textTransform:"uppercase",
    }
    
    return <Text text={"erro 404 - página não encontrada :/"} type={'h1'} style={styleTitulo}/>
}

export default NotFound