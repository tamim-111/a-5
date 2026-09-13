import logo from "../../assets/images/logo-text.png";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 bg-base-100">
            <div className="navbar mx-auto min-h-14 max-w-7xl px-2 sm:min-h-16 sm:px-4 md:px-6 lg:px-8">
                {/* Mobile Menu + Logo */}
                <div className="navbar-start">
                    {/* Mobile Hamburger */}
                    <div className="dropdown lg:hidden">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-square btn-sm"
                            aria-label="Open navigation menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 sm:h-6 sm:w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </div>

                        {/* Mobile Menu */}
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content z-50 mt-2 w-44 rounded-box bg-base-100 p-1.5 text-sm shadow-lg sm:mt-3 sm:w-52 sm:p-2"
                        >
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Logo */}
                    <a
                        href="#home"
                        className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
                        aria-label="Dev Stack Home"
                    >
                        <img
                            src={logo}
                            alt="Dev Stack"
                            className="h-5 w-auto sm:h-7 md:h-9"
                        />
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className="navbar-center hidden lg:flex">
                    <nav>
                        <ul className="menu menu-horizontal gap-1">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm font-medium"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Authentication Buttons */}
                <div className="navbar-end gap-1 sm:gap-2">
                    <a
                        href="#sign-in"
                        className="btn btn-ghost min-h-6 h-6 px-1 text-[10px] sm:min-h-8 sm:h-8 sm:btn-sm sm:px-3 sm:text-sm"
                    >
                        Sign In
                    </a>

                    <a
                        href="#sign-up"
                        className="brand-gradient btn min-h-6 h-6 rounded-full border-0 px-2 text-[10px] text-white hover:opacity-90 sm:min-h-8 sm:h-8 sm:btn-sm sm:px-4 sm:text-sm"
                    >
                        Sign Up
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

