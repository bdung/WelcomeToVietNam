export const getCommentsData = async () => {
  return [
    {
      _id: "10",
      user: {
        _id: "a",
        name: "Trần Văn A",
        avatar: "http://localhost:3000/assets/culture_blog_01.jpg"
      },
      desc: "Mình cũng vừa đi du lịch về nè. Tuyệt !",
      post: "1",
      parent: null,
      replyOnUser: null,
      createdAt: "2022-12-31T17:22:05.092+0000",
    },
    {
      _id: "11",
      user: {
        _id: "b",
        name: "Lâm Ánh Hạ",
        avatar: "https://i.pravatar.cc/300"
      },
      desc: "Nghe mn nói mà nôn đi quá",
      post: "1",
      parent: "10",
      replyOnUser: "a",
      createdAt: "2022-12-31T17:22:05.092+0000",
    },
    {
      _id: "12",
      user: {
        _id: "c",
        name: "Trần Nhật Minh",
        avatar: "https://i.pravatar.cc/301"
      },
      desc: "Nghe mn nói mà nôn đi quá",
      post: "1",
      parent: null,
      replyOnUser: null,
      createdAt: "2022-12-31T17:22:05.092+0000",
    },
    {
      _id: "13",
      user: {
        _id: "d",
        name: "Nguyễn Bảo Hân",
        avatar: "https://i.pravatar.cc/302"
      },
      desc: "Cám ơn chủ blog, chia sẻ rất bổ ích",
      post: "1",
      parent: null,
      replyOnUser: null,
      createdAt: "2022-12-31T17:22:05.092+0000",
    },
  ];
};
