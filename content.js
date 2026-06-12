const icons = {
  book: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
  scroll: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 21h12a2 2 0 0 0 2-2v-2H4v2a2 2 0 0 0 2 2Z"/><path d="M19 17V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10"/><path d="M19 17c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2"/><path d="M5 5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
  palette: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
  plus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  toggleLeft: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>`
};

// CONFIGURAÇÃO DE TEMAS
const themeClasses = ['mahscript-theme-aurora', 'mahscript-theme-oceano', 'mahscript-theme-meianoite'];
const themeNames = ['Padrão (Royal)', 'Aurora', 'Oceano', 'Meia-Noite'];
const themeColors = ['#4a00e0', '#ff6b9d', '#0284c7', '#89b4fa'];

let currentThemeIndex = 0;
try {
  const savedTheme = localStorage.getItem('mahscript-theme');
  if (savedTheme !== null) {
    currentThemeIndex = parseInt(savedTheme, 10);
    if (isNaN(currentThemeIndex) || currentThemeIndex < 0 || currentThemeIndex >= themeNames.length) currentThemeIndex = 0;
  }
} catch (e) {}

function applyTheme() {
  themeClasses.forEach(cls => document.body.classList.remove(cls));
  if (currentThemeIndex > 0) document.body.classList.add(themeClasses[currentThemeIndex - 1]);
  try { localStorage.setItem('mahscript-theme', currentThemeIndex); } catch (e) {}
  
  // Força re-aplicação imediata via JS para vencer overrides do Google
  forceStyleOverride();
}
applyTheme();

// OBSERVADOR DE MUTAÇÃO PARA FORÇAR CORES DINAMICAMENTE
function forceStyleOverride() {
  const style = getComputedStyle(document.body);
  const menubarBg = style.getPropertyValue('--gd-menubar-bg').trim();
  const toolbarBg = style.getPropertyValue('--gd-toolbar-bg').trim();
  const sidebarBg = style.getPropertyValue('--gd-sidebar-bg').trim();
  const menubarText = style.getPropertyValue('--gd-menubar-text').trim();
  const toolbarIcon = style.getPropertyValue('--gd-toolbar-icon').trim();

  // Aplica em elementos críticos que o Google costuma resetar
  document.querySelectorAll('.docs-titlebar-container, .docs-menubar, .docs-mode-selector, .docs-mode-selector *').forEach(el => {
    el.style.backgroundColor = menubarBg;
    el.style.color = menubarText;
  });

  document.querySelectorAll('.goog-toolbar, .docs-toolbar-container, .goog-toolbar-button').forEach(el => {
    el.style.backgroundColor = toolbarBg;
    if(el.classList.contains('goog-toolbar-button')) el.style.color = toolbarIcon;
  });

  document.querySelectorAll('.docs-sidebar, .docs-sidebar-container, .kix-sidebar').forEach(el => {
    el.style.backgroundColor = sidebarBg;
    el.style.color = menubarText;
  });
}

// Observa mudanças no DOM para reaplicar estilos quando o Google os sobrescreve
const observer = new MutationObserver(() => {
  forceStyleOverride();
});
observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class'] });

// --- CRIAÇÃO DA UI ---
const fab = document.createElement('div');
fab.id = 'mahscript-fab';
fab.innerHTML = icons.book;
fab.title = "MahScript";
document.body.appendChild(fab);

const menu = document.createElement('div');
menu.id = 'mahscript-menu';
menu.innerHTML = `<button id="btn-appearance">${icons.palette} Aparência</button><button id="btn-chapters">${icons.scroll} Capítulos</button>`;
document.body.appendChild(menu);

const themePanel = document.createElement('div');
themePanel.id = 'mahscript-theme-panel';
let themeButtonsHTML = '<div class="mahscript-theme-grid">';
themeNames.forEach((name, index) => {
  themeButtonsHTML += `<button class="mahscript-theme-btn" data-index="${index}" style="background: ${themeColors[index]}" title="${name}"></button>`;
});
themeButtonsHTML += '</div>';
themePanel.innerHTML = themeButtonsHTML;
document.body.appendChild(themePanel);

const sidebar = document.createElement('div');
sidebar.id = 'mahscript-sidebar-left';
sidebar.className = 'hidden';
sidebar.innerHTML = `
  <div class="ms-sidebar-header">
    <span>Capítulos</span>
    <button id="ms-toggle-sidebar" title="Ocultar/Mostrar">${icons.toggleLeft}</button>
  </div>
  <div class="ms-sidebar-list" id="ms-chapter-list"></div>
  <button id="ms-new-chapter-btn">${icons.plus} Novo Capítulo</button>
`;
document.body.appendChild(sidebar);

const modalOverlay = document.createElement('div');
modalOverlay.id = 'mahscript-modal-overlay';
modalOverlay.innerHTML = `
  <div id="mahscript-modal">
    <div id="mahscript-modal-header">Novo Capítulo</div>
    <div id="mahscript-modal-body">
      <div class="mahscript-input-group">
        <label for="chapter-title-input">Nome do Capítulo</label>
        <input type="text" id="chapter-title-input" class="mahscript-input" placeholder="Ex: Capítulo 1: O Início">
      </div>
      <div class="mahscript-input-group">
        <label for="chapter-content-input">Conteúdo inicial (opcional)</label>
        <textarea id="chapter-content-input" class="mahscript-textarea" placeholder="Digite uma nota ou o primeiro parágrafo..."></textarea>
      </div>
    </div>
    <div id="mahscript-modal-footer">
      <button class="mahscript-btn mahscript-btn-secondary" id="modal-cancel">Cancelar</button>
      <button class="mahscript-btn mahscript-btn-primary" id="modal-save">Criar Capítulo</button>
    </div>
  </div>
`;
document.body.appendChild(modalOverlay);

let currentEditingHeading = null;

// --- EVENTOS ---
fab.addEventListener('click', (e) => {
  e.stopPropagation();
  const isHidden = menu.style.display === 'none' || menu.style.display === '';
  menu.style.display = isHidden ? 'flex' : 'none';
  themePanel.classList.remove('open');
  if (isHidden) {
    sidebar.classList.add('hidden');
    closeModal();
  }
});

document.addEventListener('click', (e) => {
  if (!fab.contains(e.target) && !menu.contains(e.target) && !themePanel.contains(e.target) && !sidebar.contains(e.target) && !modalOverlay.contains(e.target)) {
    menu.style.display = 'none';
    themePanel.classList.remove('open');
    closeModal();
  }
});

document.getElementById('btn-appearance').addEventListener('click', () => {
  menu.style.display = 'none';
  themePanel.classList.toggle('open');
  updateThemeButtons();
});

document.getElementById('btn-chapters').addEventListener('click', () => {
  menu.style.display = 'none';
  themePanel.classList.remove('open');
  sidebar.classList.remove('hidden');
  scanAndRenderChapters();
});

document.getElementById('ms-toggle-sidebar').addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
});

document.querySelectorAll('.mahscript-theme-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentThemeIndex = parseInt(btn.dataset.index, 10);
    applyTheme();
    updateThemeButtons();
  });
});

function updateThemeButtons() {
  document.querySelectorAll('.mahscript-theme-btn').forEach((btn, index) => {
    if (index === currentThemeIndex) btn.classList.add('active');
    else btn.classList.remove('active');
  });
}

function openModal(mode, headingElement = null) {
  currentEditingHeading = headingElement;
  const header = document.getElementById('mahscript-modal-header');
  const titleInput = document.getElementById('chapter-title-input');
  const contentInput = document.getElementById('chapter-content-input');
  
  if (mode === 'new') {
    header.textContent = 'Novo Capítulo';
    titleInput.value = '';
    contentInput.value = '';
    contentInput.parentElement.style.display = 'block';
  } else if (mode === 'edit' && headingElement) {
    header.textContent = 'Renomear Capítulo';
    titleInput.value = headingElement.textContent.trim();
    contentInput.parentElement.style.display = 'none';
  }
  
  modalOverlay.style.display = 'flex';
  setTimeout(() => { titleInput.focus(); titleInput.select(); }, 100);
}

function closeModal() {
  modalOverlay.style.display = 'none';
  currentEditingHeading = null;
  document.getElementById('chapter-content-input').parentElement.style.display = 'block';
}

document.getElementById('modal-cancel').addEventListener('click', closeModal);

document.getElementById('modal-save').addEventListener('click', () => {
  const newTitle = document.getElementById('chapter-title-input').value.trim();
  const newContent = document.getElementById('chapter-content-input').value.trim();
  if (!newTitle) return;

  if (currentEditingHeading) {
    currentEditingHeading.textContent = newTitle;
    currentEditingHeading.blur();
    setTimeout(() => currentEditingHeading.focus(), 50);
  } else {
    // CRIAÇÃO NATIVA VIA EXEC COMMAND
    const editor = document.querySelector('.kix-appview-editor');
    if (editor) {
      editor.focus();
      document.execCommand('selectAll', false, null);
      document.getSelection().collapseToEnd();
      
      document.execCommand('insertParagraph', false, null);
      document.execCommand('insertParagraph', false, null);
      
      // Aplica Heading 1 nativo do Google Docs
      document.execCommand('formatBlock', false, 'H1');
      document.execCommand('insertText', false, newTitle);
      
      if (newContent) {
        document.execCommand('insertParagraph', false, null);
        document.execCommand('formatBlock', false, 'P');
        document.execCommand('insertText', false, newContent);
      }
    }
  }
  
  closeModal();
  setTimeout(scanAndRenderChapters, 600);
});

document.getElementById('chapter-title-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    document.getElementById('modal-save').click();
  }
});

document.getElementById('ms-new-chapter-btn').addEventListener('click', () => openModal('new'));

// RENDERIZAÇÃO NA SIDEBAR (FILTRO POR "CAPÍTULO")
function scanAndRenderChapters() {
  const listContainer = document.getElementById('ms-chapter-list');
  if (!listContainer) return;
  listContainer.innerHTML = '';
  
  const allHeadings = document.querySelectorAll('[role="heading"][aria-level="1"], [role="heading"][aria-level="2"]');
  const validHeadings = Array.from(allHeadings).filter(h => h.textContent.toLowerCase().includes('capítulo'));
  
  if (validHeadings.length === 0) {
    listContainer.innerHTML = '<p style="color: var(--ms-text-muted); font-size: 13px; text-align: center; margin-top: 20px; padding: 0 20px;">Nenhum capítulo encontrado.<br>Crie títulos começando com "Capítulo".</p>';
    return;
  }

  validHeadings.forEach((heading, index) => {
    const item = document.createElement('div');
    item.className = 'ms-chapter-item';
    const title = heading.textContent.trim();
    
    item.innerHTML = `
      <svg class="ms-chapter-icon" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
      <span class="ms-chapter-title">${title}</span>
    `;

    item.addEventListener('click', () => {
      document.querySelectorAll('.ms-chapter-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
      heading.style.backgroundColor = 'var(--ms-hover)';
      setTimeout(() => {
        heading.style.backgroundColor = 'transparent';
        heading.style.transition = 'background-color 1s ease';
      }, 800);
    });

    listContainer.appendChild(item);
  });
}

// SELECTION TOOLBAR
const selectionToolbar = document.createElement('div');
selectionToolbar.id = 'mahscript-selection-toolbar';
selectionToolbar.innerHTML = `<button id="sel-bold" title="Negrito">N</button>`;
document.body.appendChild(selectionToolbar);

document.addEventListener('mouseup', (e) => {
  const selection = window.getSelection();
  if (selection.toString().trim().length > 0 && !menu.contains(e.target) && !themePanel.contains(e.target) && !sidebar.contains(e.target) && !modalOverlay.contains(e.target)) {
    const rect = selection.getRangeAt(0).getBoundingClientRect();
    selectionToolbar.style.display = 'flex';
    selectionToolbar.style.top = `${rect.top + window.scrollY - 40}px`;
    selectionToolbar.style.left = `${rect.left + (rect.width / 2) - 15}px`;
  } else {
    selectionToolbar.style.display = 'none';
  }
});

document.getElementById('sel-bold').addEventListener('click', () => {
  document.dispatchEvent(new KeyboardEvent('keydown', { key: 'b', ctrlKey: true, bubbles: true }));
  selectionToolbar.style.display = 'none';
});