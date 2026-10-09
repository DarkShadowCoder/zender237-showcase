export function withdrawalFee(amount: number) {
  if (!Number.isFinite(amount) || amount <= 0) return null;
  const rate = amount <= 50000 ? 0.05 : 0.03;
  return { rate, fee: amount * rate };
}
export const formatFcfa = (value: number) => new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 2 }).format(value);
