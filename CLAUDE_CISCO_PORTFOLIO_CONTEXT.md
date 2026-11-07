# Claude Implementation Brief: Cisco Small Office Network Portfolio Project

## Objective
Add a new, fully documented **Small Office Network Configuration and VLAN Segmentation** project to my existing IT Support portfolio. The project folder already contains evidence screenshots and a Cisco Packet Tracer `.pkt` source file. Inspect the actual repository and project folder before editing. Preserve the existing website design, responsive behavior, Active Directory homelab project, downloadable resume, and working navigation. Do not rebuild the website.

## Important workflow
1. Inspect the repository structure, existing project cards/case studies, image galleries, asset paths, and GitHub Pages deployment/base path configuration.
2. Locate the newly added Cisco project folder. Enumerate the actual image and `.pkt` filenames. Do not assume the example names below match the files. Use the files that actually exist. If an asset is missing, report it rather than inventing one.
3. Follow the same visual conventions and reusable components as the Active Directory homelab case study. Make the Cisco project the **second featured IT Support project**, after Active Directory.
4. Add a detailed case study and evidence gallery. Include a functional **Download Packet Tracer Project (.pkt)** link to the supplied file, with an appropriate download filename.
5. Test image rendering, links, mobile layout, and production build, especially on GitHub Pages with a repository subpath. Do not commit, push, or deploy without approval.

## Verified project context
This is a **personal, simulated networking lab in Cisco Packet Tracer**, not a production network deployment or paid IT role.

### Topology
- One Cisco 2811 router, one Cisco 2960 switch.
- Sales VLAN 10: two PCs, switch access ports Fa0/1 and Fa0/2.
- IT VLAN 20: two PCs, switch access ports Fa0/3 and Fa0/4.
- Admin VLAN 30: one PC and one network printer, switch access ports Fa0/5 and Fa0/6.
- Switch Gig0/1 is an active 802.1Q trunk. VLANs 1, 10, 20, and 30 are active and forwarding on the trunk.
- Router physical interface Fa0/0 is up; subinterfaces are up/up:
  - Fa0/0.10: `encapsulation dot1Q 10`, `192.168.1.1/24` (Sales gateway)
  - Fa0/0.20: `encapsulation dot1Q 20`, `192.168.2.1/24` (IT gateway)
  - Fa0/0.30: `encapsulation dot1Q 30`, `192.168.3.1/24` (Admin gateway)
- This is router-on-a-stick inter-VLAN routing.

### DHCP
- Configured DHCP pools for Sales, IT, and Admin on the router.
- Excluded `.1` through `.10` in each subnet.
- DHCP address assignment verified using `show ip dhcp binding` with six automatic bindings:
  - Sales: `192.168.1.12`, `192.168.1.13`
  - IT: `192.168.2.11`, `192.168.2.12`
  - Admin: `192.168.3.11`, `192.168.3.12`
- Router advertises corresponding gateway IPs. DNS server `8.8.8.8` was configured in the DHCP pool examples, but internet access and DNS resolution were **not tested**. Do not claim they work.

### Connectivity verification
- Ping from a Sales PC to IT VLAN address `192.168.2.11`: first test 3/4 responses, repeated test 4/4.
- Ping from a Sales PC to Admin VLAN address `192.168.3.11`: first test 3/4 responses, repeated test 4/4.
- Ping from a Sales PC to printer address `192.168.3.12`: first test 3/4 responses, repeated test 4/4.
- The initial first-packet timeout is consistent with ARP resolution in Packet Tracer but is not definitively diagnosed. State only that subsequent tests succeeded.
- These tests verify IP reachability to the tested devices. **Do not claim actual printing was tested** or that all possible VLAN-to-VLAN pairs were tested.

## Suggested project card
**Title:** Small Office Network Configuration and VLAN Segmentation
**Category:** Personal Project · Cisco Packet Tracer · 2026
**Short description:** Configured a simulated three-department office network with VLAN segmentation, 802.1Q trunking, router-on-a-stick routing, and DHCP. Verified cross-VLAN connectivity and network printer reachability using ping tests.
**Tags:** Cisco Packet Tracer, VLAN, DHCP, TCP/IP, 802.1Q, Inter-VLAN Routing, Cisco IOS
**Actions:** View Case Study; Download .pkt (where appropriate)

## Detailed case study outline
1. **Overview**: Purpose, simulated small office with Sales, IT, and Admin departments.
2. **Topology**: Actual network topology screenshot, hardware/devices, department mapping.
3. **Network design**: A small, readable table with VLAN IDs, department names, subnet, gateway, and access ports.
4. **Implementation**: VLAN creation and port assignment; trunk; router subinterfaces and 802.1Q; DHCP pools and exclusions.
5. **Verification and results**: Screenshots of `show vlan brief`, `show interfaces trunk`, `show ip interface brief`, relevant `show running-config`, `show ip dhcp binding`, Sales-to-IT ping, Sales-to-Admin ping, and printer reachability.
6. **Lessons learned**: Separation of layer 2 VLAN assignment from layer 3 routing, how trunking carries multiple VLANs, how DHCP distributes addresses per subnet, how to verify rather than assume connectivity.
7. **Evidence gallery**: Use actual screenshots with meaningful captions, descriptive alt text, responsive layout, and click-to-enlarge if already supported by the site. Keep screenshots readable, avoid excessive cropping.
8. **Download project**: Link to the actual `.pkt` file; explain that Cisco Packet Tracer is required to open it. Do not imply a live network demo.

## Expected screenshot categories and suggested filenames
The owner says the screenshots are already in the project folder. Locate the real files and map them by visual content or filenames. The following are only naming suggestions:
- `01-Network-Topology.png`
- `02-VLAN-Configuration.png`
- `03-Trunk-Configuration.png`
- `04A-Router-Subinterfaces.png`
- `04B-Router-Dot1Q-Configuration.png`
- `05-DHCP-Bindings.png`
- `06A-InterVLAN-Sales-to-IT.png`
- `06B-InterVLAN-Sales-to-Admin.png`
- `07-Network-Printer-Connectivity.png`

The `.pkt` file might be named `Small-Office-Network-VLAN-DHCP.pkt`, but **discover its actual filename**. If it is inside a `public` folder, use the site's correct base-path-aware URL. If not, move or copy it into the site's existing public downloadable assets location in a way consistent with the framework.

## Technical quality and truthfulness
- Preserve existing AD homelab project, personal vs academic project separation, resume PDF download, profile photo, and contact links.
- Prefer existing components, typography, colors, and responsive behavior. Avoid unrelated refactors.
- Use semantic headings, keyboard-accessible links, descriptive alt text, and readable image viewing.
- Ensure GitHub Pages subpath support. Root-relative `/images/...` and `/downloads/...` may break on project sites. Use the repo's configured base path or helper.
- Don't invent extra devices, screenshots, tests, security controls, production results, or measurable business impact.
- Avoid presenting this as real employment or a deployed office network.
- If the `.pkt` file isn't directly inspectable with available tools, link it and describe only the verified facts in this brief and the screenshots.

## Acceptance checklist
- Cisco project appears second among featured IT projects.
- Project card opens a case study.
- All actual screenshots load and have accurate captions.
- Network design table matches verified VLANs and gateway addresses.
- `.pkt` download works from the production base path.
- Existing AD case study, profile image, resume download, navigation, and other projects still work.
- Mobile layout is readable; build succeeds.
- Report changed files, exact image and `.pkt` paths, checks performed, and anything needing my confirmation.
- No deploy, commit, or push without my explicit instruction.

## Short task prompt to use with Claude
Read `CLAUDE_CISCO_PORTFOLIO_CONTEXT.md`. Inspect my existing portfolio repository and the Cisco project folder containing screenshots and a `.pkt` file. Implement the Cisco Small Office Network as the second featured IT project with a detailed case study, responsive evidence gallery, network configuration/results table, and a working `.pkt` download. Preserve the site's current design and all existing features. Verify asset paths and the production build, then report the changes. Do not commit, push, or deploy.
