export default function Contact_Location() {
      return (
            <section className="w-full overflow-hidden py-12 md:py-20 bg-[#111] text-white">
                  <main className="mt-12 container mx-auto md:max-w-7xl px-4 md:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                              {/* ========================= Form ========================= */}
                              <form onSubmit={(e) => e.preventDefault()} className="w-full">
                                    <div className="flex flex-col space-y-4">
                                          <h3 className="text-xl font-bold capitalize text-white mb-2">Get in Touch</h3>

                                          {/* Name */}
                                          <input
                                                data-aos="zoom-in-right"
                                                data-aos-delay="600"
                                                type="text"
                                                placeholder="Enter Your Name"
                                                className="text-gray-200 placeholder-gray-500 text-xs py-3 px-4 rounded-lg border border-white/15 shadow-sm backdrop-blur-sm bg-[#151515] focus:border-[#C49A45] outline-none transition-colors"
                                          />

                                          {/* Email */}
                                          <input
                                                data-aos="zoom-in-right"
                                                data-aos-delay="900"
                                                type="email"
                                                placeholder="Enter Your Email"
                                                className="text-gray-200 placeholder-gray-500 text-xs py-3 px-4 rounded-lg border border-white/15 shadow-sm backdrop-blur-sm bg-[#151515] focus:border-[#C49A45] outline-none transition-colors"
                                          />

                                          {/* Phone */}
                                          <input
                                                data-aos="zoom-in-right"
                                                data-aos-delay="1200"
                                                type="tel"
                                                placeholder="Enter Your Phone Number"
                                                className="text-gray-200 placeholder-gray-500 text-xs py-3 px-4 rounded-lg border border-white/15 shadow-sm backdrop-blur-sm bg-[#151515] focus:border-[#C49A45] outline-none transition-colors"
                                          />

                                          {/* Message */}
                                          <textarea
                                                data-aos="zoom-in-right"
                                                data-aos-delay="1500"
                                                rows="4"
                                                placeholder="Please, enter your message..."
                                                className="text-gray-200 placeholder-gray-500 text-xs py-3 px-4 rounded-lg border border-white/15 shadow-sm backdrop-blur-sm bg-[#151515] focus:border-[#C49A45] outline-none transition-colors resize-none"
                                          ></textarea>

                                          {/* Submit Button */}
                                          <button
                                                data-aos="fade-up"
                                                data-aos-delay="1800"
                                                type="submit"
                                                className="py-3 px-4 rounded-lg bg-[#C49A45] hover:bg-[#b0873c] text-white font-medium capitalize text-xs tracking-wider transition-all duration-300 shadow-md"
                                          >
                                                Submit Message
                                          </button>
                                    </div>
                              </form>

                              {/* ========================= Location / Map ========================= */}
                              <div
                                    data-aos="zoom-in-left"
                                    data-aos-delay="1200"
                                    className="w-full h-full min-h-[350px] md:min-h-[420px] rounded-xl overflow-hidden border border-white/15 shadow-lg bg-[#151515]"
                              >
                                    <iframe
                                          title="Google Map Location"
                                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.517614053916!2d104.9160!3d11.5564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDMzJzIzLjAiTiAxMDTCsDU0JzU3LjYiRQ!5e0!3m2!1sen!2skh!4v1650000000000!5m2!1sen!2skh"
                                          width="100%"
                                          height="100%"
                                          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                                          allowFullScreen=""
                                          loading="lazy"
                                          referrerPolicy="strict-origin-when-cross-origin"
                                    ></iframe>
                              </div>

                        </div>
                  </main>
            </section>
      )
}