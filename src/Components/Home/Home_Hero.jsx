import hero_image from "../../assets/Image/Hero.webp"
import { FaSearchengin } from "react-icons/fa6";

export default function Home_Hero() {
      return (
            <section className="w-full overflow-hidden py-12 md:py-20 relative min-h-[93vh] flex items-center">
                  <main className="mt-12 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                        {/* ======================================== Background Glow ========================================*/}
                        <div className="absolute top-0 right-0 bg-blue-900 rounded-lg w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[530px] lg:h-[530px] opacity-45 -translate-y-20 sm:-translate-y-32 lg:-translate-y-44 translate-x-16 sm:translate-x-10 lg:translate-x-0 rotate-12 blur-2xl lg:blur-3xl pointer-events-none" />

                        {/* ======================================== Grid Container ======================================== */}
                        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                              {/* --------------------------------- Text & Search Bar --------------------------------- */}
                              <div className="space-y-6 text-white z-10">
                                    <div
                                          data-aos="zoom-in-left"
                                          data-aos-delay="600"
                                          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium"
                                    >
                                          ✨ Discover Your Dream Career
                                    </div>
                                    <h1 data-aos="fade-right"
                                          data-aos-delay="900"
                                          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
                                    >
                                          Find The Best <span className="text-blue-500">Job Offers</span> Online
                                    </h1>
                                    <p
                                          data-aos="fade-up"
                                          data-aos-delay="1200"
                                          className="text-gray-400 text-sm sm:text-base max-w-lg leading-relaxed"
                                    >
                                          Unlock your professional potential with thousands of curated job opportunities tailored to your expertise. Whether you are stepping into software engineering, web development, or cutting-edge AI, we provide all the resources, company insights, and career support you need to land your dream job faster. Your future starts here—explore, apply, and grow with confidence.
                                    </p>

                                    {/* Search Bar and Responsive */}
                                    <div
                                          data-aos="zoom-in-up"
                                          data-aos-delay="900"
                                          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-gray-900/80 border border-gray-800 p-2 rounded-2xl max-w-xl backdrop-blur-md"
                                    >

                                          {/* Select Roles */}
                                          <div className="w-full sm:w-auto">
                                                <select
                                                      data-aos="fade-up"
                                                      data-aos-delay="1000"
                                                      name=""
                                                      id=""
                                                      className="w-full bg-gray-800/80 text-gray-200 text-sm rounded-xl px-4 py-3 outline-none border border-gray-700/50 focus:border-blue-500 transition-all cursor-pointer"
                                                >
                                                      <option value="">Select a role</option>
                                                      <option value="software-engineer">Software Engineer</option>
                                                      <option value="web-developer">Web Developer</option>
                                                      <option value="graphic-design">Graphic Design</option>
                                                      <option value="ai-engineer">AI Engineer</option>
                                                </select>
                                          </div>

                                          {/* Search Input & Button */}
                                          <form
                                                data-aos="fade-up"
                                                data-aos-delay="1800"
                                                action=""
                                                className="flex items-center flex-1 bg-gray-800/80 rounded-xl border border-gray-700/50 focus-within:border-blue-500 transition-all overflow-hidden px-3 py-1">
                                                <input
                                                      type="text"
                                                      name=""
                                                      id=""
                                                      placeholder="Search keyword..."
                                                      className="w-full bg-transparent text-sm text-white placeholder-gray-400 py-2 outline-none"
                                                />
                                                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-lg transition-all cursor-pointer flex items-center justify-center">
                                                      <FaSearchengin className="text-base" />
                                                </button>
                                          </form>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex items-center gap-4 pt-2">
                                          <button
                                                data-aos="zoom-in-right"
                                                data-aos-delay="2100"
                                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
                                          >
                                                Get Started
                                          </button>
                                          <button
                                                data-aos="zoom-in-left"
                                                data-aos-delay="2400"
                                                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white text-sm font-semibold rounded-xl transition-all cursor-pointer"
                                          >
                                                Learn More
                                          </button>
                                    </div>
                              </div>

                              {/* --------------------------------- Image ---------------------------------*/}
                              <div className="relative group flex justify-center lg:justify-end">
                                    <div
                                          data-aos="zoom-in"
                                          data-aos-delay="900"
                                          className="relative w-full max-w-[340px] sm:max-w-[380px] h-[420px] sm:h-[470px] rounded-2xl overflow-visible shadow-2xl">

                                          {/* image */}
                                          <div className="w-full h-full bg-blue-500 rounded-2xl overflow-hidden group hover:scale-95 duration-300 transition-all">
                                                <img
                                                      src={hero_image}
                                                      alt="Hero"
                                                      className="w-full h-full object-cover object-center group-hover:scale-110 duration-300 transition-all"
                                                />
                                          </div>

                                          {/* Floating Badge */}
                                          <div
                                                data-aos="zoom-in-left"
                                                data-aos-delay="1200"
                                                className="absolute flex flex-col space-y-1 -left-6 sm:-left-8 top-[10%] bg-white/95 backdrop-blur-md rounded-xl py-2 px-3.5 shadow-xl border border-gray-100 text-gray-800 z-20"
                                          >
                                                <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-blue-600">
                                                      <span className="text-2xl rotate-6 group-hover:rotate-0 duration-300 transition-all">25+</span>
                                                      <span className="text-xs text-gray-500 font-normal">job offers</span>
                                                </div>
                                                <div className="text-[11px] capitalize sm:text-xs font-semibold text-gray-700">
                                                      in software engineer
                                                </div>
                                          </div>

                                          {/* Floating Badge */}
                                          <div
                                                data-aos="zoom-in-left"
                                                data-aos-delay="1500"
                                                className="absolute flex flex-col space-y-1 -left-6 sm:-left-8 top-[58%] bg-white/95 backdrop-blur-md rounded-xl py-2 px-3.5 shadow-xl border border-gray-100 text-gray-800 z-20">
                                                <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-blue-600">
                                                      <span className="text-2xl rotate-6 group-hover:rotate-0 duration-300 transition-all">25+</span>
                                                      <span className="text-xs text-gray-500 font-normal">job offers</span>
                                                </div>
                                                <div className="text-[11px] capitalize sm:text-xs font-semibold text-gray-700">
                                                      in web developer
                                                </div>
                                          </div>


                                          {/* Floating Badge */}
                                          <div
                                                data-aos="zoom-in-right"
                                                data-aos-delay="1800"
                                                className="absolute flex flex-col space-y-1 -right-6 sm:-right-8 top-[25%] bg-white/95 backdrop-blur-md rounded-xl py-2 px-3.5 shadow-xl border border-gray-100 text-gray-800 z-20">
                                                <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-blue-600">
                                                      <span className="text-2xl rotate-6 group-hover:rotate-0 duration-300 transition-all">18+</span>
                                                      <span className="text-xs text-gray-500 font-normal">job offers</span>
                                                </div>
                                                <div className="text-[11px] capitalize sm:text-xs font-semibold text-gray-700">
                                                      in graphic design
                                                </div>
                                          </div>

                                          {/* Floating Badge */}
                                          <div
                                                data-aos="zoom-in-right"
                                                data-aos-delay="2100"
                                                className="absolute flex flex-col space-y-1 -right-6 sm:-right-8 top-[72%] bg-white/95 backdrop-blur-md rounded-xl py-2 px-3.5 shadow-xl border border-gray-100 text-gray-800 z-20">
                                                <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-blue-600">
                                                      <span className="text-2xl rotate-6 group-hover:rotate-0 duration-300 transition-all">9+</span>
                                                      <span className="text-xs text-gray-500 font-normal">job offers</span>
                                                </div>
                                                <div className="text-[11px] capitalize sm:text-xs font-semibold text-gray-700">
                                                      in AI Engineer
                                                </div>
                                          </div>

                                    </div>
                              </div>

                        </div>
                  </main>
            </section>
      )
}