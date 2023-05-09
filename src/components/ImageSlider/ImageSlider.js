import { useState } from "react"
import { Icon } from "@iconify/react"

function ImageSlider({slides},{host}){
    const[currentIndex,setCurrentIndex]= useState(0)
    const goToPrevious = ()=>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? 0 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    
    const goToNext = ()=>{
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? slides.length - 1 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    return(
            (slides.length === 1)? 
            <div className="logementImg">
             <img src={slides} alt="logementImgaes"></img>
           </div> 
           :
           <div className="logementImg">
            <img src={slides[currentIndex]} alt='photoOf{host}'></img>
            <div className="arrowLeft" onClick={goToPrevious}><Icon icon="material-symbols:arrow-back-ios-new" color="white" height="82" /></div>
            <div className="arrowRight"onClick={goToNext}><Icon icon="material-symbols:arrow-back-ios-new" color="white" height="82" rotate={2} /></div>
            <p className="numberImg">{currentIndex + 1}/{slides.length}</p>
           </div>
           
    )

}

export default ImageSlider