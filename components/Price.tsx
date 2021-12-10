import type { NextPage } from 'next';

const Price: NextPage = () => {
    return (
        <div className="container mx-auto px-6 p-6 text-center" id="price">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                Price
            </h2>
            <p className="my-2 text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Free.
                <span className="px-4 text-4xl font-extralight">無料です</span>
            </p>
            <p className="text-xl my-4 leading-6 px-4 max-w-3xl mx-auto  text-gray-400">
                VSMRはオープンソースプロジェクトです。GPLv3ライセンスの元開発されています
            </p>
            <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                <a href="https://github.com/VSMR/docs">
                    View Source Code
                </a>
            </button>
        </div>
    );
}

export default Price;