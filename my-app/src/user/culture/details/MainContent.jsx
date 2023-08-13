import React from "react";
import { FaHeart, FaShare, FaComment, FaFacebook, FaTwitter } from 'react-icons/fa'
import { BsBookmark } from 'react-icons/bs'
import IMAGE01 from "../../../assets/images/culture_blog_01.jpg";
import FOOD2 from "../../../assets/images/food2.jpg";
import FOOD3 from "../../../assets/images/food3.jpg";
import CommentSection from "./CommentSection";

export default function MainContent() {
    return (
        <React.Fragment>
            <div className="container mx-auto flex flex-row justify-between align-middle">
                <div className="mt-10 font-roboto text-base md:text-lg lg:text-2xl text-slate-400 italic">Thứ hai, 03/04/2023 - 07:22</div>
                <div class="mt-10 flex flex-row text-sm md:text-lg lg:text-xl">
                    <FaHeart className="mt-0.5 text-[#CC3333] ml-1 cursor-pointer"></FaHeart>
                    <p className="text-slate-500 ml-3 italic">1130</p>
                    <FaComment className="mt-0.5 ml-5 cursor-pointer"></FaComment>
                    <p className="text-slate-500 ml-3 italic">244</p>
                    <FaFacebook className="mt-0.5 ml-10 cursor-pointer" />
                    <FaTwitter className="mt-0.5 ml-5 cursor-pointer" />
                    <FaShare className="mt-0.5 ml-5 cursor-pointer" />
                </div>
            </div>
            <div className="mt-10 inline-flex items-center justify-center w-full">
                <hr className="w-1/2 h-px my-8 bg-[#068096] border-0 rounded" />
                {/* <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span> */}
            </div>
            <div className="mt-10 container mx-auto">
                <div className="mx-5 font-roboto text-lg md:text-xl lg:text-3xl font-bold text-justify ">
                    Văn hóa truyền thống là hồn cốt của dân tộc, được coi như giá trị thương hiệu, quyền lực mềm, vừa là mục tiêu vừa là động lực cho sự phát triển bền vững ở Việt Nam.
                </div>

                <img className="mx-auto mt-10 w-[50%] rounded" src={IMAGE01} ></img>

                <div className="mt-5 mx-5 font-roboto text-sm md:text-base lg:text-lg text-slate-500 italic ">
                    Bảo vệ độc lập dân tộc - gốc rễ là bảo vệ bản sắc văn hóa. Ảnh minh họa/tuyengiao.vn    
                </div>

                <div className="mt-10 mx-5 font-roboto text-base md:text-lg lg:text-xl text-justify ">
                    Tuy nhiên, lợi dụng xu thế toàn cầu hóa, giao lưu, tiếp biến văn hóa của Đảng, Nhà nước, các thế lực thù địch đã và đang tìm mọi phương thức, thủ đoạn chống phá văn hóa truyền thống, sử dụng không gian mạng để du nhập, cổ xúy cho văn hóa ngoại lai, độc hại.
                </div>

                <div className="mt-10 mx-5 font-roboto text-base md:text-lg lg:text-xl text-justify ">
                    Trải qua hàng nghìn năm dựng nước và giữ nước, những tinh hoa, giá trị văn hóa của cộng đồng các dân tộc Việt Nam đã được hun đúc, vun đắp và trở thành truyền thống quý báu, đó là: "Lòng yêu nước nồng nàn, ý chí tự cường dân tộc, tinh thần đoàn kết, ý thức cộng đồng gắn kết cá nhân-gia đình-làng xã-Tổ quốc; lòng nhân ái, khoan dung, trọng nghĩa tình, đạo lý, đức tính cần cù, sáng tạo trong lao động; sự tinh tế trong ứng xử, tính giản dị trong lối sống". Những giá trị văn hóa truyền thống này đã cố kết những người dân nước Việt thành một cộng đồng thống nhất trong mọi hoạt động sống, lao động, bảo vệ, xây dựng và phát triển đất nước.
                </div>

                <div className="mt-10 mx-5 font-roboto text-base md:text-lg lg:text-xl text-justify ">
                    Những năm gần đây, các thế lực thù địch ráo riết chống phá cách mạng V  iệt Nam trên tất cả các lĩnh vực của đời sống xã hội, trong đó có văn hóa truyền thống. Sự chống phá này đã tạo ra hệ lụy không hề nhỏ, là một thứ “giặc nội xâm” đã và đang làm băng hoại thuần phong mỹ tục, giá trị truyền thống của dân tộc. Xét về mục tiêu, nội dung và lực lượng tiến hành của các thế lực thù địch trên lĩnh vực văn hóa bao gồm hai điểm chính, đan xen, hỗ trợ và có quan hệ chặt chẽ với nhau.
                </div>

                <div className="mt-10 mx-5 font-roboto text-base md:text-lg lg:text-xl text-justify ">
                    Chúng vừa dùng các lực lượng, phương tiện từ bên ngoài, vừa tận dụng phát triển các lực lượng và phương tiện ở trong nước, tạo ra sự chống đối từ xã hội, từng bước làm cho nhân tố chống đối bên trong phát triển để tập hợp lực lượng phá ta từ bên trong nội bộ Đảng và xã hội ta. Đối tượng tác động mà chúng hướng tới là quần chúng nhân dân, trước hết là thế hệ trẻ sinh ra trong thời bình, đang trong quá trình phát triển, hoàn thiện nhân cách, dễ dàng chạy theo cái mới, bản lĩnh chính trị chưa vững vàng, còn ít kinh nghiệm sống. Chúng dùng nhiều thủ đoạn tinh vi, chiêu trò thâm hiểm; đặc biệt là chiến thuật “tâm công” theo phương châm “mưa dầm thấm lâu” để đánh vào lòng người.
                </div>
            </div>
            <div className="mt-10 inline-flex items-center justify-center w-full">
                <hr className="w-1/2 h-px my-8 bg-[#068096] border-0 rounded" />
                {/* <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span> */}
            </div>


        </React.Fragment>
    );
}