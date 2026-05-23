import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import emergencyImg from "../assets/plumber installing .jpeg";
import leakImg from "../assets/intsallation on wall.jpeg";
import geyserImg from "../assets/tank after setup.jpeg";
import drainImg from "../assets/plumber setting up pipes.jpeg";

const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      id: "emergency",
      icon: "e911_emergency",
      title: "Emergency Plumbing",
      tag: "24/7 PRIORITY",
      desc: "Rapid response for bursts, flooding, and critical failures. Arrival within 60 minutes across Harare.",
      features: ["Burst Pipe Repair", "Severe Flooding Control", "Overnight Site Visits"],
      color: "bg-error/10 text-error border-error/20",
      img: emergencyImg
    },
    {
      id: "drain-laying",
      icon: "layers",
      title: "Drain Laying",
      tag: "INFRASTRUCTURE",
      desc: "Certified underground drainage solutions including design, excavation, and professional pipe laying for new builds and renovations.",
      features: ["Sewer Line Install", "Stormwater Systems", "Septic Tank Layout"],
      color: "bg-primary/10 text-primary border-primary/20",
      img: drainImg
    },
    {
      id: "reticulation",
      icon: "hub",
      title: "Water Reticulation",
      tag: "DISTRIBUTION",
      desc: "Engineering complex water distribution networks for residential estates, industrial parks, and commercial skyscrapers.",
      features: ["Main Line Setup", "Pressure Regulation", "Complex Valving Systems"],
      color: "bg-secondary/10 text-secondary border-secondary/20",
      img: leakImg
    },
    {
      id: "maintenance",
      icon: "handyman",
      title: "General Maintenance",
      tag: "PREVENTATIVE",
      desc: "Comprehensive plumbing health checks and preventative maintenance contracts to keep your infrastructure performing at its best.",
      features: ["System Audits", "Valve Servicing", "Corrosion Protection"],
      color: "bg-accent/10 text-accent border-accent/20",
      img: geyserImg
    },
    {
      id: "leak",
      icon: "water_damage",
      title: "Leak Detection",
      tag: "PRECISION",
      desc: "Non-invasive ultrasonic and thermal imaging to find hidden leaks before they cause major damage.",
      features: ["Thermal Imaging Scans", "Acoustic Water Sensing", "Slab Leak Identification"],
      color: "bg-secondary/10 text-secondary border-secondary/20",
      img: leakImg
    },
    {
      id: "geyser",
      icon: "water_heater",
      title: "Geyser & Water Heating",
      tag: "INSTALLATION & REPAIR",
      desc: "Full service maintenance and installation for electric, gas, and solar heating systems.",
      features: ["Thermostat Replacement", "Safety Valve Maintenance", "Solar Conversions"],
      color: "bg-primary/10 text-primary border-primary/20",
      img: geyserImg
    }
  ];

  return (
    <div className="bg-background min-h-screen pt-24 pb-32 font-body-md">
      {/* Header Section */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[400px]">plumbing</span>
        </div>
        
        <div className="max-w-container-max mx-auto relative z-10 space-y-6">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-label-md text-accent tracking-[0.3em] uppercase block"
          >
            Professional Grade Solutions
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-headline-xl text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-none"
          >
            Our Plumbing <br /> <span className="text-primary-fixed-dim italic">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-body-lg text-lg md:text-xl text-primary-fixed-dim max-w-2xl leading-relaxed"
          >
            From emergency pipe bursts to precise water tank installations, our team of certified specialists delivers master-grade plumbing solutions for both residential and commercial properties.
          </motion.p>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto space-y-12">
          {services.map((s, i) => (
            <motion.div 
              key={s.id}
              {...fadeInUp}
              className="bg-white rounded-3xl p-8 md:p-16 border border-outline-variant/30 shadow-xl hover:shadow-2xl transition-all grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-5 space-y-8">
                <div className={`inline-block px-4 py-1 rounded-full text-[10px] font-label-md tracking-widest uppercase border ${s.color}`}>
                  {s.tag}
                </div>
                <div className="flex items-center gap-6">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${s.color.split(' ')[0]} ${s.color.split(' ')[1]}`}>
                    <span className="material-symbols-outlined text-4xl">{s.icon}</span>
                  </div>
                  <h2 className="font-headline-lg text-3xl md:text-4xl text-primary font-bold uppercase tracking-tighter">
                    {s.title}
                  </h2>
                </div>
                <p className="font-body-lg text-on-surface-variant leading-relaxed text-lg">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  {s.features.map((f, j) => (
                    <span key={j} className="bg-surface px-4 py-2 rounded-lg text-xs font-body-md text-on-surface border border-outline-variant/30">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 bg-surface-container-low rounded-2xl h-[300px] md:h-[400px] relative overflow-hidden group border border-outline-variant/30">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent"></div>
                <div className="absolute bottom-8 right-8">
                  <a 
                    href={`https://wa.me/263715818857?text=${encodeURIComponent(`I would like to book the following service: *${s.title}*.\n\nDescription: ${s.desc}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-primary text-white px-8 py-4 rounded-xl font-label-md hover:bg-accent transition-colors shadow-xl inline-block"
                  >
                    BOOK SERVICE
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-outline-variant/30">
         <div className="max-w-container-max mx-auto text-center space-y-20">
            <h2 className="font-headline-xl text-primary text-4xl uppercase font-bold tracking-tighter">Additional Master Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {[
                { icon: "architecture", title: "Pipe Maintenance", desc: "Preventative care for older infrastructures and heritage buildings." },
                { icon: "water_full", title: "Water Tank Install", desc: "Backup water systems and pump setup for consistent supply." },
                { icon: "factory", title: "Commercial Plumbing", desc: "Industrial scale solutions and comprehensive maintenance SLAs." },
                { icon: "security", title: "Quality Check", desc: "Final pressure testing and site cleanup on every project." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-2xl border border-outline-variant/30 space-y-6 hover:translate-y-[-8px] transition-transform shadow-sm hover:shadow-xl">
                   <div className="text-secondary">
                      <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                   </div>
                   <h3 className="font-headline-sm text-xl text-primary uppercase">{item.title}</h3>
                   <p className="font-body-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* How We Work */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop">
         <div className="max-w-container-max mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
               <div className="space-y-4">
                  <span className="font-label-md text-accent tracking-widest uppercase">The Takaz Service Journey</span>
                  <h2 className="font-headline-xl text-primary text-4xl font-bold uppercase tracking-tighter">Our Working Process</h2>
               </div>
               <p className="font-body-lg text-on-surface-variant max-w-sm">
                  We believe in transparency and precision at every step of the repair process.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Request Service", desc: "Call or book online for immediate dispatch." },
                { step: "02", title: "Site Diagnosis", desc: "Specialist arrives with advanced diagnostic tools." },
                { step: "03", title: "Master Repair", desc: "Work carried out using premium grade parts." },
                { step: "04", title: "Quality Testing", desc: "Final pressure testing and thorough site cleanup." }
              ].map((item, i) => (
                <div key={i} className="space-y-6 relative">
                   <div className="text-6xl font-headline-xl text-primary/5 font-black absolute -top-4 -left-4">{item.step}</div>
                   <div className="h-1 w-12 bg-accent relative z-10"></div>
                   <h3 className="font-headline-sm text-xl text-primary uppercase relative z-10">{item.title}</h3>
                   <p className="font-body-md text-on-surface-variant relative z-10 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop bg-accent text-white">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-8">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
               <span className="material-symbols-outlined text-4xl">e911_emergency</span>
            </div>
            <div className="space-y-2">
               <h2 className="font-headline-lg text-3xl font-bold uppercase tracking-tight">Need Urgent Assistance?</h2>
               <p className="font-body-lg opacity-90">Call our emergency hotline for rapid 60-minute response.</p>
            </div>
          </div>
          <a href="tel:+263715818857" className="bg-primary text-white px-12 py-6 rounded-2xl font-headline-md text-2xl shadow-2xl hover:scale-105 transition-all">
            +263 71 581 8857
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
