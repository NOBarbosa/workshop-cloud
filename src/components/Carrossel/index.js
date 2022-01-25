import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';
import sliderData from './slidesData';
import './style.css';


const Carrossel = () =>{
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  const prevImg = () =>{
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  const nextImg = () =>{
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  return( 
    <section>
      <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR6ikMPDgwHXFiKZeMLLj5DZlSjnVtGCKjGXVbQJNfFcrZYwwHIbkKlMPgBneOv8ZP6UOAYuKgSTU55/embed?start=false&loop=false&delayms=3000" frameBorder="0" width="600" height="569" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    </section>
    // <section className='slider'> 
    //   <ArrowBackIcon  className='arrow' onClick ={prevImg}/>
    //     {sliderData.map((slide, i) =>{
    //       return( 
    //         <div key={i}>
    //           {i === current && <img className='image' src={slide.image} alt= {slide.alt} /> }
              
    //         </div>
    //     )})}
    //   <ArrowForwardIcon className='arrow' onClick ={nextImg}/>
    // </section>
  )
}

export default Carrossel;

