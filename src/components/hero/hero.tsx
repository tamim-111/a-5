import heroImage from "../../assets/images/hero.png";

const Hero = () => {
    return (
        <section
            id="home"
            className="hero min-h-[calc(100vh-4rem)] bg-base-100"
        >
            <div className="hero-content w-full max-w-7xl flex-col gap-10 px-4 py-12 sm:px-6 md:gap-12 lg:flex-row lg:justify-between lg:px-8 lg:py-16">
                {/* Hero Content */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        Build Your Ideal
                        <br />
                        <span className="brand-gradient-text">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-base-content/60 sm:text-base lg:mx-0">
                        Explore frontend, backend, database, and styling
                        options. Compare them side by side, and put together
                        the stack that fits your next project.
                    </p>

                    {/* Hero Buttons */}
                    <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
                        <a
                            href="#technologies"
                            className="brand-gradient btn rounded-full border-0 px-6 text-white shadow-sm hover:opacity-90"
                        >
                            Explore Technologies
                        </a>

                        <a
                            href="#about"
                            className="btn btn-outline rounded-full px-6"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="flex flex-1 justify-center">
                    <img
                        src={heroImage}
                        alt="Developer technology stack illustration"
                        className="w-full max-w-sm object-contain sm:max-w-md lg:max-w-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;