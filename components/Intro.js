function scrollToServices() {
	window.scroll({
		top: 1350,
		behavior: 'smooth'
	});
}

const Intro = () => (
    <div className="intro">
        <h1 className="intro__heading">Organizing Solutions for home and business</h1>
        <p className="intro__paragraph">Helping you turn your dream into a goal, and your goal into a reality.
            Organization moves you through the dream -- goal -- reality process.
        </p>
        <button className="intro__button" onClick={scrollToServices}>Our Services</button>
        <div className="intro__circle-left" />
        <div className="intro__circle-right" />
    </div>
)

export default Intro;
