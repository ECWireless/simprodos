import ScrollAnimation from 'react-animate-on-scroll';

function scrollToServices() {
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
}

const Intro = () => (
    <div className="intro">
        <ScrollAnimation
			className="intro__heading-animation"
			animateIn="fadeInUp"
			duration={2}
			animateOnce
		>
				<h1 className="intro__heading">Organizing Solutions for home and business</h1>
		</ScrollAnimation>
        <ScrollAnimation
			className="intro__paragraph-1-animation"
			animateIn="fadeInUp"
			duration={2}
			delay={500}
			animateOnce
		>
			<p className="intro__paragraph-1">Turning your dream into a goal, and your goal into a reality.</p>
		</ScrollAnimation>
		<ScrollAnimation
			className="intro__paragraph-2-animation"
			animateIn="fadeInUp"
			duration={2}
			delay={1000}
			animateOnce
		>
			<p className="intro__paragraph-2">SimProdos moves you through the dream -- goal -- reality process.</p>
		</ScrollAnimation>
        <ScrollAnimation
			className="intro__button-animation"
			animateIn="fadeInUp"
			duration={2}
			delay={1500}
			animateOnce
		>
			<button className="intro__button" onClick={scrollToServices}>Our Services</button>
		</ScrollAnimation>
        <div className="intro__circle-left" />
        <div className="intro__circle-right" />
    </div>
)

export default Intro;
