import { useState } from "react";
import Hero from "./contact/Hero";
import MobileHero from "./contact/MobileHero";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  ChevronDown,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

const FAQ_DATA = [
  {
    question: "How can I join The Matrix Club at VIT Bhopal?",
    answer:
      "You can join by filling out the registration form released during our recruitment drive or by contacting us through our official social media handles.",
  },
  {
    question: "Do I need prior coding experience?",
    answer:
      "No prior experience is required! We organize beginner-friendly workshops and mentoring sessions.",
  },
  {
    question: "What kind of events does the club organize?",
    answer:
      "We host hackathons, coding challenges, project showcases, and collaborative learning sessions.",
  },
  {
    question: "Are there any membership fees?",
    answer:
      "Membership is completely free! Some events may have small participation fees.",
  },
  {
    question: "Can students from any branch join?",
    answer:
      "Absolutely! The Matrix Club encourages interdisciplinary collaboration across all branches.",
  },
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    message: "",
    type: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const validateField = (name, value) => {
    let error = "";

    if (name === "name") {
      if (!value.trim()) {
        error = "Name is required.";
      } else if (value.trim().length < 2) {
        error = "Name must be at least 2 characters.";
      }
    }

    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!value.trim()) {
        error = "Email is required.";
      } else if (!emailPattern.test(value.trim())) {
        error = "Enter a valid email address.";
      }
    }

    if (name === "subject") {
      if (!value.trim()) {
        error = "Subject is required.";
      }
    }

    if (name === "message") {
      if (!value.trim()) {
        error = "Message cannot be empty.";
      } else if (value.trim().length < 10) {
        error = "Message should be at least 10 characters.";
      }
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);

      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);

    if (!isValid) {
      setStatus({
        message: "Please fix the errors above before sending.",
        type: "error",
      });

      return;
    }

    setIsLoading(true);

    setStatus({
      message: "",
      type: "",
    });

    setTimeout(() => {
      setIsLoading(false);

      setStatus({
        message: "Message sent successfully — we'll get back to you soon!",
        type: "success",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setStatus({
          message: "",
          type: "",
        });
      }, 4000);
    }, 1200);
  };

  return (
    <>
      {/* HERO SECTION AT TOP */}
      <div className="hidden md:block z-10 relative">
        <Hero />
      </div>
      <div className="block md:hidden relative z-10">
        <MobileHero />
      </div>

      {/* FONTS AND RETRO STYLES */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500;600;700;800;900&family=Rye&display=swap');

          .retro-font {
            font-family: 'Roboto Condensed', sans-serif;
          }

          .display-font {
            font-family: 'Rye', serif;
          }

          .paper-texture {
            background-image:
              radial-gradient(
                rgba(255,255,255,0.07) 1px,
                transparent 1px
              ),
              radial-gradient(
                rgba(0,0,0,0.22) 1px,
                transparent 1px
              );

            background-size:
              5px 5px,
              7px 7px;

            background-position:
              0 0,
              3px 2px;
          }

          .retro-shadow {
            text-shadow:
              2px 2px 0 #171717,
              3px 3px 0 #171717;
          }

          .yellow-shadow {
            text-shadow:
              2px 2px 0 #252019,
              3px 3px 0 #252019;
          }

          @keyframes floatCharacter {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-6px);
            }
          }

          .float-character {
            animation: floatCharacter 4s ease-in-out infinite;
          }

          @keyframes floatSlow {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-10px) rotate(3deg);
            }
          }

          .float-element {
            animation: floatSlow 5s ease-in-out infinite;
          }

          @keyframes arrowPulse {
            0%, 100% {
              opacity: 0.4;
            }
            50% {
              opacity: 1;
            }
          }

          .pulse-arrow {
            animation: arrowPulse 2s ease-in-out infinite;
          }
        `}
      </style>

      <section
        id="contact"
        className="
          relative
          min-h-screen
          w-full
          overflow-hidden
          bg-transparent
          py-10
          md:py-14
          lg:py-16
          px-4
          sm:px-6
          md:px-8
          text-white
        "
      >
        {/* ORIGINAL BACKGROUND OVERLAY */}
        <div
          className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/back.jpg)" }}
        />

        {/* DECORATIVE ELEMENTS FROM PUBLIC FOLDER */}
        <img
          src="/BULB.png"
          alt="Bulb"
          className="absolute top-10 left-6 w-12 md:w-16 h-auto float-element pointer-events-none z-0"
        />
        <img
          src="/CLOUD.png"
          alt="Cloud"
          className="absolute top-32 right-8 w-16 md:w-20 h-auto float-element pointer-events-none z-0"
          style={{ animationDelay: "1.5s" }}
        />
        <img
          src="/SUN.png"
          alt="Sun"
          className="absolute bottom-44 left-8 w-16 md:w-20 h-auto float-element pointer-events-none z-0"
          style={{ animationDelay: "3s" }}
        />
        <img
          src="/MESSAGES.png"
          alt="Message"
          className="absolute bottom-24 right-10 w-14 md:w-18 h-auto float-element pointer-events-none z-0"
          style={{ animationDelay: "2s" }}
        />

        {/* MAIN CONTAINER */}
        <div className="relative z-10 max-w-[1400px] mx-auto">
          {/* HEADER WITH TOUCH.PNG IMAGE */}
          <div className="relative mb-8 md:mb-10">
            <div className="pl-12 md:pl-16 flex flex-col items-start">
              <div className="retro-font font-bold text-[#e5e5e5] text-sm md:text-xl mt-2">
                Contact the Matrix Club Team & Services.
              </div>
            </div>
          </div>

          {/* TOP 3 SECTIONS */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr_1fr] gap-5 lg:gap-6 items-stretch">
            {/* 1. CONTACT DETAILS (DATA FROM PROVIDED IMAGE) */}
            <div className="relative bg-[#242424] border-[3px] border-[#7794a1] rounded-[13px] p-4 md:p-5 shadow-[4px_4px_0_#090909] rotate-[-0.5deg] flex flex-col justify-between">
              <div className="absolute -top-4 -left-3 w-9 h-9 rounded-full bg-[#f1c66b] border-[3px] border-[#151515] shadow-[2px_2px_0_#000] flex items-center justify-center text-[#111] retro-font font-black text-lg">
                1
              </div>

              <h2 className="retro-font uppercase font-black text-xl md:text-2xl tracking-wide text-[#eeeeee] mb-3">
                CONTACT DETAILS
              </h2>

              <div className="flex flex-col gap-3.5 my-auto">
                {/* EMAIL */}
                <div className="flex items-start gap-3 bg-[#1a1a1a] border border-[#7794a1]/40 rounded-lg p-3">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#f1c66b] text-[#111] flex items-center justify-center shadow-md">
                    <Mail className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="retro-font uppercase font-black text-xs text-[#f1c66b]">
                      Email
                    </div>
                    <a
                      href="mailto:multimedia_club@vitbhopal.ac.in"
                      className="retro-font font-bold text-xs sm:text-sm text-[#e6e6e6] hover:text-[#f1c66b] transition-colors break-all"
                    >
                      multimedia_club@vitbhopal.ac.in
                    </a>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-3 bg-[#1a1a1a] border border-[#7794a1]/40 rounded-lg p-3">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#f1c66b] text-[#111] flex items-center justify-center shadow-md">
                    <MapPin className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <div className="retro-font uppercase font-black text-xs text-[#f1c66b]">
                      Location
                    </div>
                    <div className="retro-font font-bold text-xs sm:text-sm text-[#e6e6e6] leading-tight">
                      <div className="font-extrabold text-white">The Matrix Club</div>
                      <div>VIT Bhopal University</div>
                      <div>Kothri Kalan, Sehore</div>
                      <div>Madhya Pradesh — 466114, India</div>
                    </div>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-3 bg-[#1a1a1a] border border-[#7794a1]/40 rounded-lg p-3">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#f1c66b] text-[#111] flex items-center justify-center shadow-md">
                    <Phone className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <div className="retro-font uppercase font-black text-xs text-[#f1c66b]">
                      Phone
                    </div>
                    <a
                      href="tel:+918968978226"
                      className="retro-font font-bold text-xs sm:text-sm text-[#e6e6e6] hover:text-[#f1c66b] transition-colors"
                    >
                      +91 89689 78226
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. CENTER CHARACTER / GRAPHIC */}
            <div className="relative min-h-[250px] md:min-h-[320px] flex items-center justify-center">
              {/* CIRCUIT LINE LEFT */}
              <div className="absolute top-[20%] left-0 w-[35%] h-[2px] bg-[#d8a9b8]" />
              <div className="absolute top-[20%] left-[30%] w-[2px] h-[55px] bg-[#d8a9b8]" />

              {/* CIRCUIT LINE RIGHT */}
              <div className="absolute bottom-[25%] right-0 w-[35%] h-[2px] bg-[#8bb3c0]" />
              <div className="absolute bottom-[25%] right-[30%] w-[2px] h-[55px] bg-[#8bb3c0]" />

              {/* CHARACTER / PUBLIC GRAPHIC */}
              <div className="float-character relative z-10 w-36 h-36 md:w-48 md:h-48 rounded-full bg-[#e5bd62] border-[5px] border-[#242424] shadow-[5px_5px_0_#080808] flex items-center justify-center overflow-hidden p-3">
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    src="/MULTIMEDIA.png"
                    alt="Multimedia Matrix"
                    className="w-20 md:w-28 h-auto object-contain drop-shadow-md"
                  />
                  <span className="retro-font font-black text-[#111] text-[10px] md:text-xs uppercase tracking-wider mt-1">
                    Matrix Hub
                  </span>
                </div>
              </div>

              {/* LEFT ARROW */}
              <div className="pulse-arrow absolute left-[0%] top-[45%] flex items-center">
                <div className="w-12 md:w-20 h-[3px] bg-[#668da0]" />
                <div className="w-0 h-0 border-t-[7px] border-b-[7px] border-r-[12px] border-t-transparent border-b-transparent border-r-[#668da0]" />
              </div>

              {/* RIGHT ARROW */}
              <div className="pulse-arrow absolute right-[0%] top-[48%] flex items-center">
                <div className="w-0 h-0 border-t-[7px] border-b-[7px] border-l-[12px] border-t-transparent border-b-transparent border-l-[#b77bb4]" />
                <div className="w-12 md:w-20 h-[3px] bg-[#b77bb4]" />
              </div>
            </div>

            {/* 3. WORKING INTERACTIVE FAQ SECTION */}
            <div className="relative bg-[#1d261d] border-[3px] border-[#78926c] rounded-[13px] p-5 md:p-6 shadow-[4px_4px_0_#090909] rotate-[-0.5deg] flex flex-col justify-between">
              <div className="absolute -top-4 -left-3 w-9 h-9 rounded-full bg-[#f1c66b] border-[3px] border-[#151515] shadow-[2px_2px_0_#000] flex items-center justify-center text-[#111] retro-font font-black text-lg">
                3
              </div>

              <h2 className="retro-font uppercase font-black text-xl md:text-2xl text-[#eeeeee] tracking-wide mb-4">
                FREQUENTLY ASKED
                <br />
                QUESTIONS
              </h2>

              {/* FAQ ACCORDION */}
              <div className="flex flex-col gap-2.5">
                {FAQ_DATA.map((item, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className={`border-2 rounded-md transition-all ${
                        isOpen
                          ? "border-[#b4d09f] bg-[#243324]"
                          : "border-[#78926c]/60 bg-[#161e16] hover:border-[#b4d09f]"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left p-2.5 flex items-center justify-between gap-2 cursor-pointer focus:outline-none"
                      >
                        <div className="flex items-start gap-2">
                          <span className="shrink-0 w-5 h-5 border-2 border-[#b4d09f] text-[#b4d09f] flex items-center justify-center text-xs font-black rounded-sm mt-0.5">
                            {isOpen ? "-" : "+"}
                          </span>
                          <p className="retro-font font-bold text-xs sm:text-sm text-[#eeeeee] leading-tight">
                            {item.question}
                          </p>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-[#b4d09f] shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-3 pb-3 pt-1 text-xs text-[#d0e4c2] font-sans leading-relaxed border-t border-[#78926c]/40 bg-[#1b251b]">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => toggleFaq(openFaq === null ? 0 : null)}
                className="retro-font mt-4 w-full py-2 bg-[#d8a85b] text-[#181818] border-2 border-[#111] rounded-md font-black uppercase text-sm shadow-[3px_3px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#000] transition-all cursor-pointer"
              >
                {openFaq !== null ? "Collapse FAQs" : "Expand FAQs"}
              </button>
            </div>
          </div>

          {/* MULTICHANNEL SUPPORT */}
          <div className="mt-7">
            <div className="relative bg-[#242424] border-[3px] border-[#d8a9b8] rounded-[13px] p-5 md:p-6 shadow-[5px_5px_0_#090909] rotate-[0.25deg]">
              <div className="absolute -top-4 -left-3 w-9 h-9 rounded-full bg-[#f1c66b] border-[3px] border-[#151515] shadow-[2px_2px_0_#000] flex items-center justify-center text-[#111] retro-font font-black text-lg">
                2
              </div>

              <h2 className="retro-font uppercase font-black text-xl md:text-2xl tracking-wide text-[#eeeeee] mb-4">
                MULTICHANNEL SUPPORT
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* EMAIL */}
                <div className="bg-[#d9d7c8] border-2 border-[#242424] rounded-md p-3 min-h-[90px] flex items-center gap-3 text-[#222]">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#242424] text-white flex items-center justify-center shadow-md">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="retro-font uppercase font-black text-sm text-black">
                      Email Support
                    </div>
                    <div className="retro-font font-semibold text-[11px] leading-tight mt-1 text-gray-800 break-all">
                      multimedia_club@vitbhopal.ac.in
                    </div>
                  </div>
                </div>

                {/* CALL */}
                <div className="bg-[#d9c3a2] border-2 border-[#242424] rounded-md p-3 min-h-[90px] flex items-center gap-3 text-[#222]">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#242424] text-white flex items-center justify-center shadow-md">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="retro-font uppercase font-black text-sm text-black">
                      Voice & Call
                    </div>
                    <div className="retro-font font-semibold text-[11px] leading-tight mt-1 text-gray-800">
                      +91 89689 78226
                    </div>
                  </div>
                </div>

                {/* POSTAL */}
                <div className="bg-[#d8a7a0] border-2 border-[#242424] rounded-md p-3 min-h-[90px] flex items-center gap-3 text-[#222]">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#242424] text-white flex items-center justify-center shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="retro-font uppercase font-black text-sm text-black">
                      Campus Location
                    </div>
                    <div className="retro-font font-semibold text-[10px] leading-tight mt-1 text-gray-800">
                      VIT Bhopal University,
                      <br />
                      Sehore — 466114, India
                    </div>
                  </div>
                </div>

                {/* SOCIAL */}
                <div className="bg-[#9bb48e] border-2 border-[#242424] rounded-md p-3 min-h-[90px] flex items-center gap-3 text-[#222]">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#242424] text-white flex items-center justify-center shadow-md">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="retro-font uppercase font-black text-sm text-black">
                      Social Media
                    </div>
                    <div className="retro-font font-semibold text-[10px] leading-tight mt-1 text-gray-800">
                      @matrixmultimedia
                      <br />
                      Direct Messaging
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SEND DIRECT MESSAGE */}
          <div className="mt-8 md:mt-10">
            <div className="relative bg-[#202020] border-[3px] border-[#d8a9b8] rounded-[15px] p-5 md:p-7 shadow-[5px_5px_0_#080808] rotate-[-0.25deg]">
              <div className="pointer-events-none absolute -inset-[5px] rounded-[18px] border border-[#d8a9b8]" />

              <div className="absolute -top-5 -left-3 w-10 h-10 rounded-full bg-[#f1c66b] border-[3px] border-[#151515] shadow-[2px_2px_0_#000] flex items-center justify-center text-[#111] retro-font font-black text-xl">
                4
              </div>

              <div className="relative z-10 mb-5">
                <h2 className="retro-font uppercase font-black text-2xl md:text-4xl text-[#eeeeee] tracking-wide flex items-center gap-2">
                  <Send className="w-7 h-7 text-[#f58b3c]" />
                  SEND DIRECT MESSAGE
                </h2>
                <p className="retro-font text-[#aaa] text-sm md:text-base mt-1">
                  Have something to say? Drop us a message!
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {/* NAME */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="name"
                    className="retro-font uppercase font-black text-sm text-[#eeeeee]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Neo Anderson"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full h-11 px-3 bg-[#e8e6dc] text-[#181818] border-[2px] border-[#111] rounded-[5px] outline-none retro-font font-semibold placeholder:text-[#777] focus:border-[#f1b15b] focus:ring-2 focus:ring-[#f1b15b]/30 transition-all ${
                      errors.name ? "border-red-500" : ""
                    }`}
                  />
                  {errors.name && (
                    <span className="text-red-400 text-xs retro-font">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* EMAIL */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="retro-font uppercase font-black text-sm text-[#eeeeee]"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full h-11 px-3 bg-[#e8e6dc] text-[#181818] border-[2px] border-[#111] rounded-[5px] outline-none retro-font font-semibold placeholder:text-[#777] focus:border-[#f1b15b] focus:ring-2 focus:ring-[#f1b15b]/30 transition-all ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <span className="text-red-400 text-xs retro-font">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* SUBJECT */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="subject"
                    className="retro-font uppercase font-black text-sm text-[#eeeeee]"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full h-11 px-3 bg-[#e8e6dc] text-[#181818] border-[2px] border-[#111] rounded-[5px] outline-none retro-font font-semibold placeholder:text-[#777] focus:border-[#f1b15b] focus:ring-2 focus:ring-[#f1b15b]/30 transition-all ${
                      errors.subject ? "border-red-500" : ""
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-red-400 text-xs retro-font">
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* MESSAGE */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="message"
                    className="retro-font uppercase font-black text-sm text-[#eeeeee]"
                  >
                    Describe Your Query
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Type your message..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 bg-[#e8e6dc] text-[#181818] border-[2px] border-[#111] rounded-[5px] outline-none resize-none retro-font font-semibold placeholder:text-[#777] focus:border-[#f1b15b] focus:ring-2 focus:ring-[#f1b15b]/30 transition-all ${
                      errors.message ? "border-red-500" : ""
                    }`}
                  />
                  {errors.message && (
                    <span className="text-red-400 text-xs retro-font">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* BUTTON */}
                <div className="md:col-span-2 flex flex-col items-center">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="retro-font w-full md:w-auto min-w-[220px] bg-[#f58b3c] text-[#211817] border-[3px] border-[#111] rounded-[5px] px-8 py-2.5 uppercase font-black text-lg md:text-xl tracking-wide shadow-[4px_4px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    {isLoading ? "SENDING..." : "SUBMIT INQUIRY!"}
                  </button>

                  {status.message && (
                    <div
                      role="status"
                      aria-live="polite"
                      className={`retro-font text-center text-sm mt-4 font-bold flex items-center gap-1.5 ${
                        status.type === "error"
                          ? "text-red-400"
                          : "text-green-400"
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      {status.message}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* BOTTOM CTA */}
          
        </div>
      </section>
    </>
  );
};

export default ContactUs;
