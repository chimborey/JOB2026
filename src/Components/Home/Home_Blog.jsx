import { FaRegEye } from "react-icons/fa6";
import { blogData } from "../../Data/Main/BlogData";
import { Link } from "react-router-dom";

export default function Home_Blog() {
      return (
            <section className="w-full overflow-hidden py-12 md:py-20 bg-[#111111]">
                  <main className="mt-12 container mx-auto md:max-w-7xl px-4 md:px-6 lg:px-8">
                        <div className="flex flex-col space-y-10">
                              {/* ============================= Header ============================= */}
                              <div className="flex flex-col space-y-3 justify-center items-center text-center">
                                    <h3
                                          data-aos='zoom-in-left'
                                          data-aos-delay="600"
                                          className="text-2xl md:text-3xl font-bold text-white capitalize tracking-wide">
                                          Exploring World of <span className="text-[#C49A45]">Knowledge</span>
                                    </h3>
                                    <p
                                          data-aos='zoom-in-right'
                                          data-aos-delay="900"
                                          className="text-sm md:text-base text-gray-400 max-w-xl">
                                          Unleash your curiosity with engaging articles, expert opinions, and inspiring stories.
                                    </p>
                              </div>

                              {/* ============================= Blog Card Grid ============================= */}
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {
                                          blogData.map((item) => {
                                                const { imgUrl, skill, title, time, desc } = item;
                                                return (
                                                      <div
                                                            data-aos='zoom-in'
                                                            data-aos-delay="1200"
                                                            key={title}
                                                            className="w-full bg-[#1A1A1A]/60​ cursor-pointer rounded-xl overflow-hidden border border-white/10 hover:border-[#C49A45]/50 flex flex-col group shadow-lg hover:shadow-2xl duration-300 transition-all"
                                                      >
                                                            {/* Image Container with Hover Overlay & Icon */}
                                                            <div className="relative w-full h-52 overflow-hidden">
                                                                  <img
                                                                        src={imgUrl}
                                                                        alt={title}
                                                                        className="w-full h-full object-cover object-center group-hover:scale-105 duration-500 transition-all"
                                                                  />
                                                                  <Link to={`/blog/${item.id}`}>
                                                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 duration-300 transition-all flex items-center justify-center">
                                                                              <div className="w-12 h-12 rounded-full bg-[#C49A45] text-white flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 duration-300 transition-all shadow-lg">
                                                                                    <FaRegEye size={20} />
                                                                              </div>
                                                                        </div>
                                                                  </Link>
                                                            </div>

                                                            {/* Content Container */}
                                                            <div className="p-5 flex flex-col flex-grow space-y-3">
                                                                  {/* Skill & Time */}
                                                                  <div className="flex items-center justify-between">
                                                                        <span className="py-1 px-3 rounded-full text-xs font-medium bg-[#C49A45]/20 text-[#C49A45] border border-[#C49A45]/30 capitalize">
                                                                              {skill}
                                                                        </span>
                                                                        <span className="text-xs text-gray-400">{time}</span>
                                                                  </div>

                                                                  {/* Title */}
                                                                  <h3 className="text-lg font-bold text-white group-hover:text-[#C49A45] duration-300 transition-all line-clamp-2">
                                                                        {title}
                                                                  </h3>

                                                                  {/* Description */}
                                                                  <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
                                                                        {desc}
                                                                  </p>
                                                            </div>
                                                      </div>
                                                );
                                          })
                                    }
                              </div>
                        </div>
                  </main>
            </section>
      );
}