function formatCurrency(value) {
  // Format the number with space as thousands separator
  const formattedNumber = value.toLocaleString('fr-FR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  // Manually add the "€" symbol without a space
  return `${formattedNumber}€`;
}


export { formatCurrency }