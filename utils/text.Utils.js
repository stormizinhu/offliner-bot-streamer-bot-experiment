export function formatTextForMobile(text) {
  return text.split(" - ").join("\n");
}

export function formatTextForDesktop(text) {
  return text.split("\n").join(" - ");
}