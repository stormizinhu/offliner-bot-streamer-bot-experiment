function updateFooterYear() {
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  if (yearSpan) {
      yearSpan.textContent = `OfflinerBot - by Stormizinhu -  ${currentYear}`;
  }
}

updateFooterYear();
