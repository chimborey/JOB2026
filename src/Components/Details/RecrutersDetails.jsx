import { Link, useParams } from "react-router-dom"
import { recrutersData } from "../../Data/Main/RecrutersData"
import { FaArrowLeft, FaFacebook, FaGithub, FaYoutube } from "react-icons/fa6";


export default function RecrutersDetails() {
      const { id } = useParams()
      const recrutersDetailsData = recrutersData.find((item) => item.id === Number(id))

      if (!recrutersDetailsData) {
            return (
                  <div className="w-full min-h-[60vh] flex flex-col items-center justify-center text-white bg-[#111111] space-y-4">
                        <h2
                              data-aos="zoom-in-left"
                              data-aos-delay="600"
                              className="text-2xl font-bold">Blog Post Not Found</h2>
                        <Link
                              data-aos="zoom-in-right"
                              data-aos-delay="600"
                              to="/" className="px-4 py-2 bg-[#C49A45] text-white rounded-lg text-sm">
                              Back to Home
                        </Link>
                  </div>
            );
      }
      return (
            <section className=" w-full overflow-hidden py-12">
                  <main className=" mt-12 container mx-auto md:max-w-7xl sm:px-4 md:px-6 lg:px-8">

                        <div className="mb-5 flex items-center justify-between bg-[#0F2942]/60 backdrop-blur-md border border-white/10 py-3 px-4 rounded-xl shadow-lg">
                              <Link
                                    to="/recruters"
                                    className="flex items-center gap-2 text-gray-300 hover:text-[#C49A45] transition-colors w-fit text-sm font-medium"
                              >
                                    <FaArrowLeft size={16} /> Back to Recruters
                              </Link>
                              <h3 className=" text-md capitalize text-white underline">Recruter Details</h3>
                        </div>

                        <div className=" flex flex-col space-y-7">

                              <div className=" relative">
                                    <img
                                          data-aos="zoom-in"
                                          data-aos-delay="600"
                                          src={recrutersDetailsData?.imgDetals} alt="" className=" w-full h-96 rounded-lg" />

                                    <div
                                          data-aos="zoom-in-right"
                                          data-aos-delay="900"
                                          className=" absolute -bottom-6 left-3"
                                    >
                                          <img src={recrutersDetailsData?.imgUrl} alt="" className=" w-12 h-12 rounded-lg object-center object-cover" />
                                    </div>
                              </div>

                              <div
                                    data-aos='zoom-in'
                                    data-aos-delay="1200"
                                    className=" flex items-center gap-1">
                                    <span className=" text-xl text-gray-700">{recrutersDetailsData?.locationIcon}</span>
                                    <span className=" text-xs text-gray-700">{recrutersDetailsData?.location}</span>
                              </div>

                              <h3
                                    data-aos='fade-up'
                                    data-aos-delay="1500"
                                    className=" text-lg text-white font-bold capitalize">
                                    {recrutersDetailsData?.name}
                              </h3>

                              <div className=" flex flex-col md:flex-row gap-3">

                                    <div className=" flex-[3] flex-col space-y-3 ">
                                          <div
                                                data-aos='zoom-in-left'
                                                data-aos-delay="1500"
                                                className=" flex items-center text-md text-white capitalize gap-2">
                                                <h5>
                                                      About:
                                                </h5>
                                                <h5 className=" text-sm text-blue-500 capitalize">( {recrutersDetailsData?.name} )</h5>
                                          </div>
                                          <p
                                                data-aos='zoom-in'
                                                data-aos-delay="1800"
                                                className=" text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, reprehenderit quae ab harum autem quisquam iure pariatur! Exercitationem, omnis, minima natus consequatur ratione ipsum nulla modi ipsam ipsa laboriosam autem magni fugiat doloremque nisi veritatis illum sequi. Incidunt unde excepturi quod dolor, totam adipisci. Id quas sapiente nostrum ipsa quis minima corporis vitae veritatis quidem molestias! Voluptatem ullam aliquam repudiandae totam veniam? Suscipit eaque soluta nostrum quisquam obcaecati cupiditate nihil voluptates, eos facilis, recusandae incidunt nesciunt esse ad quo excepturi. Vitae harum aspernatur explicabo voluptate quis eum quisquam labore praesentium veritatis ipsa fugit obcaecati iure sit, aperiam est veniam corporis numquam animi! Ad quasi totam quas magni velit molestiae numquam, praesentium odio exercitationem eveniet nostrum corporis nobis. Libero, eos repellat earum pariatur vero sapiente fuga, eius est labore eligendi temporibus provident quae. Saepe sapiente soluta, maxime quod rem, at consequatur tempora, ab ea placeat suscipit itaque est necessitatibus! Fugiat sint odit distinctio debitis accusantium omnis sit repudiandae odio voluptatum totam eum expedita, neque blanditiis exercitationem consequuntur, facere possimus enim fuga minima ex aut quae eveniet saepe error. Doloremque repellendus ipsa veritatis voluptatibus corporis minima! Voluptatibus modi optio adipisci vel inventore, provident placeat quidem dolor distinctio. Placeat similique quibusdam error. Omnis magni id adipisci magnam dolorem, facere laborum, iste maiores libero repellat quisquam modi harum! Iure corporis optio natus necessitatibus reprehenderit, sint nobis ipsa voluptatum praesentium, consectetur est dicta porro ipsum!</p>
                                          <div
                                                data-aos='zoom-in'
                                                data-aos-delay="2100"
                                                className=" flex flex-col text-md text-white capitalize gap-2">
                                                <h5>
                                                      Gallery:
                                                </h5>
                                                <div className=" grid grid-cols-3 gap-3">
                                                      <img src={recrutersDetailsData?.gallery1} alt="" className=" w-full h-36 hover:scale-95 duration-300 transition-all rounded-lg object-center object-cover" />
                                                      <img src={recrutersDetailsData?.gallery2} alt="" className=" w-full h-36 hover:scale-95 duration-300 transition-all rounded-lg object-center object-cover" />
                                                      <img src={recrutersDetailsData?.gallery3} alt="" className=" w-full h-36 hover:scale-95 duration-300 transition-all rounded-lg object-center object-cover" />
                                                      <img src={recrutersDetailsData?.gallery4} alt="" className=" w-full h-36 hover:scale-95 duration-300 transition-all rounded-lg object-center object-cover" />
                                                      <img src={recrutersDetailsData?.gallery5} alt="" className=" w-full h-36 hover:scale-95 duration-300 transition-all rounded-lg object-center object-cover" />
                                                      <img src={recrutersDetailsData?.gallery6} alt="" className=" w-full h-36 hover:scale-95 duration-300 transition-all rounded-lg object-center object-cover" />
                                                </div>
                                          </div>
                                    </div>

                                    <div
                                          data-aos='fade-left'
                                          data-aos-delay="1500"
                                          className=" flex-1 flex-col space-y-3 border border-gray-500 rounded-lg py-3 px-3 h-80 shadow-md backdrop-blur-md shadow-gray-500">

                                          <div
                                                data-aos='zoom-in-right'
                                                data-aos-delay="1800"
                                                className=" flex items-center gap-2">

                                                <img src={recrutersDetailsData?.imgUrl} alt="" className=" w-12 h-12 rounded-lg object-center object-cover" />

                                                <div className=" flex flex-col space-y-1">
                                                      <h3 className=" text-white capitalize text-md">{recrutersDetailsData?.name}</h3>
                                                      <div className=" flex items-center gap-1">
                                                            <span className=" text-xl text-gray-700">{recrutersDetailsData?.locationIcon}</span>
                                                            <span className=" text-xs text-gray-700">{recrutersDetailsData?.location}</span>
                                                      </div>
                                                </div>
                                          </div>

                                          <div
                                                data-aos='zoom-in-left'
                                                data-aos-delay="2100"
                                                className=" flex flex-col">
                                                <h5 className=" text-xs text-gray-700">Industry</h5>
                                                <span className=" text-sm text-white capitalize">{recrutersDetailsData?.skill}</span>
                                          </div>

                                          <div
                                                data-aos='zoom-in-right'
                                                data-aos-delay="2400"
                                                className=" flex flex-col">
                                                <h5 className=" text-xs text-gray-700">Company size</h5>
                                                <span className=" text-sm text-white capitalize">{recrutersDetailsData?.employees}</span>
                                          </div>

                                          <div
                                                data-aos='zoom-in-left'
                                                data-aos-delay="2800"
                                                className=" flex flex-col">
                                                <h5 className=" text-xs text-gray-700">Founded in</h5>
                                                <span className=" text-sm text-white capitalize">{recrutersDetailsData?.years}</span>
                                          </div>

                                          <div
                                                data-aos='zoom-in-right'
                                                data-aos-delay="2800"
                                                className=" flex flex-col">
                                                <h5 className=" text-xs text-gray-700">loaction</h5>
                                                <span className=" text-sm text-white capitalize">{recrutersDetailsData?.location}</span>
                                          </div>

                                          <div
                                                data-aos='fade-up'
                                                data-aos-delay="2800"
                                                className=" flex items-center gap-3">

                                                <button className=" w-9 h-9 p-1.5 text-2xl flex items-center justify-center rounded-full border border-gray-500 hover:bg-blue-500 duration-300 transition-all">
                                                      <FaFacebook size={25} className=" text-white" />
                                                </button>

                                                <button className=" w-9 h-9 p-1.5 text-2xl flex items-center justify-center rounded-full border border-gray-500 hover:bg-blue-500 duration-300 transition-all">
                                                      <FaYoutube size={25} className=" text-white" />
                                                </button>

                                                <button className=" w-9 h-9 p-1.5 text-2xl flex items-center justify-center rounded-full border border-gray-500 hover:bg-blue-500 duration-300 transition-all">
                                                      <FaGithub size={25} className=" text-white" />
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </main>
            </section>
      )
}