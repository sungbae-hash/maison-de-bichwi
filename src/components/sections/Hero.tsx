import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#FDFBF7]">
            {/* Background Image/Overlay (Replace with actual high-quality interior/nail image) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-[#FDFBF7] z-10" />
                <img
                    src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop"
                    alt="Maison de Biche Interior Environment"
                    className="w-full h-full object-cover opacity-60"
                />
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="block text-[#00A86B] font-medium tracking-[0.2em] text-sm uppercase mb-4"
                >
                    Premium Total Beauty House
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-serif text-5xl md:text-7xl text-[#333333] mb-6 leading-tight"
                >
                    안전과 예술성,<br />
                    <span className="italic text-[#00A86B]">완벽한 휴식</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-gray-600 md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    원주 단구동, 당신만을 위한 프라이빗한 공간.<br className="hidden md:block" />
                    네일, 속눈썹, 왁싱, 그리고 에스테틱까지 차원이 다른 뷰티 큐레이션을 경험하세요.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="https://booking.naver.com/" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-[#00A86B] text-white tracking-widest text-sm hover:bg-[#008f5a] transition-colors border border-[#00A86B]">
                        네이버 예약하기
                    </a>
                    <a href="#story" className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#333333] tracking-widest text-sm border border-[#333333] hover:bg-[#333333] hover:text-white transition-colors">
                        브랜드 스토리
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-gray-400"
            >
                <span className="text-xs tracking-widest mb-2 uppercase">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent"></div>
            </motion.div>
        </section>
    );
}
