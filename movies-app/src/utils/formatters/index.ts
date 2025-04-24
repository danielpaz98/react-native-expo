export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  const hStr = hours > 0 ? `${hours}h` : "";
  const mStr = mins > 0 ? `${mins}m` : "";

  return [hStr, mStr].filter(Boolean).join(" ");
}

export const formatPrice = (value: number): string => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
};
