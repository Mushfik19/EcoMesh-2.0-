import { motion } from "framer-motion";

export function WeatherPanel({ title, eyebrow, action, children, className = "" }) {
  return (
    <motion.section
      className={`glass-panel motion-card rounded-xl p-5 ${className}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          {eyebrow ? <p className="type-mono text-xs uppercase text-primary">{eyebrow}</p> : null}
          <h2 className="type-title mt-1 text-xl">{title}</h2>
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
      {children}
    </motion.section>
  );
}
