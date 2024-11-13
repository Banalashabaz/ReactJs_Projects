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
function App() {
  return (
    <div className="App">
   <Navbar/>
   <Carousel></Carousel>
   <Search></Search>
   <Cards></Cards>
   <Places></Places>
   <Gallery></Gallery>
   <PhotoGallery></PhotoGallery>
   <Footer></Footer>
    </div>
  );
}

export default App;
