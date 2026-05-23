import { motion } from "framer-motion";
import Layout from "../components/common/Layout";

const Voice = () => {
  return (
    <Layout>
      <div className="bg-background min-h-screen pt-32 pb-32 font-body-md px-margin-mobile md:px-margin-desktop">
        <div className="max-w-4xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-8"
          >
             <span className="font-label-md text-accent tracking-[0.4em] uppercase">Takaz Assistant</span>
             <h1 className="font-headline-xl text-4xl md:text-6xl text-primary font-bold uppercase tracking-tighter">Voice Support <br /> <span className="italic text-secondary">Simplified.</span></h1>
             <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
               Need to explain a complex plumbing issue? Use our voice messaging service to send a detailed description directly to our master technicians.
             </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="bg-white p-12 rounded-[40px] shadow-2xl border border-outline-variant/30 flex flex-col items-center justify-center space-y-10 text-center"
             >
                <div className="w-32 h-32 rounded-full bg-primary/5 flex items-center justify-center text-primary relative">
                   <div className="absolute inset-0 rounded-full border-4 border-primary animate-ping opacity-20"></div>
                   <span className="material-symbols-outlined text-6xl">mic</span>
                </div>
                <div className="space-y-4">
                   <h2 className="font-headline-lg text-2xl text-primary uppercase font-bold tracking-tight">Record Message</h2>
                   <p className="font-body-md text-on-surface-variant">Tap to start recording your plumbing concern.</p>
                </div>
                <button className="w-full bg-primary text-white py-6 rounded-2xl font-headline-md text-xl hover:bg-accent transition-all shadow-xl shadow-primary/20">
                   START RECORDING
                </button>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               className="bg-surface-container-low p-12 rounded-[40px] border border-outline-variant/30 flex flex-col justify-center space-y-8"
             >
                <h3 className="font-headline-sm text-xl text-primary uppercase font-bold border-b border-outline-variant/30 pb-6">Support Features</h3>
                <div className="space-y-6">
                   {[
                     { icon: "record_voice_over", title: "Detailed Diagnostics", desc: "Explain the sound or specific location of a leak in your own words." },
                     { icon: "spatial_audio_off", title: "Noise Identification", desc: "Record the sound of a rattling pipe for expert identification." },
                     { icon: "schedule_send", title: "Scheduled Callback", desc: "Leave a message and we'll call you back with a pre-diagnostic." }
                   ].map((feature, i) => (
                     <div key={i} className="flex gap-6">
                        <div className="text-secondary">
                           <span className="material-symbols-outlined">{feature.icon}</span>
                        </div>
                        <div className="space-y-1">
                           <h4 className="font-headline-sm text-sm uppercase text-primary font-bold">{feature.title}</h4>
                           <p className="font-body-sm text-on-surface-variant leading-relaxed">{feature.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-primary text-white p-12 rounded-[40px] text-center space-y-6 relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent"></div>
             <h3 className="font-headline-lg text-2xl uppercase tracking-widest relative z-10">Prefer a Direct Call?</h3>
             <a href="tel:+263715818857" className="text-4xl md:text-5xl font-headline-xl font-black text-accent block hover:scale-105 transition-all relative z-10">+263 71 581 8857</a>             <p className="font-label-md text-primary-fixed-dim uppercase tracking-widest relative z-10 opacity-70">Always available for emergencies</p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Voice;
