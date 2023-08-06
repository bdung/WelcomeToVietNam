import React from "react"
import HomeImg from "../assets/images/home_img.png"
import SmallPost from "../components/SmallPost"
import { FaAngleRight } from "react-icons/fa";

export default function UserHomePage() {
    const postsCulture = [
        {
            url: "http://localhost:3000/assets/culture_blog_01.jpg",
            title: "Đấu tranh bảo vệ các giá trị văn hóa truyền thống",
            uploadTime: "03/04/2023",
            timeForRead: "3 phút đọc",
            like: "1130",
            comment: "244"
        },
        {
            url: "http://localhost:3000/assets/culture_blog_02.jpg",
            title: "Bộ VHTTDL sẽ tổ chức Triển lãm Du lịch qua ...",
            uploadTime: "05/04/2023",
            timeForRead: "4 phút đọc",
            like: "329",
            comment: "50"
        },
        {
            url: "http://localhost:3000/assets/culture_blog_03.jpg",
            title: `Triển lãm "Không gian Di sản Văn hóa Việt Nam"`,
            uploadTime: "03/04/2023",
            timeForRead: "2 phút đọc",
            like: "420",
            comment: "13"
        }]
    const postsFood = [
        {
            url: "https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-wall_181624-34158.jpg?w=996&t=st=1691328169~exp=1691328769~hmac=852a451b5dfd23dc9e3f342af39a8a8431b96abd6a8eb98ddc638dc4178d0e63",
            title: "Những món ngon không nên bỏ lỡ khi đến Hà Nội!",
            uploadTime: "03/04/2023",
            timeForRead: "3 phút đọc",
            like: "10",
            comment: "2"
        },
        {
            url: "https://img.freepik.com/free-photo/flat-lay-fresh-sandwiches-chopping-board_23-2148381180.jpg?w=360&t=st=1691328234~exp=1691328834~hmac=59018fe95a4583aa7c2c9870008a24f0d41f49b3624eb3a7fc08c542a5089487",
            title: "Bí mật không thể bật mí của bánh mì vỉa hè??",
            uploadTime: "05/04/2023",
            timeForRead: "4 phút đọc",
            like: "329",
            comment: "50"
        },
        {
            url: "https://img.freepik.com/free-photo/high-angle-vietnamese-dish-with-mint_23-2148381198.jpg?w=360&t=st=1691328174~exp=1691328774~hmac=9e0953bc97d2f261475148b238f2b6ea77e0b40c478676b36fe956f888ab9918",
            title: `Phở của Việt Nam đáng thưởng thức ra sao?`,
            uploadTime: "03/04/2023",
            timeForRead: "2 phút đọc",
            like: "110",
            comment: "24"
        }]
    const postsTravel = [
        {
            url: "https://as2.ftcdn.net/v2/jpg/02/84/81/79/1000_F_284817904_ox8667zRGi9LQl4ocAGlNoV7kkqImkuQ.jpg",
            title: "Ruộng bậc thang Hà Giang - nét đẹp miền núi...",
            uploadTime: "03/04/2023",
            timeForRead: "3 phút đọc",
            like: "10",
            comment: "2"
        },
        {
            url: "https://img.freepik.com/free-photo/peak-bamboo-lijiang-rural-mist_1417-410.jpg?w=996&t=st=1691327697~exp=1691328297~hmac=0a5a31b3d1dc6a46ab5eda0a2c867821df306e7c112c90a950c178a555fe8599",
            title: "Vịnh Hạ Long, một nơi không thể không đến!",
            uploadTime: "05/04/2023",
            timeForRead: "4 phút đọc",
            like: "329",
            comment: "50"
        },
        {
            url: "https://img.freepik.com/free-photo/vacation-stone-vietnam-fresh-green-china_1417-1360.jpg?w=996&t=st=1691327741~exp=1691328341~hmac=768bfbc260f7112eb463fa1836647c5a49fb7184ebcb6ba65f754c3aa62d15ec",
            title: `Khám phá những con thác hùng vĩ của Việt Nam `,
            uploadTime: "03/04/2023",
            timeForRead: "2 phút đọc",
            like: "110",
            comment: "24"
        }]
        const postsHighlight = [
    
                
            {
                url: "https://img.freepik.com/free-photo/peak-bamboo-lijiang-rural-mist_1417-410.jpg?w=996&t=st=1691327697~exp=1691328297~hmac=0a5a31b3d1dc6a46ab5eda0a2c867821df306e7c112c90a950c178a555fe8599",
                title: "Vịnh Hạ Long, một nơi không thể không đến!",
                uploadTime: "05/04/2023",
                timeForRead: "4 phút đọc",
                like: "329",
                comment: "50"
            },
            {
                url: "https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-wall_181624-34158.jpg?w=996&t=st=1691328169~exp=1691328769~hmac=852a451b5dfd23dc9e3f342af39a8a8431b96abd6a8eb98ddc638dc4178d0e63",
                title: "Những món ngon không nên bỏ lỡ khi đến Hà Nội!",
                uploadTime: "03/04/2023",
                timeForRead: "3 phút đọc",
                like: "10",
                comment: "2"
            },
        
            {
                url: "https://img.freepik.com/free-photo/flat-lay-fresh-sandwiches-chopping-board_23-2148381180.jpg?w=360&t=st=1691328234~exp=1691328834~hmac=59018fe95a4583aa7c2c9870008a24f0d41f49b3624eb3a7fc08c542a5089487",
                title: "Bí mật không thể bật mí của bánh mì vỉa hè??",
                uploadTime: "05/04/2023",
                timeForRead: "4 phút đọc",
                like: "329",
                comment: "50"
            },
            {
                url: "https://img.freepik.com/free-photo/high-angle-vietnamese-dish-with-mint_23-2148381198.jpg?w=360&t=st=1691328174~exp=1691328774~hmac=9e0953bc97d2f261475148b238f2b6ea77e0b40c478676b36fe956f888ab9918",
                title: `Phở của Việt Nam đáng thưởng thức ra sao?`,
                uploadTime: "03/04/2023",
                timeForRead: "2 phút đọc",
                like: "110",
                comment: "24"
            }]

    return (
        <React.Fragment>
            <div className="absolute text-white ml-9 mt-40  font-poppins">
                <div className="font-bold text-8xl mb-6">
                    <div className="mb-3">Welcome to</div>
                    <div>VIET NAM</div>
                </div>

                <div className="flex font-light text-sm  font-poppins">
                    <div className="mr-3">28.08.2023</div>
                    <div className="mr-3">____</div>
                    <div className="w-80">Việt Nam - một quốc gia Đông Nam Á. Việt Nam có thiên nhiên hùng vĩ, ẩm thực đặc sắc và một nền văn hiến ngàn năm. Chào mừng bạn đến với Việt Nam!</div>
                </div>
            </div>

            <img src={HomeImg} />

            <div className="flex justify-around items-center  font-poppins">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-7/12 pt-24  ">
                    {
                        postsTravel.map((post, postIndex) => (
                            <SmallPost postInfo={post} key={postIndex} />))
                    }
                </div>
                <div className="text-black  ">
                    <div className="font-bold text-6xl mb-6">DU LỊCH</div>
                    <div className="font-lg  text-lg w-80 ">Bao gồm các bài viết về các địa điểm du lịch và những trải nghiệm ở đó.</div>
                </div>
            </div>

            <div className="flex justify-around items-center font-poppins  ">
                <div className="text-black  ">
                    <div className="font-bold text-6xl mb-6">ẨM THỰC</div>
                    <div className=" font-base font-medium text-lg w-80 ">Những món ăn ngon đặc trưng cho các vùng miền.</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-7/12 pt-24  ">
                    {
                        postsFood.map((post, postIndex) => (
                            <SmallPost postInfo={post} key={postIndex} />))
                    }
                </div>

            </div>

            <div className="flex justify-around items-center mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-7/12 pt-24  ">
                    {
                        postsCulture.map((post, postIndex) => (
                            <SmallPost postInfo={post} key={postIndex} />))
                    }
                </div>
                <div className="text-black font-poppins ">
                    <div className="font-bold text-6xl mb-6">VĂN HÓA</div>
                    <div className="font-medium font-base  text-lg w-80 ">Bao gồm các bài viết về văn hóa đặc sắc mang đậm bản sắc dân tộc của Việt Nam.</div>
                </div>
            </div>
            <div className="pl-20">
            <div className="font-medium text-4xl mb-6">CÁC BÀI VIẾT NÊN ĐỌC</div>
            <ul className="text-black-800 flex">
            <li  className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2  mr-10  " >Tất cả</li>
            <li  className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2 mr-10 " > Du lịch</li>
            <li  className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2  mr-10 " >Ẩm thực</li>
            <li  className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2  mr-10 " >Văn hóa</li>
            
            </ul>
            </div>
          
            <div className="mt-10 flex items-center justify-center max-w-screen-lg mx-auto relative mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mr-10"> 
                    {
                    postsHighlight.map((post, postIndex) => (
                        <SmallPost postInfo={post} key={postIndex}/>)) 
                    }
                </div>
                <div className=" absolute right-1 text-4xl text-[#1AA1D5] cursor-pointer">
                    <FaAngleRight />
                </div>

            </div>



        </React.Fragment>
    )
}

