import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../components/common/Layout";

const ProductDetail = () => {
  const { id } = useParams();

  // Mock data for a service detail view
  const service = {
    title: "Master Geyser Installation",
    price: "From $150",
    desc: "Professional installation and maintenance of solar, gas, and electric water heating systems. Our master plumbers ensure maximum efficiency and safety for your home or business.",
    features: [
      "Thermostat & Element Replacement",
      "Safety Valve Maintenance",
      "Pressure Control Valve Setup",
      "Solar Geyser Conversions",
      "Energy Efficiency Audit"
    ],
    guarantee: "24-Month Workmanship Warranty"
  };

  return (
    <Layout>
      <div className="bg-background min-h-screen pt-32 pb-32 font-body-md px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-12 font-label-md uppercase tracking-widest">
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="aspect-square bg-surface-container rounded-[40px] overflow-hidden relative border border-outline-variant/30 flex items-center justify-center">
                 <span className="material-symbols-outlined text-[300px] text-primary/5">water_heater</span>
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                 {[1, 2, 3].map(i => (
                   <div key={i} className="aspect-square bg-white rounded-2xl border border-outline-variant/30 flex items-center justify-center">
                      <span className="material-symbols-outlined text-4xl text-secondary opacity-20">plumbing</span>
                   </div>
                 ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <span className="bg-accent/10 text-accent px-4 py-1 rounded-full text-[10px] font-label-md tracking-widest uppercase border border-accent/20">Certified Service</span>
                <h1 className="font-headline-xl text-4xl md:text-5xl text-primary font-bold uppercase tracking-tighter">{service.title}</h1>
                <p className="font-headline-md text-3xl text-secondary font-bold">{service.price}</p>
              </div>

              <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
                {service.desc}
              </p>

              <div className="space-y-6">
                 <h3 className="font-headline-sm text-xl text-primary uppercase border-b border-outline-variant/30 pb-4">Key Inclusions</h3>
                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 font-body-md text-on-surface-variant">
                         <span className="material-symbols-outlined text-accent text-sm">verified</span>
                         {f}
                      </li>
                    ))}
                 </ul>
              </div>

              <div className="p-8 bg-surface-container-low rounded-2xl border border-outline-variant/30 flex items-center gap-6">
                 <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">security</span>
                 </div>
                 <div>
                    <h4 className="font-headline-sm text-sm uppercase text-primary font-bold">Takaz Quality Guarantee</h4>
                    <p className="font-body-sm text-on-surface-variant">{service.guarantee}</p>
                 </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                 <Link to="/contact" className="flex-1 bg-accent text-white py-6 rounded-2xl font-headline-md text-xl text-center hover:scale-105 transition-all shadow-xl shadow-accent/20">
                    BOOK NOW
                 </Link>
                 <a 
                   href={`https://wa.me/263715818857?text=${encodeURIComponent(`I am inquiring about the following service: *${service.title}*\nPrice: ${service.price}\n\n${service.desc}`)}`}
                   target="_blank"
                   rel="noreferrer"
                   className="flex-1 bg-white border-2 border-primary text-primary py-6 rounded-2xl font-headline-md text-xl text-center hover:bg-primary hover:text-white transition-all"
                 >
                    ENQUIRE VIA WHATSAPP (SEND DETAILED MESSAGE)
                 </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
