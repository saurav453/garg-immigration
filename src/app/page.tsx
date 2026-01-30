"use client";
import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Globe,
  Award,
  Briefcase,
  Users,
  ChevronRight,
  Menu,
  X,
  Mail,
  MapPin,
  ExternalLink,
  Scale,
  CheckCircle,
  Building2,
  Fingerprint,
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Advisory Philosophy", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    {
      title: "Global Talent Visa",
      subtitle: "Endorsement & Application Management",
      description:
        "Specialized guidance for immigrants within Science, Engineering, Tech, and Arts sectors. We provide technical coordination with UK endorsing bodies and manage the submission process with precision.",
      icon: <Award className="w-8 h-8 text-blue-600" />,
      features: [
        "Technical Submission Management",
        "Evidence Verification",
        "Endorsing Body Coordination",
        "Strategic Documentation",
      ],
    },
    {
      title: "Innovator Founder Visa",
      subtitle: "Immigrant Entrepreneurs & Founders",
      description:
        "Managing the regulatory requirements for immigrant entrepreneurs establishing innovative UK businesses. Our firm handles the end-to-end liaison for main applicants and their families.",
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      features: [
        "Business Plan Compliance",
        "Endorsing Body Liaison",
        "Dependent Route Coordination",
        "Settlement Planning",
      ],
    },
    {
      title: "Indefinite Leave to Remain",
      subtitle: "Settlement & Permanent Residency",
      description:
        "Securing the permanent future of immigrants in the UK. We manage absence audits and continuous residence documentation to ensure high-standard settlement submissions.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      features: [
        "Absence Log Management",
        "Document Verification",
        "Residence Compliance Audits",
        "Administrative Representation",
      ],
    },
    {
      title: "British Citizenship",
      subtitle: "Naturalisation & Nationality Law",
      description:
        "Professional management of the naturalisation process for immigrants. We conduct thorough eligibility reviews and residency criteria assessments for final UK citizenship applications.",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      features: [
        "Naturalisation Assessment",
        "Good Character Review",
        "Passport Application Support",
        "Nationality Law Guidance",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#1A2B4C] rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-lg leading-none text-[#1A2B4C]">
                GARG IMMIGRATION
              </span>
              <span className="text-[10px] uppercase tracking-widest text-blue-600 font-semibold leading-tight">
                Advisory Limited
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-[#1A2B4C]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-[#1A2B4C] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-200"
            >
              Book Consultation
            </a>
          </div>

          <button
            className="md:hidden text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl py-6 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-slate-800 py-2"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-[#1A2B4C] text-white w-full py-4 rounded-xl font-bold mt-4">
              Book Consultation
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white"
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 transform origin-top-right hidden lg:block" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full mb-6">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">
                  IAA Level 1 (Approval Pending)
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-[#1A2B4C] leading-[1.1] mb-8 tracking-tight">
                Specialized <br />
                <span className="text-blue-600">UK Immigration</span> <br />
                Advisory.
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                Expert-led management of high-value UK visa routes. We provide
                technical application support and strategic advisory for
                immigrant professionals, founders, and their families.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-[#1A2B4C] text-white rounded-xl font-bold text-center hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1"
                >
                  Secure Your Future
                </a>
                <a
                  href="#services"
                  className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-bold text-center hover:bg-slate-50 transition-all"
                >
                  Our Advisory Field
                </a>
              </div>
            </div>

            <div className="lg:w-2/5 relative">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] bg-[#1A2B4C] flex items-center justify-center border-8 border-white">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-[#1A2B4C]/80" />
                <div className="relative text-center p-12 flex flex-col items-center">
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20">
                    <Building2 className="w-12 h-12 text-white/80" />
                  </div>
                  <h3 className="text-white font-bold text-lg tracking-widest uppercase mb-2">
                    Garg Immigration
                  </h3>
                  <p className="text-blue-300 text-xs font-semibold tracking-tighter uppercase opacity-80 italic">
                    Advisory Limited
                  </p>

                  <div className="mt-8 pt-8 border-t border-white/10 w-full">
                    <div className="flex items-center gap-3 text-white/60 justify-center">
                      <MapPin size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-center">
                        Leeds, United Kingdom
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-200 rounded-full blur-2xl -z-10 opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
              Advisory Services
            </div>
            <h2 className="text-4xl font-bold text-[#1A2B4C] mb-6 tracking-tight">
              Technical Immigration Management
            </h2>
            <p className="text-lg text-slate-600">
              GARG IMMIGRATION ADVISORY LIMITED provides professional management
              for immigrants navigating complex UK visa categories, focusing on
              regulatory compliance and administrative integrity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="mb-6 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <div className="group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                </div>
                <div className="mb-2">
                  <h3 className="text-2xl font-bold text-[#1A2B4C]">
                    {service.title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                    {service.subtitle}
                  </p>
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
                  {service.features.map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                    >
                      <CheckCircle size={14} className="text-blue-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#1A2B4C] rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] -mr-48 -mt-48 rounded-full" />
            <div className="grid lg:grid-cols-2 gap-16 relative z-10 items-center text-white">
              <div>
                <h2 className="text-3xl font-bold mb-8 tracking-tight italic font-serif">
                  Integrity in Immigrant Advisory.
                </h2>
                <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                  <p>
                    GARG IMMIGRATION ADVISORY LIMITED operates with a rigorous
                    technical discipline. Our firm applies a structured,
                    evidence-led approach to every immigrant application,
                    ensuring that complex regulatory requirements are translated
                    into clear, compliant submissions.
                  </p>
                  <p>
                    We act as a specialized{" "}
                    <span className="text-blue-400 italic font-medium">
                      Technical Partner
                    </span>{" "}
                    for immigrants. Our advisory is built on a foundation of
                    transparency and professional ethics, providing clarity at
                    every milestone of the immigration journey.
                  </p>
                  <div className="flex items-center gap-4 text-white font-bold pt-4">
                    <Scale className="text-blue-400" />
                    <span className="uppercase tracking-widest text-xs">
                      Technical Accuracy. Professional Ethics.
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                  <p className="text-blue-400 font-bold mb-2 uppercase text-[10px] tracking-widest">
                    Regulatory Management
                  </p>
                  <p className="text-white text-lg leading-relaxed font-light">
                    We provide professional representation to ensure that
                    evidence provided by immigrants is verified and all
                    submissions align with current Home Office guidance.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                  <p className="text-blue-400 font-bold mb-2 uppercase text-[10px] tracking-widest">
                    Administrative Excellence
                  </p>
                  <p className="text-white text-lg leading-relaxed font-light">
                    From initial assessment to final representation, our firm
                    manages the administrative complexities involved in family
                    and immigrant founder relocation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 bg-[#1A2B4C] p-12 text-white">
                <h2 className="text-3xl font-bold mb-8 tracking-tight">
                  Request an Advisory Session
                </h2>
                <p className="text-blue-100 mb-12 leading-relaxed text-sm">
                  Connect with GARG IMMIGRATION ADVISORY LIMITED for
                  professional guidance on your UK migration strategy. Initial
                  immigrant assessments are typically completed within 24
                  business hours.
                </p>
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-400">
                      <Mail />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-blue-300">
                        Enquiries
                      </p>
                      <p className="font-semibold text-lg">
                        info@gargadvisory.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-400">
                      <MapPin />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-blue-300">
                        Registered Office
                      </p>
                      <p className="font-semibold text-sm leading-tight">
                        Apartment 615 Manor Mills, <br />
                        Ingram Street, Leeds, <br />
                        England, LS11 9BT
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3 p-12">
                <form
                  className="grid md:grid-cols-2 gap-8"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="First and Last Name"
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-blue-600 outline-none transition-all focus:ring-4 ring-blue-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-blue-600 outline-none transition-all focus:ring-4 ring-blue-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      Direct Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+44"
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-blue-600 outline-none transition-all focus:ring-4 ring-blue-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      Advisory Interest
                    </label>
                    <select className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-blue-600 outline-none bg-white transition-all focus:ring-4 ring-blue-50">
                      <option>Global Talent Route</option>
                      <option>Innovator Founder Route</option>
                      <option>ILR & Settlement</option>
                      <option>British Citizenship</option>
                      <option>Corporate Immigration</option>
                    </select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      Enquiry Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Briefly summarize the requirements for the immigrant application..."
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-blue-600 outline-none transition-all focus:ring-4 ring-blue-50"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button className="w-full py-5 bg-[#1A2B4C] text-white rounded-xl font-bold text-xl hover:bg-blue-800 transition-all shadow-xl hover:shadow-blue-100 flex items-center justify-center gap-2 group">
                      Initialize Consultation{" "}
                      <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#1A2B4C] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold tracking-tight text-[#1A2B4C]">
                    GARG IMMIGRATION
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-blue-600 font-semibold leading-none">
                    Advisory Limited
                  </span>
                </div>
              </div>
              <p className="text-slate-500 leading-relaxed mb-6 text-sm">
                Professional immigration advisory firm managing high-value UK
                visa categories for exceptionally talented immigrants and
                innovative founders.
              </p>
              <div className="space-y-2">
                <div className="text-slate-400 text-[11px] leading-relaxed flex items-start gap-2">
                  <MapPin size={12} className="shrink-0 mt-0.5" />
                  <span>
                    Apartment 615 Manor Mills Ingram Street, Leeds, LS11 9BT
                  </span>
                </div>
                <div className="text-slate-400 text-[11px] leading-relaxed flex items-center gap-2">
                  <Fingerprint size={12} className="shrink-0" />
                  <span>Company Number: 16990289</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 md:col-span-2">
              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 mb-6 uppercase text-[10px] tracking-widest">
                  Advisory Field
                </h4>
                <a
                  href="#home"
                  className="block text-slate-500 hover:text-blue-600 text-sm"
                >
                  Home
                </a>
                <a
                  href="#services"
                  className="block text-slate-500 hover:text-blue-600 text-sm"
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="block text-slate-500 hover:text-blue-600 text-sm"
                >
                  Philosophy
                </a>
                <a
                  href="#contact"
                  className="block text-slate-500 hover:text-blue-600 text-sm"
                >
                  Contact
                </a>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 mb-6 uppercase text-[10px] tracking-widest">
                  Compliance
                </h4>
                <div className="text-[11px] text-slate-400 leading-relaxed space-y-3">
                  <p>
                    GARG IMMIGRATION ADVISORY LIMITED is a registered company in
                    England & Wales (Company Number: 16990289).
                  </p>
                  <p>Registration: IAA Level 1 (Approval Pending).</p>
                  <p>
                    Our firm provides professional immigration advisory services
                    in accordance with official regulatory standards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-xs">
              © {new Date().getFullYear()} GARG IMMIGRATION ADVISORY LIMITED.
              All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-blue-600">
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
