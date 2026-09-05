import Section_Banner from "../../assets/Image/Section-Banner.jpg"


export default function Candidates_Hero() {
      return (
            <section className=" w-full h-[50vh] py-12 md:py-20 relative">
                  <img src={Section_Banner} alt="" className=" w-full h-full rounded-lg bg-center bg-cover absolute inset-0" />
                  <div className=" absolute inset-0 bg-gray-900/80" />
                  <div className=" relative w-full h-full flex flex-col justify-center items-center space-y-1 z-10">
                        <h3
                              data-aos="zoom-in-right"
                              data-aos-delay="600"
                              className=" text-4xl font-bold capitalize text-white">Candidates</h3>
                        <p
                              data-aos="zoom-in-left"
                              data-aos-delay="900"
                              className=" text-xs text-gray-200">Work for the best companies in the world</p>
                  </div>
            </section>
      )
}