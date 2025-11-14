import React, { useState } from "react";
import TitleSection from "../titleSection";
import ContactSection from "../../landingpage/ContactSection";
import FooterBar from "../../landingpage/Footer";
import EnrollKidSection from "./FormSection";
import EnrollPaymentSection from "./PaymentSection";

export default function EnrollKidPage() {
  const [step, setStep] = useState(1);

  return (
    <div>
      <TitleSection />

      {step === 1 ? (
        <EnrollKidSection onNext={() => setStep(2)} />
      ) : (
        <EnrollPaymentSection />
      )}

      <ContactSection />
      <FooterBar />
    </div>
  );
}
