import { Link } from "react-router-dom";
import { paths } from "@/routes/paths";

export function NotFoundPage() {
  return (
    <section className="grid min-h-svh place-items-center px-5 py-10">
      <div className="max-w-xl text-center">
        <p className="type-mono text-sm uppercase text-primary">404</p>
        <h1 className="type-display mt-3 text-4xl sm:text-5xl">Route not found</h1>
        <p className="type-body mt-4 text-muted-foreground">
          This mission panel does not exist in the EcoMesh control surface.
        </p>
        <Link className="btn btn-primary mt-7" to={paths.dashboard}>
          Return to Dashboard
        </Link>
      </div>
    </section>
  );
}
