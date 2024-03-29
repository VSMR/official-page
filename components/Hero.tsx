import type { NextPage } from 'next';
import Link from 'next/link';

const Hero: NextPage = () => {
    return (
        <div className="flex flex-col justify-center align-center px-4 py-32 flex-grow">
                <div className="text-center w-full mx-auto pt-4 pb-16 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl mb-12">
                        <span className="block text-5xl md:text-7xl">
                            VSMR | Virtual ASMR
                        </span>
                        <span className="block text-indigo-500">
                            for ASMR colab on the Internet.
                        </span>
                    </h2>
                    <p className="text-2xl mt-4 mx-auto text-gray-400">
                        VSMRはインターネット上でASMRコラボを可能にするボイスチャットプロジェクトです
                    </p>
                    <div className="lg:mt-0 lg:flex-shrink-0">
                        <div className="mt-12 inline-flex rounded-md shadow">
                            <button type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                <Link href="https://app.nocturne.ml/">
                                    使ってみる
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>

        </div>

    );
}

export default Hero;