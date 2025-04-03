export function formatTextForMobile(text) {
  return text.split(" - ").join("\n"); // Substitui " - " por uma quebra de linha
}

export function formatTextForDesktop(text) {
  return text.split("\n").join(" - "); // Substitui quebras de linha por " - "
}