import {useState} from 'react'

const PopUpTable = ({title}) => {
 
  return (  
      <div className="popUpTable">
        <ul className="ingredientContainer" >
          <p >Ingredients</p>
         {title.ingredient.map((val)=>(
           <li key={val.id}>{val}</li>
            ))}
        </ul>
         
        </div>
  );
}
 
export default PopUpTable;