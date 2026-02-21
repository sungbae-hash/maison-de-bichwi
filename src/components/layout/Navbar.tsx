import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Brand Story', href: '#story' },
        { name: 'LCN Medical', href: '#lcn' },
        { name: 'Total Service', href: '#service' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="font-serif text-2xl tracking-widest text-[#00A86B]">Maison de Biche</a>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-gray-700 hover:text-[#00A86B] text-sm tracking-wide transition-colors">
                                {link.name}
                            </a>
                        ))}
                        <a href="https://booking.naver.com/" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-[#00A86B] text-white text-sm tracking-wide rounded hover:bg-[#008f5a] transition-colors rounded-none">
                            Reservation
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700 hover:text-[#00A86B]">
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#00A86B] hover:bg-slate-50" onClick={() => setMobileMenuOpen(false)}>
                                {link.name}
                            </a>
                        ))}
                        <a href="https://booking.naver.com/" className="block w-full text-center mt-4 px-5 py-3 bg-[#00A86B] text-white text-base font-medium">
                            Reservation
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
