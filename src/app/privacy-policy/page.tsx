import AppBar from "@/components/layout/AppBar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/common/Section";
import Typography from "@/components/common/Typography";

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
              style={{}}
            >
              Privacy Policy
            </Typography>
          </div>

          <Typography
            variant="label"
            className="!text-gray-400 block mb-2 md:-mt-9"
          >
            Last updated: 09/04/2026
          </Typography>

          <Typography variant="body" className="mb-4">
            We know that you care how information about you is used and shared,
            and we appreciate your trust that we will do so carefully and
            sensibly. This Privacy Notice describes how Root Beverages Co. and
            its affiliates, collect and process your personal information
            through its website and online marketplace that reference this
            Privacy Notice.
          </Typography>

          <Typography variant="body" className="mb-4">
            By using Root Beverages Co. you agree to our use of your personal
            information (including sensitive personal information) by this
            Privacy Notice, as may be amended from time to time by us at our
            discretion. You also agree and consent to us collecting, storing,
            processing, transferring, and sharing your personal information
            (including sensitive personal information) with third parties or
            service providers for the purposes set out in this Privacy Notice.
          </Typography>

          <Typography variant="body" className="mb-4">
            Personal information subject to this Privacy Notice will be
            collected and retained by Root Beverages Co. with a registered
            office at. plot no. ATC-31, Covered Second Floor, TTC,INDL AREA,
            MIDC, Mahape, Navi Mumbai - 400710.
          </Typography>

          <Typography variant="title" className="font-black mt-8 mb-2">
            What Personal Information About Customers Does Root Beverages Co.
            Collect?
          </Typography>
          <Typography variant="body" className="mb-4">
            We collect your personal information to provide and continually
            improve our products and services.
          </Typography>

          <Typography variant="title" className="font-bold mt-4 mb-2">
            Information You Give Us:
          </Typography>
          <Typography variant="body" className="mb-4">
            We receive and store any information you provide in relation to Root
            Beverages Co.. You can choose not to provide certain information,
            but then you might not be able to take advantage of Root Beverages
            Co.
          </Typography>

          <Typography variant="title" className="font-bold mt-4 mb-2">
            Automatic Information:
          </Typography>
          <Typography variant="body" className="mb-4">
            We automatically collect and store certain types of information
            about your use of Root Beverages Co.. Like many websites, we use
            cookies and other unique identifiers, and we obtain certain types of
            information when your web browser or device accesses Services and
            other content served by or on behalf of Root Beverages Co. on other
            websites.
          </Typography>

          <Typography variant="title" className="font-bold mt-4 mb-2">
            Information from Other Sources:
          </Typography>
          <Typography variant="body" className="mb-4">
            We might receive information about you from other sources, such as
            updated delivery and address information from our carriers, which we
            use to correct our records and deliver your next purchase more
            easily.
          </Typography>

          <Typography variant="title" className="font-black mt-8 mb-2">
            For What Purposes Does Root Beverages Co. Use Your Personal
            Information?
          </Typography>
          <ul className="list-disc pl-6 space-y-1 mb-6 text-base text-gray-600">
            <li>Purchase and delivery of products and services</li>
            <li>Provide, troubleshoot, and improve Services</li>
            <li>Personalization of content and recommendations</li>
            <li>Compliance with legal obligations</li>
            <li>Communication via phone, email, or chat</li>
            <li>Advertising and promotional offers</li>
            <li>Fraud prevention and credit risk management</li>
          </ul>

          <Typography variant="title" className="font-black mt-8 mb-2">
            What About Cookies and Other Identifiers?
          </Typography>
          <Typography variant="body" className="mb-4">
            To enable our systems to recognize your browser or device and to
            provide and improve Root Beverages Co. services, we use cookies and
            other identifiers.
          </Typography>

          <Typography variant="title" className="font-black mt-8 mb-2">
            Does Root Beverages Co. Share Your Personal Information?
          </Typography>
          <Typography variant="body" className="mb-4">
            We do not sell our customers’ personal information to others. We
            share personal information only as described below:
          </Typography>

          <Typography variant="title" className="font-bold mt-4 mb-2">
            Third-Party Service Providers:
          </Typography>
          <Typography variant="body" className="mb-4">
            We employ other companies and individuals to perform functions on
            our behalf such as order fulfillment, package delivery, email
            services, analytics, marketing assistance, and customer service.
          </Typography>

          <Typography variant="title" className="font-bold mt-4 mb-2">
            Business Transfers:
          </Typography>
          <Typography variant="body" className="mb-4">
            If we sell or buy businesses, customer information is generally one
            of the transferred business assets. In such cases, your data remains
            subject to the promises made in this policy unless otherwise agreed.
          </Typography>

          <Typography variant="title" className="font-black mt-8 mb-4">
            Examples of Information Collected
          </Typography>

          <Typography variant="title" className="font-bold mt-4 mb-2">
            Information You Give Us:
          </Typography>
          <ul className="list-disc pl-6 space-y-1 mb-6 text-base text-gray-600">
            <li>Name, address, and phone numbers</li>
            <li>Payment information</li>
            <li>Age and location</li>
            <li>IP address</li>
            <li>Profile information including photo</li>
            <li>Identity and address proof including PAN</li>
            <li>Credit history</li>
          </ul>

          <Typography variant="title" className="font-bold mt-4 mb-2">
            Automatic Information:
          </Typography>
          <ul className="list-disc pl-6 space-y-1 mb-6 text-base text-gray-600">
            <li>Login credentials</li>
            <li>Device and OS information</li>
            <li>Browsing and content usage history</li>
            <li>Clickstream, page interaction, and performance data</li>
            <li>Cookies and device identifiers</li>
          </ul>

          <Typography variant="title" className="font-bold mt-4 mb-2">
            Information from Other Sources:
          </Typography>
          <ul className="list-disc pl-6 space-y-1 mb-6 text-base text-gray-600">
            <li>Updated delivery/address details from carriers</li>
            <li>Account and redemption info from co-branded partners</li>
            <li>Interaction data with affiliate services</li>
            <li>Search results and links including sponsored ads</li>
          </ul>
        </div>
      </Section>

      <Footer />
    </>
  );
}
