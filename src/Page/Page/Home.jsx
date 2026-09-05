import Home_Blog from "../../Components/Home/Home_Blog";
import Home_Category from "../../Components/Home/Home_Category";
import Home_Clients from "../../Components/Home/Home_Clients";
import Home_Discover from "../../Components/Home/Home_Discover";
import Home_Featured from "../../Components/Home/Home_Featured";
import Home_Hero from "../../Components/Home/Home_Hero";
import Newsletter from "../../Utils/Newsletter";
import Home_PopularCity from "../../Components/Home/Home_PopularCity";
import Home_Slick from "../../Components/Home/Home_Slick";
import Home_WhyChooseUS from "../../Components/Home/Home_WhyChooseUS";


export default function Home() {
      return (
            <>
                  {/* ============================== Home_Hero ============================== */}
                  <Home_Hero />
                  {/* ============================== Home_Category ============================== */}
                  <Home_Category />
                  {/* ============================== Home_Featured ============================== */}
                  <Home_Featured />
                  {/* ============================== Home_WhyChooseUS ============================== */}
                  <Home_WhyChooseUS />
                  {/* ============================== Home_Discover ============================== */}
                  <Home_Discover />
                  {/* ============================== Home_PopularCity ============================== */}
                  <Home_PopularCity />
                  {/* ============================== Home_Slick ============================== */}
                  <Home_Slick />
                  {/* ============================== Home_Blog ============================== */}
                  <Home_Blog />
                  {/* ============================== Home_Slick ============================== */}
                  <Home_Clients />
                  {/* ============================== Newsletter ============================== */}
                  <Newsletter />
            </>
      )
}