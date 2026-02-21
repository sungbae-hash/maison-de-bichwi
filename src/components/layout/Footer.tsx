import { MapPin, Phone, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Brand Info */}
                    <div className="space-y-4">
                        <h3 className="font-serif text-2xl tracking-widest text-[#00A86B]">Maison de Bichwi</h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            안전(Safety), 예술성(Artistry), 그리고 완벽한 휴식(Relaxation).<br />
                            당신만을 위한 프리미엄 토탈 뷰티 하우스.
                        </p>
                    </div>

                    {/* Contact & Location */}
                    <div className="space-y-4">
                        <h4 className="font-medium text-[#F1E5AC] tracking-wider mb-4">Contact Info</h4>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3 text-gray-400">
                                <MapPin size={18} className="text-[#00A86B] mt-0.5 flex-shrink-0" />
                                <span className="text-sm">강원도 원주시 단구동<br />메종드비취</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400">
                                <Phone size={18} className="text-[#00A86B] flex-shrink-0" />
                                <span className="text-sm">0507-1307-8898</span>
                            </div>
                        </div>
                    </div>

                    {/* Operation Hours & SNS */}
                    <div className="space-y-4">
                        <h4 className="font-medium text-[#F1E5AC] tracking-wider mb-4">Store Hours</h4>
                        <div className="text-gray-400 text-sm space-y-2">
                            <p>평일 10:00 - 20:00</p>
                            <p>토/일 10:00 - 19:00</p>
                            <p className="text-[#00A86B] text-xs pt-2">* 100% 예약제 운영</p>
                        </div>

                        <div className="flex space-x-4 pt-4">
                            <a href="https://www.instagram.com/maison_de_biche/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#00A86B] transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a href="http://pf.kakao.com/_yBwGxb" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#00A86B] transition-colors">
                                <MessageCircle size={24} />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Maison de Bichwi. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0 text-gray-500 text-sm">
                        <a href="#" className="hover:text-white transition-colors">이용약관</a>
                        <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
