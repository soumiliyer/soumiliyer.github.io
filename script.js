const projects = [
  {
    id: 'solder-doe',
    title: 'Lead-Free Solder Joint Process Optimization',
    course: 'IE 533 · Industrial Applications of Statistics',
    categories: ['manufacturing', 'data'],
    label: 'Process Engineering / DOE',
    summary: 'Designed a randomized 2³ factorial experiment in Minitab to quantify how soldering temperature, paste volume, and cooling rate affect SAC305 joint shear strength.',
    tags: ['DOE', 'Minitab', 'ANOVA/GLM', 'Process Optimization', 'Quality'],
    metrics: [['16', 'simulated runs'], ['0.83', 'statistical power'], ['p = 0.006', 'overall model'], ['3', 'significant main effects']],
    methods: [
      'Created a randomized 2³ full-factorial design with two replicates per treatment combination while holding nuisance factors constant.',
      'Performed power analysis at α = 0.05 using a 5 N/mm² minimum detectable effect and 3 N/mm² within-cell standard deviation.',
      'Fit a general linear model / ANOVA and used Pareto, main-effects, interaction, and four-in-one residual plots to test assumptions and quantify factor effects.',
      'Recommended 260 °C, 1.0 mg solder paste, and 4 °C/s cooling from the simulated process model.'
    ],
    takeaway: 'A manufacturing-quality project that connects experimental design, statistics, process windows, and data-backed engineering decisions. The study used simulated data, which is explicitly documented in the report.',
    report: 'docs/IE533_Solder_DOE_Report.pdf'
  },
  {
    id: 'senior-design',
    title: 'Assisted Eating Utensil',
    course: 'Mechanical Engineering Senior Design',
    categories: ['design', 'manufacturing'],
    label: 'Product Design / Prototyping',
    summary: 'Developed a low-cost passive stabilization utensil for users affected by hand tremors, iterating from user needs through CAD, prototyping, and validation.',
    tags: ['Product Design', 'CAD', '3D Printing', 'DFM', 'Validation'],
    metrics: [['< $25', 'prototype cost'], ['2 m', 'drop validation'], ['Passive', 'stabilization'], ['User-led', 'design iteration']],
    methods: [
      'Translated user needs into design requirements and evaluated concepts for stabilization, usability, manufacturability, and cost.',
      'Implemented a bearing-based passive mechanism that allowed the utensil head to self-level while preserving normal scooping motion.',
      'Iterated CAD and 3D-printed prototypes, adding grip geometry, retention straps, and a detachable stainless-steel spoon head.',
      'Validated durability with 2 m drop tests, dishwasher cycles, and insertion/removal-force checks.'
    ],
    takeaway: 'This project demonstrates end-to-end product development: requirements, mechanism design, CAD, prototyping, design iteration, validation, and cost control.',
    report: null
  },
  {
    id: 'robot-control',
    title: 'Autonomous Robot Control & Line Following',
    course: 'ME 375 · Measurement & Control Systems II',
    categories: ['controls', 'data'],
    label: 'Controls / Robotics',
    summary: 'Built and tuned a closed-loop differential-drive robot that followed an unknown track for two laps and autonomously parked 30 cm from a wall.',
    tags: ['MATLAB', 'Simulink', 'PID/PI', 'Root Locus', 'Sensors', 'System ID'],
    metrics: [['2', 'autonomous laps'], ['30 cm', 'parking target'], ['< 0.5 cm', 'IR error'], ['~5.13 in/s', '100% PWM speed']],
    methods: [
      'Characterized motor/gearbox/encoder dynamics and fitted first-order models from measured pulse-response data.',
      'Calibrated infrared and line-following sensors and converted encoder counts into distance/speed feedback.',
      'Implemented finite-state logic for rest, racing, line recovery, and parking with nested PID/PI control loops.',
      'Personally developed the motor speed-difference controller using root-locus techniques in MATLAB.'
    ],
    takeaway: 'A complete controls workflow from hardware characterization and sensor calibration to system identification, controller design, simulation, integration, and testing.',
    report: 'docs/ME375_Autonomous_Robot_Report.pdf'
  },
  {
    id: 'wind-tunnel',
    title: 'Race-Car Spoiler Wind-Tunnel Study',
    course: 'ME 30801 · Fluid Mechanics Laboratory',
    categories: ['thermal', 'design', 'data'],
    label: 'Aerodynamics / Experimental Testing',
    summary: 'Designed and tested a 3D-printed rear spoiler to quantify lift/drag behavior and identify the maximum-downforce / flow-separation region.',
    tags: ['SolidWorks', 'Wind Tunnel', 'LabVIEW', 'MATLAB', 'Uncertainty'],
    metrics: [['0–60°', 'angle of attack'], ['30.88 m/s', 'test speed'], ['3', 'trials / angle'], ['Cₗ 0.65', 'peak at 40°']],
    methods: [
      'Modeled the spoiler in SolidWorks, FDM printed it, and mounted it on a simplified vehicle model.',
      'Calibrated the lift/drag measurement system and tested 0–60° angle of attack in 10° increments at a fixed 40 Hz tunnel setting.',
      'Processed 15-second datasets in MATLAB, averaged force data, calculated standard deviations, and converted forces to aerodynamic coefficients.',
      'Identified peak downforce near 40° before lift coefficient fell while drag continued to increase.'
    ],
    takeaway: 'A practical test-and-validation project combining CAD, additive manufacturing, instrumentation, calibration, data reduction, uncertainty, and fluid-mechanics interpretation.',
    report: 'docs/ME30801_Wind_Tunnel_Spoiler_Report.pdf'
  },
  {
    id: 'blanket-insulation',
    title: 'Blanket Insulation Thermal Comparison',
    course: 'ME 315 · Heat & Mass Transfer',
    categories: ['thermal', 'data'],
    label: 'Heat Transfer / Experimental Modeling',
    summary: 'Compared polyester, wool, and down using a heated epoxy skin analog, thermocouples, LabVIEW, and transient lumped-capacitance analysis.',
    tags: ['Heat Transfer', 'Thermocouples', 'LabVIEW', 'Transient Analysis'],
    metrics: [['3', 'materials'], ['37 °C', 'initial plate'], ['~5 °C', 'cold environment'], ['0.0152 W/m·K', 'measured wool k']],
    methods: [
      'Used a 6.35 cm × 6.35 cm × 0.381 cm epoxy plate as a repeatable skin analog and held test setup constant across materials.',
      'Logged temperature every second for one-hour cooling tests and monitored the environment with infrared measurements.',
      'Verified the lumped-capacitance assumption (Bi ≈ 0.03), linearized the transient response, and solved for time constants, heat-transfer coefficients, and conductivity.',
      'Compared experimental properties with references and documented model limitations and uncertainty.'
    ],
    takeaway: 'Shows thermal test design, instrumentation, transient modeling, property estimation, validation against references, and thoughtful treatment of experimental error.',
    report: 'docs/ME315_Blanket_Insulation_Report.pdf'
  },
  {
    id: 'audio-equalizer',
    title: 'Four-Stage Audio Equalizer',
    course: 'ECE 20007 · Electrical Engineering Fundamentals Lab',
    categories: ['controls', 'design'],
    label: 'Electrical / Hardware Integration',
    summary: 'Designed, wired, debugged, and validated a four-stage analog equalizer with passive filters, adjustable op-amp gain, signal recombination, and speaker output.',
    tags: ['LTspice', 'Oscilloscope', 'Op-Amps', 'Filters', 'Breadboarding'],
    metrics: [['3.2 kHz', 'high-pass target'], ['320 Hz', 'low-pass target'], ['3.30%', 'Vout error'], ['605 mW', 'output power']],
    methods: [
      'Split the input into treble, mid, and bass paths using RC high-pass, RLC band-pass, and RC low-pass filters.',
      'Used potentiometer-controlled inverting amplifiers for independent gain adjustment and a summing stage to recombine the three bands.',
      'Verified frequency response using oscilloscope/FRA measurements and compared measured -3 dB behavior against design targets.',
      'Drove a speaker through an LM386 power stage with ~20× gain and traced discrepancies to component tolerance and wiring resistance.'
    ],
    takeaway: 'Demonstrates electrical schematic interpretation, circuit design, breadboarding, test equipment, debugging, measurement, and hardware integration.',
    report: 'docs/ECE20007_Audio_Equalizer_Report.pdf'
  },
  {
    id: 'vip-rover',
    title: 'Autonomous Rover — Drone Video VIP',
    course: 'VIP 27920 · Vertically Integrated Projects',
    categories: ['controls', 'data'],
    label: 'Autonomy / Machine Learning',
    summary: 'Worked on the rover hardware subteam of an autonomous filming system, contributing to rover integration and machine-learning / visual-detection development.',
    tags: ['Python', 'Computer Vision', 'CIFAR-10', 'IR', 'LiDAR'],
    metrics: [['78.74%', 'CIFAR-10 accuracy'], ['10', 'epochs'], ['Rover', 'hardware focus'], ['IR + LiDAR', 'sensing concepts']],
    methods: [
      'Supported rover functionality and hardware/software integration for autonomous motion through a miniature-city environment.',
      'Worked with the team on CIFAR-10 image-classification code in Google Colab and documented planned ResNet 18/34/50 follow-on experiments.',
      'Built exposure to visual/object detection, infrared sensing, LiDAR, and autonomous rover/drone coordination.'
    ],
    takeaway: 'An early multidisciplinary autonomy project connecting hardware, software integration, sensing, and machine-learning concepts.',
    report: null
  },
  {
    id: 'natural-catalysts',
    title: 'NaturalCatalysts Enzyme Kinetics Analysis',
    course: 'ENGR 132 · Transforming Ideas to Innovation II',
    categories: ['data'],
    label: 'MATLAB / Data Modeling',
    summary: 'Built a MATLAB workflow to analyze 100 kinetic-enzyme datasets, automate reaction-rate extraction, estimate V₀/Vmax/Km, and communicate defensible client conclusions.',
    tags: ['MATLAB', 'Algorithm Design', 'Data Analysis', 'Error Analysis'],
    metrics: [['100', 'datasets'], ['5', 'enzyme families'], ['20%', 'slope threshold'], ['~1.1%', 'Km reference error']],
    methods: [
      'Automated identification of each reaction’s initial linear region using 10-point slope windows and a 20% change threshold.',
      'Estimated V₀ from initial slopes and Vmax/Km using Lineweaver–Burk linearization with polyfit/polyval.',
      'Validated the original method against reference data and scaled the workflow across five enzymes and duplicate tests.',
      'Converted technical results into graphics, error analyses, and an ethical client-facing recommendation.'
    ],
    takeaway: 'An early example of translating noisy experimental data into a repeatable engineering analysis workflow and clear technical communication.',
    report: 'docs/ENGR132_NaturalCatalysts_Technical_Brief.pdf'
  },
  {
    id: 'little-blazer',
    title: 'Little Blazer Engine CAD Assembly',
    course: 'CGT 163 · Graphical Communication',
    categories: ['design'],
    label: 'CAD / Assembly Design',
    summary: 'Recreated a multi-component engine from dimensioned drawings in Siemens NX and assembled the complete digital model using geometric constraints.',
    tags: ['Siemens NX', 'Part Modeling', 'Assembly Constraints', 'Engineering Drawings'],
    metrics: [['Multi-week', 'final project'], ['NX', 'parametric CAD'], ['Full', 'digital assembly'], ['Fit + alignment', 'verification']],
    methods: [
      'Interpreted dimensioned 3D drawings and recreated individual components with parametric modeling features.',
      'Applied assembly constraints to preserve intended mechanical relationships and interfaces.',
      'Inspected fit, alignment, and part relationships in the final digital engine assembly.'
    ],
    takeaway: 'Foundational CAD work that strengthened spatial reasoning, drawing interpretation, parametric part modeling, and assembly organization.',
    report: null
  },
  {
    id: 'campus-safety',
    title: 'Campus Safety Intersection Redesign',
    course: 'ENGR 131 · Transforming Ideas to Innovation I',
    categories: ['design', 'data'],
    label: 'Human-Centered Design / Decision Analysis',
    summary: 'Redesigned Purdue’s Schleman-Forney intersection using stakeholder research, prototype testing, traffic simulations, and a weighted decision matrix.',
    tags: ['Design Process', 'Stakeholder Research', 'WDM', 'CAD', 'Prototyping'],
    metrics: [['30+', 'survey respondents'], ['66.7%', 'reported hit / near-hit'], ['90%', 'perceived safety'], ['116.7', 'WDM score']],
    methods: [
      'Interviewed and surveyed users to convert safety, affordability, maintenance, and convenience needs into measurable design criteria.',
      'Compared three concepts with Minecraft traffic simulations, prototype testing, and user feedback.',
      'Used a weighted decision matrix to select a separated plastic-barrier lane concept and iterated material, spacing, visibility, and cost.'
    ],
    takeaway: 'Shows a full human-centered design cycle: problem scoping, stakeholder research, criteria definition, prototyping, test feedback, weighted decisions, and design iteration.',
    report: 'docs/ENGR131_Campus_Safety_Design_Report.pdf'
  }
];

const projectGrid = document.getElementById('project-grid');
const filters = document.querySelectorAll('.filter-button');
const modal = document.getElementById('project-modal');
const closeModal = modal.querySelector('.modal-close');

function artColor(index) {
  const palettes = ['#d9cfb8','#c9d3ce','#d5cbc8','#c8d0db','#ddd6c6','#cfd4c4','#d1c8d5','#d8d1c1','#c9d1d7','#d6cabf'];
  return palettes[index % palettes.length];
}

function renderProjects(filter = 'all') {
  projectGrid.innerHTML = '';
  projects.forEach((project, index) => {
    const visible = filter === 'all' || project.categories.includes(filter);
    const card = document.createElement('article');
    card.className = 'project-card reveal';
    card.hidden = !visible;
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Open details for ${project.title}`);
    card.dataset.projectId = project.id;
    card.innerHTML = `
      <div class="project-art" style="--art-bg:${artColor(index)}"><span class="art-label">${project.label}</span></div>
      <div class="project-card-body">
        <h3>${project.title}</h3>
        <p class="project-course">${project.course}</p>
        <p class="project-summary">${project.summary}</p>
        <div class="tag-row">${project.tags.slice(0,4).map(tag => `<span>${tag}</span>`).join('')}</div>
        <div class="card-footer"><span>View details</span><span>↗</span></div>
      </div>`;
    card.addEventListener('click', () => openProject(project));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openProject(project); }
    });
    projectGrid.appendChild(card);
  });
  requestAnimationFrame(initReveals);
}

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    renderProjects(button.dataset.filter);
  });
});

function openProject(project) {
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-kicker').textContent = project.course;
  document.getElementById('modal-summary').textContent = project.summary;
  document.getElementById('modal-art').style.background = `linear-gradient(135deg, ${artColor(projects.indexOf(project))}, var(--surface-2))`;
  document.getElementById('modal-metrics').innerHTML = project.metrics.map(([value,label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join('');
  document.getElementById('modal-methods').innerHTML = project.methods.map(item => `<li>${item}</li>`).join('');
  document.getElementById('modal-takeaway').textContent = project.takeaway;
  document.getElementById('modal-tags').innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');
  const actions = document.getElementById('modal-actions');
  actions.innerHTML = project.report
    ? `<a class="button button-primary" href="${project.report}" target="_blank" rel="noopener">View project report ↗</a><button class="button button-secondary" type="button" data-close-modal>Close</button>`
    : `<button class="button button-primary" type="button" data-close-modal>Close project</button>`;
  actions.querySelectorAll('[data-close-modal]').forEach(btn => btn.addEventListener('click', () => modal.close()));
  modal.showModal();
  document.body.classList.add('modal-open');
}

closeModal.addEventListener('click', () => modal.close());
modal.addEventListener('click', event => {
  const rect = modal.getBoundingClientRect();
  const inDialog = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
  if (!inDialog) modal.close();
});
modal.addEventListener('close', () => document.body.classList.remove('modal-open'));

const themeButton = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme) document.documentElement.dataset.theme = savedTheme;
themeButton.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('portfolio-theme', next);
});

const menuButton = document.querySelector('.menu-toggle');
const nav = document.getElementById('site-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

let revealObserver;
function initReveals() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
  }
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
}

document.getElementById('year').textContent = new Date().getFullYear();
renderProjects();
initReveals();
