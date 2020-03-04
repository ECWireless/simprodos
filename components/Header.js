const Header = () => (
    <div className="header">
        <div className="header__container">
            <img
                className="header__logo"
                src="/simprodos_logo.png"
                alt="Logo"
            />
            <ul className="header__list">
                <li className="header__item">About</li>
                <li className="header__item">Services</li>
                <li className="header__item">Testimonals</li>
                <li className="header__item">Blog</li>
                <li className="header__button">Contact</li>
            </ul>
        </div>
    </div>
)

export default Header;