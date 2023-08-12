import React, { useState, Fragment } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import search from "../assets/images/search.png";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import SmallPost from '../components/SmallPost';
import Pagination from './food/PaginationBar';

const sortOptions = [
    { name: 'Phổ biến nhất', href: '#', current: true },
    { name: 'Đánh giá cao nhất', href: '#', current: false },
    { name: 'Mới nhất', href: '#', current: false },
]
const subCategories = [
    { name: 'Du lịch', href: '#' },
    { name: 'Văn hóa', href: '#' },
    { name: 'Ấm thực', href: '#' },
    { name: 'Khác', href: '#' },
]
const filters = [
    {
        id: 'color',
        name: 'Du lịch',
        options: [
            { value: 'Tất cả', label: 'Tất cả', checked: false },
            { value: 'Phiêu lưu và thám hiểm', label: 'Phiêu lưu và thám hiểm', checked: false },
            { value: 'Du lịch bụi', label: 'Du lịch bụi', checked: true },
            { value: 'Thiên nhiên', label: 'Thiên nhiên', checked: false },
            { value: 'Kì quan', label: 'Kì quan', checked: false },
            { value: 'Di tích lịch sử', label: 'Di tích lịch sử', checked: false },
        ],
    },
    {
        id: 'category',
        name: 'Văn hóa',
        options: [
            { value: 'Tất cả', label: 'Văn hóa', checked: false },
            { value: 'Địa phương', label: 'Địa phương', checked: false },
            { value: 'Nghệ thuật', label: 'Nghệ thuật', checked: true },
            { value: 'Lệ hội và sự kiện', label: 'Lễ hội và sự kiện', checked: false },
            { value: 'Môi trường', label: 'Môi trường', checked: false },
        ],
    },
    {
        id: 'size',
        name: 'Ẩm thực',
        options: [
            { value: 'Tất cả', label: 'Tất cả', checked: false },
            { value: 'Miền Bắc', label: 'Miền Bắc', checked: false },
            { value: 'Miền Trung', label: 'Miền Trung', checked: false },
            { value: 'Miền Nam', label: 'Miền Nam', checked: false },
            { value: 'Lễ hội và sự kiện', label: 'Lễ hội và sự kiện', checked: false },
            { value: 'Hướng dẫn ẩm thực', label: 'Hướng dẫn ẩm thực', checked: true },
        ],
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Search() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    const [activeSearch, setActiveSearch] = useState([])

    const handleSearch = (e) => {
        if (e.target.value == '') {
            setActiveSearch([])
            return false
        }
    }

    const posts = [


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
        }, {
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
        }]
    return (
        <React.Fragment>
            <div className="absolute text-white font-poppins ">
                <div className='mt-[120px] ml-[450px]'>
                    <div className="font-bold text-6xl mb-5  flex justify-center items-center ">
                        Tìm kiếm
                    </div>
                    <form className='w-[500px] relative '>
                        <div className="relative">
                            <input type="search" placeholder='Nhập bài viết cần tìm..' className='w-full p-4 rounded-full bg-white-500 bg-obacity-30 text-black ' onChange={(e) => handleSearch(e)} />
                            <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-600 rounded-full'>
                                <AiOutlineSearch />
                            </button>
                        </div>

                        {
                            activeSearch.length > 0 && (
                                <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
                                    {
                                        activeSearch.map(s => (
                                            <span>{s}</span>
                                        ))
                                    }
                                </div>
                            )
                        }

                    </form>
                </div>
            </div>
            <img src={search} className='h-[350px] w-full' />

            <div className="bg-white">

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-12">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Bài viết</h1>

                        <div className="flex items-center">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                        Sắp xếp
                                        <ChevronDownIcon
                                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            {sortOptions.map((option) => (
                                                <Menu.Item key={option.name}>
                                                    {({ active }) => (
                                                        <a
                                                            href={option.href}
                                                            className={classNames(
                                                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            {option.name}
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>

                            <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                <span className="sr-only">View grid</span>
                                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="sr-only">Filters</span>
                                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pb-24 pt-6">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 ">
                            {/* Filters */}
                            <form className="hidden lg:block pr-6">
                                {filters.map((section) => (
                                    <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                                        {({ open }) => (
                                            <>
                                                <h3 className="-my-3 flow-root">
                                                    <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                        <span className="font-medium text-gray-900 ">{section.name}</span>
                                                        <span className="ml-6 flex items-center">
                                                            {open ? (
                                                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                            ) : (
                                                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </h3>
                                                <Disclosure.Panel >
                                                    <div className="space-y-4 mt-4">
                                                        {section.options.map((option, optionIdx) => (
                                                            <div key={option.value} className="flex items-center">
                                                                <input
                                                                    id={`filter-${section.id}-${optionIdx}`}
                                                                    name={`${section.id}[]`}
                                                                    defaultValue={option.value}
                                                                    type="checkbox"
                                                                    defaultChecked={option.checked}
                                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                />
                                                                <label
                                                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                    className="ml-3 text-sm text-gray-600"
                                                                >
                                                                    {option.label}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}
                            </form>
                            <div className="lg:col-span-3">

                                <div className="mt-4 flex items-center justify-center max-w-screen-lg container mx-auto">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                        {
                                            posts.map((post, postIndex) => (
                                                <SmallPost postInfo={post} key={postIndex} />))
                                        }
                                    </div>
                                </div>
                                {/* Pagination */}
                                <div className="mt-10 flex items-center justify-center max-w-screen-lg container mx-auto">
                                    <Pagination total={5} current={2} />
                                </div>


                            </div>
                        </div>
                    </section>
                </main>
            </div>


        </React.Fragment>
    )
}

export default Search;