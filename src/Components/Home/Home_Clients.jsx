import partner_1 from "../../assets/Image/partner-1.svg"
import partner_2 from "../../assets/Image/partner-2.svg"
import partner_3 from "../../assets/Image/partner-3.svg"
import partner_4 from "../../assets/Image/partner-4.svg"
import partner_5 from "../../assets/Image/partner-5.svg"
import partner_6 from "../../assets/Image/partner-6.svg"
import partner_7 from "../../assets/Image/partner-7.svg"
import partner_8 from "../../assets/Image/partner-8.svg"
import partner_9 from "../../assets/Image/partner-9.svg"
import partner_10 from "../../assets/Image/partner-10.svg"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import count_icon1 from "../../assets/Image/count-icon1.svg"
import count_icon2 from "../../assets/Image/count-icon2.svg"
import count_icon3 from "../../assets/Image/count-icon3.svg"
import count_icon4 from "../../assets/Image/count-icon4.svg"

export default function Home_Clients() {

      // ===================== homePartnersData ============================
      const homePartnersData = [
            {
                  imgurl: partner_1,
            },
            {
                  imgurl: partner_2,
            },
            {
                  imgurl: partner_3,
            },
            {
                  imgurl: partner_4,
            },
            {
                  imgurl: partner_5,
            },
            {
                  imgurl: partner_6,
            },
            {
                  imgurl: partner_7,
            },
            {
                  imgurl: partner_8,
            },
            {
                  imgurl: partner_9,
            },
            {
                  imgurl: partner_10,
            },
      ]

      // ===================== homePartnersData ============================
      const homeClientsData = [
            {
                  name: "Annual Partner",
                  imgUrl: count_icon1,
                  number: "+100",
            },
            {
                  name: "Annual Partner",
                  imgUrl: count_icon2,
                  number: "+90",
            },
            {
                  name: "Annual Partner",
                  imgUrl: count_icon3,
                  number: "+75",
            },
            {
                  name: "Annual Partner",
                  imgUrl: count_icon4,
                  number: "+25",
            },
      ]
      return (
            <section className=" w-full overflow-hidden py-12 md:py-20">
                  <main className=" mt-12 container md:max-w-7xl mx-auto sm:px-4 md:px-6 lg:px-8 ">
                        <div className=" flex flex-col space-y-7">

                              {/* =============================== Clients & Partners =============================== */}
                              <div className=" text-center flex flex-col space-y-3">
                                    <h3
                                          data-aos="zoom-in-right"
                                          data-aos-delay="600"
                                          className=" text-lg capitalize font-bold text-white"
                                    >
                                          Clients & Partners
                                    </h3>
                                    <p
                                          data-aos="zoom-in-right"
                                          data-aos-delay="900"
                                          className=" text-xs text-gray-500"
                                    >
                                          Dedicated and trusted partners
                                    </p>
                              </div>

                              {/* =============================== Partners =============================== */}
                              <div>
                                    <Swiper
                                          slidesPerView={10}
                                          spaceBetween={20}
                                          loop={true}
                                          modules={[Autoplay]}
                                          autoplay={{ delay: 1500 }}
                                          speed={1500}
                                          breakpoints={{
                                                320: { slidesPerView: 2, spaceBetween: 10 },
                                                640: { slidesPerView: 3, spaceBetween: 15 },
                                                1024: { slidesPerView: 4, spaceBetween: 20 },
                                                1280: { slidesPerView: 6, spaceBetween: 20 },
                                          }}
                                    >
                                          {
                                                homePartnersData.map((item) => {
                                                      const { imgurl } = item
                                                      return (
                                                            <SwiperSlide key={imgurl}>
                                                                  <div
                                                                        data-aos='zoom-in-right'
                                                                        data-aos-delay="1200"
                                                                        className=" w-28 h-12 rounded-lg"
                                                                  >
                                                                        <img src={imgurl} alt="" className=" hover:scale-110 duration-300 transition-all w-full h-full rounded-lg " />
                                                                  </div>
                                                            </SwiperSlide>
                                                      )
                                                })
                                          }
                                    </Swiper>
                              </div>

                              {/* =============================== Clients =============================== */}
                              <div className=" mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                    {
                                          homeClientsData.map((item) => {
                                                const { name, imgUrl, number } = item
                                                return (
                                                      <div
                                                            data-aos='zoom-in-right'
                                                            data-aos-delay="1500"
                                                            className=" w-full overflow-hidden py-3 px-3 rounded-lg shadow-sm backdrop-blur-md shadow-gray-500 flex items-center gap-3"
                                                      >
                                                            <img src={imgUrl} alt="" className=" w-12 h-12 rounded-full" />
                                                            <div className=" flex flex-col">
                                                                  <span className=" text-lg font-bold text-white">{number}</span>
                                                                  <h3 className=" text-sm font-bold text-white">{name}</h3>
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