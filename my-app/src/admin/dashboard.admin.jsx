"use client";
import React from "react";
import { Route } from "react-router-dom";
import Model from "./layoutPost";
import TextEditor from "./textEditor";

import { Checkbox, Table } from "flowbite-react";

export default function DashboardAdmin() {
	const posts = [
		{
			id: "1",
			url: "http://localhost:3000/assets/culture_blog_01.jpg",
			title: "Đấu tranh bảo vệ các giá trị văn hóa truyền thống",
			uploadTime: "03/04/2023",
			timeForRead: "3 phút đọc",
			like: "1130",
			comment: "244",
			topic: "Du lịch",
		},
		{
			id: "2",

			url: "http://localhost:3000/assets/culture_blog_02.jpg",
			title: "Bộ VHTTDL sẽ tổ chức Triển lãm Du lịch qua ...",
			uploadTime: "05/04/2023",
			timeForRead: "4 phút đọc",
			like: "329",
			comment: "50",
			topic: "Du lịch",
		},
		{
			id: "3",

			url: "http://localhost:3000/assets/culture_blog_03.jpg",
			title: `Triển lãm "Không gian Di sản Văn hóa Việt Nam"`,
			uploadTime: "03/04/2023",
			timeForRead: "2 phút đọc",
			like: "420",
			comment: "13",
			topic: "Du lịch",
		},
		{
			id: "3",

			url: "http://localhost:3000/assets/culture_blog_03.jpg",
			title: `Triển lãm "Không gian Di sản Văn hóa Việt Nam"`,
			uploadTime: "03/04/2023",
			timeForRead: "2 phút đọc",
			like: "420",
			comment: "13",
			topic: "Du lịch",
		},
		{
			id: "3",

			url: "http://localhost:3000/assets/culture_blog_03.jpg",
			title: `Triển lãm "Không gian Di sản Văn hóa Việt Nam"`,
			uploadTime: "03/04/2023",
			timeForRead: "2 phút đọc",
			like: "420",
			comment: "13",
			topic: "Du lịch",
		},
		{
			id: "3",

			url: "http://localhost:3000/assets/culture_blog_03.jpg",
			title: `Triển lãm "Không gian Di sản Văn hóa Việt Nam"`,
			uploadTime: "03/04/2023",
			timeForRead: "2 phút đọc",
			like: "420",
			comment: "13",
			topic: "Du lịch",
		},
		{
			id: "3",

			url: "http://localhost:3000/assets/culture_blog_03.jpg",
			title: `Triển lãm "Không gian Di sản Văn hóa Việt Nam"`,
			uploadTime: "03/04/2023",
			timeForRead: "2 phút đọc",
			like: "420",
			comment: "13",
			topic: "Du lịch",
		},
	];
	const arrayDataItems = posts.map((item) => (
		<Table.Row className="bg-white text-start" key={item.id}>
			<Table.Cell className="p-4">
				<Checkbox />
			</Table.Cell>
			<Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
				{item.title}
			</Table.Cell>
			<Table.Cell>{item.topic}</Table.Cell>
			<Table.Cell>{item.uploadTime}</Table.Cell>
			<Table.Cell>{item.like}</Table.Cell>
			<Table.Cell>
				<a
					className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
					href="/tables"
				>
					<p>Edit</p>
				</a>
			</Table.Cell>
		</Table.Row>
	));
	const [showModel, setShowModal] = React.useState(false);
	return (
		<div>
			{/* <div className="m-5 shadow sm:shadow md:shadow lg:shadow xl:shadow">
				Dashboard1
			</div> */}
			<div className="m-5 shadow sm:shadow md:shadow lg:shadow xl:shadow text-start text-black">
				<h2 className="mb-5">Danh sách bài đăng</h2>
				<Table>
					<Table.Head className="text-start">
						<Table.HeadCell className="p-4">
							<Checkbox />
						</Table.HeadCell>
						<Table.HeadCell>Tên bài viết</Table.HeadCell>
						<Table.HeadCell>Chủ đề</Table.HeadCell>
						<Table.HeadCell>Ngày đăng</Table.HeadCell>
						<Table.HeadCell>Lượt thích</Table.HeadCell>
						<Table.HeadCell>
							<span className="sr-only">Edit</span>
						</Table.HeadCell>
					</Table.Head>
					<Table.Body className="divide-y">
						{arrayDataItems}
					</Table.Body>
				</Table>
			</div>
		</div>
	);
}
