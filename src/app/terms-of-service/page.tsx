 import AppBar from "@/app/components/layout/AppBar";
import Footer from "@/app/components/layout/Footer";
import Section from "@/app/components/common/Section";
import Typography from "@/app/components/common/Typography";

export default function TermsOfService() {
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
              Terms of Service
            </Typography>
          </div>

          <Typography variant="label" className="!text-gray-400 block mb-8">
            Last updated: 13/10/2025
          </Typography>

          <Typography variant="body">
            Welcome to Root Beverages ("we", "us", or "our"). These Terms of Service ("Terms")
            govern your access to and use of our website https://rootbeverages.asia ("Website")
            and any related services (collectively, the "Services"). By accessing or using our
            Website, you agree to be bound by these Terms. If you do not agree, please
            discontinue use of the Website immediately.
          </Typography>

          <Typography variant="h3" className="font-black mt-8">1. Use of the Website</Typography>
          <Typography variant="body">
            You agree to use this Website only for lawful purposes and in a way that does not
            infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Website. Prohibited behaviour includes:
          </Typography>
          <ul className="list-disc pl-6 space-y-1 mb-6 text-base">
            <li>Upload or transmit viruses, malware, or other harmful content.</li>
            <li>Attempt to gain unauthorised access to our servers or systems.</li>
            <li>Use automated means (e.g. bots, scrapers) to access or collect information.</li>
            <li>Use the Website in any manner that could damage, disable, or impair our operation.</li>
          </ul>

          <Typography variant="h3" className="font-black mt-8">2. Intellectual Property Rights</Typography>
          <Typography variant="body">
            All content on this Website — including text, graphics, logos, images, and software —
            is the property of Root Beverages and is protected by applicable intellectual property
            laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
          </Typography>

          <Typography variant="h3" className="font-black mt-8">3. Disclaimer of Warranties</Typography>
          <Typography variant="body">
            The Website and its content are provided "as is" without warranties of any kind,
            either express or implied. We do not warrant that the Website will be uninterrupted,
            error-free, or free of viruses or other harmful components.
          </Typography>

          <Typography variant="h3" className="font-black mt-8">4. Limitation of Liability</Typography>
          <Typography variant="body">
            To the fullest extent permitted by law, Root Beverages shall not be liable for any
            indirect, incidental, special, or consequential damages arising from your use of the Website or inability to access it.
          </Typography>

          <Typography variant="h3" className="font-black mt-8">5. Third-Party Links</Typography>
          <Typography variant="body">
            Our Website may contain links to third-party websites. We are not responsible for
            the content or privacy practices of those sites and encourage you to review their respective policies.
          </Typography>

          <Typography variant="h3" className="font-black mt-8">6. Changes to Terms</Typography>
          <Typography variant="body">
            We reserve the right to modify these Terms at any time. Updated Terms will be posted
            on this page with a revised effective date. Continued use of the Website after changes constitutes your acceptance of the new Terms.
          </Typography>

          <Typography variant="h3" className="font-black mt-8">7. Governing Law</Typography>
          <Typography variant="body">
            These Terms shall be governed by and construed in accordance with applicable laws.
            Any disputes shall be subject to the exclusive jurisdiction of the relevant courts.
          </Typography>

          <Typography variant="h3" className="font-black mt-8">8. Contact Us</Typography>
          <Typography variant="body">
            For any questions regarding these Terms, please contact us at{" "}
            <a href="mailto:info@rootbeverages.asia" className="text-red-500 hover:underline">info@rootbeverages.asia</a>.
          </Typography>

        </div>
      </Section>

      <Footer />
    </>
  );
}