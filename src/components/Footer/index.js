import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Chip from '@mui/material/Chip';
import '../../App.css';
import './style.css';

function Footer(){
    const handleClick = () => {
        console.info('You clicked the Chip.');
      };

    return(
        <footer id='contatos' className='footer-component'>
            <div className='container-rigth'>
             <div>
                <a href='https://www.linkedin.com/in/beatriz-de-santana-da-cruz/' target='_blank' rel="noreferrer"><Chip onClick={handleClick} icon={<LinkedInIcon/>} label="Beatriz Santana"/></a>
             </div>
             <div >
                <a href='https://www.linkedin.com/in/jonathan-bisp/' target='_blank' rel="noreferrer"><Chip onClick={handleClick} icon={<LinkedInIcon/>} label="Jonathan Bispo"/></a>
             </div>
            <div >
                <a href='https://www.linkedin.com/in/julianecarvalho-/' target='_blank' rel="noreferrer"><Chip onClick={handleClick} icon={<LinkedInIcon/>} label="Juliane Carvalho"/></a>
            </div>
             <div>                
                <a href='https://www.linkedin.com/in/nobarbosa/' target='_blank' rel="noreferrer"><Chip onClick={handleClick} icon={<LinkedInIcon/>} label="Natália Oliveira"/></a>
             </div>   
            </div>
            <div >
                <a href='https://www.instagram.com/gdsc_ufba/' target='_blank' rel="noreferrer"><Chip onClick={handleClick} icon={<InstagramIcon />} label="GDSC UFBA"/></a>
            </div>
        </footer>
    )
}

export default Footer;