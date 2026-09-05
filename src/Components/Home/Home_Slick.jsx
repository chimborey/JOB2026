import testi_bg from "../../assets/Image/testi-bg.webp"
import Candidat_1 from "../../assets/Image/Candidat-1.webp"
import Candidat_2 from "../../assets/Image/Candidat-2.webp"
import Candidat_3 from "../../assets/Image/Candidat-3.webp"
import Candidat_4 from "../../assets/Image/Candidat-4.webp"
import Candidat_5 from "../../assets/Image/Candidat-5.webp"
import Candidat_6 from "../../assets/Image/Candidat-6.webp"
import Candidat_7 from "../../assets/Image/Candidat-7.webp"
import Candidat_8 from "../../assets/Image/Candidat-8.webp"
import Candidat_9 from "../../assets/Image/Candidat-9.webp"
import Candidat_10 from "../../assets/Image/Candidat-10.webp"
import Candidat_11 from "../../assets/Image/Candidat-11.webp"
import Candidat_12 from "../../assets/Image/Candidat-12.webp"

import { IoStar } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';

export default function Home_Slick() {
      // បន្ថែមទិន្នន័យគំរូសម្រាប់ Slider នីមួយៗ
      const homeSlickData = [
            {
                  imgUrl: Candidat_2,
                  name: "Jenny Missy",
                  title: "Why our clients admire us",
                  span: "Testimonials that showcase our exceptional service",
                  desc: "We provide our customers with access to a vast and diverse range of job opportunities across various industries.",
                  skill: "Web Developer",
            },
            {
                  imgUrl: Candidat_1,
                  name: "David Smith",
                  title: "Exceptional Experience",
                  span: "Testimonials that showcase our dedication",
                  desc: "The search and filtering options allow users to refine their job searches effortlessly.",
                  skill: "UI/UX Designer",
            },
            {
                  imgUrl: Candidat_3,
                  name: "Sarah Johnson",
                  title: "Trust and Reliability",
                  span: "Testimonials from our valued community",
                  desc: "Amazing platform with great resources and career advice that helped me land a job.",
                  skill: "Software Engineer",
            },
      ];

      // រូបភាពទាំង ១២ ដាក់តាំងក្នុងកាត (กระจายទីតាំងជុំវិញ មិន Blur និងមានទំហំល្មមស្អាត)
      const floatingCandidates = [
            { img: Candidat_1, style: "top-4 left-4 animate-bounce" },
            { img: Candidat_2, style: "top-4 left-20 animate-pulse" },
            { img: Candidat_3, style: "bottom-4 left-6 animate-bounce" },
            { img: Candidat_4, style: "bottom-4 left-24 animate-pulse" },
            { img: Candidat_5, style: "top-4 right-4 animate-bounce" },
            { img: Candidat_6, style: "top-4 right-20 animate-pulse" },
            { img: Candidat_7, style: "bottom-4 right-6 animate-bounce" },
            { img: Candidat_8, style: "bottom-4 right-24 animate-pulse" },
            { img: Candidat_9, style: "top-1/2 left-3 -translate-y-1/2 hidden lg:block animate-pulse" },
            { img: Candidat_10, style: "top-1/2 right-3 -translate-y-1/2 hidden lg:block animate-bounce" },
            { img: Candidat_11, style: "top-1/3 left-10 hidden xl:block animate-bounce" },
            { img: Candidat_12, style: "top-1/3 right-10 hidden xl:block animate-pulse" },
      ];

      return (
            <section className="w-full overflow-hidden py-12 md:py-20 relative">
                  <main className="mt-12 container max-w-5xl mx-auto px-4 relative z-10">

                        {/* Swiper Slider Component */}
                        <Swiper
                              slidesPerView={1}
                              spaceBetween={20}
                              loop={true}
                              modules={[Autoplay, Pagination]}
                              autoplay={{ delay: 3500, disableOnInteraction: false }}
                              speed={1000}
                              pagination={{ clickable: true }}
                              className="pb-10"
                        >
                              {homeSlickData.map((item, index) => {
                                    const { name, imgUrl, desc, span, title, skill } = item;
                                    return (
                                          <SwiperSlide key={index}>
                                                <div
                                                      data-aos="zoom-in"
                                                      data-aos-delay="300"
                                                      className="w-full min-h-[480px] rounded-2xl p-6 md:p-12 relative flex flex-col justify-center items-center text-center border border-purple-500/30 shadow-2xl overflow-hidden">
                                                      <img
                                                            data-aos="zoom-in-left"
                                                            data-aos-delay="600"
                                                            src={testi_bg}
                                                            alt="Testimonial Background"
                                                            className="absolute inset-0 w-full h-full object-cover z-0 brightness-110"
                                                      />

                                                      {/* 2. Light Overlay */}
                                                      <div
                                                            data-aos="zoom-in-left"
                                                            data-aos-delay="600"
                                                            className="absolute inset-0 bg-black/40 z-0"
                                                      ></div>

                                                      <div
                                                            data-aos="zoom-in-right"
                                                            data-aos-delay="900"
                                                            className="absolute inset-0 pointer-events-none hidden md:block z-10"
                                                      >
                                                            {floatingCandidates.map((c, idx) => (
                                                                  <img
                                                                        key={idx}
                                                                        src={c.img}
                                                                        alt="Candidate"
                                                                        className={`w-10 h-10 md:w-11 md:h-11 rounded-full object-cover absolute border-2 border-purple-400/80 shadow-md opacity-90 hover:opacity-100 hover:scale-110 transition-all ${c.style}`}
                                                                  />
                                                            ))}
                                                      </div>

                                                      {/* 4. Content Container */}
                                                      <div className="relative z-20 flex flex-col items-center space-y-4 max-w-md mx-auto">

                                                            {/* Title & Subtitle */}
                                                            <div
                                                                  data-aos="fade-up"
                                                                  data-aos-delay="1200"
                                                                  className="space-y-1"
                                                            >
                                                                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">{title}</h3>
                                                                  <span className="text-xs md:text-sm text-purple-200">{span}</span>
                                                            </div>

                                                            {/* Main User Image */}
                                                            <div
                                                                  data-aos="zoom-in-right"
                                                                  data-aos-delay="1500"
                                                                  className="relative p-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                                                                  <img src={imgUrl} alt={name} className="w-16 h-16 rounded-full object-cover" />
                                                            </div>

                                                            {/* Description */}
                                                            <p
                                                                  data-aos="zoom-in"
                                                                  data-aos-delay="1800"
                                                                  className="text-gray-200 text-sm md:text-base italic max-w-sm drop-shadow">
                                                                  "{desc}"
                                                            </p>

                                                            {/* Star Ratings */}
                                                            <div
                                                                  data-aos="fade-up"
                                                                  data-aos-delay="2100"
                                                                  className="flex items-center gap-1 text-yellow-400"
                                                            >
                                                                  {[...Array(5)].map((_, i) => (
                                                                        <IoStar key={i} className="text-lg" />
                                                                  ))}
                                                            </div>

                                                            {/* Name & Skill */}
                                                            <div
                                                                  data-aos="fade-up"
                                                                  data-aos-delay="2400"
                                                                  className="pt-1"
                                                            >
                                                                  <h4 className="text-base font-bold text-white capitalize">{name}</h4>
                                                                  <span className="text-xs text-purple-300 font-medium">{skill}</span>
                                                            </div>

                                                      </div>
                                                </div>
                                          </SwiperSlide>
                                    );
                              })}
                        </Swiper>
                  </main>
            </section>
      );
}