// Add a real, sanitized screenshot by replacing screenshot: null with
// { src: "assets/img/labs/example.png", alt: "Describe the actual evidence", caption: "What this screenshot verifies" }.
// Keep status and scope accurate when updating a project. Illustrations are not evidence.
const portfolioProjects = [
  { id: "directory", number: "01", type: "Isolated personal homelab", title: "Windows Server & Active Directory", summary: "Practicing identity, access, and Group Policy in a controlled virtual environment.", tools: "VirtualBox / Windows Server 2022 Evaluation / LAB.local", nodes: ["Domain controller", "Users & groups", "Windows client"], screenshot: null,
    completed: ["Configured AD DS and DNS; joined a Windows client and tested domain sign-in.", "Created users, security groups, and OUs; practiced password resets, unlocks, disabling, and onboarding/access scenarios.", "Tested departmental shared folders, role-based NTFS access, and a restricted Nursing subfolder.", "Applied a Control Panel restriction and checked it with gpupdate /force and gpresult /r; tested OU inheritance, Block Inheritance, and Enforced links."],
    pending: "GPO Security Filtering, the final AD troubleshooting assessment, final GPO cleanup, and final verification of the enforced state remain pending.", limit: "Personal learning lab only. The Windows 7 Professional 32-bit client is unsupported and kept isolated; it is not a recommended deployment." },
  { id: "network", number: "02", type: "Guided hands-on simulation", title: "Small Office Network", summary: "Exploring how addressing, VLANs, and routing connect a simulated office.", tools: "Cisco Packet Tracer / TCP/IP / VLANs / DHCP", nodes: ["Router", "Switch & VLANs", "Office clients"], screenshot: null,
    completed: ["Built a simulated topology with routers, switches, and PCs.", "Practiced IP addressing, subnet masks, gateways, VLAN setup, trunking, router-on-a-stick routing, and DHCP pools per VLAN.", "Ran ping/connectivity tests and completed guided troubleshooting for DHCP, VLAN membership, gateways, and DNS."],
    pending: "Continuing to learn Cisco switch CLI and VLAN configuration; independent configuration proficiency is still developing.", limit: "Networking fundamentals in a simulator, not a physical deployment or enterprise network administration." },
  { id: "helpdesk", number: "03", type: "Simulated helpdesk training", title: "Structured Support Practice", summary: "Building a methodical approach to investigating issues and documenting support steps.", tools: "SysDesk / ServiceDesk Simulator / Troubleshooting", nodes: ["Understand", "Investigate", "Document"], screenshot: null,
    completed: ["Practiced simulated support tickets and structured investigation/documentation.", "Worked through Windows performance, DNS/connectivity, DHCP/VLAN diagnostics, and user access/account scenarios."],
    pending: "Continuing practice in structured troubleshooting and clear technical documentation.", limit: "Training simulations, not employment or production ticketing experience. No ticket records, volumes, or professional outcomes are represented." }
];
const list = document.querySelector("#project-list");
for (const project of portfolioProjects) {
  const card = document.createElement("article");
  card.className = "project";
  card.id = project.id;
  // All copy comes from the local project data above; screenshot content is optional.
  card.innerHTML = `<figure class="project-visual ${project.id}"><div class="visual-top"><span>CONCEPT / ${project.number}</span><span aria-hidden="true">↗</span></div><div class="diagram" aria-hidden="true">${project.nodes.map((node, index) => `<div class="diagram-node"><span class="node-icon">${["▤", "⊞", "▣"][index]}</span><span>${node}</span></div>`).join('<span class="connector">↓</span>')}</div><figcaption>Concept illustration · not a screenshot</figcaption></figure><div class="project-copy"><p class="eyebrow">${project.number} / ${project.type}</p><h3>${project.title}</h3><p>${project.summary}</p><p class="tools">${project.tools}</p><details><summary>Explore scope & progress <span aria-hidden="true">＋</span></summary><h4>Completed hands-on practice</h4><ul>${project.completed.map(item => `<li>${item}</li>`).join("")}</ul><h4>Ongoing learning / pending</h4><p>${project.pending}</p><h4>Scope & limitations</h4><p>${project.limit}</p><p class="evidence-note">Screenshots are not available yet. This illustration describes the topic; it does not verify the work.</p></details></div>`;
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
