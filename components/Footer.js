const Footer = () => (
    <div className="footer">
        <h2 className="footer__heading">Contact</h2>
        <div className="footer__line-top" />

        <a href="tel:1-412735-9417" className="footer__number">(412) 735-9417</a>
        <div className="footer__line-left" />
        <a href="mailto:simprodos@gmail.com" className="footer__email">simprodos@gmail.com</a>
        <div className="footer__line-right" />

        <a href="https://www.facebook.com/simprodos/" className="footer__facebook-link" target="_blank" rel="noopener noreferrer">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="footer__facebook" viewBox="0 0 32 32">
                <title>facebook</title>
                <path d="M31.997 15.999c0-8.836-7.163-15.999-15.999-15.999s-15.999 7.163-15.999 15.999c0 7.985 5.851 14.604 13.499 15.804v-11.18h-4.062v-4.625h4.062v-3.525c0-4.010 2.389-6.225 6.043-6.225 1.75 0 3.581 0.313 3.581 0.313v3.937h-2.017c-1.987 0-2.607 1.233-2.607 2.498v3.001h4.437l-0.709 4.625h-3.728v11.18c7.649-1.2 13.499-7.819 13.499-15.804z"></path>
            </svg>
        </a>

        <a href="https://www.linkedin.com/company/simprodos/about/" className="footer__linkedin-link" target="_blank" rel="noopener noreferrer">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="footer__linkedin" viewBox="0 0 512 512">
                <title>LinkedIn</title>
                <path d="M464 0h-416c-26.4 0-48 21.6-48 48v416c0 26.4 21.6 48 48 48h416c26.4 0 48-21.6 48-48v-416c0-26.4-21.6-48-48-48zM192 416h-64v-224h64v224zM160 160c-17.7 0-32-14.3-32-32s14.3-32 32-32c17.7 0 32 14.3 32 32s-14.3 32-32 32zM416 416h-64v-128c0-17.7-14.3-32-32-32s-32 14.3-32 32v128h-64v-224h64v39.7c13.2-18.1 33.4-39.7 56-39.7 39.8 0 72 35.8 72 80v144z"></path>
            </svg>
        </a>
    </div>
)

export default Footer;