// src/components/Footer/Footer.tsx

import logo from "../../assets/images/logo-text.png";

const Footer = () => {
    return (
        <footer className="border-t border-base-300 bg-base-100">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                {/* Main Footer */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-12">
                    {/* Brand */}
                    <div>
                        <a
                            href="#home"
                            className="inline-block"
                            aria-label="Dev Stack Home"
                        >
                            <img
                                src={logo}
                                alt="Dev Stack"
                                className="h-9 w-auto"
                            />
                        </a>

                        <p className="mt-4 max-w-md text-sm leading-6 text-base-content/60">
                            Curated tools, technologies, and resources for
                            developers building modern software.
                        </p>

                        {/* Social Links */}
                        <div className="mt-6 flex items-center gap-5">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium text-base-content/70 transition-colors hover:text-primary"
                            >
                                GitHub
                            </a>

                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium text-base-content/70 transition-colors hover:text-primary"
                            >
                                Twitter
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium text-base-content/70 transition-colors hover:text-primary"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide">
                            Product
                        </h3>

                        <ul className="mt-4 space-y-3">
                            <li>
                                <a
                                    href="#home"
                                    className="text-sm text-base-content/60 transition-colors hover:text-primary"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#technologies"
                                    className="text-sm text-base-content/60 transition-colors hover:text-primary"
                                >
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#projects"
                                    className="text-sm text-base-content/60 transition-colors hover:text-primary"
                                >
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide">
                            Company
                        </h3>

                        <ul className="mt-4 space-y-3">
                            <li>
                                <a
                                    href="#about"
                                    className="text-sm text-base-content/60 transition-colors hover:text-primary"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#contact"
                                    className="text-sm text-base-content/60 transition-colors hover:text-primary"
                                >
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#careers"
                                    className="text-sm text-base-content/60 transition-colors hover:text-primary"
                                >
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide">
                            Legal
                        </h3>

                        <ul className="mt-4 space-y-3">
                            <li>
                                <a
                                    href="#privacy"
                                    className="text-sm text-base-content/60 transition-colors hover:text-primary"
                                >
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#terms"
                                    className="text-sm text-base-content/60 transition-colors hover:text-primary"
                                >
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 border-t border-base-300 pt-6">
                    <div className="flex flex-col gap-4 text-sm text-base-content/50 sm:flex-row sm:items-center sm:justify-between">
                        <p>
                            © 2026 Dev Stack. All rights reserved.
                        </p>

                        <div className="flex items-center gap-5">
                            <a
                                href="#privacy"
                                className="transition-colors hover:text-primary"
                            >
                                Privacy
                            </a>

                            <a
                                href="#terms"
                                className="transition-colors hover:text-primary"
                            >
                                Terms
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;