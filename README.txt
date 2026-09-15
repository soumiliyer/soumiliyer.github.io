Deep-link fix for soumiliyer.engineer

Replace ONLY these three files at the root of the soumiliyer.github.io repository:
- index.html
- script.js
- styles.css

Do not replace the docs/ folder. This patch intentionally contains no PDFs, so your portfolio-safe redacted reports remain untouched.

Resume links now use URLs such as:
https://soumiliyer.engineer/?view=experience-energy-storage
https://soumiliyer.engineer/?view=project-wind-tunnel

The website reads the ?view= parameter and scrolls to the requested experience or opens the requested project.
