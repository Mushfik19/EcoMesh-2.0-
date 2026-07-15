import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function AnimatedNumber({ value, className = "" }) {
  const numericValue = typeof value === "number" ? value : Number.parseFloat(value);
  const canAnimate = Number.isFinite(numericValue) && String(value).match(/^-?\d+(\.\d+)?$/);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 90, damping: 22 });
  const rounded = useTransform(springValue, (latest) =>
    Number.isInteger(numericValue) ? Math.round(latest).toString() : latest.toFixed(1),
  );

  useEffect(() => {
    if (canAnimate) {
      motionValue.set(numericValue);
    }
  }, [canAnimate, motionValue, numericValue]);

  if (!canAnimate) {
    return <span className={className}>{value}</span>;
  }

  return <motion.span className={className}>{rounded}</motion.span>;
}
