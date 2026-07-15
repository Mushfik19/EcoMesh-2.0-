import { createElement, lazy, Suspense } from "react";
import { AppLoading } from "@/components/common/AppLoading";

export function lazyElement(loader, exportName) {
  const Page = lazy(() => loader().then((module) => ({ default: module[exportName] })));
  return createElement(Suspense, { fallback: createElement(AppLoading) }, createElement(Page));
}
