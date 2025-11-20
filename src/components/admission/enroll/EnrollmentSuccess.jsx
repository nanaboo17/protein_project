import TitleSection from "../titleSection";
import FooterBar from "../../landingpage/Footer";
import ContactSection from "../../landingpage/ContactSection";
import EnrollmentSuccess from "./successPage";

export default function EnrollmentSuccessPage() {
  return (
    <div>
      <TitleSection />
      <EnrollmentSuccess />
      <ContactSection />
      <FooterBar />
    </div>
  );
}
