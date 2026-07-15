export function PagePlaceholder({ eyebrow, title, description }) {
  return (
    <section className="min-h-svh px-5 py-6 sm:px-8 lg:px-10">
      <div className="mx-auto flex min-h-[calc(100svh-3rem)] max-w-7xl flex-col justify-center">
        <p className="type-mono text-xs uppercase text-primary">{eyebrow}</p>
        <h2 className="type-display mt-3 max-w-4xl text-4xl sm:text-5xl">{title}</h2>
        <p className="type-body mt-5 max-w-2xl text-muted-foreground">{description}</p>
      </div>
    </section>
  );
}
