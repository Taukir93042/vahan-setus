import HomeBanner from "../components/HomeBanner"
import HowItWorks from "../components/HowItWorks"
import VehicleShowcase from "../components/VehicleShowcase"
import WhyVahanSetu from "../components/WhyVahanSetu"
import ImpactStats from "../components/ImpactStats"
import Testimonials from "../components/Testimonials"
import CtaBanner from "../components/CtaBanner"

function Home() {
  return (
    <div className="w-full overflow-x-hidden">
    
      <HomeBanner />
      <HowItWorks />
      <WhyVahanSetu />
      <VehicleShowcase />
      <ImpactStats />
      <Testimonials />
      <CtaBanner />
       
    </div>
  )
}

export default Home