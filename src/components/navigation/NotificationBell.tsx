import { AnimatePresence, motion } from "framer-motion";
import { Bell } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { notifications } from "@/components/navigation/authNavbar.data";
import { paths } from "@/routes/paths";

export interface NotificationBellProps {
  count?: number;
}

export function NotificationBell({ count = notifications.length }: NotificationBellProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="relative grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-muted-foreground transition hover:text-foreground"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Open notifications"
      >
        <Bell className="h-5 w-5" aria-hidden="true" />
        {count > 0 ? <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-rose-400 shadow-[0_0_0_3px_rgba(244,114,182,0.18)]" /> : null}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="absolute right-0 top-12 z-50 w-[min(92vw,320px)] rounded-lg border border-white/10 bg-surface/95 p-3 shadow-command backdrop-blur-xl"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            role="dialog"
            aria-label="Notifications"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <p className="type-title text-sm">Notifications</p>
              <span className="text-xs text-muted-foreground">{count} unread</span>
            </div>
            <div className="mt-3 space-y-2">
              {notifications.map((item) => (
                <div className="rounded-md border border-white/10 bg-white/[0.045] p-3" key={item.id}>
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.message}</p>
                  <p className="mt-2 text-[0.68rem] uppercase tracking-[0.08em] text-muted-foreground">{item.time}</p>
                </div>
              ))}
            </div>
            <Link className="btn btn-outline btn-sm mt-3 w-full" to={paths.notifications} onClick={() => setOpen(false)}>
              Open notifications
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
