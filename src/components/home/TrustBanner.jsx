import { motion } from "framer-motion";
import PaintStroke from "../common/PaintStroke";
import { FaDownload } from "react-icons/fa";
import before1 from "../../assets/cieling under construction.jpeg";
import after1 from "../../assets/SUSPENDED cieling painting job.png";
import before2 from "../../assets/builder working on kitchen cabinets.jpeg";
import after2 from "../../assets/finished fitted kitchen cabinets .jpeg";
import companyProfile from "../../assets/Takaz Investments Company Profile 1.pdf";

const TrustBanner = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section className="py-stack-lg bg-surface text-left">
      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex justify-between items-end mb-stack-lg">
          <motion.div {...fadeInUp}>
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tight">
              Signature <PaintStroke color="var(--secondary)">Transformations</PaintStroke>
            </h2>
            <p className="text-on-surface-variant">Hover to see the Takaz Finishing touch.</p>
          </motion.div>
          <a
            href={companyProfile}
            download
            className="flex items-center gap-2 bg-secondary text-on-secondary px-6 py-3 rounded-lg font-label-lg hover:brightness-95 transition-all shadow-md"
          >
            <FaDownload /> Company Profile
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-stack-lg">
          {/* Transformation 1 */}
          <motion.div 
            {...fadeInUp}
            className="relative aspect-video group overflow-hidden rounded-xl cursor-ew-resize"
          >
            <img 
              className="absolute inset-0 w-full h-full object-cover" 
              src={before1} 
              alt="Before"
            />
            <div className="absolute inset-0 transition-all duration-700 [clip-path:inset(0_0_0_100%)] group-hover:[clip-path:inset(0_0_0_0)]">
              <img 
                className="w-full h-full object-cover" 
                src={after1} 
                alt="After"
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full font-label-lg text-primary z-20">CEILING TRANSFORMATION</div>
          </motion.div>
          {/* Transformation 2 */}
          <motion.div 
            {...fadeInUp}
            className="relative aspect-video group overflow-hidden rounded-xl cursor-ew-resize"
          >
            <img 
              className="absolute inset-0 w-full h-full object-cover" 
              src={before2} 
              alt="Before"
            />
            <div className="absolute inset-0 transition-all duration-700 [clip-path:inset(0_0_0_100%)] group-hover:[clip-path:inset(0_0_0_0)]">
              <img 
                className="w-full h-full object-cover" 
                src={after2} 
                alt="After"
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full font-label-lg text-primary z-20">KITCHEN REVEAL</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
