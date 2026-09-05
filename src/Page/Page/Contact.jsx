import Contact_Communication from "../../Components/Contact/Contact_Communication";
import Contact_Hero from "../../Components/Contact/Contact_Hero";
import Contact_Location from "../../Components/Contact/Contact_Location";
import Newsletter from "../../Utils/Newsletter";


export default function Contact() {
      return (
            <>
                  {/*  ================================ Contact_Hero ========================= */}
                  <Contact_Hero />
                  {/*  ================================ Contact_Communication ========================= */}
                  <Contact_Communication />
                  {/*  ================================ Contact_Location ========================= */}
                  <Contact_Location />
                  {/*  ================================ Newsletter ========================= */}
                  <Newsletter />
            </>
      )
}