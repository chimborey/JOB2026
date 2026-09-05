import banner from "../../assets/Image/banner.webp"

export default function Home_Discover() {
      return (
            <section className=" w-full overflow-hidden py-12 md:py-20">
                  <main
                        data-aos="zoom-in-right"
                        data-aos-delay="300"
                        style={{ backgroundImage: `url(${banner})` }}
                        className="w-full h-80 relative rounded-lg py-3 space-y-3 px-3 flex items-center justify-center flex-col bg-center bg-cover bg-no-repeat mt-12 container sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto"
                  >
                        <div className=" inset-0 absolute bg-blue-500/10" />
                        <div className="flex text-center flex-col space-y-3 z-10 relative">
                              <h3
                                    data-aos="zoom-in"
                                    data-aos-delay="600"
                                    className=" text-xl font-bold capitalize text-white">Discover Career Opportunities</h3>
                              <p
                                    data-aos="zoom-in"
                                    data-aos-delay="900"
                                    className=" text-center text-sm text-gray-500">We help candidates know whether they're for a job - and allow you to see their match <br /> potenial - giving a better pool of  qualified candidates to choose from.</p>
                              <div
                                    data-aos="zoom-in"
                                    data-aos-delay="1200"
                                    className=" mx-auto">
                                    <button className=" text-white font-bold text-sm capitalize py-1.5 px-4 rounded-lg bg-purple-500">All Jobs Offers</button>
                              </div>
                        </div>
                  </main>
            </section>
      )
}