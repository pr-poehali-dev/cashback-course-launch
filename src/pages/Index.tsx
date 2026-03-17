import { useState } from "react";
import HeroSection from "@/components/landing/HeroSection";
import CourseSection from "@/components/landing/CourseSection";
import BuySection from "@/components/landing/BuySection";

export default function Index() {
  const [openModule, setOpenModule] = useState<number | null>(null);

  return (
    <div className="font-golos bg-white min-h-screen overflow-x-hidden">
      <HeroSection />
      <CourseSection openModule={openModule} setOpenModule={setOpenModule} />
      <BuySection />
    </div>
  );
}
