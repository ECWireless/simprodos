import Head from 'next/head'
import "../sass/styles.scss"

// COMPONENTS
import Header from '../components/Header'
import Intro from '../components/Intro'
import About from '../components/About'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

export default function Home() {
	
	return (
		<div className="container">
			<Head>
				<title>SimProdos</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://use.typekit.net/dpw8jwa.css"></link>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"></link>
			</Head>

			<Header />
			<main>
				<Intro />
				<About />
				<Services />
				<Testimonials />
				<Blog />
			</main>

			<footer>
				<Footer />
			</footer>
		</div>
	)
}
  
