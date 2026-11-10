"use strict";

const SITE_URL = "https://центрконсалт.рф";
const PAGES = {
  home: `${SITE_URL}/`,
  contacts: `${SITE_URL}/contacts/`,
  licenses: `${SITE_URL}/licenzii/`,
  medical: `${SITE_URL}/medicinskaya-licenziya/`,
  education: `${SITE_URL}/obrazovatelnaya-licenziya/`,
  sro: `${SITE_URL}/vstuplenie-v-sro1/`,
  sroBuild: `${SITE_URL}/sro-stroitelstvo/`,
  readyCompany: `${SITE_URL}/gotovy-firmy-s-sro/`
};
const submission = (at, source, phone, page, fields = []) => ({
  at, source, phone, page,
  fields: [{ label: "Телефон", value: phone }, ...fields.map(([label, value]) => ({ label, value }))]
});

const INITIAL_DEVICES = [
  {
    id: "device-01", fingerprint: "a7c4e92f81b6d305", status: "active",
    events: [
      submission("2026-11-10T16:42:00+03:00", "callback", "+7 (000) 241-83-17", PAGES.contacts),
      submission("2026-11-10T16:39:00+03:00", "form", "+7 (000) 241-83-17", PAGES.medical, [
        ["Имя", "Александр М."], ["Email", "alexander@example.test"], ["Компания", "ООО «Пример Север»"],
        ["Город", "Москва"], ["Услуга", "Медицинская лицензия"], ["Форма собственности", "ООО"],
        ["Количество сотрудников", "12"], ["Удобное время звонка", "После 17:00"],
        ["Комментарий", "Нужна консультация по документам"]
      ]),
      submission("2026-11-10T16:31:00+03:00", "form", "+7 (000) 241-83-17", PAGES.licenses, [
        ["Имя", "Александр М."], ["Услуга", "Лицензирование"], ["Комментарий", "Уточнить список документов"]
      ]),
      submission("2026-11-10T16:22:00+03:00", "callback", "+7 (000) 241-83-17", PAGES.home)
    ]
  },
  {
    id: "device-02", fingerprint: "5d8b13a4f90c72e6", status: "active",
    events: [
      submission("2026-11-10T16:18:00+03:00", "form", "+7 (000) 518-20-64", PAGES.sro, [
        ["Имя", "Марина К."], ["Email", "marina@example.test"], ["Компания", "ООО «Пример Проект»"],
        ["Город", "Тверь"], ["Комментарий", "Нужны условия вступления в СРО"]
      ]),
      submission("2026-11-09T12:07:00+03:00", "callback", "+7 (000) 518-20-64", PAGES.sro)
    ]
  },
  {
    id: "device-03", fingerprint: "e90f2d76b4a813c5", status: "blocked", blockReason: "Частые повторные заявки", blockComment: "Пять одинаковых обращений за короткое время.", blockedAt: "2026-11-10T15:58:00+03:00",
    events: [
      submission("2026-11-10T15:56:00+03:00", "callback", "+7 (000) 390-44-18", PAGES.home),
      submission("2026-11-10T15:52:00+03:00", "form", "+7 (000) 390-44-18", PAGES.contacts, [
        ["Имя", "Игорь"], ["Сообщение", "Перезвоните мне"]
      ]),
      submission("2026-11-10T15:49:00+03:00", "form", "+7 (000) 390-44-18", PAGES.contacts, [
        ["Имя", "Игорь"], ["Сообщение", "Перезвоните мне"]
      ]),
      submission("2026-11-10T15:45:00+03:00", "callback", "+7 (000) 390-44-18", PAGES.licenses),
      submission("2026-11-10T15:41:00+03:00", "form", "+7 (000) 390-44-18", PAGES.contacts, [
        ["Имя", "Игорь"], ["Сообщение", "Перезвоните мне"]
      ])
    ]
  },
  {
    id: "device-04", fingerprint: "c13a95b7e2d6408f", status: "active",
    events: [
      submission("2026-11-10T15:33:00+03:00", "callback", "+7 (000) 624-71-35", PAGES.home)
    ]
  },
  {
    id: "device-05", fingerprint: "72fe0b8c641ad935", status: "active",
    events: [
      submission("2026-11-10T14:11:00+03:00", "form", "+7 (000) 773-09-42", PAGES.education, [
        ["Имя", "Елена Д."], ["Компания", "ООО «Пример Образование»"],
        ["Email", "elena@example.test"], ["Комментарий", "Интересует образовательная лицензия"]
      ]),
      submission("2026-11-10T13:47:00+03:00", "form", "+7 (000) 773-09-42", PAGES.licenses, [
        ["Имя", "Елена Д."], ["Услуга", "Образовательная лицензия"]
      ]),
      submission("2026-11-08T10:34:00+03:00", "callback", "+7 (000) 773-09-42", PAGES.education)
    ]
  },
  {
    id: "device-06", fingerprint: "b406c91e7a2d58f3", status: "blocked", blockReason: "Некорректные контактные данные", blockComment: "Повторяющиеся заявки с разными номерами.", blockedAt: "2026-11-10T13:40:00+03:00",
    events: [
      submission("2026-11-10T13:37:00+03:00", "form", "+7 (000) 190-12-86", PAGES.contacts, [
        ["Имя", "Павел"], ["Сообщение", "Нужна консультация"]
      ]),
      submission("2026-11-10T13:30:00+03:00", "form", "+7 (000) 190-12-85", PAGES.contacts, [
        ["Имя", "Павел"], ["Сообщение", "Нужна консультация"]
      ]),
      submission("2026-11-10T13:26:00+03:00", "callback", "+7 (000) 190-12-84", PAGES.home)
    ]
  },
  {
    id: "device-07", fingerprint: "94d2a603f71b8ce5", status: "active",
    events: [
      submission("2026-11-10T11:24:00+03:00", "form", "+7 (000) 845-36-20", PAGES.sroBuild, [
        ["Имя", "Наталья Р."], ["Компания", "ООО «Пример Строй»"],
        ["Город", "Калуга"], ["Комментарий", "Нужно вступить в СРО строителей"]
      ])
    ]
  },
  {
    id: "device-08", fingerprint: "f8a35d1c602e49b7", status: "active",
    events: [
      submission("2026-11-09T17:05:00+03:00", "callback", "+7 (000) 406-58-91", PAGES.contacts),
      submission("2026-11-09T16:54:00+03:00", "form", "+7 (000) 406-58-91", PAGES.readyCompany, [
        ["Имя", "Антон С."], ["Email", "anton@example.test"],
        ["Комментарий", "Интересует готовая компания с СРО"]
      ])
    ]
  }
];

const STORAGE_KEY = "centrconsalt-device-status-v1";
const THEME_KEY = "centrconsalt-theme-v1";
const dateFormatter = new Intl.DateTimeFormat("ru-RU", { timeZone: "Europe/Moscow", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
const readStorage = (key) => { try { return localStorage.getItem(key); } catch { return null; } };
const writeStorage = (key, value) => { try { localStorage.setItem(key, value); } catch { /* Продолжить без сохранения. */ } };
const removeStorage = (key) => { try { localStorage.removeItem(key); } catch { /* Нечего сбрасывать. */ } };
const formatDate = (at) => dateFormatter.format(new Date(at));
const fieldValue = (value) => Array.isArray(value) ? value.join(", ") : typeof value === "boolean" ? (value ? "Да" : "Нет") : String(value ?? "—");
const safePageUrl = (value) => {
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) ? url.href : null;
  } catch { return null; }
};

function loadOverrides() {
  try {
    const parsed = JSON.parse(readStorage(STORAGE_KEY) || "{}");
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch { return {}; }
}

let overrides = loadOverrides();
let selectedId = INITIAL_DEVICES[0].id;
let currentFilter = "all";
let currentView = "devices";
let pendingAction = null;
let modalReturnFocus = null;
let toastTimer;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function getDevices() {
  return INITIAL_DEVICES.map((device) => ({ ...device, ...(overrides[device.id] || {}) }))
    .sort((a, b) => Date.parse(b.events[0].at) - Date.parse(a.events[0].at));
}

function getLatestPhone(device) {
  return device.events.find((event) => event.phone)?.phone || null;
}

function filteredDevices() {
  const query = $("#deviceSearch").value.trim().toLowerCase();
  const compactQuery = query.replace(/\D/g, "");
  return getDevices().filter((device) => {
    if (currentFilter !== "all" && device.status !== currentFilter) return false;
    if (!query) return true;
    const phones = device.events.map((event) => event.phone).filter(Boolean);
    return device.fingerprint.toLowerCase().includes(query)
      || phones.some((phone) => phone.toLowerCase().includes(query) || (compactQuery && phone.replace(/\D/g, "").includes(compactQuery)));
  });
}

function renderStats(devices) {
  const events = devices.reduce((total, device) => total + device.events.length, 0);
  const blocked = devices.filter((device) => device.status === "blocked").length;
  const items = [
    ["Устройств", devices.length, "в списке", '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 8h8M8 12h8M8 16h5"/>'],
    ["Обращений", events, "в истории", '<path d="M5 4h14v16H5zM8 8h8M8 12h8M8 16h5"/>'],
    ["Заблокировано", blocked, "устройств", '<path d="M12 3 4 6v5c0 5 3.4 8 8 10 4.6-2 8-5 8-10V6zM9 12l2 2 4-4"/>']
  ];
  $("#statsGrid").innerHTML = items.map(([label, value, hint, icon]) => `<div class="stat-card"><div class="stat-top"><span>${label}</span><span class="stat-icon"><svg viewBox="0 0 24 24" aria-hidden="true">${icon}</svg></span></div><strong>${value}<span class="stat-hint">${hint}</span></strong></div>`).join("");
}

function renderRows(devices) {
  const tbody = $("#deviceRows");
  tbody.innerHTML = devices.map((device) => {
    const latest = device.events[0];
    const phone = getLatestPhone(device);
    const selected = selectedId === device.id;
    return `<tr data-device-id="${device.id}" tabindex="0" aria-selected="${selected}" class="${selected ? "is-selected" : ""}">
      <td data-label="Последнее обращение"><span class="cell-primary">${formatDate(latest.at)}</span><span class="cell-secondary">${latest.source === "form" ? "Форма обратной связи" : "Запрос на звонок"}</span></td>
      <td data-label="Слепок устройства"><span class="fingerprint">${escapeHTML(device.fingerprint)}</span></td>
      <td data-label="Телефон">${phone ? escapeHTML(phone) : '<span class="muted-dash">—</span>'}</td>
      <td class="count-cell" data-label="Заявок">${device.events.length}</td>
      <td data-label="Статус"><span class="status ${device.status}">${device.status === "blocked" ? "Заблокировано" : "Активно"}</span></td>
    </tr>`;
  }).join("");
  $("#emptyState").hidden = devices.length !== 0;
  $("#resultCount").textContent = `${devices.length} из ${INITIAL_DEVICES.length}`;
}

function renderDetail(device) {
  const container = $("#deviceDetail");
  if (!device) {
    container.innerHTML = '<div class="detail-block"><h2>Устройство не выбрано</h2><p class="detail-explain">Выберите устройство в списке или измените фильтр.</p></div>';
    return;
  }
  const blocked = device.status === "blocked";
  const history = device.events.map((event) => {
    const pageUrl = safePageUrl(event.page);
    const fields = event.fields || [];
    return `<div class="history-item">
      <div class="history-item-top"><strong>${event.source === "form" ? "Форма обратной связи" : "Запрос на звонок"}</strong><time datetime="${escapeHTML(event.at)}">${formatDate(event.at)}</time></div>
      <p>Телефон: <b>${escapeHTML(event.phone)}</b></p>
      <p class="history-page">Страница отправки: ${pageUrl ? `<a href="${escapeHTML(pageUrl)}" target="_blank" rel="noopener noreferrer">${escapeHTML(event.page)}</a>` : escapeHTML(event.page)}</p>
      <details class="history-fields"><summary>Все поля заявки (${fields.length})</summary><dl>${fields.map((field) => `<div><dt>${escapeHTML(field.label)}</dt><dd>${escapeHTML(fieldValue(field.value))}</dd></div>`).join("")}</dl></details>
    </div>`;
  }).join("");
  container.innerHTML = `<div class="detail-header"><h2>Устройство</h2><span class="status ${device.status}">${blocked ? "Заблокировано" : "Активно"}</span></div>
    <div class="detail-summary">
      <div class="detail-block"><span class="detail-label">Цифровой слепок устройства</span><div class="detail-fingerprint"><code>${escapeHTML(device.fingerprint)}</code><button class="copy-button" type="button" data-copy-fingerprint="${escapeHTML(device.fingerprint)}" aria-label="Скопировать слепок">Копировать</button></div><p class="detail-explain">Используйте слепок, чтобы проверить историю обращений устройства. IP-адрес не служит основанием для блокировки.</p>
        <div class="detail-meta"><div><span class="detail-label">Обращений</span><strong>${device.events.length}</strong></div><div><span class="detail-label">Последнее</span><strong>${formatDate(device.events[0].at)}</strong></div></div>
        ${blocked ? `<div class="block-reason"><strong>Причина: ${escapeHTML(device.blockReason || "Подозрительная активность")}</strong>${device.blockComment ? `<p>${escapeHTML(device.blockComment)}</p>` : ""}${device.blockedAt ? `<small>Заблокировано ${formatDate(device.blockedAt)}</small>` : ""}</div>` : ""}
      </div>
      <div class="detail-actions"><button class="${blocked ? "primary-button" : "secondary-button block"} action-button" type="button" data-action="${blocked ? "unblock" : "block"}">${blocked ? "Разблокировать устройство" : "Заблокировать устройство"}</button><p class="action-hint">${blocked ? "Устройство снова получит статус «Активно»." : "Перед блокировкой проверьте номера и историю заявок."}</p></div>
    </div>
    <div class="detail-block detail-history"><div class="history-heading"><h3>История заявок</h3><span>${device.events.length} ${pluralize(device.events.length, "обращение", "обращения", "обращений")}</span></div><div class="history-list">${history}</div></div>`;
}

function pluralize(number, one, few, many) {
  const lastTwo = number % 100;
  const last = number % 10;
  return lastTwo >= 11 && lastTwo <= 14 ? many : last === 1 ? one : last >= 2 && last <= 4 ? few : many;
}

function render() {
  const all = getDevices();
  const visible = filteredDevices();
  if (!visible.some((device) => device.id === selectedId)) selectedId = visible[0]?.id || null;
  renderStats(all);
  renderRows(visible);
  renderDetail(visible.find((device) => device.id === selectedId));
}

function setView(view) {
  currentView = view;
  $("#devicesView").hidden = view !== "devices";
  $("#visitorView").hidden = view !== "visitor";
  $("#currentSection").textContent = view === "devices" ? "Устройства и заявки" : "Экран посетителя";
  $$("[data-view-button]").forEach((button) => {
    const current = button.dataset.viewButton === view;
    button.classList.toggle("is-current", current);
    if (current) button.setAttribute("aria-current", "page"); else button.removeAttribute("aria-current");
  });
  window.scrollTo({ top: 0, behavior: "instant" });
}

function setTheme(theme) {
  const light = theme === "light";
  document.body.dataset.theme = light ? "light" : "dark";
  $("#themeToggle").setAttribute("aria-pressed", String(light));
  $("#themeToggle").setAttribute("aria-label", light ? "Включить тёмную тему" : "Включить светлую тему");
  $("#themeLabel").textContent = light ? "Тёмная тема" : "Светлая тема";
  writeStorage(THEME_KEY, light ? "light" : "dark");
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

function openModal(action) {
  const device = getDevices().find((item) => item.id === selectedId);
  if (!device) return;
  pendingAction = action;
  modalReturnFocus = document.activeElement;
  const block = action === "block";
  $("#modalIcon").classList.toggle("unblock", !block);
  $("#modalIcon").textContent = block ? "!" : "✓";
  $("#modalTitle").textContent = block ? "Заблокировать устройство?" : "Разблокировать устройство?";
  $("#modalDescription").textContent = block
    ? `Слепок ${device.fingerprint}. Укажите причину, чтобы коллегам было понятно решение.`
    : `Слепок ${device.fingerprint}. Статус устройства изменится на «Активно».`;
  $("#reasonFields").hidden = !block;
  $("#confirmAction").textContent = block ? "Заблокировать" : "Разблокировать";
  $("#actionForm").reset();
  $("#modalBackdrop").hidden = false;
  document.body.style.overflow = "hidden";
  (block ? $("#blockReason") : $("#confirmAction")).focus();
}

function closeModal() {
  $("#modalBackdrop").hidden = true;
  document.body.style.overflow = "";
  pendingAction = null;
  modalReturnFocus?.focus();
}

function applyAction(event) {
  event.preventDefault();
  if (!pendingAction || !selectedId) return;
  if (pendingAction === "block") {
    overrides[selectedId] = {
      status: "blocked",
      blockReason: $("#blockReason").value,
      blockComment: $("#reasonComment").value.trim().slice(0, 300),
      blockedAt: new Date().toISOString()
    };
    showToast("Устройство заблокировано");
  } else {
    overrides[selectedId] = { status: "active", blockReason: null, blockComment: null, blockedAt: null };
    showToast("Устройство разблокировано");
  }
  writeStorage(STORAGE_KEY, JSON.stringify(overrides));
  closeModal();
  render();
}

async function copyFingerprint(value) {
  try {
    await navigator.clipboard.writeText(value);
    showToast("Слепок скопирован");
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    showToast(copied ? "Слепок скопирован" : "Не удалось скопировать слепок");
  }
}

$$("[data-view-button]").forEach((button) => button.addEventListener("click", () => setView(button.dataset.viewButton)));
$("#themeToggle").addEventListener("click", () => setTheme(document.body.dataset.theme === "dark" ? "light" : "dark"));
$("#resetChanges").addEventListener("click", () => { overrides = {}; removeStorage(STORAGE_KEY); currentFilter = "all"; $("#deviceSearch").value = ""; selectedId = INITIAL_DEVICES[0].id; $$("[data-filter]").forEach((button) => { const active = button.dataset.filter === "all"; button.classList.toggle("is-active", active); button.setAttribute("aria-pressed", String(active)); }); render(); showToast("Исходные статусы восстановлены"); });
$$("[data-filter]").forEach((button) => button.addEventListener("click", () => { currentFilter = button.dataset.filter; $$("[data-filter]").forEach((item) => { const active = item === button; item.classList.toggle("is-active", active); item.setAttribute("aria-pressed", String(active)); }); render(); }));
$("#deviceSearch").addEventListener("input", render);
$("#deviceRows").addEventListener("click", (event) => { const row = event.target.closest("tr[data-device-id]"); if (row) { selectedId = row.dataset.deviceId; render(); } });
$("#deviceRows").addEventListener("keydown", (event) => { if (event.key !== "Enter" && event.key !== " ") return; const row = event.target.closest("tr[data-device-id]"); if (row) { event.preventDefault(); selectedId = row.dataset.deviceId; render(); $("#deviceDetail").scrollIntoView({ block: "nearest", behavior: "smooth" }); } });
$("#deviceDetail").addEventListener("click", (event) => { const action = event.target.closest("[data-action]"); const copy = event.target.closest("[data-copy-fingerprint]"); if (action) openModal(action.dataset.action); if (copy) copyFingerprint(copy.dataset.copyFingerprint); });
$("#cancelAction").addEventListener("click", closeModal);
$("#modalBackdrop").addEventListener("click", (event) => { if (event.target.id === "modalBackdrop") closeModal(); });
$("#actionForm").addEventListener("submit", applyAction);
document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !$("#modalBackdrop").hidden) closeModal(); });
function setVisitorOverlay(open) {
  $("#visitorOverlay").hidden = !open;
  $("#sitePageUnderlay").setAttribute("aria-hidden", String(open));
  $("#tryRequest").tabIndex = open ? -1 : 0;
  (open ? $("#closeVisitorModal") : $("#tryRequest")).focus();
}
$("#closeVisitorModal").addEventListener("click", () => setVisitorOverlay(false));
$("#tryRequest").addEventListener("click", () => setVisitorOverlay(true));
$("#visitorForm").addEventListener("submit", (event) => { event.preventDefault(); $("#visitorFormFeedback").hidden = false; $("#visitorFormFeedback").textContent = "Спасибо за обращение. Мы разберёмся в ситуации и свяжемся с вами."; $("#visitorForm").reset(); });

setTheme(readStorage(THEME_KEY) === "light" ? "light" : "dark");
render();
