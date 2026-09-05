import FAQ_Hero from "../../Components/FAQ/FAQ_Hero";
import FAQ_Section from "../../Components/FAQ/FAQ_Section";
import Newsletter from "../../Utils/Newsletter";


export default function FAQ() {
      return (
            <>
                  {/* ======================================= FAQ_Hero =======================================*/}
                  <FAQ_Hero />
                  {/* ======================================= FAQ_Section =======================================*/}
                  <FAQ_Section />
                  {/* ======================================= Newsletter =======================================*/}
                  <Newsletter />
            </>
      )
}