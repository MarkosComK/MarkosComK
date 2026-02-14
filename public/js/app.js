document.addEventListener('DOMContentLoaded', () => {
  // Cache the main content container for SPA navigation
  const mainContainer = document.querySelector('.Main');
  if (!mainContainer) return;

  // ────────────────────────────────────────────────
  // Folder toggle (collapsible sidebar folders)
  // ────────────────────────────────────────────────
  document.body.addEventListener('click', e => {
    const toggle = e.target.closest('.folder-toggle');
    if (!toggle) return;

    e.preventDefault();
    e.stopPropagation();

    const folderItem = toggle.closest('.folder-item');
    if (folderItem) {
      folderItem.classList.toggle('open');
      console.log('Toggled folder:', folderItem.querySelector('span')?.textContent); // optional debug
    }
  });

  // ────────────────────────────────────────────────
  // SPA-like navigation: intercept internal .html links
  // ────────────────────────────────────────────────
  document.body.addEventListener('click', async e => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (
      !href ||
      href.startsWith('http') ||
      href.startsWith('#') ||
      href.startsWith('mailto:') ||
      !href.endsWith('.html')
    ) {
      return; // let browser handle normally
    }

    e.preventDefault();

    try {
      const response = await fetch(href);
      if (!response.ok) throw new Error('Not found');

      const htmlText = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, 'text/html');

      const newMain = doc.querySelector('.Main');
      if (!newMain) throw new Error('No .Main found');

      mainContainer.innerHTML = newMain.innerHTML;
      document.title = doc.title || 'My Notes';

      history.pushState(
        { html: mainContainer.innerHTML, title: document.title },
        document.title,
        href
      );

      mainContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });

    } catch (err) {
      console.error('Dynamic load failed:', err);
      window.location.href = href; // fallback
    }
  });

  // Handle browser back/forward
  window.addEventListener('popstate', e => {
    if (e.state && e.state.html) {
      mainContainer.innerHTML = e.state.html;
      document.title = e.state.title || 'My Notes';
    }
  });
});
