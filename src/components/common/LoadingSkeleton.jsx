import { motion } from "framer-motion";

export function SkeletonBlock({ className = "" }) {
  return (
    <motion.div
      className={`overflow-hidden rounded-lg bg-white/[0.06] ${className}`}
      initial={{ opacity: 0.45 }}
      animate={{ opacity: [0.45, 0.9, 0.45] }}
      transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export function LoadingSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="glass-panel rounded-xl p-5">
          <SkeletonBlock className="h-4 w-24" />
          <SkeletonBlock className="mt-5 h-9 w-32" />
          <SkeletonBlock className="mt-5 h-2 w-full" />
        </div>
      ))}
    </div>
  );
}
