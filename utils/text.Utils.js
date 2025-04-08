export function formatTextForMobile(text) {
  const [platform, category, subcategoryWithParameters] = text.split(" - ");
  return `${platform} - ${category}\n${subcategoryWithParameters}`;
}

export function formatTextForDesktop(text) {
  const [platformAndCategory, subcategoryWithParameters] = text.split("\n");
  return `${platformAndCategory} - ${subcategoryWithParameters}`;
}