import React, { useState } from "react";
import "./LearningPath.css";

export default function StudyMaterialModal({ isOpen, onClose, categoryData, activeTech }) {
  const [copied, setCopied] = useState(false);
  const [downloadMode, setDownloadMode] = useState("current"); // "current" or "all"

  if (!isOpen || !categoryData) return null;

  // Generate offline HTML document
  const handleDownloadHtml = () => {
    const isSingle = downloadMode === "current" && activeTech;
    const title = isSingle
      ? `${activeTech.name} - Study Guide`
      : `${categoryData.title} - Complete Learning Path`;

    const contentHtml = isSingle
      ? `
        <div class="tech-sheet">
          <h1>${activeTech.name}</h1>
          <p class="tagline"><em>${activeTech.tagline}</em></p>
          <hr />
          <h2>1. Beginner Explanation</h2>
          <p>${activeTech.beginnerFriendly}</p>
          <h2>2. What is it?</h2>
          <p>${activeTech.whatIsIt}</p>
          <h2>3. Why is it used?</h2>
          <p>${activeTech.whyUsed}</p>
          <h2>4. Where is it used?</h2>
          <p>${activeTech.whereUsed}</p>
          <h2>5. How it Works</h2>
          <p>${activeTech.howItWorks}</p>
          <h2>6. Step-by-Step Learning Guide</h2>
          <ol>
            ${activeTech.stepByStep.map((s) => `<li>${s}</li>`).join("")}
          </ol>
          <h2>7. Code Syntax &amp; Usage</h2>
          <pre><code>${activeTech.syntax.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>
          <h2>8. Real-World Applications</h2>
          <p>${activeTech.realWorldUsage}</p>
          <h2>9. Things Students Should Learn</h2>
          <ul>
            ${activeTech.thingsToLearn.map((t) => `<li>${t}</li>`).join("")}
          </ul>
          <h2>10. Mini Practical Tasks</h2>
          <ul>
            ${activeTech.miniPracticalTasks.map((task) => `<li>${task}</li>`).join("")}
          </ul>
        </div>
      `
      : `
        <h1>${categoryData.title} - Complete IT Learning Guide</h1>
        <p><strong>Target Role:</strong> ${categoryData.role}</p>
        <p>${categoryData.summary}</p>
        <hr />
        ${categoryData.technologies
          .map(
            (tech, idx) => `
          <div class="tech-sheet" style="page-break-after: always; margin-bottom: 2rem;">
            <h2>Technology ${idx + 1}: ${tech.name}</h2>
            <p><em>${tech.tagline}</em></p>
            <h3>What is it?</h3>
            <p>${tech.whatIsIt}</p>
            <h3>Why is it used?</h3>
            <p>${tech.whyUsed}</p>
            <h3>How it works:</h3>
            <p>${tech.howItWorks}</p>
            <h3>Code Syntax:</h3>
            <pre><code>${tech.syntax.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>
            <h3>Practical Tasks:</h3>
            <ul>${tech.miniPracticalTasks.map((t) => `<li>${t}</li>`).join("")}</ul>
          </div>
        `
          )
          .join("")}
        <hr />
        <h2>${categoryData.practiceTest.categoryTitle} - Practice Test (Questions Only)</h2>
        <p><em>${categoryData.practiceTest.instructions}</em></p>
        <ol>
          ${categoryData.practiceTest.questions
            .map((q) => `<li><strong>[${q.technology}]</strong> ${q.question}</li><br/>`)
            .join("")}
        </ol>
      `;

    const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title} | Career Craft</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.6; color: #1e293b; max-width: 850px; margin: 40px auto; padding: 20px; }
    h1 { color: #1e3a8a; border-bottom: 2px solid #2563eb; padding-bottom: 8px; }
    h2 { color: #0f172a; margin-top: 24px; }
    h3 { color: #2563eb; }
    pre { background: #0f172a; color: #f8fafc; padding: 16px; border-radius: 8px; overflow-x: auto; font-size: 14px; }
    code { font-family: monospace; }
    ul, ol { padding-left: 20px; }
    li { margin-bottom: 6px; }
    .tagline { color: #2563eb; font-size: 16px; }
    @media print { body { max-width: 100%; margin: 0; } pre { background: #f1f5f9; color: #000; border: 1px solid #ccc; } }
  </style>
</head>
<body>
  <div style="text-align: right; font-size: 12px; color: #64748b;">Career Craft Student Offline Study Resource &bull; 2026</div>
  ${contentHtml}
</body>
</html>`;

    const blob = new Blob([fullHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title.toLowerCase().replace(/[^a-z0-9]/g, "-")}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Copy Markdown
  const handleCopyMarkdown = () => {
    if (!activeTech) return;
    const md = `# ${activeTech.name} - Career Craft Study Notes
**Tagline:** ${activeTech.tagline}

## 1. What is it?
${activeTech.whatIsIt}

## 2. Why is it used?
${activeTech.whyUsed}

## 3. Where is it used?
${activeTech.whereUsed}

## 4. How it Works
${activeTech.howItWorks}

## 5. Step-by-Step Learning Guide
${activeTech.stepByStep.map((s, i) => `${i + 1}. ${s}`).join("\n")}

## 6. Code Syntax
\`\`\`
${activeTech.syntax}
\`\`\`

## 7. Things to Learn
${activeTech.thingsToLearn.map((t) => `- ${t}`).join("\n")}

## 8. Mini Practical Tasks
${activeTech.miniPracticalTasks.map((m) => `- ${m}`).join("\n")}
`;

    navigator.clipboard.writeText(md).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  // Print PDF Trigger
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="lp-modal-backdrop" onClick={onClose}>
      <div className="lp-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="lp-modal-header">
          <h3 className="lp-modal-title">
            <span>📚</span> Study Material &amp; Offline PDF Options
          </h3>
          <button className="lp-modal-close-btn" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>

        <div className="lp-modal-body">
          <p style={{ color: "var(--lp-text-muted)", marginBottom: "1.25rem", fontSize: "0.95rem" }}>
            Students can study offline or download printable study material for <strong>{categoryData.title}</strong>.
            Choose your preferred export option below:
          </p>

          <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontWeight: 600 }}>
              <input
                type="radio"
                name="scope"
                checked={downloadMode === "current"}
                onChange={() => setDownloadMode("current")}
              />
              Current Topic Only ({activeTech ? activeTech.name : "Selected Topic"})
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontWeight: 600 }}>
              <input
                type="radio"
                name="scope"
                checked={downloadMode === "all"}
                onChange={() => setDownloadMode("all")}
              />
              Complete Category ({categoryData.title} - All {categoryData.technologies.length} Techs + Practice Test)
            </label>
          </div>

          <div className="lp-study-download-cards">
            {/* Card 1: Browser Print to PDF */}
            <div className="lp-study-card">
              <span className="lp-study-card-icon">🖨️</span>
              <h4>Print / Save as PDF</h4>
              <p>Uses browser print preview to generate a clean, formatted PDF without sidebars or navigation bars.</p>
              <button className="lp-study-card-btn" onClick={handlePrint}>
                Open Print / Save PDF
              </button>
            </div>

            {/* Card 2: Offline HTML file */}
            <div className="lp-study-card">
              <span className="lp-study-card-icon">💾</span>
              <h4>Download Offline HTML</h4>
              <p>Self-contained HTML study file with zero dependencies. Open and read anytime with no internet required.</p>
              <button className="lp-study-card-btn" onClick={handleDownloadHtml}>
                Download .HTML File
              </button>
            </div>

            {/* Card 3: Copy Markdown */}
            <div className="lp-study-card">
              <span className="lp-study-card-icon">📋</span>
              <h4>Copy Markdown Notes</h4>
              <p>Copy formatted markdown notes directly to clipboard for Notion, Obsidian, or VS Code note-taking.</p>
              <button className="lp-study-card-btn" onClick={handleCopyMarkdown} style={{ background: copied ? "var(--lp-success)" : "var(--lp-primary)" }}>
                {copied ? "✓ Copied to Clipboard!" : "Copy Markdown"}
              </button>
            </div>
          </div>

          <div style={{ background: "var(--lp-primary-light)", padding: "1rem", borderRadius: "8px", border: "1px solid #bfdbfe", fontSize: "0.88rem", color: "#1e3a8a" }}>
            <strong>💡 Student Offline Tip:</strong> In Google Chrome, Microsoft Edge, or Safari, clicking <em>"Print / Save as PDF"</em> lets you select <strong>Destination: Save as PDF</strong> to generate an offline study booklet directly to your desktop or mobile files.
          </div>
        </div>

        <div className="lp-modal-footer">
          <span style={{ fontSize: "0.85rem", color: "var(--lp-text-muted)" }}>
            Career Craft Learning Path &bull; Free Student Education Resource
          </span>
          <button
            onClick={onClose}
            style={{
              padding: "0.55rem 1.25rem",
              borderRadius: "6px",
              border: "1px solid var(--lp-border)",
              background: "#ffffff",
              cursor: "pointer",
              fontWeight: 600,
              color: "var(--lp-text-body)"
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
