// src/components/Navbar/Navbar.tsx

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
            <div className="navbar mx-auto min-h-16 max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Mobile Menu + Logo */}
                <div className="navbar-start">
                    {/* Mobile Hamburger */}
                    <div className="dropdown lg:hidden">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-square"
                            aria-label="Open navigation menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
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
                            className="menu menu-sm dropdown-content z-50 mt-3 w-52 rounded-box bg-base-100 p-2 shadow-lg"
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
                            className="h-9 w-auto"
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
                        className="btn btn-ghost btn-sm px-2 sm:px-3"
                    >
                        Sign In
                    </a>

                    <a
                        href="#sign-up"
                        className="brand-gradient btn btn-sm rounded-full border-0 px-4 text-white hover:opacity-90"
                    >
                        Sign Up
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;