export default function Newsletter() {
      return (
            <section className="w-full overflow-hidden py-12 md:py-20">
                  <main className="mt-12 container mx-auto md:max-w-7xl sm:py-4 md:py-6 lg:py-8 px-4">
                        <div
                              data-aos="zoom-in"
                              data-aos-delay="600"
                              className="w-full h-[60vh] bg-gradient-to-b from-[#6b11cb] via-[#7b1fa2] to-[#4a00e0] relative py-6 px-4 rounded-2xl flex flex-col justify-center items-center text-center shadow-2xl overflow-hidden"
                        >
                              {/* ----------------------- 1. បន្ទាត់បញ្ឈរ Background Vertical Stripe Lines ----------------------- */}
                              <div className="absolute inset-0 pointer-events-none flex justify-around opacity-15 z-0">
                                    <div className="w-[1px] h-full bg-white"></div>
                                    <div className="w-[1px] h-full bg-white"></div>
                                    <div className="w-[1px] h-full bg-white"></div>
                                    <div className="w-[1px] h-full bg-white"></div>
                                    <div className="w-[1px] h-full bg-white"></div>
                                    <div className="w-[1px] h-full bg-white"></div>
                                    <div className="w-[1px] h-full bg-white"></div>
                              </div>

                              {/* ----------------------- 2. ខ្សែកោងរំលេចខាងលើ Curved Wave Line ----------------------- */}
                              <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-0 overflow-hidden opacity-30">
                                    <div className="w-[200%] h-48 rounded-[100%] border-t border-white/40 absolute -left-[50%] -top-36"></div>
                              </div>

                              {/* ----------------------- 3. Overlay បន្ថែមភាពស្រទន់ ----------------------- */}
                              <div className="absolute inset-0 bg-black/20 z-0" />

                              {/* ----------------------- 4. Content Container ----------------------- */}
                              <div className="relative z-10 flex flex-col items-center justify-center space-y-4 max-w-xl mx-auto">

                                    {/* Stay Up to Date */}
                                    <h3
                                          data-aos="zoom-in-left"
                                          data-aos-delay="900"
                                          className="text-3xl md:text-5xl font-bold text-white tracking-wide drop-shadow-md">
                                          Stay Up to Date
                                    </h3>

                                    <p
                                          data-aos="zoom-in-right"
                                          data-aos-delay="1200"
                                          className="text-sm md:text-base text-purple-100 font-light drop-shadow">
                                          Subscribe to our newsletter to receive our weekly feed.
                                    </p>

                                    {/* Input & Button Box */}
                                    <div
                                          data-aos="zoom-in"
                                          data-aos-delay="1200"
                                          className=" w-full md:w-[670px] overflow-hidden p-1.5 rounded-xl border border-purple-400/30 bg-black/80 backdrop-blur-md flex items-center justify-between shadow-2xl">
                                          <input
                                                data-aos="fade-up"
                                                data-aos-delay="1500"
                                                type="text"
                                                placeholder="Enter Your E-mail"
                                                className="w-full text-gray-300 text-sm py-2.5 px-3 border-none bg-transparent outline-none placeholder:text-gray-500"
                                          />
                                          <button
                                                data-aos="fade-up"
                                                data-aos-delay="1800"
                                                className="text-sm font-medium capitalize text-white py-2.5 px-5 rounded-lg border border-[#951CFC] bg-[#951CFC] hover:bg-[#7a0fd4] transition-all shrink-0 shadow-lg">
                                                Subscribe
                                          </button>
                                    </div>

                              </div>
                        </div>
                  </main>
            </section>
      )
}