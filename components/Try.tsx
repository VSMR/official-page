import type { NextPage } from 'next';
import Link from 'next/link';

const Try: NextPage = () => {
    return (
        <div className="container mx-auto px-6 p-6 text-center flex flex-col items-center" id="try">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                Try
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                使ってみよう
            </p>
            <p className="text-xl my-4 leading-6 px-4 max-w-3xl mx-auto  text-gray-400">
                VSMRは以下のリンクから使うことができます
            </p>
            <button type="button" className="py-2 px-4 my-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                <Link href="https://app.nocturne.ml/">
                    Start VSMR
                </Link>
            </button>
        </div>

    );
}

export default Try;