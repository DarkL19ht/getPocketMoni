import HeroSection from '@/components/HomePage/HeroSection';
import JoinWaitlist from '@/components/HomePage/JoinWaitlist';
import TransAgent from '@/components/HomePage/TransAgent';
import PaymentExperience from '@/components/HomePage/PaymentExperience';
import Review from '@/components/HomePage/Review';
// import PKMExperience from "@/components/HomePage/PKMExperience"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <JoinWaitlist />
      <TransAgent />
      <PaymentExperience />
      {/* <PKMExperience /> */}
      <Review />
    </div>
  );
}
