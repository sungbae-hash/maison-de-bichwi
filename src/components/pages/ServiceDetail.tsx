import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const serviceData = {
    nail: {
        title: 'Premium Nail & Pedi',
        subtitle: '알레산드로 레진젤 및 프리미엄 네일 케어',
        desc: '독일 프리미엄 풋케어 브랜드 알레산드로(alessandro) 시스템과 손발톱 손상을 최소화하는 드릴 케어로 건강하고 아름다운 네일 및 페디 아트 디테일을 선사합니다.',
        image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=2695&auto=format&fit=crop',
        features: ['1:1 맞춤형 퍼스널 컬러 진단', '알레산드로 무독성 레진젤 사용', '드릴 오프 및 저자극 케어'],
        brands: [
            { name: 'BANDI (반디)', desc: '비건 친화적 친환경 네일, 발색의 깊이' },
            { name: 'MAYOUR (메이유어)', desc: '감성적인 색감과 독보적인 유지력' },
            { name: 'KISS NAIL & AURORA QUEEN', desc: '다양한 텍스처(글리터, 시럽 등)를 뒷받침하는 글로벌 고품질 라인업' },
            { name: 'D.BOK & FIOTTE', desc: '트렌디한 컬러감과 세밀한 아트 표현력' }
        ]
    },
    eyelash: {
        title: 'Eyelash & Brow',
        subtitle: '1:1 맞춤 눈매 교정 디자인',
        desc: '개별 눈매와 다채로운 이목구비 비율에 맞춘 1:1 퍼스널 디자인으로, 본연의 아름다움을 극대화하고 이물감 없이 또렷한 눈매를 완성합니다.',
        image: 'https://plus.unsplash.com/premium_photo-1677234148011-8ed0064f7b49?q=80&w=2670&auto=format&fit=crop',
        features: ['모근 보호 시술 기법', '안전 인증 글루 사용', '다양한 컬 및 디자인 보유'],
        brands: [
            { name: 'Lash Addict (래쉬 애딕트)', desc: '단순 연장이 아닌 복원과 영양에 초점을 맞춘 전 세계 No.1 속눈썹 생장 시스템' },
            { name: 'Addict Curl (애딕트 컬)', desc: '이물감이 없는 극강의 가벼움, 깊은 케라틴 영양 공급' }
        ]
    },
    waxing: {
        title: 'Premium Waxing',
        subtitle: '저자극 슈가링 및 하드 왁싱 솔루션',
        desc: '가장 민감한 피부에도 사용 가능한 저자극 프리미엄 왁스를 사용하며, 철저한 위생 관리와 시술 후 진정 케어를 통해 안전하고 깔끔한 제모 결과를 약속합니다.',
        image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2670&auto=format&fit=crop',
        features: ['노더블딥 원칙 준수', '체계적인 인그로운 헤어 관리', '프라이빗 왁스 룸 제공'],
        brands: [
            { name: 'Triple X Wax (트리플 엑스 왁스)', desc: '스킨 탈락을 방지하고 잔털까지 잡아내는 저온/저자극 프리미엄 하드 왁스 시스템 (임산부 및 민감성 피부 전용)' }
        ]
    },
    spa: {
        title: 'Esthetic & Spa',
        subtitle: '최고급 에스테틱 및 릴렉싱 케어',
        desc: '고객님의 피부 타입과 컨디션에 따른 맞춤형 앰플 처방과 림프 순환 케어를 통해, 피부 깊은 곳부터 채워지는 수분과 영양, 그리고 완벽한 휴식을 제공합니다.',
        image: 'https://images.unsplash.com/photo-1608280731119-971c26f0bc4a?q=80&w=2574&auto=format&fit=crop',
        features: ['천연 아로마 테라피', '1:1 피부 장벽 복원 프로그램', '프리미엄 릴렉싱 관리'],
        brands: [
            { name: 'alessandro (알레산드로)', desc: '독일 럭셔리 핸드/풋/스파 바디 케어. 천연 성분을 통한 피부 장벽 복원과 릴렉싱 보장' }
        ]
    }
};

type ServiceId = keyof typeof serviceData;

export default function ServiceDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const service = serviceData[id as ServiceId];

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">Service not found.</p>
                <button onClick={() => navigate('/')} className="mt-4 text-[#00A86B] underline">Go back</button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
            <Navbar />

            <main className="flex-1 pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    <button
                        onClick={() => navigate('/#service')}
                        className="flex items-center text-sm text-gray-500 hover:text-[#00A86B] transition-colors mb-10 group"
                    >
                        <ArrowLeft size={16} className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
                        Back to Total Service
                    </button>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100"
                    >
                        <div className="h-64 sm:h-96 w-full relative">
                            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/10"></div>
                        </div>

                        <div className="p-8 sm:p-12">
                            <span className="text-[#00A86B] font-medium tracking-widest text-sm uppercase mb-3 block">Service Details</span>
                            <h1 className="font-serif text-3xl sm:text-5xl text-[#333333] mb-4">{service.title}</h1>
                            <h2 className="text-xl text-gray-600 mb-8">{service.subtitle}</h2>

                            <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#F1E5AC]/50 mb-10">
                                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                                    {service.desc}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-[#333333] mb-6">Maison de Bichwi Features</h3>
                                <ul className="space-y-4">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-600">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#00A86B] mr-3"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {'brands' in service && service.brands && service.brands.length > 0 && (
                                    <>
                                        <h3 className="text-lg font-medium text-[#333333] mb-6 mt-12 border-t border-gray-100 pt-8">Premium Brand Lineup</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {service.brands.map((brand, bIdx) => (
                                                <div key={bIdx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-[#00A86B]/30 hover:shadow-md transition-all">
                                                    <h4 className="font-serif text-lg md:text-xl tracking-wide text-[#00A86B] mb-3">{brand.name}</h4>
                                                    <p className="text-gray-500 text-sm leading-relaxed">{brand.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>

                        </div>
                    </motion.div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
