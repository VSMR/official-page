import type { NextPage } from 'next';
import Link from 'next/link';

const Footer: NextPage = () => {
    return (

        <footer className="bg-white dark:bg-gray-800 pt-4 pb-8 xl:pt-8">
            <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300">
                <div className="text-center text-xs pt-10 sm:pt-12 font-light">
                    <p>
                        ※1 : 実際に遅延する時間は、ネットワークトラフィックの影響を受けます。
                    </p>
                    <p>
                        ※2 : VSMRでバイノーラル音声を送るためには、ステレオマイク / バイノーラルマイクなどの左右2チャンネル以上の入出力に対応した音声入力機器が必要です。 モノラルマイクを使用した場合、相手に伝わる音声はモノラル音声になります。VSMRを使えば、必ずバイノーラル音声で音を送れるようになるとは限りませんので、ご注意ください
                    </p>
                </div>

                <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
                    <p>
                        VSMR by <Link href="https://twitter.com/398noe">Sakyuba noe. </Link>The source code is licensed GPLv3.
                    </p>
                </div>
                <div className="text-center font-light flex items-center justify-center">
                    <p>
                        VSMR Project 2020-2023 © All rights reserved.
                    </p>
                </div>
            </div>
        </footer>

    );
}

export default Footer;