
/* =========================
   SYCRIS AI — MAIN SCRIPT
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  // Keep the footer copyright year current.
  const footer = document.querySelector("footer");

  if (footer) {
    const copyright = Array.from(
      footer.querySelectorAll("p")
    ).find((paragraph) =>
      paragraph.textContent.includes("©")
    );

    if (copyright) {
      copyright.textContent =
        `© ${new Date().getFullYear()} Sycris AI`;
    }
  }

  // Development confirmation.
  console.log("Sycris AI website loaded successfully.");
});
