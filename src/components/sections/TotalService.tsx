import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Eye, Scissors, Flower2 } from 'lucide-react';

const services = [
    {
        id: 'nail',
        icon: Sparkles,
        title: 'Premium Nail & Pedi',
        desc: '손발톱 손상을 최소화하는 드릴 케어와 고급스러운 아트 디테일',
        image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=2695&auto=format&fit=crop'
    },
    {
        id: 'eyelash',
        icon: Eye,
        title: 'Eyelash & Brow',
        desc: '개인의 눈매와 이목구비 비율에 맞춘 1:1 퍼스널 디자인',
        image: 'https://plus.unsplash.com/premium_photo-1677234148011-8ed0064f7b49?q=80&w=2670&auto=format&fit=crop'
    },
    {
        id: 'waxing',
        icon: Scissors,
        title: 'Waxing',
        desc: '저자극 프리미엄 왁스를 사용한 안전하고 깔끔한 제모 솔루션',
        image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2670&auto=format&fit=crop'
    },
    {
        id: 'spa',
        icon: Flower2,
        title: 'Esthetic & Spa',
        desc: '피부 깊은 곳부터 채워지는 수분과 영양, 완벽한 릴렉싱 케어',
        image: 'https://images.unsplash.com/photo-1608280731119-971c26f0bc4a?q=80&w=2574&auto=format&fit=crop'
    }
];

export default function TotalService() {
    return (
        <section id="service" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                    <div>
                        <span className="text-[#00A86B] font-medium tracking-widest text-sm uppercase mb-3 block">Beyond Nails</span>
                        <h2 className="font-serif text-3xl md:text-5xl text-[#333333]">토탈 뷰티 큐레이션</h2>
                    </div>
                    <p className="text-gray-500 mt-4 md:mt-0 max-w-md text-sm md:text-right leading-relaxed">
                        한 공간에서 경험하는 머리부터 발끝까지의 변화.<br />
                        각 분야 최고의 디자이너가 당신만의 스토리를 완성합니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <Link to={`/service/${service.id}`} key={idx}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                    />

                                    {/* Floating Icon */}
                                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center z-20 text-white">
                                        <service.icon size={20} strokeWidth={1.5} />
                                    </div>
                                </div>

                                <h3 className="font-serif text-xl tracking-wide text-[#333333] mb-2 group-hover:text-[#00A86B] transition-colors">{service.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
