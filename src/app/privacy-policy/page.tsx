 import AppBar from "@/app/components/layout/AppBar";
import Footer from "@/app/components/layout/Footer";
import Section from "@/app/components/common/Section";
import Typography from "@/app/components/common/Typography";

export default function PrivacyPolicy() {
  return (
    <>
      <AppBar />

      <Section className="dotted-bg bg-white mt-16 md:mt-10">
        <div className="max-w-4xl mx-auto">

          {/* Hero */}
          <div className="text-center mb-12">
            <Typography
              variant="h1"
              className="font-black inline-block"
              style={{
                fontSize: "clamp(48px, 8vw, 100px)",
                WebkitTextStroke: "3px black",
                paintOrder: "stroke fill",
                color: "black",
              }}
            >
              Privacy Policy
            </Typography>
          </div>

          <Typography variant="label" className="!text-gray-400 block mb-8">
            Last updated: 13/10/2025
          </Typography>

          <Typography variant="body">
            Welcome to Root Beverages ("we", "us", or "our"). We value your privacy and are
            committed to protecting your personal data in accordance with applicable data
            protection laws. This Privacy Policy explains how we collect, use, disclose, and
            safeguard your personal data when you interact with our website
            https://rootbeverages.asia ("Website"). By using our Website, you agree to the
            terms of this Policy.
          </Typography>

          <Typography variant="h3" className="font-black mt-8">1. Collection of Personal Data</Typography>
          <Typography variant="body">
            We collect personal data that you voluntarily provide to us or that is automatically
            collected through your interaction with the Website. This may include:
          </Typography>
          <ul className="list-disc pl-6 space-y-1 mb-6 text-base">
            <li><strong>1.1 Information You Provide</strong> — Your name, email address, phone number, and other contact details when you submit an enquiry or collaboration form.</li>
            <li><strong>1.2 Information Collected Automatically</strong> — Device type, browser, IP address, pages visited, and referring URLs collected via cookies or similar technologies.</li>
          </ul>

          <Typography variant="h3" className="font-black mt-8">2. Use of Personal Data</Typography>
          <Typography variant="body">We use your personal data to:</Typography>
          <ul className="list-disc pl-6 space-y-1 mb-6 text-base">
            <li>Respond to your enquiries and collaboration requests.</li>
            <li>Improve and personalise your experience on the Website.</li>
            <li>Send promotional or informational communications (with your consent).</li>
            <li>Comply with legal obligations.</li>
          </ul>

          <Typography variant="h3" className="font-black mt-8">3. Disclosure of Personal Data</Typography>
          <Typography variant="body">
            We do not sell or rent your personal data. We may share it with trusted third-party
            service providers who assist us in operating our Website, subject to confidentiality
            obligations. We may also disclose data if required by law or to protect our rights.
          </Typography>

          <Typography variant="h3" className="font-black mt-8">4. Retention of Data</Typography>
          <Typography variant="body">
            We retain personal data only as long as necessary for the purposes it was collected or as required by law.
          </Typography>

          <Typography variant="h3" className="font-black mt-8">5. Your Rights</Typography>
          <Typography variant="body">
            You have the right to access, correct, or request deletion of your personal data. To exercise these rights, contact us at{" "}
            <a href="mailto:info@rootbeverages.asia" className="text-red-500 hover:underline">info@rootbeverages.asia</a>.
          </Typography>

          <Typography variant="h3" className="font-black mt-8">6. Cookies</Typography>
          <Typography variant="body">
            Our Website uses cookies to enhance user experience. You may disable cookies through
            your browser settings, though some features may not function properly as a result.
          </Typography>

          <Typography variant="h3" className="font-black mt-8">7. Changes to This Policy</Typography>
          <Typography variant="body">
            We may update this Privacy Policy from time to time. Changes will be posted on this
            page with an updated effective date. Continued use of the Website constitutes
            acceptance of the updated Policy.
          </Typography>

          <Typography variant="h3" className="font-black mt-8">8. Contact Us</Typography>
          <Typography variant="body">
            For any privacy-related concerns, please contact us at{" "}
            <a href="mailto:info@rootbeverages.asia" className="text-red-500 hover:underline">info@rootbeverages.asia</a>.
          </Typography>

        </div>
      </Section>

      <Footer />
    </>
  );
}