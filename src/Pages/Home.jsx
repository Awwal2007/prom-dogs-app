import Header from "../Component/header"
import Hero from "../Component/hero"
import ImageFlex from "../Component/imageFlex"
import ReviewSection from "../Component/ReviewSection"
import Section1 from "../Component/section1"
import Section2 from "../Component/section2"
import Section3 from "../Component/section3"
import Section4 from "../Component/section4"

const Home =()=>{
    return(
      <>
        <Hero />
        <ImageFlex />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <ReviewSection />
      </>
    )
}

export default Home