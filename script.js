const projects = [
  {
    "id": "solder-doe",
    "title": "Lead-Free Solder Joint Process Optimization",
    "course": "IE 533 · Industrial Applications of Statistics",
    "categories": [
      "manufacturing",
      "data"
    ],
    "label": "Process Engineering / DOE",
    "summary": "Designed a randomized 2³ factorial experiment in Minitab to quantify how soldering temperature, paste volume, and cooling rate affect SAC305 joint shear strength.",
    "tags": [
      "DOE",
      "Minitab",
      "ANOVA/GLM",
      "Process Optimization",
      "Quality"
    ],
    "metrics": [
      [
        "16",
        "simulated runs"
      ],
      [
        "0.83",
        "statistical power"
      ],
      [
        "p = 0.006",
        "overall model"
      ],
      [
        "3",
        "significant main effects"
      ]
    ],
    "details": [
      "I developed a statistical process-optimization study for SAC305 lead-free solder, an alloy consisting of 96.5% Sn, 3.0% Ag, and 0.5% Cu, to determine how reflow-process parameters influence solder-joint shear strength. I selected three controllable factors based on the physical soldering process: soldering temperature at 230°C and 260°C, solder-paste volume at 0.5 mg and 1.0 mg, and post-solder cooling rate at 1°C/s and 4°C/s. I used a fully crossed 2³ factorial design, creating 8 unique treatment combinations, and specified two replicates per combination for 16 total runs. Alloy, PCB/pad geometry, ambient conditions, equipment, and a 120°C preheat temperature were held constant, while the 16-run order was randomized in Minitab to prevent time-dependent nuisance effects from becoming confounded with any factor.",
      "Before analyzing the response, I performed a power analysis at α = 0.05, assuming a 5 N/mm² minimum detectable effect and a 3 N/mm² within-cell standard deviation; the two-replicate design produced approximately 0.83 statistical power. I then fit a general linear model/ANOVA. The overall model was significant at p = 0.006; all three main effects were significant while the interactions were not. The modeled effects were approximately +6.90 N/mm² for temperature, +5.459 N/mm² for cooling rate, and +3.364 N/mm² for paste volume, and the factorial structure produced VIF = 1.00, confirming orthogonality. I used Pareto charts, main-effects plots, interaction plots, and four-in-one residual diagnostics to check the model before recommending the modeled high-setting combination of 260°C, 1.0 mg, and 4°C/s. The project used simulated data, which I explicitly documented rather than presenting the study as a physically conducted soldering experiment."
    ],
    "takeaway": "This project connects experimental design, statistical validation, process windows, and data-backed manufacturing decisions while being explicit about the use of simulated data.",
    "report": "docs/IE533_Solder_DOE_Report.pdf",
    "media": [],
    "links": []
  },
  {
    "id": "senior-design",
    "title": "Assisted Eating Utensil",
    "course": "Mechanical Engineering Senior Design",
    "categories": [
      "design",
      "manufacturing"
    ],
    "label": "Product Design / Prototyping",
    "summary": "Developed a low-cost passive stabilization utensil for users affected by hand tremors, iterating from user needs through CAD, prototyping, and validation.",
    "tags": [
      "Product Design",
      "CAD",
      "3D Printing",
      "DFM",
      "Validation"
    ],
    "metrics": [
      [
        "< $25",
        "prototype cost"
      ],
      [
        "2 m",
        "drop validation"
      ],
      [
        "Passive",
        "stabilization"
      ],
      [
        "User-led",
        "design iteration"
      ]
    ],
    "details": [
      "My senior-design team developed a mechanically stabilized eating utensil for users whose hand tremors make conventional utensils difficult to control. We began by converting user needs—stability, comfort, ease of cleaning, manufacturability, and affordability—into engineering requirements and explored ways to reduce tremor-induced motion without relying on expensive motors or electronics. The final architecture used a bearing-based passive self-leveling mechanism, allowing the spoon head to rotate relative to the user’s hand so that transient hand motion could be damped while normal scooping behavior was retained.",
      "The design was iterated through CAD models and 3D-printed prototypes rather than treated as a single final concept. User feedback led to an enlarged ribbed grip for better control, a retention strap, and a detachable stainless-steel spoon head. We then validated the physical prototype through 2 m drop tests, repeated dishwasher exposure, and insertion/removal-force testing of the detachable interface to make sure the usability changes had not compromised durability. The resulting prototype remained functional while staying below a $25 target cost, providing a substantially lower-cost mechanical alternative to commercially available electronic stabilization products."
    ],
    "takeaway": "A full product-development cycle: user requirements, mechanism selection, CAD, rapid prototyping, iterative refinement, durability testing, usability validation, and cost control.",
    "report": "docs/Senior_Design_Assisted_Eating_Utensil_Report.pdf",
    "media": [
      {
        "type": "image",
        "src": "assets/projects/senior-design/cad-model.jpg",
        "alt": "CAD model of the final assisted eating utensil prototype",
        "caption": "CAD model of the final prototype",
        "fit": "contain"
      },
      {
        "type": "image",
        "src": "assets/projects/senior-design/final-prototype-diagram.png",
        "alt": "Annotated diagram of the final assisted eating utensil prototype",
        "caption": "Final prototype with wrist strap, finger strap, stabilization tab, and stainless-steel spoon",
        "fit": "contain"
      },
      {
        "type": "image",
        "src": "assets/projects/senior-design/project-poster.jpg",
        "alt": "Senior design project poster for the assisted eating utensil",
        "caption": "Senior design project poster",
        "fit": "contain"
      }
    ],
    "links": []
  },
  {
    "id": "robot-control",
    "title": "Autonomous Robot Control & Line Following",
    "course": "ME 375 · Measurement & Control Systems II",
    "categories": [
      "controls",
      "data"
    ],
    "label": "Controls / Robotics",
    "summary": "Built and tuned a closed-loop differential-drive robot that followed an unknown track for two laps and autonomously parked 30 cm from a wall.",
    "tags": [
      "MATLAB",
      "Simulink",
      "PID/PI",
      "Root Locus",
      "Sensors",
      "System ID"
    ],
    "metrics": [
      [
        "2",
        "autonomous laps"
      ],
      [
        "30 cm",
        "parking target"
      ],
      [
        "< 0.5 cm",
        "IR error"
      ],
      [
        "~5.13 in/s",
        "100% PWM speed"
      ]
    ],
    "details": [
      "Our team developed a differential-drive robot that had to autonomously follow an unknown track for two laps, with a target completion time of 30 seconds, and then stop 30 cm from a wall. Rather than tuning a controller blindly, we first characterized the physical subsystems. The two motor/gearbox/encoder assemblies produced approximately 200 and 195 encoder counts per revolution, corresponding to roughly 38 counts per inch of robot travel. The infrared distance sensor was calibrated across its 10–80 cm range and showed less than 0.5 cm error, while the three-channel line-following sensor was mapped from voltage output to lateral track position.",
      "Motor pulse testing showed that the drive systems could be approximated as first-order plants with static gains of 14.375 and 14.95 and time constants of approximately 0.10 s and 0.08 s. At 100% PWM, measured wheel speed was approximately 5.13 in/s. We also identified static-friction nonlinearities and implemented friction compensation with deadbands of approximately 0.256296 and 0.304304 for the two motors.",
      "Those models were incorporated into MATLAB/Simulink with finite-state logic for rest, racing/line following, line recovery, and parking, along with encoder feedback, PID/PI control, sensor-based transitions, and friction compensation. My specific contribution was the motor speed-difference controller, which I designed using MATLAB root-locus techniques so lateral tracking error could be translated into the relative wheel-speed correction needed to steer the robot back toward the line. The project therefore went through the complete controls workflow of hardware characterization, sensor calibration, system identification, controller design, simulation, integration, and physical testing rather than beginning directly with trial-and-error gain tuning."
    ],
    "takeaway": "A complete controls workflow from measured hardware behavior to models, controller design, finite-state integration, and physical validation—with my direct contribution centered on root-locus wheel-speed correction.",
    "report": "docs/ME375_Autonomous_Robot_Report.pdf",
    "media": [
      {
        "type": "image",
        "src": "assets/projects/robot-control/robot-course-still.jpg",
        "alt": "Autonomous robot following the line course during testing",
        "caption": "Robot during autonomous line-following testing",
        "fit": "cover"
      },
      {
        "type": "video",
        "src": "assets/projects/robot-control/robot-course-demo.mp4",
        "caption": "Video: autonomous robot following the course"
      }
    ],
    "links": []
  },
  {
    "id": "wind-tunnel",
    "title": "Race-Car Spoiler Wind-Tunnel Study",
    "course": "ME 30801 · Fluid Mechanics Laboratory",
    "categories": [
      "thermal",
      "design",
      "data"
    ],
    "label": "Aerodynamics / Experimental Testing",
    "summary": "Designed and tested a 3D-printed rear spoiler to quantify lift/drag behavior and identify the maximum-downforce / flow-separation region.",
    "tags": [
      "SolidWorks",
      "Wind Tunnel",
      "LVDT",
      "MATLAB",
      "Uncertainty"
    ],
    "metrics": [
      [
        "0–60°",
        "angle of attack"
      ],
      [
        "30.880 m/s",
        "test speed"
      ],
      [
        "3",
        "trials / angle"
      ],
      [
        "Cₗ 0.65",
        "peak at 40°"
      ]
    ],
    "details": [
      "My team designed a simplified race-car model and adjustable rear spoiler in SolidWorks, fabricated the test article using FDM 3D printing, and evaluated the spoiler experimentally in Purdue’s low-speed open-circuit wind tunnel. The spoiler was tested from 0° to 60° angle of attack in 10° increments at a constant tunnel setting of 40 Hz, corresponding to approximately 30.880 m/s. Before taking aerodynamic data, the force-measurement system was calibrated so lift and drag could be derived from the LVDT/load-cell voltage response rather than interpreting raw voltages directly.",
      "For each angle, we collected three trials and processed 15-second datasets in MATLAB. I used averaging and standard deviations to reduce the raw measurements into representative lift/drag forces and uncertainty/error bars, then converted those forces into Cᴅ and Cₗ. The measured Cᴅ/Cₗ progression was 0.89/0.33 at 0°, 0.89/0.48 at 10°, 0.95/0.57 at 20°, 1.18/0.62 at 30°, 1.31/0.65 at 40°, 1.39/0.63 at 50°, and 1.42/0.57 at 60°.",
      "The important result was the trend rather than simply the maximum force value. Cₗ increased through 40°, where it peaked at approximately 0.65, then declined while Cᴅ continued to increase, indicating the onset of flow separation and diminishing aerodynamic return beyond that region. We also documented limitations including the single test speed, simplified vehicle geometry, ground-plane/frontal-area assumptions, and an approximately 2 mm print shift in the vehicle model that could have changed local airflow. The project combined CAD, additive manufacturing, instrumentation, calibration, MATLAB data reduction, uncertainty analysis, and physical interpretation."
    ],
    "takeaway": "The project demonstrates how I move from CAD and fabrication through instrument calibration, repeated testing, MATLAB reduction, uncertainty, and engineering interpretation of a physical system.",
    "report": "docs/ME30801_Wind_Tunnel_Spoiler_Report.pdf",
    "media": [
      {
        "type": "image",
        "src": "assets/projects/wind-tunnel/model-in-test-section.png",
        "alt": "3D-printed race-car model with adjustable rear spoiler installed in the wind-tunnel test section",
        "caption": "Model installed in the wind-tunnel test section",
        "fit": "cover"
      },
      {
        "type": "image",
        "src": "assets/projects/wind-tunnel/wind-tunnel-setup.png",
        "alt": "Purdue low-speed wind tunnel used for spoiler lift and drag testing",
        "caption": "Wind-tunnel experimental setup",
        "fit": "cover"
      },
      {
        "type": "image",
        "src": "assets/projects/wind-tunnel/isometric-car-model.png",
        "alt": "Isometric CAD view of the race-car model and adjustable spoiler",
        "caption": "Isometric CAD view of the car model",
        "fit": "contain"
      },
      {
        "type": "image",
        "src": "assets/projects/wind-tunnel/side-view-car-model.png",
        "alt": "Side CAD view of the race-car model and adjustable spoiler",
        "caption": "Side CAD view showing the adjustable spoiler",
        "fit": "contain"
      }
    ],
    "links": []
  },
  {
    "id": "blanket-insulation",
    "title": "Blanket Insulation Thermal Comparison",
    "course": "ME 315 · Heat & Mass Transfer",
    "categories": [
      "thermal",
      "data"
    ],
    "label": "Heat Transfer / Experimental Modeling",
    "summary": "Compared polyester, wool, and down using a heated epoxy skin analog, thermocouples, LabVIEW, and transient lumped-capacitance analysis.",
    "tags": [
      "Heat Transfer",
      "Thermocouples",
      "LabVIEW",
      "Transient Analysis"
    ],
    "metrics": [
      [
        "3",
        "materials"
      ],
      [
        "37 °C",
        "initial plate"
      ],
      [
        "~5 °C",
        "cold environment"
      ],
      [
        "0.0152 W/m·K",
        "measured wool k"
      ]
    ],
    "details": [
      "Our team designed a transient heat-transfer experiment to compare polyester, wool, and down as insulation materials under matched conditions. We created a repeatable human-skin analog using an epoxy plate measuring 6.35 cm × 6.35 cm × 0.381 cm, heated the plate to 37°C, and placed it in a cooler maintained near 5°C. The polyester, wool, and down samples had thicknesses of approximately 0.635 cm, 0.1016 cm, and 0.23 cm, respectively. Thermocouples were positioned beneath and above the insulation, the cooler temperature was monitored with infrared measurements, and LabVIEW recorded temperature at 1-second intervals for one hour.",
      "After collecting the three material trials, we checked whether a lumped-capacitance treatment was appropriate rather than applying the model automatically. The estimated Biot number was approximately 0.03, supporting the lumped approximation. We then linearized the transient cooling curves and used the resulting slopes to determine time constants, overall heat-transfer coefficients, and material thermal conductivity. The experimental k values were approximately 0.390 W/m·K for polyester, 0.0152 W/m·K for wool, and 0.0344 W/m·K for down, making wool the strongest insulator in our experiment.",
      "We also compared the measured conductivities against reference values rather than presenting the calculations without validation. The resulting discrepancies were approximately 2.63% for polyester, 67.66% for wool, and 37.60% for down, which led us to document limitations in the simplifying assumptions, experimental repeatability, contact conditions, and number of trials. The project was therefore as much about understanding why an experimental result disagreed with a reference as it was about calculating thermal conductivity."
    ],
    "takeaway": "A thermal test-and-modeling project that emphasizes controlled experimentation, instrumentation, model validation, property estimation, and honest treatment of uncertainty and error.",
    "report": "docs/ME315_Blanket_Insulation_Report.pdf",
    "media": [
      {
        "type": "image",
        "src": "assets/projects/blanket-insulation/material-samples.jpg",
        "alt": "Polyester, wool, and down blanket samples used in the heat-transfer experiment",
        "caption": "Polyester, wool, and down samples, left to right",
        "fit": "contain"
      },
      {
        "type": "image",
        "src": "assets/projects/blanket-insulation/experimental-setup.png",
        "alt": "Diagram of the blanket insulation experimental setup with thermocouples and epoxy resin block",
        "caption": "Experimental setup and thermocouple placement",
        "fit": "contain"
      },
      {
        "type": "image",
        "src": "assets/projects/blanket-insulation/thermal-schematic.png",
        "alt": "Thermal schematic of convection from the cooler and heat flow through the blanket and epoxy plate",
        "caption": "Simplified thermal model used for analysis",
        "fit": "contain"
      }
    ],
    "links": []
  },
  {
    "id": "audio-equalizer",
    "title": "Four-Stage Audio Equalizer",
    "course": "ECE 20007 · Electrical Engineering Fundamentals Lab",
    "categories": [
      "controls",
      "design"
    ],
    "label": "Electrical / Hardware Integration",
    "summary": "Designed, wired, debugged, and validated a four-stage analog equalizer with passive filters, adjustable op-amp gain, signal recombination, and speaker output.",
    "tags": [
      "LTspice",
      "Oscilloscope",
      "Op-Amps",
      "Filters",
      "Breadboarding"
    ],
    "metrics": [
      [
        "3.2 kHz",
        "high-pass target"
      ],
      [
        "320 Hz",
        "low-pass target"
      ],
      [
        "3.30%",
        "Vout error"
      ],
      [
        "605 mW",
        "output power"
      ]
    ],
    "details": [
      "I designed, breadboarded, debugged, and tested a four-stage analog audio equalizer that separated an input signal into treble, mid-frequency, and bass bands before independently adjusting and recombining them. The first stage used an RC high-pass filter, RLC band-pass filter, and RC low-pass filter. The second stage used potentiometer-controlled inverting operational amplifiers so the gain of each frequency band could be adjusted independently. A summing amplifier then recombined the three signals and provided overall volume control, after which an LM386 power-amplifier stage drove the speaker.",
      "The high-pass and low-pass filters were designed around nominal 3.2 kHz and 320 Hz −3 dB cutoffs. Measurements placed the high-pass transition around 3.311–3.548 kHz, the low-pass response around 316.2–338.8 Hz, and the RLC band-pass range at approximately 446.7 Hz–3.311 kHz. I used calculations, LTspice, oscilloscope/FRA measurements, and breadboard troubleshooting to compare the physical response against the design rather than assuming the nominal component values would produce ideal behavior.",
      "Before the power-amplifier stage, the maximum measured output was 96.7 mV RMS versus 100 mV expected, corresponding to 3.30% error. The LM386 then provided approximately 20× gain, and the final circuit produced approximately 605 mW, exceeding the 400 mW design requirement. The discrepancies between theoretical and measured behavior also gave me experience tracing real circuit performance back to component tolerance, wiring resistance, breadboard behavior, and measurement uncertainty."
    ],
    "takeaway": "The project connects circuit theory to physical hardware through design calculations, simulation, breadboarding, oscilloscope/FRA measurements, debugging, and measured performance validation.",
    "report": "docs/ECE20007_Audio_Equalizer_Report.pdf",
    "media": [
      {
        "type": "image",
        "src": "assets/projects/audio-equalizer/breadboard-circuit.jpg",
        "alt": "Breadboard implementation of the four-stage audio equalizer circuit",
        "caption": "Breadboard implementation of the audio equalizer",
        "fit": "cover"
      }
    ],
    "links": []
  },
  {
    "id": "foldable-hanger",
    "title": "Foldable Travel Hanger",
    "course": "ME 263 · Mechanical Engineering Design",
    "categories": [
      "design",
      "manufacturing"
    ],
    "label": "Mechanical Design / Prototyping",
    "summary": "Developed a compact foldable clothes hanger by translating user needs into design requirements, modeling the mechanism in Siemens NX, and validating the concept with a 3D-printed prototype.",
    "tags": [
      "Siemens NX",
      "3D Printing",
      "Design Process",
      "Prototyping",
      "DFM"
    ],
    "metrics": [
      [
        "4-person",
        "design team"
      ],
      [
        "12 lb",
        "load requirement"
      ],
      [
        "< 19 in",
        "length requirement"
      ],
      [
        "~1/4",
        "folded footprint"
      ]
    ],
    "details": [
      "In a four-person mechanical design team, I helped develop a more portable clothes hanger for users who needed to store or travel with clothing without forcing a conventional rigid hanger through tight necklines. We began with market and user research, functional decomposition, benchmark comparisons, and concept generation so the design was driven by specific needs rather than by CAD alone. The quantitative requirements included withstanding a 12 lb load without fracture, folding to less than half of its original length, and remaining under 19 inches long, while qualitative requirements emphasized durability, recyclability, usability, and the ability to fit easily into luggage.",
      "After evaluating concepts, we developed a hinged architecture in which the hook, central body, and side arms could fold into a compact configuration. I converted the selected concept into Siemens NX part and assembly models, using the CAD geometry to check fit, clearances, and the folding sequence before physical fabrication. The final configuration reduced the hanger to roughly one-quarter of its open footprint for travel while retaining the basic geometry needed to support clothing.",
      "We then 3D-printed the components and assembled a working prototype to validate the folding mechanism and the interfaces between the printed parts. That build-test cycle let us identify where the digital concept translated cleanly to hardware and where hinge geometry, component fit, or assembly details needed refinement. The project gave me early experience taking a product from user need and benchmark research through requirements, concept selection, CAD, additive manufacturing, assembly, and physical validation."
    ],
    "takeaway": "A complete early-stage product-development project that moved from user research and measurable requirements through NX modeling, additive manufacturing, assembly, and physical validation.",
    "report": null,
    "media": [
      {
        "type": "image",
        "src": "assets/projects/foldable-hanger/prototype.jpg",
        "alt": "3D-printed foldable travel hanger prototype",
        "caption": "Assembled 3D-printed prototype",
        "fit": "contain"
      },
      {
        "type": "image",
        "src": "assets/projects/foldable-hanger/cad-drawing.png",
        "alt": "Engineering drawing of the foldable travel hanger",
        "caption": "Siemens NX engineering drawing",
        "fit": "contain"
      },
      {
        "type": "image",
        "src": "assets/projects/foldable-hanger/folded-view.png",
        "alt": "Front CAD view of the foldable hanger in a folded configuration",
        "caption": "Folded configuration",
        "fit": "contain"
      },
      {
        "type": "image",
        "src": "assets/projects/foldable-hanger/folded-view-2.png",
        "alt": "Side CAD view of the folded hanger",
        "caption": "Alternate folded view",
        "fit": "contain"
      },
      {
        "type": "image",
        "src": "assets/projects/foldable-hanger/folding-view.gif",
        "alt": "CAD visualization of the foldable hanger mechanism",
        "caption": "Folding mechanism visualization",
        "fit": "contain"
      },
      {
        "type": "image",
        "src": "assets/projects/foldable-hanger/project-poster.webp",
        "alt": "Mechanical design project poster for the foldable travel hanger",
        "caption": "Project poster",
        "fit": "contain"
      }
    ],
    "links": []
  },
  {
    "id": "vip-rover",
    "title": "Autonomous Rover — Drone Video VIP",
    "course": "VIP 27920 · Vertically Integrated Projects",
    "categories": [
      "controls",
      "data"
    ],
    "label": "Autonomy / Machine Learning",
    "summary": "Worked on the rover hardware subteam of an autonomous filming system, contributing to rover integration and machine-learning / visual-detection development.",
    "tags": [
      "Python",
      "Computer Vision",
      "CIFAR-10",
      "IR",
      "LiDAR"
    ],
    "metrics": [
      [
        "78.74%",
        "CIFAR-10 accuracy"
      ],
      [
        "10",
        "epochs"
      ],
      [
        "Rover",
        "hardware focus"
      ],
      [
        "IR + LiDAR",
        "sensing concepts"
      ]
    ],
    "details": [
      "I worked on the rover/hardware side of Purdue’s Drone Video Vertically Integrated Project, whose larger goal was to create an autonomous filming system in which a rover navigated through a miniature-city environment while a drone followed and recorded it using related detection and tracking methods. My work was therefore not isolated to a standalone robot; the rover had to function as one component of a larger hardware/software autonomy system.",
      "I supported rover functionality and integration around autonomous navigation concepts including visual/object detection, infrared sensing, LiDAR, and coordination between hardware and software. I also contributed to Python machine-learning work in Google Colab, where a CIFAR-10 image-classification model reached 78.74% accuracy after 10 epochs. We documented potential follow-on experiments using ResNet-18, ResNet-34, and ResNet-50 architectures. The project gave me early experience working across mechanical hardware, sensing, software integration, computer vision, and machine learning rather than treating each discipline as an isolated task."
    ],
    "takeaway": "An early multidisciplinary autonomy project that exposed me to the interfaces between mechanical hardware, sensing, software integration, computer vision, and machine learning.",
    "report": null,
    "media": [],
    "links": []
  },
  {
    "id": "natural-catalysts",
    "title": "NaturalCatalysts Enzyme Kinetics Analysis",
    "course": "ENGR 132 · Transforming Ideas to Innovation II",
    "categories": [
      "data"
    ],
    "label": "MATLAB / Data Modeling",
    "summary": "Built a MATLAB workflow to analyze 100 kinetic-enzyme datasets, automate reaction-rate extraction, estimate V₀/Vmax/Km, and communicate defensible client conclusions.",
    "tags": [
      "MATLAB",
      "Algorithm Design",
      "Data Analysis",
      "Error Analysis"
    ],
    "metrics": [
      [
        "100",
        "datasets"
      ],
      [
        "5",
        "enzyme families"
      ],
      [
        "20%",
        "slope threshold"
      ],
      [
        "~1.1%",
        "Km reference error"
      ]
    ],
    "details": [
      "Our team built a MATLAB workflow for 100 kinetic-enzyme datasets spanning five enzyme families, with 10 tests plus duplicate measurements per enzyme, for a simulated industrial client. The core challenge was determining kinetic parameters automatically rather than manually selecting useful portions of every concentration-versus-time curve. To identify each reaction’s initial linear region, we divided the data into 10-point windows, calculated slope behavior between windows, and terminated the initial region once the slope differed from the original region by more than a 20% threshold. This reduced the influence of later nonlinear/noisy behavior when estimating the initial reaction rate V₀.",
      "Once V₀ had been extracted, we used Lineweaver–Burk linearization with MATLAB polyfit and polyval to calculate Vmax and Km across all five enzymes and their duplicate datasets. We validated the original parameter-identification method against PGO-X50 reference values; it produced approximately 4.3% error in Vmax and 1.1% error in Km before later refinements were evaluated. The final workflow scaled the same process across the full dataset and generated technical plots and error analyses that we converted into a client-facing brief. The important engineering lesson was not only writing MATLAB code, but building a repeatable method for turning noisy experimental data into parameter estimates and then communicating how much confidence a client should place in those results."
    ],
    "takeaway": "A data-analysis project focused on building a repeatable algorithm, validating its error, scaling it across a full dataset, and communicating the result responsibly to a client.",
    "report": "docs/ENGR132_NaturalCatalysts_Technical_Brief.pdf",
    "media": [],
    "links": []
  },
  {
    "id": "little-blazer",
    "title": "Little Blazer Engine CAD Assembly",
    "course": "CGT 163 · Graphical Communication",
    "categories": [
      "design"
    ],
    "label": "CAD / Assembly Design",
    "summary": "Recreated a multi-component engine from dimensioned drawings in Siemens NX and assembled the complete digital model using geometric constraints.",
    "tags": [
      "Siemens NX",
      "Part Modeling",
      "Assembly Constraints",
      "Engineering Drawings"
    ],
    "metrics": [
      [
        "Multi-week",
        "final project"
      ],
      [
        "NX",
        "parametric CAD"
      ],
      [
        "Full",
        "digital assembly"
      ],
      [
        "Fit + alignment",
        "verification"
      ]
    ],
    "details": [
      "For my CGT 163 final project, I recreated the Little Blazer Engine in Siemens NX from dimensioned 3D PDF drawings. I began by interpreting the supplied drawings and determining how each component could be represented using parametric features rather than simply approximating its exterior shape. Individual parts were modeled separately so their dimensions and geometric relationships could be controlled systematically.",
      "After completing the individual components, I built the engine as a multi-part NX assembly using geometric and assembly constraints to reproduce the intended interfaces and mechanical relationships between parts. I then inspected fit, alignment, and component relationships throughout the assembly to identify modeling or constraint errors. The project was one of my first substantial experiences moving from engineering drawings to a structured parametric assembly and helped establish the Siemens NX workflow I later used in more advanced mechanical-design projects."
    ],
    "takeaway": "Foundational CAD work that strengthened drawing interpretation, parametric modeling, assembly constraints, interface checking, and multi-part model organization.",
    "report": null,
    "links": [
      {
        "label": "Watch assembly demonstration",
        "href": "https://www.youtube.com/watch?v=u_yxFbJ2E08"
      }
    ],
    "media": []
  },
  {
    "id": "campus-safety",
    "title": "Campus Safety Intersection Redesign",
    "course": "ENGR 131 · Transforming Ideas to Innovation I",
    "categories": [
      "design",
      "data"
    ],
    "label": "Human-Centered Design / Decision Analysis",
    "summary": "Redesigned Purdue’s Schleman-Forney intersection using stakeholder research, prototype testing, traffic simulations, and a weighted decision matrix.",
    "tags": [
      "Design Process",
      "Stakeholder Research",
      "WDM",
      "CAD",
      "Prototyping"
    ],
    "metrics": [
      [
        "30+",
        "survey respondents"
      ],
      [
        "66.7%",
        "reported hit / near-hit"
      ],
      [
        "90%",
        "perceived safety"
      ],
      [
        "116.7",
        "WDM score"
      ]
    ],
    "details": [
      "In a four-person team, I worked on redesigning pedestrian and wheeled traffic flow around Purdue’s Schleman-Forney/Engineering Fountain intersection. We began with stakeholder research instead of immediately proposing a physical solution. A survey of 30+ Purdue students found that 66.7% reported having been hit or nearly hit by a vehicle or bicycle at the intersection, which gave us quantitative justification for focusing on clearer separation between pedestrians, cyclists, skateboarders, and other personal-mobility users.",
      "We generated and evaluated three primary concepts using prototypes, Minecraft-based traffic simulations, and user feedback. Survey participants rated an enclosed/divided bike-lane concept 90% safe, compared with 85.7% for a yield-sign concept and 71.4% for the small-barrier/speed-bump concept. Rather than choosing solely from the survey, we constructed a weighted decision matrix with weights of 15 for safety, 10 for affordability, 10 for maintenance, and 5 for convenience. The plastic-barrier solution received an overall weighted score of approximately 116.7 and a safety score of 60, the highest among the alternatives.",
      "We then refined the concept into a strategically spaced HDPE barrier system separating pedestrian and bike traffic. Iterations addressed barrier spacing, material choice, Purdue-themed visibility, reflective/biomimicry-inspired features, winter operation, cost, maintenance, and interference with traffic flow. The project was an early example of the same engineering process I use now: define the problem with data, translate stakeholder needs into measurable criteria, generate alternatives, test them, quantify tradeoffs, and use the results to justify a final design."
    ],
    "takeaway": "A full human-centered design cycle driven by quantified stakeholder need, concept comparison, simulation/prototyping, weighted tradeoffs, and iterative refinement.",
    "report": "docs/ENGR131_Campus_Safety_Design_Report.pdf",
    "media": [],
    "links": []
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
    card.id = `project-${project.id}`;
    card.hidden = !visible;
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Open details for ${project.title}`);
    card.dataset.projectId = project.id;
    const heroImage = (project.media || []).find(item => item.type === 'image');
    const art = heroImage
      ? `<div class="project-art project-art-media"><img src="${heroImage.src}" alt="${heroImage.alt || ''}" loading="lazy" style="object-fit:${heroImage.fit || 'cover'}"><span class="art-label">${project.label}</span></div>`
      : `<div class="project-art" style="--art-bg:${artColor(index)}"><span class="art-label">${project.label}</span></div>`;
    card.innerHTML = `
      ${art}
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

  const hero = document.getElementById('modal-art');
  const heroImage = (project.media || []).find(item => item.type === 'image');
  if (heroImage) {
    hero.classList.add('has-media');
    hero.innerHTML = `<img src="${heroImage.src}" alt="${heroImage.alt || ''}" style="object-fit:${heroImage.fit || 'cover'}">`;
    hero.style.background = '';
  } else {
    hero.classList.remove('has-media');
    hero.innerHTML = '';
    hero.style.background = `linear-gradient(135deg, ${artColor(projects.indexOf(project))}, var(--surface-2))`;
  }

  const gallery = document.getElementById('modal-gallery');
  const media = project.media || [];
  const galleryMedia = heroImage ? media.filter(item => item !== heroImage) : media;
  gallery.innerHTML = galleryMedia.length
    ? galleryMedia.map(item => {
        if (item.type === 'video') {
          return `<figure class="media-item media-video">
            <video controls playsinline preload="metadata">
              <source src="${item.src}" type="video/mp4">
              Your browser does not support embedded video.
            </video>
            ${item.caption ? `<figcaption>${item.caption}</figcaption>` : ''}
          </figure>`;
        }
        return `<figure class="media-item">
          <a href="${item.src}" target="_blank" rel="noopener" aria-label="Open ${item.caption || 'project image'} full size">
            <img src="${item.src}" alt="${item.alt || ''}" loading="lazy" style="object-fit:${item.fit || 'cover'}">
          </a>
          ${item.caption ? `<figcaption>${item.caption}</figcaption>` : ''}
        </figure>`;
      }).join('')
    : '';
  gallery.hidden = !galleryMedia.length;

  document.getElementById('modal-metrics').innerHTML = project.metrics.map(([value,label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join('');
  document.getElementById('modal-details').innerHTML = project.details.map(paragraph => `<p>${paragraph}</p>`).join('');
  document.getElementById('modal-takeaway').textContent = project.takeaway;
  document.getElementById('modal-tags').innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');

  const actions = document.getElementById('modal-actions');
  const actionLinks = [];
  if (project.report) actionLinks.push(`<a class="button button-primary" href="${project.report}" target="_blank" rel="noopener">View project report ↗</a>`);
  (project.links || []).forEach(link => {
    actionLinks.push(`<a class="button ${actionLinks.length ? 'button-secondary' : 'button-primary'}" href="${link.href}" target="_blank" rel="noopener">${link.label} ↗</a>`);
  });
  actionLinks.push(`<button class="button button-secondary" type="button" data-close-modal>Close</button>`);
  actions.innerHTML = actionLinks.join('');
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

function handleDeepLink() {
  const params = new URLSearchParams(window.location.search);
  let target = params.get('view');

  // Backward compatibility with the earlier #experience-* and #project-* links.
  if (!target && window.location.hash) target = window.location.hash.slice(1);
  if (!target) return;

  if (target.startsWith('experience-')) {
    const experience = document.getElementById(target);
    if (!experience) return;
    // A short delay makes the jump reliable after fonts/layout finish loading.
    setTimeout(() => {
      const detail = experience.querySelector('.experience-details');
      if (detail) detail.open = true;
      experience.scrollIntoView({ behavior: 'auto', block: 'center' });
      experience.classList.add('deep-link-target');
      setTimeout(() => experience.classList.remove('deep-link-target'), 1800);
    }, 80);
    return;
  }

  if (target.startsWith('project-')) {
    const projectId = target.slice('project-'.length);
    const project = projects.find(item => item.id === projectId);
    if (!project) return;

    filters.forEach(item => item.classList.toggle('active', item.dataset.filter === 'all'));
    renderProjects('all');
    setTimeout(() => {
      const card = document.getElementById(`project-${projectId}`);
      if (card) {
        card.scrollIntoView({ behavior: 'auto', block: 'center' });
        card.classList.add('deep-link-target');
        setTimeout(() => card.classList.remove('deep-link-target'), 1800);
      }
      if (!modal.open) openProject(project);
    }, 80);
  }
}

document.getElementById('year').textContent = new Date().getFullYear();
renderProjects();
initReveals();
handleDeepLink();
window.addEventListener('hashchange', handleDeepLink);
window.addEventListener('popstate', handleDeepLink);
