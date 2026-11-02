// Add a real, sanitized screenshot by replacing screenshot: null with
// { src: "assets/img/labs/example.png", alt: "Describe the actual evidence", caption: "What this screenshot verifies" }.
// Keep status and scope accurate when updating a project. Illustrations are not evidence.
const portfolioProjects = [
  { id: "directory", number: "01", type: "Isolated personal homelab", title: "Active Directory & Windows Server Homelab", summary: "Built a virtual Windows domain to practice account administration, security groups, shared-folder permissions, Group Policy, and troubleshooting. Verified targeted Control Panel restrictions using domain-joined test users and gpresult.", tools: "VirtualBox / Windows Server 2022 Evaluation / LAB.local", nodes: ["Domain controller", "Users & groups", "Windows client"],
    screenshot: { src: "assets/img/Project/active-directory-homelab/01-AD-OU-Structure.png", alt: "Active Directory Users and Computers showing the LAB.local domain tree with departmental OUs under Accounts (Finance, HR, IT, Nursing) and a Groups OU", caption: "AD OU structure — LAB.local domain on ABC-Hospital-DC01 (Windows Server 2022)" },
    tags: ["Active Directory", "Windows Server 2022", "Group Policy", "NTFS Permissions", "VirtualBox"],
    caseStudy: "ad-homelab.html",
    completed: ["Configured AD DS and DNS on Windows Server 2022; joined a Windows 7 isolated test client and verified domain sign-in.", "Created departmental OUs (Finance, HR, IT, Nursing), security groups, and user accounts; practiced password resets, unlocks, and access management.", "Configured shared folders with role-based NTFS permissions and a restricted Nursing Confidential subfolder with inheritance disabled.", "Deployed gpo-restricted-cpanel GPO with security filtering targeting ControlPanelRestricted group; verified with gpresult /r on both restricted (gpotest) and unrestricted (gpo-unrestricted) users.", "Troubleshot a GPO failure caused by missing Authenticated Users Read permission and verified the fix."],
    pending: "Lab complete. Evidence documented and published.", limit: "Personal learning lab only. The Windows 7 Professional 32-bit client is unsupported and kept isolated; it is not a recommended deployment." },
  { id: "network", number: "02", type: "Guided hands-on simulation", title: "Small Office Network", summary: "Exploring how addressing, VLANs, and routing connect a simulated office.", tools: "Cisco Packet Tracer / TCP/IP / VLANs / DHCP", nodes: ["Router", "Switch & VLANs", "Office clients"], screenshot: null,
    tags: ["Cisco Packet Tracer", "TCP/IP", "VLANs", "DHCP", "Networking"],
    completed: ["Built a simulated topology with routers, switches, and PCs.", "Practiced IP addressing, subnet masks, gateways, VLAN setup, trunking, router-on-a-stick routing, and DHCP pools per VLAN.", "Ran ping/connectivity tests and completed guided troubleshooting for DHCP, VLAN membership, gateways, and DNS."],
    pending: "Continuing to learn Cisco switch CLI and VLAN configuration; independent configuration proficiency is still developing.", limit: "Networking fundamentals in a simulator, not a physical deployment or enterprise network administration." },
  { id: "helpdesk", number: "03", type: "Simulated helpdesk training", title: "Structured Support Practice", summary: "Building a methodical approach to investigating issues and documenting support steps.", tools: "SysDesk / ServiceDesk Simulator / Troubleshooting", nodes: ["Understand", "Investigate", "Document"], screenshot: null,
    tags: ["Helpdesk", "Troubleshooting", "Documentation", "ServiceDesk"],
    completed: ["Practiced simulated support tickets and structured investigation/documentation.", "Worked through Windows performance, DNS/connectivity, DHCP/VLAN diagnostics, and user access/account scenarios."],
    pending: "Continuing practice in structured troubleshooting and clear technical documentation.", limit: "Training simulations, not employment or production ticketing experience. No ticket records, volumes, or professional outcomes are represented." }
];
const list = document.querySelector("#project-list");
if (list) for (const project of portfolioProjects) {
  const card = document.createElement("article");
  card.className = "project";
  card.id = project.id;

  // Build tag HTML if tags exist
  const tagHtml = project.tags
    ? `<div class="project-tags">${project.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}</div>`
    : "";

  // Build case study link if available
  const caseStudyHtml = project.caseStudy
    ? `<a class="case-study-link" href="${project.caseStudy}">View Case Study <span aria-hidden="true">↗</span></a>`
    : "";

  // Evidence note: shown only when no real screenshot
  const evidenceNote = project.screenshot
    ? ""
    : `<p class="evidence-note">Screenshots are not available yet. This illustration describes the topic; it does not verify the work.</p>`;

  card.innerHTML = `<figure class="project-visual ${project.id}"><div class="visual-top"><span>CONCEPT / ${project.number}</span><span aria-hidden="true">↗</span></div><div class="diagram" aria-hidden="true">${project.nodes.map((node, index) => `<div class="diagram-node"><span class="node-icon">${["▤", "⊞", "▣"][index]}</span><span>${node}</span></div>`).join('<span class="connector">↓</span>')}</div><figcaption>Concept illustration · not a screenshot</figcaption></figure><div class="project-copy"><p class="eyebrow">${project.number} / ${project.type}</p><h3>${project.title}</h3><p>${project.summary}</p>${tagHtml}<p class="tools">${project.tools}</p><details><summary>Explore scope &amp; progress <span aria-hidden="true">＋</span></summary><h4>Completed hands-on practice</h4><ul>${project.completed.map(item => `<li>${item}</li>`).join("")}</ul><h4>Ongoing learning / pending</h4><p>${project.pending}</p><h4>Scope &amp; limitations</h4><p>${project.limit}</p>${evidenceNote}</details>${caseStudyHtml}</div>`;

  if (project.screenshot) {
    const figure = card.querySelector("figure");
    figure.replaceChildren();
    const image = document.createElement("img");
    image.src = project.screenshot.src;
    image.alt = project.screenshot.alt;
    image.loading = "lazy";
    const caption = document.createElement("figcaption");
    caption.textContent = project.screenshot.caption;
    figure.append(image, caption);
  }
  list.append(card);
}

// The preference is optional: the toggle still works when storage is unavailable.
const themeToggle = document.querySelector('.theme-toggle');
const systemTheme = matchMedia('(prefers-color-scheme: dark)');
let explicitTheme = false;
try { explicitTheme = ['dark', 'light'].includes(localStorage.getItem('portfolio-theme')); } catch {}
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
}
applyTheme(document.documentElement.dataset.theme || (systemTheme.matches ? 'dark' : 'light'));
themeToggle.hidden = false;
themeToggle.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  explicitTheme = true;
  applyTheme(theme);
  try { localStorage.setItem('portfolio-theme', theme); } catch {}
});
systemTheme.addEventListener('change', event => {
  if (!explicitTheme) applyTheme(event.matches ? 'dark' : 'light');
});
