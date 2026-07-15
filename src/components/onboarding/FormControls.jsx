export function FieldGroup({ label, children, hint }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-foreground">{label}</span>
      {children}
      {hint ? <span className="mt-2 block text-xs text-muted-foreground">{hint}</span> : null}
    </label>
  );
}

export function TextInput(props) {
  return (
    <input
      {...props}
      className={`min-h-11 w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 ${props.className ?? ""}`}
    />
  );
}

export function SelectInput({ children, ...props }) {
  return (
    <select
      {...props}
      className={`min-h-11 w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${props.className ?? ""}`}
    >
      {children}
    </select>
  );
}

export function FormActions({ children }) {
  return <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">{children}</div>;
}
