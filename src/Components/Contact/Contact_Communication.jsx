import { contactData } from "../../Data/Main/ContactData";


export default function Contact_Communication() {
      return (
            <section className=" w-full overflow-hidden py-12 md:py-20">
                  <main className=" mt-12 container mx-auto md:max-w-7xl sm:px-4 md:px-6 lg:px-8">
                        <div className=" flex flex-col space-y-7">

                              <div className="flex flex-col justify-center items-center space-y-3 text-center">
                                    <h3
                                          data-aos="zoom-in"
                                          data-aos-delay="600"
                                          className="text-lg text-white capitalize font-bold"
                                    >
                                          Get in touch!
                                    </h3>
                                    <p
                                          data-aos="zoom-in"
                                          data-aos-delay="900"
                                          className="text-xs text-gray-400 max-w-xl"
                                    >
                                          We will be glad to hear from you.
                                    </p>
                              </div>

                              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                    {
                                          contactData.map((item) => {
                                                const { name, imgUrl, number1, number2 } = item
                                                return (
                                                      <div
                                                            data-aos="zoom-in"
                                                            data-aos-delay="1200"
                                                            className=" w-full overflow-hidden py-3 px-3 rounded-lg hover:border-purple-500 border shadow-sm backdrop-blur-sm border-gray-500 duration-300 transition-all flex items-center mx-auto justify-center flex-col space-y-5">
                                                            <img src={imgUrl} alt="" className=" w-12 h-12 rounded-lg object-center object-cover" />
                                                            <h3 className=" text-lg text-white capitalize font-bold">{name}</h3>
                                                            <div className=" flex flex-col space-y-3">
                                                                  <span className=" text-sm capitalize font-bold text-gray-500">{number1}</span>
                                                                  <span className=" text-sm capitalize font-bold text-gray-500">{number2}</span>
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