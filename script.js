document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    zh: {
      title: "FileExtractor - 智能文件内容提取工具",
      description: "FileExtractor 帮助你快速提取文件中的关键内容，支持高效整理、导出与复用。",
      "nav.features": "功能",
      "nav.workflow": "流程",
      "nav.screenshots": "截图",
      "nav.video": "视频",
      "nav.download": "立即体验",
      "hero.eyebrow": "FOR MACOS PRODUCTIVITY",
      "hero.title": "把繁琐的文件提取工作，压缩成几秒",
      "hero.desc": "从选择目录、筛选类型到提取结果预览，<br />FileExtractor 让你的文件处理流程更快、更清晰。",
      "hero.primary": "观看演示",
      "hero.secondary": "查看界面",
      "hero.panelAlt": "FileExtractor 主界面截图",
      "hero.metric1.title": "清晰步骤",
      "hero.metric1.desc": "从文件夹到结果一目了然",
      "hero.metric2.title": "提取直达",
      "hero.metric2.desc": "结果即时预览，便于后续处理",
      "features.title": "核心能力",
      "features.subtitle": "为高频文件处理场景设计的提取体验",
      "features.card1.title": "多类型筛选",
      "features.card1.desc": "按文件类型快速定位目标内容，减少人工筛查时间。",
      "features.card2.title": "结果集中展示",
      "features.card2.desc": "提取后的内容集中在统一视图，复制和复核更高效。",
      "features.card3.title": "流程反馈明确",
      "features.card3.desc": "关键状态清晰可见，降低误操作和重复尝试。",
      "features.card4.title": "轻量上手",
      "features.card4.desc": "界面直观，几乎不需要学习成本即可投入日常工作。",
      "workflow.title": "三步完成提取",
      "workflow.step1.title": "选择文件夹",
      "workflow.step1.desc": "指定待处理目录，快速建立任务范围。",
      "workflow.step2.title": "选择文件类型",
      "workflow.step2.desc": "按目标内容过滤文件，减少无效处理。",
      "workflow.step3.title": "查看提取结果",
      "workflow.step3.desc": "立即预览输出内容，直接用于下一步工作。",
      "screens.title": "应用截图",
      "screens.subtitle": "点击任意截图可放大查看细节",
      "screens.caption1": "主界面",
      "screens.caption2": "选择文件夹后",
      "screens.caption3": "选择文件类型 1",
      "screens.caption4": "选择文件类型 2",
      "screens.caption5": "文件提取结果",
      "screens.alt1": "FileExtractor 主界面",
      "screens.alt2": "选择文件夹后的界面",
      "screens.alt3": "选择文件类型界面 1",
      "screens.alt4": "选择文件类型界面 2",
      "screens.alt5": "文件提取结果界面",
      "video.title": "操作演示视频",
      "video.subtitle": "完整展示从选择到提取结果的流程",
      "video.fallback": "你的浏览器不支持视频播放。",
      "download.title": "准备好提升你的文件处理效率了吗？",
      "download.desc": "现在就通过演示页全面了解 FileExtractor 的工作流与界面体验。",
      "download.cta": "返回顶部继续浏览",
      "footer.rights": "版权所有。"
    },
    en: {
      title: "FileExtractor - Smart File Content Extraction Tool",
      description: "FileExtractor helps you pull key content from files fast, with a cleaner workflow for review and reuse.",
      "nav.features": "Features",
      "nav.workflow": "Workflow",
      "nav.screenshots": "Screenshots",
      "nav.video": "Video",
      "nav.download": "Try Now",
      "hero.eyebrow": "FOR MACOS PRODUCTIVITY",
      "hero.title": "Turn tedious file extraction into a few seconds",
      "hero.desc": "From folder selection and file-type filtering to result preview,<br />FileExtractor keeps your workflow fast and clear.",
      "hero.primary": "Watch Demo",
      "hero.secondary": "View UI",
      "hero.panelAlt": "FileExtractor main interface",
      "hero.metric1.title": "Clear Steps",
      "hero.metric1.desc": "From folder to result in one clear flow",
      "hero.metric2.title": "Instant Output",
      "hero.metric2.desc": "Preview extracted content immediately",
      "features.title": "Core Capabilities",
      "features.subtitle": "Built for high-frequency file processing tasks",
      "features.card1.title": "Type-Based Filtering",
      "features.card1.desc": "Locate target content by file type and cut manual screening time.",
      "features.card2.title": "Centralized Results",
      "features.card2.desc": "All extracted content is presented in one unified view.",
      "features.card3.title": "Clear Process Feedback",
      "features.card3.desc": "See each key step clearly and avoid repeated attempts.",
      "features.card4.title": "Quick to Adopt",
      "features.card4.desc": "An intuitive interface with almost zero learning overhead.",
      "workflow.title": "Extract in Three Steps",
      "workflow.step1.title": "Select Folder",
      "workflow.step1.desc": "Define the target directory and scope instantly.",
      "workflow.step2.title": "Choose File Types",
      "workflow.step2.desc": "Filter by desired file types for efficient processing.",
      "workflow.step3.title": "Review Results",
      "workflow.step3.desc": "Preview extracted output and move to next actions quickly.",
      "screens.title": "Interface Screenshots",
      "screens.subtitle": "Click any screenshot to zoom in",
      "screens.caption1": "Main Dashboard",
      "screens.caption2": "After Folder Selection",
      "screens.caption3": "File Type Selection 1",
      "screens.caption4": "File Type Selection 2",
      "screens.caption5": "Extraction Result",
      "screens.alt1": "FileExtractor main dashboard",
      "screens.alt2": "Interface after selecting folder",
      "screens.alt3": "File type selection screen one",
      "screens.alt4": "File type selection screen two",
      "screens.alt5": "Extraction result screen",
      "video.title": "Product Demo Video",
      "video.subtitle": "See the full flow from selection to extraction output",
      "video.fallback": "Your browser does not support video playback.",
      "download.title": "Ready to speed up your file processing?",
      "download.desc": "Explore the workflow and interface through this bilingual demo page.",
      "download.cta": "Back to Top",
      "footer.rights": "All rights reserved."
    }
  };

  const langToggle = document.getElementById("langToggle");
  const langLabel = document.getElementById("langLabel");
  const metaDesc = document.querySelector('meta[name="description"]');

  let currentLang = localStorage.getItem("fileextractor-lang");
  if (!currentLang) {
    currentLang = navigator.language && navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
  }

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("fileextractor-lang", lang);

    const dict = translations[lang] || translations.zh;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = dict.title;
    if (metaDesc) {
      metaDesc.setAttribute("content", dict.description);
    }

    langLabel.textContent = lang === "zh" ? "EN" : "中文";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && Object.prototype.hasOwnProperty.call(dict, key)) {
        if (el.getAttribute("data-i18n-html") === "true") {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (key && Object.prototype.hasOwnProperty.call(dict, key)) {
        el.setAttribute("alt", dict[key]);
      }
    });
  }

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      applyLanguage(currentLang === "zh" ? "en" : "zh");
    });
  }

  applyLanguage(currentLang);

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const navbar = document.getElementById("navbar");
  const links = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("header[id], section[id]");

  function updateNavState() {
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 18);
    }

    const pos = window.scrollY + 120;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute("id");
      if (!id) return;

      if (pos >= top && pos < bottom) {
        links.forEach((link) => {
          const active = link.getAttribute("href") === `#${id}`;
          link.classList.toggle("active", active);
        });
      }
    });
  }

  updateNavState();
  window.addEventListener("scroll", updateNavState, { passive: true });

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }

  const revealEls = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");
  const screenItems = document.querySelectorAll(".screen-item");

  let activeIndex = 0;
  const images = Array.from(screenItems).map((item) => {
    const img = item.querySelector("img");
    return img ? img.src : "";
  }).filter(Boolean);

  function openLightbox(index) {
    if (!lightbox || !lightboxImg || images.length === 0) return;
    activeIndex = index;
    lightboxImg.src = images[activeIndex];
    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function showPrev() {
    if (!lightboxImg || images.length === 0) return;
    activeIndex = (activeIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[activeIndex];
  }

  function showNext() {
    if (!lightboxImg || images.length === 0) return;
    activeIndex = (activeIndex + 1) % images.length;
    lightboxImg.src = images[activeIndex];
  }

  screenItems.forEach((item) => {
    item.addEventListener("click", () => {
      const idx = Number(item.getAttribute("data-index")) || 0;
      openLightbox(idx);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener("click", showPrev);
  if (lightboxNext) lightboxNext.addEventListener("click", showNext);

  if (lightbox) {
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener("keydown", (event) => {
    if (!lightbox || !lightbox.classList.contains("active")) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") showPrev();
    if (event.key === "ArrowRight") showNext();
  });
});
