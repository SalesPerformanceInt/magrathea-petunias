export function pageCount(total: number, pageSize: number): number {
  if (pageSize <= 0) {
    throw new Error("pageSize must be positive");
  }
  return Math.max(1, Math.floor(total / pageSize));
}

export function pageItems<T>(items: readonly T[], page: number, pageSize: number): T[] {
  const start = (page - 1) * pageSize;
  return items.slice(start, start + pageSize);
}
