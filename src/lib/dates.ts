const display = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
});

function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6;
}

export function todayIso(now: Date = new Date()): string {
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function formatOrderDate(isoDate: string): string {
  return display.format(new Date(isoDate));
}

export function estimateDelivery(orderDate: string, businessDays = 3): string {
  const date = new Date(orderDate);
  let added = 0;
  while (added < businessDays) {
    date.setDate(date.getDate() + 1);
    if (!isWeekend(date)) {
      added++;
    }
  }
  return display.format(date);
}
