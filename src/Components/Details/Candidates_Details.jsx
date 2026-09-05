import { Link, useParams } from "react-router-dom"
import { candidatesData } from "../../Data/Main/CandidateData"
import { FaArrowLeft, FaFacebook, FaGithub, FaYoutube } from "react-icons/fa6";
import Home_Newsletter from "../../Utils/Newsletter";

export default function Candidates_Details() {
      const { id } = useParams()
      const candidateDetailsData = candidatesData.find((item) => item.id === Number(id))

      if (!candidateDetailsData) {
            return (
                  <div className="w-full min-h-[60vh] flex flex-col items-center justify-center text-white bg-[#111111] space-y-4">
                        <h2
                              data-aos="zoom-in-left"
                              data-aos-delay="600"
                              className="text-2xl font-bold">Blog Post Not Found</h2>
                        <Link
                              data-aos="zoom-in-right"
                              data-aos-delay="600"
                              to="/" className="px-4 py-2 bg-[#C49A45] text-white rounded-lg text-sm">
                              Back to Home
                        </Link>
                  </div>
            );
      }
      return (
            <section className=" w-full overflow-hidden py-12">
                  <main className=" mt-12 container mx-auto md:max-w-7xl sm:px-4 md:px-6 lg:px-8">

                        {/* ====================================== Header ====================================== */}
                        <div className="mb-5 flex items-center justify-between bg-[#0F2942]/60 backdrop-blur-md border border-white/10 py-3 px-4 rounded-xl shadow-lg">
                              <Link
                                    to="/candidates"
                                    className="flex items-center gap-2 text-gray-300 hover:text-[#C49A45] transition-colors w-fit text-sm font-medium"
                              >
                                    <FaArrowLeft size={16} /> Back to Candidates
                              </Link>
                              <h3 className=" text-md capitalize text-white underline">Recruiter Details</h3>
                        </div>
                        {/* ====================================== Description ====================================== */}
                        <div className=" flex flex-col space-y-7">
                              {/* ---------------------- Customer Image ---------------------- */}
                              <div className=" relative">
                                    <img
                                          data-aos="zoom-in"
                                          data-aos-delay="600"
                                          src={candidateDetailsData?.imgUrlDetail} alt="" className=" w-full h-96 rounded-lg object-cover" />

                                    <div
                                          data-aos="zoom-in-right"
                                          data-aos-delay="900"
                                          className=" absolute -bottom-6 left-3"
                                    >
                                          <img src={candidateDetailsData?.imgUrl} alt="" className=" w-12 h-12 rounded-lg object-center object-cover" />
                                    </div>
                              </div>
                              {/* ---------------------- location ---------------------- */}
                              <div
                                    data-aos='zoom-in'
                                    data-aos-delay="1200"
                                    className=" flex items-center gap-1">
                                    <span className=" text-xl text-gray-400">{candidateDetailsData?.locationIcon}</span>
                                    <span className=" text-xs text-gray-400">{candidateDetailsData?.location}</span>
                              </div>
                              {/* ---------------------- name ---------------------- */}
                              <div
                                    data-aos='fade-up'
                                    data-aos-delay="1500"
                                    className="flex flex-col"
                              >
                                    <h3
                                          className=" text-lg text-white font-bold capitalize">
                                          {candidateDetailsData?.name}
                                    </h3>
                                    <span className=" text-xs text-gray-400">{candidateDetailsData?.skill}</span>
                              </div>
                              {/* ---------------------- Flex ---------------------- */}
                              <div className=" flex flex-col md:flex-row gap-6 items-start">
                                    {/* flex-[3] */}
                                    <div className=" flex-[3] h-[800px] no-scrollbar overflow-y-auto flex flex-col space-y-6 w-full">
                                          {/* About */}
                                          <div
                                                data-aos='zoom-in-left'
                                                data-aos-delay="1500"
                                                className=" flex items-center text-md text-white capitalize gap-2">
                                                <h5>
                                                      About:
                                                </h5>
                                                <h5 className=" text-sm text-[#C49A45] capitalize">( {candidateDetailsData?.name} )</h5>
                                          </div>
                                          {/* description */}
                                          <p
                                                data-aos='zoom-in'
                                                data-aos-delay="1800"
                                                className=" text-xs text-gray-400 leading-relaxed"
                                          >
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, reprehenderit quae ab harum autem quisquam iure pariatur! Exercitationem, omnis, minima natus consequatur ratione ipsum nulla modi ipsam ipsa laboriosam autem magni fugiat doloremque nisi veritatis illum sequi. Incidunt unde excepturi quod dolor, totam adipisci. Id quas sapiente nostrum ipsa quis minima corporis vitae veritatis quidem molestias! Voluptatem ullam aliquam repudiandae totam veniam? Suscipit eaque soluta nostrum quisquam obcaecati cupiditate nihil voluptates, eos facilis, recusandae incidunt nesciunt esse ad quo excepturi. Vitae harum aspernatur explicabo voluptate quis eum quisquam labore praesentium veritatis ipsa fugit obcaecati iure sit, aperiam est veniam corporis numquam animi! Ad quasi totam quas magni velit molestiae numquam, praesentium odio exercitationem eveniet nostrum corporis nobis. Libero, eos repellat earum pariatur vero sapiente fuga, eius est labore eligendi temporibus provident quae. Saepe sapiente soluta, maxime quod rem, at consequatur tempora, ab ea placeat suscipit itaque est necessitatibus! Fugiat sint odit distinctio debitis accusantium omnis sit repudiandae odio voluptatum totam eum expedita, neque blanditiis exercitationem consequuntur, facere possimus enim fuga minima ex aut quae eveniet saepe error. Doloremque repellendus ipsa veritatis voluptatibus corporis minima! Voluptatibus modi optio adipisci vel inventore, provident placeat quidem dolor distinctio. Placeat similique quibusdam error. Omnis magni id adipisci magnam dolorem, facere laborum, iste maiores libero repellat quisquam modi harum! Iure corporis optio natus necessitatibus reprehenderit, sint nobis ipsa voluptatum praesentium, consectetur est dicta porro ipsum!
                                          </p>
                                          {/* Skills */}
                                          <div
                                                data-aos='zoom-in'
                                                data-aos-delay="2100"
                                                className=" flex flex-col space-y-3">
                                                <h3 className=" text-lg font-bold text-white capitalize">Skills</h3>
                                                <div className=" flex flex-wrap items-center gap-3">
                                                      <button className=" py-1 px-3 rounded-full bg-white/10 border border-white/10 text-white text-xs">{candidateDetailsData?.skillsDetails1}</button>
                                                      <button className=" py-1 px-3 rounded-full bg-white/10 border border-white/10 text-white text-xs">{candidateDetailsData?.skillsDetails2}</button>
                                                      <button className=" py-1 px-3 rounded-full bg-white/10 border border-white/10 text-white text-xs">{candidateDetailsData?.skillsDetails3}</button>
                                                      <button className=" py-1 px-3 rounded-full bg-white/10 border border-white/10 text-white text-xs">{candidateDetailsData?.skillsDetails4}</button>
                                                      <button className=" py-1 px-3 rounded-full bg-white/10 border border-white/10 text-white text-xs">{candidateDetailsData?.skillsDetails5}</button>
                                                </div>
                                          </div>

                                          {/* work Experience */}
                                          <div
                                                data-aos='zoom-in'
                                                data-aos-delay="2400"
                                                className=" flex flex-col space-y-4">
                                                <h3 className=" text-lg font-bold text-white capitalize">Work Experience</h3>
                                                <div className="flex items-start gap-4 pl-2">
                                                      <div className="relative flex flex-col w-0.5 h-64 rounded-full bg-white/20">
                                                            <div className="w-3.5 h-3.5 absolute top-0 -left-1.5 rounded-full bg-[#C49A45] border-2 border-[#111]"></div>
                                                            <div className="w-3.5 h-3.5 absolute top-28 -left-1.5 rounded-full bg-[#C49A45] border-2 border-[#111]"></div>
                                                            <div className="w-3.5 h-3.5 absolute top-56 -left-1.5 rounded-full bg-[#C49A45] border-2 border-[#111]"></div>
                                                      </div>
                                                      <div className="flex flex-col justify-between h-64 text-xs text-gray-300">
                                                            <div>
                                                                  <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[#C49A45] font-semibold">2024 - Present</span>
                                                                  <p className="mt-1 font-medium text-white">Senior Frontend Developer at Tech Company</p>
                                                                  <p className="text-gray-400 text-[11px]">Developing web applications and optimizing UI/UX performance.</p>
                                                            </div>
                                                            <div>
                                                                  <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[#C49A45] font-semibold">2023 - 2024</span>
                                                                  <p className="mt-1 font-medium text-white">Junior Web Developer</p>
                                                                  <p className="text-gray-400 text-[11px]">Collaborated with the team to build frontend components using React and Tailwind CSS.</p>
                                                            </div>
                                                            <div>
                                                                  <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[#C49A45] font-semibold">2022 - 2023</span>
                                                                  <p className="mt-1 font-medium text-white">IT Intern</p>
                                                                  <p className="text-gray-400 text-[11px]">Conducted technical research and provided general IT support within the organization.</p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>

                                          {/* Education & Training */}
                                          <div
                                                data-aos='zoom-in'
                                                data-aos-delay="2400"
                                                className=" flex flex-col space-y-4 pt-4">
                                                <h3 className=" text-lg font-bold text-white capitalize">Education & Training</h3>
                                                <div className="flex items-start gap-4 pl-2">
                                                      <div className="relative flex flex-col w-0.5 h-44 rounded-full bg-white/20">
                                                            <div className="w-3.5 h-3.5 absolute top-0 -left-1.5 rounded-full bg-[#C49A45] border-2 border-[#111]"></div>
                                                            <div className="w-3.5 h-3.5 absolute top-36 -left-1.5 rounded-full bg-[#C49A45] border-2 border-[#111]"></div>
                                                      </div>
                                                      <div className="flex flex-col justify-between h-44 text-xs text-gray-300">
                                                            <div>
                                                                  <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[#C49A45] font-semibold">2021 - 2025</span>
                                                                  <p className="mt-1 font-medium text-white">Bachelor's Degree in Information Technology (IT)</p>
                                                                  <p className="text-gray-400 text-[11px]">Focused study on Software Development and Database Systems.</p>
                                                            </div>
                                                            <div>
                                                                  <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[#C49A45] font-semibold">2024</span>
                                                                  <p className="mt-1 font-medium text-white">Fullstack Web Development Certification</p>
                                                                  <p className="text-gray-400 text-[11px]">Professional certification covering React, Spring Boot, and PostgreSQL.</p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                                    {/* Flex-1 (Sidebar) */}
                                    <div
                                          data-aos='fade-left'
                                          data-aos-delay="1500"
                                          className=" flex-1 flex flex-col space-y-4 border border-white/10 bg-[#0F2942]/40 rounded-xl py-5 px-5 shadow-lg backdrop-blur-md w-full md:w-auto sticky top-24">

                                          <div
                                                data-aos='zoom-in-right'
                                                data-aos-delay="1800"
                                                className=" flex items-center gap-3 border-b border-white/10 pb-4">

                                                <img src={candidateDetailsData?.imgUrl} alt="" className=" w-12 h-12 rounded-lg object-center object-cover" />

                                                <div className=" flex flex-col space-y-1">
                                                      <h3 className=" text-white capitalize text-md font-semibold">{candidateDetailsData?.name}</h3>
                                                      <div className=" flex items-center gap-1">
                                                            <span className=" text-sm text-gray-400">{candidateDetailsData?.locationIcon}</span>
                                                            <span className=" text-xs text-gray-400">{candidateDetailsData?.location}</span>
                                                      </div>
                                                </div>
                                          </div>

                                          <div
                                                data-aos='zoom-in-left'
                                                data-aos-delay="2100"
                                                className=" flex flex-col">
                                                <h5 className=" text-xs text-gray-400">Industry</h5>
                                                <span className=" text-sm text-white capitalize font-medium">{candidateDetailsData?.skill}</span>
                                          </div>

                                          <div
                                                data-aos='zoom-in-right'
                                                data-aos-delay="2400"
                                                className=" flex flex-col">
                                                <h5 className=" text-xs text-gray-400">Roles</h5>
                                                <span className=" text-sm text-white capitalize font-medium">{candidateDetailsData?.roles}</span>
                                          </div>

                                          <div
                                                data-aos='zoom-in-right'
                                                data-aos-delay="2800"
                                                className=" flex flex-col">
                                                <h5 className=" text-xs text-gray-400">Location</h5>
                                                <span className=" text-sm text-white capitalize font-medium">{candidateDetailsData?.location}</span>
                                          </div>

                                          <div
                                                data-aos='fade-up'
                                                data-aos-delay="2800"
                                                className=" flex items-center gap-3 pt-2">

                                                <button className=" w-9 h-9 p-1.5 text-xl flex items-center justify-center rounded-full border border-white/20 hover:bg-[#C49A45] hover:border-[#C49A45] duration-300 transition-all">
                                                      <FaFacebook size={18} className=" text-white" />
                                                </button>

                                                <button className=" w-9 h-9 p-1.5 text-xl flex items-center justify-center rounded-full border border-white/20 hover:bg-[#C49A45] hover:border-[#C49A45] duration-300 transition-all">
                                                      <FaYoutube size={18} className=" text-white" />
                                                </button>

                                                <button className=" w-9 h-9 p-1.5 text-xl flex items-center justify-center rounded-full border border-white/20 hover:bg-[#C49A45] hover:border-[#C49A45] duration-300 transition-all">
                                                      <FaGithub size={18} className=" text-xl text-white" />
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        {/* ====================================== Newsletter ====================================== */}
                        <Home_Newsletter />
                  </main>
            </section>
      )
}