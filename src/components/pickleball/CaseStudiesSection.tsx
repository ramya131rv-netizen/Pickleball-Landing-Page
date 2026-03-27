import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, Clock, MapPin } from "lucide-react";
import pickleballEventBg from "@/assets/pickleball-event-bg.jpg";
import pickleballHeroBg from "@/assets/pickleball-hero-bg.jpg";
import { fadeUp, stagger, caseStudies, eventFormats } from "./data";
import { sectionBody, sectionEyebrow, sectionSpacing, sectionTitle } from "./sectionStyles";


export const CaseStudiesSection = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = ["All", "Leagues", "Franchise", "Association"];

  const featuredStudy = caseStudies[0];
  const gridStudies = caseStudies.slice(1);


  return (
    <section id="case-studies" className={`bg-[#102319] text-white font-sans border-t border-[#1a3a2d] ${sectionSpacing}`}>
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.div {...fadeUp} className={`${sectionEyebrow} mb-4 font-dela text-[#a8c78c]`}>
            Pickleball Event Management India
          </motion.div>
          <motion.h2 {...fadeUp} className={`${sectionTitle} mb-4`}>
            Every Format. Every Scale.
            <br />
            <span className="text-[#d0e999]">Flawlessly Delivered.</span>
          </motion.h2>
          <motion.p {...fadeUp} className={`${sectionBody} max-w-2xl font-light text-white/60`}>
            From 3-day professional leagues to corporate events and national tournaments.
          </motion.p>
        </div>

        {/* Case Studies "Blog" Header */}
        <div className="mb-8">
          <h3 className="font-dela text-xl sm:text-2xl md:text-[1.8rem] text-white mb-2">Case Studies</h3>
          <p className={`${sectionBody} mb-6 font-light text-white/60`}>Detailed breakdowns of our flagship events and complete tournament operations.</p>

          {/* Tabs */}
          <div className="flex overflow-x-auto gap-2 pb-2 hide-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`shrink-0 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${activeTab === tab
                  ? "bg-[#d0e999] text-[#102319]"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <motion.div
          {...fadeUp}
          className="group relative bg-[#152e22] border border-white/5 rounded-2xl overflow-hidden flex flex-col md:flex-row mb-12 hover:border-white/10 transition-colors cursor-pointer"
        >
          {/* Left: Image */}
          <div className="w-full md:w-1/2 relative h-[300px] md:h-auto overflow-hidden">
            <div className="absolute top-4 left-4 z-20">
              <span className="bg-[#d0e999] text-[#102319] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded">
                Featured
              </span>
            </div>
            <img
              src={featuredStudy.img}
              alt={featuredStudy.title}
              className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-700"
            />
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-[11px] text-[#d0e999] uppercase tracking-wider font-semibold mb-4">
              <span>{featuredStudy.tag}</span>
              <span className="w-1 h-1 bg-white/20 rounded-full"></span>
              <span>{featuredStudy.location}</span>
            </div>

            <h3 className="font-dela text-xl sm:text-2xl md:text-[1.8rem] text-white mb-3 leading-tight group-hover:text-[#d0e999] transition-colors">
              {featuredStudy.title}
            </h3>

            <p className="text-[#a8c78c] text-sm font-medium mb-4">
              {featuredStudy.subtitle}
            </p>

            <p className={`${sectionBody} font-light mb-8 text-white/60`}>
              {featuredStudy.desc}
            </p>

            {featuredStudy.stats && (
              <div className="flex flex-wrap gap-x-6 gap-y-3 mt-auto">
                {featuredStudy.stats.map((st, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-[#d0e999] font-dela text-lg">{st.val}</span>
                    <span className="text-white/50 text-[10px] uppercase font-bold tracking-wider">{st.label}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 flex items-center gap-2 text-[#d0e999] text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform w-fit">
              Read Full Case Study <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </motion.div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <div className="relative w-full sm:w-auto flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search case studies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#152e22] border border-white/5 text-white text-sm rounded-lg pl-10 pr-4 py-3 placeholder:text-white/30 focus:outline-none focus:border-[#d0e999]/50 transition-colors"
            />
          </div>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#152e22] border border-white/5 text-white/70 text-xs uppercase font-bold tracking-wider px-5 py-3 rounded-lg hover:bg-white/5 hover:text-white transition-colors">
            Trending First
          </button>
        </div>

        {/* 3 Grid Posts */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          <AnimatePresence>
            {gridStudies.map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-[#152e22] border border-white/5 rounded-2xl overflow-hidden cursor-pointer flex flex-col hover:border-white/10 transition-all"
              >
                <div className="w-full aspect-[16/9] overflow-hidden">
                  <img
                    src={cs.img}
                    alt={cs.title}
                    className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-[10px] text-white/50 uppercase tracking-wider font-semibold mb-3">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#d0e999]" /> {cs.location}</span>
                    <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                    <span className="text-[#d0e999]">{cs.tag}</span>
                  </div>

                  <h4 className="font-dela text-lg text-white mb-2 leading-tight group-hover:text-[#d0e999] transition-colors">
                    {cs.title}
                  </h4>
                  <p className="text-white/60 text-xs font-light leading-relaxed mb-6 line-clamp-3">
                    {cs.desc}
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
                    <div className="flex items-center gap-2 text-[#d0e999] text-[10px] font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                      Read More <ArrowRight className="w-3 h-3" />
                    </div>
                    <span className="text-white/30 text-[10px] uppercase font-bold tracking-wider">
                      {cs.subtitle.split(' ')[0]}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Horizontal Event Formats (4 Key Points with Images instead of Icons) */}
        <div>
          <div className="mb-8 border-b border-white/5 pb-4">
            <h3 className="font-dela text-xl sm:text-2xl md:text-[1.8rem] text-white">4 Pillars of Production</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventFormats.map((format, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-black cursor-pointer border border-white/5"
              >
                <img
                  src={format.img}
                  alt={format.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102319] via-[#102319]/50 to-transparent flex flex-col justify-end p-6">
                  <span className="font-dela text-4xl text-white/20 mb-2 transition-all duration-500 group-hover:-translate-y-2">
                    0{i + 1}
                  </span>
                  <h4 className="font-dela text-xl text-white leading-tight mb-2 group-hover:text-[#d0e999] transition-colors">
                    {format.title}
                  </h4>
                  <p className="text-white/60 text-xs font-light transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                    {format.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};
