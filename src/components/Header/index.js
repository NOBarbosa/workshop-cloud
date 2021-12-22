import './style.css';
import logoGdsc from '../../assets/gdsc.png';
// import cloud from '../../assets/cloud.png'
function Header(){
  return(
   <header className='header-component'>
     <div>
       <img className='header-logo' src={logoGdsc} alt="logo"/>
     </div>
     <div>
     <p className='header-text'>Workshop Cloud</p>
     {/* <img className='header-logo' src={cloud} alt="cloud"/> */}
     </div>
     <ul className='header-list'>
       <li><a href="#">conteudo</a></li>
       <li><a href="#">conteudo</a></li>
       <li><a href="#">conteudo</a></li>
     </ul>
   </header>
  )
}

export default Header;