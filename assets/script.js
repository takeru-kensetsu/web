(() => {
  const header = document.getElementById("siteHeader");
  const button = document.getElementById("menuButton");
  const nav = document.getElementById("globalNav");
  const year = document.getElementById("year");

  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 25);
  };

  const closeMenu = () => {
    button.classList.remove("is-open");
    nav.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "メニューを開く");
  };

  button.addEventListener("click", () => {
    const nextOpen = !nav.classList.contains("is-open");
    button.classList.toggle("is-open", nextOpen);
    nav.classList.toggle("is-open", nextOpen);
    button.setAttribute("aria-expanded", String(nextOpen));
    button.setAttribute("aria-label", nextOpen ? "メニューを閉じる" : "メニューを開く");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("scroll", updateHeader, { passive: true });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeMenu();
  });

  updateHeader();
  year.textContent = new Date().getFullYear();

// 代表写真の右クリック保存・ドラッグ保存を抑止します。
// ブラウザで表示される画像を完全に取得不能にするものではありません。
document.querySelectorAll("[data-protected-image]").forEach((element) => {
  element.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  element.addEventListener("dragstart", (event) => {
    event.preventDefault();
  });

  element.addEventListener("selectstart", (event) => {
    event.preventDefault();
  });
});


  const pageTopButton = document.querySelector("[data-page-top]");

  const updatePageTopButton = () => {
    if (!pageTopButton) return;
    pageTopButton.classList.toggle("is-visible", window.scrollY > 420);
  };

  if (pageTopButton) {
    pageTopButton.addEventListener("click", () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      window.scrollTo({
        top: 0,
        behavior: reducedMotion ? "auto" : "smooth",
      });
    });

    window.addEventListener("scroll", updatePageTopButton, { passive: true });
    updatePageTopButton();
  }

})();
