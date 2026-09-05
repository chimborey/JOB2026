import About_Hero from "../../Components/About/About_Hero";
import About_Teams from "../../Components/About/About_Teams";
import Newsletter from "../../Utils/Newsletter";
import Home_Slick from "../../Components/Home/Home_Slick";
import Home_WhyChooseUS from "../../Components/Home/Home_WhyChooseUS";




export default function About() {
      return (
            <>
                  {/* ================================= About_Hero =================================*/}
                  <About_Hero />
                  {/* ================================= Home_WhyChooseUS =================================*/}
                  <Home_WhyChooseUS />
                  {/* ================================= Home_Slick =================================*/}
                  <Home_Slick />
                  {/* ================================= About_Teams =================================*/}
                  <About_Teams />
                  {/* ================================= Newsletter =================================*/}
                  <Newsletter />
            </>
      )
}