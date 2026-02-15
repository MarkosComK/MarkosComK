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
    const icon = toggle.querySelector('.folder-icon');
    if (icon) {
      icon.classList.toggle('fa-folder');
      icon.classList.toggle('fa-folder-open');
    }
  });

  // ────────────────────────────────────────────────
  // TOC generation function (called on load + after SPA changes)
  // ────────────────────────────────────────────────
function buildTOC() {
  const toc = document.getElementById('toc');
  if (!toc) return;

  const main = document.querySelector('.Main');
  if (!main) return;

  toc.innerHTML = '';

  const headings = main.querySelectorAll('h1, h2, h3, h4, h5, h6');

  if (headings.length === 0) {
    toc.innerHTML = '<p style="color:#888;font-style:italic;">No headings</p>';
    return;
  }

  const ul = document.createElement('ul');
  ul.className = 'toc-list';

  headings.forEach((h, i) => {
    if (!h.id) {
      const text = h.textContent.trim();
      h.id = 'toc-' + i + '-' + text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/gi, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
    }

    const level = parseInt(h.tagName[1]);
    const li = document.createElement('li');
    li.dataset.level = level;

    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent.trim();

    li.appendChild(a);
    ul.appendChild(li);
  });

  toc.appendChild(ul);

  // ─── TOC link click handler – smooth scroll to center ───
  toc.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',        // centers heading in viewport
          inline: 'nearest'
        });

        // Update hash in URL without jump
        history.replaceState(null, null, '#' + targetId);
      }
    });
  });

  // Active highlight observer
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('#toc a').forEach(l => l.classList.remove('active'));
          const active = document.querySelector(`#toc a[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    },
    { rootMargin: '-100px 0px -45% 0px', threshold: 0.1 }
  );

  headings.forEach(h => observer.observe(h));
}

buildTOC();
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

      // Replace content
      mainContainer.innerHTML = newMain.innerHTML;

      // IMPORTANT: Rebuild TOC after new content is loaded
      buildTOC();

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

  // Handle browser back/forward buttons
  window.addEventListener('popstate', e => {
    if (e.state && e.state.html) {
      mainContainer.innerHTML = e.state.html;
      document.title = e.state.title || 'My Notes';
      // Rebuild TOC on history navigation
      buildTOC();
    }
  });
});
