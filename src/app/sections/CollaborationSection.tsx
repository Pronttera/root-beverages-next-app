 "use client";
import React, { useState } from "react";
import { Phone, Mail, Globe, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function CollaborationSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ✅ VALIDATION
  const validateForm = () => {
    const newErrors: any = {};

    if (!form.name || form.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email || !emailRegex.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    const phoneRegex = /^\+91\d{10}$/;
    if (!form.phone || !phoneRegex.test(form.phone)) {
      newErrors.phone = "Enter valid +91 phone number";
    }

    

    if (!form.city) newErrors.city = "City is required";
    if (!form.country) newErrors.country = "Country is required";
    if (!form.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ WHATSAPP SUBMIT
  const handleSubmit = () => {
    if (!validateForm()) return;

    const capitalize = (str: string) =>
      str.trim().replace(/\b\w/g, (c) => c.toUpperCase());

    const city = capitalize(form.city);
    const country = capitalize(form.country);

    const whatsappNumber = "91706660839"; 

    const text = `Hey, I'm ${form.name} and I'm interested in collaborating with Root Beverages! 

  Here are my details:
  Email: ${form.email}
  Phone: ${form.phone}
  City: ${city}
  Country: ${country}

  Message:
  ${form.message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text,
    )}`;

    window.open(url, "_blank");

    setShowModal(true);
  };

  const contactItems = [
    {
      text: "+91 84464028XX",
      icon: <Phone size={20} />,
      link: "tel:+9184464028XX",
    },
    {
      text: "info@rootbeverages.asia",
      icon: <Mail size={20} />,
      link: "mailto:info@rootbeverages.asia",
    },
    {
      text: "rootbeverages.asia",
      icon: <Globe size={20} />,
      link: "https://rootbeverages.asia",
    },
  ];

  return (
    <section
      id="lets-collaborate"
      className="relative dotted-bg py-32 px-6 md:px-16 lg:px-24"
    >
      <div className="absolute left-0 top-[10%] w-full h-[600px] bg-[#E53935] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT */}
        <div className="text-white md:mt-5 mt-15">
          <h2
            className="text-4xl md:text-6xl font-black"
            style={{ WebkitTextStroke: "2px black", paintOrder: "stroke fill" }}
          >
            Collaborate with us
          </h2>

          <p className="mt-4 text-lg max-w-lg leading-relaxed">
            Ready to bring something fresh to the table? We are always looking
            for exciting partnerships and distributors. Let's grow together!
          </p>

          <div className="mt-6 flex flex-col gap-4 max-w-md">
            {contactItems.map((item) => (
              <a
                key={item.text}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white text-black rounded-full px-6 py-3 w-full text-lg font-semibold transition-all duration-300 hover:text-red-500 cursor-pointer"
              >
                <span className="text-black group-hover:text-red-500 transition-colors">
                  {item.icon}
                </span>
                <span>{item.text}</span>
              </a>
            ))}
          </div>

          <div className="mt-6 text-lg text-white/80 leading-relaxed">
            <strong className="text-white">Root Beverages Pvt Ltd</strong>
            <br />
            7 Temasek Blvd, #12–07 Suntec
            <br />
            Tower One, Australia, 038987
          </div>
        </div>

        {/* FORM */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl px-10 py-12 w-full max-w-xl ml-auto -mt-35 min-h-[800px] flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              {/* INPUTS */}
              {[
                { name: "name", placeholder: "Name" },
                { name: "email", placeholder: "Email" },
                { name: "phone", placeholder: "+91XXXXXXXXXX" },
                { name: "city", placeholder: "City" },
                { name: "country", placeholder: "Country" },
              ].map((field) => (
                <div key={field.name}>
                  <input
                    name={field.name}
                    placeholder={field.placeholder}
                    value={(form as any)[field.name]}
                    onChange={handleChange}
                    className="border bg-[#fdf5f5] border-[#f1dede] rounded-xl px-5 py-4 text-lg outline-none focus:border-red-500 w-full"
                  />
                  {errors[field.name] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}

              {/* TEXTAREA */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  className="border bg-[#fdf5f5] border-[#f1dede] rounded-xl px-5 py-4 text-lg outline-none focus:border-red-500 resize-none w-full"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            {/* BUTTON */}
            <div className="relative flex justify-center mt-8">
              <motion.img
                src="/yuzu-lavender-backdrop2.svg"
                alt="flower"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="hidden md:block absolute left-30 w-[60px] h-[60px] -translate-x-1/2"
              />

              <motion.img
                src="/yuzu-lavender-backdrop2.svg"
                alt="flower"
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="hidden md:block absolute right-30 w-[60px] h-[60px] translate-x-1/2"
              />

              <button
                onClick={handleSubmit}
                className="relative z-10 bg-[#E53935] text-white font-bold w-[260px] py-4 rounded-full text-lg shadow-md hover:scale-105 transition-all"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-xl">
            <div className="flex flex-col items-center mb-4">
              <CheckCircle size={48} className="text-green-500 mb-2" />
              <h3 className="text-2xl font-bold">Success</h3>
            </div>
            <p className="text-gray-600 mb-6">
              WhatsApp opened with your message. Please click send.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-[#E53935] text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition-all hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}