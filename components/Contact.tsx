import type { NextPage } from 'next';
import Link from 'next/link';

const Contact: NextPage = () => {
    return (
        <div className="container mx-auto px-6 p-6 text-center flex flex-col items-center" id="contact">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                CONTACT
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                お問い合わせ
            </p>
            <p className="text-xl my-4 leading-6 px-4 max-w-3xl mx-auto  text-gray-400">
                お問い合わせはこちらのGoogle Formからお願いします
            </p>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfr-KsmIEnbl6F54_wSAsLXlNaeIY3BvkGTagOgZ4wTgP3Ogw/viewform?embedded=true" width="100%" height="600" frameBorder="0">読み込んでいます…</iframe>
        </div>

    );
}

export default Contact;