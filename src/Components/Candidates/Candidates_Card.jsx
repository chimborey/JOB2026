import { Link } from "react-router-dom"
import { candidatesData } from "../../Data/Main/CandidateData"


export default function Candidates_Card() {
      return (
            <section className=" w-full overflow-hidden py-12 md:py-20">
                  <main className=" mt-12 container mx-auto md:max-w-7xl sm:px-4 md:px-6 lg:px-8">
                        <div className=" flex flex-col space-y-7">

                              <div
                                    data-aos='zoom-in-right'
                                    data-aos-delay='600'
                              >
                                    <h3 className=" text-lg capitalize font-bold text-white">Showing <span className=" text-blue-500">{candidatesData.length}</span> Candidates</h3>
                              </div>

                              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                    {
                                          candidatesData.map((item) => {
                                                const { id, imgUrl, skill, locationIcon, location, name } = item
                                                return (
                                                      <Link
                                                            to={`candidates/${item.id}`}
                                                            key={id}>
                                                            <div
                                                                  data-aos='fade-up'
                                                                  data-aos-delay='900'
                                                                  className=" w-full overflow-hidden py-3 hover:bg-purple-900 duration-300 transition-all px-3 rounded-lg flex flex-col justify-center items-center shadow-md backdrop-blur-md shadow-gray-500 border-gray-500"
                                                            >
                                                                  <img src={imgUrl} alt="" className=" w-12 h-12 rounded-lg" />
                                                                  <h3 className=" text-lg capitalize font-bold text-white">{name}</h3>
                                                                  <span className=" text-xs capitalize text-white/50">{skill}</span>
                                                                  <div className=" flex items-center">
                                                                        <span className=" text-md font-bold text-gray-500">{locationIcon}</span>
                                                                        <span className=" text-xs font-bold text-gray-500">{location}</span>

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