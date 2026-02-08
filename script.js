const revealTargets = document.querySelectorAll("[data-reveal]");

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("is-visible");
				observer.unobserve(entry.target);
			}
		});
	},
	{ threshold: 0.2 }
);

revealTargets.forEach((target) => observer.observe(target));

document.querySelectorAll('a[href^="#"]').forEach((link) => {
	link.addEventListener("click", (event) => {
		const targetId = link.getAttribute("href");
		if (!targetId || targetId === "#") {
			return;
		}

		const target = document.querySelector(targetId);
		if (!target) {
			return;
		}

		event.preventDefault();
		target.scrollIntoView({ behavior: "smooth", block: "start" });
	});
});
