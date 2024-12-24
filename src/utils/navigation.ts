export function setupNavigation() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const currentId = entry.target.id;
        const currentLink = Array.from(navLinks).find(
          (link) => link.getAttribute("href") === `#${currentId}`,
        );

        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove(
              "text-primary-100",
              "dark:text-primary-100",
              "bg-gray-100",
              "dark:bg-gray-800",
            );
          });

          currentLink?.classList.add(
            "text-primary-100",
            "dark:text-primary-100",
            "bg-gray-100",
            "dark:bg-gray-800",
          );
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: "-20% 0px -20% 0px",
    },
  );

  sections.forEach((section) => observer.observe(section));
}
