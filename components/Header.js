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

const Header = () => (
    <div className="header">
        <div className="header__container">
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

export default Header;