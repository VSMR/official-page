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
                <title>VSMR | Virtual ASMR</title>
                <meta name="description" content="VSMR is voice chat project for ASMR colab on the Internet." />
                <link rel="icon" href="/favicon.ico" />
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
