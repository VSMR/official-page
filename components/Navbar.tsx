import type { NextPage } from 'next';
import { useState } from "react";
import { ToggleDarkMode } from './ToggleDarkMode';
import AnchorLink from "react-anchor-link-smooth-scroll";
import Link from 'next/link';
import { HiOutlineMenu } from "react-icons/hi";


const Navbar: NextPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const hamburger = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);

    }
    return (
        <div id="home" className="fixed w-screen z-50">
            <nav className="bg-white dark:bg-gray-800 dark:text-white shadow">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <AnchorLink className="flex-shrink-0" href="/">
                                <h1 className="text-3xl font-black dark:text-white">VSMR</h1>
                            </AnchorLink>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <AnchorLink href="#home" className="text-gray-800  dark:text-white hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
                                        Home
                                    </AnchorLink>
                                    <AnchorLink href="#about" className="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
                                        About
                                    </AnchorLink>
                                    <AnchorLink href="#features" className="text-gray-800 dark:text-white hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
                                        Features
                                    </AnchorLink>
                                    <AnchorLink href="#price" className="text-gray-800 dark:text-white hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
                                        Price
                                    </AnchorLink>
                                    <AnchorLink href="#try" className="text-gray-800 dark:text-white hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
                                        Try
                                    </AnchorLink>
                                    <AnchorLink href="#contact" className="text-gray-800 dark:text-white hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
                                        Contact
                                    </AnchorLink>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex justify-between items-center md:ml-6">
                                <div className="mx-3 relative">
                                    <div className="relative inline-block text-left">
                                        <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            <Link href="https://github.com/VSMR/docs">Go Github</Link>
                                        </button>
                                    </div>
                                </div>
                                <ToggleDarkMode />
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                                onClick={hamburger}>
                                <HiOutlineMenu width={20} height={20} className="h-8 w-8" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={isOpen ? "block" : "hidden" + " md:hidden"}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <AnchorLink href="#home" className="text-gray-800  dark:text-white hover:text-gray-800 dark:hover:text-white px-3 py-2 block rounded-md text-sm font-medium" >
                                Home
                            </AnchorLink>
                            <AnchorLink href="#about" className="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 block rounded-md text-sm font-medium" >
                                About
                            </AnchorLink>
                            <AnchorLink href="#features" className="text-gray-800 dark:text-white hover:text-gray-800 dark:hover:text-white px-3 py-2 block rounded-md text-sm font-medium" >
                                Features
                            </AnchorLink>
                            <AnchorLink href="#price" className="text-gray-800 dark:text-white hover:text-gray-800 dark:hover:text-white px-3 py-2 block rounded-md text-sm font-medium" >
                                Price
                            </AnchorLink>
                            <AnchorLink href="#try" className="text-gray-800 dark:text-white hover:text-gray-800 dark:hover:text-white px-3 py-2 block rounded-md text-sm font-medium" >
                                Try
                            </AnchorLink>
                            <AnchorLink href="#contact" className="text-gray-800 dark:text-white hover:text-gray-800 dark:hover:text-white px-3 py-2 block rounded-md text-sm font-medium" >
                                Contact
                            </AnchorLink>
                            <div className="flex items-center justify-between pr-4">
                                <div className="relative inline-block">
                                    <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        <Link href="./">Go Github</Link>
                                    </button>
                                </div>
                                <ToggleDarkMode />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;