import { IoIosArrowRoundForward } from "react-icons/io";
import { featuredData } from "../../Data/Main/FeaturesData";


export default function Home_Featured() {

      return (
            <section className=" w-full overflow-hidden py-12 md:py-20">
                  <main className=" max-w-7xl mx-auto container sm:px-4 md:px-6 lg:px-8 ">
                        <div className=" flex flex-col space-y-3">
                              {/* =========================== Featured Job Offers =========================== */}
                              <div className=" flex flex-col md:flex-row justify-between">
                                    {/* Search by Category */}
                                    <div
                                          data-aos="fade-up"
                                          data-aos-delay="600"
                                          className=" flex flex-col"
                                    >
                                          <h3 className=" text-xl text-white capitalize font-bold">Featured Job Offers</h3>
                                          <span className=" text-gray-500 text-sm">explore exciting opportunities with prominent employers</span>
                                    </div>
                                    {/* All Categories */}
                                    <div>
                                          <button
                                                data-aos="fade-up"
                                                data-aos-delay="900"
                                                className="flex items-center py-1.5 px-4 rounded-lg border border-white "
                                          >
                                                <button className="capitalize text-white ">All Job Offers</button>
                                                <IoIosArrowRoundForward className=" text-white" size={23} />
                                          </button>
                                    </div>
                              </div>
                              {/* =========================== Card =========================== */}
                              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                    {
                                          featuredData.map((item) => {
                                                const { name, imgUrl, company, locationIcon, location, skills, date, price, desc, dateIcon } = item
                                                return (
                                                      <div
                                                            data-aos="fade-up"
                                                            data-aos-delay="1200"
                                                            className=" w-full overflow-hidden flex flex-col space-y-3 py-3 px-3 rounded-lg shadow-md backdrop-blur-2xl shadow-gray-500 hover:scale-95 group hover:bg-purple-500 duration-300 transition-all">

                                                            <div className=" flex items-center gap-3">
                                                                  {/* imgUrl */}
                                                                  <img src={imgUrl} alt="" className=" w-24 h-24 rounded-lg object-center object-cover" />
                                                                  {/* company */}
                                                                  <div className=" flex flex-col space-y-0.5">
                                                                        <span className=" text-xs text-white capitalize">{company}</span>
                                                                        {/* locationIcon + location */}
                                                                        <div className=" flex items-center">
                                                                              <span className=" text-xs text-gray-500 capitalize group-hover:text-white">{locationIcon}</span>
                                                                              <span className=" text-xs text-gray-500 capitalize group-hover:text-white">{location}</span>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                            {/* name */}
                                                            <h3 className=" tetx-xl font-bold text-white capitalize">{name}</h3>
                                                            {/* skills */}
                                                            <div>
                                                                  <button className=" py-0.5 px-4 rounded-full text-xs bg-white text-black">{skills}</button>
                                                            </div>
                                                            {/* dateIcon + date + price + desc */}
                                                            <div className=" flex items-center justify-between">
                                                                  <div className=" flex items-center justify-between">
                                                                        {/* dateIcon */}
                                                                        <span className=" text-xs text-gray-500 group-hover:text-white">{dateIcon}</span>
                                                                        {/* date */}
                                                                        <span className=" text-xs text-gray-500 group-hover:text-white">{date}</span>
                                                                  </div>
                                                                  <div className=" flex items-center justify-between">
                                                                        {/* price */}
                                                                        <span className=" tetx-sm font-bold text-white">{price}</span>
                                                                        {/* desc */}
                                                                        <span className=" text-xs text-gray-500 group-hover:text-white">{desc}</span>
                                                                  </div>
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