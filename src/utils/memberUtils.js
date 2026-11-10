export function getBMI(weight, height) {
  const numericWeight = Number(weight);
  const heightInMeters = Number(height) / 100;

  if (!numericWeight || !heightInMeters) return null;

  return (numericWeight / (heightInMeters * heightInMeters)).toFixed(1);
}

export function formatDate(value) {
  if (!value) return "—";

  return new Date(`${value}T00:00:00`).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}