export interface SyllabusModule {
  title: string;
  desc: string;
}

export interface SyllabusDetails {
  duration: string;
  level: string;
  summary: string;
  modules: SyllabusModule[];
  deliverable: string;
}

/**
 * Escapes special characters for PDF literal strings (parentheses and backslashes)
 */
function escapePdfText(str: string): string {
  return str.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

/**
 * Helper to wrap text into multiple lines given a max character length
 */
function wrapText(text: string, maxChars: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let currentWords: string[] = [];
  let currentLen = 0;

  for (const word of words) {
    if (currentLen + word.length + 1 > maxChars && currentWords.length > 0) {
      lines.push(currentWords.join(" "));
      currentWords = [word];
      currentLen = word.length;
    } else {
      currentWords.push(word);
      currentLen += word.length + (currentWords.length > 1 ? 1 : 0);
    }
  }

  if (currentWords.length > 0) {
    lines.push(currentWords.join(" "));
  }

  return lines;
}

/**
 * Generates an official, luxury A4 PDF document for the EBS Curriculum Monograph
 * completely client-side with zero external dependencies.
 */
export function buildSyllabusPdfBlob(
  programmeName: string,
  details: SyllabusDetails
): Blob {
  // A4 Standard Dimensions in Points (72 points = 1 inch)
  const W = 595.28;
  const H = 841.89;

  const ops: string[] = [];

  // 1. Full-page background (Warm subtle executive paper tint #F7FCFA)
  ops.push("q");
  ops.push("0.968 0.988 0.980 rg");
  ops.push(`0 0 ${W} ${H} re f`);

  // 2. Outer decorative architectural border (Deep Pine #002622, hairline)
  ops.push("0.004 0.243 0.216 RG 0.75 w");
  ops.push(`18 18 ${W - 36} ${H - 36} re S`);

  // 3. Header Banner Block (#002622 Deep Pine)
  ops.push("0.0 0.149 0.133 rg");
  ops.push(`22 ${H - 146} ${W - 44} 124 re f`);

  // 4. Gold Accent Rim (#FFEFB3 Butter Yellow)
  ops.push("1.0 0.937 0.702 rg");
  ops.push(`22 ${H - 149} ${W - 44} 3 re f`);

  // 5. Decorative Sovereign Crest Shield (Vector paths in Gold)
  ops.push("1.0 0.937 0.702 RG 1.5 w");
  const cx = W - 72;
  const cy = H - 80;
  // Shield contour
  ops.push(`${cx - 18} ${cy + 22} m ${cx + 18} ${cy + 22} l ${cx + 18} ${cy + 2} l ${cx} ${cy - 20} l ${cx - 18} ${cy + 2} l h S`);
  // Inner crest geometry
  ops.push(`${cx - 11} ${cy + 13} m ${cx} ${cy} l ${cx + 11} ${cy + 13} l S`);
  ops.push(`${cx} ${cy} m ${cx} ${cy - 13} l S`);
  ops.push(`${cx - 7} ${cy - 5} m ${cx + 7} ${cy - 5} l S`);

  // 6. Header Typography
  // Monograph Watermark
  ops.push("BT /F1 8.5 Tf 1.0 0.937 0.702 rg");
  ops.push(`38 ${H - 46} Td`);
  ops.push(`(${escapePdfText("ENTREPRENEUR BUSINESS SCHOOL (EBS)  |  OFFICIAL ACADEMIC DOSSIER")}) Tj ET`);

  // Programme Name
  ops.push("BT /F1 20 Tf 1 1 1 rg");
  ops.push(`38 ${H - 74} Td`);
  ops.push(`(${escapePdfText(programmeName)}) Tj ET`);

  // Level & Duration
  ops.push("BT /F2 10 Tf 0.612 0.820 0.780 rg"); // #9cd1c7
  ops.push(`38 ${H - 96} Td`);
  ops.push(`(${escapePdfText(`${details.level}   *   ${details.duration}`)}) Tj ET`);

  // Alliance Charter Tag
  ops.push("BT /F1 8.5 Tf 1.0 0.937 0.702 rg");
  ops.push(`38 ${H - 118} Td`);
  ops.push(`(${escapePdfText("In Alliance with 3G IRPS & Mission Malayalapuram 2050")}) Tj ET`);

  // 7. Executive Pedagogical Objective Box (#EBF6F2)
  const objY = H - 215;
  ops.push("0.922 0.965 0.949 rg");
  ops.push(`38 ${objY} ${W - 76} 55 re f`);
  ops.push("0.004 0.243 0.216 RG 0.75 w");
  ops.push(`38 ${objY} ${W - 76} 55 re S`);

  ops.push("BT /F1 8.5 Tf 0.412 0.369 0.184 rg"); // #695e2f
  ops.push(`50 ${objY + 38} Td`);
  ops.push(`(${escapePdfText("EXECUTIVE PEDAGOGICAL OBJECTIVE")}) Tj ET`);

  const summaryLines = wrapText(details.summary, 88);
  for (let idx = 0; idx < Math.min(summaryLines.length, 2); idx++) {
    ops.push("BT /F2 8.5 Tf 0.075 0.114 0.110 rg");
    ops.push(`50 ${objY + 22 - idx * 12} Td`);
    ops.push(`(${escapePdfText(summaryLines[idx])}) Tj ET`);
  }

  // 8. Core Curricular Modules Section
  const modHdrY = objY - 20;
  ops.push("BT /F1 10 Tf 0.412 0.369 0.184 rg");
  ops.push(`38 ${modHdrY} Td`);
  ops.push(`(${escapePdfText("CORE CURRICULAR MODULES (4 TRACK SPECIFIC DISCIPLINES)")}) Tj ET`);

  let cardY = modHdrY - 8;
  for (let i = 0; i < details.modules.length; i++) {
    const mod = details.modules[i];
    const boxH = 52;
    cardY -= boxH + 8;

    // Card white background
    ops.push("1 1 1 rg");
    ops.push(`38 ${cardY} ${W - 76} ${boxH} re f`);

    // Card outline
    ops.push("0.753 0.784 0.773 RG 0.5 w");
    ops.push(`38 ${cardY} ${W - 76} ${boxH} re S`);

    // Numeric badge
    ops.push("0.004 0.243 0.216 rg");
    ops.push(`48 ${cardY + boxH - 24} 22 16 re f`);
    ops.push("BT /F1 8.5 Tf 1.0 0.937 0.702 rg");
    ops.push(`52 ${cardY + boxH - 19} Td`);
    ops.push(`(${String(i + 1).padStart(2, "0")}) Tj ET`);

    // Module Title
    ops.push("BT /F1 11 Tf 0.0 0.149 0.133 rg");
    ops.push(`78 ${cardY + boxH - 20} Td`);
    ops.push(`(${escapePdfText(mod.title)}) Tj ET`);

    // Module Description (Wrapped)
    const descLines = wrapText(mod.desc, 84);
    for (let dIdx = 0; dIdx < Math.min(descLines.length, 2); dIdx++) {
      ops.push("BT /F2 8.5 Tf 0.251 0.286 0.275 rg");
      ops.push(`78 ${cardY + 16 - dIdx * 11} Td`);
      ops.push(`(${escapePdfText(descLines[dIdx])}) Tj ET`);
    }
  }

  // 9. Capstone Deliverable Card
  const capY = cardY - 68;
  ops.push("0.945 0.988 0.973 rg");
  ops.push(`38 ${capY} ${W - 76} 56 re f`);
  ops.push("0.004 0.243 0.216 RG 1.5 w");
  ops.push(`38 ${capY} ${W - 76} 56 re S`);

  ops.push("BT /F1 8.5 Tf 0.004 0.243 0.216 rg");
  ops.push(`50 ${capY + 38} Td`);
  ops.push(`(${escapePdfText("CAPSTONE DELIVERABLE & VALIDATION OUTPUT")}) Tj ET`);

  const delivLines = wrapText(details.deliverable, 88);
  for (let dIdx = 0; dIdx < Math.min(delivLines.length, 2); dIdx++) {
    ops.push("BT /F2 8.5 Tf 0.075 0.114 0.110 rg");
    ops.push(`50 ${capY + 22 - dIdx * 11} Td`);
    ops.push(`(${escapePdfText(delivLines[dIdx])}) Tj ET`);
  }

  // 10. Academic Validation & Certification Seals
  const certY = capY - 62;
  // Left: Accreditation
  ops.push("BT /F1 8 Tf 0.004 0.243 0.216 rg");
  ops.push(`38 ${certY} Td`);
  ops.push(`(${escapePdfText("ACADEMIC COHORT VALIDATION & PEDAGOGY")}) Tj ET`);

  ops.push("BT /F2 7.5 Tf 0.251 0.286 0.275 rg");
  ops.push(`38 ${certY - 12} Td`);
  ops.push(`(${escapePdfText("Certified by EBS Academic Board & 3G IRPS Policy Secretariat.")}) Tj ET`);
  ops.push(`38 ${certY - 22} Td`);
  ops.push(`(${escapePdfText("Monograph Reference: EBS-MM2050-ACAD-7892  *  Synchronized Cohort Accreditation")}) Tj ET`);

  // Right: Registry
  ops.push("BT /F1 8 Tf 0.004 0.243 0.216 rg");
  ops.push(`340 ${certY} Td`);
  ops.push(`(${escapePdfText("OFFICIAL REGISTRY CERTIFICATION")}) Tj ET`);

  ops.push("BT /F2 7.5 Tf 0.251 0.286 0.275 rg");
  ops.push(`340 ${certY - 12} Td`);
  ops.push(`(${escapePdfText("Official Registry: registrar@ebs-institution.org")}) Tj ET`);
  ops.push(`340 ${certY - 22} Td`);
  ops.push(`(${escapePdfText("Mission Malayalapuram 2050 Sovereign Innovation Corridor")}) Tj ET`);

  // 11. Institutional Bottom Bar (#002622 Deep Pine)
  ops.push("0.0 0.149 0.133 rg");
  ops.push(`22 22 ${W - 44} 24 re f`);
  ops.push("BT /F2 7.5 Tf 0.612 0.820 0.780 rg");
  ops.push(`38 30 Td`);
  ops.push(`(${escapePdfText("(c) 2025 Entrepreneur Business School (EBS). All Institutional Rights Reserved. In Alliance with 3G IRPS & Mission Malayalapuram 2050.")}) Tj ET`);

  ops.push("Q");

  const streamContent = ops.join("\n");
  const encoder = new TextEncoder();
  const streamBytes = encoder.encode(streamContent);

  // Assemble PDF Objects
  const obj1 = encoder.encode("<< /Type /Catalog /Pages 2 0 R >>");
  const obj2 = encoder.encode("<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
  const obj3 = encoder.encode(
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H}] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>`
  );
  const obj4 = encoder.encode("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
  const obj5 = encoder.encode("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  const obj6Header = encoder.encode(`<< /Length ${streamBytes.length} >>\nstream\n`);
  const obj6Footer = encoder.encode("\nendstream");

  const obj6 = new Uint8Array(obj6Header.length + streamBytes.length + obj6Footer.length);
  obj6.set(obj6Header, 0);
  obj6.set(streamBytes, obj6Header.length);
  obj6.set(obj6Footer, obj6Header.length + streamBytes.length);

  const objects = [obj1, obj2, obj3, obj4, obj5, obj6];

  // Build binary PDF with exact xref byte offsets
  const parts: Uint8Array[] = [];
  let currentOffset = 0;

  const headerBytes = encoder.encode("%PDF-1.4\n%\xe2\xe3\xcf\xd3\n");
  parts.push(headerBytes);
  currentOffset += headerBytes.length;

  const offsets: number[] = [0];
  for (let i = 0; i < objects.length; i++) {
    offsets.push(currentOffset);
    const objHeader = encoder.encode(`${i + 1} 0 obj\n`);
    const objFooter = encoder.encode("\nendobj\n");

    parts.push(objHeader);
    parts.push(objects[i]);
    parts.push(objFooter);

    currentOffset += objHeader.length + objects[i].length + objFooter.length;
  }

  const xrefOffset = currentOffset;
  let xrefStr = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i <= objects.length; i++) {
    xrefStr += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }
  xrefStr += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  const xrefBytes = encoder.encode(xrefStr);
  parts.push(xrefBytes);

  return new Blob(parts as unknown as BlobPart[], { type: "application/pdf" });
}

/**
 * Triggers native browser download of the generated PDF file
 */
export function downloadSyllabusPdf(
  programmeName: string,
  details: SyllabusDetails
): void {
  const blob = buildSyllabusPdfBlob(programmeName, details);
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  const sanitizedName = programmeName.replace(/\s+/g, "_");
  link.download = `EBS_${sanitizedName}_Syllabus_2025.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

