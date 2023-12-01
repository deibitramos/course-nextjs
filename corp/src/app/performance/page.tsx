import Hero from '@/components/Hero';
import performanceImg from 'public/images/performance.jpg';

export default function PerformancePage() {
  return (
    <Hero
      title="We serve high performance applications"
      imgData={performanceImg}
      imgAlt="welding"
    />
  );
}
