import React, { useState } from "react";
import { FaHeart, FaShare, FaComment, FaFacebook, FaTwitter } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import FOOD1 from "../../assets/images/food1.jpg";
import FOOD2 from "../../assets/images/food2.jpg";
import FOOD3 from "../../assets/images/food3.jpg";
import CommentSection from "./CommentSection";

function DetailPost() {
    const [isActive, setIsActive] = useState(false);

    return (
        <React.Fragment>
            <section class="max-w-4x1 mx-auto py-10">
                <div className="container mx-auto flex flex-row justify-between align-middle">
                    <div className="mt-10 font-roboto text-base md:text-lg lg:text-2xl text-slate-400 italic">Thứ hai, 03/04/2023 - 07:22</div>
                    <div class="mt-10 flex flex-row text-sm md:text-lg lg:text-xl">

                        <div onClick={() => setIsActive(!isActive)}>
                            {isActive ? <FaHeart className="mt-0.5 text-[#CC3333] ml-1 cursor-pointer"/> : <AiOutlineHeart className="mt-0.5 text-black ml-1 cursor-pointer"/>}
                        </div>

                        {/* <FaHeart className="mt-0.5 text-[#CC3333] ml-1 cursor-pointer"></FaHeart> */}

                        <p className="text-slate-500 ml-3 italic">1130</p>
                        <FaComment className="mt-0.5 ml-5 cursor-pointer"></FaComment>
                        <p className="text-slate-500 ml-3 italic">244</p>
                        <FaFacebook className="mt-0.5 ml-10 cursor-pointer" />
                        <FaTwitter className="mt-0.5 ml-5 cursor-pointer" />
                        <FaShare className="mt-0.5 ml-5 cursor-pointer" />
                    </div>
                </div>

                {/* <div className="cursor-pointer select-none">
       {isActive? <AiOutlineHome onClick={()=>{
          setIsActive(!isActive)}}/>:
      <AiFillHome onClick={()=>{
          setIsActive(!isActive)}} />
           }
      </div> */}

                <div class="bg-white rounded-lg mt-10 mx-20 py-10 relative">
                    <div id="body" class="py-10 pl-10 pr-5">
                        <div id="body1" class="grid grid-col-2 gap-4">
                            <div
                                id="content"
                                className="mb-10 font-roboto text-lg md:text-xl lg:text-3xl font-bold text-justify ">
                                Với nền ẩm thực đa vùng miền và ảnh hưởng của các nền văn hóa lân cận, ẩm thực Việt Nam không chỉ làm say lòng người dân trong nước mà còn thu hút sự quan tâm và yêu thích của du khách quốc tế.
                            </div>
                            <div
                                id="food"
                                className="aspect-[14/9] text-center justify-center"
                                style={{ backgroundImage: `url(${FOOD1})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", borderRadius: "3px" }}
                            />

                        </div>

                        <div id="body2" class="my-5 mb-10 font-roboto text-lg italic text-center">
                            Mỗi vùng miền của Việt Nam có những món ăn đặc trưng riêng, phản ánh đặc điểm địa lý, khí hậu và nguồn tài nguyên tự nhiên của địa phương.
                        </div>
                        <div
                            id="content"
                            class="my-5 font-roboto text-lg">
                            Văn hóa ẩm thực Việt Nam là một kho tàng đa dạng và phong phú, phản ánh sự đa dạng vùng miền và ảnh hưởng của các nền văn hóa lân cận. Thực phẩm và món ăn ở Việt Nam thường được chế biến tinh tế, kết hợp giữa hương vị, màu sắc và cảm giác thị giác để tạo nên những trải nghiệm ẩm thực độc đáo.
                        </div>
                        <div class="my-5 font-roboto text-lg">
                            Ẩm thực Việt Nam cũng chịu ảnh hưởng mạnh mẽ từ các nền văn hóa lân cận như Trung Quốc, Ấn Độ, và các nước Đông Nam Á. Sự kết hợp này đã tạo ra những biến thể mới và độc đáo của các món ăn, mang đến cho ẩm thực Việt Nam một sự đa dạng và phong cách riêng.
                        </div>
                        <div class="my-5 font-roboto text-lg">
                            Không chỉ làm hài lòng người dân trong nước, ẩm thực Việt Nam còn thu hút sự quan tâm và yêu thích của du khách quốc tế. Du khách đến Việt Nam thường được trải nghiệm những hương vị tuyệt vời qua việc thử nếm các món ăn đặc trưng và tham gia vào các lớp học nấu ăn truyền thống. Điều này đã giúp thúc đẩy ngành du lịch và góp phần quảng bá văn hóa và ẩm thực của Việt Nam ra thế giới.
                        </div>
                        <div id="body3" class="columns-2 py-5">
                            <div
                                id="food"
                                className="aspect-video"
                                style={{ backgroundImage: `url(${FOOD2})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", borderRadius: "3px" }}
                            />
                            <div
                                id="food"
                                className="aspect-video"
                                style={{ backgroundImage: `url(${FOOD3})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", borderRadius: "3px" }}
                            />

                            {/* <image src={FOOD2} alt="" class="object-fill aspect-video rounded-tr-md rounded-br-md"/>
                            <image src={FOOD3} alt="" class="object-fill aspect-video rounded-tr-md rounded-br-md"/> */}

                        </div>

                        <div id="body4">

                            <div class="my-5 font-roboto text-lg">
                                Đúng vậy, ẩm thực Việt Nam có một sự đa dạng và phong phú, phản ánh sự kết hợp giữa nhiều vùng miền khác nhau trong nước cùng với ảnh hưởng của các nền văn hóa lân cận. Điều này đã tạo nên một bữa ăn độc đáo và hấp dẫn, không chỉ gợi nhớ về truyền thống và lịch sử mà còn thể hiện sự đa dạng về hương vị và cách chế biến.
                            </div>
                            <div class="my-5 font-roboto text-lg">

                                Mỗi vùng miền ở Việt Nam có những đặc sản riêng, thường dựa trên nguyên liệu có sẵn trong khu vực đó. Ví dụ, phở bắc có nguồn gốc từ Hà Nội, còn bún riêu cua đến từ miền Nam. Các món ăn như bánh mì phô mai ở Sài Gòn, bún chả Hà Nội, cơm tấm Sài Gòn đều là những biểu tượng ẩm thực nổi tiếng, gợi nhớ đến các thành phố và vùng miền tương ứng.
                            </div>
                            <div class="my-5 font-roboto text-lg">

                                Ẩm thực Việt Nam cũng rất chú trọng đến việc kết hợp các nguyên liệu tươi ngon và cân đối về hương vị. Sử dụng nhiều loại rau sống, thảo dược, gia vị tự nhiên, và thậm chí là việc chế biến thức ăn ngay khi đặt món làm cho các món ăn có hương vị thơm ngon và độ tươi ngon đặc trưng.
                            </div>
                            <div class="my-5 font-roboto text-lg">

                                Ngoài ra, ẩm thực Việt Nam cũng phản ánh các yếu tố văn hóa và lối sống của người dân. Trong nền ẩm thực này, có sự kết hợp giữa hương vị, cách bài trí món ăn và thậm chí là cách dùng bát đĩa. Sự kết hợp này tạo nên một trải nghiệm ẩm thực độc đáo và hấp dẫn.
                            </div>
                            <div class="my-5 font-roboto text-lg">
                                Với tất cả những điểm độc đáo này, không ngạc nhiên khi ẩm thực Việt Nam đã thu hút sự quan tâm và yêu thích của du khách quốc tế. Du khách đến Việt Nam không chỉ để thưởng thức những món ngon mà còn để hiểu về lịch sử, văn hóa và cuộc sống thông qua ẩm thực đa dạng và phong phú của đất nước này.
                            </div>
                        </div>
                    </div>

                    {/* <div class="flex flex-col divide-y-8 divide-dotted divide-yellow-500">
                        <h1 /><h1 />
                    </div> */}
                    {/* <div class="flex flex-col divide-y-8 divide-dotted divide-yellow-200">
                        <h1 /><h1 />
                    </div> */}

                    <div id="comment" class="px-10 py-3">
                        <p class="italic text-blue-400  font-roboto">
                            24 bình luận
                        </p>
                        <CommentSection />
                    </div>

                </div>
            </section>

        </React.Fragment >
    );
}

export default DetailPost;