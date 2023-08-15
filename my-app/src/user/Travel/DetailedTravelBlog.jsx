import React, {useState} from "react";
import BannerImg from "../../assets/images/son_doong.travel.jpg";
import Img_5 from "../../assets/images/son_doong_5.travel.jpg";
import SmallPost from "../../components/SmallPost";
import HoiAnImg from "../../assets/images/hoi_an.travel.jpg";
import NhaThoImg from "../../assets/images/nha_tho.travel.jpg";
import HaLongImg from "../../assets/images/ha_long_bay.travel.jpg";
import HoGuomImg from "../../assets/images/ho_guom.travel.jpg";
import { FaAngleRight } from "react-icons/fa";
import { BsBookmark, BsBookmarkHeartFill } from 'react-icons/bs'
import { FaHeart, FaComment } from "react-icons/fa";
import { AiOutlineHeart } from 'react-icons/ai'
import CommentSection from "../culture/details/CommentSection";

export default function DetailedTravelBlog() {
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  const postsHighlight = [
    {
      id: 1,
			page: 'travel',
      url: HoiAnImg,
      title: "Hội An - Nơi giao thoa văn hóa và nét đẹp kiến trúc...",
      uploadTime: "03/04/2023",
      timeForRead: "2 phút đọc",
      like: "420",
      comment: "13",
    },
    {
      id: 2,
			page: 'travel',
      url: HoGuomImg,
      title: "Hồ Gươm - Điểm đến không thể bỏ qua khi đến Hà Nội",
      uploadTime: "03/04/2023",
      timeForRead: "2 phút đọc",
      like: "420",
      comment: "13",
    },
    {
      id: 3,
			page: 'travel',
      url: NhaThoImg,
      title: "Nhà thờ Đức Bà - Biểu tượng kiến trúc của Sài Gòn",
      uploadTime: "05/04/2023",
      timeForRead: "4 phút đọc",
      like: "329",
      comment: "50",
    },
    {
      id: 4,
			page: 'travel',
      url: HaLongImg,
      title: "Vịnh Hạ Long - Nơi gặp gỡ giữa trời đất và biển cả",
      uploadTime: "03/04/2023",
      timeForRead: "2 phút đọc",
      like: "420",
      comment: "13",
    },
  ];
  return (
    <React.Fragment>
      <div className="relative">
        <img className="w-full " src={BannerImg} alt="Background" />
        <div class="z-10 absolute right-5 top-20">
          <div onClick={() => setIsActive2(!isActive2)}>
            {isActive2 ? <BsBookmarkHeartFill class="text-5xl md:text-5xl lg:text-6xl text-white cursor-pointer" /> : <BsBookmark class="text-5xl md:text-5xl lg:text-6xl text-white cursor-pointer" />}
          </div>
        </div>
        <div className=" absolute inset-0 flex flex-col text-white font-poppins  justify-center text-center  ">
          <div className="font-bold text-3xl bg-black bg-opacity-20 rounded-lg pt-10  pl-10 pr-10 mr-60 mt-20 ml-60">
            <div className="tracking-widest">
              Thiên đường bí ẩn trong lòng đất
            </div>
            <div className=" leading-8 text-5xl pt-10 space-x-0.5 tracking-wide">
              SƠN ĐOÒNG VIỆT NAM
            </div>
            <div class="ml-40 pl-80 mt-10 flex flex-row text-sm md:text-4xl lg:text-2xl ">

              <div onClick={() => setIsActive(!isActive)}>
                {isActive ? <FaHeart className="mt-0.5 text-[#CC3333] ml-1 cursor-pointer" /> : <AiOutlineHeart className="mt-0.5 text-black ml-1 cursor-pointer" />}
              </div>
              <p className="font-light">1130</p>
              <FaComment className="mt-0.5 ml-10 cursor-pointer"></FaComment>
              <p className="font-light">244</p>
            </div>
            <div className="flex flex-row ml-40 pl-40 font-light italic text-xl mt-10">
              <p className="mr-10">Ngày đăng 03/04/2023</p>
              <p>3 phút đọc</p>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-1/2 flex flex-col justify-between"></div>
      </div>

      <div className="grid grid-cols-2 gap-8 mr-20 ml-20 mb-20 mt-20">
        <div className="col-span-1 pl-10">
          <img
            className="w-full h-auto"
            src="https://i.pinimg.com/564x/b7/cd/06/b7cd0689a0dac1160d49608d7d9ede9e.jpg"
          />
          <p className="mt-10">
            Khám phá Sơn Đoòng, bạn sẽ bị cuốn vào một thế giới kỳ diệu, với
            những dòng sông, những cột đá khổng lồ và những khu rừng ngầm bất
            ngờ. Trong hang động, có một "rừng" bí ẩn với cây xanh mọc phủ kín
            một khu vực, tạo nên một bức tranh thần tiên và độc đáo. Những khám
            phá về dòng thác nước, hệ thống thạch nhũ, và những hình ảnh ánh
            sáng tự nhiên len lỏi qua lỗ thoáng đá mang đến cho bạn cảm giác như
            đang bước vào một thế giới khác.
          </p>
        </div>
        <div className="col-span-1">
          <p className="pb-10 ">
            Trong những thung lũng hùng vĩ ẩn sâu bên trong dãy núi An Nam ở
            Việt Nam, có một kỳ quan động đất gợi lên những hình ảnh kỳ bí và
            huyền bí - đó chính là Hang Sơn Đoòng. Được phát hiện vào năm 1991
            và chính thức khám phá năm 2009, Sơn Đoòng đã nhanh chóng trở thành
            một trong những điểm đến hấp dẫn nhất đối với những người yêu thiên
            nhiên và khám phá vùng đất mới.
            <br />
            <br />
            Sơn Đoòng không chỉ đơn giản là một hang động. Nó là "cõi thiên đàng
            dưới lòng đất", có chiều dài khoảng 9 km và cao đến hơn 200m. Điều
            này tạo nên một không gian vô cùng mê hoặc, với hàng loạt sông, thác
            nước và những hệ thống hầm bí ẩn. Điểm nổi bật nhất của Sơn Đoòng
            chính là lối vào hang động, có chiều rộng khoảng 150m và chiều cao
            lên đến hơn 200m, tạo nên một không gian khổng lồ chưa từng thấy.
          </p>
          <img
            className="w-full h-auto"
            src="https://i.pinimg.com/564x/4b/51/c6/4b51c6928ed00ee98e8dd3f3b3135746.jpg"
          />
        </div>
      </div>
      <div className="pl-20 mr-20 ">
        Khi bước chân vào Hang Sơn Đoòng, bạn sẽ được chứng kiến vẻ đẹp hoang sơ
        và tráng lệ của nó. Hang có chiều dài khoảng 5 kilômét và đạt độ sâu tới
        200 mét, tạo nên một không gian kỳ lạ và ma mị. Các thạch nhũ trong hang
        động có hình dạng độc đáo và đa dạng, tạo nên một bức tranh tuyệt đẹp
        của sự sáng tạo tự nhiên. <br />
        <br />
        Không chỉ về vẻ đẹp tự nhiên, Hang Sơn Đoòng còn mang trong mình những
        giá trị đáng kinh ngạc về học thuật và khoa học. Các nhà nghiên cứu đã
        tìm thấy nhiều loài động vật và thực vật mới trong hang, đóng góp vào
        việc nghiên cứu và bảo tồn đa dạng sinh học.
        <br />
        <br />
        Để có thể khám phá Hang Sơn Đoòng, bạn cần tham gia vào các chuyến thám
        hiểm được tổ chức đặc biệt. Trên hành trình này, bạn sẽ được hướng dẫn
        bởi những người dẫn đường chuyên nghiệp và trải nghiệm những hoạt động
        như đi bộ, leo núi và thậm chí dạo chơi trên dòng sông trong hang động.
        Trước khi khám phá địa điểm này, bận cần lưu ý chuẩn bị:
      </div>
      <div className="flex mr-20 ml-20">
        <div className="w-1/3 p-4">
          <img
            className="w-full h-auto pb-5"
            src="https://i.pinimg.com/564x/1c/79/bc/1c79bc1b1e5f9d5b709d3f2fc9f36ea7.jpg"
          />
          <div>
            1. <b>Sức khỏe và thể lực</b>: Hang Sơn Đoòng là một môi trường khắc
            nghiệt và khá mạo hiểm, nên yêu cầu sức khỏe và thể lực tốt. Hãy đảm
            bảo rằng bạn có đủ sức khỏe và sự chuẩn bị về thể lực để đối mặt với
            các hoạt động như đi bộ, leo núi và vượt qua các chướng ngại vật
            trong hang động.
          </div>
        </div>
        <div className="w-1/3 p-4">
          <img
            className="w-full h-auto pb-5"
            src="https://newsinfo.inquirer.net/files/2022/05/212047_trong-hang-loi-suoi-bang-day.jpeg"
          />
          <div>
            2. <b>Trang thiết bị cá nhân</b>: Hãy mang theo những trang thiết bị
            cá nhân cần thiết như giày đi bộ chắc chắn, quần áo thoáng khí, nón
            bảo hiểm, kính mát, kem chống nắng và kem chống muỗi. Đảm bảo rằng
            bạn có đủ nước uống và các đồ dùng cá nhân khác theo nhu cầu riêng
            của bạn.
          </div>
        </div>
        <div className="w-1/3 p-4">
          <img className="w-full h-auto pb-5" src={Img_5} />
          <div>
            3. <b>Đồ dùng cần thiết</b>: Khi tham quan Hang Sơn Đoòng, bạn sẽ
            được cung cấp các trang thiết bị như kính đèn, mũ bảo hiểm và dây
            thừng. Tuy nhiên, hãy đảm bảo rằng bạn tuân thủ các quy định và
            hướng dẫn sử dụng đúng cách các trang thiết bị này để đảm bảo an
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mr-20 ml-20 mb-20">
        <div className="col-span-1">
          <img
            className="w-full h-auto"
            src="https://i.pinimg.com/564x/85/f9/56/85f956ad0f9272f8d30a927a603615d2.jpg"
          />
        </div>
        <div className="col-span-1">
          Sơn Đoòng là một trong những kỳ quan thiên nhiên kỳ diệu của thế giới,
          là một hành trình đầy thách thức và phấn khích cho những người yêu mạo
          hiểm và khám phá. Khám phá Sơn Đoòng không chỉ là một chuyến đi mạo
          hiểm, mà còn là một cơ hội để thấu hiểu vẻ đẹp tuyệt vời của thiên
          nhiên và tìm hiểu những bí ẩn ẩn sâu trong lòng đất. <br />
          <br />
          Hy vọng rằng bài viết này đã đem lại cho bạn một cái nhìn toàn diện về
          Hang Sơn Đoòng và tạo ra sự tò mò và mong muốn khám phá. Nếu bạn đam
          mê khám phá, hãy tìm đến Sơn Đoòng - nơi đặc biệt, thách thức và kỳ
          diệu đang chờ đón bạn.
          <br />
          <br />
          Chúc bạn có một trải nghiệm tuyệt vời và đầy ý nghĩa!
        </div>
      </div>
      <div className="mt-20 mx-20  border border-solid border-gray-300 ">
        <div className="mx-10 my-10">
          <CommentSection />
        </div>
      </div>
      <div className="pl-10 ">
        <div className="font-medium text-4xl mb-6 mt-20">
          CÁC BÀI VIẾT LIÊN QUAN
        </div>
      </div>

      <div className="pl-2 mt-10 flex items-center justify-center max-w-screen-lg mx-auto relative mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mr-10">
          {postsHighlight.map((post, postIndex) => (
            <SmallPost postInfo={post} key={postIndex} />
          ))}
        </div>
        <div className=" absolute right-1 text-4xl text-[#1AA1D5] cursor-pointer">
          <FaAngleRight />
        </div>
      </div>
    </React.Fragment>
  );
}
