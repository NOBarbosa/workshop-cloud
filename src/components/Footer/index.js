import './style.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Chip from '@mui/material/Chip';

function Footer(){
    return(
        <footer id='contatos' className='footer-component'>
            <div className='container-rigth'>
             <div className='pointer'>                
                <a href='https://www.linkedin.com/in/nobarbosa/' target='_blank' rel="noreferrer"><Chip icon={<LinkedInIcon/>} label="Natália Oliveira"/></a>
             </div>   
             <div className='pointer'>
                <a href='https://www.linkedin.com/in/beatriz-de-santana-da-cruz/' target='_blank' rel="noreferrer"><Chip icon={<LinkedInIcon/>} label="Beatriz Santana"/></a>
             </div>
             <div className='pointer'>
                <a href='https://www.linkedin.com/in/jonathan-bisp/' target='_blank' rel="noreferrer"><Chip icon={<LinkedInIcon/>} label="Jonathan Bispo"/></a>
             </div>
            <div className='pointer'>
                <a href='https://www.linkedin.com/in/julianecarvalho-/' target='_blank' rel="noreferrer"><Chip icon={<LinkedInIcon/>} label="Juliane Carvalho"/></a>
            </div>
            </div>
            <div className='pointer'>
                <a href='https://www.instagram.com/gdsc_ufba/' target='_blank' rel="noreferrer"><Chip icon={<InstagramIcon />} label="GDSC UFBA"/></a>
            </div>
        </footer>
    )
}

export default Footer;