import Button from '../../components/button/button'
import Text from '../../components/text/text'
import Logo from '../../components/img/logo'
import imgLogo from '../../assets/img/logo.png'
import Imput from '../../components/textbox/input'
import { useParams } from 'react-router'

const Product=()=>{
    let styleTitulo={
        'color':'rgb(227, 82, 20)',
        
    }
    const params=useParams();
    let titulo=`Página do produto ${params.id}`
    return <Text text={titulo} type={'h1'} style={styleTitulo}/>
}

export default Product