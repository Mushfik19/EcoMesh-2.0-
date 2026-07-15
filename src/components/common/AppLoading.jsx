import { LoadingSkeleton } from "@/components/common/LoadingSkeleton";

export function AppLoading() {
  return (
    <div className="dark min-h-svh bg-background px-5 py-6 text-foreground lg:px-8">
      <div className="mb-6">
        <div className="h-3 w-36 rounded-full bg-white/[0.08]" />
        <div className="mt-4 h-9 w-72 max-w-full rounded-lg bg-white/[0.08]" />
      </div>
      <LoadingSkeleton />
    </div>
  );
}
