export interface Order {
  id: string;
  date: string;
  items: number;
  totalCents: number;
  status: "Shipped" | "Delivered";
}

export const ORDER_HISTORY: Order[] = [
  { id: "PS-10023", date: "2026-11-10", items: 2, totalCents: 7079, status: "Shipped" },
  { id: "PS-10022", date: "2026-11-06", items: 3, totalCents: 5706, status: "Shipped" },
  { id: "PS-10021", date: "2026-11-02", items: 4, totalCents: 4333, status: "Delivered" },
  { id: "PS-10020", date: "2026-10-28", items: 1, totalCents: 2960, status: "Delivered" },
  { id: "PS-10019", date: "2026-10-23", items: 2, totalCents: 1587, status: "Delivered" },
  { id: "PS-10018", date: "2026-10-20", items: 3, totalCents: 6714, status: "Delivered" },
  { id: "PS-10017", date: "2026-10-14", items: 4, totalCents: 5341, status: "Delivered" },
  { id: "PS-10016", date: "2026-10-10", items: 1, totalCents: 3968, status: "Delivered" },
  { id: "PS-10015", date: "2026-10-06", items: 2, totalCents: 2595, status: "Delivered" },
  { id: "PS-10014", date: "2026-10-01", items: 3, totalCents: 7722, status: "Delivered" },
  { id: "PS-10013", date: "2026-09-26", items: 4, totalCents: 6349, status: "Delivered" },
  { id: "PS-10012", date: "2026-09-23", items: 1, totalCents: 4976, status: "Delivered" },
  { id: "PS-10011", date: "2026-09-17", items: 2, totalCents: 3603, status: "Delivered" },
  { id: "PS-10010", date: "2026-09-13", items: 3, totalCents: 2230, status: "Delivered" },
  { id: "PS-10009", date: "2026-09-09", items: 4, totalCents: 7357, status: "Delivered" },
  { id: "PS-10008", date: "2026-09-04", items: 1, totalCents: 5984, status: "Delivered" },
  { id: "PS-10007", date: "2026-08-30", items: 2, totalCents: 4611, status: "Delivered" },
  { id: "PS-10006", date: "2026-08-27", items: 3, totalCents: 3238, status: "Delivered" },
  { id: "PS-10005", date: "2026-08-21", items: 4, totalCents: 1865, status: "Delivered" },
  { id: "PS-10004", date: "2026-08-17", items: 1, totalCents: 6992, status: "Delivered" },
  { id: "PS-10003", date: "2026-08-13", items: 2, totalCents: 5619, status: "Delivered" },
  { id: "PS-10002", date: "2026-08-08", items: 3, totalCents: 4246, status: "Delivered" },
  { id: "PS-10001", date: "2026-08-03", items: 4, totalCents: 2873, status: "Delivered" },
];
