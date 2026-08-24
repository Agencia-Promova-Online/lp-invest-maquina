import React, { Suspense, lazy } from "react";
import Faixa from "../components/Faixa";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
const Benefits = lazy(() => import("../components/Benefits"));
const Vantagens = lazy(() => import("../components/Vantagens"));
const WhyChooseUs = lazy(() => import("../components/WhyChooseUs"));
const SocialProof = lazy(() => import("../components/SocialProof"));
const HowItWorks = lazy(() => import("../components/HowItWorks"));
const LeadForm = lazy(() => import("../components/LeadForm"));
const Footer = lazy(() => import("../components/Footer"));
const FloatingWhatsApp = lazy(() => import("../components/FloatingWhatsApp"));

export default function Home(){
    return(
        <div className="font-sans">
       <Header/>
        <main>
          <HeroSection />
          <Faixa />
          <Suspense fallback={<div className="container py-5" />}>
            <Benefits/>
          </Suspense>
          <Suspense fallback={<div className="container py-5" />}>
            <Vantagens/>
          </Suspense>
          <Suspense fallback={<div className="container py-5" />}>
            <WhyChooseUs />
          </Suspense>
          <Suspense fallback={<div className="container py-5" />}>
            <SocialProof />
          </Suspense>
          <Suspense fallback={<div className="container py-5" />}>
            <HowItWorks />
          </Suspense>
          <Suspense fallback={<div className="container py-5" />}>
            <LeadForm/>
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <Suspense fallback={null}>
          <FloatingWhatsApp/>
        </Suspense>
      </div>
    )
}
