import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Carousel from './components/carousel';
import Search from './components/Search';
import Cards from './components/Cards';
import Places from './components/places';
import Gallery from './components/Gallery';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';
import LastCard from './components/Last_card';


function App() {
  let card_align=[{"icon":"fa-solid fa-location-dot","place":"Pick Where","para":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam, beatae magni laborum numquam alias maxime"},{"icon":"fa-solid fa-shop","place":"Travel Shop","para":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam, beatae magni laborum numquam alias maxime"},{"icon":"fa-solid fa-plane fa-rotate-270","place":"Fly cheap","para":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam, beatae magni laborum numquam alias maxime"}]
  let places=[{"background":"imgone" ,"name":"Cancun,Mexico"},{"background":"imgtwo","name":"The Bahamas"},{"background":"imgthree","name":" Nova Scotia"}]

  return (
    <div className="App">
   <Navbar/>
   <Carousel></Carousel>
   <Search></Search>
  <div className='Card_align'>
   {/* <Cards icon="fa-solid fa-location-dot" place="Pick Where" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam, beatae magni laborum numquam alias maxime"></Cards>
   <Cards icon="fa-solid fa-shop" place="Travel Shop" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam, beatae magni laborum numquam alias maxime"></Cards>
  {/* <Cards icon="fa-solid fa-plane fa-rotate-270   " place="Fly Cheap " para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam, beatae magni laborum numquam alias maxime" ></Cards>  */}
 {/* <LastCard icon="fa-solid fa-plane fa-rotate-270 "  place="Fly Cheap " para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam, beatae magni laborum numquam alias maxime" ></LastCard> */}
   {
    card_align.map((data,index)=>{return (
      <>
       <Cards icon={data.icon} place={data.place} para={data.para}></Cards>
      </>
    )})
   }
    
  </div>
   <div >
   <h1>
          <span style={{ color: "#18b06c" }}>Popular </span>Places{" "}
        </h1>
  <div className='place_container'>
  {/* <Places background="imgone" name=" Cancun,Mexico"></Places>
   <Places background="imgtwo" name="  The Bahamas"></Places>
   <Places background="imgthree" name="  Nova Scotia"></Places> */}
 {places.map((data, index) => {return ( 
  <>
    <Places background={data.background} name={data.name}></Places> 
  </>
  )})}
  </div>
   </div>
   <Gallery></Gallery>
   <PhotoGallery></PhotoGallery>
   <Footer></Footer>
    </div>
  );
}

export default App;
