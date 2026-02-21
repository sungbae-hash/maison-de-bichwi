import { motion } from 'framer-motion';

const values = [
    {
        title: 'Safety',
        subtitle: '안전한 성분, 완벽한 위생',
        desc: '의료기기 수준의 멸균 시스템과 검증된 독일 최고급 알레산드로(alessandro) 레진젤을 사용하여 가장 안전한 시술 환경을 제공합니다.'
    },
    {
        title: 'Artistry',
        subtitle: '섬세한 터치와 예술성',
        desc: '끊임없는 연구와 압도적인 디테일. 단순한 케어를 넘어 개인의 라이프스타일과 톤에 맞춘 퍼스널 뷰티 아트를 제안합니다.'
    },
    {
        title: 'Relaxation',
        subtitle: '프라이빗한 휴식',
        desc: '햇살이 머무는 쾌적한 공간. 시술을 받는 동안 온전한 쉼을 누릴 수 있도록 프리미엄 리클라이너와 맞춤형 음료 서비스를 제공합니다.'
    }
];

export default function BrandStory() {
    return (
        <section id="story" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-[2rem] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop"
                                alt="Professional Treatment"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decal */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F1E5AC] rounded-full -z-10 blur-2xl opacity-60"></div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-serif text-4xl text-[#333333] mb-6">
                            비취의 집,<br />
                            <span className="text-[#00A86B]">Maison de Bichwi</span>
                        </h2>
                        <p className="text-gray-600 mb-12 leading-relaxed">
                            메종드비취는 프랑스어로 '비취의 집'이라는 뜻을 담고 있습니다.<br />
                            가장 귀하고 아름다운 보석을 다루듯, 원주 최고 수준의 기술력과<br />
                            프리미엄 제품들로 고객님의 본연의 아름다움을 이끌어냅니다.
                        </p>

                        <div className="space-y-8">
                            {values.map((val, idx) => (
                                <div key={idx} className="flex flex-col relative pl-6 border-l w-full border-[#00A86B]/30 hover:border-[#00A86B] transition-colors">
                                    <span className="text-xs tracking-widest font-medium text-[#00A86B] uppercase mb-1">{val.title}</span>
                                    <h3 className="text-lg text-[#333333] font-medium mb-2">{val.subtitle}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>

                {/* Premium Partners */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-24 pt-16 border-t border-gray-100"
                >
                    <div className="text-center mb-10">
                        <span className="text-[#00A86B] font-medium tracking-widest text-sm uppercase block mb-3">Our Premium Partners</span>
                        <h3 className="font-serif text-2xl text-[#333333]">안전과 타협하지 않는 최상급 브랜드 라인업</h3>
                        <p className="text-gray-500 mt-3 text-sm">메종드비취는 고객님의 아름다움과 건강을 위해 글로벌 하이엔드 제품만을 고집합니다.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {['BANDI', 'MAYOUR', 'alessandro', 'Lash Addict', 'Triple X Wax', 'KISS NAIL'].map((brand, i) => (
                            <div key={i} className="flex items-center justify-center font-serif text-xl sm:text-2xl text-gray-400 font-semibold tracking-wider hover:text-[#00A86B] transition-colors cursor-default">
                                {brand}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
