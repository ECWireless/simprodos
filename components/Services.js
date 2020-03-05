

const Services = () => (
    <div className="services">
        <h3 className="services__subheading">Services</h3>
        <div className="services__line" />
        <h2 className="services__heading">What SimProdos Offers</h2>

        {/* MOVING ASSISTANT */}
        <div className="services__circle services__circle--1" />
        <img
            className="services__photo services__photo--1"
            src="/services__photo-1.jpg"
            alt="Moving"
        />
        <div className="services__container services__container--1">
            <h3 className="services__services-heading">Moving Assistance</h3>
            <ul className="services__list services__list--1">
                <li className="services__item">Clearing and Staging Area</li>
                <li className="services__item">Packing</li>
                <li className="services__item">Space Planning New Area</li>
                <li className="services__item">Unpacking</li>
                <li className="services__item">Transition Services</li>
            </ul>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="services__svg services__svg--1" viewBox="0 0 32 32">
                <title>truck</title>
                <path d="M32 18l-4-8h-6v-4c0-1.1-0.9-2-2-2h-18c-1.1 0-2 0.9-2 2v16l2 2h2.536c-0.341 0.588-0.536 1.271-0.536 2 0 2.209 1.791 4 4 4s4-1.791 4-4c0-0.729-0.196-1.412-0.536-2h11.073c-0.341 0.588-0.537 1.271-0.537 2 0 2.209 1.791 4 4 4s4-1.791 4-4c0-0.729-0.196-1.412-0.537-2h2.537v-6zM22 18v-6h4.146l3 6h-7.146z"></path>
            </svg>
            <button className="services__button">Get a Quote</button>
        </div>

        {/* ORGANIZING WHOLE AREA */}
        <div className="services__circle services__circle--2" />
        <img
            className="services__photo services__photo--2"
            src="/services__photo-2.jpg"
            alt="Moving"
        />
        <div className="services__container services__container--2">
            <h3 className="services__services-heading">Organizing Whole Area</h3>
            <ul className="services__list services__list--2">
                <li className="services__item">Clearing and Area</li>
                <li className="services__item">Donate, Toss, and Keep</li>
                <li className="services__item">Space Planning for Space</li>
            </ul>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="services__svg services__svg--2" viewBox="0 0 32 32">
                <title>home</title>
                <path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></path>
            </svg>
            <button className="services__button">Get a Quote</button>
        </div>

        {/* ORGANIZING */}
        <div className="services__circle services__circle--3" />
        <img
            className="services__photo services__photo--3"
            src="/services__photo-3.jpg"
            alt="Moving"
        />
        <div className="services__container services__container--3">
            <h3 className="services__services-heading">Organizing</h3>
            <ul className="services__list services__list--3">
                <li className="services__item" style={{marginBottom: '2rem'}}>Organizing small spaces.</li>
                <li className="services__item">Includes closet, pantry, drawer clean
                    out and reorganize. With or without
                    client present.
                </li>
            </ul>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="services__svg services__svg--3" viewBox="0 0 32 32">
                <title>drawer</title>
                <path d="M31.781 20.375l-8-10c-0.19-0.237-0.477-0.375-0.781-0.375h-14c-0.304 0-0.591 0.138-0.781 0.375l-8 10c-0.142 0.177-0.219 0.398-0.219 0.625v9c0 1.105 0.895 2 2 2h28c1.105 0 2-0.895 2-2v-9c0-0.227-0.077-0.447-0.219-0.625zM30 22h-7l-4 4h-6l-4-4h-7v-0.649l7.481-9.351h13.039l7.481 9.351v0.649z"></path>
                <path d="M23 16h-14c-0.552 0-1-0.448-1-1s0.448-1 1-1h14c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path>
                <path d="M25 20h-18c-0.552 0-1-0.448-1-1s0.448-1 1-1h18c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path>
            </svg>
            <button className="services__button">Get a Quote</button>
        </div>

        {/* SPACE PLANNING */}
        <div className="services__circle services__circle--4" />
        <img
            className="services__photo services__photo--4"
            src="/services__photo-4.jpg"
            alt="Moving"
        />
        <div className="services__container services__container--4">
            <h3 className="services__services-heading">Space Planning</h3>
            <ul className="services__list services__list--4">
                <li className="services__item">Room and furniture arrangement.</li>
            </ul>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="services__svg services__svg--4" viewBox="0 0 32 32">
                <title>enlarge</title>
                <path d="M32 0h-13l5 5-6 6 3 3 6-6 5 5z"></path>
                <path d="M32 32v-13l-5 5-6-6-3 3 6 6-5 5z"></path>
                <path d="M0 32h13l-5-5 6-6-3-3-6 6-5-5z"></path>
                <path d="M0 0v13l5-5 6 6 3-3-6-6 5-5z"></path>
            </svg>
            <button className="services__button">Get a Quote</button>
        </div>
    </div>
)

export default Services;