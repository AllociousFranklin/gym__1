import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const siteMap = [
        { title: "Company", links: ["About Us", "Trainers", "Careers", "Blog", "Contact"] },
        { title: "Programs", links: ["Strength", "Cardio", "Nutrition", "Wellness"] },
        { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
        { title: "Support", links: ["Help Center", "FAQs", "Community", "Feedback"] }
    ];

    const socialLinks = [
        { icon: <FaFacebook />, url: "#" },
        { icon: <FaTwitter />, url: "#" },
        { icon: <FaInstagram />, url: "#" },
        { icon: <FaLinkedin />, url: "#" },
        { icon: <FaGithub />, url: "#" }
    ];

    return (
        <footer className="w-full rounded-t-3xl md:rounded-t-[80px] relative overflow-hidden bg-[#d85a00da] text-[#1A1A1A]">
            {/* Background Logo/Text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-8 pointer-events-none">
                <span className="text-[20vw] font-bold text-[#692c00] whitespace-nowrap uppercase">APEX</span>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    {/* Logo & Description */}
                    <div className="lg:col-span-2">
                        <img
                            src="/images/logo.svg"
                            alt="APEX Fitness Logo"
                            className="h-16 w-auto mb-4 hover:scale-105 transition-transform duration-300"
                        />
                        <p className="text-sm leading-6 backdrop-blur-md bg-white/10 p-4 rounded-r-lg montserrat">
                            "Elevate your strength and performance. Join APEX Fitness to transform your body, mind, and fitness journey with expert guidance."
                        </p>
                        <div className="mt-4 p-4 backdrop-blur-md bg-white/10 rounded-r-lg border-l-4 border-[#1A1A1A]">
                            <p className="text-xs font-bold uppercase league-spartan mb-1">Visit Us</p>
                            <p className="text-sm montserrat leading-relaxed">
                                No.1/1, 70 feet scheme emelem complex 1st floor<br />
                                Mahalingapuram, Nungambakkam,<br />
                                Chennai, India 600034
                            </p>
                        </div>
                    </div>

                    {/* Sitemap Links */}
                    {siteMap.map((section, index) => (
                        <div
                            key={index}
                            className="backdrop-blur-md bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-all duration-300"
                        >
                            <h3 className="text-lg font-bold text-[#1A1A1A] uppercase mb-4 league-spartan">
                                {section.title}
                            </h3>
                            <ul className="space-y-3 montserrat">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href="#"
                                            className="text-[#1A1A1A] hover:font-semibold transition-colors duration-300  inline-block"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 pt-8 border-t border-white/20">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-[#1A1A1A] montserrat">
                            © {currentYear} APEX Fitness, Inc. All rights reserved.
                        </p>

                        <div className="flex space-x-6 mt-4 md:mt-0">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    className="text-[#1A1A1A] transition-all duration-300 hover:scale-125"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
