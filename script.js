// === ALMAZMED SCRIPTS ===

function openModal() {
    document.getElementById('modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    document.getElementById('modal').classList.remove('active');
    document.body.style.overflow = '';
}
document.getElementById('modal').addEventListener('click', function(e) {
    if(e.target === this) closeModal();
});

function handleFormSubmit(e, form, successId) {
    e.preventDefault();
    const successEl = successId ? document.getElementById(successId) : document.getElementById('formSuccess');
    const formEl = successId ? document.getElementById('modalFormContent') : form;
    if(successId) { formEl.style.display = 'none'; }
    else { form.style.display = 'none'; }
    successEl.classList.add('active');
    setTimeout(() => {
        if(successId) { formEl.style.display = 'block'; }
        else { form.style.display = 'block'; }
        successEl.classList.remove('active');
        form.reset();
        if(successId) closeModal();
    }, 3000);
    return false;
}

const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) { entry.target.classList.add('visible'); }
    });
}, { threshold: 0.1 });
revealElements.forEach(el => revealObserver.observe(el));

const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    header.style.boxShadow = window.pageYOffset > 100 ? '0 2px 20px rgba(0,0,0,0.08)' : 'none';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
});

function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    if(nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '72px';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = '#fff';
        nav.style.padding = '24px';
        nav.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
        nav.style.gap = '16px';
        nav.style.zIndex = '999';
    }
}

// === PRICE LIST ===
const priceData = [
    { id:1, name:"Скорость оседания эритроцитов (ESR)", price:20000, cat:"biochemistry" },
    { id:2, name:"Гликозилированный гемоглобин", price:110000, cat:"biochemistry" },
    { id:3, name:"Группа крови-резус фактор", price:150000, cat:"group" },
    { id:4, name:"Кортизол", price:110000, cat:"hormones" },
    { id:5, name:"Прогестерон", price:110000, cat:"hormones" },
    { id:6, name:"Тестостерон общий", price:120000, cat:"hormones" },
    { id:7, name:"ТТГ (тиреотропный гормон)", price:95000, cat:"hormones" },
    { id:8, name:"Т3 свободный", price:95000, cat:"hormones" },
    { id:9, name:"Т4 свободный", price:95000, cat:"hormones" },
    { id:10, name:"Общий анализ крови (ОАК)", price:35000, cat:"group" },
    { id:11, name:"Общий анализ мочи (ОАМ)", price:25000, cat:"urine" },
    { id:12, name:"Бактериологический посев крови", price:180000, cat:"bacteria" },
    { id:13, name:"Бактериологический посев мочи", price:150000, cat:"bacteria" },
    { id:14, name:"Аллергопанель пищевая (IgE)", price:280000, cat:"allergy" },
    { id:15, name:"Аллергопанель бытовая (IgE)", price:280000, cat:"allergy" },
    { id:16, name:"АСЛ-О (антистрептолизин О)", price:65000, cat:"autoimmune" },
    { id:17, name:"Ревматоидный фактор", price:75000, cat:"autoimmune" },
    { id:18, name:"АНА (антинуклеарные антитела)", price:120000, cat:"autoimmune" },
    { id:19, name:"Глюкоза", price:35000, cat:"biochemistry" },
    { id:20, name:"Холестерин общий", price:45000, cat:"biochemistry" },
    { id:21, name:"АЛТ (аланинаминотрансфераза)", price:45000, cat:"biochemistry" },
    { id:22, name:"АСТ (аспартатаминотрансфераза)", price:45000, cat:"biochemistry" },
    { id:23, name:"Билирубин общий", price:50000, cat:"biochemistry" },
    { id:24, name:"Креатинин", price:45000, cat:"biochemistry" },
    { id:25, name:"Мочевина", price:40000, cat:"biochemistry" },
    { id:26, name:"Генетический анализ на BRCA1/BRCA2", price:850000, cat:"genetics" },
    { id:27, name:"ПЦР на COVID-19", price:180000, cat:"infections" },
    { id:28, name:"ПЦР на гепатит B", price:150000, cat:"infections" },
    { id:29, name:"ПЦР на гепатит C", price:150000, cat:"infections" },
    { id:30, name:"ПЦР на ВИЧ", price:150000, cat:"infections" },
    { id:31, name:"Микроскопия мазка", price:45000, cat:"microscopy" },
    { id:32, name:"Цитология мазка", price:65000, cat:"microscopy" },
    { id:33, name:"Анализ мочи по Нечипоренко", price:35000, cat:"urine-urit" },
    { id:34, name:"Анализ мочи по Зимницкому", price:40000, cat:"urine-urit" },
    { id:35, name:"УЗД органов брюшной полости", price:120000, cat:"uzi" },
    { id:36, name:"УЗД щитовидной железы", price:95000, cat:"uzi" },
    { id:37, name:"УЗД почек", price:95000, cat:"uzi" },
    { id:38, name:"УЗД сердца (ЭхоКГ)", price:150000, cat:"uzi" },
    { id:39, name:"УЗД сосудов шеи (доплер)", price:130000, cat:"doppler" },
    { id:40, name:"УЗД сосудов ног (доплер)", price:130000, cat:"doppler" },
    { id:41, name:"ЭКГ", price:45000, cat:"ekg" },
    { id:42, name:"ЭКГ с расшифровкой", price:65000, cat:"ekg" },
    { id:43, name:"Кольпоскопия", price:120000, cat:"colposcopy" },
    { id:44, name:"МСКТ грудной клетки", price:450000, cat:"mskt" },
    { id:45, name:"МСКТ брюшной полости", price:450000, cat:"mskt" },
    { id:46, name:"МСКТ головного мозга", price:480000, cat:"mskt" },
];

const catMap = {
    group: 'Групповые исследования',
    doppler: 'Доплер',
    colposcopy: 'Кольпоскопия',
    mskt: 'МСКТ',
    uzi: 'УЗД',
    ekg: 'ЭКГ',
    allergy: 'АЛЛЕРГОПАНЕЛИ',
    autoimmune: 'АУТОИММУННЫЕ ЗАБОЛЕВАНИЯ',
    bacteria: 'БАК. ПОСЕВ',
    biochemistry: 'БИОХИМИЯ',
    genetics: 'ГЕНЕТИЧЕСКИЕ ИССЛЕДОВАНИЯ',
    hormones: 'ГОРМОНЫ',
    infections: 'ИНФЕКЦИИ',
    microscopy: 'МИКРОСКОПИЯ',
    urine: 'МОЧА',
    'urine-urit': 'МОЧА(URIT)',
};

let activeCat = 'all';
let cart = [];
let searchQuery = '';

function formatPrice(n) {
    return n.toLocaleString('ru-RU') + ' UZS';
}

function renderTabs() {
    const sidebar = document.getElementById('priceTabs');
    if (!sidebar) return;

    let html = '<h4>Раздел</h4>';
    html += makeTab('all', 'Все услуги');

    html += '<div class="price-cat"><div class="price-cat-title">Раздел</div>';
    ['group','doppler','colposcopy','mskt','uzi','ekg'].forEach(k => html += makeTab(k, catMap[k]));
    html += '</div>';

    html += '<div class="price-cat"><div class="price-cat-title">Лабораторная диагностика</div>';
    ['allergy','autoimmune','bacteria','biochemistry','genetics','hormones','infections','microscopy','urine','urine-urit'].forEach(k => html += makeTab(k, catMap[k]));
    html += '</div>';

    html += '<button class="price-show-all" onclick="switchTab(&quot;all&quot;)">Показать все</button>';
    sidebar.innerHTML = html;
}

function makeTab(key, label) {
    const cls = activeCat === key ? ' price-tab active' : ' price-tab';
    return '<button class="' + cls + '" onclick="switchTab(&quot;' + key + '&quot;)">' + label + '</button>';
}

function switchTab(cat) {
    activeCat = cat;
    renderTabs();
    filterAndRender();
}

function filterAndRender() {
    const container = document.getElementById('priceItems');
    if (!container) return;

    let filtered = priceData;
    if (searchQuery) {
        filtered = filtered.filter(i => i.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    if (activeCat !== 'all') {
        filtered = filtered.filter(i => i.cat === activeCat);
    }

    if (filtered.length === 0) {
        container.innerHTML = '<div class="price-empty">Ничего не найдено</div>';
        return;
    }

    container.innerHTML = filtered.map(item => {
        const inCart = cart.find(c => c.id === item.id);
        return '<div class="price-item" data-id="' + item.id + '">' +
            '<div class="price-item-info">' +
                '<h4>' + item.name + '</h4>' +
                '<div class="price">' + formatPrice(item.price) + '</div>' +
            '</div>' +
            '<button class="add-cart' + (inCart ? ' added' : '') + '" onclick="toggleCart(' + item.id + ')">' +
                (inCart ? '✓ В корзине' : 'Добавить в корзину') +
            '</button>' +
        '</div>';
    }).join('');
}

function onSearch() {
    const input = document.getElementById('priceSearch');
    searchQuery = input ? input.value : '';
    filterAndRender();
}

function toggleCart(id) {
    const idx = cart.findIndex(c => c.id === id);
    const item = priceData.find(i => i.id === id);
    if (idx >= 0) { cart.splice(idx, 1); }
    else { cart.push(item); }
    updateCartUI();
    filterAndRender();
}

function updateCartUI() {
    const btn = document.getElementById('cartBtn');
    const count = document.getElementById('cartCount');
    if (!btn || !count) return;
    if (cart.length > 0) {
        btn.style.display = 'flex';
        count.textContent = cart.length;
    } else {
        btn.style.display = 'none';
    }
}

function openCartModal() {
    const modal = document.getElementById('cartModal');
    const itemsDiv = document.getElementById('cartItems');
    const totalDiv = document.getElementById('cartTotal');
    const sumSpan = document.getElementById('cartSum');
    if (!modal) return;

    if (cart.length === 0) {
        if (itemsDiv) itemsDiv.innerHTML = '<div class="cart-empty">Корзина пуста</div>';
        if (totalDiv) totalDiv.style.display = 'none';
    } else {
        if (itemsDiv) {
            itemsDiv.innerHTML = cart.map(item => 
                '<div class="cart-item">' +
                    '<div>' +
                        '<h4>' + item.name + '</h4>' +
                        '<div class="price">' + formatPrice(item.price) + '</div>' +
                    '</div>' +
                    '<button class="remove" onclick="removeFromCart(' + item.id + ')">×</button>' +
                '</div>'
            ).join('');
        }
        const total = cart.reduce((s, i) => s + i.price, 0);
        if (sumSpan) sumSpan.textContent = formatPrice(total);
        if (totalDiv) totalDiv.style.display = 'flex';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartModal() {
    const modal = document.getElementById('cartModal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    updateCartUI();
    openCartModal();
    filterAndRender();
}

function submitCart() {
    if (cart.length === 0) return;
    alert('Заявка оформлена! Мы свяжемся с вами для подтверждения.\n\nВыбрано услуг: ' + cart.length);
    cart = [];
    updateCartUI();
    closeCartModal();
    filterAndRender();
}

const cartModalEl = document.getElementById('cartModal');
if (cartModalEl) {
    cartModalEl.addEventListener('click', function(e) {
        if(e.target === this) closeCartModal();
    });
}

// Init
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('priceTabs')) {
        renderTabs();
        filterAndRender();
    }
});
