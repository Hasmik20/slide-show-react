import {useState} from 'react'
import './slide.css'


const SlideImages = ({slideImg}) => {
  const [currentImg, setCurrentImg] = useState(0)
 
 
 const nextSlideHandler =()=>{
   setCurrentImg(currentImg === slideImg.length -1  ? 0 : currentImg + 1)
 }
 const prevSlideHandler = () =>{
  setCurrentImg(currentImg === 0 ? slideImg.length -1 : currentImg - 1)
 }


  return ( 
    <div>
       <section className="slide-container">
       <div className='arrow right' onClick = {nextSlideHandler}> &#62;</div>
       <div className=' arrow left' onClick ={prevSlideHandler}> &lt;</div>
        {slideImg.map((image,index)=>(
        <div className= {currentImg === index ? ' slide active' : "  active"} key={image.id}>
           { currentImg === index && (
             <div >z
              <img src={image.image} alt='travel image' className='image' />
              <h2 className="img-title">{image.title}</h2>
          
              </div>
            )}    
        </div>
      )
      )}
       
    </section>
   
    <ul className="input-container">
    {slideImg.map((image,index)=>(
      <li key={image.id}>
          <input type="radio" name="slide" value={index} onClick={() =>{
            setCurrentImg(index)
          }} checked={currentImg === index} /> 
          
      </li> 
      
   )
   )}
    </ul>
  
    </div>
   
   );
}
 
export default SlideImages;