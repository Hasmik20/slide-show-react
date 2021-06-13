import {useState, Fragment} from 'react'
import PopUpTable from './PopUptable'
import './slide.css'


const FoodSlideShow = ({slideImg}) => {
  const [currentImg, setCurrentImg] = useState(0)
  const [showPopUpTable, setShowPopUpTable ] = useState(false)
  
 const nextSlideHandler =()=>{
   setCurrentImg(currentImg === slideImg.length -1  ? 0 : currentImg + 1)
 }
 const prevSlideHandler = () =>{
  setCurrentImg(currentImg === 0 ? slideImg.length -1 : currentImg - 1)
 }

 const openTable = () =>{
   setShowPopUpTable(!showPopUpTable)
 }
 

  return ( 
    <Fragment>
       <section className="slide-container">
       <div className='arrow right' onClick = {nextSlideHandler}> &#62;</div>
       <div className=' arrow left' onClick ={prevSlideHandler}> &lt;</div>
        {slideImg.map((image,index)=>(
        <div className= {currentImg === index ? ' slide active' : "  active"} key={image.id}>
           { currentImg === index && (
              <div >
               
                <img src={image.image} alt={image.title} className={showPopUpTable ? 'image opacity' : "image"} />
               
                    <h2 className="img-title">{image.title}</h2>
                   <button className="btn" onClick={openTable}>Recipes</button>
                   {showPopUpTable && <PopUpTable title={image} />}
                
              </div>
            )}   
            
          
        </div>
      )
        )}

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
    </section>
   
  
  
    </Fragment>
   
   );
}
 
export default FoodSlideShow;