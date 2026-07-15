import { AnimatePresence, motion } from "framer-motion";
import { Menu, PanelLeftClose, PanelLeftOpen, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { PageTransition } from "@/components/common/PageTransition";
import { paths } from "@/routes/paths";
import { primaryNavigation, secondaryNavigation } from "@/routes/navigation";

function NavigationLink({ item, collapsed = false, onNavigate }) {
  const Icon = item.icon;

  return (
    <motion.div whileHover={{ x: 3 }} whileTap={{ scale: 0.985 }} transition={{ duration: 0.16 }}>
      <NavLink
        to={item.path}
        title={collapsed ? item.label : undefined}
        onClick={onNavigate}
        className={({ isActive }) =>
          [
            "flex min-h-10 items-center rounded-md px-3 py-2 text-sm font-semibold transition",
            collapsed ? "justify-center gap-0" : "gap-3",
            isActive
              ? "bg-primary text-primary-foreground shadow-control"
              : "text-muted-foreground hover:bg-muted hover:text-foreground",
          ].join(" ")
        }
      >
        <Icon size={18} aria-hidden="true" />
        {!collapsed ? <span className="truncate">{item.label}</span> : null}
      </NavLink>
    </motion.div>
  );
}

function NavigationGroup({ collapsed = false, onNavigate }) {
  return (
    <>
      <nav className="space-y-1" aria-label="Primary navigation">
        {primaryNavigation.map((item) => (
          <NavigationLink key={item.path} item={item} collapsed={collapsed} onNavigate={onNavigate} />
        ))}
      </nav>

      <div className="my-5 h-px bg-border" />

      <nav className="space-y-1" aria-label="Platform navigation">
        {secondaryNavigation.map((item) => (
          <NavigationLink key={`${item.label}-${item.path}`} item={item} collapsed={collapsed} onNavigate={onNavigate} />
        ))}
      </nav>
    </>
  );
}

export function AppLayout() {
  const location = useLocation();
  const isLandingPage = location.pathname === paths.landing;
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sidebarWidth = collapsed ? 88 : 280;

  useEffect(() => {
    if (!mobileOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  if (isLandingPage) {
    return (
      <div className="min-h-svh bg-background text-foreground">
        <main id="main-content" tabIndex={-1}>
          <AnimatePresence mode="wait">
            <PageTransition key={location.pathname}>
              <Outlet />
            </PageTransition>
          </AnimatePresence>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-svh bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      <div
        className="grid min-h-svh"
        style={{ gridTemplateColumns: `minmax(0, 1fr)` }}
      >
        <motion.aside
          className="fixed inset-y-0 left-0 z-30 hidden border-r border-border bg-surface/86 px-4 py-5 backdrop-blur lg:block"
          style={{ width: sidebarWidth }}
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0, width: sidebarWidth }}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-8 flex items-start justify-between gap-3">
            <div className={collapsed ? "sr-only" : ""}>
              <p className="type-mono text-xs uppercase text-muted-foreground">EcoMesh 2.0</p>
              <h1 className="type-title mt-2 text-xl">Coastal Mesh Control</h1>
            </div>
            {collapsed ? (
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-primary-foreground shadow-glow">
                EM
              </div>
            ) : null}
            <button
              type="button"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-muted-foreground transition hover:text-foreground"
              onClick={() => setCollapsed((value) => !value)}
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              aria-pressed={collapsed}
            >
              {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
            </button>
          </div>

          <NavigationGroup collapsed={collapsed} />
        </motion.aside>

        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-surface/82 px-4 py-3 backdrop-blur-xl lg:hidden">
          <div>
            <p className="type-mono text-[0.68rem] uppercase text-primary">EcoMesh 2.0</p>
            <p className="type-title text-base">Coastal Mesh Control</p>
          </div>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-muted-foreground"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <Menu size={20} />
          </button>
        </header>

        <AnimatePresence>
          {mobileOpen ? (
            <>
              <motion.div
                className="fixed inset-0 z-40 bg-black/55 backdrop-blur-sm lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileOpen(false)}
              />
              <motion.aside
                id="mobile-navigation"
                className="fixed inset-y-0 left-0 z-50 w-[min(86vw,340px)] overflow-y-auto border-r border-border bg-surface px-4 py-5 shadow-command lg:hidden"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-8 flex items-start justify-between gap-3">
                  <div>
                    <p className="type-mono text-xs uppercase text-muted-foreground">EcoMesh 2.0</p>
                    <h2 className="type-title mt-2 text-xl">Navigation</h2>
                  </div>
                  <button
                    type="button"
                    className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-muted-foreground"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close navigation"
                  >
                    <X size={18} />
                  </button>
                </div>
                <NavigationGroup onNavigate={() => setMobileOpen(false)} />
              </motion.aside>
            </>
          ) : null}
        </AnimatePresence>

        <main
          id="main-content"
          className="min-w-0"
          style={{ "--sidebar-offset": `${sidebarWidth}px` }}
          tabIndex={-1}
        >
          <div className="lg:ml-[var(--sidebar-offset)] lg:transition-[margin] lg:duration-300">
            <AnimatePresence mode="wait">
              <PageTransition key={location.pathname}>
                <Outlet />
              </PageTransition>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
