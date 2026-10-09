// Learning Path Data for Category 10: UI / UX Design
export const uiUxData = {
  id: "ui-ux-design",
  title: "UI / UX Design",
  icon: "🎨",
  role: "UI/UX Designer / Product Design Associate",
  summary: "Master modern user interface and user experience design, collaborative prototyping in Figma and Adobe XD, low-to-high fidelity wireframing, color theory & typography systems, and web design basics.",
  technologies: [
    {
      id: "figma",
      name: "Figma",
      tagline: "The World's Leading Collaborative Interface Design and Prototyping Tool",
      beginnerFriendly: "Think of Figma like Google Docs, but for designing beautiful websites and mobile apps. Multiple designers, developers, and clients can open the same canvas at the same time, seeing each other's live mouse cursors as they design.",
      whatIsIt: "Figma is a cloud-based vector graphics editor and user interface design tool that runs directly in web browsers and desktop apps. It is the reigning industry standard for digital product design.",
      whyUsed: "It eliminates file version conflicts, runs on any OS (Mac, Windows, Linux, Chromebook), unites design and developer handoff in one URL, and offers powerful design system features (Auto Layout, Variants, Components).",
      whereUsed: "Airbnb, Uber, Microsoft, Spotify, Netflix, Slack, Stripe, and thousands of tech design agencies worldwide.",
      mainFeatures: [
        "Real-Time Multiplayer Collaboration: Simultaneous multi-user editing with live cursor presence.",
        "Auto Layout: Responsive, flexbox-like container behavior that adjusts buttons and cards automatically as text changes.",
        "Reusable Components & Variants: Master design elements with interchangeable states (Hover, Active, Disabled).",
        "Interactive Clickable Prototyping: Connecting screens with smart animations, overlays, and transitions.",
        "Dev Mode: Dedicated developer handoff view displaying exact CSS/iOS/Android code, spacing values, and assets."
      ],
      importantConcepts: [
        {
          title: "Auto Layout",
          desc: "Figma's implementation of Flexbox. It controls direction (vertical/horizontal), padding, spacing between items, and resizing (Hug contents, Fill container, Fixed)."
        },
        {
          title: "Components & Instances",
          desc: "A Component (four purple diamonds) is the master blueprint. Instances (single hollow diamond) are copies that inherit master style changes automatically."
        },
        {
          title: "Variants & Component Properties",
          desc: "Grouping component states into a single clean element with toggle switches (e.g. Type=Primary/Secondary, State=Default/Hover, Icon=True/False)."
        },
        {
          title: "Design Tokens & Styles",
          desc: "Global color styles, typography styles, and variable tokens that enforce brand consistency across an entire design file."
        }
      ],
      howItWorks: "Figma runs on a high-performance WebAssembly (Wasm) and WebGL engine written in C++. It renders complex vector paths and thousands of layer shapes directly on the client GPU inside the browser.",
      stepByStep: [
        "Step 1: Create a free account on figma.com and create a new Design file.",
        "Step 2: Press 'F' to select a Frame preset (e.g., Desktop 1440px or iPhone 15).",
        "Step 3: Define global color and typography styles in the right sidebar.",
        "Step 4: Build interface elements using Auto Layout (`Shift + A`) for automatic padding and responsiveness.",
        "Step 5: Create interactive prototypes by switching to the 'Prototype' tab, dragging blue connectors between frames, and clicking 'Present'."
      ],
      syntax: `// Figma Design System Tokens Hierarchy (JSON / Tokens Studio format)
{
  "color": {
    "brand": {
      "primary": { "value": "#2563eb", "type": "color" },
      "secondary": { "value": "#4f46e5", "type": "color" },
      "accent": { "value": "#10b981", "type": "color" }
    },
    "neutral": {
      "background": { "value": "#f8fafc", "type": "color" },
      "surface": { "value": "#ffffff", "type": "color" },
      "text": { "value": "#0f172a", "type": "color" },
      "muted": { "value": "#64748b", "type": "color" }
    }
  },
  "spacing": {
    "xs": { "value": "4px" },
    "sm": { "value": "8px" },
    "md": { "value": "16px" },
    "lg": { "value": "24px" },
    "xl": { "value": "32px" }
  }
}`,
      examples: [
        {
          title: "Figma Auto Layout Configuration Guidelines",
          code: `Creating a Responsive Button:
1. Type text: "Start Learning"
2. Press Shift + A to add Auto Layout.
3. In Right Sidebar:
   - Padding Left/Right: 20px
   - Padding Top/Bottom: 12px
   - Fill: #2563eb (Primary Blue)
   - Corner Radius: 8px
4. Text changes will now automatically expand or shrink button width!`
        },
        {
          title: "Prototype Transition Setup",
          code: `On Click -> Navigate To: Dashboard Frame
Animation: Smart Animate
Easing: Ease Out (300ms)`
        }
      ],
      practicalExamples: "Designing an end-to-end mobile learning app in Figma: building a reusable component library, assembling onboarding and lesson screens using Auto Layout, and linking clickable buttons into a live prototype for user testing.",
      realWorldUsage: "Airbnb maintains its world-renowned 'DLS' (Design Language System) in Figma libraries, shared across hundreds of designers and frontend engineers globally.",
      importantPoints: [
        "Never design with ungrouped floating layers; always organize elements inside Frames with Auto Layout enabled.",
        "Name your layers cleanly (e.g. `nav_bar`, `btn_submit`, `card_track`) instead of leaving default names like `Frame 428` or `Rectangle 12`.",
        "Use 8pt grid spacing intervals (8px, 16px, 24px, 32px) for consistent, harmonious padding and margins across all screens."
      ],
      thingsToLearn: [
        "Figma canvas navigation, frames, shapes, vectors (pen tool)",
        "Mastering Auto Layout (direction, padding, alignment, resizing rules)",
        "Creating master components, instances, and variants",
        "Building Design Systems: color styles, typography styles, variables",
        "Creating interactive prototypes with Smart Animate and overlays",
        "Using Dev Mode to inspect CSS, measurements, and asset export"
      ],
      miniPracticalTasks: [
        "Task 1: Create a responsive button in Figma using Auto Layout with a text label and an icon.",
        "Task 2: Design a modern student profile card with an avatar, student name, track badge, and action button.",
        "Task 3: Connect 2 frames with a prototype interaction on button click and preview it in Presentation mode."
      ]
    },
    {
      id: "adobe-xd",
      name: "Adobe XD",
      tagline: "Adobe's Vector-Based Experience Design and Prototyping Platform",
      beginnerFriendly: "If you are familiar with Photoshop or Illustrator, Adobe XD feels right at home. It is Adobe's dedicated software for wireframing, designing, and sharing interactive digital prototypes.",
      whatIsIt: "Adobe XD (Experience Design) is a vector-based user experience design tool for web and mobile apps, offering voice prototyping, repeat grids, and tight Creative Cloud integration.",
      whyUsed: "It features the revolutionary Repeat Grid tool for duplicating lists in one drag, native integration with Adobe Creative Cloud assets (Photoshop, Illustrator), and voice interaction triggers.",
      whereUsed: "Enterprise creative agencies, corporate marketing teams, and legacy Adobe workflow studios.",
      mainFeatures: [
        "Repeat Grid: Instantly turn any group of elements into a repeating, auto-spacing list with independent content.",
        "Voice Prototyping: Create voice-activated transitions and speech playback responses.",
        "Auto-Animate: Automatically animates changes in size, position, and color between artboards.",
        "Creative Cloud Libraries: Direct real-time linking of graphics from Photoshop and Illustrator.",
        "Interactive Shared Links: Generate web links for stakeholder reviews and developer spec inspections."
      ],
      importantConcepts: [
        {
          title: "The Repeat Grid",
          desc: "Drag handle to duplicate elements horizontally or vertically; changing spacing on one updates all, while text and images can be dropped in bulk."
        },
        {
          title: "Auto-Animate",
          desc: "Identifies identical layer names across two artboards and calculates fluid intermediate motion frames for smooth transitions."
        },
        {
          title: "Component States",
          desc: "Creating multiple visual variations of a component (Default, Hover, Pressed, Disabled) within a single master asset."
        },
        {
          title: "Developer Specs",
          desc: "Exporting interactive web links where engineers can click layers to inspect CSS colors, typography, and download SVGs."
        }
      ],
      howItWorks: "Adobe XD runs as a native desktop application with hardware-accelerated vector rendering, saving assets to Adobe Creative Cloud cloud documents (.xd) for multi-device sync.",
      stepByStep: [
        "Step 1: Launch Adobe XD and select an artboard template (Web 1920 or Mobile).",
        "Step 2: Draw card layout containing an image placeholder, heading, and description.",
        "Step 3: Select the card and click 'Repeat Grid' in the top right to expand into a multi-item catalog.",
        "Step 4: Switch to 'Prototype' mode and drag the blue wire to a detail artboard with 'Auto-Animate'.",
        "Step 5: Click 'Share' to generate a public review link for clients and developers."
      ],
      syntax: `// Adobe XD Creative Workflow Cheat Sheet
- Toggle Repeat Grid: Ctrl + R (Win) / Cmd + R (Mac)
- Switch between Design & Prototype: Ctrl + Tab
- Duplicate Layer: Alt + Drag
- Group Elements: Ctrl + G
- Create Component: Ctrl + K
- Zoom to Selection: Shift + 2`,
      examples: [
        {
          title: "Using Repeat Grid with Bulk Content",
          code: `1. Create card with empty text and rectangle image.
2. Enable Repeat Grid and drag down to create 6 cards.
3. Drag 6 image files from desktop folder onto the image placeholder:
   -> XD automatically populates each card with a different photo!
4. Drag a text file containing names onto the title:
   -> XD assigns each line of text to a different card!`
        },
        {
          title: "Auto-Animate Micro-Interaction Setup",
          code: `Artboard 1: Modal window position off-screen bottom, opacity 0%.
Artboard 2: Modal window centered on screen, opacity 100%.
Trigger: Tap
Action: Auto-Animate
Duration: 0.4s (Ease Out)`
        }
      ],
      practicalExamples: "Designing an interactive digital restaurant menu: using Repeat Grid to layout 20 food items, and Auto-Animate to create smooth expanding food detail cards upon tap.",
      realWorldUsage: "Design agencies embedded in the Adobe enterprise ecosystem use Adobe XD to iterate on marketing landing pages and brand campaign interfaces seamlessly with Illustrator vector graphics.",
      importantPoints: [
        "For Auto-Animate to work smoothly, the layers on both artboards must share the exact same layer name and hierarchy.",
        "Be mindful of cloud document sync; ensure design files finish saving to Creative Cloud before closing the application.",
        "Keep font choices aligned with Google Fonts or Adobe Fonts to ensure stakeholders viewing shared links see the intended typography."
      ],
      thingsToLearn: [
        "Adobe XD workspace, artboard tools, vector shapes",
        "Mastering the Repeat Grid for rapid layout duplication",
        "Creating components and interactive hover/toggle states",
        "Auto-Animate and transition prototyping",
        "Sharing interactive prototypes for stakeholder review and developer handoff"
      ],
      miniPracticalTasks: [
        "Task 1: Use Repeat Grid in Adobe XD to create a 3-column product list in under 60 seconds.",
        "Task 2: Create a button with a Hover state that changes background color when hovered in preview mode.",
        "Task 3: Build a simple 2-artboard prototype using Auto-Animate to slide a side navigation drawer into view."
      ]
    },
    {
      id: "wireframing-prototyping",
      name: "Wireframing & Prototyping",
      tagline: "From Low-Fidelity Conceptual Sketches to High-Fidelity Interactive Models",
      beginnerFriendly: "Think of Wireframing like an architect's blueprint for a house. You don't pick out the sofa cushions or wall paint colors before drawing the walls, doorways, and rooms. Wireframes ensure the layout works before you choose colors.",
      whatIsIt: "Wireframing is the practice of creating simplified, schematic visual blueprints of digital interfaces. Prototyping is the practice of connecting those screens with interactive triggers to simulate realistic user journeys.",
      whyUsed: "It prevents costly rework. Discovering a broken user flow on a quick paper or grayscale wireframe takes 5 minutes to fix; discovering it after frontend engineers have written thousands of lines of code takes weeks.",
      whereUsed: "Standard early-stage discovery phase in all software product management, Agile sprints, and UX research.",
      mainFeatures: [
        "Low-Fidelity (Lo-Fi) Wireframes: Quick, grayscale sketches focusing strictly on content placement, hierarchy, and navigation.",
        "High-Fidelity (Hi-Fi) Wireframes: Pixel-perfect screens with production typography, branding colors, icons, and real imagery.",
        "User Journey Mapping: Tracing the step-by-step path a user takes to achieve a goal (e.g. Sign up -> Browse -> Enroll).",
        "Interactive Clickable Prototypes: Functional simulations with micro-interactions, dropdowns, and screen transitions.",
        "Usability Testing: Observing real users navigating prototypes to spot confusion, bottlenecks, and navigation friction."
      ],
      importantConcepts: [
        {
          title: "Low-Fidelity vs High-Fidelity",
          desc: "Lo-Fi uses grayscale boxes, simple shapes, and placeholder text to focus on structure; Hi-Fi includes final colors, typography, and polished visual styling."
        },
        {
          title: "Information Architecture (IA)",
          desc: "The structural design of shared information environments, organizing menus, categories, and page hierarchies logically."
        },
        {
          title: "Micro-Interactions",
          desc: "Subtle single-purpose animations (like a toggle switch flipping, button ripple, or heart fill) that provide tactile feedback."
        },
        {
          title: "Usability Testing Protocols",
          desc: "Giving participants realistic scenarios without coaching them and observing where their mouse clicks and where they hesitate."
        }
      ],
      howItWorks: "The UX designer interviews stakeholders, sketches low-fidelity ideas on paper or Whimsical, validates with users, converts the winning layout into digital grayscale wireframes in Figma, iterates into a high-fidelity prototype, and hands it off to developers.",
      stepByStep: [
        "Step 1: Define user persona and core goal (e.g., 'Student enrolls in Web Development track').",
        "Step 2: Sketch 3 quick paper wireframe variations (Crazy Eights exercise).",
        "Step 3: Build digital low-fidelity grayscale wireframes focusing on visual hierarchy and spacing.",
        "Step 4: Connect frames into an interactive prototype with realistic navigation paths.",
        "Step 5: Conduct usability testing with 3-5 students and refine layouts based on user feedback."
      ],
      syntax: `// Standard Wireframe Section Hierarchy (Grayscale Blueprint)
[ TOP HEADER ]
  - Logo (Left)
  - Navigation Links: Home | Jobs | Practice | Login (Right)

[ HERO BANNER ]
  - Headline (H1): "Build Your IT Career with Career Craft"
  - Subheadline (P): Explanatory text (Max 2 lines)
  - Primary CTA Button: [ Start Learning -> ]

[ CONTENT GRID - 3 Columns ]
  [ Card 1: Icon + Title + Tech Tags + Link ]
  [ Card 2: Icon + Title + Tech Tags + Link ]
  [ Card 3: Icon + Title + Tech Tags + Link ]

[ FOOTER ]
  - Copyright info, social links, legal privacy`,
      examples: [
        {
          title: "Usability Test Task Script",
          code: `Scenario: "You are a college 3rd-year student who wants to learn Web Development."
Task: "Navigate from the home screen, find the Web Development track, open the HTML5 learning page, and locate the practice test."
Observer Notes:
- Did the user understand where to click?
- Time taken to locate the track: 12 seconds.
- Friction points observed: None; left-side menu was immediately recognized.`
        },
        {
          title: "Crazy Eights Ideation Exercise",
          code: `Fold a sheet of paper into 8 rectangles.
Set a timer for 8 minutes (1 minute per box).
Sketch 8 distinct layout concepts for the same screen rapidly without judging.`
        }
      ],
      practicalExamples: "Creating a grayscale wireframe for a student examination portal: laying out the timer bar at the top, question text in the center, radio choice buttons below, and a navigation question grid on the side.",
      realWorldUsage: "Product teams at Google and Apple create dozens of low-fidelity interactive prototypes during 'Design Sprints' before approving engineering resources to write production code.",
      importantPoints: [
        "Keep low-fidelity wireframes strictly in grayscale (shades of gray); adding colors early distracts stakeholders from evaluating layout and user flow.",
        "Use real realistic text content whenever possible instead of 'Lorem Ipsum' to ensure text lengths accurately match real layouts.",
        "Test your prototypes on real physical smartphones, not just inside desktop browser windows."
      ],
      thingsToLearn: [
        "Principles of Information Architecture (IA) and User Flows",
        "Sketching and rapid low-fidelity paper wireframing",
        "Designing digital low-fidelity wireframes in Figma / Balsamiq",
        "Translating low-fidelity wireframes into high-fidelity mockups",
        "Planning and conducting user usability testing sessions",
        "Iterating designs based on observational research data"
      ],
      miniPracticalTasks: [
        "Task 1: Draw a paper wireframe of a student login screen with email, password, social login, and sign-up links.",
        "Task 2: Build a grayscale digital wireframe of an e-commerce checkout page in Figma.",
        "Task 3: Conduct a 3-minute usability test on a teammate asking them to find a feature on a prototype."
      ]
    },
    {
      id: "color-theory-typography",
      name: "Color Theory & Typography",
      tagline: "The Visual Foundations of Aesthetics, Readability, and Brand Emotion",
      beginnerFriendly: "Colors and fonts are the voice and mood of a design. A bright cartoon font in yellow and pink feels like a playground; a clean dark blue font with generous spacing feels like a trustworthy bank.",
      whatIsIt: "Color Theory is the study of how colors interact, evoke emotional responses, and create visual harmony. Typography is the art and technique of arranging type to make written language legible, readable, and appealing.",
      whyUsed: "Visual aesthetics determine whether users trust a website within the first 50 milliseconds. Correct color contrast ensures readability for visually impaired users, while disciplined typography establishes effortless visual hierarchy.",
      whereUsed: "Every digital user interface, mobile app, logo, website, and brand guideline document in the world.",
      mainFeatures: [
        "The Color Wheel: Primary, secondary, tertiary colors, and relationships (Complementary, Analogous, Triadic).",
        "The 60-30-10 Color Rule: 60% dominant neutral background, 30% secondary structure, 10% vibrant accent color.",
        "Accessibility & Contrast Ratios: WCAG AA (4.5:1) and AAA (7:1) contrast standards for text readability.",
        "Type Anatomy & Classifications: Serif (formal/editorial), Sans-Serif (clean/modern), Monospace (code).",
        "Modular Typography Scales: Mathematical font size scales (e.g. 12px, 14px, 16px, 20px, 24px, 32px, 48px)."
      ],
      importantConcepts: [
        {
          title: "The 60-30-10 Design Rule",
          desc: "60% dominant color (usually clean white/gray background), 30% structural color (cards, sidebars, dark text), 10% accent color (primary action buttons, highlights)."
        },
        {
          title: "WCAG Accessibility Contrast Ratios",
          desc: "Web Content Accessibility Guidelines require at least 4.5:1 contrast between text and background for normal text (3:1 for large text)."
        },
        {
          title: "Font Hierarchy & Pairing",
          desc: "Pairing at most 2 complementary fonts (e.g. an expressive display heading font with a clean, neutral Sans-Serif body font like Inter or Roboto)."
        },
        {
          title: "Line Height (Leading) & Letter Spacing (Tracking)",
          desc: "Setting line-height to 140%-160% of font size for body text ensures effortless readability and prevents lines from bleeding together."
        }
      ],
      howItWorks: "The human eye perceives wavelength frequencies which stimulate brain emotional centers (blue inspires trust and calm; red triggers urgency). The human eye reads text through rapid saccadic jumps; disciplined font hierarchy guides the eye smoothly down the page.",
      stepByStep: [
        "Step 1: Choose a primary brand color reflecting application emotion (e.g. tech blue `#2563eb`).",
        "Step 2: Select high-contrast neutral backgrounds (`#ffffff` and `#f8fafc`) and dark body text (`#0f172a`).",
        "Step 3: Pick an accent color (e.g. emerald green `#10b981` or coral) for success states and key call-to-actions.",
        "Step 4: Establish a modular typographic scale based on a 1.25 (Major Third) ratio starting at 16px body.",
        "Step 5: Check all text combinations with a color contrast checker tool to ensure WCAG AA compliance."
      ],
      syntax: `/* Modern CSS Design System: Colors & Modular Typography Tokens */
:root {
  /* 60-30-10 Color System Tokens */
  --color-bg-base: #f8fafc;         /* 60% Dominant Background */
  --color-surface: #ffffff;         /* Card Surface */
  --color-text-primary: #0f172a;    /* 30% Structural Dark Text */
  --color-text-muted: #64748b;      /* Secondary Text */
  --color-primary: #2563eb;         /* 10% Accent Call to Action */
  --color-primary-hover: #1d4ed8;
  --color-success: #10b981;
  --color-danger: #ef4444;

  /* Typographic Font Families */
  --font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-code: 'Fira Code', monospace;

  /* Modular Scale (16px base, 1.25 ratio) */
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px - Standard Body */
  --font-size-lg: 1.25rem;    /* 20px - Subheadings */
  --font-size-xl: 1.563rem;   /* 25px - H3 */
  --font-size-2xl: 1.953rem;  /* 31px - H2 */
  --font-size-3xl: 2.441rem;  /* 39px - H1 Hero Title */

  /* Leading (Line Height) */
  --line-height-tight: 1.2;
  --line-height-base: 1.5;
  --line-height-relaxed: 1.7;
}`,
      examples: [
        {
          title: "Calculating WCAG Color Contrast",
          code: `Background: #ffffff (White)
Text Color: #0f172a (Dark Slate)
Calculated Contrast Ratio: 16.5:1 -> PASS (Exceeds WCAG AAA standard!)

Background: #2563eb (Blue)
Text Color: #ffffff (White)
Calculated Contrast Ratio: 4.6:1 -> PASS (Exceeds WCAG AA standard)`
        },
        {
          title: "Psychological Color Associations in UX",
          code: `- Blue: Trust, security, intelligence (PayPal, LinkedIn, Career Craft)
- Green: Growth, success, finance (Spotify, Robinhood)
- Red: Urgency, energy, error (Netflix, YouTube, alerts)
- Dark Slate / Black: Luxury, elegance, tech sophistication (Apple)`
        }
      ],
      practicalExamples: "Redesigning an overcrowded student test portal by replacing harsh pure black `#000000` text with soft slate `#1e293b`, increasing body line-height to 1.6, and introducing an emerald green progress indicator.",
      realWorldUsage: "Apple's Human Interface Guidelines and Google's Material Design 3 define strict, mathematically calculated color palettes and typographic scales adhered to across billions of devices.",
      importantPoints: [
        "Never use pure black text (`#000000`) on pure white background (`#ffffff`); it causes optical vibration and eye fatigue. Use soft dark slate (`#0f172a` or `#1e293b`).",
        "Never rely solely on color to convey information (e.g. always include an icon or text label alongside a red error badge for colorblind accessibility).",
        "Limit font families to a maximum of 2 per project to prevent visual chaos and excessive web font load times."
      ],
      thingsToLearn: [
        "The Color Wheel and color harmonies (complementary, analogous, monochromatic)",
        "Applying the 60-30-10 color proportion rule in interface design",
        "Accessibility: WCAG AA/AAA contrast ratios and color blindness considerations",
        "Typography anatomy: baseline, x-height, ascender, descender, kerning",
        "Font categories: Serif, Sans-Serif, Display, Monospace",
        "Establishing a harmonious modular typographic scale"
      ],
      miniPracticalTasks: [
        "Task 1: Use an online contrast checker (WebAIM) to verify whether `#3b82f6` on `#ffffff` passes WCAG AA.",
        "Task 2: Build a harmonious 3-color palette for an educational app using the 60-30-10 rule.",
        "Task 3: Create a typography scale in Figma or CSS with 5 steps from 12px to 32px."
      ]
    },
    {
      id: "html-css-uiux",
      name: "HTML & CSS Basics",
      tagline: "Frontend Fundamentals for Product Designers and Design-to-Code Handoff",
      beginnerFriendly: "You don't have to become a full-time software engineer, but knowing basic HTML and CSS is like an architect understanding concrete and steel. It lets you design interfaces that frontend engineers can actually build easily.",
      whatIsIt: "HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) are the foundational building blocks of the web. Understanding their capabilities and constraints empowers UI/UX designers to create feasible, responsive designs.",
      whyUsed: "It closes the gap between design and engineering. Designers who understand Flexbox, CSS Grid, and box models design layouts that translate smoothly into code with zero developer friction.",
      whereUsed: "Web browsers, responsive web applications, design systems, and frontend developer handoff workflows.",
      mainFeatures: [
        "Semantic Structure: Understanding how <div>, <section>, <button>, and <nav> relate to design frames.",
        "CSS Box Model: Understanding content width, padding, border, and margin dimensions.",
        "Flexbox & CSS Grid: The real-world web layout engines that match Figma's Auto Layout.",
        "Media Queries & Breakpoints: Standard responsive web widths (375px mobile, 768px tablet, 1200px desktop).",
        "Design Tokens with CSS Variables: Exporting Figma design tokens straight into `:root` CSS variables."
      ],
      importantConcepts: [
        {
          title: "The CSS Box Model for Designers",
          desc: "Every visual card has Margin (space outside), Border (stroke), Padding (inner breathing room), and Content (text/image)."
        },
        {
          title: "Flexbox vs Figma Auto Layout",
          desc: "Auto Layout horizontal = flex-direction: row; Auto Layout vertical = flex-direction: column; Gap = gap; Space between = justify-content: space-between."
        },
        {
          title: "Responsive Viewport Units (vw, vh, rem)",
          desc: "Why developers use rem (root em) for accessible typography that respects user browser zoom preferences."
        },
        {
          title: "Browser Inspect Tool (DevTools)",
          desc: "Right-clicking any live webpage and inspecting element styles, margins, and fonts in real time."
        }
      ],
      howItWorks: "Designers export CSS properties from Figma's Dev Mode. Frontend engineers paste the CSS tokens into component stylesheets, rendering identical responsive layouts in web browsers.",
      stepByStep: [
        "Step 1: Open Chrome DevTools (`F12` or Right Click -> Inspect) on any modern website.",
        "Step 2: Inspect how cards and navigation bars use `display: flex` and `gap`.",
        "Step 3: Modify a button's background color and padding live inside DevTools.",
        "Step 4: Write a simple HTML5 card with inline or external CSS styling.",
        "Step 5: Apply a media query (`@media (max-width: 768px)`) to test mobile responsiveness."
      ],
      syntax: `<!-- Designer-Friendly HTML & CSS Component Blueprint -->
<div class="tech-card">
  <div class="tech-icon">🌐</div>
  <div class="tech-content">
    <h3 class="tech-title">Web Development</h3>
    <p class="tech-desc">Build modern responsive websites and interactive web apps.</p>
  </div>
  <button class="tech-btn">Start Learning &rarr;</button>
</div>

<style>
.tech-card {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.tech-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.tech-title {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  color: #0f172a;
  margin-bottom: 8px;
}
</style>`,
      examples: [
        {
          title: "Mapping Figma Auto Layout to CSS Flexbox",
          code: `Figma Setting                -> CSS Equivalent
Auto Layout: Horizontal       -> display: flex; flex-direction: row;
Auto Layout: Vertical         -> display: flex; flex-direction: column;
Item Spacing: 16px            -> gap: 16px;
Align Items: Center           -> align-items: center;
Justify Content: Space Between-> justify-content: space-between;
Resizing: Fill Container      -> flex: 1;`
        },
        {
          title: "Responsive Breakpoint Media Query",
          code: `@media (max-width: 768px) {
  .tech-card-grid {
    grid-template-columns: 1fr; /* Switch from 3 columns to 1 column on mobile */
  }
}`
        }
      ],
      practicalExamples: "A UI designer inspects a live staging website using Chrome DevTools, spots that the developer implemented 12px padding instead of the 24px specified in Figma, and provides the exact CSS fix to the engineer.",
      realWorldUsage: "Design Systems Engineers at Spotify and GitHub bridge design and code by writing reusable CSS utility libraries and React design tokens.",
      importantPoints: [
        "Avoid designing impossible layouts that violate standard web CSS layout capabilities (like fixed pixel positioning on responsive mobile screens).",
        "Always communicate hover, active, focus, and disabled states to frontend engineers, not just the static default state.",
        "Learn to use browser DevTools to test your design assets and check live accessibility contrast."
      ],
      thingsToLearn: [
        "HTML5 semantic structure (<header>, <nav>, <main>, <article>, <footer>)",
        "CSS Box Model: margin, border, padding, content",
        "Flexbox layout properties (direction, justify-content, align-items, gap)",
        "CSS Grid for 2D card layouts",
        "Responsive media queries and mobile-first design principles",
        "Using Chrome/Firefox DevTools for live interface inspection"
      ],
      miniPracticalTasks: [
        "Task 1: Open Chrome DevTools on a website, find an H1 heading, and change its color to purple.",
        "Task 2: Build a centered pricing card using HTML and Flexbox CSS in an online sandbox (CodePen).",
        "Task 3: Write a media query that hides a desktop navigation bar and displays a mobile menu on screens under 768px."
      ]
    },
    {
      id: "canva-visual-tools",
      name: "Canva / Visual Tools",
      tagline: "Rapid Graphic Design, Social Media Assets, and Visual Marketing Content",
      beginnerFriendly: "While Figma is like a professional architect's studio for building software, Canva is like a fun, high-speed digital craft workshop filled with thousands of pre-made templates, stickers, and fonts ready to drag and drop in seconds.",
      whatIsIt: "Canva and companion visual tools (Unsplash, Coolors, Remove.bg, Fontjoy) are accessible graphic design platforms used for rapid content creation, marketing banners, presentations, and social media visual assets.",
      whyUsed: "Not every task requires hours inside complex design tools. Canva allows designers and students to whip up event banners, presentation slide decks, infographic resumes, and marketing posts in minutes.",
      whereUsed: "Digital marketing teams, startup founders, college student clubs, content creators, and social media managers.",
      mainFeatures: [
        "Massive Template Library: Over 500,000 professional templates for presentations, posters, and banners.",
        "Drag-and-Drop Editor: Intuitive graphic creation without steep learning curves.",
        "Brand Kit: Storing official brand colors, logos, and fonts for instant 1-click styling.",
        "AI Visual Tools (Magic Studio): AI image expansion, background removal, and text-to-image generation.",
        "High-Resolution Multi-Format Export: Exporting clean PNG, SVG, PDF Print, and MP4 animations."
      ],
      importantConcepts: [
        {
          title: "Visual Hierarchy in Graphic Design",
          desc: "Guiding the viewer's eye: Headline (biggest, boldest) -> Graphic/Visual hook -> Subtitle -> Call-to-Action button."
        },
        {
          title: "Resolution & Formats (Raster vs Vector)",
          desc: "Raster (PNG, JPG) made of pixels (blurs when zoomed); Vector (SVG, PDF) made of mathematical paths (infinitely crisp at any resolution)."
        },
        {
          title: "Asset Curation (Unsplash & Freepik)",
          desc: "Selecting royalty-free, high-quality professional photography and iconography that match brand tone."
        },
        {
          title: "Aspect Ratios for Social Media",
          desc: "16:9 for presentations/YouTube banners, 1:1 for Instagram square posts, 9:16 for mobile stories and reels."
        }
      ],
      howItWorks: "Canva runs inside the browser with cloud storage, rendering vector SVG elements and raster canvas layers and compiling them on cloud servers into optimized downloadable image formats.",
      stepByStep: [
        "Step 1: Open canva.com and choose a design format (e.g., Presentation 16:9 or Blog Banner).",
        "Step 2: Choose a modern minimalist template or start with a blank canvas.",
        "Step 3: Replace text, apply brand colors, and add graphic icons from the Elements tab.",
        "Step 4: Use AI tools (e.g. Background Remover) to clean up photos.",
        "Step 5: Click 'Share -> Download', choose PNG (for web) or PDF Print (for printing), and download."
      ],
      syntax: `// Recommended Graphic Design Workflow Checklist
1. Purpose: Who is the audience? What is the single call-to-action?
2. Dimensions: 1920x1080 (Desktop), 1200x630 (Social Sharing), 1080x1080 (Square).
3. Colors: Maximum 3 brand colors (Primary, Neutral, Accent).
4. Fonts: Maximum 2 font families (Heading + Body).
5. White Space: Keep at least 20% margin around edges; avoid clutter!
6. Export: PNG for web graphics, SVG for vector logos, PDF for documents.`,
      examples: [
        {
          title: "Creating a Tech Workshop Banner in Canva",
          code: `Canvas: 1200 x 630 px (Blog / Social Banner)
- Background: Deep navy blue with subtle gradient (#0f172a to #1e293b).
- Graphic Element: High-res laptop mock-up displaying code.
- Header (H1): "Free Full Stack Web Dev Bootcamp" (Inter Bold, 48px, White).
- Subheader: "Live Hands-on Projects & Career Guidance" (Inter Regular, 20px, Slate).
- Badge / CTA: Emerald Green Pill [ Register Now - Free ]`
        },
        {
          title: "Curating Companion Design Assets",
          code: `- Photography: Unsplash.com (Search: "modern coding laptop", "student learning")
- Color Palettes: Coolors.co (Generate and lock harmonious 5-color palettes)
- Icons: Feather Icons or Heroicons (Clean, open-source 24px stroke icons)`
        }
      ],
      practicalExamples: "Designing an eye-catching presentation slide deck for a college final year project demonstration, complete with custom charts, team member profile cards, and clean transition slides.",
      realWorldUsage: "Startups and marketing agencies create thousands of promotional social banners, email headers, and client case study slide decks weekly using Canva's brand kit collaboration tools.",
      importantPoints: [
        "Do not overcrowd your graphic with too much text; keep copy concise and punchy.",
        "Always maintain generous padding/margins around edges to prevent text from being cut off during social platform display.",
        "Ensure downloaded images use PNG with high resolution for crisp display on high-DPI smartphone screens."
      ],
      thingsToLearn: [
        "Canva interface, canvas sizing, and grid alignment tools",
        "Using the Elements library: shapes, frames, grids, vector graphics",
        "Using photo enhancement tools: background removal, filters, contrast adjustments",
        "Setting up and applying a consistent Brand Kit",
        "Exporting options: PNG, JPG, PDF Standard, PDF Print, SVG"
      ],
      miniPracticalTasks: [
        "Task 1: Design an attractive 16:9 banner for the 'Career Craft Learning Portal' in Canva.",
        "Task 2: Use an online tool like Remove.bg to remove the background from a portrait photo.",
        "Task 3: Generate a harmonious 5-color palette on Coolors.co and save the hex color codes."
      ]
    }
  ],
  practiceTest: {
    categoryTitle: "UI / UX Design",
    totalQuestions: 15,
    instructions: "Answer the following conceptual, design system, and user experience questions covering UI/UX Design technologies (Figma, Adobe XD, Wireframing & Prototyping, Color Theory & Typography, HTML/CSS Basics, Canva). Record your answers in your study workbook.",
    questions: [
      {
        id: 1,
        technology: "Figma",
        question: "Explain the difference between a Master Component and an Instance in Figma. What happens to child instances when a design change is made to the master component?"
      },
      {
        id: 2,
        technology: "Figma",
        question: "What is Auto Layout in Figma? Explain how Auto Layout properties (direction, padding, gap, and resizing options like 'Hug' vs 'Fill') mirror CSS Flexbox."
      },
      {
        id: 3,
        technology: "Figma",
        question: "What are Component Variants in Figma? How do component properties and variants simplify complex UI elements like buttons with multiple states?"
      },
      {
        id: 4,
        technology: "Adobe XD",
        question: "What is the 'Repeat Grid' feature in Adobe XD? Explain how it accelerates the creation of multi-item lists, catalogs, and card grids."
      },
      {
        id: 5,
        technology: "Adobe XD",
        question: "Describe how 'Auto-Animate' works in Adobe XD. What naming convention must layers follow on two connected artboards for auto-animation to transition smoothly?"
      },
      {
        id: 6,
        technology: "Wireframing & Prototyping",
        question: "Compare Low-Fidelity (Lo-Fi) Wireframes with High-Fidelity (Hi-Fi) Mockups. Why is it recommended to design low-fidelity wireframes strictly in grayscale?"
      },
      {
        id: 7,
        technology: "Wireframing & Prototyping",
        question: "What is Information Architecture (IA)? How does user journey mapping guide the structural layout of navigation menus and content hierarchies?"
      },
      {
        id: 8,
        technology: "Wireframing & Prototyping",
        question: "What is Usability Testing? Describe the steps an observer should follow when testing a clickable prototype with prospective users."
      },
      {
        id: 9,
        technology: "Color Theory & Typography",
        question: "Explain the '60-30-10 Rule' in UI design color distribution. Give an example color palette breakdown for an educational web application."
      },
      {
        id: 10,
        technology: "Color Theory & Typography",
        question: "What are the WCAG accessibility contrast ratio standards for normal text (AA vs AAA)? Why should UI designers avoid relying solely on color to communicate errors?"
      },
      {
        id: 11,
        technology: "Color Theory & Typography",
        question: "What is a Modular Typographic Scale? Explain why setting body text line-height (leading) to 1.5 (150%) improves readability over tight default line heights."
      },
      {
        id: 12,
        technology: "HTML & CSS Basics",
        question: "Describe the four layers of the CSS Box Model (Content, Padding, Border, Margin). How does understanding the box model improve design-to-code handoff between designers and engineers?"
      },
      {
        id: 13,
        technology: "HTML & CSS Basics",
        question: "What are CSS Media Queries? List three standard responsive breakpoint widths used when designing mobile-first websites."
      },
      {
        id: 14,
        technology: "HTML & CSS Basics",
        question: "How do browser DevTools (Inspect Element) help a UI/UX designer verify whether a live website matches the design specifications created in Figma?"
      },
      {
        id: 15,
        technology: "Canva & Visual Tools",
        question: "Explain the difference between a Raster image (PNG/JPG) and a Vector graphic (SVG). Why are logos and UI icons exported as SVGs rather than JPEGs?"
      }
    ]
  }
};
