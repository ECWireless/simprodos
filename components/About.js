import ScrollAnimation from 'react-animate-on-scroll';

const About = () => (
    <div className="about">
        <ScrollAnimation
			className="about__subheading-animation"
			animateIn="fadeInUp"
			duration={2}
			animateOnce
		>
            <h3 className="about__subheading">About</h3>
        </ScrollAnimation>
        <ScrollAnimation
			className="about__line-animation"
			animateIn="fadeInUp"
            duration={2}
            delay={500}
			animateOnce
		>
            <div className="about__line" />
        </ScrollAnimation>
        <ScrollAnimation
			className="about__heading-animation"
			animateIn="fadeInUp"
			duration={2}
            delay={1000}
			animateOnce
		>
            <h2 className="about__heading">Meet Pat Thomas</h2>
        </ScrollAnimation>

        <p className="about__description-1">I am Pat Thomas owner of SimProdos
            (Simple, Productive, Organizing, Solutions).
            Over the years I managed to turn my dream into
            a goal, and my goal into a reality.
            SimProdos is that reality.
        </p>
        <p className="about__description-2">SimProdos is geared to finding the best solution to
            organizing problems whether it is objects, digital
            info, or time management. My focus is helping people.
            I enjoy assisting clients to unclutter, de-stress and
            create a system that works for them. No matter
            what the project involves: cleaning, moving and
            storage, or planning. My joy is aiding them
            intangible ways.
        </p>
        <p className="about__description-3">Together, we make dreams, goals,
            and goals a reality.
        </p>
        <div className="about__circle-description" />

        <img
            className="about__photo"
            src="/intro__photo.jpg"
            alt="Pat Thomas"
        />
        <div className="about__circle-photo" />

        <div className="about__circle-accent" />

        <a href="https://www.napopittsburgh.org/" target="_blank" className="about__napo-link">
            <img
                className="about__napo"
                src="/NAPO.png"
                alt="NAPO"
            />
        </a>
    </div>
)

export default About;