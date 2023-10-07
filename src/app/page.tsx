import HeroSection from '@/components/HomePage/HeroSection';
import JoinWaitlist from '@/components/HomePage/JoinWaitlist';
import TransAgent from '@/components/HomePage/TransAgent';
import PaymentExperience from '@/components/HomePage/PaymentExperience';
import Review from '@/components/HomePage/Review';
import BecomeAgent from '@/components/HomePage/BecomeAgent';
import FAQ from '@/components/HomePage/FAQ';
import JoinWaitlistFoot from '@/components/HomePage/JoinWaitlistFoot';
import PocketmoniXperience from '@/components/HomePage/userExperience/PKMExperience';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <JoinWaitlist />
      <TransAgent />
      <PaymentExperience />
      <PocketmoniXperience />
      <Review />
      {/* <ReviewModel /> */}
      <BecomeAgent />
      <FAQ />
      <JoinWaitlistFoot />
      <Footer />
    </div>
  );
}
