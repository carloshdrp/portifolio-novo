export function setupNavigation() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const sectionId = entry.target.id;
      updateActiveLink(sectionId, navLinks);
    });
  };

  const updateActiveLink = (sectionId: string, links: NodeListOf<Element>) => {
    const activeClasses = [
      "bg-primary-100/10",
      "text-primary-100",
      "dark:text-primary-100",
    ];

    links.forEach((link) => {
      const href = link.getAttribute("href");
      const cleanHref = href?.split("#").pop();
      const isActive = cleanHref === sectionId;

      activeClasses.forEach((className) => {
        link.classList.toggle(className, isActive);
      });
    });
  };

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.3,
    rootMargin: "-20% 0px -20% 0px",
  });

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}
