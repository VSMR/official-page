import type { NextPage } from 'next';

const About: NextPage = () => {
    return (
        <div className="bg-white dark:bg-gray-800 px-16" id="about">
            <div className="mb-16 text-center">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                    About
                </h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    What is VSMR?
                </p>
                <p className="text-xl mt-4 leading-6 max-w-3xl mx-auto  text-gray-400">
                    VSMRはインターネットでバイノーラル音声をやり取りできるボイスチャットサービスです。
                    VSMRは、VirtualとASMRの言葉を掛け合わせたもので、主にバーチャルYouTuberのバイノーラルコラボ配信で使用することを目的として開発されました。
                    今までのバイノーラル音声コラボでは、実際に同じ場所でバイノーラルをしたり、SYNCROOMのような特別なアプリをインストールして行われてきましたが、VSMRではWebブラウザ上で簡単に音声のやり取りができるようになります。
                </p>
            </div>
        </div>
    );
}

export default About;