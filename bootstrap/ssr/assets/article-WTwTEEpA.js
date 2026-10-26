function formatArticleDate(value, withTime = false) {
  if (!value) return "-";
  return new Date(value).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    ...withTime ? { hour: "2-digit", minute: "2-digit" } : {}
  });
}
function paginationLabel(label) {
  if (label.includes("Previous") || label.includes("&laquo;")) return "‹ Précédent";
  if (label.includes("Next") || label.includes("&raquo;")) return "Suivant ›";
  return label;
}
export {
  formatArticleDate,
  paginationLabel
};
