import ScrollAnimation from 'react-animate-on-scroll';

const Testimonials = () => (
    <div className="testimonials">
        <ScrollAnimation
			className="testimonials__subheading-animation"
			animateIn="fadeInUp"
			duration={2}
			animateOnce
		>
            <h3 className="testimonials__subheading">Testimonials</h3>
        </ScrollAnimation>
        <ScrollAnimation
			className="testimonials__line-animation"
			animateIn="fadeInUp"
            duration={2}
            delay={500}
			animateOnce
		>
            <div className="testimonials__line" />
        </ScrollAnimation>
        <ScrollAnimation
			className="testimonials__heading-animation"
			animateIn="fadeInUp"
			duration={2}
            delay={1000}
			animateOnce
		>
            <h2 className="testimonials__heading">What People Say</h2>
        </ScrollAnimation>

        <div className="testimonials__circle" />
        <div className="testimonials__square" />

        <p className="testimonials__quote testimonials__quote--1">“Pat was simply wonderful!
            She helped me downsize
            from 3 bedrooms to 1 bedroom
            apartment and made it all
            less traumatic.”
        </p>
        <p className="testimonials__name testimonials__name--1">- Susan M</p>
        <div className="testimonials__line-1" />

        <p className="testimonials__quote testimonials__quote--2">“I needed to liquidate some
            of my furniture and household
            goods. Patty did a wonderful
            job of selling them at her
            yard sales.”
        </p>
        <p className="testimonials__name testimonials__name--2">- Don B</p>
        <div className="testimonials__line-2" />

        <p className="testimonials__quote testimonials__quote--3">“Always on time and
            thorough in every way, I highly
            recommend Simprodos for
            your de-cluttering needs.”
        </p>
        <p className="testimonials__name testimonials__name--3">- Karen P</p>
    </div>
)

export default Testimonials;