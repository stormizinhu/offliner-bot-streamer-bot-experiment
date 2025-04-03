export function applyResponsiveFormatting(list, formatMobile, formatDesktop) {
  const mediaQuery = window.matchMedia("(orientation: portrait) and (hover: none)");
  mediaQuery.addEventListener("change", () => {
      list.querySelectorAll(".item span").forEach(span => {
          span.textContent = mediaQuery.matches 
              ? formatMobile(span.textContent) 
              : formatDesktop(span.textContent);
      });
  });

  // Executa a lógica inicial no carregamento
  list.querySelectorAll(".item span").forEach(span => {
      span.textContent = mediaQuery.matches 
          ? formatMobile(span.textContent) 
          : formatDesktop(span.textContent);
  });
}