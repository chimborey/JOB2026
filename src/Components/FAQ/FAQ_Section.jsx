import { useState } from "react"
import { faqData } from "../../Data/Main/FAQData"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"

export default function FAQ_Section() {
      const [isOpenIndex, setIsOpenIndex] = useState(null)

      const toggleIndex = (index) => {
            setIsOpenIndex(isOpenIndex === index ? null : index)
      }

      return (
            <section className="w-full overflow-hidden py-12 md:py-20">
                  <main className="mt-12 container mx-auto md:max-w-7xl sm:px-4 md:px-6 lg:px-8">
                        <div className="flex flex-col space-y-7">

                              <div className="flex flex-col justify-center items-center space-y-3 text-center">
                                    <h3
                                          data-aos="zoom-in"
                                          data-aos-delay="300"
                                          className="text-lg text-white capitalize font-bold"
                                    >
                                          Frequently Asked Questions
                                    </h3>
                                    <p
                                          data-aos="zoom-in"
                                          data-aos-delay="900"
                                          className="text-xs text-gray-400 max-w-xl"
                                    >
                                          Find answers to common questions about our platform, features, account management, and services.
                                    </p>
                              </div>

                              <div className="space-y-3">
                                    {faqData.map((item, index) => (
                                          <div
                                                data-aos="zoom-in"
                                                data-aos-delay="1200"
                                                key={item.id}
                                                className="w-full relative border overflow-hidden py-3 px-4 rounded-lg border-white/10 bg-[#0F2942]/40 backdrop-blur-md flex flex-col space-y-3 shadow-lg"
                                          >
                                                <button
                                                      onClick={() => toggleIndex(index)}
                                                      data-aos="zoom-in-right"
                                                      data-aos-delay="1500"
                                                      className="w-full text-left flex items-center justify-between focus:outline-none pr-6"
                                                >
                                                      <h3 className="text-sm md:text-md text-white font-medium">{item.question}</h3>
                                                      <span className="absolute top-0 right-4 text-white">
                                                            {
                                                                  isOpenIndex === index ? (
                                                                        <IoIosArrowUp size={18} />
                                                                  ) : (
                                                                        <IoIosArrowDown size={18} />
                                                                  )
                                                            }
                                                      </span>
                                                </button>
                                                {isOpenIndex === index && (
                                                      <p className="text-xs text-gray-300 pt-2 border-t border-white/10 leading-relaxed">
                                                            {item.answer}
                                                      </p>
                                                )}
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </main>
            </section>
      )
}