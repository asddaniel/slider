
import './App.css'
import { HeroSection } from './components/Herosection'
import Slider from './components/Slider'
const images = [
  location.origin+"/img/a.jpg",
  location.origin+"/img/b.jpg",
  location.origin+"/img/c.jpg",
  location.origin+"/img/d.jpg",
  location.origin+"/img/e.jpg",
  location.origin+"/img/f.jpg",
  location.origin+"/img/g.jpg",
  location.origin+"/img/h.jpg",
]

function App() {

  return (
    <>
      <HeroSection  />
      <div className="my-12 h-[70vh] lg:translate-x-[12.5vw] overflow-hidden rounded-lg shadow-2xl  lg:w-3/4 ">
        <Slider images={images} />
      </div>
    </>
  )
}

export default App
