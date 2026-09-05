import { Link } from "react-router-dom";
import { recrutersData } from "../../Data/Main/RecrutersData";



export default function Recruters_Card() {
      return (
            <section className=" w-full overflow-hidden py-12 md:py-20">
                  <main className=" mt-12 container mx-auto md:max-w-7xl sm:px-4 md:px-6 lg:px-8">
                        <div className=" flex flex-col space-y-7">
                              <h3
                                    data-aos="zoom-in-left"
                                    data-aos-delay="600"
                                    className=" text-md capitalize font-bold text-white">Showing {recrutersData.length} Recruters</h3>
                              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                    {
                                          recrutersData.map((item) => {
                                                const { name, imgUrl, locationIcon, location, desc, job } = item
                                                return (
                                                      <Link
                                                            to={`/recruters/${item.id}`}
                                                            key={name}
                                                      >
                                                            <div
                                                                  data-aos="zoom-in-right"
                                                                  data-aos-delay="900"
                                                                  className=" w-full overflow-hidden py-3 px-3 rounded-lg border border-gray-500 shadow-sm backdrop-blur-sm hover:bg-purple-700 hover:shadow-md hover:backdrop-blur-md duration-300 transition-all flex flex-col space-y-3">

                                                                  <div className=" flex items-center gap-2">

                                                                        <img src={imgUrl} alt="" className=" w-12 h-12 rounded-lg object-center object-cover" />

                                                                        <div className=" flex flex-col space-y-1">
                                                                              <h3 className=" text-white capitalize text-md">{name}</h3>
                                                                              <div className=" flex items-center gap-1">
                                                                                    <span className=" text-xl text-gray-700">{locationIcon}</span>
                                                                                    <span className=" text-xs text-gray-700">{location}</span>
                                                                              </div>
                                                                        </div>
                                                                  </div>

                                                                  <div>
                                                                        <p className=" text-xs text-gray-700 leading-relaxed">{desc}</p>
                                                                        <span className=" text-white text-md font-bold">{job}</span>
                                                                  </div>
                                                            </div>
                                                      </Link>
                                                )
                                          })
                                    }
                              </div>
                        </div>
                  </main>
            </section>
      )
}