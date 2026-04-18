import React, { useState } from "react";
import Button from "./Button";
import JoinForm from "./JoinForm";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <nav
                className="
                w-[95%] h-16 
                flex items-center px-6 
                rounded-2xl 
                sticky top-3 z-50 
                bg-white/10 
                backdrop-blur-md 
                border border-white/20 
                shadow-sm
            "
            >
                <div className="flex items-center gap-2">
                    <img src="/images/logo.svg" alt="APEX Fitness Logo" className="h-10 md:h-12 w-auto object-contain" />
                </div>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex ml-auto mr-10 items-center gap-8 text-white/80 font-medium">
                    <ul className="flex items-center gap-8">
                        <li className="hover:text-white transition poiret text-xl font-normal cursor-pointer">Home</li>
                        <li className="hover:text-white transition poiret text-xl font-normal cursor-pointer">Facilities</li>
                        <li className="hover:text-white transition poiret text-xl font-normal cursor-pointer">Pricing</li>
                        <li className="hover:text-white transition poiret text-xl font-normal cursor-pointer">Contact</li>
                    </ul>
                    <Button onClick={() => setIsFormOpen(true)}>Join Now</Button>
                </div>

                {/* MOBILE MENU TOGGLE */}
                <button
                    className="ml-auto md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* MOBILE MENU OVERLAY */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-20 left-0 w-full bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-6 md:hidden shadow-2xl"
                        >
                            <ul className="flex flex-col gap-4 text-white font-medium text-center">
                                <li className="hover:text-[#FF6B00] transition poiret text-2xl font-normal cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Home</li>
                                <li className="hover:text-[#FF6B00] transition poiret text-2xl font-normal cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Facilities</li>
                                <li className="hover:text-[#FF6B00] transition poiret text-2xl font-normal cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Pricing</li>
                                <li className="hover:text-[#FF6B00] transition poiret text-2xl font-normal cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Contact</li>
                            </ul>
                            <div className="flex justify-center">
                                <Button onClick={() => { setIsFormOpen(true); setIsMobileMenuOpen(false); }}>Join Now</Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Join Form Modal */}
            <JoinForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        </>
    );
};

export default Navbar;
