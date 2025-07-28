// mathflow-init.js
// Load math (KaTeX) and diagrams (Mermaid) after page load
document.addEventListener("DOMContentLoaded", function () {
  // === KaTeX Initialization ===
  if (typeof renderMathInElement === "function") {
    renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "\\[", right: "\\]", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false }
      ],
      throwOnError: false
    });
    console.log("[MathFlow] KaTeX initialized.");
  } else {
    console.warn("[MathFlow] KaTeX not found. Skipping math rendering.");
  }

  // === Mermaid Initialization ===
  if (typeof mermaid !== "undefined") {
    try {
      mermaid.initialize({ startOnLoad: false });
      const diagrams = document.querySelectorAll(".language-mermaid, pre code.language-mermaid");

      diagrams.forEach((el, i) => {
        const code = el.textContent;
        const container = document.createElement("div");
        container.className = "mermaid";
        container.innerHTML = code;
        el.parentNode.replaceWith(container);
      });

      mermaid.init(undefined, ".mermaid");
      console.log("[MathFlow] Mermaid diagrams initialized.");
    } catch (e) {
      console.error("[MathFlow] Mermaid initialization error:", e);
    }
  } else {
    console.warn("[MathFlow] Mermaid not found. Skipping diagram rendering.");
  }
});

