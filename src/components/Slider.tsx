import { useEffect, useRef, useState } from "react";





export default function Slider({images}:{images:string[]}){

    let isInitialized = false;
    const slider = useRef<HTMLElement>(null);
   

    const [currentIndex, setCurrentIndex] = useState(0);

   

 
    

      const calculateSize = ()=>{
        const { width, height } = (slider.current as HTMLElement).getBoundingClientRect();
        if (width < height) {
            (slider.current as HTMLElement).style.setProperty("--inner", `${height / 6}px`);
            (slider.current as HTMLElement).style.setProperty("--middle", `${height / 4}px`);
        } else {
            (slider.current as HTMLElement).style.setProperty("--inner", `${width / 6}px`);
            (slider.current as HTMLElement).style.setProperty("--middle", `${width / 2.7}px`);
        }
      }
useEffect(()=>{
if(isInitialized) return;
isInitialized = true;

window.addEventListener("resize", () => calculateSize());
calculateSize();

}, [])

    return <>
    <style>
        {``}
    </style>
    
    <div className="slider" ref={slider as any}>
	<button className="slider-button prev" id="prev" onClick={()=>{
        
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    }}>
		<img src={location.origin+"/arrow.svg"} alt="prev arrow" />
	</button>
	<button className="slider-button next" id="next" onClick={() => {
 
  setCurrentIndex((currentIndex + 1) % images.length);
}}>
		<img src={location.origin+"/arrow.svg"} alt="prev arrow" />
	</button>
    {images.map((image, index) => (
        <div key={index} className={`slide ${index === currentIndex ? "active" : ""}`}>
                <img src={image} className="inner" alt={`Image ${index + 1}`} />
                <img src={image} className="middle" alt={`Image ${index + 1}`} />
                <img src={image} className="outer" alt={`Image ${index + 1}`} />
        </div>
    ))}
</div>
    </>
}