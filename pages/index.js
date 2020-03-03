import Head from 'next/head'
import "../sass/styles.scss"

// COMPONENTS
import Header from '../components/Header'

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>SimProdos</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://use.typekit.net/dpw8jwa.css"></link>
			</Head>

			<Header />
			<main>
				Main Content
			</main>

			<footer>
				Footer
			</footer>

			<style jsx>{`hi`}</style>

			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: rockwell, sans-serif;
				}

				* {
					box-sizing: border-box;
				}
			`}</style>
		</div>
	)
}
  
