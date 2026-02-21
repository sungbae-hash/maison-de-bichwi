import { motion } from 'framer-motion';

export default function LCNMedical() {
    return (
        <section id="lcn" className="py-24 bg-[#F2F4F3]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Title */}
                <div className="text-center mb-16">
                    <span className="text-[#00A86B] font-medium tracking-widest text-sm uppercase mb-3 block">Premium Care System</span>
                    <h2 className="font-serif text-3xl md:text-5xl text-[#333333] mb-6">LCN 메디컬 레진젤 복원</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        독일 풋케어 전문 브랜드 LCN의 무독성(Silver Plus) 레진젤을 사용합니다.<br />
                        문제성 발톱(내성, 무좀, 파고드는 발톱)을 근본적으로 교정하고 건강하게 복원합니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">

                    {/* Scientific Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-12 xl:col-span-5 bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                    >
                        <h3 className="font-serif text-2xl text-[#333333] mb-6 border-b border-gray-100 pb-4">치과용 레진과 동일한 안정성</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                            일반 젤에 포함된 <strong>산(Acid)</strong> 성분은 발톱을 녹이고 손상시킵니다.<br /><br />
                            메종드비취에서 사용하는 LCN 레진젤은 치과에서 치아를 메울 때 사용하는
                            <span className="bg-[#E6F6F0] text-[#00A86B] px-1.5 py-0.5 rounded ml-1 font-medium">캄포퀴논(Camphorquinone, $C_{10}H_{14}O_2$)</span>
                            광개시제를 기반으로 하여 인체에 무해하며, 발톱의 모세혈관과 신경 조직을 안전하게 보호합니다.
                        </p>

                        {/* Formula badge */}
                        <div className="inline-flex items-center space-x-2 bg-gray-50 px-4 py-3 rounded-lg border border-gray-100 mb-6">
                            <span className="text-gray-400 text-xs tracking-widest uppercase">Chemical Formula</span>
                            <span className="font-mono text-[#333333] text-sm font-medium tracking-wide">C<sub className="text-[10px]">10</sub>H<sub className="text-[10px]">14</sub>O<sub className="text-[10px]">2</sub></span>
                        </div>

                        <p className="text-gray-500 text-xs leading-relaxed italic border-l-2 border-[#00A86B] pl-3">
                            * 마이크로 은(Micro Silver) 입자가 함유된 실버플러스(Silver Plus) 라인업으로 강력한 항균 및 살균 작용을 유도합니다.
                        </p>
                    </motion.div>

                    {/* Comparison Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-12 xl:col-span-7 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                    >
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#FAFAFA] border-b border-gray-100">
                                    <th className="py-5 px-6 font-medium text-gray-500 text-sm">비교 항목</th>
                                    <th className="py-5 px-6 font-medium text-gray-500 text-sm">일반 젤 (일반 네일샵)</th>
                                    <th className="py-5 px-6 font-bold text-[#00A86B] text-base bg-[#E6F6F0]/50">LCN 레진젤 (메종드비취)</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-b border-gray-50">
                                    <td className="py-4 px-6 font-medium text-gray-600">주 성분</td>
                                    <td className="py-4 px-6 text-gray-500">산성 (Acid)</td>
                                    <td className="py-4 px-6 text-[#333333] font-medium bg-[#E6F6F0]/20">무독성 레진 (치과용 소재 동일)</td>
                                </tr>
                                <tr className="border-b border-gray-50">
                                    <td className="py-4 px-6 font-medium text-gray-600">발톱 손상도</td>
                                    <td className="py-4 px-6 text-gray-500">높음 (녹거나 얇아짐 유발)</td>
                                    <td className="py-4 px-6 text-[#333333] font-medium bg-[#E6F6F0]/20">없음 (오히려 발톱 보호재 역할)</td>
                                </tr>
                                <tr className="border-b border-gray-50">
                                    <td className="py-4 px-6 font-medium text-gray-600">통기 및 통수성</td>
                                    <td className="py-4 px-6 text-gray-500">불가 (균 증식 위험 높음)</td>
                                    <td className="py-4 px-6 text-[#333333] font-medium bg-[#E6F6F0]/20">완벽한 미세 구멍으로 산소/수분 통과</td>
                                </tr>
                                <tr className="border-b border-gray-50">
                                    <td className="py-4 px-6 font-medium text-gray-600">곰팡이/은사포자층</td>
                                    <td className="py-4 px-6 text-gray-500">습기가 차서 변색 및 악화 우려</td>
                                    <td className="py-4 px-6 text-[#333333] font-medium bg-[#E6F6F0]/20">항균 마이크로 은(Silver) 입자로 살균</td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-6 font-medium text-gray-600 rounded-bl-2xl">신축성 및 강도</td>
                                    <td className="py-4 px-6 text-gray-500">단단해서 보행 시 통증 유발 가능</td>
                                    <td className="py-4 px-6 text-[#333333] font-medium bg-[#E6F6F0]/20 rounded-br-2xl">발톱 본연의 유연성과 동일하게 움직임</td>
                                </tr>
                            </tbody>
                        </table>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
