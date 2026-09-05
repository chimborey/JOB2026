import { Link, useParams } from "react-router-dom"
import { blogData } from "../../Data/Main/BlogData"
import { FaArrowLeft } from "react-icons/fa6";


export default function BlogDetails() {
      const { id } = useParams()
      const blogDetailsData = blogData?.find((item) => item.id === Number(id));
      if (!blogDetailsData) {
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
                  <main className=" mx-auto container md:max-w-7xl sm:px-4 md:px-6 lg:px-8">
                        <div className=" flex flex-col space-y-7">
                              <div className="mb-5 flex items-center justify-between bg-[#0F2942]/60 backdrop-blur-md border border-white/10 py-3 px-4 rounded-xl shadow-lg">
                                    <Link
                                          to="/blog"
                                          className="flex items-center gap-2 text-gray-300 hover:text-[#C49A45] transition-colors w-fit text-sm font-medium"
                                    >
                                          <FaArrowLeft size={16} /> Back to Blog
                                    </Link>
                                    <h3 className=" text-md capitalize text-white underline">Blog Details</h3>
                              </div>
                              <img
                                    data-aos="zoom-in"
                                    data-aos-delay="600"
                                    src={blogDetailsData?.imgUrlDetails} alt="" className=" w-full h-96 rounded-lg object-center object-cover" />
                              {/* Content Container */}
                              <div className="p-5 flex flex-col flex-grow space-y-3">
                                    {/* Skill & Time */}
                                    <div className="flex items-center justify-between">
                                          <span
                                                data-aos="zoom-in"
                                                data-aos-delay="900"
                                                className="py-1 px-3 rounded-full text-xs font-medium bg-[#C49A45]/20 text-[#C49A45] border border-[#C49A45]/30 capitalize">
                                                {blogDetailsData?.skill}
                                          </span>
                                          <span
                                                data-aos="zoom-in"
                                                data-aos-delay="1200"
                                                className="text-xs text-gray-400">{blogDetailsData?.time}</span>
                                    </div>

                                    {/* Title */}
                                    <h3
                                          data-aos="fade-up-right"
                                          data-aos-delay="1500"
                                          className="text-xl font-bold text-white group-hover:text-[#C49A45] duration-300 transition-all line-clamp-2">
                                          {blogDetailsData?.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                          data-aos="zoom-in"
                                          data-aos-delay="1800"
                                          className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
                                          {blogDetailsData?.desc}
                                    </p>

                                    {/* More Info */}
                                    <div className=" flex flex-col space-y-3">
                                          <h5
                                                data-aos="fade-up-left"
                                                data-aos-delay="2100"
                                                className=" text-md capitalize text-white">More Info</h5>
                                          <p
                                                data-aos="fade-up-right"
                                                data-aos-delay="2400"
                                                className=" text-xs text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ab cupiditate expedita sunt atque porro maxime recusandae eligendi tenetur, accusantium veritatis libero nulla doloribus distinctio iure, quisquam fugit doloremque nihil vitae accusamus nemo. Animi commodi earum laboriosam numquam sequi autem fugiat ut incidunt culpa, ipsum sit quibusdam quae doloribus! Veniam eligendi et maiores assumenda impedit labore eos similique recusandae quisquam, placeat veritatis suscipit vel quam cumque tempora blanditiis illo, expedita adipisci sed distinctio voluptatum voluptatem corporis error libero. Vero a totam voluptate voluptatibus adipisci repellat facere illo eius quia molestias, inventore magni perferendis quam blanditiis nesciunt earum pariatur aliquam velit veritatis error! Officiis velit magni eligendi, sunt laborum dolorum reprehenderit ab? Nemo corporis aperiam reiciendis molestias temporibus dolor quas, accusantium tempore molestiae, et nihil ratione doloribus vel numquam, illum rem perspiciatis qui cum libero natus repellat animi reprehenderit quaerat voluptatem! Fugiat iste illo voluptate delectus eum sapiente, hic iusto nam odio excepturi doloremque eveniet doloribus, ut inventore error! Atque voluptate quia, qui sapiente excepturi placeat impedit voluptatem suscipit ipsum illo dolor porro culpa aliquid commodi neque itaque, similique ratione mollitia ullam dolorum. Quos qui, culpa optio accusantium repudiandae, reprehenderit tempora voluptas dicta quae quod amet dignissimos corrupti tempore eligendi ducimus atque magnam nesciunt cupiditate aut enim eos sint? Quis quod in adipisci! Odit debitis quam perferendis doloremque. Cumque illo distinctio optio nesciunt modi neque ea asperiores earum quo ipsum, dolore harum alias, et nobis laboriosam voluptate natus id eos quam repudiandae. Excepturi tempora quas nostrum cum vero accusantium iste repudiandae voluptatum facere. Recusandae veritatis incidunt hic autem reprehenderit corrupti facilis eligendi consequatur voluptates commodi rem omnis et, obcaecati minima dicta quos eius minus dolore delectus culpa ea illo voluptatibus! Ratione ad ex sed voluptatum sit quae culpa quo consequuntur ut, officia cum asperiores quibusdam perspiciatis aliquam illum tempora vel iure repellendus suscipit doloremque alias esse! Dolorem eveniet earum aspernatur non rem! Hic aspernatur quisquam eos tenetur nam architecto impedit adipisci iusto numquam esse autem quo officiis, repellat quis aut illum odio sequi nemo dolores. Non tempora corrupti voluptatem temporibus debitis reiciendis illum. Placeat accusamus sunt numquam magnam rem eos vitae ex quod cumque pariatur! Explicabo pariatur harum, sint ea tenetur iste atque perspiciatis aliquid ut quisquam quidem nam corporis quam ipsam repudiandae. Illum, veritatis neque itaque tempore vel obcaecati, soluta eos dolor rerum qui labore dolores quia earum dolore sunt quaerat aliquid nemo quidem explicabo eaque. Dolore ducimus sapiente impedit, obcaecati magni rerum provident sequi quisquam quod, officia amet odio ea et numquam recusandae, odit voluptates nesciunt tempore incidunt repellendus illo. Quaerat doloribus veniam quae similique ab quia corrupti quibusdam commodi doloremque expedita pariatur eius incidunt aliquid non dicta soluta, nemo ipsam ullam suscipit eveniet fugiat. Vel non vero aliquam consequatur, optio et qui labore. Inventore odit aliquid unde velit facere similique provident commodi enim omnis autem ducimus, molestias debitis accusantium quos quam error. Quisquam, aliquam? Cum deleniti doloribus consequuntur quod obcaecati eos recusandae est accusamus amet fugit, consequatur atque quisquam animi soluta. Laborum, itaque. Blanditiis dolorum nulla odio repudiandae?</p>
                                    </div>

                                    {/* Customer01 */}
                                    <div
                                          data-aos="fade-left"
                                          data-aos-delay="2800"
                                          className=" w-full overflow-hidden py-3 px-3 rounded-lg flex flex-col space-y-3 border border-gray-500 shadow-sm backdrop-blur-sm">
                                          <div className=" flex items-center gap-3">
                                                <img src={blogDetailsData?.imgUrlCustomer1} alt="" className=" w-12 h-12 rounded-lg" />
                                                <div className=" flex flex-col space-y-1">
                                                      <h3 className=" text-lg capitalize text-white font-bold">{blogDetailsData?.nameCustomer1}</h3>
                                                      <h5 className=" text-xs text-gray-500 capitalize">{blogDetailsData?.skillsCustomer1}</h5>
                                                </div>
                                          </div>
                                          <p className=" text-gray-500 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis corrupti error quasi perspiciatis. Expedita sed quasi ea, cumque, a ipsa molestiae voluptatibus amet reprehenderit officiis delectus veniam quos magnam incidunt facilis totam aliquam aperiam soluta! Illo quod nemo non.</p>
                                    </div>

                                    {/* Customer02 */}
                                    <div
                                          data-aos="fade-right"
                                          data-aos-delay="2800"
                                          className=" w-full overflow-hidden py-3 px-3 rounded-lg flex flex-col space-y-3 border border-gray-500 shadow-sm backdrop-blur-sm">
                                          <div className=" flex items-center gap-3">
                                                <img src={blogDetailsData?.imgUrlCustomer2} alt="" className=" w-12 h-12 rounded-lg" />
                                                <div className=" flex flex-col space-y-1">
                                                      <h3 className=" text-lg capitalize text-white font-bold">{blogDetailsData?.nameCustomer2}</h3>
                                                      <h5 className=" text-xs text-gray-500 capitalize">{blogDetailsData?.skillsCustomer2}</h5>
                                                </div>
                                          </div>
                                          <p className=" text-gray-500 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis corrupti error quasi perspiciatis. Expedita sed quasi ea, cumque, a ipsa molestiae voluptatibus amet reprehenderit officiis delectus veniam quos magnam incidunt facilis totam aliquam aperiam soluta! Illo quod nemo non.</p>
                                    </div>

                                    {/* View More Aricles */}
                                    <div
                                          data-aos="fade-up"
                                          data-aos-delay="2800"
                                          className=" mx-auto py-4">
                                          <Link to={'/blog'}>
                                                <button className=" text-md capitalize text-white bg-gray-500 py-1 px-4 rounded-lg">View More Aricles</button>
                                          </Link>
                                    </div>
                              </div>
                        </div>
                  </main>
            </section>
      )
}