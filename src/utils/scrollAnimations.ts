export function setupAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;
        const delay =
          element.style.getPropertyValue("--animation-delay") || "0ms";

        if (entry.isIntersecting) {
          setTimeout(() => {
            element.classList.add("fade-in");
            element.classList.remove("fade-out");
          }, parseInt(delay));
        } else {
          element.classList.add("fade-out");
          element.classList.remove("fade-in");
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: "-10% 0px -10% 0px",
    },
  );

  document.querySelectorAll("[data-animate]").forEach((element) => {
    observer.observe(element);
  });
}
