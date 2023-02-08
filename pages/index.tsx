import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Price from '../components/Price'
import Try from '../components/Try'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1.0" />
                <title>VSMR | Virtual ASMR</title>
                <meta name="description" content="VSMR is voice chat project for ASMR colab on the Internet." />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:url" content="https://nocturne.ml" />
                <meta property="og:title" content="VSMR | Virtual ASMR" />
                <meta property="og:site_name" content="VSMR | Virtual ASMR" />
                <meta property="og:description" content="VSMR is voice chat project for ASMR colab on the Internet." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://nocturne.ml/ogp.png" />
                <meta name="twitter:image:src" content="https://nocturne.ml/ogp.png" />
                <meta name="twitter:title" content="VSMR - バイノーラル対応ボイスチャット" />
                <meta name="twitter:text:title" content="VSMR - バイノーラル対応ボイスチャット" />
                <meta name="twitter:description" content="VSMRはインターネット上でASMRコラボを可能にするボイスチャットプロジェクトです💪" />
                <meta name="twitter:site" content="@398noe" />
                <meta name="twitter:creator" content="@398noe" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Navbar />

            <main className="bg-white dark:bg-gray-800">
                <Hero />
                <About />
                <Features />
                <Price />
                <Try />
                <Contact />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Home
