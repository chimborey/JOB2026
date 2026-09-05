import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";


export default function Footer_Footer() {
      return (
            <section className=" w-full overflow-hidden py-4 border-t border-t-gray-500">
                  <main className=" mt-12 container mx-auto md:max-w-7xl sm:px-4 md:px-6 lg:px-8">
                        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
                              {/* logo */}
                              <div className=" flex flex-col space-y-3">
                                    <Link
                                          data-aos='zoom-in'
                                          data-aos-delay='600'
                                          to={'/'}
                                    >
                                          <h3 className=" text-white text-xl capitalize font-bold">Job <span className=" text-purple-900">2026</span></h3>
                                          <p className=" text-xs text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex earum impedit mollitia accusantium fuga asperiores tempore rem velit excepturi voluptatem corporis molestiae voluptates tenetur ad quod facilis minima quas voluptas, tempora sunt cum deleniti error vel. Nemo neque temporibus ratione, earum cupiditate, sit officia optio facere, illum dolorum excepturi!</p>
                                    </Link>
                                    <div className=" flex items-center gap-3">
                                          <Link
                                                data-aos='zoom-in-right'
                                                data-aos-delay='900'
                                                className=" bg-white py-1 px-1 rounded-full border border-gray-500 hover:bg-purple-900 duration-300 transition-all">
                                                <FaFacebook size={20} />
                                          </Link>
                                          <Link
                                                data-aos='zoom-in'
                                                data-aos-delay='1200'
                                                className=" bg-white py-1 px-1 rounded-full border border-gray-500 hover:bg-purple-900 duration-300 transition-all">
                                                <FaYoutube size={20} />
                                          </Link>
                                          <Link
                                                data-aos='zoom-in-left'
                                                data-aos-delay='1500'
                                                className=" bg-white py-1 px-1 rounded-full border border-gray-500 hover:bg-purple-900 duration-300 transition-all">
                                                <FaGithub size={20} />
                                          </Link>
                                    </div>
                              </div>
                              {/* about us */}
                              <div className=" flex flex-col space-y-3 text-center">
                                    <h3
                                          data-aos='zoom-in'
                                          data-aos-delay='600'
                                          className=" text-xl font-bold text-white capitalize">About Us</h3>
                                    <div className=" flex flex-col space-y-3">
                                          <Link
                                                data-aos='zoom-in-right'
                                                data-aos-delay='900'
                                                to={'/'} className=" text-xs text-gray-500 capitalize hover:text-white duration-300 transition-all">
                                                <h3>Home</h3>
                                          </Link>
                                          <Link
                                                data-aos='zoom-in-right'
                                                data-aos-delay='1200'
                                                to={'/about'} className=" text-xs text-gray-500 capitalize hover:text-white duration-300 transition-all">
                                                <h3>About</h3>
                                          </Link>
                                          <Link
                                                data-aos='zoom-in-right'
                                                data-aos-delay='1500'
                                                to={'/job'} className=" text-xs text-gray-500 capitalize hover:text-white duration-300 transition-all">
                                                <h3>Job</h3>
                                          </Link>
                                          <Link
                                                data-aos='zoom-in-right'
                                                data-aos-delay='1800'
                                                to={'/job:id'} className=" text-xs text-gray-500 capitalize hover:text-white duration-300 transition-all">
                                                <h3>Job Details</h3>
                                          </Link>
                                    </div>
                              </div>
                              {/* company */}
                              <div className=" flex flex-col space-y-3 justify-center items-center md:justify-start md:text-start">
                                    <h3
                                          data-aos='zoom-in'
                                          data-aos-delay='600'
                                          className=" text-xl font-bold text-white capitalize">About Us</h3>
                                    <div className=" flex flex-col text-center md:text-start space-y-3">
                                          <h3
                                                data-aos='zoom-in-left'
                                                data-aos-delay='900'
                                                className=" text-xs text-gray-500 capitalize hover:text-white duration-300 transition-all">Pricing</h3>
                                          <h3
                                                data-aos='zoom-in-left'
                                                data-aos-delay='1200'
                                                className=" text-xs text-gray-500 capitalize hover:text-white duration-300 transition-all">Contact</h3>
                                          <h3
                                                data-aos='zoom-in-left'
                                                data-aos-delay='1500'
                                                className=" text-xs text-gray-500 capitalize hover:text-white duration-300 transition-all">Company Details</h3>
                                          <h3
                                                data-aos='zoom-in-left'
                                                data-aos-delay='1800'
                                                className=" text-xs text-gray-500 capitalize hover:text-white duration-300 transition-all">Company</h3>
                                    </div>
                              </div>
                        </div>
                  </main>
                  <div className=" text-center mx-auto py-3 w-full overflow-hidden border-t mt-6 border-t-gray-500">
                        <span className=" text-center text-xs text-gray-500 capitalize">@2026 All Rights Reserved by <span className=" text-white font-bold">Job26</span></span>
                  </div>
            </section>
      )
}