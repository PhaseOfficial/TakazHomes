import { motion } from "framer-motion";
import Layout from "../components/common/Layout";

const Profile = () => {
  return (
    <Layout>
      <div className="bg-background min-h-screen pt-32 pb-32 font-body-md px-margin-mobile md:px-margin-desktop">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[40px] p-12 shadow-2xl border border-outline-variant/30 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
               <span className="material-symbols-outlined text-[200px]">account_circle</span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
              <div className="w-32 h-32 rounded-3xl bg-primary flex items-center justify-center text-white text-4xl font-headline-xl border-4 border-surface shadow-xl">
                 NP
              </div>
              <div className="text-center md:text-left space-y-2">
                <h1 className="font-headline-xl text-3xl md:text-4xl text-primary font-bold uppercase tracking-tighter">Takaz Client Portal</h1>
                <p className="font-body-lg text-on-surface-variant">View your service history and upcoming maintenance.</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                   <span className="px-4 py-1 bg-secondary/10 text-secondary rounded-full text-[10px] font-label-md tracking-widest uppercase border border-secondary/20">Verified Account</span>
                   <span className="px-4 py-1 bg-accent/10 text-accent rounded-full text-[10px] font-label-md tracking-widest uppercase border border-accent/20">Gold Tier Client</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { label: "Active Requests", value: "0", icon: "pending_actions" },
               { label: "Completed Jobs", value: "12", icon: "task_alt" },
               { label: "Loyalty Points", value: "850", icon: "stars" }
             ].map((stat, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="bg-white p-8 rounded-3xl border border-outline-variant/30 shadow-sm text-center space-y-4"
               >
                  <div className="w-12 h-12 rounded-xl bg-surface-container mx-auto flex items-center justify-center text-primary">
                     <span className="material-symbols-outlined">{stat.icon}</span>
                  </div>
                  <div className="space-y-1">
                     <p className="font-headline-xl text-3xl text-primary font-bold">{stat.value}</p>
                     <p className="font-label-md text-xs text-on-surface-variant uppercase tracking-widest">{stat.label}</p>
                  </div>
               </motion.div>
             ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-10 border border-outline-variant/30 shadow-xl space-y-8"
          >
             <h2 className="font-headline-sm text-xl text-primary uppercase border-b border-outline-variant/30 pb-6">Recent Service History</h2>
             <div className="space-y-6">
                {[
                  { date: "Oct 12, 2026", service: "Geyser Maintenance", status: "Completed", cost: "$45" },
                  { date: "Aug 05, 2026", service: "Drain Cleaning", status: "Completed", cost: "$60" },
                  { date: "May 22, 2026", service: "Leak Detection", status: "Completed", cost: "$85" }
                ].map((job, i) => (
                  <div key={i} className="flex justify-between items-center p-6 bg-surface rounded-2xl border border-outline-variant/10 hover:border-accent transition-colors group cursor-pointer">
                     <div className="space-y-1">
                        <p className="font-headline-sm text-primary font-bold">{job.service}</p>
                        <p className="font-body-sm text-on-surface-variant">{job.date}</p>
                     </div>
                     <div className="text-right">
                        <p className="font-headline-sm text-primary font-bold">{job.cost}</p>
                        <p className="text-[10px] font-label-md text-secondary uppercase tracking-widest">{job.status}</p>
                     </div>
                  </div>
                ))}
             </div>
             <button className="w-full py-4 border-2 border-dashed border-primary/20 rounded-2xl text-primary font-label-md uppercase tracking-widest hover:border-primary hover:bg-primary/5 transition-all">
                Load More History
             </button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
