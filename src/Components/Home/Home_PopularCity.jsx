
import Cities_1 from "../../assets/Image/Cities-1.webp"
import Cities_2 from "../../assets/Image/Cities-2.webp"
import Cities_3 from "../../assets/Image/Cities-3.webp"
import Cities_4 from "../../assets/Image/Cities-4.webp"
import Cities_5 from "../../assets/Image/Cities-5.webp"
import Cities_6 from "../../assets/Image/Cities-6.webp"
import Cities_7 from "../../assets/Image/Cities-7.webp"
import Cities_8 from "../../assets/Image/Cities-8.webp"
import Cities_9 from "../../assets/Image/Cities-9.webp"
import Cities_10 from "../../assets/Image/Cities-10.webp"
import Cities_11 from "../../assets/Image/Cities-11.webp"
import Cities_12 from "../../assets/Image/Cities-12.webp"





export default function Home_PopularCity() {
      // ==================================== homePopularData ====================================
      const homePopularData = [
            {
                  name: "San Francisco",
                  imgUrl: Cities_1,
                  position: "6 Open Position",
            },
            {
                  name: "Seattle",
                  imgUrl: Cities_2,
                  position: "4 Open Position",
            },
            {
                  name: "Austin",
                  imgUrl: Cities_3,
                  position: "4 Open Position",
            },
            {
                  name: "New York",
                  imgUrl: Cities_4,
                  position: "5 Open Position",
            },
            {
                  name: "Boston",
                  imgUrl: Cities_5,
                  position: "3 Open Position",
            },
            {
                  name: "San Jose",
                  imgUrl: Cities_6,
                  position: "6 Open Position",
            },
            {
                  name: "Raleigh, Nort",
                  imgUrl: Cities_7,
                  position: "5 Open Position",
            },
            {
                  name: "Washington",
                  imgUrl: Cities_8,
                  position: "4 Open Position",
            },
            {
                  name: "Denver",
                  imgUrl: Cities_9,
                  position: "3 Open Position",
            },
            {
                  name: "Chicago",
                  imgUrl: Cities_10,
                  position: "4 Open Position",
            },
            {
                  name: "Los Angeles",
                  imgUrl: Cities_11,
                  position: "6 Open Position",
            },
            {
                  name: "Atlanta",
                  imgUrl: Cities_12,
                  position: "5 Open Positions",
            },
      ]
      return (
            <section className=" w-full overflow-hidden py-12 md:py-20">
                  <main className=" mt-12 container mx-auto max-w-7xl sm:px-4 md:px-6 lg:px-8">
                        <div className=" flex flex-col space-y-7">
                              {/* popular cities */}
                              <div className=" flex flex-col space-y-3">
                                    <h3 className=" text-xl capitalize font-bold text-white">Popular Cities</h3>
                                    <p className=" text-xs text-gray-500">Thriving Hubs for Career Advancement and Exciting opportunities.</p>
                              </div>
                              {/* card */}
                              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                                    {
                                          homePopularData.map((item) => {
                                                const { name, imgUrl, position } = item
                                                return (
                                                      <div
                                                            data-aos="zoom-in-right"
                                                            data-aos-delay="1200"
                                                            key={name}
                                                            className=" w-full overflow-hidden flex flex-col space-y-3 px-3 py-3 rounded-lg shadow-md backdrop-blur-sm shadow-gray-500 bg-black/40">
                                                            {/* img */}
                                                            <div className=" w-full h-36 rounded-lg">
                                                                  <img src={imgUrl} alt="" className=" w-full h-full rounded-lg object-center object-cover" />
                                                            </div>
                                                            {/* name */}
                                                            <h3 className=" text-xl font-bold capitalize text-white">{NavigationPreloadManager}</h3>
                                                            {/* position */}
                                                            <span className=" text-xs capitalize text-gray-500">{position}</span>
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