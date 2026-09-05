import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa6"
import { aboutData } from "../../Data/Main/AboutData"

export default function About_Teams() {
      return (
            <section className=" w-full overflow-hidden py-12 md:py-20">
                  <main className=" mt-12 container mx-auto md:max-w-7xl sm:px-4 md:px-6 lg:px-8">
                        <div className=" flex flex-col space-y-7">

                              <div className=" flex flex-col space-y-3 items-center justify-center">
                                    <h3 data-aos="fade-up" data-aos-delay="600" className=" text-lg text-white capitalize font-bold">Creative Teams Members</h3>
                                    <p data-aos="fade-up" data-aos-delay="900" className=" text-gray-500 text-xs">What our customer say about us</p>
                              </div>

                              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                    {
                                          aboutData.map((item) => {
                                                const { imgUrl, id, name, skill } = item
                                                return (
                                                      <div
                                                            key={id}
                                                            data-aos="fade-up"
                                                            data-aos-delay="1200"
                                                            className=" w-full border border-gray-500 group hover:bg-purple-500 duration-300 transition-all overflow-hidden rounded-lg shadow-sm backdrop-blur-sm flex flex-col space-y-3"
                                                      >
                                                            {/* img */}
                                                            <div
                                                                  data-aos='zoom-in'
                                                                  data-aos-delay="1200"
                                                                  className=" w-full h-48 rounded-lg bg-white">
                                                                  <img src={imgUrl} alt="" className=" w-full h-full bg-center bg-cover" />
                                                            </div>
                                                            {/* skill + name */}
                                                            <div
                                                                  data-aos='zoom-in'
                                                                  data-aos-delay="1500"
                                                                  className=" flex flex-col items-center justify-center py-3 px-3 ">
                                                                  <h3 className=" text-lg text-white capitalize font-bold">{name}</h3>
                                                                  <span className=" text-xs text-gray-500 group-hover:text-white duration-300 transition-all">{skill}</span>
                                                            </div>
                                                            {/* social media */}
                                                            <div
                                                                  data-aos='fade-up'
                                                                  data-aos-delay="1800"
                                                                  className=" flex mx-auto items-center gap-3 pt-2 py-3 px-3 ">

                                                                  <button className=" w-9 h-9 p-1.5 text-xl flex items-center justify-center rounded-full border border-white/20 hover:bg-[#C49A45] hover:border-[#C49A45] duration-300 transition-all">
                                                                        <FaFacebook size={18} className=" text-white" />
                                                                  </button>

                                                                  <button className=" w-9 h-9 p-1.5 text-xl flex items-center justify-center rounded-full border border-white/20 hover:bg-[#C49A45] hover:border-[#C49A45] duration-300 transition-all">
                                                                        <FaYoutube size={18} className=" text-white" />
                                                                  </button>

                                                                  <button className=" w-9 h-9 p-1.5 text-xl flex items-center justify-center rounded-full border border-white/20 hover:bg-[#C49A45] hover:border-[#C49A45] duration-300 transition-all">
                                                                        <FaGithub size={18} className=" text-xl text-white" />
                                                                  </button>
                                                            </div>
                                                      </div>
                                                )
                                          })
                                    }
                              </div>
                        </div>
                  </main>
            </section>
      )
}