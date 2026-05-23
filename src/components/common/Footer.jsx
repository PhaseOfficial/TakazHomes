import { Link } from "react-router-dom";
import logo from "../../assets/Takaz Homes Logo Design.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-tertiary-container text-on-tertiary-container w-full mt-auto">
      <div className="bg-neutral-900/5 backdrop-contrast-125 px-margin-mobile md:px-margin-desktop py-stack-lg">
        <div className="max-w-container-max-width mx-auto flex flex-col md:flex-row justify-between items-start gap-gutter">
          <div className="space-y-stack-sm max-w-md">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Takaz Homes" className="h-10 w-auto brightness-0 invert" />
              <span className="font-headline-md text-headline-md text-white">TAKAZ HOMES</span>
            </div>
            <p className="font-body-md text-body-md opacity-70 text-white/80">
              Zimbabwe's premier construction finishing experts. Specializing in high-precision skimming, tiling, and modern architecture.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-stack-lg">
            <div className="flex flex-col gap-2">
              <span className="font-label-lg text-label-lg text-white uppercase tracking-widest mb-2">Navigation</span>
              <Link to="/" className="font-label-sm text-label-sm text-secondary-fixed font-bold">Home</Link>
              <Link to="/services" className="font-label-sm text-label-sm text-on-tertiary-container/70 hover:text-secondary-fixed transition-colors">Services</Link>
              <Link to="/contact" className="font-label-sm text-label-sm text-on-tertiary-container/70 hover:text-secondary-fixed transition-colors">Contact</Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-label-lg text-label-lg text-white uppercase tracking-widest mb-2">Connect</span>
              <a className="font-label-sm text-label-sm text-on-tertiary-container/70 hover:text-secondary-fixed transition-colors" href="#">Facebook</a>
              <a className="font-label-sm text-label-sm text-on-tertiary-container/70 hover:text-secondary-fixed transition-colors" href="#">Instagram</a>
              <a className="font-label-sm text-label-sm text-on-tertiary-container/70 hover:text-secondary-fixed transition-colors" href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="max-w-container-max-width mx-auto border-t border-white/10 mt-stack-lg pt-stack-md flex flex-col md:flex-row justify-between items-center gap-gutter">
          <span className="font-label-sm text-label-sm opacity-50 uppercase tracking-widest text-white/60">
            © 2026 TAKAZ HOMES CONSTRUCTION. ALL RIGHTS RESERVED.
          </span>
          <div className="flex gap-4">
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary transition-all"
            >
              <span className="material-symbols-outlined text-white">arrow_upward</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
