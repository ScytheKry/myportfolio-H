/*
      CARA EDIT:
      1. Ubah data proyek di array `programmingProjects` dan `visualProjects`.
      2. Simpan screenshot di assets/images/ dan video portrait di assets/videos/.
      3. Ganti email dan link GitHub di bagian SITE CONFIG.
      4. Video milik sendiri/yang sudah mendapat izin lebih aman untuk ditampilkan.
    */

// SITE CONFIG — ganti dengan informasi milikmu.
const SITE_CONFIG = {
  email: "hello@example.com",
  github: "https://github.com/",
};

/* ================= SKILLS DATA ================= */

const skillData = {
  programming: [
    {
      name: "HTML",
      category: "01 / FRONTEND",
      description: "Web structure",
      image: "assets/images/html_logo.png",
    },
    {
      name: "CSS",
      category: "02 / FRONTEND",
      description: "Styling & layout",
      image: "assets/images/css_logo.png",
    },
    {
      name: "JavaScript",
      category: "03 / FRONTEND",
      description: "Interactions & logic",
      image: "assets/images/javascript_logo.png",
    },
    {
      name: "Vue / Vite",
      category: "04 / FRAMEWORK",
      description: "Frontend development",
      image: "assets/images/vue_logo.png",
    },
    {
      name: "PHP",
      category: "05 / BACKEND",
      description: "Server-side basics",
      image: "assets/images/php_logo.png",
    },
    {
      name: "MySQL",
      category: "06 / DATABASE",
      description: "Database basics",
      image: "assets/images/mysql_logo.png",
    },
    {
      name: "Git & GitHub",
      category: "07 / WORKFLOW",
      description: "Version control",
      image: "assets/images/git_logo.png",
    },
    {
      name: "Bootstrap",
      category: "08 / FRAMEWORK",
      description: "Prebuilt CSS components",
      image: "assets/images/bootstrapcss_logo.png",
    },
    {
      name: "Tailwind CSS",
      category: "09 / FRAMEWORK",
      description: "Utility-first CSS styling",
      image: "assets/images/tailwindcss_logo.png",
    },
    {
      name: "React.js",
      category: "10 / LIBRARY",
      description: "Component-based UI library",
      image: "assets/images/reactjs_logo.png",
    },
    {
      name: "Python",
      category: "11 / PROGRAMMING",
      description: "Component-based UI library",
      image: "assets/images/reactjs_logo.png",
    },
  ],

  others: [
    {
      name: "Photography",
      category: "01 / VISUAL",
      description: "Composition & framing",
      image: "assets/images/skills/photography.png",
    },
    {
      name: "Video Editing",
      category: "02 / VIDEO",
      description: "Editing & storytelling",
      image: "assets/images/skills/video-editing.png",
    },
    {
      name: "Figma",
      category: "03 / DESIGN",
      description: "UI planning",
      image: "assets/images/skills/figma.png",
    },
    {
      name: "Content Creation",
      category: "04 / CONTENT",
      description: "Digital content",
      image: "assets/images/skills/content-creation.png",
    },
    {
      name: "Digital Business",
      category: "05 / BUSINESS",
      description: "Product & promotion",
      image: "assets/images/skills/business.png",
    },
  ],
};

/* ================= RENDER SKILLS ================= */

function renderSkills(skills, containerId) {
  const container = document.getElementById(containerId);

  if (!container) return;

  container.innerHTML = skills
    .map(
      (skill) => `
    <article class="skill-card">
      <div class="skill-logo-box">
        <img
          class="skill-logo"
          src="${skill.image}"
          alt="${skill.name} logo"
          loading="lazy"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';"
        >
        <span
          style="display:none; width:100%; height:100%; place-items:center;
          color:#17221d; font-size:12px; font-weight:700;"
          aria-hidden="true"
        >
          ${skill.name.slice(0, 3).toUpperCase()}
        </span>
      </div>

      <p class="mono text-[9px] uppercase tracking-wider text-lime">
        ${skill.category}
      </p>

      <h4 class="mt-2 font-semibold text-sm sm:text-base">
        ${skill.name}
      </h4>

      <p class="mt-1 text-xs leading-5 text-white/50">
        ${skill.description}
      </p>
    </article>
  `,
    )
    .join("");
}

renderSkills(skillData.programming, "programming-skills");
renderSkills(skillData.others, "other-skills");

/* ================= SCROLL BUTTONS ================= */

document.querySelectorAll(".skill-scroll-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;
    const direction = Number(button.dataset.direction);
    const track = document.getElementById(targetId);

    if (!track) return;

    // Geser sekitar satu kartu setiap tombol ditekan
    const card = track.querySelector(".skill-card");
    const gap = 16;
    const distance = card ? card.getBoundingClientRect().width + gap : 180;

    track.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  });
});

// Preview programming: isi image dengan path screenshot, demo/source dengan URL sebenarnya.
const programmingProjects = [
  {
    title: "Weather App",
    category: "API · JavaScript",
    description:
      "Aplikasi cuaca sederhana yang mengambil data dari weather API dan menampilkan kondisi berdasarkan lokasi.",
    image: "assets/images/weather-app.jpg",
    imageAlt: "Screenshot Weather App",
    demo: "#",
    source: "https://github.com/",
    status: "Personal project",
    accent: "from-sky-200 to-blue-500",
  },
  {
    title: "Calculator",
    category: "JavaScript · UI",
    description:
      "Kalkulator responsif untuk operasi aritmetika dasar, dengan fokus pada interaksi dan tampilan yang jelas.",
    image: "assets/images/calculator.jpg",
    imageAlt: "Screenshot Calculator",
    demo: "#",
    source: "https://github.com/",
    status: "Personal project",
    accent: "from-orange-200 to-rose-400",
  },
  {
    title: "Login Form View",
    category: "Web · UI design",
    description:
      "Konsep tampilan form login dengan desain UI yang modern dan pengalaman pengguna yang baik.",
    image: "assets/images/login-form.jpg",
    imageAlt: "Screenshot Login Form",
    demo: "#",
    source: "https://github.com/",
    status: "Concept project",
    accent: "from-emerald-200 to-teal-600",
  },
];

// VIDEO PORTRAIT — gunakan file lokal MP4/WebM. Rasio 9:16 dijaga oleh CSS.
const visualProjects = [
  {
    title: "Product Stories",
    type: "Business / Product video",
    description:
      "Video portrait untuk menampilkan produk, detail, dan suasana brand secara singkat.",
    video: "assets/videos/product-story.mp4",
    poster: "assets/images/product-story-poster.jpg",
    tag: "PRODUCT",
  },
  {
    title: "Behind the Scene",
    type: "Business / Process",
    description:
      "Cuplikan proses kerja, pengemasan, persiapan pesanan, atau aktivitas di balik sebuah usaha.",
    video: "assets/videos/behind-the-scenes.mp4",
    poster: "assets/images/behind-scenes-poster.jpg",
    tag: "PROCESS",
  },
  {
    title: "Visual Diary",
    type: "Photography / Reels",
    description:
      "Kumpulan visual portrait dengan fokus pada komposisi, warna, momen, dan storytelling.",
    video: "assets/videos/visual-diary.mp4",
    poster: "assets/images/visual-diary-poster.jpg",
    tag: "VISUAL",
  },
];

const $ = (selector, parent = document) => parent.querySelector(selector);
const escapeHTML = (value = "") =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char],
  );

function renderProgrammingProjects() {
  $("#programming-grid").innerHTML = programmingProjects
    .map(
      (project, index) => `
        <article class="project-card project-item reveal overflow-hidden rounded-3xl border border-line bg-white" data-kind="programming">
          <a href="${escapeHTML(project.demo)}" class="group relative block aspect-[16/10] overflow-hidden bg-gradient-to-br ${escapeHTML(project.accent)}" aria-label="Buka demo ${escapeHTML(project.title)}">
            <img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.imageAlt)}" loading="lazy" class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="absolute inset-0 hidden items-center justify-center p-6 text-center" style="display:none">
              <div><span class="mono text-[10px] uppercase tracking-[.2em] text-ink/60">PROJECT PREVIEW 0${index + 1}</span><p class="display mt-2 text-2xl font-semibold tracking-tight text-ink">${escapeHTML(project.title)}</p><p class="mt-1 text-xs text-ink/60">Tambahkan screenshot di assets/images/</p></div>
            </div>
            <span class="absolute left-3 top-3 rounded-full bg-paper/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-ink">${escapeHTML(project.status)}</span>
          </a>
          <div class="p-5">
            <p class="mono text-[10px] uppercase tracking-widest text-moss">${escapeHTML(project.category)}</p>
            <h4 class="display mt-2 text-xl font-semibold">${escapeHTML(project.title)}</h4>
            <p class="mt-2 min-h-[4.5rem] text-sm leading-6 text-muted">${escapeHTML(project.description)}</p>
            <div class="mt-5 flex flex-wrap gap-4 border-t border-line pt-4 text-xs font-semibold">
              <a href="${escapeHTML(project.demo)}" target="_blank" rel="noreferrer" class="underline underline-offset-4 hover:text-moss">Live preview ↗</a>
              <a href="${escapeHTML(project.source)}" target="_blank" rel="noreferrer" class="underline underline-offset-4 hover:text-moss">Source code ↗</a>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderVisualProjects() {
  $("#visual-grid").innerHTML = visualProjects
    .map(
      (project, index) => `
        <article class="project-card project-item reveal overflow-hidden rounded-3xl border border-line bg-white" data-kind="visual">
          <button type="button" class="video-open group relative block w-full overflow-hidden bg-[#DDE5D9] text-left" data-index="${index}" aria-label="Putar preview ${escapeHTML(project.title)}">
            <div class="video-thumb relative mx-auto aspect-[9/13] w-full max-w-[280px] overflow-hidden sm:aspect-[9/12]">
              <img src="${escapeHTML(project.poster)}" alt="" loading="lazy" class="absolute inset-0 h-full w-full object-cover" onerror="this.style.display='none';">
              <div class="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-ink/15 via-transparent to-ink/65 p-4 text-white">
                <div class="flex items-start justify-between"><span class="mono rounded-full border border-white/40 bg-ink/20 px-2.5 py-1 text-[9px] tracking-widest">${escapeHTML(project.tag)}</span><span class="text-xs">9:16</span></div>
                <div class="flex items-end justify-between"><span class="display max-w-[75%] text-2xl font-semibold leading-tight">${escapeHTML(project.title)}</span><span class="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-lime text-xl text-ink transition group-hover:scale-110">▶</span></div>
              </div>
            </div>
          </button>
          <div class="p-5">
            <p class="mono text-[10px] uppercase tracking-widest text-moss">${escapeHTML(project.type)}</p>
            <h4 class="display mt-2 text-xl font-semibold">${escapeHTML(project.title)}</h4>
            <p class="mt-2 text-sm leading-6 text-muted">${escapeHTML(project.description)}</p>
            <div class="mt-5 flex flex-wrap gap-4 border-t border-line pt-4 text-xs font-semibold">
              <button type="button" class="video-open underline underline-offset-4 hover:text-moss" data-index="${index}">Preview video ↗</button>
              <span class="text-muted">Portrait / 9:16</span>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

renderProgrammingProjects();
renderVisualProjects();
$("#year").textContent = new Date().getFullYear();
$("#email-link").href = `mailto:${SITE_CONFIG.email}`;
$("#github-link").href = SITE_CONFIG.github;

// Category filter: filters the project cards, works on mobile and desktop.
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document
      .querySelectorAll(".filter-btn")
      .forEach((btn) =>
        btn.setAttribute("aria-pressed", String(btn === button)),
      );
    document.querySelectorAll(".project-item").forEach((card) => {
      card.classList.toggle(
        "hidden",
        filter !== "all" && card.dataset.kind !== filter,
      );
    });
  });
});

// Mobile menu.
const menuToggle = $("#menu-toggle");
const mobileMenu = $("#mobile-menu");
menuToggle.addEventListener("click", () => {
  const isOpen = !mobileMenu.classList.contains("hidden");
  mobileMenu.classList.toggle("hidden", isOpen);
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.textContent = isOpen ? "☰" : "×";
});
mobileMenu.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  }),
);

// Accessible-ish video modal.
const modal = $("#video-modal");
const modalVideo = $("#modal-video");
function closeModal() {
  modalVideo.pause();
  modalVideo.removeAttribute("src");
  modalVideo.load();
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.classList.remove("modal-open");
}
document.addEventListener("click", (event) => {
  const trigger = event.target.closest(".video-open");
  if (!trigger) return;
  const project = visualProjects[Number(trigger.dataset.index)];
  if (!project) return;
  $("#modal-title").textContent = project.title;
  $("#modal-description").textContent = project.description;
  modalVideo.src = project.video;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.classList.add("modal-open");
  modalVideo.play().catch(() => {}); // Browser may require the user to press Play.
});
$("#modal-close").addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden"))
    closeModal();
});

// Subtle scroll reveal, with a fallback for browsers without IntersectionObserver.
const revealObserver =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08 },
      )
    : null;
document.querySelectorAll(".reveal").forEach((el) => {
  if (revealObserver) revealObserver.observe(el);
  else el.classList.add("visible");
});
