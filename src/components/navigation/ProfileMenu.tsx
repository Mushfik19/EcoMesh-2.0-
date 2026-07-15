import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, LogOut } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "@/components/navigation/Avatar";
import { commonDropdownItems, getRoleLabel, roleTools } from "@/components/navigation/authNavbar.data";
import { RoleBadge } from "@/components/navigation/RoleBadge";
import { paths } from "@/routes/paths";
import { useAuthStore } from "@/store/authStore";

export function ProfileMenu() {
  const navigate = useNavigate();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const account = useAuthStore((state) =>
    state.currentAccountId ? state.accounts.find((item) => item.id === state.currentAccountId) ?? null : null,
  );
  const logout = useAuthStore((state) => state.logout);

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

  const roleMenuItems = useMemo(() => {
    if (!account?.role) return [];
    return roleTools[account.role] ?? [];
  }, [account?.role]);

  if (!account) {
    return null;
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-left transition hover:bg-white/[0.06]"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <Avatar name={account.fullName} role={account.role} />
        <span className="hidden min-w-0 flex-col text-left sm:flex">
          <span className="truncate text-sm font-semibold text-foreground">{account.fullName}</span>
          <span className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(34,197,94,0.18)]" />
            Online
          </span>
        </span>
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="absolute right-0 top-12 z-50 w-[min(92vw,340px)] rounded-lg border border-white/10 bg-surface/95 p-3 shadow-command backdrop-blur-xl"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            role="menu"
            aria-label="Profile menu"
          >
            <div className="flex items-center gap-3 border-b border-white/10 pb-3">
              <Avatar name={account.fullName} role={account.role} />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-foreground">{account.fullName}</p>
                <div className="mt-1 flex items-center gap-2">
                  <RoleBadge role={account.role} />
                  <span className="text-xs text-muted-foreground">{getRoleLabel(account.role)}</span>
                </div>
              </div>
            </div>

            <div className="mt-3 space-y-1">
              {commonDropdownItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href ?? paths.dashboard}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/[0.06] hover:text-foreground"
                  role="menuitem"
                >
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                  {item.label}
                </Link>
              ))}
            </div>

            {roleMenuItems.length ? (
              <>
                <div className="my-3 h-px bg-white/10" />
                <p className="px-3 text-[0.68rem] uppercase tracking-[0.08em] text-muted-foreground">Role tools</p>
                <div className="mt-2 space-y-1">
                  {roleMenuItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href ?? paths.dashboard}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/[0.06] hover:text-foreground"
                      role="menuitem"
                    >
                      <item.icon className="h-4 w-4" aria-hidden="true" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </>
            ) : null}

            <div className="my-3 h-px bg-white/10" />
            <button
              type="button"
              onClick={() => {
                logout();
                setOpen(false);
                navigate(paths.landing);
              }}
              className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-rose-100 transition hover:bg-rose-300/10"
              role="menuitem"
            >
              <LogOut className="h-4 w-4" aria-hidden="true" />
              Logout
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
