
import SC_Icon6 from "../../assets/Image/SC-Icon6.svg"
import SC_Icon5 from "../../assets/Image/SC-Icon5.svg"
import SC_Icon7 from "../../assets/Image/SC-Icon7.svg"
import SC_Icon10 from "../../assets/Image/SC-Icon10.svg"
import SC_Icon8 from "../../assets/Image/SC-Icon8.svg"
import { IoIosArrowRoundForward } from "react-icons/io"

export default function Home_Category() {
     
      // ================================ cardCategory ================================
      const cardCategory = [
            {
                  name: "Graphic Designer",
                  position: "2 Open position",
                  imgUrl: SC_Icon10,
            },
            {
                  name: "Project Manager",
                  position: "2 Open position",
                  imgUrl: SC_Icon5,
            },
            {
                  name: "Marketing Specialist",
                  position: "2 Open position",
                  imgUrl: SC_Icon6,
            },
            {
                  name: "Financial Analytic",
                  position: "2 Open position",
                  imgUrl: SC_Icon7,
            },
            {
                  name: "Human Rescource",
                  position: "2 Open position",
                  imgUrl: SC_Icon8,
            },
      ]
      return (
            <section className=" w-full overflow-hidden py-12 md:py-20">
                  <main className=" mt-12 container max-w-7xl mx-auto sm:px-4 md:px-6 lg:px-8">
                        <div className=" flex flex-col space-y-3">

                              {/* =========================== Search by Category =========================== */}
                              <div className=" flex items-center justify-between">
                                    {/* Search by Category */}
                                    <div
                                          data-aos="fade-up"
                                          data-aos-delay="600"
                                          className=" flex flex-col"
                                    >
                                          <h3 className=" text-xl text-white capitalize font-bold">Search by Category</h3>
                                          <span className=" text-gray-500 text-sm">explore exciting opportunities in the digital world</span>
                                    </div>
                                    {/* All Categories */}
                                    <div
                                          data-aos="fade-up"
                                          data-aos-delay="900"
                                          className="flex items-center py-1.5 px-4 rounded-lg border border-white "
                                    >
                                          <button className="capitalize text-white">All Categories</button>
                                          <IoIosArrowRoundForward className=" text-white" size={23} />
                                    </div>
                              </div>
                              {/* =========================== Card =========================== */}
                              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                                    {
                                          cardCategory.map((item) => {
                                                const { name, position, imgUrl } = item
                                                return (
                                                      <div
                                                            data-aos="fade-up"
                                                            data-aos-delay="1200"
                                                            key={name}
                                                            className=" w-full  mx-auto text-center items-center capitalize overflow-hidden py-3 px-3 border rounded-lg shadow-md backdrop-blur-sm border-gray-500 flex flex-col space-y-3 transition-all duration-300 group"
                                                      >
                                                            {/* icon */}
                                                           <img src={imgUrl} alt="" className=" w-12 h-12 rounded-full object-contain group-hover:rotate-3 duration-300 transition-all"/>

                                                            <div className=" flex flex-col">
                                                                  {/* name */}
                                                                  <h3 className=" text-lg capitalize text-blue-500 group-hover:text-white transition-all duration-300">{name}</h3>
                                                                  {/* desc */}
                                                                  <p className="text-gray-400 text-[10px] group-hover:text-gray-400 transition-all duration-300">{position}</p>
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