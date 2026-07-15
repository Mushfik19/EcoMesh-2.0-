import { useMemo, useState } from "react";
import type { MeshNode } from "@/types/ecosystem";

export function useNodeFilters(nodes: MeshNode[]) {
  const [status, setStatus] = useState("all");
  const [query, setQuery] = useState("");

  const filteredNodes = useMemo(() => {
    const search = query.trim().toLowerCase();

    return nodes.filter((node) => {
      const matchesStatus = status === "all" || node.status === status;
      const matchesQuery =
        search.length === 0 ||
        node.label.toLowerCase().includes(search) ||
        node.id.toLowerCase().includes(search) ||
        node.gatewayId.toLowerCase().includes(search);

      return matchesStatus && matchesQuery;
    });
  }, [nodes, query, status]);

  return {
    filteredNodes,
    query,
    setQuery,
    setStatus,
    status,
  };
}
