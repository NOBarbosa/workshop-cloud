import './style.css';
import logoGdsc from '../../assets/gdsc.png';
import cloud from '../../assets/cloud.png'
function Header(){
  return(
   <header className='header-component'>
     <div>
       <img className='header-logo' src={logoGdsc} alt="logo"/>
     </div>
     <div className='header-title'>
     <p className='header-text'>Workshop Cloud</p>
     <img className='header-logo-cloud' src={cloud} alt="cloud"/>
     </div>
     <ul className='header-list'>
       <li><a href="#">Introdução</a></li>
       <li><a href="https://github.com/NOBarbosa/workshop-cloud" target='_blank' rel="noreferrer">GitHub</a></li>
       <li><a href="#contatos">Contatos</a></li>
     </ul>
   </header>
  )
}

export default Header;