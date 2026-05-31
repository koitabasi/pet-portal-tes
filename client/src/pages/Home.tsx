import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Reasons } from '@/components/Reasons';
import { Partners } from '@/components/Partners';
import { Flow } from '@/components/Flow';
import { Company } from '@/components/Company';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Set page title and meta tags
    document.title = '株式会社士（サムライ）| 大阪の民泊清掃・ホテル清掃・ハウスクリーニング';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        '大阪を拠点に民泊清掃・ホテル清掃・ハウスクリーニング・店舗清掃を専門とする株式会社士（サムライ）。ホテル基準の高品質な技術と誠実な対応。24時間365日受付。無料見積もり受付中。'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Reasons />
        <Partners />
        <Flow />
        <Company />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
