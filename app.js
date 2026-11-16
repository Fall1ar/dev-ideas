'use strict';

const STORAGE_KEY = 'idea-deck:ideas:v1';
const categoryLabels = { tool: 'Инструмент', app: 'Приложение', game: 'Игра', design: 'Дизайн', research: 'Исследование', other: 'Другое' };
const statusLabels = { inbox: 'Входящие', active: 'В работе', done: 'Готово' };
const priorityLabels = { high: 'Высокий приоритет', normal: 'Обычный приоритет', low: 'Невысокий приоритет' };
const viewLabels = { all: 'ВСЕ ИДЕИ', inbox: 'ВХОДЯЩИЕ', active: 'В РАБОТЕ', done: 'ГОТОВО' };
const viewCopy = {
  all: ['Твоя мастерская', 'Собирай мысли, выбирай следующий шаг и наблюдай, как задумки становятся реальнее.'],
  inbox: ['Входящие идеи', 'Сначала просто сохрани мысль. План можно придумать потом.'],
  active: ['В работе', 'Небольшие шаги превращают замысел в настоящий проект.'],
  done: ['Сделано', 'Отмечай завершённое — и не забывай, сколько уже получилось.'],
};

const seedIdeas = [
  {
    id: 'seed-icon-atelier', title: 'Icon Atelier — мастерская иконок', category: 'design', priority: 'normal', status: 'inbox',
    summary: 'Инструмент, который помогает быстрее готовить черновики иконок для приложений.',
    description: 'Проблема: даже в больших icon pack’ах часто не хватает значков для новых и нишевых приложений.\n\nИдея: пользователь указывает приложение и визуальное направление icon pack’а, а система предлагает несколько черновиков. Дизайнер проверяет их на маленьком размере, правит и сам выбирает финальный вариант.\n\nОграничение: не публиковать иконки автоматически и не выдавать сгенерированный значок за официальный логотип. Использовать только законно предоставленные референсы.',
    notes: '', tasks: [seedTask('seed-icon-requests', 'Посмотреть, как авторы icon pack’ов принимают запросы'), seedTask('seed-icon-directions', 'Набросать три направления интерфейса'), seedTask('seed-icon-legibility', 'Проверить читаемость иконки в маленьком размере')], createdAt: '2026-11-15T00:00:00.000Z', updatedAt: '2026-11-15T00:00:00.000Z',
  },
  {
    id: 'seed-toneid', title: 'ToneID — быстро узнать трек', category: 'app', priority: 'normal', status: 'inbox',
    summary: 'Android-приложение для распознавания музыки и перехода к разрешённому источнику.',
    description: 'Быстрый способ узнать, какая музыка играет в другом приложении. Возможные варианты: системный аудиозахват там, где Android и приложение его разрешают, или OCR видимого текста/субтитров.\n\nПервый шаг: проверить технические ограничения Android и выбрать один сценарий MVP. Показывать название и исполнителя, затем давать ссылку на легальный источник.\n\nПриватность: не записывать и не отправлять экран или звук скрытно. Не обходить DRM, рекламу, подписки или ограничения сервисов.',
    notes: '', tasks: [seedTask('seed-toneid-audio', 'Проверить ограничения системного аудиозахвата Android'), seedTask('seed-toneid-ocr', 'Сравнить базовый сценарий с распознаванием через OCR'), seedTask('seed-toneid-screen', 'Составить минимальный экран результата')], createdAt: '2026-11-15T00:00:00.000Z', updatedAt: '2026-11-15T00:00:00.000Z',
  },
  {
    id: 'seed-outpost', ideaVersion: 2, title: 'Песочница-симулятор автоматизации и логистики (2D / UI-движок)', category: 'game', priority: 'normal', status: 'inbox',
    summary: 'Проектируй маршруты и визуальные правила, оптимизируй потоки ресурсов и смотри, как экспедиция работает сама.',
    description: 'Жанр и опора. Песочница-симулятор автоматизации и логистики (2D / UI-движок), без тяжёлой 3D-графики. Игра строится на чистом современном интерфейсе: карточках, графиках, узлах и линиях связи. Игрок управляет автономной базой или экспедицией, но главное здесь — не база сама по себе, а логистическая система, которую он проектирует.\n\nЛогистический цикл. Размещать узлы добычи, склады, генераторы и производственные станции; соединять их маршрутами; настраивать доставку между источниками и потребителями. Следить за запасами, скоростью потоков, пропускной способностью и узкими местами.\n\nВизуальная автоматизация. Поведение юнитов и дронов задаётся понятными триггерами, а не кодом и ручным микроконтролем. Например: [если запас ресурса < 20%] → [назначить свободный дрон на добычу] → [если заряд < 15% — отправить на зарядку].\n\nГлавное удовольствие. Наблюдать, как система работает; замечать перебои; оптимизировать маршруты, запасы и приоритеты. Карточки ресурсов и активных маршрутов, графики, движущиеся сигналы и журнал событий помогают понять причины сбоев и удачных решений.\n\nПервый прототип. Одна компактная 2D/UI-карта, два ресурса, добывающий узел, склад, производственная станция, зарядка и несколько дронов. Игрок строит одну цепочку поставки и настраивает одно-два правила; задача — обеспечить постоянную подачу материала и устранить узкое место.',
    notes: '', tasks: [seedTask('seed-outpost-resources', 'Набросать схему узлов: добыча → склад → производство'), seedTask('seed-outpost-drones', 'Определить ресурсы, маршруты и роли дронов'), seedTask('seed-outpost-rule', 'Собрать первое правило: «запас < 20% → назначить дрон»')], createdAt: '2026-11-16T00:00:00.000Z', updatedAt: '2026-11-16T00:00:00.000Z',
  },
];
function task(text) { return { id: makeId(), text, done: false }; }
function seedTask(id, text) { return { id, text, done: false }; }
function makeId() { return window.crypto?.randomUUID ? window.crypto.randomUUID() : `i-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`; }

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const ideaGrid = $('#ideaGrid');
const ideaDialog = $('#ideaDialog');
const ideaForm = $('#ideaForm');
const detailDialog = $('#detailDialog');
const detailContent = $('#detailContent');
const toastEl = $('#toast');
const searchInput = $('#searchInput');
const importFile = $('#importFile');
let toastTimer;
let state = { view: 'all', query: '', selectedId: null };

function loadIdeas() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw === null) {
    const initializedAt = new Date().toISOString();
    const initialIdeas = structuredClone(seedIdeas).map((idea) => ({ ...idea, createdAt: initializedAt, updatedAt: initializedAt }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialIdeas));
    return initialIdeas;
  }
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return structuredClone(seedIdeas);
    let migrated = false;
    const loaded = parsed.map(normalizeIdea).filter(Boolean).map((idea) => {
      const next = migrateIdea(idea);
      if (next !== idea) migrated = true;
      return next;
    });
    if (migrated) localStorage.setItem(STORAGE_KEY, JSON.stringify(loaded));
    return loaded;
  } catch {
    return structuredClone(seedIdeas);
  }
}
function normalizeIdea(item) {
  if (!item || typeof item !== 'object' || typeof item.title !== 'string') return null;
  const tasks = Array.isArray(item.tasks) ? item.tasks.filter((t) => t && typeof t.text === 'string').map((t) => ({ id: String(t.id || makeId()), text: t.text.slice(0, 180), done: Boolean(t.done) })) : [];
  return {
    id: String(item.id || makeId()), ideaVersion: Number.isInteger(item.ideaVersion) ? item.ideaVersion : 1, title: item.title.trim().slice(0, 90) || 'Без названия',
    category: categoryLabels[item.category] ? item.category : 'other', priority: priorityLabels[item.priority] ? item.priority : 'normal', status: statusLabels[item.status] ? item.status : 'inbox',
    summary: String(item.summary || '').slice(0, 220), description: String(item.description || ''), notes: String(item.notes || ''), tasks,
    createdAt: validDate(item.createdAt), updatedAt: validDate(item.updatedAt),
  };
}
function validDate(value) { const date = new Date(value); return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString(); }
function migrateIdea(idea) {
  if (idea.id !== 'seed-outpost' || idea.ideaVersion >= 2) return idea;
  const updated = seedIdeas.find((item) => item.id === 'seed-outpost');
  const legacySeedTaskIds = new Set(['seed-outpost-resources', 'seed-outpost-drones', 'seed-outpost-rule']);
  const oldTasks = new Map(idea.tasks.map((item) => [item.id, item]));
  const refreshedSeedTasks = updated.tasks.map((item) => ({ ...item, done: Boolean(oldTasks.get(item.id)?.done) }));
  const userTasks = idea.tasks.filter((item) => !legacySeedTaskIds.has(item.id));
  return {
    ...idea,
    ...updated,
    status: idea.status,
    priority: idea.priority,
    notes: idea.notes,
    tasks: [...refreshedSeedTasks, ...userTasks],
    createdAt: idea.createdAt,
    updatedAt: idea.updatedAt,
    ideaVersion: 2,
  };
}
let ideas = loadIdeas();

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}
function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('is-visible'), 2600);
}
function persist(message = 'Изменения сохранены в этом браузере') {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ideas));
    if (message) showToast(message);
    render();
    return true;
  } catch {
    showToast('Не удалось сохранить. Освободи место или скачай резервную копию.');
    return false;
  }
}
function progress(idea) {
  const total = idea.tasks.length;
  const done = idea.tasks.filter((item) => item.done).length;
  return { total, done, percent: total ? Math.round(done / total * 100) : 0 };
}
function shortDate(value) { return new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'short' }).format(new Date(value)); }

function cardMarkup(idea) {
  const p = progress(idea);
  const category = categoryLabels[idea.category] || categoryLabels.other;
  const action = idea.status === 'inbox' ? '<button class="card-action" data-action="start" data-id="' + escapeHtml(idea.id) + '" type="button">Начать ↗</button>' : '<button class="card-action" data-action="open" data-id="' + escapeHtml(idea.id) + '" type="button">Открыть ↗</button>';
  return `<article class="idea-card">
    <div class="card-topline"><span class="card-category"><i class="category-mark" aria-hidden="true"></i>${escapeHtml(category)}</span><span class="card-priority ${idea.priority === 'high' ? 'priority-high' : idea.priority === 'low' ? 'priority-low' : ''}">${escapeHtml(priorityLabels[idea.priority])}</span></div>
    <button class="card-open" data-action="open" data-id="${escapeHtml(idea.id)}" type="button" aria-label="Открыть идею: ${escapeHtml(idea.title)}"><h3>${escapeHtml(idea.title)}</h3><p>${escapeHtml(idea.summary || 'Открой карточку, чтобы добавить описание и первые шаги.')}</p></button>
    <div class="card-progress"><div class="progress-meta"><span>${p.total ? `${p.done} из ${p.total} шагов` : 'Шаги не добавлены'}</span><span>${p.total ? `${p.percent}%` : shortDate(idea.updatedAt)}</span></div><div class="progress-track" role="progressbar" aria-label="Выполнение шагов: ${escapeHtml(idea.title)}" aria-valuemin="0" aria-valuemax="${p.total || 1}" aria-valuenow="${p.done}"><i style="width:${p.total ? p.percent : 0}%"></i></div></div>
    <div class="card-footer"><span class="status-badge status-${escapeHtml(idea.status)}">${escapeHtml(statusLabels[idea.status])}</span>${action}</div>
  </article>`;
}
function render() {
  const counts = { all: ideas.length, inbox: 0, active: 0, done: 0 };
  let completeSteps = 0;
  ideas.forEach((idea) => { counts[idea.status] += 1; completeSteps += idea.tasks.filter((item) => item.done).length; });
  $('#totalCount').textContent = counts.all;
  $('#inboxCount').textContent = counts.inbox;
  $('#activeCount').textContent = counts.active;
  $('#doneCount').textContent = counts.done;
  $('#statTotal').textContent = counts.all;
  $('#statActive').textContent = counts.active;
  $('#statSteps').textContent = completeSteps;
  $('#visibleCount').textContent = '';
  $$('.nav-link').forEach((button) => {
    const active = button.dataset.view === state.view;
    button.classList.toggle('is-active', active);
    if (active) button.setAttribute('aria-current', 'page'); else button.removeAttribute('aria-current');
  });
  $('#topViewLabel').textContent = viewLabels[state.view];
  $('#pageTitle').innerHTML = `${escapeHtml(viewCopy[state.view][0])}<span>.</span>`;
  $('#pageSubtitle').textContent = viewCopy[state.view][1];
  const q = state.query.trim().toLocaleLowerCase('ru');
  const visible = ideas.filter((idea) => (state.view === 'all' || idea.status === state.view) && (!q || [idea.title, idea.summary, idea.description, categoryLabels[idea.category]].join(' ').toLocaleLowerCase('ru').includes(q)))
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  $('#visibleCount').textContent = String(visible.length).padStart(2, '0');
  ideaGrid.innerHTML = visible.map(cardMarkup).join('');
  const empty = visible.length === 0;
  $('#emptyState').hidden = !empty;
  ideaGrid.hidden = empty;
  if (empty && (state.query || state.view !== 'all')) {
    $('#emptyTitle').textContent = state.query ? 'Ничего не нашлось' : `Пока нет раздела «${statusLabels[state.view]}»`;
    $('#emptyCopy').textContent = state.query ? 'Попробуй изменить запрос или переключить раздел.' : 'Можно оставить идею во входящих или начать новую — решать тебе.';
  } else {
    $('#emptyTitle').textContent = 'Пока здесь тихо';
    $('#emptyCopy').textContent = 'Добавь первую мысль — необязательно знать весь план. Достаточно названия и следующего шага.';
  }
}

function openNewIdea() {
  ideaForm.reset();
  ideaForm.elements.ideaId.value = '';
  ideaForm.elements.category.value = 'tool';
  ideaForm.elements.priority.value = 'normal';
  ideaForm.elements.status.value = 'inbox';
  $('#ideaDialogTitle').textContent = 'Добавить идею';
  ideaDialog.showModal();
  requestAnimationFrame(() => ideaForm.elements.title.focus());
}
function editIdea(id) {
  const idea = ideas.find((item) => item.id === id);
  if (!idea) return;
  if (detailDialog.open) detailDialog.close();
  ideaForm.reset();
  ideaForm.elements.ideaId.value = idea.id;
  ideaForm.elements.title.value = idea.title;
  ideaForm.elements.category.value = idea.category;
  ideaForm.elements.priority.value = idea.priority;
  ideaForm.elements.status.value = idea.status;
  ideaForm.elements.summary.value = idea.summary;
  ideaForm.elements.description.value = idea.description;
  ideaForm.elements.tasks.value = idea.tasks.map((item) => item.text).join('\n');
  $('#ideaDialogTitle').textContent = 'Изменить идею';
  ideaDialog.showModal();
  requestAnimationFrame(() => ideaForm.elements.title.focus());
}
function renderDetail(id) {
  const idea = ideas.find((item) => item.id === id);
  if (!idea) { detailDialog.close(); return; }
  state.selectedId = id;
  const p = progress(idea);
  const tasks = idea.tasks.length ? `<ul class="task-list">${idea.tasks.map((item) => `<li class="task-item ${item.done ? 'is-done' : ''}"><input type="checkbox" data-task-check="${escapeHtml(item.id)}" aria-label="${item.done ? 'Отметить незавершённым' : 'Отметить выполненным'}: ${escapeHtml(item.text)}" ${item.done ? 'checked' : ''}><span>${escapeHtml(item.text)}</span></li>`).join('')}</ul>` : '<p class="no-tasks">Пока нет шагов. Добавь первый ниже — большой проект начинается с малого.</p>';
  detailContent.innerHTML = `<div class="detail-top"><div><div class="detail-kicker">${escapeHtml(categoryLabels[idea.category])} · ДОБАВЛЕНО ${escapeHtml(shortDate(idea.createdAt).toLocaleUpperCase('ru'))}</div><h2 class="detail-title">${escapeHtml(idea.title)}</h2><p class="detail-summary">${escapeHtml(idea.summary || 'Короткое описание пока не добавлено.')}</p></div><button class="icon-button close-button" type="button" data-action="detail-close" aria-label="Закрыть карточку">×</button></div>
    <div class="detail-controls"><label class="sr-only" for="detailStatus">Статус идеи</label><select id="detailStatus" aria-label="Статус идеи" data-status-id="${escapeHtml(idea.id)}"><option value="inbox" ${idea.status === 'inbox' ? 'selected' : ''}>Входящие</option><option value="active" ${idea.status === 'active' ? 'selected' : ''}>В работе</option><option value="done" ${idea.status === 'done' ? 'selected' : ''}>Готово</option></select><span class="status-badge status-${escapeHtml(idea.status)}">${escapeHtml(statusLabels[idea.status])}</span><span class="status-badge">${p.total ? `${p.done}/${p.total} шагов` : 'Шаги не добавлены'}</span></div>
    <div class="detail-body"><h3 class="detail-section-title">ЗАМЫСЕЛ</h3><p class="detail-description ${idea.description ? '' : 'is-empty'}">${escapeHtml(idea.description || 'Добавь подробности через кнопку «Редактировать идею».')}</p></div>
    <div class="detail-body"><h3 class="detail-section-title">СЛЕДУЮЩИЕ ШАГИ</h3>${tasks}<form class="add-task-form" id="addTaskForm"><label class="sr-only" for="newTaskInput">Новый шаг</label><input id="newTaskInput" name="task" maxlength="180" placeholder="Добавить маленький следующий шаг…" required><button type="submit" aria-label="Добавить шаг">+</button></form></div>
    ${idea.notes ? `<div class="detail-notes">${escapeHtml(idea.notes)}</div>` : ''}
    <div class="detail-actions"><button class="danger-button" type="button" data-action="delete" data-id="${escapeHtml(idea.id)}">Удалить идею</button><div><button class="secondary-button" type="button" data-action="detail-close">Закрыть</button><button class="primary-button" type="button" data-action="edit" data-id="${escapeHtml(idea.id)}">Редактировать</button></div></div>`;
}
function openDetail(id) { renderDetail(id); if (!detailDialog.open) detailDialog.showModal(); }
function createBackupFile() {
  const exported = { app: 'IDEA DECK', version: 1, exportedAt: new Date().toISOString(), ideas };
  return new File([JSON.stringify(exported, null, 2)], `idea-deck-backup-${new Date().toISOString().slice(0, 10)}.json`, { type: 'application/json' });
}
function downloadBackup() {
  const file = createBackupFile();
  const url = URL.createObjectURL(file);
  const a = document.createElement('a'); a.href = url; a.download = file.name; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast('Файл переноса скачан');
}
async function shareBackup() {
  const file = createBackupFile();
  if (navigator.share && navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ title: 'IDEA DECK — перенос идей', text: 'Резервная копия для переноса между устройствами.', files: [file] });
      showToast('Выбери, куда передать файл копии');
      return;
    } catch (error) {
      if (error?.name === 'AbortError') return;
    }
  }
  downloadBackup();
  showToast('Файл скачан — отправь его на другое устройство');
}
function mergeIdeaSnapshots(currentIdeas, incomingIdeas) {
  const merged = currentIdeas.map(normalizeIdea).filter(Boolean).map(migrateIdea);
  let added = 0;
  let matched = 0;
  for (const rawIdea of incomingIdeas) {
    const normalized = normalizeIdea(rawIdea);
    if (!normalized) continue;
    const incoming = migrateIdea(normalized);
    const index = merged.findIndex((idea) => idea.id === incoming.id);
    if (index < 0) {
      merged.push(incoming);
      added += 1;
      continue;
    }
    matched += 1;
    const current = merged[index];
    const incomingIsNewer = Date.parse(incoming.updatedAt) >= Date.parse(current.updatedAt);
    const latest = incomingIsNewer ? incoming : current;
    const taskOrder = [...latest.tasks, ...(incomingIsNewer ? current.tasks : incoming.tasks)];
    const taskMap = new Map();
    for (const item of taskOrder) {
      const key = item.text.trim().toLocaleLowerCase('ru');
      const previous = taskMap.get(key);
      taskMap.set(key, previous ? { ...previous, done: previous.done || item.done } : { ...item });
    }
    const tasks = [...taskMap.values()];
    merged[index] = {
      ...current,
      ...latest,
      createdAt: Date.parse(current.createdAt) <= Date.parse(incoming.createdAt) ? current.createdAt : incoming.createdAt,
      updatedAt: Date.parse(current.updatedAt) >= Date.parse(incoming.updatedAt) ? current.updatedAt : incoming.updatedAt,
      tasks,
    };
  }
  return { ideas: merged, added, matched };
}

$('.side-nav').addEventListener('click', (event) => {
  const button = event.target.closest('[data-view]');
  if (!button) return;
  state.view = button.dataset.view;
  render();
});
searchInput.addEventListener('input', () => { state.query = searchInput.value; render(); });
$('#newIdeaBtn').addEventListener('click', openNewIdea);
$('#emptyNewBtn').addEventListener('click', openNewIdea);
$('#exportBtn').addEventListener('click', downloadBackup);
$('#importBtn').addEventListener('click', () => importFile.click());
$('#shareBtn').addEventListener('click', shareBackup);
$('#todayDate').textContent = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date());

document.addEventListener('click', (event) => {
  const closeIdea = event.target.closest('[data-close-idea]');
  if (closeIdea) { ideaDialog.close(); return; }
  const actionButton = event.target.closest('[data-action]');
  if (!actionButton) return;
  const { action, id } = actionButton.dataset;
  if (action === 'open') openDetail(id);
  if (action === 'edit') editIdea(id);
  if (action === 'detail-close') detailDialog.close();
  if (action === 'start') {
    const idea = ideas.find((item) => item.id === id);
    if (idea) { idea.status = 'active'; idea.updatedAt = new Date().toISOString(); persist('Идея перешла в работу'); }
  }
  if (action === 'delete') {
    const idea = ideas.find((item) => item.id === id);
    if (idea && window.confirm(`Удалить «${idea.title}» из этой копии приложения?`)) {
      ideas = ideas.filter((item) => item.id !== id); detailDialog.close(); persist('Идея удалена');
    }
  }
});

ideaForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(ideaForm);
  const id = String(data.get('ideaId') || '');
  const existing = ideas.find((item) => item.id === id);
  const tasks = String(data.get('tasks') || '').split('\n').map((text) => text.trim()).filter(Boolean).map((text) => task(text.slice(0, 180)));
  const next = normalizeIdea({
    id: existing?.id || makeId(), ideaVersion: existing?.ideaVersion || 1, title: data.get('title'), category: data.get('category'), priority: data.get('priority'), status: data.get('status'),
    summary: data.get('summary'), description: data.get('description'), notes: existing?.notes || '', tasks: existing ? mergeTasks(existing.tasks, tasks) : tasks,
    createdAt: existing?.createdAt || new Date().toISOString(), updatedAt: new Date().toISOString(),
  });
  if (!next) return;
  if (existing) ideas = ideas.map((item) => item.id === id ? next : item); else ideas.unshift(next);
  ideaDialog.close(); persist(existing ? 'Идея обновлена' : 'Идея добавлена');
});
function mergeTasks(oldTasks, editedTasks) {
  const oldByText = new Map(oldTasks.map((item) => [item.text.trim().toLocaleLowerCase('ru'), item]));
  return editedTasks.map((item) => { const old = oldByText.get(item.text.trim().toLocaleLowerCase('ru')); return old ? { ...item, id: old.id, done: old.done } : item; });
}

detailContent.addEventListener('change', (event) => {
  const checkbox = event.target.closest('[data-task-check]');
  const statusSelect = event.target.closest('[data-status-id]');
  if (checkbox) {
    const idea = ideas.find((item) => item.id === state.selectedId);
    const item = idea?.tasks.find((taskItem) => taskItem.id === checkbox.dataset.taskCheck);
    if (item) { item.done = checkbox.checked; idea.updatedAt = new Date().toISOString(); persist('Шаг обновлён'); renderDetail(idea.id); }
  }
  if (statusSelect) {
    const idea = ideas.find((item) => item.id === statusSelect.dataset.statusId);
    if (idea) { idea.status = statusSelect.value; idea.updatedAt = new Date().toISOString(); persist('Статус обновлён'); renderDetail(idea.id); }
  }
});
detailContent.addEventListener('submit', (event) => {
  if (event.target.id !== 'addTaskForm') return;
  event.preventDefault();
  const input = $('#newTaskInput', event.target);
  const text = input.value.trim();
  const idea = ideas.find((item) => item.id === state.selectedId);
  if (text && idea) { idea.tasks.push(task(text.slice(0, 180))); idea.updatedAt = new Date().toISOString(); persist('Шаг добавлен'); renderDetail(idea.id); $('#newTaskInput')?.focus(); }
});

importFile.addEventListener('change', async () => {
  const file = importFile.files?.[0];
  if (!file) return;
  try {
    const parsed = JSON.parse(await file.text());
    const list = Array.isArray(parsed) ? parsed : parsed.ideas;
    if (!Array.isArray(list) || list.some((item) => !item || typeof item.title !== 'string')) throw new Error('bad data');
    const incoming = list.map(normalizeIdea).filter(Boolean);
    if (incoming.length !== list.length) throw new Error('invalid ideas');
    if (window.confirm(`Объединить ${incoming.length} идей из файла с текущим списком? Ничего не будет удалено. Одинаковые карточки и шаги объединятся.`)) {
      const result = mergeIdeaSnapshots(ideas, incoming);
      ideas = result.ideas;
      persist(`Перенос выполнен: +${result.added} новых, ${result.matched} объединено`);
    }
  } catch { showToast('Файл не похож на резервную копию IDEA DECK'); }
  importFile.value = '';
});

render();
