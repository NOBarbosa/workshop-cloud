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
    <section className='slider'> 
      <ArrowBackIcon  className='arrow' onClick ={prevImg}/>
        {sliderData.map((slide, i) =>{
          return( 
            <div key={i}>
              {i === current && <img className='image' src={slide.image} alt= {slide.alt} /> }
              
            </div>
        )})}
      <ArrowForwardIcon className='arrow' onClick ={nextImg}/>
    </section>
  )
}

export default Carrossel;

