import BannerSmallPost from "../components/BannerSmallPost";

const Test =()=>{
    const posts = [
        {
            url: "https://img.freepik.com/free-photo/flat-lay-fresh-sandwiches-chopping-board_23-2148381180.jpg?w=360&t=st=1691328234~exp=1691328834~hmac=59018fe95a4583aa7c2c9870008a24f0d41f49b3624eb3a7fc08c542a5089487",
            title: "Bí mật không thể bật mí của bánh mì vỉa hè??",
            uploadTime: "03/04/2023",
            timeForRead: "3 phút đọc",
            like: "1130",
            comment: "244"
        }]
    
        return (
            <div>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-7/12 pt-24  ">
                    {
                        posts.map((post, postIndex) => (
                            <BannerSmallPost postInfo={post} key={postIndex} />))
                    }
                </div>

            </div>
        )
}

export default Test;