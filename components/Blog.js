import ScrollAnimation from 'react-animate-on-scroll';

const Blog = () => (
    <div className="blog">
        <ScrollAnimation
			className="blog__subheading-animation"
			animateIn="fadeInUp"
			duration={2}
			animateOnce
		>
            <h3 className="blog__subheading">Blog</h3>
        </ScrollAnimation>
        <ScrollAnimation
			className="blog__line-animation"
			animateIn="fadeInUp"
            duration={2}
            delay={500}
			animateOnce
		>
            <div className="blog__line" />
        </ScrollAnimation>
        <ScrollAnimation
			className="blog__heading-animation"
			animateIn="fadeInUp"
			duration={2}
            delay={1000}
			animateOnce
		>
            <h2 className="blog__heading">Tips and Tricks</h2>
        </ScrollAnimation>

        <div className="blog__background" />
        <div className="blog__triangle-1" />
        <div className="blog__triangle-2" />

        <a
            className="blog__card-link"
            href="https://medium.com/@elliottconway/new-years-resolutions-4e34e7c5a1c8"
            target="_blank"
        >
            <div className="blog__card">
                <div className="blog__card-banner" />
                <h4 className="blog__title">New years' resolutions</h4>
                <p className="blog__excerpt">It’s January, a new year full of unlimited
                    potential.  Since the time of the
                    Babylonians, people have made hopes
                    and promises concerning the new
                    year…
                </p>
            </div>
        </a>
    </div>
)

export default Blog;