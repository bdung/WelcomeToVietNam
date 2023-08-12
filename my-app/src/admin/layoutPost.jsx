import React from "react";
import { BiX } from "react-icons/bi";
export default function Model({ isVisible, onClose }) {
	if (!isVisible) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
			<div className=" flex flex-col">
				<div className="bg-white p-3 rounded">
					<div className="flex justify-between items-center mb-2 text-sm font-large font-poppins text-gray-900">
						{" "}
						<p>Hủy bài đăng</p>
						<BiX onClick={() => onClose()} />
					</div>
					<div className=" mb-2 text-sm font-medium text-gray-900">
						{" "}
						Bạn chắc chắn muốn hủy ?
					</div>
					<div className="flex justify-end mt-5 w-full ">
						<button
							class="text-white text-sm  rounded-lg px-5 py-1.5
					 bg-blue-500 hover:bg-blue-600 text-center mr-3 
					 "
							onClick={() => onClose()}
						>
							Thoát
						</button>
						<button
							class="text-white  text-sm rounded-lg px-5 py-1.5
					 bg-blue-500 hover:bg-blue-600 text-center  
					 "
							onClick={() => onClose()}
						>
							Chắc chắn
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
