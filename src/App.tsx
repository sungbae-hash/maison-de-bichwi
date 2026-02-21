import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import BrandStory from './components/sections/BrandStory';
import LCNMedical from './components/sections/LCNMedical';
import TotalService from './components/sections/TotalService';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />
        <BrandStory />
        <LCNMedical />
        <TotalService />
      </main>

      <Footer />

      {/* Floating CTA (Floating Action Button) */}
      <a
        href="https://booking.naver.com/"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-16 h-16 bg-[#00A86B] text-white rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform z-50 group"
      >
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-medium tracking-widest uppercase mb-0.5">Book</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /></svg>
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#333333] text-white text-xs whitespace-nowrap rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          네이버 예약 바로가기
          <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-[#333333]"></div>
        </div>
      </a>
    </div>
  )
}

export default App
