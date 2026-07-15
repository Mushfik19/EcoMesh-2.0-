export function MapFilterBar({ filters, activeFilter, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const active = filter.key === activeFilter;
        return (
          <button
            key={filter.key}
            type="button"
            onClick={() => onChange(filter.key)}
            className={[
              "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition",
              active
                ? "border-primary bg-primary text-primary-foreground shadow-control"
                : "border-white/10 bg-white/[0.04] text-muted-foreground hover:border-primary/40 hover:text-foreground",
            ].join(" ")}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
