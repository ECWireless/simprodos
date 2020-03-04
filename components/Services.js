

const Services = () => (
    <div className="services">
        <h3 className="services__subheading">Services</h3>
        <div className="services__line" />
        <h2 className="services__heading">What SimProdos Offers</h2>

        <div className="services__circle services__circle--1" />
        <img
            className="services__photo services__photo--1"
            src="/services__photo-1.jpg"
            alt="Moving"
        />

        <div className="services__container">
            <h3 className="services__services-heading servicse__heading--1">Moving Assistance</h3>
            <ul className="services__list">
                <li className="services__item">Clearing and Staging Area</li>
                <li className="services__item">Packing</li>
                <li className="services__item">Space Planning New Area</li>
                <li className="services__item">Unpacking</li>
                <li className="services__item">Transition Services</li>
            </ul>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="services__svg" viewBox="0 0 32 32">
                <title>Moving</title>
                <path d="M32 18l-4-8h-6v-4c0-1.1-0.9-2-2-2h-18c-1.1 0-2 0.9-2 2v16l2 2h2.536c-0.341 0.588-0.536 1.271-0.536 2 0 2.209 1.791 4 4 4s4-1.791 4-4c0-0.729-0.196-1.412-0.536-2h11.073c-0.341 0.588-0.537 1.271-0.537 2 0 2.209 1.791 4 4 4s4-1.791 4-4c0-0.729-0.196-1.412-0.537-2h2.537v-6zM22 18v-6h4.146l3 6h-7.146z"></path>
            </svg>
            <button className="services__button services__button--1">Get a Quote</button>
        </div>
    </div>
)

export default Services;