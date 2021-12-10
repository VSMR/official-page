import { faBolt, faCheckCircle, faPlayCircle, faTty, faUserAltSlash, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next';

const Features: NextPage = () => {
    return (
        <div className="container mx-auto px-6 p-6" id="features">
            <div className="mb-16 text-center">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                    Features
                </h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    VSMRの特徴
                </p>
            </div>
            <div className="flex flex-wrap my-12 dark:text-white">
                <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
                    <div className="flex items-center mb-6">
                        <FontAwesomeIcon icon={faCheckCircle} width="32" height="32" className="h-8 w-8 text-green-500" />
                        <div className="ml-4 text-2xl font-bold">
                            簡単
                        </div>
                    </div>
                    <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                        VSMRはWebブラウザ上で使えます。配信の際に特別なアプリをインストールする必要がありません
                    </p>
                </div>
                <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
                    <div className="flex items-center mb-6">
                        <FontAwesomeIcon icon={faUserAltSlash} width="32" height="32" className="h-8 w-8 text-indigo-500" />
                        <div className="ml-4 text-2xl font-bold">
                            アカウント不要
                        </div>
                    </div>
                    <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                        VSMRを使うのにメールアドレスや
                        ユーザー名の登録は不要です。
                        使いたいときにいつでも使うことが可能です
                    </p>
                </div>
                <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
                    <div className="flex items-center mb-6">
                        <FontAwesomeIcon icon={faBolt} width="32" height="32" className="h-8 w-8 text-yellow-500" />
                        <div className="ml-4 text-2xl font-bold">
                            低遅延
                        </div>
                    </div>
                    <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                        VSMRはWebRTC技術を使い音声の遅延を
                        約0.3秒以下にしています。
                        配信中の遅延を気にする必要はありません
                    </p>
                </div>
                <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
                    <div className="flex items-center mb-6">
                        <FontAwesomeIcon icon={faPlayCircle} width="32" height="32" className="h-8 w-8 text-green-500" />
                        <div className="ml-4 text-2xl font-bold">
                            高音質
                        </div>
                    </div>
                    <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                        VSMRはバイノーラル音声での
                        ボイスチャットを可能にするために
                        他のボイスチャットの10倍以上の
                        音質での通話を可能にしています
                    </p>
                </div>
                <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
                    <div className="flex items-center mb-6">
                        <FontAwesomeIcon icon={faUserFriends} width="32" height="32" className="h-8 w-8 text-indigo-500" />
                        <div className="ml-4 text-2xl font-bold">
                            配信者目線
                        </div>
                    </div>
                    <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                        VSMRはVtuberとして活動中の
                        さきゅばのえが開発しました。
                        バイノーラル音声を使用したコラボ配信を簡単にすることができます
                    </p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-8">
                    <div className="flex items-center mb-6">
                        <FontAwesomeIcon icon={faTty} width="32" height="32" className="h-8 w-8 text-yellow-500" />
                        <div className="ml-4 text-2xl font-bold">
                            Speech to Text技術(2022年実装)
                        </div>
                    </div>
                    <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                        VSMRは通話時の音声を文字に
                        自動変換する機能を実装予定です。
                        発言内容を配信中に表示させたり、
                        問題のある発言等を文字に残すことで
                        悪用を防ぐ狙いです
                    </p>
                </div>
            </div>
        </div>

    );
}

export default Features;