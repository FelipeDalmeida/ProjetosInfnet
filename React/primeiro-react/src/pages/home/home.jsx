import Button from '../../components/button/button'
import Text from '../../components/text/text'
import Logo from '../../components/img/logo'
import imgLogo from '../../assets/img/logo.png'
import Imput from '../../components/textbox/input'

const Home=()=>{
    let styleTitulo={
        'color':'rgb(227, 82, 20)',
        
    }
    return <Text text={'Página Home'} type={'h1'} style={styleTitulo}/>
}

export default Home