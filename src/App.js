
import './App.css';
import Footer from './components/Footer';
import { images } from './components/Images';
import SlideImages from './components/SlideImages';
import {foodImages} from './components/Food'
import FoodSlideShow from './components/FoodSlideShow';


function App() {
  return (
    <div className="container">
      <div>
       <h1 className="logo">Discover Armenia</h1>
       <h4 className="subTitle">(To Be Continued....)</h4>
      </div>
  
    {/* <SlideImages slideImg={images}/> */}
    <h2 className="subTitle">Armenian National Cuisine</h2>
    <FoodSlideShow slideImg={foodImages}/>
    <Footer />
    </div>
  );
}

export default App;
