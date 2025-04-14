export function formatPrice(price: number) {
  const rounded = Math.floor(price / 1000) * 1000;
  return rounded.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}
export const formatArea = (area: number): string =>
  new Intl.NumberFormat("en-US").format(area);
