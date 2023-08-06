import React from "react";
import { useState } from 'react';
// import { Button, IconButton } from "@material-tailwind/react";
// import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
 
const Pagination = ({total, current, onChange}) => {
    let items = []

    if (current > 1) {
        items.push(
            <li>
                <p className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span className="sr-only">Previous</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                    </svg>
                </p>
            </li>
        )
    }

    for (let page = 1; page <= total; page++) {
        items.push(
            page === current ?

                <li>
                    <p aria-current="page" className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{current}</p>
                </li>
                :
                <li>
                    <p className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{page}</p>
                </li>
        )
    }

    if (current < total) {
        items.push(
            <li>
                <p className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span className="sr-only">Next</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                    </svg>
                </p>
            </li>
        )
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-10 text-base">
                {items}
            </ul> 
        </nav> 
    );



}

export default Pagination;