import { useState } from "react";

import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import {
  FiMessageCircle,
  FiPhoneCall,
  FiMail,
  FiCalendar,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Common/Button";
import Typography from "../Common/Typography";
import Container from "../Common/Container";
import Section from "../Common/Section";
import { socialLinks } from "src/Mocks/social-links";
import { supabase } from "~/lib/supabaseClient";
import { useDomain } from "~/context/AppContext";

const Footer = ({
  brandImageSrc,
  brandText,
}: {
  brandImageSrc?: string;
  brandText?: string;
}) => {
  const navigate = useNavigate();
  const domain = useDomain();

  const companyLinks = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
  ];

  const otherLinks = [
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
    { name: "Careers", path: "https://careers.giighire.com/pronttera" },
  ];

  const resourceLinks = [
    { name: "Visibility", path: "/visibility" },
    { name: "Marketplace", path: "/marketplace" },
    { name: "Services", path: "/services" },
  ];

  const contactButtons = [
    {
      icon: <FiMessageCircle className="text-lg" />,
      label: "Chat with us",
      href: "https://wa.me/919834174885",
    },
    {
      icon: <FiPhoneCall className="text-lg" />,
      label: "Call us",
      href: "tel:+919834174885",
    },
    {
      icon: <FiMail className="text-lg" />,
      label: "E-mail us",
      href: "mailto:info@pronttera.com",
    },
    {
      icon: <FiCalendar className="text-lg" />,
      label: "Book a slot",
      href: "https://calendly.com/pronttera24/30min",
    },
  ];

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async () => {
    setError("");
    setMessage("");

    if (!email.trim()) {
      setError("Please enter your email");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase
        .from("subscriptions")
        .insert([{ email }]);

      if (error) {
        if (error.code === "23505") {
          // duplicate key (email already added)
          setError("This email is already subscribed.");
        } else {
          setError("Something went wrong. Try again.");
        }
        return;
      }

      setMessage("Subscribed successfully!");
      setEmail("");
    } catch (err) {
      setError("Error occurred! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="w-full bg-">
      {/* CONTACT SECTION */}
      <Section className="w-full py-16 md:py-24 rounded-none bg-white dark:bg-slate-800 ">
        <div id="contact-section" className="scroll-mt-25">
          <Container className="text-center">
            <Typography
              variant="h2"
              className="text-left md:text-center dark:text-white!"
            >
              Let's discuss your idea over a call
            </Typography>

            <Typography
              variant="lead2"
              className="dark:text-white! text-left md:text-center max-w-3xl mx-auto mb-10"
            >
              Our team has worked with many founders, we’ll do our best to point
              you in the right direction.
            </Typography>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-10">
              {contactButtons
                .filter((btn) => !(domain === "ca" && btn.label === "Call us"))
                .map((btn, i) => (
                  <Button
                    key={i}
                    href={btn.href}
                    target="_blank"
                    size="lg"
                    variant="primary"
                    className="flex items-center gap-2 w-full md:w-auto"
                  >
                    {btn.icon}
                    {btn.label}
                  </Button>
                ))}
            </div>
          </Container>
        </div>
      </Section>

      {/* SUBSCRIBE SECTION */}
      <Section className="bg-blue-700 dark:bg-blue-950 w-full rounded-none">
        <Container className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="text-left md:max-w-xl mb-6">
            <Typography variant="h2" className="text-white">
              Subscribe to get updates
            </Typography>

            <Typography variant="lead1" className="text-white/70 max-w-xl">
              Stay up to date with the latest news, announcements, and articles.
            </Typography>
          </div>

          <div className="w-full md:w-auto">
            <div className="flex items-center bg-white shadow-lg px-4 py-3 w-full md:min-w-[420px]">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubscribe();
                  }
                }}
                className="w-full outline-none text-gray-700"
              />

              <Button
                onClick={handleSubscribe}
                className={loading ? "opacity-50 cursor-not-allowed" : ""}
                disabled={loading}
              >
                →
              </Button>
            </div>

            {message && <p className="text-white text-md mt-2">{message}</p>}
            {error && <p className="text-red-400 text-md mt-2">{error}</p>}
          </div>
        </Container>
      </Section>

      {/* FOOTER BODY */}
      <div className="max-w-7xl mx-auto px-6 py-8 border-t border-white/10 relative">
        {/* BOTTOM AREA */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-6 text-black dark:text-white gap-6">
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <img
                src={brandImageSrc}
                alt={brandText}
                className="h-8 md:h-14 w-auto"
              />
              {brandText}
            </div>
            <p>© {brandText}, All rights reserved</p>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 text-blue-800">
              Company
            </h3>
            <ul className="space-y-2 text-gray-400">
              {companyLinks.map((item) => (
                <li
                  key={item.name}
                  // onClick={() => navigate(item.path)}
                  onClick={() => {
                    if (item.path.startsWith("http")) {
                      window.location.href = item.path;
                    } else {
                      navigate(item.path);
                    }
                  }}
                  className="hover:text-blue-800 cursor-pointer duration-300 dark:hover:text-blue-400"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 text-blue-800">
              Other Links
            </h3>
            <ul className="space-y-2 text-gray-400">
              {otherLinks.map((item) => (
                <li
                  key={item.name}
                  onClick={() => {
                    if (item.path.startsWith("http")) {
                      window.location.href = item.path;
                    } else {
                      navigate(item.path);
                    }
                  }}
                  className="hover:text-blue-800 cursor-pointer duration-300 dark:hover:text-blue-400"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex space-x-5 text-lg text-gray-600 dark:text-white">
              {Object.entries(socialLinks).map(([key, val]) => {
                const Icon = val.icon;
                return (
                  <a
                    key={key}
                    href={val.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-800 cursor-pointer duration-300 dark:hover:text-blue-400"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
