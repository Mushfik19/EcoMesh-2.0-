import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Mail, MapPin, ShieldCheck, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { paths } from "@/routes/paths";

const quickLinks = [
  { label: "Home", href: paths.landing },
  { label: "Dashboard", href: paths.dashboard },
  { label: "Weather", href: paths.weather },
  { label: "Live Map", href: paths.liveMap },
  { label: "AI Prediction", href: paths.aiPrediction },
  { label: "Digital Twin", href: paths.digitalTwin },
  { label: "Simulation", href: paths.simulation },
  { label: "Documentation", href: paths.documentation },
  { label: "About", href: paths.about },
];

const technologyStack = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "FastAPI",
  "TensorFlow",
  "ESP32",
  "LoRa",
  "Leaflet",
  "MySQL",
];

const researchFocus = [
  "Climate Intelligence",
  "Disaster Management",
  "Edge AI",
  "LoRa Mesh",
  "Digital Twin",
  "Blue Economy",
];

const contactItems = [
  { label: "Email", value: "contact@ecomesh.bd", icon: Mail },
  { label: "GitHub", value: "github.com/ecomesh-2", icon: Code2 },
  { label: "LinkedIn", value: "linkedin.com/company/ecomesh", icon: Globe },
  { label: "Location", value: "Daffodil International University, Dhaka, Bangladesh", icon: MapPin },
];

export function LandingFooter() {
  return (
    <footer className="relative mt-10 border-t border-white/10 bg-white/[0.03] px-4 pb-6 pt-10 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 rounded-lg border border-white/10 bg-surface/70 p-5 shadow-command backdrop-blur-2xl xl:grid-cols-[1.15fr_0.85fr_0.8fr_1fr_1fr]">
          <motion.section
            className="space-y-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35 }}
          >
            <div>
              <p className="type-title text-2xl text-white">EcoMesh 2.0</p>
              <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                Protecting coastal communities through Edge AI, LoRa Mesh Networking, Digital Twin Technology, and Climate Intelligence.
              </p>
            </div>
            <div className="rounded-lg border border-cyan-300/15 bg-cyan-300/10 p-4">
              <p className="flex items-center gap-2 text-sm font-semibold text-cyan-100">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                AI-Powered Coastal Disaster Intelligence Platform
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: 0.04 }}
          >
            <h2 className="type-title text-lg text-white">Quick Links</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link className="inline-flex items-center gap-1 text-muted-foreground transition hover:text-white" to={link.href}>
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: 0.08 }}
          >
            <h2 className="type-title text-lg text-white">Technology Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {technologyStack.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-muted-foreground">
                  {item}
                </span>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: 0.12 }}
          >
            <h2 className="type-title text-lg text-white">Developer</h2>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Developed by Md. Mahfujur Rahman</p>
              <p>Computer Science &amp; Engineering</p>
              <p>Daffodil International University</p>
              <p>Project Lead</p>
              <p>AI Engineer</p>
              <p>Full Stack Developer</p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: 0.16 }}
          >
            <h2 className="type-title text-lg text-white">Research Focus</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {researchFocus.map((item) => (
                <span key={item} className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              <h3 className="type-title text-base text-white">Contact</h3>
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="flex items-start gap-3 text-sm text-muted-foreground" key={item.label}>
                    <Icon className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-foreground">{item.label}</p>
                      <p className="leading-6">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>
        </div>

        <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-muted-foreground">
          <p className="leading-6">
            © 2026 EcoMesh 2.0
            <span className="mx-2 text-white/30">•</span>
            Designed and Developed by Md. Mahfujur Rahman
            <span className="mx-2 text-white/30">•</span>
            Department of Computer Science &amp; Engineering
            <span className="mx-2 text-white/30">•</span>
            Daffodil International University
          </p>
          <p className="mt-2 leading-6 text-slate-300">
            Made for a Smarter, Safer and Climate-Resilient Bangladesh.
          </p>
        </div>
      </div>
    </footer>
  );
}
