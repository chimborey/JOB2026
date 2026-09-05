import WC_Icon1 from "../../assets/Image/WC-Icon1.svg"
import WC_Icon2 from "../../assets/Image/WC-Icon2.svg"
import WC_Icon3 from "../../assets/Image/WC-Icon3.svg"
import WC_Icon4 from "../../assets/Image/WC-Icon4.svg"
import Why from "../../assets/Image/Why.png"

export default function Home_WhyChooseUS() {

      const homeWhyChooseUS = [
            {
                  name: "Job Opportunities",
                  desc: "We provide our customers with access to a vast abd diverse range of job opportunities across various inductries and sectors.",
                  imgUrl: WC_Icon1,
            },
            {
                  name: "Search and filtering",
                  desc: "Our powerful search and filtering options allow users to refine their job searches based on specific criteria such as locations.",
                  imgUrl: WC_Icon2,
            },
            {
                  name: "Resources and advice",
                  desc: "Resource and advice in addition to job listings, we offer a wealth of career resources and advice. Our blog, articles, and guides over a wide.",
                  imgUrl: WC_Icon3,
            },
            {
                  name: "Trust and Reliability",
                  desc: "We provide our customers with access to a vast and diverse range of job opportunities across varous industries and sectors.",
                  imgUrl: WC_Icon4,
            },
      ]
      return (
            <section className=" w-full overflow-hidden py-12 md:py-20">
                  <main className=" mt-12 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto container">
                        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                              {/* ============================== Image ============================== */}
                              <div
                                    data-aos="fade-up"
                                    data-aos-delay="600"
                                    className=" w-full  h-[400px] bg-white rounded-lg hover:scale-95 duration-300 transition-all"
                              >
                                    <img src={Why} alt="" className=" w-full h-full object-contain" />
                              </div>
                              {/* ============================== Why chose us ============================== */}
                              <div className=" flex flex-col space-y-7">
                                    {/* Why chose us */}
                                    <div className=" flex flex-col space-y-3">
                                          <h3
                                                data-aos="fade-up"
                                                data-aos-delay="600"
                                                className=" text-lg font-bold text-white"
                                          >
                                                Why chose us
                                          </h3>
                                          <p
                                                data-aos="fade-up"
                                                data-aos-delay="900"
                                                className=" text-xs text-gray-500"
                                          >
                                                At out job website we prioritize delivering an exceptional customer experience that sets us about from the compertition. Here are some resons why our customer love.
                                          </p>
                                    </div>
                                    {/* Card */}
                                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                                          {
                                                homeWhyChooseUS.map((item) => {
                                                      const { name, desc, imgUrl } = item
                                                      return (
                                                            <div
                                                                  data-aos="zoom-in"
                                                                  data-aos-delay="1200"
                                                                  key={name}
                                                                  className=" w-full overflow-hidden flex flex-col space-y-3 py-3 px-3 rounded-lg shadow-sm backdrop-blur-sm border border-gray-500 group hover:bg-purple-500 duration-300 transition-all"
                                                            >
                                                                  {/* image */}
                                                                  <div className="w-7 h-7 rounded-lg text-purple-500 duration-300 transition-all">
                                                                        <img
                                                                              src={imgUrl}
                                                                              alt=""
                                                                              className="w-full h-full object-center object-cover group-hover:brightness-0 group-hover:invert duration-300 transition-all"
                                                                        />
                                                                  </div>
                                                                  {/* name + description */}
                                                                  <div className=" flex flex-col space-y-2">
                                                                        <h3 className=" text-md capitalize text-white">{name}</h3>
                                                                        <p className=" text-gray-400 text-xs">{desc}</p>
                                                                  </div>
                                                            </div>
                                                      )
                                                })
                                          }
                                    </div>
                              </div>
                        </div>
                  </main>
            </section>
      )
}