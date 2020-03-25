import React, { Component } from 'react';

export default class Header extends Component {
	state = {
		menuOpen: false,
	}


	scrollToTop = () => {
		window.scroll({
			top: 20,
			behavior: 'smooth'
		});

		this.setState({
			...this.state,
			menuOpen: false,
		})
	}

	scrollToAbout = () => {
		if (window.matchMedia('(max-width: 600px)').matches) {
			window.scroll({
				top: 350,
				behavior: 'smooth'
			});
		} else if (window.matchMedia('(max-width: 900px)').matches) {
			window.scroll({
				top: 450,
				behavior: 'smooth'
			});
		} else if (window.matchMedia('(max-width: 1800px)').matches) {
			window.scroll({
				top: 550,
				behavior: 'smooth'
			});
		} else {
			window.scroll({
				top: 850,
				behavior: 'smooth'
			});
		}

		this.setState({
			...this.state,
			menuOpen: false,
		})
	}

	scrollToServices = () => {
		if (window.matchMedia('(max-width: 400px)').matches) {
			window.scroll({
				top: 1100,
				behavior: 'smooth'
			});
		} else if (window.matchMedia('(max-width: 600px)').matches) {
			window.scroll({
				top: 1200,
				behavior: 'smooth'
			});
		} else if (window.matchMedia('(max-width: 900px)').matches) {
			window.scroll({
				top: 1270,
				behavior: 'smooth'
			});
		} else if (window.matchMedia('(max-width: 1800px)').matches) {
			window.scroll({
				top: 1550,
				behavior: 'smooth'
			});
		} else {
			window.scroll({
				top: 1850,
				behavior: 'smooth'
			});
		}

		this.setState({
			...this.state,
			menuOpen: false,
		})
	}

	scrollToTestimonials = () => {
		if (window.matchMedia('(max-width: 400px)').matches) {
			window.scroll({
				top: 3850,
				behavior: 'smooth'
			});
		} else if (window.matchMedia('(max-width: 600px)').matches) {
			window.scroll({
				top: 3970,
				behavior: 'smooth'
			});
		} else if (window.matchMedia('(max-width: 900px)').matches) {
			window.scroll({
				top: 3020,
				behavior: 'smooth'
			});
		} else if (window.matchMedia('(max-width: 1800px)').matches) {
			window.scroll({
				top: 3700,
				behavior: 'smooth'
			});
		} else {
			window.scroll({
				top: 4000,
				behavior: 'smooth'
			});
		}

		this.setState({
			...this.state,
			menuOpen: false,
		})
	}

	scrollToBlog = () => {
		if (window.matchMedia('(max-width: 400px)').matches) {
			window.scroll({
				top: 4800,
				behavior: 'smooth'
			});
		} else if (window.matchMedia('(max-width: 600px)').matches) {
			window.scroll({
				top: 4950,
				behavior: 'smooth'
			});
		} else if (window.matchMedia('(max-width: 900px)').matches) {
			window.scroll({
				top: 3540,
				behavior: 'smooth'
			});
		} else if (window.matchMedia('(max-width: 1800px)').matches) {
			window.scroll({
				top: 4300,
				behavior: 'smooth'
			});
		} else {
			window.scroll({
				top: 4600,
				behavior: 'smooth'
			});
		}

		this.setState({
			...this.state,
			menuOpen: false,
		})
	}

	onMenuOpen = () => {
		this.setState({
			...this.state,
			menuOpen: !this.state.menuOpen,
		})
	}

	render() {
		return (
			<div className="header">
				<div className="header__container">

					{this.state.menuOpen ? <div className='header__overlay'>
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
							className="header__overlay-close" viewBox="0 0 32 32"
							onClick={this.onMenuOpen}
						>
							<title>cancel-circle</title>
							<path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
							<path d="M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"></path>
						</svg>
						<ul className="header__overlay-list">
							<li className="header__overlay-about" onClick={this.scrollToAbout}>About</li>
							<li className="header__overlay-services" onClick={this.scrollToServices}>Services</li>
							<li className="header__overlay-testimonials" onClick={this.scrollToTestimonials}>Testimonals</li>
							<li className="header__overlay-blog" onClick={this.scrollToBlog}>Blog</li>
						</ul>
					</div> : null }

					<div className="header__menu" onClick={this.onMenuOpen}>
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
							<title>menu</title>
							<path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z"></path>
						</svg>
					</div>
				
					<img
						onClick={this.scrollToTop}
						className="header__logo"
						src="/simprodos_logo.png"
						alt="Logo"
					/>
					<ul className="header__list">
						<li className="header__item" onClick={this.scrollToAbout}>About</li>
						<li className="header__item" onClick={this.scrollToServices}>Services</li>
						<li className="header__item" onClick={this.scrollToTestimonials}>Testimonals</li>
						<li className="header__item" onClick={this.scrollToBlog}>Blog</li>
						<a href="mailto:simprodos@gmail.com" className="header__button">Contact</a>
					</ul>
				</div>
			</div>
		)
	}
}