import React, { Component } from 'react';

function scrollToTop() {
	window.scroll({
		top: 0,
		behavior: 'smooth'
	});
}

function scrollToAbout() {
	window.scroll({
		top: 550,
		behavior: 'smooth'
	});
}

function scrollToServices() {
	window.scroll({
		top: 1350,
		behavior: 'smooth'
	});
}

function scrollToTestimonials() {
	window.scroll({
		top: 3500,
		behavior: 'smooth'
	});
}

function scrollToBlog() {
	window.scroll({
		top: 4100,
		behavior: 'smooth'
	});
}

export default class Header extends Component {
	state = {
		menuOpen: false,
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

					{this.state.menuOpen ? <div className="header__overlay">
						<ul>
							<li>Test</li>
							<li>Test2</li>
						</ul>
					</div> : null}

					<div className="header__menu" onClick={this.onMenuOpen}>
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
							<title>menu</title>
							<path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z"></path>
						</svg>
					</div>
				
					<img
						onClick={scrollToTop}
						className="header__logo"
						src="/simprodos_logo.png"
						alt="Logo"
					/>
					<ul className="header__list">
						<li className="header__item" onClick={scrollToAbout}>About</li>
						<li className="header__item" onClick={scrollToServices}>Services</li>
						<li className="header__item" onClick={scrollToTestimonials}>Testimonals</li>
						<li className="header__item" onClick={scrollToBlog}>Blog</li>
						<a href="mailto:simprodos@gmail.com" className="header__button">Contact</a>
					</ul>
				</div>
			</div>
		)
	}
}