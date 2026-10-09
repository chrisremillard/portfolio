(() => {
  "use strict";

  const LINKEDIN_URL = "https://www.linkedin.com/in/christopher-r%C3%A9millard-8165b924a";
  const GITHUB_URL = "https://github.com/chrisremillard/portfolio";
  const GITHUB_PROFILE = "https://github.com/chrisremillard";
  const EMAIL = "chrisremillard97@gmail.com";
  const CV_PATH = "assets/Christopher-Remillard-CV.pdf";

  const root = document.documentElement;
  const $ = (sel, scope = document) => scope.querySelector(sel);
  const $$ = (sel, scope = document) => [...scope.querySelectorAll(sel)];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (LINKEDIN_URL) $$("[data-linkedin]").forEach((a) => { a.href = LINKEDIN_URL; });

  /* ---------- Language ---------- */
  const fr = {
    "skip": "Aller au contenu",
    "nav.projects": "Projets",
    "nav.experience": "Expérience",
    "nav.contact": "Contact",
    "nav.search": "Recherche",
    "cta.cv": "Télécharger le CV",
    "cta.cv.short": "CV",
    "hero.who": "Analyste infrastructure et infonuagique",
    "hero.title": "Je bâtis les plateformes où les développeurs déploient.",
    "hero.lede": "Je fais partie de l’équipe infonuagique de Beneva, où nous offrons aux développeurs une infrastructure souple et sécuritaire pour déployer leurs applications sur Kubernetes.",
    "projects.title": "Projets choisis",
    "projects.note": "Les trois premiers sont documentés. Le dernier est un espace réservé en attendant sa fiche.",
    "filter.all": "Tous",
    "filter.automation": "Automatisation",
    "filter.cloud": "Infonuagique",
    "card.todo": "À venir",
    "card.title": "Titre du projet",
    "card.desc": "Le problème, ce que j’ai bâti et ce qui a changé. À rédiger.",
    "p1.title": "Cycle de vie complet des machines virtuelles avec Ansible",
    "p1.desc": "Mon projet de stage chez Beneva. Pour obtenir une machine virtuelle, il fallait attendre que les administrateurs de systèmes la créent à la main avec des scripts. Désormais, un formulaire Jira déclenche un automatisme Ansible qui livre une machine Linux ou Windows prête à l’emploi dans VMware, et un second formulaire la supprime quand elle n’est plus requise.",
    "p1.before": "Avant",
    "p1.before.v": "Environ 2 semaines",
    "p1.after": "Après",
    "p1.award": "Lauréat des Octas 2025",
    "p2.title": "Certificats SSH signés avec HashiCorp Vault",
    "p2.desc": "Dans l’équipe responsable d’Ansible Automation Platform, les comptes de service d’automatisation accédaient aux machines virtuelles avec des clés SSH statiques : des privilèges élevés, des clés difficiles à suivre et à renouveler. J’ai automatisé la signature des clés SSH avec HashiCorp Vault. Plus aucune clé statique n’est déployée, seulement des certificats émis par le Vault interne.",
    "p2.before.v": "Clés SSH statiques",
    "p2.after.v": "Certificats signés par Vault",
    "p3.title": "Namespaces éphémères sur EKS",
    "p3.desc": "J’ai participé au projet qui a bâti les namespaces éphémères sur EKS. Un workflow GitHub Actions crée un namespace et y déploie directement les charts Helm des développeurs. Après 48 heures au plus, il disparaît, et aucune ressource ne traîne dans les clusters. Nous avons aussi automatisé les entrées d’accès (access entries) AWS qui associent les dépôts de chaque équipe aux clusters où elle déploie.",
    "p3.f1": "Durée de vie d’un namespace",
    "p3.f1.v": "48 heures max",
    "p3.f2": "Déployé depuis",
    "award.video.note": "Dans la vidéo, un membre de notre équipe présente le projet.",
    "award.video": "Voir la vidéo",
    "award.link": "Voir le projet",
    "exp.title": "Expérience",
    "exp.1.when": "Mai 2025 – Aujourd’hui",
    "exp.1.role": "Analyste infrastructure et infonuagique",
    "exp.1.desc": "Membre de l’équipe infonuagique. Nous offrons aux développeurs une infrastructure souple et sécuritaire pour déployer des applications dans un environnement Kubernetes.",
    "exp.2.when": "Août 2023 – Mai 2025",
    "exp.2.role": "Analyste technologique",
    "exp.2.desc": "Membre de l’équipe de plateforme d’automatisation. Nous avons maintenu et fait évoluer Ansible Automation Platform, et intégré des clients au développement Ansible.",
    "exp.3.when": "Août 2022 – Août 2023",
    "exp.3.role": "Programmeur",
    "exp.3.desc": "À temps partiel durant la suite de mon parcours universitaire, je développais des intégrations destinées aux développeurs afin de faciliter le déploiement de leurs applications dans l’environnement sur site.",
    "exp.4.when": "Mai 2022 – Août 2022",
    "exp.4.role": "Stagiaire",
    "exp.4.desc": "Stagiaire en infrastructure sur site. Notre mandat : créer un automatisme de cycle de vie de machines virtuelles avec Ansible.",
    "stack.title": "Technologies",
    "stack.cloud": "Infonuagique",
    "stack.platform": "Plateforme",
    "stack.automation": "Automatisation",
    "stack.lang": "Langages",
    "edu.title": "Formation",
    "edu.1": "Baccalauréat en informatique et génie logiciel",
    "edu.2": "Certificat en administration",
    "award.title": "Lauréat des Octas, Transformation numérique — Grande entreprise.",
    "award.body": "Prix remis à Beneva pour le projet",
    "contact.title": "Écrivez-moi.",
    "foot.top": "Haut de page",
    "icon.linkedin": "Profil LinkedIn",
    "icon.github": "Profil GitHub",
    "icon.repo": "Code source de ce site sur GitHub",
    "icon.mail": "Écrire à Christopher",
    "foot.source": "Code source",
  };
  const ui = {
    en: { copied: "Copied", copyFailed: "Select and copy", count: (n) => `${n} shown`, empty: "No match. Try “resume” or “email”.", placeholder: "Jump to a section or action", toggleLabel: "Passer au français", toggleShort: "FR", toggleLong: "Français", filters: "Filter projects", toDark: "Switch to dark theme", toLight: "Switch to light theme", darkShort: "Dark theme", lightShort: "Light theme" },
    fr: { copied: "Copié", copyFailed: "Sélectionnez et copiez", count: (n) => `${n} affichés`, empty: "Aucun résultat. Essayez « cv » ou « courriel ».", placeholder: "Aller à une section ou une action", toggleLabel: "Switch to English", toggleShort: "EN", toggleLong: "English", filters: "Filtrer les projets", toDark: "Passer au thème sombre", toLight: "Passer au thème clair", darkShort: "Thème sombre", lightShort: "Thème clair" },
  };

  const labelled = $$("[data-i18n-label]");
  labelled.forEach((el) => { el.dataset.enLabel = el.getAttribute("aria-label"); });
  const translatable = $$("[data-i18n]");
  translatable.forEach((el) => { el.dataset.en = el.textContent; });
  let lang = "en";

  function setLang(next, persist = true) {
    lang = next === "fr" ? "fr" : "en";
    root.lang = lang;
    translatable.forEach((el) => {
      el.textContent = lang === "fr" ? (fr[el.dataset.i18n] ?? el.dataset.en) : el.dataset.en;
    });
    labelled.forEach((el) => {
      const label = lang === "fr" ? (fr[el.dataset.i18nLabel] ?? el.dataset.enLabel) : el.dataset.enLabel;
      el.setAttribute("aria-label", label);
      el.title = label;
    });
    $$("[data-lang-toggle]").forEach((btn) => {
      btn.textContent = btn.hasAttribute("data-lang-long") ? ui[lang].toggleLong : ui[lang].toggleShort;
      btn.setAttribute("aria-label", ui[lang].toggleLabel);
    });
    $(".filters").setAttribute("aria-label", ui[lang].filters);
    paletteInput.placeholder = ui[lang].placeholder;
    labelThemeToggles();
    if (persist) { try { localStorage.setItem("lang", lang); } catch { /* private mode */ } }
  }

  /* ---------- Theme: system by default, manual override persisted ---------- */
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  const currentTheme = () => root.dataset.theme || (systemDark.matches ? "dark" : "light");
  function labelThemeToggles() {
    const toDark = currentTheme() === "light";
    $$("[data-theme-toggle]").forEach((btn) => {
      btn.setAttribute("aria-label", toDark ? ui[lang].toDark : ui[lang].toLight);
      if (btn.hasAttribute("data-theme-long")) btn.textContent = toDark ? ui[lang].darkShort : ui[lang].lightShort;
    });
  }
  function setTheme(next) {
    if (next === "system") delete root.dataset.theme; else root.dataset.theme = next;
    try { next === "system" ? localStorage.removeItem("theme") : localStorage.setItem("theme", next); } catch { /* private mode */ }
    labelThemeToggles();
  }
  const flipTheme = () => setTheme(currentTheme() === "dark" ? "light" : "dark");
  $$("[data-theme-toggle]").forEach((btn) => btn.addEventListener("click", flipTheme));
  systemDark.addEventListener("change", labelThemeToggles);

  /* ---------- Reveal + diagrams ---------- */
  const reveals = $$(".reveal");
  const arts = $$(".card__art");

  // Runs a diagram's story once; the class comes off when every animation has settled.
  function play(art) {
    if (reducedMotion || !art.getAnimations || art.classList.contains("is-playing")) return;
    art.classList.add("is-playing");
    Promise.allSettled(art.getAnimations({ subtree: true }).map((a) => a.finished))
      .then(() => art.classList.remove("is-playing"));
  }

  if ("IntersectionObserver" in window) {
    const revealer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        revealer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    reveals.forEach((el) => revealer.observe(el));

    // Each diagram plays by itself the first time it is properly on screen.
    const firstPlay = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        play(entry.target);
        firstPlay.unobserve(entry.target);
      });
    }, { threshold: 0.6 });
    arts.forEach((art) => firstPlay.observe(art));
  } else {
    reveals.forEach((el) => el.classList.add("is-in"));
  }

  // After that it replays on intent only: mouse over the card, keyboard focus inside it, or a tap on the diagram.
  arts.forEach((art) => {
    const card = art.closest(".card");
    card.addEventListener("pointerenter", (event) => { if (event.pointerType === "mouse") play(art); });
    card.addEventListener("focusin", () => play(art));
    art.addEventListener("click", () => play(art));
  });

  /* ---------- Hero: the phase flips from Pending to Running, once ---------- */
  const phases = $$("[data-phase]");
  if (phases.length && !reducedMotion) {
    phases.forEach((el) => { el.textContent = "Pending"; });
    setTimeout(() => {
      phases.forEach((el) => el.classList.add("is-out"));
      setTimeout(() => {
        phases.forEach((el) => { el.textContent = el.dataset.phase; el.classList.remove("is-out"); });
      }, 220); // --dur-short
    }, 1200);
  }

  /* ---------- Project filters ---------- */
  const grid = $("[data-grid]");
  const cards = $$(".card", grid);
  const chips = $$("[data-filter]");
  const count = $("[data-count]");
  chips.forEach((chip) => chip.addEventListener("click", () => {
    if (chip.getAttribute("aria-pressed") === "true") return;
    const filter = chip.dataset.filter;
    chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
    grid.dataset.active = filter;
    let shown = 0;
    let entering = 0;
    cards.forEach((card) => {
      const match = filter === "all" || card.dataset.cat === filter;
      const wasHidden = card.hidden;
      card.hidden = !match;
      if (!match) return;
      shown++;
      if (!wasHidden) return; // already on screen: leave it alone
      card.style.setProperty("--i", entering++);
      card.classList.remove("is-in");
      void card.offsetWidth; // restart the fade
      card.classList.add("is-in");
    });
    count.textContent = filter === "all" ? "" : ui[lang].count(shown);
  }));

  /* ---------- Copy email ---------- */
  $$("[data-copy]").forEach((btn) => {
    const label = $("[data-copy-label]", btn);
    btn.addEventListener("click", async () => {
      const idle = lang === "fr" ? fr["contact.copy"] : label.dataset.en;
      try {
        await navigator.clipboard.writeText(btn.dataset.copy);
        btn.dataset.state = "copied";
        label.textContent = ui[lang].copied;
      } catch {
        btn.dataset.state = "error";
        label.textContent = ui[lang].copyFailed;
      }
      setTimeout(() => { delete btn.dataset.state; label.textContent = idle; }, 2500);
    });
  });

  /* ---------- Command palette ---------- */
  const palette = $("[data-palette]");
  const paletteInput = $("[data-palette-input]");
  const paletteList = $("[data-palette-list]");
  const paletteEmpty = $("[data-palette-empty]");
  const go = (hash) => () => { location.hash = hash; };
  const commands = [
    { en: "Go to experience", fr: "Aller à l’expérience", hint: "#experience", run: go("#experience") },
    { en: "Go to stack and education", fr: "Aller aux technologies et à la formation", hint: "#stack", run: go("#stack") },
    { en: "Go to projects", fr: "Aller aux projets", hint: "#projects", run: go("#projects") },
    { en: "Go to recognition", fr: "Aller aux distinctions", hint: "#recognition", run: go("#recognition") },
    { en: "Watch the Octas project video", fr: "Voir la vidéo du projet Octas", hint: "vimeo ↗", run: () => { window.open("https://vimeo.com/1078170795", "_blank", "noopener"); } },
    { en: "Go to contact", fr: "Aller au contact", hint: "#contact", run: go("#contact") },
    { en: "Download resume", fr: "Télécharger le CV", hint: "pdf", run: () => { const a = document.createElement("a"); a.href = CV_PATH; a.download = ""; a.click(); } },
    { en: "Email Christopher", fr: "Écrire un courriel à Christopher", hint: "mailto", run: () => { location.href = `mailto:${EMAIL}`; } },
    { en: "Open LinkedIn", fr: "Ouvrir LinkedIn", hint: "↗", run: () => { window.open(LINKEDIN_URL || "https://www.linkedin.com/", "_blank", "noopener"); } },
    { en: "Open GitHub profile", fr: "Ouvrir le profil GitHub", hint: "github ↗", run: () => { window.open(GITHUB_PROFILE, "_blank", "noopener"); } },
    { en: "View this site’s source on GitHub", fr: "Voir le code source du site sur GitHub", hint: "github ↗", run: () => { window.open(GITHUB_URL, "_blank", "noopener"); } },
    { en: "Passer au français", fr: "Switch to English", hint: "fr / en", run: () => setLang(lang === "fr" ? "en" : "fr") },
    { en: "Switch light / dark theme", fr: "Basculer thème clair / sombre", hint: "theme", run: flipTheme },
    { en: "Use system theme", fr: "Suivre le thème du système", hint: "auto", run: () => setTheme("system") },
  ];
  let visible = [];
  let active = 0;

  function renderPalette() {
    const q = paletteInput.value.trim().toLowerCase();
    visible = commands.filter((c) => `${c.en} ${c.fr} ${c.hint}`.toLowerCase().includes(q));
    active = Math.min(active, Math.max(visible.length - 1, 0));
    paletteList.replaceChildren(...visible.map((c, i) => {
      const li = document.createElement("li");
      li.className = "palette__item";
      li.id = `palette-item-${i}`;
      li.setAttribute("role", "option");
      li.setAttribute("aria-selected", String(i === active));
      const name = document.createElement("span");
      name.textContent = c[lang];
      const hint = document.createElement("span");
      hint.textContent = c.hint;
      li.append(name, hint);
      li.addEventListener("click", () => runCommand(i));
      li.addEventListener("pointermove", () => { if (active !== i) { active = i; renderPalette(); } });
      return li;
    }));
    paletteEmpty.hidden = visible.length > 0;
    paletteEmpty.textContent = ui[lang].empty;
    if (visible.length) {
      paletteInput.setAttribute("aria-activedescendant", `palette-item-${active}`);
      $(`#palette-item-${active}`).scrollIntoView({ block: "nearest" });
    } else {
      paletteInput.removeAttribute("aria-activedescendant");
    }
  }
  function openPalette() {
    if (palette.open) return;
    paletteInput.value = "";
    active = 0;
    palette.showModal();
    renderPalette();
    paletteInput.focus();
  }
  function runCommand(i) {
    const command = visible[i];
    if (!command) return;
    palette.close();
    command.run();
  }

  $$("[data-open-palette]").forEach((btn) => btn.addEventListener("click", openPalette));
  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      palette.open ? palette.close() : openPalette();
    }
  });
  paletteInput.addEventListener("input", () => { active = 0; renderPalette(); });
  paletteInput.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!visible.length) return;
      active = (active + (event.key === "ArrowDown" ? 1 : -1) + visible.length) % visible.length;
      renderPalette();
    } else if (event.key === "Enter") {
      event.preventDefault();
      runCommand(active);
    }
  });
  palette.addEventListener("click", (event) => { if (event.target === palette) palette.close(); });

  const isMac = /Mac|iPhone|iPad/.test(navigator.platform);
  $$("[data-kbd]").forEach((kbd) => { kbd.textContent = isMac ? "⌘K" : "Ctrl K"; });

  /* ---------- Boot ---------- */
  $$("[data-lang-toggle]").forEach((btn) => btn.addEventListener("click", () => setLang(lang === "fr" ? "en" : "fr")));
  let stored = null;
  try { stored = localStorage.getItem("lang"); } catch { /* private mode */ }
  setLang(stored || ((navigator.language || "").toLowerCase().startsWith("fr") ? "fr" : "en"), false);
})();
