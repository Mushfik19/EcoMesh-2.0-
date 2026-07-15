import { SkeletonBlock } from "@/components/common/LoadingSkeleton";

export function WeatherSkeleton() {
  return (
    <div className="dark min-h-svh bg-background px-5 py-6 text-foreground lg:px-8">
      <SkeletonBlock className="h-4 w-48" />
      <SkeletonBlock className="mt-4 h-10 w-80 max-w-full" />
      <div className="mt-8 grid grid-cols-12 gap-5">
        <div className="col-span-12 xl:col-span-5"><SkeletonBlock className="h-96" /></div>
        <div className="col-span-12 xl:col-span-7"><SkeletonBlock className="h-96" /></div>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="col-span-12 md:col-span-6 xl:col-span-4">
            <SkeletonBlock className="h-64" />
          </div>
        ))}
      </div>
    </div>
  );
}
