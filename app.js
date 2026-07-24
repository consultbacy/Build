/* CatalogueX — Developer portal dashboard (local-first) */
(function () {
  if (window.storage && typeof window.storage.get === 'function') return;
  window.storage = {
    get: async function (key) {
      try {
        var v = localStorage.getItem(key);
        return v == null ? null : { value: v };
      } catch (e) {
        return null;
      }
    },
    set: async function (key, value) {
      try {
        localStorage.setItem(key, value);
      } catch (e) {
        console.error(e);
      }
    },
  };
})();

function icon(name, size) {
  size = size || 18;
  var p = {
    plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
    edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
    trash:
      '<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/>',
    share:
      '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.6" y1="10.6" x2="15.4" y2="6.4"/><line x1="8.6" y1="13.4" x2="15.4" y2="17.6"/>',
    search: '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.6" y2="16.6"/>',
    lock: '<rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    upload: '<path d="M12 19V5"/><path d="M6 11l6-6 6 6"/><line x1="4" y1="21" x2="20" y2="21"/>',
    download: '<path d="M12 5v14"/><path d="M18 13l-6 6-6-6"/><line x1="4" y1="21" x2="20" y2="21"/>',
    x: '<line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/>',
    check: '<polyline points="20 6 9 17 4 12"/>',
    clock: '<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/>',
    copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>',
    hanger:
      '<path d="M12 4a2 2 0 1 1 2 2"/><path d="M12 6v3"/><path d="M12 9l8 6a2 2 0 0 1-1.2 3.6H5.2A2 2 0 0 1 4 14.6Z"/>',
    activity: '<polyline points="3 12 8 12 10 18 14 6 16 12 21 12"/>',
    dashboard:
      '<rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/>',
    catalog: '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="9" x2="9" y2="21"/>',
    settings:
      '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9c.3.6.9 1 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>',
    monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
    eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    menu: '<line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/>',
  };
  return (
    '<svg width="' +
    size +
    '" height="' +
    size +
    '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
    (p[name] || '') +
    '</svg>'
  );
}

var uid = function (p) {
  return p + '_' + Math.random().toString(36).slice(2, 9);
};
var STORAGE_KEY = 'cataloguex-state-v2';
var THEME_KEY = 'cataloguex-theme';

var defaultState = {
  session: null, // { role: 'developer'|'admin'|'user', name, email }
  view: 'product',
  theme: 'system',
  profile: {
    name: 'Admin',
    email: 'admin@cataloguex.app',
    phone: '',
    password: 'demo',
    company: '',
    brandName: '',
    companyLogo: '',
  },
  users: [], // empty until admin creates users in Settings
  usersCleared: true,
  categories: ['Kurtas', 'Sarees', 'Co-ord sets', 'Dresses'],
  // what fields appear on Product cards
  productDisplay: {
    image: true,
    name: true,
    specs: true,
  },
  // headings + dropdown options for product forms
  // multi: allow multiple options (like colours)
  globalSpecs: [
    { id: 'gs_cat', key: 'Category', options: ['Kurtas', 'Sarees', 'Co-ord sets', 'Dresses'], multi: false },
    { id: 'gs_col', key: 'Colours', options: ['Navy', 'Rust', 'Ivory', 'Emerald', 'Black', 'White', 'Beige', 'Maroon', 'Olive', 'Wine'], multi: true },
    { id: 'gs_sz', key: 'Sizes', options: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Free'], multi: true },
    { id: 'gs1', key: 'Fit', options: ['Straight', 'Regular', 'Slim', 'Relaxed'], multi: false },
    { id: 'gs2', key: 'Work', options: ['Plain', 'Embroidery', 'Print', 'Sequence'], multi: false },
    { id: 'gs3', key: 'Occasion', options: ['Festive', 'Casual', 'Party', 'Wholesale'], multi: true },
    { id: 'gs4', key: 'Care', options: ['Machine wash cold', 'Hand wash', 'Dry clean only'], multi: false },
    { id: 'gs5', key: 'Length', options: ['Knee', 'Midi', 'Ankle', 'Full'], multi: false },
    { id: 'gs6', key: 'Sleeve', options: ['Full', 'Half', '3/4', 'Sleeveless'], multi: false },
    { id: 'gs7', key: 'Fabric', options: ['Cotton', 'Cotton silk', 'Georgette', 'Crepe', 'Linen blend'], multi: false },
    { id: 'gs8', key: 'Pack', options: ['Single', 'Set of 2', 'Set of 3'], multi: false },
    { id: 'gs_price', key: 'Price', options: [], multi: false },
  ],
  catalogues: [
    { id: 'c1', name: 'Chamak Winter 2026', status: 'Published', updatedAt: Date.now() - 1000 * 60 * 60 * 2 },
    { id: 'c2', name: 'Festive Kurtas', status: 'Draft', updatedAt: Date.now() - 1000 * 60 * 60 * 26 },
    { id: 'c3', name: 'Aavritti Essentials', status: 'Published', updatedAt: Date.now() - 1000 * 60 * 60 * 96 },
  ],
  items: [
    {
      id: 'i1', catalogueId: 'c1', name: 'Festive kurta set', sku: 'CW-NK-01', category: 'Kurtas',
      colors: ['Navy', 'Rust', 'Ivory'], sizes: ['S', 'M', 'L', 'XL'],
      fabric: 'Cotton silk', price: 1299, available: true,
      specs: [
        { id: 'sp1', key: 'Fit', value: 'Straight' },
        { id: 'sp2', key: 'Work', value: 'Subtle embroidery' },
        { id: 'sp3', key: 'Occasion', value: 'Festive / wholesale' },
      ],
      description: 'Straight-fit kurta set in multiple colours and sizes.', notes: '', image: '',
    },
    {
      id: 'i2', catalogueId: 'c1', name: 'Border work saree', sku: 'CW-SR-02', category: 'Sarees',
      colors: ['Rust', 'Emerald', 'Maroon'], sizes: ['Free'],
      fabric: 'Georgette', price: 3450, available: true,
      specs: [
        { id: 'sp4', key: 'Length', value: '5.5 m' },
        { id: 'sp5', key: 'Blouse', value: 'Unstitched' },
      ],
      description: 'Lightweight georgette with border work.', notes: 'Restock mid-month', image: '',
    },
    {
      id: 'i3', catalogueId: 'c2', name: 'Linen co-ord', sku: 'FK-CO-03', category: 'Co-ord sets',
      colors: ['Ivory', 'Beige'], sizes: ['XS', 'S', 'M'],
      fabric: 'Linen blend', price: 2199, available: true,
      specs: [{ id: 'sp6', key: 'Pieces', value: 'Top + bottom' }],
      description: 'Two-piece co-ord — relaxed top + tapered bottom.', notes: '', image: '',
    },
    {
      id: 'i4', catalogueId: 'c2', name: 'Party midi dress', sku: 'FK-DR-04', category: 'Dresses',
      colors: ['Emerald', 'Black'], sizes: ['M', 'L', 'XL'],
      fabric: 'Crepe', price: 2799, available: false,
      specs: [
        { id: 'sp7', key: 'Length', value: 'Midi' },
        { id: 'sp8', key: 'Detail', value: 'Side slits' },
      ],
      description: 'Midi dress with side slits. Currently not available.', notes: '', image: '',
    },
    {
      id: 'i5', catalogueId: 'c3', name: 'Everyday dress', sku: 'AE-DR-05', category: 'Dresses',
      colors: ['Navy', 'Olive', 'Wine'], sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      fabric: 'Cotton', price: 2599, available: true,
      specs: [{ id: 'sp9', key: 'Care', value: 'Machine wash cold' }],
      description: 'Breathable everyday cotton dress.', notes: '', image: '',
    },
    {
      id: 'i6', catalogueId: 'c3', name: 'Classic kurta', sku: 'AE-NK-06', category: 'Kurtas',
      colors: ['Rust', 'Navy', 'White'], sizes: ['M', 'L', 'XL'],
      fabric: 'Cotton', price: 1099, available: true,
      specs: [{ id: 'sp10', key: 'Sleeve', value: 'Full' }],
      description: 'Classic kurta — volume favourite.', notes: '', image: '',
    },
  ],
  shareLinks: [
    {
      id: 's1',
      type: 'catalogue',
      catalogueId: 'c3',
      token: 'ax91kd',
      label: 'Sample Aavritti link',
      viewOnly: true,
      authType: 'password', // none | password | otp
      passwordValue: 'demo123',
      otpCode: null,
      watermark: true,
      expiresDays: 12,
      status: 'active',
      createdAt: Date.now() - 1000 * 60 * 60 * 70,
      views: 24,
      interests: [],
    },
  ],
  activity: [
    { ts: Date.now() - 1000 * 60 * 60 * 2, role: 'Admin', action: 'Product updated', detail: 'Sample activity · portal ready' },
    { ts: Date.now() - 1000 * 60 * 60 * 10, role: 'Admin', action: 'Share link created', detail: 'Aavritti Essentials · token ax91kd · password · expires 12d' },
  ],
  browse: { q: '', category: '', color: '', size: '', avail: '', sort: 'newest' },
  selectedItems: [],
  portalTab: 'admin',
};

var state = null;
var publicToken = null;
var menuOpen = false;
var selectedGlobalSpecId = null;

function normalizeGlobalSpec(g) {
  if (!g) return null;
  var options = [];
  if (Array.isArray(g.options)) {
    options = g.options
      .map(function (o) {
        return String(o == null ? '' : o).trim();
      })
      .filter(Boolean);
  } else if (g.value != null && String(g.value).trim()) {
    options = [String(g.value).trim()];
  }
  var key = (g.key || '').trim();
  if (!key && !options.length) return null;
  var multi =
    g.multi === true ||
    g.multiSelect === true ||
    g.allowMultiple === true ||
    normKey(key) === 'colours' ||
    normKey(key) === 'colors' ||
    normKey(key) === 'sizes';
  // if multi was explicitly false, respect it
  if (g.multi === false || g.multiSelect === false) multi = false;
  return {
    id: g.id || uid('gs'),
    key: key || 'Untitled',
    options: uniq(options),
    multi: !!multi,
  };
}
function migrateGlobalSpecs() {
  state.globalSpecs = (state.globalSpecs || []).map(normalizeGlobalSpec).filter(Boolean);
  var catSpec = state.globalSpecs.find(function (g) {
    return normKey(g.key) === 'category';
  });
  var catOpts = uniq((state.categories || []).concat(catSpec ? catSpec.options : []));
  if (!catSpec) {
    state.globalSpecs.unshift({
      id: 'gs_cat',
      key: 'Category',
      options: catOpts.length ? catOpts : clone(defaultState.categories),
      multi: false,
    });
  } else {
    catSpec.options = catOpts.length ? catOpts : catSpec.options;
  }
  function ensureHeading(key, multi, defaultOpts) {
    if (getGlobalSpecByKey(key)) return;
    state.globalSpecs.push({
      id: uid('gs'),
      key: key,
      options: defaultOpts || [],
      multi: !!multi,
    });
  }
  ensureHeading('Colours', true, ['Navy', 'Rust', 'Ivory', 'Emerald', 'Black', 'White']);
  ensureHeading('Sizes', true, ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Free']);
  ensureHeading('Price', false, []);
  if (!selectedGlobalSpecId || !state.globalSpecs.some(function (g) { return g.id === selectedGlobalSpecId; })) {
    selectedGlobalSpecId = state.globalSpecs[0] ? state.globalSpecs[0].id : null;
  }
}
function getGlobalSpecById(id) {
  return (state.globalSpecs || []).find(function (g) {
    return g.id === id;
  });
}
function getGlobalSpecByKey(key) {
  var nk = normKey(key);
  return (state.globalSpecs || []).find(function (g) {
    return normKey(g.key) === nk;
  });
}
function optionsForSpecKey(key) {
  var g = getGlobalSpecByKey(key);
  return g && g.options ? g.options.slice() : [];
}
/** Ensure a global heading exists; return the heading object */
function ensureGlobalSpecKey(key) {
  key = String(key || '').trim();
  if (!key) return null;
  var existing = getGlobalSpecByKey(key);
  if (existing) return existing;
  if (!Array.isArray(state.globalSpecs)) state.globalSpecs = [];
  var g = { id: uid('gs'), key: key, options: [], multi: false };
  state.globalSpecs.push(g);
  return g;
}
/** Ensure heading + option exist in global lists (sync manual → global) */
function ensureGlobalSpecOption(key, value) {
  key = String(key || '').trim();
  value = String(value == null ? '' : value).trim();
  if (!key) return null;
  var g = ensureGlobalSpecKey(key);
  if (!g) return null;
  if (!Array.isArray(g.options)) g.options = [];
  // multi-value: split and add each — any text/number allowed
  parseList(value).forEach(function (v) {
    if (v && g.options.indexOf(v) === -1) g.options.push(v);
  });
  if (normKey(key) === 'category' && value) ensureCategory(value);
  return g;
}
/** Push product specs into global master lists so dropdowns stay in sync */
function syncSpecsToGlobal(specs) {
  (specs || []).forEach(function (s) {
    if (!s || !s.key) return;
    var vals = Array.isArray(s.values) && s.values.length ? s.values : parseList(s.value);
    if (!vals.length && s.value) vals = [String(s.value).trim()];
    vals.forEach(function (v) {
      ensureGlobalSpecOption(s.key, v);
    });
  });
}
function defaultProductDisplay() {
  return {
    image: true,
    name: true,
    specs: true,
  };
}
/** Spec value helpers — support multi values on one heading */
function specValuesOf(s) {
  if (!s) return [];
  if (Array.isArray(s.values) && s.values.length) {
    return s.values
      .map(function (v) {
        return String(v == null ? '' : v).trim();
      })
      .filter(Boolean);
  }
  return parseList(s.value);
}
function formatSpecValue(s) {
  var vals = specValuesOf(s);
  return vals.join(', ');
}
function makeSpec(key, values) {
  values = Array.isArray(values) ? values : parseList(values);
  values = uniq(
    values
      .map(function (v) {
        return String(v == null ? '' : v).trim();
      })
      .filter(Boolean)
  );
  return {
    id: uid('sp'),
    key: String(key || '').trim(),
    values: values,
    value: values.join(', '),
  };
}
function getProductDisplay() {
  var d = state.productDisplay || {};
  var base = defaultProductDisplay();
  Object.keys(base).forEach(function (k) {
    if (d[k] == null) d[k] = base[k];
  });
  state.productDisplay = d;
  return d;
}
var settingsOpenSection = null; // accordion: only one open at a time

function setMenuOpen(open) {
  menuOpen = !!open;
  var shell = document.querySelector('.shell');
  var btn = document.getElementById('menu-toggle');
  if (shell) shell.classList.toggle('menu-open', menuOpen);
  if (btn) {
    btn.setAttribute('aria-expanded', menuOpen ? 'true' : 'false');
    btn.setAttribute('aria-label', menuOpen ? 'Close workspace menu' : 'Open workspace menu');
  }
  document.body.classList.toggle('nav-locked', menuOpen);
}

function clone(o) {
  return JSON.parse(JSON.stringify(o));
}

function parseList(v) {
  if (Array.isArray(v)) {
    return v
      .map(function (x) {
        return String(x == null ? '' : x).trim();
      })
      .filter(Boolean);
  }
  if (v == null || v === '') return [];
  return String(v)
    .split(/[,|/]/)
    .map(function (x) {
      return x.trim();
    })
    .filter(Boolean);
}
function specByKey(it, key) {
  if (!it || !it.specs) return null;
  var nk = normKey(key);
  return (
    it.specs.find(function (s) {
      return normKey(s.key) === nk;
    }) || null
  );
}
function colorsOf(it) {
  if (!it) return [];
  var sp = specByKey(it, 'Colours') || specByKey(it, 'Colors') || specByKey(it, 'Colour') || specByKey(it, 'Color');
  if (sp) return specValuesOf(sp);
  if (it.colors && it.colors.length) return parseList(it.colors);
  if (it.color) return parseList(it.color);
  return [];
}
function sizesOf(it) {
  if (!it) return [];
  var sp = specByKey(it, 'Sizes') || specByKey(it, 'Size');
  if (sp) return specValuesOf(sp);
  if (it.sizes && it.sizes.length) return parseList(it.sizes);
  if (it.size) return parseList(it.size);
  return [];
}
function isAvailable(it) {
  if (!it) return false;
  if (typeof it.available === 'boolean') return it.available;
  if (it.stock != null) return Number(it.stock) > 0;
  return true;
}
function upsertSpec(specs, key, values) {
  values = Array.isArray(values) ? values : parseList(values);
  values = uniq(
    values
      .map(function (v) {
        return String(v == null ? '' : v).trim();
      })
      .filter(Boolean)
  );
  if (!values.length) return specs;
  var nk = normKey(key);
  var found = specs.find(function (s) {
    return normKey(s.key) === nk;
  });
  if (found) {
    found.values = uniq(specValuesOf(found).concat(values));
    found.value = found.values.join(', ');
  } else {
    specs.push(makeSpec(key, values));
  }
  return specs;
}
function normalizeItem(it) {
  if (!it) return it;
  if (it.name == null) it.name = '';
  if (it.description == null) it.description = '';
  if (it.notes == null) it.notes = '';
  if (it.sku == null) it.sku = '';
  if (it.fabric == null) it.fabric = '';
  if (it.category == null) it.category = '';
  // photos: images[] primary; image = first for compatibility
  if (!Array.isArray(it.images)) it.images = [];
  if (it.image && it.images.indexOf(it.image) === -1) it.images.unshift(it.image);
  it.images = it.images.filter(Boolean);
  it.image = it.images[0] || it.image || '';
  if (typeof it.available !== 'boolean') {
    it.available = it.stock != null ? Number(it.stock) > 0 : true;
  }
  if (!Array.isArray(it.specs)) it.specs = [];
  it.specs = it.specs
    .map(function (s) {
      var key = (s.key || s.name || '').trim();
      var values = Array.isArray(s.values) ? s.values : parseList(s.value || s.val || '');
      values = values
        .map(function (v) {
          return String(v == null ? '' : v).trim();
        })
        .filter(Boolean);
      return {
        id: s.id || uid('sp'),
        key: key,
        values: values,
        value: values.join(', '),
      };
    })
    .filter(function (s) {
      return s.key || (s.values && s.values.length);
    });
  // fold legacy product fields into specs so product is specs + photos driven
  if (it.sku) upsertSpec(it.specs, 'SKU', [it.sku]);
  if (it.category) upsertSpec(it.specs, 'Category', [it.category]);
  if (it.fabric) upsertSpec(it.specs, 'Fabric', [it.fabric]);
  if (it.price != null && it.price !== '' && Number(it.price) > 0) upsertSpec(it.specs, 'Price', [String(it.price)]);
  var legacyColors = it.colors && it.colors.length ? parseList(it.colors) : it.color ? parseList(it.color) : [];
  var legacySizes = it.sizes && it.sizes.length ? parseList(it.sizes) : it.size ? parseList(it.size) : [];
  if (legacyColors.length) upsertSpec(it.specs, 'Colours', legacyColors);
  if (legacySizes.length) upsertSpec(it.specs, 'Sizes', legacySizes);
  // mirror common fields from specs for filters / share
  var colSp = specByKey(it, 'Colours') || specByKey(it, 'Colors');
  var szSp = specByKey(it, 'Sizes') || specByKey(it, 'Size');
  var catSp = specByKey(it, 'Category');
  var fabSp = specByKey(it, 'Fabric');
  var skuSp = specByKey(it, 'SKU');
  var priceSp = specByKey(it, 'Price');
  it.colors = colSp ? specValuesOf(colSp) : [];
  it.sizes = szSp ? specValuesOf(szSp) : [];
  if (catSp) it.category = formatSpecValue(catSp);
  if (fabSp) it.fabric = formatSpecValue(fabSp);
  if (skuSp) it.sku = formatSpecValue(skuSp);
  if (priceSp && !isNaN(Number(formatSpecValue(priceSp).replace(/[^\d.]/g, '')))) {
    it.price = Number(formatSpecValue(priceSp).replace(/[^\d.]/g, ''));
  } else if (it.price == null) it.price = 0;
  if (!it.name) {
    it.name =
      (skuSp && formatSpecValue(skuSp)) ||
      (catSp && formatSpecValue(catSp)) ||
      'Product';
  }
  // legacy cleanup
  delete it.color;
  delete it.size;
  delete it.stock;
  delete it.mrp;
  delete it.moq;
  return it;
}

async function loadState() {
  try {
    var res = await window.storage.get(STORAGE_KEY);
    if (res && res.value) {
      state = JSON.parse(res.value);
      // migrate v1 → v2
      if (!Array.isArray(state.users)) state.users = [];
      // one-time: drop pre-seeded demo users; keep only admin-created entries going forward
      if (!state.usersCleared) {
        state.users = [];
        state.usersCleared = true;
      }
      if (!state.theme) state.theme = 'system';
      if (state.session === undefined) state.session = null;
      if (!state.selectedItems) state.selectedItems = [];
      if (!state.portalTab) state.portalTab = 'admin';
      if (!state.view || state.view === 'overview') state.view = 'product';
      if (!Array.isArray(state.globalSpecs)) state.globalSpecs = clone(defaultState.globalSpecs);
      if (!state.productDisplay) state.productDisplay = defaultProductDisplay();
      else state.productDisplay = Object.assign(defaultProductDisplay(), state.productDisplay);
      if (!state.profile) state.profile = clone(defaultState.profile);
      if (state.profile.company == null) state.profile.company = '';
      if (state.profile.brandName == null) state.profile.brandName = '';
      if (state.profile.companyLogo == null) state.profile.companyLogo = '';
      if (state.profile.password == null) state.profile.password = '';
      if (!Array.isArray(state.categories)) {
        state.categories = uniq(
          (state.items || [])
            .map(function (i) {
              return (i.category || '').trim();
            })
            .filter(Boolean)
            .concat(defaultState.categories)
        );
      }
      migrateGlobalSpecs();
      (state.items || []).forEach(normalizeItem);
      (state.shareLinks || []).forEach(function (s) {
        if (!s.interests) s.interests = [];
        if (!s.type) s.type = 'catalogue';
        if (s.watermark == null) s.watermark = true;
        if (!s.status) s.status = 'active';
        if (!s.authType) {
          s.authType = s.password ? 'password' : 'none';
        }
        if (s.password === true && !s.passwordValue) s.passwordValue = 'demo123';
        if (s.password === false || s.password === true) delete s.password;
        if (s.expiresDays == null || s.expiresDays === '') s.expiresDays = 30;
      });
      (state.users || []).forEach(function (u) {
        if (!u.phone) u.phone = '';
        if (!u.status) u.status = 'active';
        if (u.role === 'admin') u.role = 'user'; // only admin session has full access
        if (!Array.isArray(u.access)) u.access = [];
      });
      return;
    }
  } catch (e) {}
  state = clone(defaultState);
  migrateGlobalSpecs();
}

var saveTimer = null;
function persist() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(async function () {
    try {
      await window.storage.set(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error(e);
    }
  }, 200);
}

function log(action, detail) {
  if (!state) return;
  if (!Array.isArray(state.activity)) state.activity = [];
  var role = (state.session && state.session.role) || 'Guest';
  var label =
    role === 'developer' ? 'Developer' : role === 'admin' ? 'Admin' : role === 'user' ? 'User' : 'Guest';
  var who = (state.session && state.session.name) || (state.profile && state.profile.name) || label;
  state.activity.unshift({
    ts: Date.now(),
    role: label,
    who: who,
    action: action,
    detail: detail == null ? '' : String(detail),
  });
  if (state.activity.length > 400) state.activity.length = 400;
}
function logAndPersist(action, detail) {
  log(action, detail);
  persist();
}

function toast(msg) {
  var box = document.getElementById('toasts');
  if (!box) return;
  var el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  box.appendChild(el);
  setTimeout(function () {
    el.remove();
  }, 2800);
}

function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
  });
}
function money(n) {
  return '₹' + Number(n).toLocaleString('en-IN');
}
function timeAgo(ts) {
  var m = Math.round((Date.now() - ts) / 60000);
  if (m < 1) return 'just now';
  if (m < 60) return m + 'm ago';
  var h = Math.round(m / 60);
  if (h < 24) return h + 'h ago';
  return Math.round(h / 24) + 'd ago';
}
function uniq(arr) {
  return arr.filter(function (v, i) {
    return arr.indexOf(v) === i;
  });
}
function catName(id) {
  var c = state.catalogues.find(function (x) {
    return x.id === id;
  });
  return c ? c.name : 'Unknown';
}
function availOf(itOrBool) {
  var ok = typeof itOrBool === 'boolean' ? itOrBool : isAvailable(itOrBool);
  return ok
    ? { label: 'Available', cls: 'badge-success' }
    : { label: 'Not available', cls: 'badge-danger' };
}
function chipListHtml(values, kind) {
  if (!values || !values.length) return '';
  return (
    '<div class="chip-row ' +
    (kind || '') +
    '">' +
    values
      .map(function (v) {
        return '<span class="chip">' + esc(v) + '</span>';
      })
      .join('') +
    '</div>'
  );
}
function normKey(k) {
  return String(k || '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');
}
/** Drop duplicate keys (case-insensitive); keep first occurrence */
function dedupeSpecList(list) {
  var seen = {};
  var out = [];
  (list || []).forEach(function (s) {
    if (!s) return;
    var key = (s.key || '').trim();
    var value = (s.value || '').trim();
    if (!key && !value) return;
    var nk = normKey(key);
    if (nk && seen[nk]) return;
    if (nk) seen[nk] = true;
    out.push({ id: s.id || uid('sp'), key: key, value: value });
  });
  return out;
}
/** Specs that are already covered by basic fields (SKU / Category / Fabric) */
function isReservedBasicKey(key) {
  var k = normKey(key);
  return (
    k === 'sku' ||
    k === 'style code' ||
    k === 'style' ||
    k === 'category' ||
    k === 'fabric' ||
    k === 'material' ||
    k === 'fabric / material'
  );
}
function stripDuplicateSpecs(specs, basic) {
  basic = basic || {};
  var reservedVals = {
    sku: normKey(basic.sku),
    category: normKey(basic.category),
    fabric: normKey(basic.fabric),
  };
  return dedupeSpecList(specs).filter(function (s) {
    var k = normKey(s.key);
    var v = normKey(s.value);
    if (isReservedBasicKey(k)) {
      // drop if same as basic field value, or empty reserved key while basic holds it
      if (k === 'sku' || k === 'style code' || k === 'style') {
        if (reservedVals.sku && (!v || v === reservedVals.sku)) return false;
      }
      if (k === 'category') {
        if (reservedVals.category && (!v || v === reservedVals.category)) return false;
      }
      if (k === 'fabric' || k === 'material' || k === 'fabric / material') {
        if (reservedVals.fabric && (!v || v === reservedVals.fabric)) return false;
      }
      // still drop pure reserved labels even if values differ slightly — keep data in basic only
      return false;
    }
    return true;
  });
}
function specsDisplayHtml(specs) {
  specs = dedupeSpecList(specs);
  if (!specs.length) return '';
  return (
    '<dl class="spec-list">' +
    specs
      .map(function (s) {
        return (
          '<div class="spec-row"><dt>' +
          esc(s.key || 'Detail') +
          '</dt><dd>' +
          esc(s.value || '—') +
          '</dd></div>'
        );
      })
      .join('') +
    '</dl>'
  );
}
/** Spec list for product / share — product is specs-driven */
function productDetailsBlock(it) {
  var d = getProductDisplay();
  if (d.specs === false) return '';
  var rows = (it.specs || [])
    .map(function (s) {
      return { key: s.key, value: formatSpecValue(s) };
    })
    .filter(function (s) {
      return s.key && s.value;
    });
  rows = dedupeSpecList(rows);
  if (!rows.length) return '';
  return specsDisplayHtml(rows);
}
function productExtraSpecsBlock(it) {
  return productDetailsBlock(it);
}
function productSpecsChipsHtml(it) {
  var d = getProductDisplay();
  if (d.specs === false) return '';
  var specs = it.specs || [];
  if (!specs.length) return '';
  return (
    '<div class="pc-chips">' +
    specs
      .map(function (s) {
        var vals = specValuesOf(s);
        if (!s.key || !vals.length) return '';
        return (
          '<div class="pc-chip-row"><span class="pc-label">' +
          esc(s.key) +
          '</span><span class="pc-chip-list">' +
          vals
            .map(function (v) {
              return '<span class="pc-chip">' + esc(v) + '</span>';
            })
            .join('') +
          '</span></div>'
        );
      })
      .join('') +
    '</div>'
  );
}
function allCategories() {
  var fromItems = (state.items || [])
    .map(function (i) {
      return (i.category || '').trim();
    })
    .filter(Boolean);
  var managed = state.categories || [];
  var fromGlobal = optionsForSpecKey('Category');
  return uniq(managed.concat(fromItems).concat(fromGlobal)).sort(function (a, b) {
    return a.localeCompare(b);
  });
}
function ensureCategory(name) {
  name = (name || '').trim();
  if (!name) return '';
  if (!Array.isArray(state.categories)) state.categories = [];
  if (state.categories.indexOf(name) === -1) {
    state.categories.push(name);
    log('Category created', name);
  }
  var cat = getGlobalSpecByKey('Category');
  if (!cat) {
    state.globalSpecs = state.globalSpecs || [];
    state.globalSpecs.unshift({ id: 'gs_cat', key: 'Category', options: [name] });
  } else if (cat.options.indexOf(name) === -1) {
    cat.options.push(name);
  }
  return name;
}
function isLinkRevoked(s) {
  return !!(s && s.status === 'revoked');
}
/** True when the link has passed its expiry days (ignores revoke). */
function isTimeExpired(s) {
  if (!s || s.expiresDays == null || s.expiresDays === '') return false;
  var left = daysLeft(s);
  return left != null && left <= 0;
}
/** Public gate: revoked is handled separately; this is date-only expiry. */
function isLinkExpired(s) {
  return isTimeExpired(s);
}
function isLinkActive(s) {
  return s && !isLinkRevoked(s) && !isTimeExpired(s);
}
/** Not revoked (still permitted), even if date-expired. */
function isLinkAllowed(s) {
  return s && !isLinkRevoked(s);
}
var shareListFilter = 'all';
function shareAuthUnlocked(token) {
  try {
    return sessionStorage.getItem('share_ok_' + token) === '1';
  } catch (e) {
    return false;
  }
}
function setShareAuthUnlocked(token) {
  try {
    sessionStorage.setItem('share_ok_' + token, '1');
  } catch (e) {}
}
function buildShareLinkRecord(opts) {
  opts = opts || {};
  var authType = opts.authType || 'none';
  var expiresDays = Number(opts.expiresDays);
  if (!expiresDays || expiresDays < 1) expiresDays = 1;
  var rec = {
    id: uid('s'),
    type: opts.type || 'selection',
    token: Math.random().toString(36).slice(2, 10),
    label: opts.label || null,
    viewOnly: opts.viewOnly !== false,
    authType: authType,
    passwordValue: authType === 'password' ? String(opts.passwordValue || '').trim() : null,
    otpCode: authType === 'otp' ? String(Math.floor(100000 + Math.random() * 900000)) : null,
    watermark: true,
    expiresDays: expiresDays,
    status: 'active',
    createdAt: Date.now(),
    views: 0,
    interests: [],
    itemIds: opts.itemIds || [],
    catalogueId: opts.catalogueId || null,
  };
  return rec;
}
var BASIC_FIELD_DEFS = [
  { id: 'sku', label: 'SKU', placeholder: 'e.g. CW-NK-01' },
  { id: 'category', label: 'Category', placeholder: 'e.g. Kurtas' },
  { id: 'fabric', label: 'Fabric', placeholder: 'e.g. Cotton silk' },
];
function basicFieldsFromProduct(e) {
  if (!e) {
    return BASIC_FIELD_DEFS.map(function (f) {
      return { id: f.id, label: f.label, value: '', placeholder: f.placeholder };
    });
  }
  var present = [];
  BASIC_FIELD_DEFS.forEach(function (f) {
    var v = e[f.id] != null ? String(e[f.id]).trim() : '';
    if (v) present.push({ id: f.id, label: f.label, value: v, placeholder: f.placeholder });
  });
  return present;
}
function categoryFieldControlHtml(value) {
  var cats = allCategories();
  var val = (value || '').trim();
  var known = cats.indexOf(val) > -1;
  var opts =
    '<option value="">Select category</option>' +
    cats
      .map(function (c) {
        return '<option value="' + esc(c) + '" ' + (c === val ? 'selected' : '') + '>' + esc(c) + '</option>';
      })
      .join('') +
    (!known && val
      ? '<option value="' + esc(val) + '" selected>' + esc(val) + '</option>'
      : '') +
    '<option value="__new__">+ Create new category…</option>';
  return (
    '<select data-basic-input="category" data-category-select>' +
    opts +
    '</select>' +
    '<div class="category-new-wrap' +
    (!known && val ? '' : '') +
    '" data-category-new-wrap style="display:none">' +
    '<input type="text" data-category-new placeholder="Type new category name" value="">' +
    '</div>'
  );
}
function basicFieldsEditorHtml(fields) {
  fields = fields || [];
  var used = {};
  fields.forEach(function (f) {
    used[f.id] = true;
  });
  var missing = BASIC_FIELD_DEFS.filter(function (f) {
    return !used[f.id];
  });
  return (
    '<div class="basic-fields-editor" id="basic-fields-editor">' +
    (fields.length
      ? fields
          .map(function (f) {
            var control =
              f.id === 'category'
                ? categoryFieldControlHtml(f.value)
                : '<input type="text" data-basic-input="' +
                  esc(f.id) +
                  '" value="' +
                  esc(f.value || '') +
                  '" placeholder="' +
                  esc(f.placeholder || '') +
                  '">';
            return (
              '<div class="basic-field-row" data-basic-id="' +
              esc(f.id) +
              '">' +
              '<label>' +
              esc(f.label) +
              '</label>' +
              control +
              '<button type="button" class="icon-btn" data-basic-remove title="Remove field">' +
              icon('x', 14) +
              '</button></div>'
            );
          })
          .join('')
      : '<p style="margin:0;color:var(--text-3);font-size:var(--fs-xs)">No basic detail fields. Add any below.</p>') +
    '<div class="basic-add-row">' +
    missing
      .map(function (f) {
        return (
          '<button type="button" class="spec-preset" data-basic-add="' +
          esc(f.id) +
          '">' +
          icon('plus', 12) +
          ' ' +
          esc(f.label) +
          '</button>'
        );
      })
      .join('') +
    '</div></div>'
  );
}
function readBasicFields() {
  var out = { sku: '', category: '', fabric: '' };
  document.querySelectorAll('#basic-fields-editor [data-basic-input]').forEach(function (inp) {
    var id = inp.getAttribute('data-basic-input');
    if (out[id] === undefined) return;
    var v = (inp.value || '').trim();
    if (id === 'category' && v === '__new__') {
      var wrap = inp.closest('.basic-field-row');
      var neu = wrap && wrap.querySelector('[data-category-new]');
      v = neu ? (neu.value || '').trim() : '';
    }
    out[id] = v;
  });
  return out;
}
function bindCategorySelects(scope) {
  (scope || document).querySelectorAll('[data-category-select]').forEach(function (sel) {
    var wrap = sel.closest('.basic-field-row');
    var neuWrap = wrap && wrap.querySelector('[data-category-new-wrap]');
    var neuInp = wrap && wrap.querySelector('[data-category-new]');
    function sync() {
      if (!neuWrap) return;
      if (sel.value === '__new__') {
        neuWrap.style.display = 'block';
        neuWrap.classList.add('show');
        if (neuInp) neuInp.focus();
      } else {
        neuWrap.style.display = 'none';
        neuWrap.classList.remove('show');
        if (neuInp) neuInp.value = '';
      }
    }
    sel.onchange = sync;
    sync();
  });
}
function bindBasicFieldsEditor() {
  var box = document.getElementById('basic-fields-editor');
  if (!box) return;
  function refreshAddButtons() {
    var used = {};
    box.querySelectorAll('[data-basic-id]').forEach(function (row) {
      used[row.getAttribute('data-basic-id')] = true;
    });
    var addRow = box.querySelector('.basic-add-row');
    if (!addRow) return;
    addRow.innerHTML = BASIC_FIELD_DEFS.filter(function (f) {
      return !used[f.id];
    })
      .map(function (f) {
        return (
          '<button type="button" class="spec-preset" data-basic-add="' +
          f.id +
          '">' +
          icon('plus', 12) +
          ' ' +
          esc(f.label) +
          '</button>'
        );
      })
      .join('');
    bindBasicAdd();
  }
  function bindBasicAdd() {
    box.querySelectorAll('[data-basic-add]').forEach(function (btn) {
      btn.onclick = function () {
        var id = btn.getAttribute('data-basic-add');
        var def = BASIC_FIELD_DEFS.find(function (f) {
          return f.id === id;
        });
        if (!def) return;
        var row = document.createElement('div');
        row.className = 'basic-field-row';
        row.setAttribute('data-basic-id', id);
        var control =
          id === 'category'
            ? categoryFieldControlHtml('')
            : '<input type="text" data-basic-input="' +
              id +
              '" value="" placeholder="' +
              esc(def.placeholder) +
              '">';
        row.innerHTML =
          '<label>' +
          esc(def.label) +
          '</label>' +
          control +
          '<button type="button" class="icon-btn" data-basic-remove title="Remove field">' +
          icon('x', 14) +
          '</button>';
        var addRow = box.querySelector('.basic-add-row');
        box.insertBefore(row, addRow);
        bindCategorySelects(row);
        var focusEl = row.querySelector('input, select');
        if (focusEl) focusEl.focus();
        bindBasicRemove();
        refreshAddButtons();
      };
    });
  }
  function bindBasicRemove() {
    box.querySelectorAll('[data-basic-remove]').forEach(function (btn) {
      btn.onclick = function () {
        var row = btn.closest('.basic-field-row');
        if (row) row.remove();
        refreshAddButtons();
      };
    });
  }
  bindBasicAdd();
  bindBasicRemove();
  bindCategorySelects(box);
}
function collectField(items, getter) {
  var all = [];
  (items || []).forEach(function (it) {
    getter(it).forEach(function (v) {
      all.push(v);
    });
  });
  return uniq(all);
}
function listEditorHtml(id, values, placeholder) {
  values = values && values.length ? values : [''];
  return (
    '<div class="list-editor" data-list="' +
    id +
    '">' +
    values
      .map(function (v, i) {
        return (
          '<div class="list-editor-row">' +
          '<input type="text" data-list-input="' +
          id +
          '" value="' +
          esc(v) +
          '" placeholder="' +
          esc(placeholder) +
          '">' +
          '<button type="button" class="icon-btn" data-list-remove="' +
          id +
          '" title="Remove">' +
          icon('x', 14) +
          '</button></div>'
        );
      })
      .join('') +
    '<button type="button" class="btn btn-sm" data-list-add="' +
    id +
    '">' +
    icon('plus', 13) +
    ' Add</button></div>'
  );
}
function specHeadingOptionsHtml(selectedKey) {
  var globals = state.globalSpecs || [];
  var known = false;
  var html = '<option value="">Select heading</option>';
  globals.forEach(function (g) {
    var sel = normKey(g.key) === normKey(selectedKey);
    if (sel) known = true;
    html +=
      '<option value="' +
      esc(g.key) +
      '" ' +
      (sel ? 'selected' : '') +
      '>' +
      esc(g.key) +
      '</option>';
  });
  if (selectedKey && !known) {
    html += '<option value="' + esc(selectedKey) + '" selected>' + esc(selectedKey) + '</option>';
  }
  html += '<option value="__custom__">Custom heading…</option>';
  return html;
}
function specValueOptionsHtml(key, selectedVal) {
  var opts = optionsForSpecKey(key);
  var known = false;
  var html = '<option value="">Select option</option>';
  opts.forEach(function (o) {
    var sel = o === selectedVal;
    if (sel) known = true;
    html += '<option value="' + esc(o) + '" ' + (sel ? 'selected' : '') + '>' + esc(o) + '</option>';
  });
  if (selectedVal && !known) {
    html += '<option value="' + esc(selectedVal) + '" selected>' + esc(selectedVal) + '</option>';
  }
  html += '<option value="__custom__">Custom value…</option>';
  return html;
}
/** Manual specs: free-type heading + option (no lists) */
function manualSpecRowHtml(s) {
  s = s || { id: uid('sp'), key: '', value: '' };
  var key = s.key || '';
  var val = formatSpecValue(s) || s.value || '';
  return (
    '<div class="spec-edit-row manual-spec-row" data-spec-id="' +
    esc(s.id || uid('sp')) +
    '">' +
    '<label class="spec-mini-label">Heading</label>' +
    '<input type="text" class="spec-key-input" placeholder="e.g. Lining" value="' +
    esc(key) +
    '">' +
    '<label class="spec-mini-label">Option</label>' +
    '<input type="text" class="spec-val-input" placeholder="e.g. Silk / any value" value="' +
    esc(val) +
    '">' +
    '<button type="button" class="icon-btn" data-spec-remove title="Remove">' +
    icon('x', 14) +
    '</button></div>'
  );
}
function specsEditorHtml(specs, opts) {
  opts = opts || {};
  var editorId = opts.editorId || 'specs-editor';
  var addId = opts.addId || 'spec-add';
  var emptyRow = opts.allowEmpty !== false;
  var manual = opts.manual === true || editorId === 'manual-specs-editor';
  specs = specs && specs.length ? specs.slice() : emptyRow ? [{ id: uid('sp'), key: '', value: '' }] : [];
  var rowFn = manual ? manualSpecRowHtml : manualSpecRowHtml;
  return (
    (opts.hint
      ? '<p class="hint" style="margin:0 0 .4rem;color:var(--text-3);font-size:var(--fs-xs)">' + opts.hint + '</p>'
      : '<p class="hint" style="margin:0 0 .4rem;color:var(--text-3);font-size:var(--fs-xs)">Type any heading and option freely.</p>') +
    '<div class="specs-editor' +
    (manual ? ' specs-editor-manual' : '') +
    '" id="' +
    editorId +
    '">' +
    specs.map(rowFn).join('') +
    '<button type="button" class="btn btn-sm" id="' +
    addId +
    '" data-spec-editor="' +
    editorId +
    '"' +
    (manual ? ' data-manual-spec="1"' : '') +
    '>' +
    icon('plus', 13) +
    ' ' +
    (opts.addLabel || 'Add specification') +
    '</button></div>'
  );
}
/** One control per global heading — multi checkbox chips or single select / free text */
function globalSpecsFieldsHtml(existingSpecs) {
  existingSpecs = existingSpecs || [];
  function valsFor(key) {
    var found = existingSpecs.find(function (s) {
      return normKey(s.key) === normKey(key);
    });
    return found ? specValuesOf(found) : [];
  }
  var globals = state.globalSpecs || [];
  if (!globals.length) {
    return '<p class="settings-empty">No global headings yet. Add them in Settings · Global specifications.</p>';
  }
  return (
    '<p class="hint" style="margin:0 0 .4rem;color:var(--text-3);font-size:var(--fs-xs)">From Settings. Multi headings allow several options (like Colours). Any option text is allowed.</p>' +
    '<div class="gs-fields" id="gs-fields">' +
    globals
      .map(function (g) {
        var selected = valsFor(g.key);
        var opts = g.options || [];
        var multi = !!g.multi;
        var meta = '<span class="gs-field-meta">' + (multi ? 'Multi-select' : 'Single') + '</span>';
        var control = '';
        if (multi) {
          control =
            '<div class="gs-multi-opts" data-gs-multi="' +
            esc(g.key) +
            '">' +
            (opts.length
              ? opts
                  .map(function (o) {
                    var on = selected.indexOf(o) !== -1;
                    return (
                      '<label class="gs-multi-chip">' +
                      '<input type="checkbox" data-gs-multi-opt="' +
                      esc(g.key) +
                      '" value="' +
                      esc(o) +
                      '"' +
                      (on ? ' checked' : '') +
                      '> ' +
                      esc(o) +
                      '</label>'
                    );
                  })
                  .join('')
              : '<span class="settings-empty">No options yet — add in Settings.</span>') +
            '</div>' +
            '<div class="gs-field-extra">' +
            '<input type="text" class="gs-field-custom" data-gs-multi-custom="' +
            esc(g.key) +
            '" placeholder="Add any custom option">' +
            '</div>';
        } else if (!opts.length) {
          control =
            '<input type="text" class="gs-field-free" data-gs-field-free="' +
            esc(g.key) +
            '" value="' +
            esc(selected[0] || '') +
            '" placeholder="Enter any value">';
        } else {
          var val = selected[0] || '';
          var known = opts.indexOf(val) !== -1;
          control =
            '<select class="gs-field-select" data-gs-field="' +
            esc(g.key) +
            '">' +
            '<option value="">— Select —</option>' +
            opts
              .map(function (o) {
                return (
                  '<option value="' +
                  esc(o) +
                  '" ' +
                  (o === val ? 'selected' : '') +
                  '>' +
                  esc(o) +
                  '</option>'
                );
              })
              .join('') +
            (val && !known
              ? '<option value="' + esc(val) + '" selected>' + esc(val) + '</option>'
              : '') +
            '<option value="__custom__">Custom…</option></select>' +
            '<input type="text" class="gs-field-custom" placeholder="Any custom value" value="" style="display:none">';
        }
        return (
          '<div class="gs-field-row' +
          (multi ? ' gs-field-multi' : '') +
          '" data-gs-field-key="' +
          esc(g.key) +
          '" data-gs-multi-mode="' +
          (multi ? '1' : '0') +
          '">' +
          '<div class="gs-field-head"><label class="spec-mini-label">' +
          esc(g.key) +
          '</label>' +
          meta +
          '</div>' +
          '<div class="gs-field-control">' +
          control +
          '</div></div>'
        );
      })
      .join('') +
    '</div>'
  );
}
function readGlobalSpecsFields() {
  var specs = [];
  var handled = {};
  // multi checkbox groups
  document.querySelectorAll('[data-gs-multi]').forEach(function (box) {
    var key = box.getAttribute('data-gs-multi') || '';
    if (!key || handled[normKey(key)]) return;
    handled[normKey(key)] = true;
    var vals = [];
    box.querySelectorAll('input[data-gs-multi-opt]:checked').forEach(function (c) {
      var v = (c.value || '').trim();
      if (v) vals.push(v);
    });
    var custom = document.querySelector('[data-gs-multi-custom="' + key + '"]');
    // also try escape-safe query via closest row
    var row = box.closest('.gs-field-row');
    if (!custom && row) custom = row.querySelector('[data-gs-multi-custom]');
    if (custom && (custom.value || '').trim()) {
      parseList(custom.value).forEach(function (v) {
        vals.push(v);
      });
    }
    vals = uniq(vals);
    if (vals.length) specs.push(makeSpec(key, vals));
  });
  // free fields (no options list)
  document.querySelectorAll('[data-gs-field-free]').forEach(function (inp) {
    var key = inp.getAttribute('data-gs-field-free') || '';
    if (!key || handled[normKey(key)]) return;
    var v = (inp.value || '').trim();
    if (v) {
      handled[normKey(key)] = true;
      specs.push(makeSpec(key, [v]));
    }
  });
  // single selects
  document.querySelectorAll('[data-gs-field]').forEach(function (sel) {
    var key = sel.getAttribute('data-gs-field') || '';
    if (!key || handled[normKey(key)]) return;
    var row = sel.closest('.gs-field-row');
    var custom = row && row.querySelector('.gs-field-custom');
    var value =
      sel.value === '__custom__'
        ? custom
          ? (custom.value || '').trim()
          : ''
        : (sel.value || '').trim();
    if (key && value) {
      handled[normKey(key)] = true;
      specs.push(makeSpec(key, [value]));
    }
  });
  return specs;
}
function bindGlobalSpecsFields() {
  document.querySelectorAll('.gs-field-row').forEach(function (row) {
    var sel = row.querySelector('.gs-field-select');
    var custom = row.querySelector('.gs-field-custom:not([data-gs-multi-custom])');
    if (sel) {
      function sync() {
        if (custom) custom.style.display = sel.value === '__custom__' ? 'block' : 'none';
      }
      sel.onchange = sync;
      sync();
    }
  });
}
/** Manual specs only (keys not already covered by global headings) */
function manualSpecsFromProduct(specs) {
  var globalKeys = {};
  (state.globalSpecs || []).forEach(function (g) {
    globalKeys[normKey(g.key)] = true;
  });
  return (specs || []).filter(function (s) {
    return s && s.key && !globalKeys[normKey(s.key)];
  });
}
function readAllProductSpecs() {
  var merged = readGlobalSpecsFields()
    .concat(readSpecsEditor('specs-editor'))
    .concat(readSpecsEditor('manual-specs-editor'));
  // normalize multi values
  var byKey = {};
  merged.forEach(function (s) {
    if (!s || !s.key) return;
    var nk = normKey(s.key);
    var vals = specValuesOf(s);
    if (!byKey[nk]) byKey[nk] = makeSpec(s.key, vals);
    else {
      byKey[nk].values = uniq(byKey[nk].values.concat(vals));
      byKey[nk].value = byKey[nk].values.join(', ');
    }
  });
  var clean = Object.keys(byKey).map(function (k) {
    return byKey[k];
  });
  syncSpecsToGlobal(clean);
  return clean;
}
function productPhotosHtml(images) {
  images = images || [];
  return (
    '<div class="photo-upload" id="photo-upload">' +
    '<p class="hint" style="margin:0 0 .4rem;color:var(--text-3);font-size:var(--fs-xs)">Upload one or more product photos.</p>' +
    '<input type="file" id="prod-photos" accept="image/*" multiple>' +
    '<div class="photo-preview-list" id="photo-preview-list">' +
    (images.length
      ? images
          .map(function (src, i) {
            return (
              '<div class="photo-thumb" data-photo-i="' +
              i +
              '">' +
              '<img src="' +
              esc(src) +
              '" alt="Photo ' +
              (i + 1) +
              '">' +
              '<button type="button" class="icon-btn photo-remove" data-photo-remove="' +
              i +
              '" title="Remove">' +
              icon('x', 12) +
              '</button></div>'
            );
          })
          .join('')
      : '<p class="settings-empty">No photos yet.</p>') +
    '</div></div>'
  );
}
function readProductPhotos(existingImages, removedSet) {
  existingImages = (existingImages || []).slice();
  removedSet = removedSet || {};
  return existingImages.filter(function (_, i) {
    return !removedSet[i];
  });
}
function readListEditor(id) {
  var vals = [];
  document.querySelectorAll('[data-list-input="' + id + '"]').forEach(function (inp) {
    var v = (inp.value || '').trim();
    if (v) vals.push(v);
  });
  return uniq(vals);
}
function readSpecRowKey(row) {
  var free = row.querySelector('.spec-key-input');
  if (free) return (free.value || '').trim();
  var sel = row.querySelector('.spec-key-select');
  var custom = row.querySelector('.spec-key-custom');
  if (!sel) return '';
  if (sel.value === '__custom__') return custom ? (custom.value || '').trim() : '';
  return (sel.value || '').trim();
}
function readSpecRowVal(row) {
  var free = row.querySelector('.spec-val-input');
  if (free) return (free.value || '').trim();
  var sel = row.querySelector('.spec-val-select');
  var custom = row.querySelector('.spec-val-custom');
  if (!sel) return '';
  if (sel.value === '__custom__') return custom ? (custom.value || '').trim() : '';
  return (sel.value || '').trim();
}
function readSpecsEditor(editorId) {
  var specs = [];
  var sel = '#' + (editorId || 'specs-editor') + ' .spec-edit-row';
  document.querySelectorAll(sel).forEach(function (row) {
    var key = readSpecRowKey(row);
    var value = readSpecRowVal(row);
    if (key || value) {
      var sp = makeSpec(key, value);
      sp.id = row.getAttribute('data-spec-id') || sp.id;
      specs.push(sp);
    }
  });
  return specs;
}
function syncSpecRowValueSelect(row) {
  var key = readSpecRowKey(row);
  var keySel = row.querySelector('.spec-key-select');
  var keyCustom = row.querySelector('.spec-key-custom');
  var valSel = row.querySelector('.spec-val-select');
  var valCustom = row.querySelector('.spec-val-custom');
  if (keySel && keyCustom) {
    if (keySel.value === '__custom__') {
      keyCustom.style.display = 'block';
    } else {
      keyCustom.style.display = 'none';
    }
  }
  if (!valSel) return;
  var prev = valSel.value === '__custom__' && valCustom ? valCustom.value : valSel.value;
  valSel.innerHTML = specValueOptionsHtml(key, prev);
  if (prev && optionsForSpecKey(key).indexOf(prev) === -1 && prev !== '__custom__') {
    // keep custom path
    valSel.value = '__custom__';
    if (valCustom) {
      valCustom.style.display = 'block';
      valCustom.value = prev;
    }
  } else if (valCustom) {
    valCustom.style.display = valSel.value === '__custom__' ? 'block' : 'none';
  }
}
function bindSpecRowSelects(row) {
  var keySel = row.querySelector('.spec-key-select');
  var valSel = row.querySelector('.spec-val-select');
  var valCustom = row.querySelector('.spec-val-custom');
  if (keySel)
    keySel.onchange = function () {
      syncSpecRowValueSelect(row);
    };
  if (valSel)
    valSel.onchange = function () {
      if (valCustom) valCustom.style.display = valSel.value === '__custom__' ? 'block' : 'none';
    };
}
function insertSpecRow(key, value, editorId) {
  editorId = editorId || 'specs-editor';
  var box = document.getElementById(editorId);
  if (!box) return;
  var addSpec =
    box.querySelector('[data-spec-editor="' + editorId + '"]') ||
    box.querySelector('button.btn');
  var wrap = document.createElement('div');
  // Manual editor always uses free-type heading + option inputs
  wrap.innerHTML = manualSpecRowHtml({ id: uid('sp'), key: key || '', value: value || '' });
  var row = wrap.firstChild;
  if (addSpec) box.insertBefore(row, addSpec);
  else box.appendChild(row);
  bindSpecRemoveOnly(editorId);
  var focus = row.querySelector('.spec-key-input');
  if (focus) focus.focus();
}
function bindListAndSpecsEditors() {
  document.querySelectorAll('[data-list-add]').forEach(function (btn) {
    btn.onclick = function () {
      var id = btn.getAttribute('data-list-add');
      var editor = document.querySelector('.list-editor[data-list="' + id + '"]');
      if (!editor) return;
      var row = document.createElement('div');
      row.className = 'list-editor-row';
      row.innerHTML =
        '<input type="text" data-list-input="' +
        id +
        '" value="" placeholder="Add…">' +
        '<button type="button" class="icon-btn" data-list-remove="' +
        id +
        '" title="Remove">' +
        icon('x', 14) +
        '</button>';
      editor.insertBefore(row, btn);
      row.querySelector('input').focus();
      bindListRemoveOnly(editor);
    };
  });
  document.querySelectorAll('.list-editor').forEach(bindListRemoveOnly);
  document.querySelectorAll('[data-spec-editor]').forEach(function (addBtn) {
    addBtn.onclick = function () {
      var editorId = addBtn.getAttribute('data-spec-editor') || 'specs-editor';
      insertSpecRow('', '', editorId);
    };
  });
  bindSpecRemoveOnly();
  bindGlobalSpecsFields();
  bindBasicFieldsEditor();
}
function bindListRemoveOnly(editor) {
  (editor || document).querySelectorAll('[data-list-remove]').forEach(function (btn) {
    btn.onclick = function () {
      var row = btn.closest('.list-editor-row');
      var parent = btn.closest('.list-editor');
      if (!row || !parent) return;
      var rows = parent.querySelectorAll('.list-editor-row');
      if (rows.length <= 1) {
        var inp = row.querySelector('input');
        if (inp) inp.value = '';
        return;
      }
      row.remove();
    };
  });
}
function bindSpecRemoveOnly(editorId) {
  var root = editorId ? document.getElementById(editorId) : document;
  if (!root) root = document;
  root.querySelectorAll('[data-spec-remove]').forEach(function (btn) {
    btn.onclick = function () {
      var row = btn.closest('.spec-edit-row');
      var box = row && row.closest('.specs-editor');
      if (!row || !box) return;
      var rows = box.querySelectorAll('.spec-edit-row');
      if (rows.length <= 1) {
        var keyIn = row.querySelector('.spec-key-input');
        var valIn = row.querySelector('.spec-val-input');
        if (keyIn) keyIn.value = '';
        if (valIn) valIn.value = '';
        return;
      }
      row.remove();
    };
  });
}
function statusBadge(s) {
  var cls = s === 'Published' ? 'badge-success' : s === 'Draft' ? 'badge-warning' : 'badge-neutral';
  return '<span class="badge ' + cls + '">' + s + '</span>';
}

function isAdmin() {
  return state.session && (state.session.role === 'admin' || state.session.role === 'developer');
}
function isDeveloper() {
  return state.session && state.session.role === 'developer';
}
function canEdit() {
  return state.session && state.session.role !== 'user';
}
/** Admin + developer can select products and create share links */
function canShare() {
  return canEdit();
}
function val(v, fallback) {
  return v == null || v === '' ? fallback || '' : v;
}

/* ---------- Theme ---------- */
function systemPrefersDark() {
  try {
    return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  } catch (e) {
    return false;
  }
}
function resolveTheme(pref) {
  pref = pref || 'system';
  if (pref === 'dark') return 'dark';
  if (pref === 'light') return 'light';
  return systemPrefersDark() ? 'dark' : 'light';
}
/** Apply System / Light / Dark. Updates html[data-theme] so CSS variables swap. */
function applyTheme(pref, opts) {
  opts = opts || {};
  if (pref) state.theme = pref;
  if (!state.theme) state.theme = 'system';
  var resolved = resolveTheme(state.theme);
  var root = document.documentElement;
  root.setAttribute('data-theme', resolved);
  root.setAttribute('data-theme-pref', state.theme);
  root.style.colorScheme = resolved;
  try {
    localStorage.setItem(THEME_KEY, state.theme);
  } catch (e) {}
  try {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', resolved === 'dark' ? '#12141A' : '#F7F8FB');
  } catch (e) {}
  if (!opts.skipPersist) persist();
}
function themeToggleHtml(extraClass) {
  var theme = (state && state.theme) || 'system';
  return (
    '<div class="theme-wrap ' +
    (extraClass || '') +
    '">' +
    '<p class="theme-label">Appearance</p>' +
    '<div class="theme-row" role="group" aria-label="Theme">' +
    '<button type="button" data-theme-choice="system" class="' +
    (theme === 'system' ? 'active' : '') +
    '" title="Match system">' +
    icon('monitor', 12) +
    ' System</button>' +
    '<button type="button" data-theme-choice="light" class="' +
    (theme === 'light' ? 'active' : '') +
    '" title="Light">' +
    icon('sun', 12) +
    ' Light</button>' +
    '<button type="button" data-theme-choice="dark" class="' +
    (theme === 'dark' ? 'active' : '') +
    '" title="Dark">' +
    icon('moon', 12) +
    ' Dark</button>' +
    '</div></div>'
  );
}
function bindThemeControls(root) {
  var scope = root || document;
  // Use data-theme-choice — not data-theme — so we never match <html data-theme="...">
  scope.querySelectorAll('[data-theme-choice]').forEach(function (el) {
    el.onclick = function (e) {
      e.preventDefault();
      e.stopPropagation();
      var pref = el.getAttribute('data-theme-choice');
      if (pref !== 'system' && pref !== 'light' && pref !== 'dark') return;
      applyTheme(pref);
      render();
    };
  });
}

/* ---------- Routing (share links) ---------- */
function parseRoute() {
  var hash = (location.hash || '').replace(/^#/, '');
  if (hash.indexOf('share/') === 0) {
    publicToken = hash.slice(6).split('?')[0];
    return 'public';
  }
  publicToken = null;
  return 'app';
}

/* ---------- Render ---------- */
function render() {
  var mode = parseRoute();
  var app = document.getElementById('app');
  if (mode === 'public') {
    app.innerHTML = publicHtml();
    bindPublic();
    return;
  }
  if (!state.session) {
    menuOpen = false;
    document.body.classList.remove('nav-locked');
    app.innerHTML = portalHtml();
    bindPortal();
    return;
  }
  app.innerHTML =
    '<div class="shell' +
    (menuOpen ? ' menu-open' : '') +
    '">' +
    '<div class="nav-backdrop" id="nav-backdrop" aria-hidden="true"></div>' +
    sidebarHtml() +
    '<div class="main-wrap">' +
    topbarHtml() +
    '<main id="main">' +
    viewHtml() +
    '</main></div></div>';
  bindShell();
  bindWorkspaceBrand();
  bindView();
  setMenuOpen(menuOpen);
}

function bindWorkspaceBrand() {
  if (!canEdit()) return;
  if (!state.profile) state.profile = {};
  var logoInput = document.getElementById('ws-logo');
  if (logoInput)
    logoInput.onchange = function () {
      if (!logoInput.files || !logoInput.files[0]) return;
      var reader = new FileReader();
      reader.onload = function (ev) {
        state.profile.companyLogo = ev.target.result;
        log('Company logo updated', 'workspace upload');
        persist();
        render();
        toast('Logo updated');
      };
      reader.readAsDataURL(logoInput.files[0]);
    };
  function saveField(id, key, label) {
    var el = document.getElementById(id);
    if (!el) return;
    var commit = function () {
      var v = (el.value || '').trim();
      if ((state.profile[key] || '') === v) return;
      state.profile[key] = v;
      log(label + ' updated', v || '(cleared)');
      persist();
      // refresh brand text without full nav flash if possible
      var nameEl = document.querySelector('.side-company-name');
      if (key === 'company' && nameEl) nameEl.textContent = v;
    };
    el.addEventListener('change', commit);
    el.addEventListener('blur', commit);
  }
  saveField('ws-company', 'company', 'Company name');
  saveField('ws-brand', 'brandName', 'Brand name');
}

function getAdminCredentials() {
  var p = (state && state.profile) || {};
  return {
    email: String(p.email || 'admin@cataloguex.app').trim(),
    password: String(p.password != null ? p.password : 'demo'),
    name: String(p.name || 'Admin').trim() || 'Admin',
  };
}
function normalizeLoginId(v) {
  return String(v || '')
    .trim()
    .toLowerCase();
}
function portalHtml() {
  var creds = getAdminCredentials();
  return (
    '<div class="portal"><div class="portal-card">' +
    '<div class="portal-brand"><div class="mark">C</div><div><h1>CatalogueX</h1><p>Admin portal</p></div></div>' +
    '<p style="margin:0 0 1rem;color:var(--text-2);font-size:var(--fs-sm)">Sign in with your admin login ID and password from Settings · Admin profile.</p>' +
    '<div class="field"><label>Login ID / Email</label><input type="email" id="adm-email" autocomplete="username" placeholder="Your admin email" value="' +
    esc(creds.email) +
    '"></div>' +
    '<div class="field"><label>Password</label><input type="password" id="adm-pass" autocomplete="current-password" placeholder="Your admin password" value=""></div>' +
    '<p id="adm-login-error" class="portal-login-error" style="display:none" role="alert"></p>' +
    '<button class="btn btn-primary btn-block" id="enter-admin" style="padding:.85rem">' +
    icon('lock', 16) +
    ' Sign in as admin</button>' +
    '<div style="margin-top:1.15rem">' +
    themeToggleHtml() +
    '</div>' +
    '<p class="portal-note">Credentials are stored in this browser. Change them anytime in Settings · Admin profile after login.</p>' +
    '</div></div>'
  );
}

function bindPortal() {
  bindThemeControls();
  var a = document.getElementById('enter-admin');
  var errEl = document.getElementById('adm-login-error');
  function showLoginError(msg) {
    if (!errEl) {
      toast(msg);
      return;
    }
    errEl.textContent = msg;
    errEl.style.display = msg ? 'block' : 'none';
  }
  function tryLogin() {
    var creds = getAdminCredentials();
    var email = (document.getElementById('adm-email') && document.getElementById('adm-email').value) || '';
    var pass = (document.getElementById('adm-pass') && document.getElementById('adm-pass').value) || '';
    email = String(email).trim();
    pass = String(pass);
    if (!email || !pass) {
      showLoginError('Enter login ID and password.');
      return;
    }
    if (normalizeLoginId(email) !== normalizeLoginId(creds.email) || pass !== creds.password) {
      showLoginError('Invalid login ID or password.');
      log('Sign-in failed', 'Admin · wrong credentials for ' + email);
      persist();
      return;
    }
    showLoginError('');
    var name = creds.name || 'Admin';
    state.session = {
      role: 'admin',
      name: name,
      email: creds.email,
      portalLabel: name,
    };
    state.view = 'product';
    log('Signed in', 'Admin · ' + creds.email);
    persist();
    render();
    toast('Welcome, ' + name);
  }
  if (a) a.onclick = tryLogin;
  var passInput = document.getElementById('adm-pass');
  var emailInput = document.getElementById('adm-email');
  function onEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      tryLogin();
    }
  }
  if (passInput) passInput.onkeydown = onEnter;
  if (emailInput) emailInput.onkeydown = onEnter;
}

function sessionPortalLabel() {
  if (!state.session) return '';
  if (state.profile && state.profile.name && (state.session.role === 'admin' || state.session.role === 'developer')) {
    return state.profile.name;
  }
  if (state.session.role === 'admin' || state.session.role === 'developer') return 'Admin';
  return state.session.portalLabel || state.session.name || 'User';
}

function workspaceNavItems() {
  var interests = countOpenInterests();
  var totalInterests = 0;
  (state.shareLinks || []).forEach(function (s) {
    totalInterests += (s.interests || []).length;
  });
  return [
    { v: 'product', i: 'catalog', label: 'Product', count: state.items.length },
    { v: 'upload', i: 'upload', label: 'Upload' },
    { v: 'interests', i: 'heart', label: 'Interests', count: totalInterests || interests || undefined },
    { v: 'share', i: 'share', label: 'Share & Security', count: state.shareLinks.length },
    { v: 'activity', i: 'activity', label: 'Activity Log' },
    { v: 'settings', i: 'settings', label: 'Settings' },
  ];
}

function sidebarHtml() {
  var items = workspaceNavItems();
  var nav =
    '<div class="nav-label">Workspace</div><nav class="side-nav" aria-label="Workspace">' +
    items
      .map(function (it) {
        return (
          '<button type="button" class="navitem ' +
          (state.view === it.v ? 'active' : '') +
          '" data-nav="' +
          it.v +
          '">' +
          icon(it.i, 18) +
          '<span>' +
          it.label +
          '</span>' +
          (it.count !== undefined ? '<span class="count">' + it.count + '</span>' : '') +
          '</button>'
        );
      })
      .join('') +
    '</nav>';

  var p = (state && state.profile) || {};
  var company = (p.company || '').trim();
  var brand = (p.brandName || '').trim();
  var logo = (p.companyLogo || '').trim();
  var canBrand = canEdit();
  var companyBlock =
    '<div class="side-company' +
    (canBrand ? ' side-company-edit' : '') +
    '">' +
    (canBrand
      ? '<label class="side-company-logo-btn" title="Upload logo">' +
        (logo
          ? '<img class="side-company-logo" src="' + esc(logo) + '" alt="Company logo">'
          : '<span class="side-company-logo-placeholder">' + icon('plus', 20) + '<span>Logo</span></span>') +
        '<input type="file" id="ws-logo" accept="image/*" hidden></label>' +
        '<input type="text" class="side-company-input" id="ws-company" placeholder="Company name" value="' +
        esc(company) +
        '">' +
        '<input type="text" class="side-company-input side-company-input-sub" id="ws-brand" placeholder="Brand name" value="' +
        esc(brand) +
        '">'
      : (logo
          ? '<img class="side-company-logo" src="' + esc(logo) + '" alt="' + esc(company || brand || 'Logo') + '">'
          : '') +
        (company ? '<div class="side-company-name">' + esc(company) + '</div>' : '') +
        (brand ? '<div class="side-company-brand">' + esc(brand) + '</div>' : '')) +
    '</div>';

  var foot =
    '<div class="side-foot">' +
    companyBlock +
    '<div class="side-foot-divider" aria-hidden="true"></div>' +
    themeToggleHtml() +
    '</div>';

  return (
    '<aside class="sidebar" id="workspace-sidebar" aria-label="Workspace menu">' +
    '<div class="side-brand side-brand-minimal">' +
    '<button type="button" class="icon-btn side-close" id="menu-close" aria-label="Close menu">' +
    icon('x', 18) +
    '</button>' +
    '</div>' +
    nav +
    foot +
    '</aside>'
  );
}

function topbarHtml() {
  var titles = {
    product: ['Product', 'Browse, select, and share designs'],
    upload: ['Upload', 'Add products one by one or import a CSV'],
    interests: ['Interests', 'Who showed interest on your shared links'],
    share: ['Share & Security', 'Manage links, protection, and interest'],
    activity: ['Activity Log', 'A simple audit trail of what happened'],
    settings: ['Settings', 'Admin profile and specification lists'],
  };
  var t = titles[state.view] || ['CatalogueX', ''];
  var name =
    (state.profile && state.profile.name) ||
    (state.session && state.session.name) ||
    sessionPortalLabel() ||
    'Admin';
  var role = 'Admin';
  return (
    '<header class="topbar">' +
    '<div class="topbar-lead">' +
    '<button type="button" class="icon-btn menu-toggle" id="menu-toggle" aria-label="Open workspace menu" aria-controls="workspace-sidebar" aria-expanded="' +
    (menuOpen ? 'true' : 'false') +
    '">' +
    icon('menu', 20) +
    '</button>' +
    '<div class="topbar-titles"><h1>' +
    t[0] +
    '</h1><p class="sub">' +
    t[1] +
    '</p></div></div>' +
    (state.view === 'product'
      ? '<input type="search" id="global-search" placeholder="Search products…" value="' + esc(state.browse.q) + '">'
      : '') +
    (canShare() && state.view === 'product'
      ? '<button class="btn btn-primary btn-sm" id="share-selected-btn" ' +
        (state.selectedItems.length ? '' : 'disabled') +
        '>' +
        icon('share', 14) +
        ' Share (' +
        state.selectedItems.length +
        ')</button>'
      : '') +
    '<div class="topbar-right">' +
    '<span class="topbar-box topbar-box-name" title="' +
    esc((state.session && state.session.email) || name) +
    '">' +
    esc(name) +
    '</span>' +
    '<span class="topbar-box topbar-box-role">' +
    esc(role) +
    '</span>' +
    '<button type="button" class="topbar-box topbar-box-logout" id="logout-btn" title="Sign out">' +
    icon('logout', 14) +
    ' Log out</button>' +
    '</div></header>'
  );
}

function countOpenInterests() {
  var n = 0;
  (state.shareLinks || []).forEach(function (s) {
    n += (s.interests || []).filter(function (i) {
      return !i.seen;
    }).length;
  });
  return n;
}

function viewHtml() {
  if (!canEdit() && (state.view === 'upload' || state.view === 'settings')) {
    return (
      '<div class="page-head"><h1>Restricted</h1><p>This area needs admin or developer access.</p></div>' +
      '<div class="card empty">' +
      icon('lock', 28) +
      '<p style="margin:.75rem 0 0">Switch account from the portal to continue.</p></div>'
    );
  }
  switch (state.view) {
    case 'product':
      return productHtml();
    case 'upload':
      return uploadHtml();
    case 'interests':
      return interestsHtml();
    case 'share':
      return shareHtml();
    case 'activity':
      return activityHtml();
    case 'settings':
      return settingsHtml();
    default:
      return productHtml();
  }
}

function collectAllInterests() {
  var interests = [];
  (state.shareLinks || []).forEach(function (s) {
    (s.interests || []).forEach(function (i) {
      interests.push(Object.assign({ link: s }, i));
    });
  });
  interests.sort(function (a, b) {
    return b.ts - a.ts;
  });
  return interests;
}

function interestsHtml() {
  var interests = collectAllInterests();
  var openN = countOpenInterests();

  return (
    '<div class="page-head"><h1>Interests</h1><p>When someone taps “I’m interested” on a shared link, it appears here.</p></div>' +
    '<div class="grid grid-4" style="margin-bottom:1rem">' +
    metric('Total', interests.length) +
    metric('New', openN) +
    metric('Share links', state.shareLinks.length) +
    metric('Products', state.items.length) +
    '</div>' +
    '<div class="card">' +
    (interests.length
      ? interests
          .map(function (i) {
            var item = state.items.find(function (x) {
              return x.id === i.itemId;
            });
            var linkLabel =
              i.link.type === 'selection'
                ? i.link.label || 'Selection · ' + (i.link.itemIds || []).length + ' products'
                : catName(i.link.catalogueId);
            return (
              '<div class="link-row">' +
              '<span class="interest-dot"></span>' +
              '<div style="flex:1;min-width:0">' +
              '<strong>' +
              esc(item ? item.name : 'Product') +
              '</strong>' +
              (!i.seen ? ' <span class="badge badge-accent">New</span>' : '') +
              '<div class="meta" style="color:var(--text-2);font-size:var(--fs-xs);margin-top:.2rem">' +
              esc(i.name || 'Someone') +
              (i.note ? ' · ' + esc(i.note) : '') +
              ' · ' +
              timeAgo(i.ts) +
              ' · ' +
              esc(linkLabel) +
              ' · #' +
              esc(i.link.token) +
              '</div></div>' +
              '<div class="link-row-actions">' +
              '<button class="btn btn-sm" data-open-share="' +
              esc(i.link.token) +
              '">Open link</button>' +
              (!i.seen
                ? '<button class="btn btn-sm" data-mark-seen="' +
                  esc(i.id) +
                  '">Mark seen</button>'
                : '') +
              '</div></div>'
            );
          })
          .join('')
      : '<p class="empty" style="padding:2rem">No interest yet. Share products from <strong>Product</strong> — when someone shows interest, it shows up here.</p>') +
    '</div>'
  );
}
function metric(label, val) {
  return '<div class="card"><p class="metric-label">' + label + '</p><p class="metric-value">' + val + '</p></div>';
}

function uploadHtml() {
  var catOptions = state.catalogues
    .map(function (c) {
      return '<option value="' + c.id + '">' + esc(c.name) + '</option>';
    })
    .join('');
  return (
    '<div class="page-head"><h1>Upload</h1><p>Only global specifications, manual specifications, and photos.</p></div>' +
    '<div class="grid grid-2">' +
    '<div class="card">' +
    '<h2 style="margin:0 0 .75rem;font-size:var(--fs-lg);font-weight:550">Single product</h2>' +
    '<div class="field"><label>Catalogue</label><select id="up-cat">' +
    catOptions +
    '</select></div>' +
    '<div class="field"><label>Product name</label><input type="text" id="up-name" placeholder="e.g. Festive kurta set"></div>' +
    '<div class="section-label">1 · Global specifications</div>' +
    globalSpecsFieldsHtml([]) +
    '<div class="section-label">2 · Manual specifications</div>' +
    specsEditorHtml([], {
      editorId: 'manual-specs-editor',
      addId: 'manual-spec-add',
      addLabel: 'Add manual specification',
      allowEmpty: true,
      manual: true,
      hint: 'Type any heading and option freely — not from a list. Values can sync into global lists.',
    }) +
    '<div class="section-label">3 · Photos</div>' +
    productPhotosHtml([]) +
    '<button class="btn btn-primary btn-block" id="up-submit" style="margin-top:.85rem">' +
    icon('plus', 14) +
    ' Add product</button>' +
    '</div>' +
    '<div class="card">' +
    '<h2 style="margin:0 0 .75rem;font-size:var(--fs-lg);font-weight:550">CSV import</h2>' +
    '<p style="margin:0 0 .75rem;color:var(--text-2);font-size:var(--fs-sm)">Headers: name, and any global heading names as columns (comma-separated for multi).<br><span style="color:var(--text-3)">Example: name, Colours, Sizes, Category, Price</span></p>' +
    '<div class="field"><label>Target catalogue</label><select id="bulk-cat">' +
    catOptions +
    '</select></div>' +
    '<div class="drop" id="drop-zone">' +
    icon('upload', 22) +
    '<p style="margin:.5rem 0 0;font-weight:500">Drop CSV here</p>' +
    '<input type="file" id="bulk-file" accept=".csv" style="width:min(220px,100%);margin:.6rem auto 0;display:block">' +
    '</div><div id="bulk-preview"></div></div></div>'
  );
}

function productHtml() {
  var b = state.browse;
  var cats = uniq(
    state.items.map(function (i) {
      return i.category;
    })
  );
  var colors = collectField(state.items, colorsOf);
  var sizes = collectField(state.items, sizesOf);
  var filtered = filterItems();
  var nSel = state.selectedItems.length;
  var shareHint = canShare()
    ? 'Products show photos and specifications. Edit, delete, or share any product.'
    : 'Browse products in this demo session.';

  return (
    '<div class="page-head"><h1>Product</h1><p>' +
    shareHint +
    '</p></div>' +
    (canShare()
      ? nSel
        ? '<div class="sel-bar"><span><strong>' +
          nSel +
          '</strong> selected</span><div class="spacer"></div>' +
          '<button class="btn btn-sm" id="select-all-filtered">Select all shown</button>' +
          '<button class="btn btn-sm" id="clear-sel">Clear</button>' +
          '<button class="btn btn-primary btn-sm" id="share-selected-inline">' +
          icon('share', 14) +
          ' Share selected</button></div>'
        : '<div class="sel-bar" style="background:var(--surface-2);border-color:var(--border)">' +
          '<span style="color:var(--text-2)">Tick products (or open one to edit), then share.</span>' +
          '<div class="spacer"></div>' +
          '<button class="btn btn-sm" id="select-all-filtered">Select all shown</button></div>'
      : '') +
    '<div class="toolbar">' +
    '<input type="search" id="b-q" placeholder="Search name or SKU" value="' +
    esc(b.q) +
    '">' +
    sel('b-category', 'Category', cats, b.category) +
    sel('b-color', 'Colour', colors, b.color) +
    sel('b-size', 'Size', sizes, b.size) +
    sel('b-avail', 'Availability', ['Available', 'Not available'], b.avail) +
    '<select id="b-sort">' +
    ['newest', 'Price: low to high', 'Price: high to low']
      .map(function (s) {
        return '<option value="' + s + '" ' + (b.sort === s ? 'selected' : '') + '>' + (s === 'newest' ? 'Newest' : s) + '</option>';
      })
      .join('') +
    '</select>' +
    '<span class="spacer"></span><span style="color:var(--text-2);font-size:var(--fs-xs)">' +
    filtered.length +
    ' products</span></div>' +
    '<div class="grid grid-cards">' +
    (filtered.map(productCard).join('') || '<p class="empty" style="grid-column:1/-1">No products match.</p>') +
    '</div>'
  );
}
function sel(id, label, options, val) {
  return (
    '<select id="' +
    id +
    '"><option value="">' +
    label +
    '</option>' +
    options
      .map(function (o) {
        return '<option ' + (val === o ? 'selected' : '') + '>' + esc(o) + '</option>';
      })
      .join('') +
    '</select>'
  );
}
function filterItems() {
  var b = state.browse;
  var q = (b.q || '').toLowerCase();
  var res = state.items.filter(function (i) {
    if (q) {
      var specText = (i.specs || [])
        .map(function (s) {
          return (s.key || '') + ' ' + (s.value || '');
        })
        .join(' ');
      var hay = (
        i.name +
        ' ' +
        (i.sku || '') +
        ' ' +
        (i.fabric || '') +
        ' ' +
        (i.description || '') +
        ' ' +
        colorsOf(i).join(' ') +
        ' ' +
        sizesOf(i).join(' ') +
        ' ' +
        specText
      ).toLowerCase();
      if (hay.indexOf(q) === -1) return false;
    }
    if (b.category && i.category !== b.category) return false;
    if (b.color && colorsOf(i).indexOf(b.color) === -1) return false;
    if (b.size && sizesOf(i).indexOf(b.size) === -1) return false;
    if (b.avail) {
      if (availOf(i).label !== b.avail) return false;
    }
    return true;
  });
  if (b.sort === 'Price: low to high') res.sort(function (a, c) {
    return a.price - c.price;
  });
  if (b.sort === 'Price: high to low') res.sort(function (a, c) {
    return c.price - a.price;
  });
  return res;
}
function productMetaLine(it) {
  // Short line only — full details listed once in the vertical specs block
  var parts = [];
  if (it.category) parts.push(it.category);
  var cols = colorsOf(it);
  var szs = sizesOf(it);
  if (cols.length) parts.push(cols.length + ' colour' + (cols.length > 1 ? 's' : ''));
  if (szs.length) parts.push(szs.length + ' size' + (szs.length > 1 ? 's' : ''));
  return parts.filter(Boolean).join(' · ') || 'Product';
}
function productImagesOf(it) {
  if (!it) return [];
  var list = [];
  if (Array.isArray(it.images)) {
    it.images.forEach(function (src) {
      if (src && list.indexOf(src) === -1) list.push(src);
    });
  }
  if (it.image && list.indexOf(it.image) === -1) list.unshift(it.image);
  return list;
}
function productThumbHtml(it, opts) {
  opts = opts || {};
  var imgs = productImagesOf(it);
  var title = it.name || 'Product';
  var img = imgs[0] || '';
  var extraClass = opts.wm ? ' wm-wrap' : '';
  if (!img) {
    return '<div class="thumb' + extraClass + '">' + icon('hanger', 32) + (opts.wm ? '<span class="wm-mark" aria-hidden="true">CatalogueX</span>' : '') + '</div>';
  }
  return (
    '<button type="button" class="thumb thumb-view' +
    extraClass +
    '" data-view-photos="' +
    esc(it.id) +
    '" data-view-index="0" title="Tap to view photo' +
    (imgs.length > 1 ? 's' : '') +
    '">' +
    '<img src="' +
    esc(img) +
    '" alt="' +
    esc(title) +
    '" draggable="false">' +
    (imgs.length > 1 ? '<span class="thumb-count">' + imgs.length + ' photos</span>' : '') +
    (opts.wm ? '<span class="wm-mark" aria-hidden="true">CatalogueX</span>' : '') +
    '</button>'
  );
}
function productCard(it) {
  var d = getProductDisplay();
  var selected = state.selectedItems.indexOf(it.id) > -1;
  var title = it.name || 'Product';
  return (
    '<div class="product-card ' +
    (selected ? 'selected' : '') +
    '">' +
    (canShare()
      ? '<input class="chk" type="checkbox" data-select-item="' + it.id + '" ' + (selected ? 'checked' : '') + ' title="Select to share">'
      : '') +
    (d.image !== false ? productThumbHtml(it, {}) : '') +
    '<div class="body">' +
    (d.name !== false ? '<h3>' + esc(title) + '</h3>' : '') +
    productSpecsChipsHtml(it) +
    (canEdit() || canShare()
      ? '<div class="card-actions">' +
        (canEdit()
          ? '<button type="button" class="btn btn-sm" data-edit-item="' +
            it.id +
            '">' +
            icon('edit', 13) +
            ' Edit</button>' +
            '<button type="button" class="btn btn-sm" data-del-item="' +
            it.id +
            '">' +
            icon('trash', 13) +
            ' Delete</button>'
          : '') +
        (canShare()
          ? '<button type="button" class="btn btn-sm btn-primary" style="margin-left:auto" data-share-one="' +
            it.id +
            '">' +
            icon('share', 13) +
            ' Share</button>'
          : '') +
        '</div>'
      : '') +
    '</div></div>'
  );
}

function findItemBySku(sku) {
  var key = String(sku || '')
    .trim()
    .toLowerCase();
  if (!key) return null;
  return (
    (state.items || []).find(function (i) {
      return String(i.sku || '')
        .trim()
        .toLowerCase() === key;
    }) || null
  );
}
function shareLinkStats(links) {
  links = links || state.shareLinks || [];
  var total = links.length;
  var active = 0;
  var expired = 0;
  var allowed = 0;
  var revoked = 0;
  links.forEach(function (s) {
    if (isLinkRevoked(s)) revoked++;
    else {
      allowed++;
      if (isTimeExpired(s)) expired++;
      else active++;
    }
  });
  return { total: total, active: active, expired: expired, allowed: allowed, revoked: revoked };
}
function shareLinksForFilter(filter) {
  var links = state.shareLinks || [];
  filter = filter || 'all';
  if (filter === 'active') return links.filter(isLinkActive);
  if (filter === 'expired')
    return links.filter(function (s) {
      return !isLinkRevoked(s) && isTimeExpired(s);
    });
  if (filter === 'allowed') return links.filter(isLinkAllowed);
  if (filter === 'revoked') return links.filter(isLinkRevoked);
  return links.slice();
}
function shareStatCard(key, label, val, activeKey) {
  var on = activeKey === key;
  return (
    '<button type="button" class="share-stat' +
    (on ? ' active' : '') +
    '" data-share-filter="' +
    key +
    '"><span class="metric-label">' +
    label +
    '</span><span class="metric-value">' +
    val +
    '</span></button>'
  );
}
function shareHtml() {
  var skus = collectField(state.items, function (i) {
    return i.sku ? [i.sku] : [];
  });
  var stats = shareLinkStats();
  var filter = shareListFilter || 'all';
  var shown = shareLinksForFilter(filter);
  var filterLabels = {
    all: 'All links',
    active: 'Active links',
    expired: 'Expired links',
    allowed: 'Allowed links',
    revoked: 'Revoked links',
  };

  return (
    '<div class="page-head"><h1>Share & Security</h1><p>Quick share by SKU. Edit any existing link anytime — same URL, update products, access, expiry, or status.</p></div>' +
    (canEdit()
      ? '<div class="card" style="margin-bottom:var(--gap)">' +
        '<h2 class="section-label" style="margin-top:0">Quick share</h2>' +
        '<p style="margin:0 0 .55rem;color:var(--text-2);font-size:var(--fs-xs)">Enter a product <strong>SKU ID</strong> to create a share link for that product only.</p>' +
        '<div class="field"><label>SKU ID</label>' +
        '<div class="qs-sku-row">' +
        '<input type="text" id="qs-sku" list="qs-sku-list" placeholder="e.g. CW-NK-01" autocomplete="off">' +
        '<datalist id="qs-sku-list">' +
        skus
          .map(function (s) {
            return '<option value="' + esc(s) + '"></option>';
          })
          .join('') +
        '</datalist>' +
        '<button type="button" class="btn btn-sm" id="qs-lookup">Find</button>' +
        '</div></div>' +
        '<div id="qs-sku-match" class="qs-sku-match"></div>' +
        '<div class="grid-form-2" style="margin-top:.55rem">' +
        '<div class="field"><label>Link name</label><input type="text" id="qs-label" placeholder="e.g. For Priya — wholesale"></div>' +
        '<div class="field"><label>Access</label><select id="qs-auth">' +
        '<option value="password">Password</option>' +
        '<option value="otp">OTP</option>' +
        '<option value="none">Open (no gate)</option></select></div>' +
        '<div class="field" id="qs-pass-wrap"><label>Password</label><input type="text" id="qs-password" placeholder="Set share password" value="demo123"></div>' +
        '<div class="field"><label>Expiry (days)</label><input type="number" id="qs-expiry" min="1" step="1" value="30" placeholder="e.g. 14"></div>' +
        '</div>' +
        '<p style="margin:0 0 .55rem;color:var(--text-3);font-size:var(--fs-xs)">Watermark is always on. Right-click is blocked on the shared page. OTP codes are logged in Activity for demo delivery.</p>' +
        '<button type="button" class="btn btn-primary" id="qs-create">' +
        icon('share', 14) +
        ' Create share link</button>' +
        '</div>'
      : '') +
    '<div class="share-stats" style="margin-bottom:var(--gap)">' +
    shareStatCard('all', 'Total links', stats.total, filter) +
    shareStatCard('active', 'Active', stats.active, filter) +
    shareStatCard('expired', 'Expired', stats.expired, filter) +
    shareStatCard('allowed', 'Allowed', stats.allowed, filter) +
    shareStatCard('revoked', 'Revoked', stats.revoked, filter) +
    '</div>' +
    '<div class="card">' +
    '<h2 class="section-label" style="margin-top:0">' +
    (filterLabels[filter] || 'All links') +
    ' (' +
    shown.length +
    ')</h2>' +
    (shown.map(shareRow).join('') ||
      '<p class="empty" style="padding:1rem">No links in this group.</p>') +
    '</div>'
  );
}
function rowCheck(id, label, checked) {
  return (
    '<label style="display:flex;align-items:center;justify-content:space-between;padding:.4rem 0;border-bottom:1px solid var(--border);font-size:var(--fs-sm);font-weight:500;color:var(--text)">' +
    '<span>' +
    label +
    '</span><input type="checkbox" id="' +
    id +
    '" ' +
    (checked ? 'checked' : '') +
    ' style="width:auto;accent-color:var(--accent)"></label>'
  );
}
function shareRow(s) {
  var title =
    s.type === 'selection'
      ? s.label || 'Selection · ' + (s.itemIds || []).length + ' products'
      : s.label || catName(s.catalogueId);
  var intN = (s.interests || []).length;
  var active = isLinkActive(s);
  var revoked = isLinkRevoked(s);
  var expired = !revoked && isTimeExpired(s);
  var exp = daysLeft(s);
  var auth =
    s.authType === 'otp' ? 'OTP' : s.authType === 'password' || s.passwordValue ? 'Password' : 'Open';
  var badge = active
    ? '<span class="badge badge-success">Active</span>'
    : revoked
      ? '<span class="badge badge-danger">Revoked</span>'
      : expired
        ? '<span class="badge badge-warning">Expired</span>'
        : '<span class="badge badge-neutral">Allowed</span>';
  return (
    '<div class="link-row">' +
    '<span class="link-row-icon">' +
    icon(s.type === 'selection' ? 'share' : 'catalog', 16) +
    '</span>' +
    '<div style="flex:1;min-width:0">' +
    '<strong>' +
    esc(title) +
    '</strong> ' +
    badge +
    '<div style="color:var(--text-2);font-size:var(--fs-xs);margin-top:.15rem">' +
    '#' +
    esc(s.token) +
    ' · ' +
    (s.views || 0) +
    ' views · ' +
    intN +
    ' interests · ' +
    auth +
    ' · watermark · ' +
    (revoked
      ? 'revoked'
      : exp != null
        ? exp + 'd left'
        : s.expiresDays + 'd total') +
    '</div></div>' +
    '<div class="link-row-actions">' +
    (!revoked
      ? '<button type="button" class="btn btn-sm" data-open-share="' +
        esc(s.token) +
        '">Open</button>' +
        '<button type="button" class="icon-btn" data-copy-link="' +
        esc(s.token) +
        '" title="Copy">' +
        icon('copy', 16) +
        '</button>'
      : '') +
    (canEdit()
      ? '<button type="button" class="btn btn-sm" data-edit-share="' +
        s.id +
        '">' +
        icon('edit', 13) +
        ' Edit</button>'
      : '') +
    (canEdit() && active
      ? '<button type="button" class="btn btn-sm" data-revoke-link="' +
        s.id +
        '">Revoke</button>'
      : '') +
    (canEdit() && revoked
      ? '<button type="button" class="btn btn-sm btn-primary" data-allow-link="' +
        s.id +
        '">Allow</button>'
      : '') +
    '</div></div>'
  );
}
function daysLeft(s) {
  if (s == null || s.expiresDays == null || s.expiresDays === '') return null;
  var elapsed = (Date.now() - s.createdAt) / 86400000;
  return Math.max(0, Math.round(Number(s.expiresDays) - elapsed));
}

function activityHtml() {
  var rows = state.activity || [];
  return (
    '<div class="page-head"><h1>Activity Log</h1><p>Every small action across the portal is recorded here.</p></div>' +
    '<div class="card"><div class="table-wrap"><table><thead><tr><th>When</th><th>Who</th><th>Role</th><th>Action</th><th>Detail</th></tr></thead><tbody>' +
    (rows
      .map(function (a) {
        return (
          '<tr><td style="color:var(--text-2);white-space:nowrap">' +
          timeAgo(a.ts) +
          '</td><td>' +
          esc(a.who || a.role || '—') +
          '</td><td>' +
          esc(a.role || '—') +
          '</td><td><strong>' +
          esc(a.action) +
          '</strong></td><td>' +
          esc(a.detail) +
          '</td></tr>'
        );
      })
      .join('') || '<tr><td colspan="5" class="empty">Nothing logged yet.</td></tr>') +
    '</tbody></table></div></div>'
  );
}

function settingsHtml() {
  var list = state.users || [];
  var globals = state.globalSpecs || [];
  var p = state.profile || {
    name: '',
    email: '',
    phone: '',
    password: '',
    company: '',
    brandName: '',
    companyLogo: '',
  };
  if (!selectedGlobalSpecId && globals[0]) selectedGlobalSpecId = globals[0].id;
  var active = getGlobalSpecById(selectedGlobalSpecId) || globals[0] || null;
  if (active) selectedGlobalSpecId = active.id;

  var headingsList =
    globals
      .map(function (g, i) {
        return (
          '<div class="gs-heading-item ' +
          (active && g.id === active.id ? 'active' : '') +
          '" draggable="true" data-gs-drag="heading" data-gs-index="' +
          i +
          '" data-gs-select="' +
          esc(g.id) +
          '">' +
          '<span class="gs-drag-handle" title="Drag to reorder" aria-hidden="true">⋮⋮</span>' +
          '<button type="button" class="gs-heading-btn" data-gs-select-btn="' +
          esc(g.id) +
          '"><span class="gs-heading-label">' +
          esc(g.key) +
          '</span><span class="gs-count" title="Multi or single · options">' +
          (g.multi ? 'Multi' : 'Single') +
          ' · ' +
          (g.options || []).length +
          '</span></button></div>'
        );
      })
      .join('') || '<p class="settings-empty">No headings yet.</p>';

  var optionsList = active
    ? (active.options || [])
        .map(function (o, idx) {
          return (
            '<div class="settings-option-row" draggable="true" data-gs-drag="option" data-gs-index="' +
            idx +
            '">' +
            '<span class="gs-drag-handle" title="Drag to reorder" aria-hidden="true">⋮⋮</span>' +
            '<span class="gs-option-label">' +
            esc(o) +
            '</span>' +
            '<button type="button" class="icon-btn" data-gs-opt-del="' +
            idx +
            '" title="Remove">' +
            icon('x', 14) +
            '</button></div>'
          );
        })
        .join('') || '<p class="settings-empty">No options for this heading.</p>'
    : '<p class="settings-empty">Select a heading.</p>';

  var open = settingsOpenSection;
  function acc(id, title, bodyHtml) {
    var isOpen = open === id;
    return (
      '<div class="settings-acc card' +
      (isOpen ? ' open' : '') +
      '" data-acc="' +
      id +
      '">' +
      '<button type="button" class="settings-acc-head" data-acc-toggle="' +
      id +
      '" aria-expanded="' +
      (isOpen ? 'true' : 'false') +
      '">' +
      '<span class="settings-acc-title">' +
      title +
      '</span>' +
      '<span class="settings-acc-chevron" aria-hidden="true">' +
      (isOpen ? '▾' : '▸') +
      '</span></button>' +
      '<div class="settings-acc-body"' +
      (isOpen ? '' : ' hidden') +
      '>' +
      bodyHtml +
      '</div></div>'
    );
  }

  var adminBody =
    '<div class="settings-stack">' +
    '<p class="settings-gs-intro">Login ID and password below are used on the sign-in screen. Save to apply immediately.</p>' +
    '<div class="field"><label>Name</label><input type="text" id="pf-name" value="' +
    esc(p.name || '') +
    '" placeholder="Display name"></div>' +
    '<div class="field"><label>Login ID / Email</label><input type="email" id="pf-email" value="' +
    esc(p.email || '') +
    '" placeholder="Used to sign in" autocomplete="username"></div>' +
    '<div class="field"><label>Phone number</label><input type="text" id="pf-phone" value="' +
    esc(p.phone || '') +
    '" placeholder="Phone"></div>' +
    '<div class="field"><label>Password</label><input type="password" id="pf-password" value="' +
    esc(p.password || '') +
    '" placeholder="Used to sign in" autocomplete="new-password"></div>' +
    '<button type="button" class="btn btn-primary btn-sm" id="pf-save">Save login credentials</button></div>';

  var bizBody =
    '<div class="settings-stack">' +
    '<div class="field"><label>Company name</label><input type="text" id="bp-company" value="' +
    esc(p.company || '') +
    '" placeholder="Company name"></div>' +
    '<div class="field"><label>Brand name</label><input type="text" id="bp-brand" value="' +
    esc(p.brandName || '') +
    '" placeholder="Brand name"></div>' +
    '<div class="field bp-logo-field"><label>Logo</label>' +
    '<div class="bp-logo-area">' +
    (p.companyLogo
      ? '<img class="bp-logo-lg" src="' + esc(p.companyLogo) + '" alt="Logo">'
      : '<div class="bp-logo-lg bp-logo-empty">No logo</div>') +
    '<div class="bp-logo-actions">' +
    '<input type="file" id="bp-logo" accept="image/*">' +
    (p.companyLogo ? '<button type="button" class="btn btn-sm" id="bp-logo-clear">Remove logo</button>' : '') +
    '</div></div></div>' +
    '<button type="button" class="btn btn-primary btn-sm" id="bp-save">Save business profile</button></div>';

  var addUserBody =
    '<div class="settings-stack">' +
    '<div class="field"><label>Name</label><input type="text" id="u-name" placeholder="Full name"></div>' +
    '<div class="field"><label>Email</label><input type="email" id="u-email" placeholder="name@company.com"></div>' +
    '<div class="field"><label>Phone number</label><input type="text" id="u-phone" placeholder="Phone"></div>' +
    '<div class="field"><label>Password</label><input type="password" id="u-pass" placeholder="Password" autocomplete="new-password"></div>' +
    '<button type="button" class="btn btn-primary btn-sm" id="u-create">' +
    icon('users', 14) +
    ' Add user</button></div>';

  var manageUserBody = list.length
    ? '<div class="settings-users-grid">' +
      list
        .map(function (u) {
          var accessCount = Array.isArray(u.access) ? u.access.length : 0;
          return (
            '<div class="settings-user" data-user-row="' +
            esc(u.id) +
            '">' +
            '<div class="settings-stack">' +
            '<div class="field"><label>Name</label><input type="text" data-u-name="' +
            esc(u.id) +
            '" value="' +
            esc(u.name || '') +
            '"></div>' +
            '<div class="field"><label>Email</label><input type="email" data-u-email="' +
            esc(u.id) +
            '" value="' +
            esc(u.email || '') +
            '"></div>' +
            '<div class="field"><label>Phone number</label><input type="text" data-u-phone="' +
            esc(u.id) +
            '" value="' +
            esc(u.phone || '') +
            '" placeholder="Phone"></div>' +
            '<div class="field"><label>Password</label><input type="password" data-u-pass="' +
            esc(u.id) +
            '" value="' +
            esc(u.password || '') +
            '" placeholder="Password" autocomplete="new-password"></div>' +
            '<div class="settings-user-actions">' +
            '<button type="button" class="btn btn-primary btn-sm" data-u-save="' +
            esc(u.id) +
            '">Save</button>' +
            '<button type="button" class="btn btn-sm" data-u-access="' +
            esc(u.id) +
            '">Access' +
            (accessCount ? ' (' + accessCount + ')' : '') +
            '</button>' +
            '<button type="button" class="btn btn-sm" data-u-del="' +
            esc(u.id) +
            '">Delete</button></div></div></div>'
          );
        })
        .join('') +
      '</div>'
    : '<p class="settings-empty">No users yet. Open Add users to create one.</p>';

  var gsBody =
    '<p class="settings-gs-intro">Left: headings · Right: options (any text/number allowed). Enable multi-select for headings like Colours. Used on Upload and Edit.</p>' +
    '<div class="gs-panel">' +
    '<div class="gs-panel-left">' +
    '<div class="gs-panel-title">Headings</div>' +
    '<div class="gs-heading-list" id="gs-heading-list">' +
    headingsList +
    '</div>' +
    '<div class="settings-actions">' +
    '<input type="text" id="gs-heading-new" placeholder="New heading e.g. Lining">' +
    '<button type="button" class="btn btn-sm" id="gs-heading-add">' +
    icon('plus', 13) +
    ' Add</button>' +
    (active
      ? '<button type="button" class="icon-btn" id="gs-heading-del" title="Delete heading">' +
        icon('trash', 14) +
        '</button>'
      : '') +
    '</div></div>' +
    '<div class="gs-panel-right">' +
    '<div class="gs-panel-title">Options' +
    (active ? ' · ' + esc(active.key) : '') +
    '</div>' +
    (active
      ? '<div class="gs-heading-props">' +
        '<label class="display-check"><input type="checkbox" id="gs-heading-multi"' +
        (active.multi ? ' checked' : '') +
        '> Multi-select (pick many options)</label>' +
        '<button type="button" class="btn btn-sm" id="gs-heading-props-save">Save multi-select</button>' +
        '</div>'
      : '') +
    '<div class="settings-options settings-options-list" id="gs-options-list">' +
    optionsList +
    '</div>' +
    '<div class="settings-actions">' +
    '<input type="text" id="gs-option-new" placeholder="Any option text or number" ' +
    (active ? '' : 'disabled') +
    '>' +
    '<button type="button" class="btn btn-primary btn-sm" id="gs-option-add" ' +
    (active ? '' : 'disabled') +
    '>Add option</button></div></div></div>';

  var disp = getProductDisplay();
  var displayFields = [
    { k: 'image', label: 'Photos / image' },
    { k: 'name', label: 'Product name' },
    { k: 'specs', label: 'Specifications' },
  ];
  var displayBody =
    '<p class="settings-gs-intro">Choose what appears on each product card. Changes apply immediately after save.</p>' +
    '<div class="display-check-grid" id="pd-grid">' +
    displayFields
      .map(function (f) {
        return (
          '<label class="display-check">' +
          '<input type="checkbox" data-pd="' +
          f.k +
          '"' +
          (disp[f.k] !== false ? ' checked' : '') +
          '> ' +
          esc(f.label) +
          '</label>'
        );
      })
      .join('') +
    '</div>' +
    '<button type="button" class="btn btn-primary btn-sm" id="pd-save" style="margin-top:.55rem">Save display options</button>';

  return (
    '<div class="page-head"><h1>Settings</h1><p>Open a section to edit. Sections stay closed until you expand them.</p></div>' +
    '<div class="settings-acc-list">' +
    acc('admin', '1 · Admin profile', adminBody) +
    acc('business', '2 · Business profile', bizBody) +
    acc('addusers', '3 · Add users', addUserBody) +
    acc('manageusers', '4 · Manage users', manageUserBody) +
    acc('globalspecs', '5 · Global specifications & options', gsBody) +
    acc('display', '6 · Product display options', displayBody) +
    '</div>'
  );
}

/* ---------- Public share ---------- */
function getShareByToken(token) {
  return state.shareLinks.find(function (s) {
    return s.token === token;
  });
}
function itemsForShare(s) {
  if (!s) return [];
  if (s.type === 'selection') {
    return state.items.filter(function (i) {
      return (s.itemIds || []).indexOf(i.id) > -1;
    });
  }
  return state.items.filter(function (i) {
    return i.catalogueId === s.catalogueId;
  });
}
function publicGateHtml(s, reason) {
  var title = s ? s.label || (s.type === 'selection' ? 'Shared selection' : catName(s.catalogueId)) : 'CatalogueX';
  return (
    '<div class="public public-protected">' +
    '<div class="public-bar"><strong>CatalogueX</strong><span class="badge badge-neutral">Protected</span></div>' +
    '<div class="card" style="width:min(380px,100%);margin:2rem auto">' +
    '<h2 style="margin:0 0 .35rem;font-size:1rem">' +
    esc(title) +
    '</h2>' +
    '<p style="margin:0 0 .75rem;color:var(--text-2);font-size:var(--fs-sm)">' +
    esc(reason || 'Enter access details to continue.') +
    '</p>' +
    (s && s.authType === 'password'
      ? '<div class="field"><label>Password</label><input type="password" id="pub-auth-pass" placeholder="Share password"></div>' +
        '<button class="btn btn-primary btn-block" id="pub-auth-go">Unlock</button>'
      : '') +
    (s && s.authType === 'otp'
      ? '<p style="margin:0 0 .5rem;color:var(--text-3);font-size:var(--fs-xs)">Demo: request OTP (also written to Activity Log).</p>' +
        '<button class="btn btn-sm" id="pub-otp-send" style="margin-bottom:.55rem">Send OTP</button>' +
        '<div class="field"><label>OTP</label><input type="text" id="pub-auth-otp" placeholder="6-digit code" inputmode="numeric"></div>' +
        '<button class="btn btn-primary btn-block" id="pub-auth-go">Verify OTP</button>'
      : '') +
    (!s ? '' : '') +
    '</div></div>'
  );
}
function publicHtml() {
  var s = getShareByToken(publicToken);
  if (!s || s.status === 'revoked') {
    return (
      '<div class="public public-protected"><div class="public-bar"><strong>CatalogueX</strong></div>' +
      '<p class="empty" style="padding:3rem">This share link is invalid or was revoked.</p></div>'
    );
  }
  if (isLinkExpired(s)) {
    return (
      '<div class="public public-protected"><div class="public-bar"><strong>CatalogueX</strong></div>' +
      '<p class="empty" style="padding:3rem">This share link has expired.</p></div>'
    );
  }
  var needsAuth = s.authType === 'password' || s.authType === 'otp';
  if (needsAuth && !shareAuthUnlocked(s.token)) {
    return publicGateHtml(
      s,
      s.authType === 'otp' ? 'OTP required for this link.' : 'Password required for this link.'
    );
  }
  // bump view once per session token
  if (!sessionStorage.getItem('viewed_' + s.token)) {
    s.views = (s.views || 0) + 1;
    sessionStorage.setItem('viewed_' + s.token, '1');
    log('Share link viewed', '#' + s.token + ' · ' + (s.label || s.type));
    persist();
  }
  var items = itemsForShare(s);
  var title =
    s.type === 'selection' ? s.label || 'Shared selection' : s.label || catName(s.catalogueId);
  var myId = sessionStorage.getItem('viewer_id') || uid('v');
  sessionStorage.setItem('viewer_id', myId);
  var exp = daysLeft(s);

  return (
    '<div class="public public-protected">' +
    '<div class="public-bar">' +
    '<div class="mark" style="width:28px;height:28px;border-radius:8px;background:var(--accent);color:#fff;display:grid;place-items:center;font-weight:600;font-size:12px">C</div>' +
    '<div style="flex:1;min-width:0"><strong style="font-size:1rem">' +
    esc(title) +
    '</strong>' +
    '<div style="color:var(--text-2);font-size:var(--fs-xs)">' +
    items.length +
    ' products · watermarked · expires in ' +
    (exp != null ? exp + 'd' : '—') +
    '</div></div>' +
    '<span class="badge badge-neutral">No download / no right-click</span>' +
    '</div>' +
    '<div class="public-grid">' +
    items
      .map(function (it) {
        var interested = (s.interests || []).some(function (x) {
          return x.itemId === it.id && x.viewerId === myId;
        });
        var a = availOf(it);
        return (
          '<div class="product-card">' +
          productThumbHtml(it, { wm: true }) +
          '<div class="body">' +
          '<h3>' +
          esc(it.name) +
          '</h3>' +
          productDetailsBlock(it) +
          (it.description ? '<p class="desc">' + esc(it.description) + '</p>' : '') +
          '<div style="display:flex;justify-content:space-between;align-items:center;margin:.35rem 0;flex-wrap:wrap;gap:.35rem">' +
          '<span class="price">' +
          money(it.price) +
          '</span><span class="badge ' +
          a.cls +
          '">' +
          a.label +
          '</span></div>' +
          '<button class="btn btn-block interest-btn ' +
          (interested ? 'interested' : '') +
          '" data-interest="' +
          it.id +
          '">' +
          icon('heart', 14) +
          (interested ? ' Interested' : ' I’m interested') +
          '</button></div></div>'
        );
      })
      .join('') +
    '</div>' +
    '<div class="card" style="width:min(420px,100%);margin:0 auto 1.5rem">' +
    '<h2 style="margin:0 0 .55rem;font-size:var(--fs-lg);font-weight:550">Your details (optional)</h2>' +
    '<div class="field"><label>Name</label><input type="text" id="pub-name" placeholder="So we know who is interested" value="' +
    esc(sessionStorage.getItem('viewer_name') || '') +
    '"></div>' +
    '<div class="field"><label>Note</label><input type="text" id="pub-note" placeholder="e.g. Need size set for order" value="' +
    esc(sessionStorage.getItem('viewer_note') || '') +
    '"></div>' +
    '<p style="margin:0;color:var(--text-3);font-size:var(--fs-xs)">Interest appears on the owner Interests page.</p>' +
    '</div></div>'
  );
}

function bindPublicProtection() {
  var root = document.querySelector('.public-protected');
  if (!root) return;
  var block = function (e) {
    e.preventDefault();
    return false;
  };
  root.addEventListener('contextmenu', block);
  root.addEventListener('dragstart', block);
  // soft select block on media
  root.querySelectorAll('img').forEach(function (img) {
    img.addEventListener('contextmenu', block);
    img.setAttribute('draggable', 'false');
  });
}

function bindPublic() {
  var s = getShareByToken(publicToken);
  if (!s) return;
  bindPublicProtection();
  bindPhotoViewers(document);

  var authGo = document.getElementById('pub-auth-go');
  var otpSend = document.getElementById('pub-otp-send');
  if (otpSend)
    otpSend.onclick = function () {
      if (!s.otpCode) s.otpCode = String(Math.floor(100000 + Math.random() * 900000));
      log('OTP issued', 'link #' + s.token + ' · OTP ' + s.otpCode + ' (demo)');
      persist();
      toast('OTP sent (demo): ' + s.otpCode);
    };
  if (authGo)
    authGo.onclick = function () {
      if (s.authType === 'password') {
        var pass = (document.getElementById('pub-auth-pass') && document.getElementById('pub-auth-pass').value) || '';
        if (pass !== String(s.passwordValue || '')) {
          log('Share unlock failed', '#' + s.token + ' · wrong password');
          persist();
          toast('Wrong password');
          return;
        }
      }
      if (s.authType === 'otp') {
        var code = (document.getElementById('pub-auth-otp') && document.getElementById('pub-auth-otp').value) || '';
        if (String(code).trim() !== String(s.otpCode || '')) {
          log('Share unlock failed', '#' + s.token + ' · wrong OTP');
          persist();
          toast('Wrong OTP');
          return;
        }
      }
      setShareAuthUnlocked(s.token);
      log('Share unlocked', '#' + s.token + ' · ' + s.authType);
      persist();
      render();
    };

  var nameEl = document.getElementById('pub-name');
  var noteEl = document.getElementById('pub-note');
  if (nameEl)
    nameEl.addEventListener('input', function () {
      sessionStorage.setItem('viewer_name', nameEl.value);
    });
  if (noteEl)
    noteEl.addEventListener('input', function () {
      sessionStorage.setItem('viewer_note', noteEl.value);
    });
  document.querySelectorAll('[data-interest]').forEach(function (btn) {
    btn.onclick = function () {
      var itemId = btn.getAttribute('data-interest');
      var viewerId = sessionStorage.getItem('viewer_id');
      s.interests = s.interests || [];
      var idx = s.interests.findIndex(function (x) {
        return x.itemId === itemId && x.viewerId === viewerId;
      });
      var name = (document.getElementById('pub-name') && document.getElementById('pub-name').value) || 'Someone';
      var note = (document.getElementById('pub-note') && document.getElementById('pub-note').value) || '';
      if (idx > -1) {
        s.interests.splice(idx, 1);
        toast('Interest removed');
      } else {
        s.interests.unshift({
          id: uid('int'),
          itemId: itemId,
          viewerId: viewerId,
          name: name,
          note: note,
          ts: Date.now(),
          seen: false,
        });
        var item = state.items.find(function (i) {
          return i.id === itemId;
        });
        log('Interest received', (item ? item.name : 'Product') + ' · ' + name + ' · link ' + s.token);
        toast('Interest saved — owner will see this');
      }
      persist();
      render();
    };
  });
}

/* ---------- Modals ---------- */
function openModal(html, opts) {
  opts = opts || {};
  closeModal();
  var wrap = document.createElement('div');
  wrap.className = 'modal-backdrop';
  wrap.id = 'modal-backdrop';
  wrap.innerHTML = '<div class="modal' + (opts.wide ? ' wide' : '') + '">' + html + '</div>';
  wrap.addEventListener('click', function (e) {
    if (e.target === wrap) closeModal();
  });
  document.body.appendChild(wrap);
}
function closeModal() {
  var m = document.getElementById('modal-backdrop');
  if (m) m.remove();
}

/** Full-screen photo viewer — admin product page + client share links */
function closePhotoViewer() {
  var el = document.getElementById('photo-viewer');
  if (el) el.remove();
  document.body.classList.remove('photo-viewer-open');
}
function openPhotoViewer(images, startIndex, title) {
  images = (images || []).filter(Boolean);
  if (!images.length) {
    toast('No photos to view');
    return;
  }
  var idx = Math.max(0, Math.min(Number(startIndex) || 0, images.length - 1));
  title = title || 'Photo';
  closePhotoViewer();
  var wrap = document.createElement('div');
  wrap.id = 'photo-viewer';
  wrap.className = 'photo-viewer';
  wrap.setAttribute('role', 'dialog');
  wrap.setAttribute('aria-label', 'Photo viewer');
  function paint() {
    wrap.innerHTML =
      '<div class="photo-viewer-bar">' +
      '<div class="photo-viewer-title">' +
      esc(title) +
      (images.length > 1 ? ' · ' + (idx + 1) + ' / ' + images.length : '') +
      '</div>' +
      '<button type="button" class="icon-btn photo-viewer-close" title="Close" aria-label="Close">' +
      icon('x', 18) +
      '</button></div>' +
      '<div class="photo-viewer-stage">' +
      (images.length > 1
        ? '<button type="button" class="photo-viewer-nav prev" title="Previous" aria-label="Previous">' +
          '‹</button>'
        : '') +
      '<img class="photo-viewer-img" src="' +
      esc(images[idx]) +
      '" alt="' +
      esc(title) +
      '" draggable="false">' +
      (images.length > 1
        ? '<button type="button" class="photo-viewer-nav next" title="Next" aria-label="Next">' +
          '›</button>'
        : '') +
      '</div>' +
      (images.length > 1
        ? '<div class="photo-viewer-dots">' +
          images
            .map(function (_, i) {
              return (
                '<button type="button" class="photo-viewer-dot' +
                (i === idx ? ' active' : '') +
                '" data-pv-i="' +
                i +
                '" aria-label="Photo ' +
                (i + 1) +
                '"></button>'
              );
            })
            .join('') +
          '</div>'
        : '');
    wrap.querySelector('.photo-viewer-close').onclick = function (e) {
      e.stopPropagation();
      closePhotoViewer();
    };
    var prev = wrap.querySelector('.photo-viewer-nav.prev');
    var next = wrap.querySelector('.photo-viewer-nav.next');
    if (prev)
      prev.onclick = function (e) {
        e.stopPropagation();
        idx = (idx - 1 + images.length) % images.length;
        paint();
      };
    if (next)
      next.onclick = function (e) {
        e.stopPropagation();
        idx = (idx + 1) % images.length;
        paint();
      };
    wrap.querySelectorAll('[data-pv-i]').forEach(function (btn) {
      btn.onclick = function (e) {
        e.stopPropagation();
        idx = Number(btn.getAttribute('data-pv-i')) || 0;
        paint();
      };
    });
    var stage = wrap.querySelector('.photo-viewer-stage');
    if (stage)
      stage.onclick = function (e) {
        if (e.target === stage) closePhotoViewer();
      };
  }
  paint();
  wrap.addEventListener('click', function (e) {
    if (e.target === wrap) closePhotoViewer();
  });
  wrap.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });
  document.addEventListener(
    'keydown',
    function onKey(e) {
      if (!document.getElementById('photo-viewer')) {
        document.removeEventListener('keydown', onKey);
        return;
      }
      if (e.key === 'Escape') closePhotoViewer();
      if (e.key === 'ArrowLeft' && images.length > 1) {
        idx = (idx - 1 + images.length) % images.length;
        paint();
      }
      if (e.key === 'ArrowRight' && images.length > 1) {
        idx = (idx + 1) % images.length;
        paint();
      }
    },
    true
  );
  document.body.appendChild(wrap);
  document.body.classList.add('photo-viewer-open');
}
function bindPhotoViewers(root) {
  root = root || document;
  root.querySelectorAll('[data-view-photos]').forEach(function (el) {
    el.onclick = function (e) {
      e.preventDefault();
      e.stopPropagation();
      var id = el.getAttribute('data-view-photos');
      var start = Number(el.getAttribute('data-view-index') || 0) || 0;
      var it =
        (state.items || []).find(function (x) {
          return x.id === id;
        }) || null;
      if (!it) {
        // allow raw image src list via data-view-src (edit previews)
        var raw = el.getAttribute('data-view-src');
        if (raw) openPhotoViewer([raw], 0, 'Photo');
        return;
      }
      openPhotoViewer(productImagesOf(it), start, it.name || 'Product');
    };
  });
}

/** Assign which products a managed user can access */
function openUserAccessModal(userId) {
  var u = (state.users || []).find(function (x) {
    return x.id === userId;
  });
  if (!u) {
    toast('User not found');
    return;
  }
  if (!Array.isArray(u.access)) u.access = [];
  var items = state.items || [];
  var checks =
    items
      .map(function (it) {
        var on = u.access.indexOf(it.id) !== -1;
        return (
          '<label class="access-check-row">' +
          '<input type="checkbox" data-access-item="' +
          esc(it.id) +
          '"' +
          (on ? ' checked' : '') +
          '>' +
          '<span><strong>' +
          esc(it.name || it.sku || it.id) +
          '</strong>' +
          (it.sku ? '<div class="access-check-meta">' + esc(it.sku) + (it.category ? ' · ' + esc(it.category) : '') + '</div>' : '') +
          '</span></label>'
        );
      })
      .join('') || '<p class="settings-empty">No products yet. Add products first.</p>';

  openModal(
    '<h2>Access · ' +
      esc(u.name || u.email || 'User') +
      '</h2>' +
      '<p style="margin:0 0 .35rem;color:var(--text-2);font-size:var(--fs-xs)">Tick products this user can view. Leave none ticked for no product access.</p>' +
      '<div class="access-check-list" id="m-access-list">' +
      checks +
      '</div>' +
      '<div class="settings-actions" style="margin-bottom:.55rem">' +
      '<button type="button" class="btn btn-sm" id="m-access-all">Select all</button>' +
      '<button type="button" class="btn btn-sm" id="m-access-none">Clear all</button>' +
      '</div>' +
      '<div class="modal-actions">' +
      '<button type="button" class="btn" id="m-cancel">Cancel</button>' +
      '<button type="button" class="btn btn-primary" id="m-access-save">Save access</button>' +
      '</div>',
    { wide: true }
  );

  var list = document.getElementById('m-access-list');
  document.getElementById('m-cancel').onclick = closeModal;
  var allBtn = document.getElementById('m-access-all');
  if (allBtn)
    allBtn.onclick = function () {
      if (!list) return;
      list.querySelectorAll('input[type=checkbox]').forEach(function (c) {
        c.checked = true;
      });
    };
  var noneBtn = document.getElementById('m-access-none');
  if (noneBtn)
    noneBtn.onclick = function () {
      if (!list) return;
      list.querySelectorAll('input[type=checkbox]').forEach(function (c) {
        c.checked = false;
      });
    };
  document.getElementById('m-access-save').onclick = function () {
    var selected = [];
    if (list) {
      list.querySelectorAll('input[data-access-item]:checked').forEach(function (c) {
        selected.push(c.getAttribute('data-access-item'));
      });
    }
    u.access = selected;
    log('User access updated', (u.name || u.email) + ' · ' + selected.length + ' product(s)');
    persist();
    closeModal();
    settingsOpenSection = 'manageusers';
    render();
    toast('Access saved · ' + selected.length + ' product(s)');
  };
}

function openShareModal(itemIds, label) {
  itemIds = itemIds || state.selectedItems.slice();
  if (!itemIds.length) {
    toast('Select at least one product');
    return;
  }
  openModal(
    '<h2>Create share link</h2>' +
      '<p style="margin:0 0 .65rem;color:var(--text-2);font-size:var(--fs-sm)">' +
      itemIds.length +
      ' product' +
      (itemIds.length === 1 ? '' : 's') +
      ' · always watermarked</p>' +
      '<div class="field"><label>Link name</label><input type="text" id="m-sh-name" placeholder="e.g. For Priya — wholesale" value="' +
      esc(label || '') +
      '"></div>' +
      '<div class="field"><label>Access</label><select id="m-sh-auth"><option value="password">Password</option><option value="otp">OTP</option><option value="none">Open</option></select></div>' +
      '<div class="field" id="m-sh-pass-wrap"><label>Password</label><input type="text" id="m-sh-password" value="demo123"></div>' +
      '<div class="field"><label>Expiry (days)</label><input type="number" id="m-sh-expiry" min="1" step="1" value="30"></div>' +
      '<p style="margin:0 0 .55rem;color:var(--text-3);font-size:var(--fs-xs)">Right-click disabled on the shared page. You can edit this link later from Share & Security.</p>' +
      '<div class="modal-actions"><button class="btn" id="m-cancel">Cancel</button><button class="btn btn-primary" id="m-save">' +
      icon('share', 16) +
      ' Generate link</button></div>',
    { wide: true }
  );
  var authSel = document.getElementById('m-sh-auth');
  var passWrap = document.getElementById('m-sh-pass-wrap');
  function syncAuth() {
    if (passWrap) passWrap.style.display = authSel.value === 'password' ? '' : 'none';
  }
  if (authSel) authSel.onchange = syncAuth;
  syncAuth();
  document.getElementById('m-cancel').onclick = closeModal;
  document.getElementById('m-save').onclick = function () {
    var authType = document.getElementById('m-sh-auth').value;
    var exp = Number(document.getElementById('m-sh-expiry').value);
    if (!exp || exp < 1) {
      toast('Enter expiry days (min 1)');
      return;
    }
    if (authType === 'password' && !(document.getElementById('m-sh-password').value || '').trim()) {
      toast('Set a password');
      return;
    }
    var link = buildShareLinkRecord({
      type: 'selection',
      itemIds: itemIds.slice(),
      label: (document.getElementById('m-sh-name').value || '').trim() || null,
      authType: authType,
      passwordValue: (document.getElementById('m-sh-password').value || '').trim(),
      expiresDays: exp,
    });
    state.shareLinks.unshift(link);
    state.selectedItems = [];
    log(
      'Share link created',
      itemIds.length +
        ' products · #' +
        link.token +
        ' · ' +
        authType +
        ' · watermark · expires ' +
        exp +
        'd' +
        (link.otpCode ? ' · OTP ' + link.otpCode : '')
    );
    persist();
    closeModal();
    render();
    var url = location.origin + location.pathname + '#share/' + link.token;
    if (navigator.clipboard) navigator.clipboard.writeText(url).catch(function () {});
    toast(link.otpCode ? 'Link copied · OTP ' + link.otpCode : 'Link created & copied');
  };
}

/** Edit an existing share link — same URL (token), update settings/products */
function openEditShareModal(linkId) {
  var link = (state.shareLinks || []).find(function (s) {
    return s.id === linkId;
  });
  if (!link) {
    toast('Share link not found');
    return;
  }
  var selected = {};
  (link.itemIds || []).forEach(function (id) {
    selected[id] = true;
  });
  var productChecks =
    (state.items || [])
      .map(function (it) {
        return (
          '<label class="access-check-row">' +
          '<input type="checkbox" data-edit-sh-item="' +
          esc(it.id) +
          '"' +
          (selected[it.id] ? ' checked' : '') +
          '>' +
          '<span><strong>' +
          esc(it.name || it.sku || it.id) +
          '</strong>' +
          (it.sku ? '<div class="access-check-meta">' + esc(it.sku) + '</div>' : '') +
          '</span></label>'
        );
      })
      .join('') || '<p class="settings-empty">No products yet.</p>';

  var auth = link.authType || (link.passwordValue ? 'password' : 'none');
  openModal(
    '<h2>Edit share link</h2>' +
      '<p style="margin:0 0 .55rem;color:var(--text-2);font-size:var(--fs-xs)">Token <strong>#' +
      esc(link.token) +
      '</strong> stays the same — the public URL does not change. Update name, access, expiry, products, or status.</p>' +
      '<div class="field"><label>Link name</label><input type="text" id="e-sh-name" value="' +
      esc(link.label || '') +
      '" placeholder="e.g. For Priya — wholesale"></div>' +
      '<div class="grid-form-2">' +
      '<div class="field"><label>Access</label><select id="e-sh-auth">' +
      '<option value="password"' +
      (auth === 'password' ? ' selected' : '') +
      '>Password</option>' +
      '<option value="otp"' +
      (auth === 'otp' ? ' selected' : '') +
      '>OTP</option>' +
      '<option value="none"' +
      (auth === 'none' ? ' selected' : '') +
      '>Open</option></select></div>' +
      '<div class="field"><label>Status</label><select id="e-sh-status">' +
      '<option value="active"' +
      (link.status !== 'revoked' ? ' selected' : '') +
      '>Active / Allowed</option>' +
      '<option value="revoked"' +
      (link.status === 'revoked' ? ' selected' : '') +
      '>Revoked</option></select></div>' +
      '<div class="field" id="e-sh-pass-wrap"><label>Password</label><input type="text" id="e-sh-password" value="' +
      esc(link.passwordValue || '') +
      '" placeholder="Share password"></div>' +
      '<div class="field"><label>Expiry (days)</label><input type="number" id="e-sh-expiry" min="1" step="1" value="' +
      esc(String(link.expiresDays != null && link.expiresDays !== '' ? link.expiresDays : 30)) +
      '"></div></div>' +
      (auth === 'otp' || link.otpCode
        ? '<p style="margin:0 0 .45rem;color:var(--text-3);font-size:var(--fs-xs)">Current OTP: <strong>' +
          esc(link.otpCode || '—') +
          '</strong></p>'
        : '') +
      '<label class="display-check" style="margin-bottom:.45rem"><input type="checkbox" id="e-sh-reset-timer"> Reset expiry timer from today</label>' +
      '<label class="display-check" style="margin-bottom:.55rem"><input type="checkbox" id="e-sh-new-otp"> Generate new OTP (if access is OTP)</label>' +
      '<div class="section-label">Products on this link</div>' +
      '<p style="margin:0 0 .35rem;color:var(--text-3);font-size:var(--fs-xs)">Tick products included. For catalogue links, products follow the catalogue; you can switch to a selection.</p>' +
      (link.type === 'catalogue'
        ? '<div class="field"><label>Share type</label><select id="e-sh-type">' +
          '<option value="catalogue" selected>Whole catalogue</option>' +
          '<option value="selection">Custom product selection</option></select></div>' +
          '<div class="field" id="e-sh-cat-wrap"><label>Catalogue</label><select id="e-sh-cat">' +
          (state.catalogues || [])
            .map(function (c) {
              return (
                '<option value="' +
                esc(c.id) +
                '"' +
                (c.id === link.catalogueId ? ' selected' : '') +
                '>' +
                esc(c.name) +
                '</option>'
              );
            })
            .join('') +
          '</select></div>'
        : '<input type="hidden" id="e-sh-type" value="selection">') +
      '<div class="access-check-list" id="e-sh-items">' +
      productChecks +
      '</div>' +
      '<div class="settings-actions" style="margin-bottom:.55rem">' +
      '<button type="button" class="btn btn-sm" id="e-sh-all">Select all</button>' +
      '<button type="button" class="btn btn-sm" id="e-sh-none">Clear all</button></div>' +
      '<div class="modal-actions">' +
      '<button type="button" class="btn" id="m-cancel">Cancel</button>' +
      '<button type="button" class="btn btn-primary" id="e-sh-save">Save changes</button></div>',
    { wide: true }
  );

  var authSel = document.getElementById('e-sh-auth');
  var passWrap = document.getElementById('e-sh-pass-wrap');
  function syncAuth() {
    if (passWrap) passWrap.style.display = authSel && authSel.value === 'password' ? '' : 'none';
  }
  if (authSel) authSel.onchange = syncAuth;
  syncAuth();

  var typeSel = document.getElementById('e-sh-type');
  var catWrap = document.getElementById('e-sh-cat-wrap');
  var itemsBox = document.getElementById('e-sh-items');
  function syncType() {
    var t = typeSel ? typeSel.value : 'selection';
    if (catWrap) catWrap.style.display = t === 'catalogue' ? '' : 'none';
    if (itemsBox) itemsBox.style.opacity = t === 'catalogue' ? '0.45' : '1';
  }
  if (typeSel) typeSel.onchange = syncType;
  syncType();

  var allBtn = document.getElementById('e-sh-all');
  if (allBtn)
    allBtn.onclick = function () {
      if (!itemsBox) return;
      itemsBox.querySelectorAll('input[type=checkbox]').forEach(function (c) {
        c.checked = true;
      });
    };
  var noneBtn = document.getElementById('e-sh-none');
  if (noneBtn)
    noneBtn.onclick = function () {
      if (!itemsBox) return;
      itemsBox.querySelectorAll('input[type=checkbox]').forEach(function (c) {
        c.checked = false;
      });
    };

  document.getElementById('m-cancel').onclick = closeModal;
  document.getElementById('e-sh-save').onclick = function () {
    var authType = (document.getElementById('e-sh-auth') && document.getElementById('e-sh-auth').value) || 'none';
    var exp = Number(document.getElementById('e-sh-expiry') && document.getElementById('e-sh-expiry').value);
    if (!exp || exp < 1) {
      toast('Enter expiry days (min 1)');
      return;
    }
    var pass = (document.getElementById('e-sh-password') && document.getElementById('e-sh-password').value) || '';
    if (authType === 'password' && !String(pass).trim()) {
      toast('Set a password');
      return;
    }
    var type = (document.getElementById('e-sh-type') && document.getElementById('e-sh-type').value) || link.type || 'selection';
    var ids = [];
    if (itemsBox) {
      itemsBox.querySelectorAll('input[data-edit-sh-item]:checked').forEach(function (c) {
        ids.push(c.getAttribute('data-edit-sh-item'));
      });
    }
    if (type === 'selection' && !ids.length) {
      toast('Select at least one product');
      return;
    }
    var prev =
      (link.label || link.type) +
      ' · ' +
      (link.authType || 'none') +
      ' · ' +
      (link.status || 'active') +
      ' · ' +
      (link.expiresDays || '—') +
      'd';
    link.label = (document.getElementById('e-sh-name') && document.getElementById('e-sh-name').value.trim()) || null;
    link.authType = authType;
    link.passwordValue = authType === 'password' ? String(pass).trim() : null;
    link.expiresDays = exp;
    link.status = (document.getElementById('e-sh-status') && document.getElementById('e-sh-status').value) || 'active';
    link.watermark = true;
    link.type = type;
    if (type === 'catalogue') {
      link.catalogueId =
        (document.getElementById('e-sh-cat') && document.getElementById('e-sh-cat').value) || link.catalogueId;
      // keep itemIds as optional snapshot; public view uses catalogue
    } else {
      link.itemIds = ids;
      link.catalogueId = null;
      if (ids.length === 1) {
        var one = (state.items || []).find(function (x) {
          return x.id === ids[0];
        });
        if (one && one.sku) link.sku = one.sku;
      }
    }
    if (document.getElementById('e-sh-reset-timer') && document.getElementById('e-sh-reset-timer').checked) {
      link.createdAt = Date.now();
    }
    var wantNewOtp =
      document.getElementById('e-sh-new-otp') && document.getElementById('e-sh-new-otp').checked;
    if (authType === 'otp') {
      if (wantNewOtp || !link.otpCode) {
        link.otpCode = String(Math.floor(100000 + Math.random() * 900000));
      }
    } else {
      link.otpCode = null;
    }
    log(
      'Share link updated',
      '#' +
        link.token +
        ' · ' +
        prev +
        ' → ' +
        (link.label || link.type) +
        ' · ' +
        authType +
        ' · ' +
        link.status +
        ' · ' +
        exp +
        'd' +
        (type === 'selection' ? ' · ' + ids.length + ' products' : ' · catalogue') +
        (link.otpCode ? ' · OTP ' + link.otpCode : '')
    );
    persist();
    closeModal();
    render();
    toast(
      link.otpCode && wantNewOtp
        ? 'Link saved · new OTP ' + link.otpCode
        : 'Share link updated'
    );
  };
}

function itemModal(existing) {
  var isEdit = !!existing;
  var e = isEdit ? normalizeItem(existing) : null;
  var eSafe = e || {};
  var catOptions = state.catalogues
    .map(function (c) {
      return (
        '<option value="' +
        c.id +
        '" ' +
        (isEdit && eSafe.catalogueId === c.id ? 'selected' : '') +
        '>' +
        esc(c.name) +
        '</option>'
      );
    })
    .join('');
  var allSpecs = eSafe.specs || [];
  var manualOnly = manualSpecsFromProduct(allSpecs);
  var workingImages = (eSafe.images && eSafe.images.length ? eSafe.images.slice() : eSafe.image ? [eSafe.image] : []).slice();
  var removedPhotos = {};
  openModal(
    '<h2>' +
      (isEdit ? 'Edit product' : 'New product') +
      '</h2>' +
      '<p style="margin:-.35rem 0 .85rem;color:var(--text-2);font-size:var(--fs-xs)">Only global specifications, manual specifications, and photos.</p>' +
      '<div class="field"><label>Catalogue</label><select id="m-it-cat">' +
      catOptions +
      '</select></div>' +
      '<div class="field"><label>Product name</label><input type="text" id="m-it-name" value="' +
      esc(val(eSafe.name)) +
      '"></div>' +
      '<div class="section-label">1 · Global specifications</div>' +
      globalSpecsFieldsHtml(allSpecs) +
      '<div class="section-label">2 · Manual specifications</div>' +
      specsEditorHtml(manualOnly, {
        editorId: 'manual-specs-editor',
        addId: 'manual-spec-add',
        addLabel: 'Add manual specification',
        allowEmpty: true,
        manual: true,
        hint: 'Type any heading and option freely — not from a list.',
      }) +
      '<div class="section-label">3 · Photos</div>' +
      productPhotosHtml(workingImages) +
      '<div class="modal-actions"><button class="btn" id="m-cancel">Cancel</button><button class="btn btn-primary" id="m-save">Save product</button></div>',
    { wide: true }
  );
  bindListAndSpecsEditors();
  bindPhotoUpload(workingImages, removedPhotos);
  document.getElementById('m-cancel').onclick = closeModal;
  document.getElementById('m-save').onclick = function () {
    var name = document.getElementById('m-it-name').value.trim();
    if (!name) {
      toast('Name required');
      return;
    }
    var specs = readAllProductSpecs();
    var kept = workingImages.filter(function (_, i) {
      return !removedPhotos[i];
    });
    var fileInput = document.getElementById('prod-photos');
    var finish = function (newImages) {
      var images = kept.concat(newImages || []);
      var data = {
        catalogueId: document.getElementById('m-it-cat').value,
        name: name,
        specs: specs,
        images: images,
        image: images[0] || '',
      };
      if (isEdit) {
        Object.assign(existing, data);
        normalizeItem(existing);
        log('Product edited', data.name + ' · ' + specs.length + ' specs · ' + images.length + ' photo(s)');
      } else {
        state.items.push(
          normalizeItem(
            Object.assign({ id: uid('i') }, data)
          )
        );
        log('Product added', data.name + ' · ' + specs.length + ' specs · ' + images.length + ' photo(s)');
      }
      persist();
      closeModal();
      render();
      toast('Saved');
    };
    readFilesAsDataUrls(fileInput && fileInput.files, finish);
  };
}
function readFilesAsDataUrls(fileList, done) {
  if (!fileList || !fileList.length) {
    done([]);
    return;
  }
  var files = Array.prototype.slice.call(fileList);
  var out = [];
  var i = 0;
  function next() {
    if (i >= files.length) {
      done(out);
      return;
    }
    var reader = new FileReader();
    reader.onload = function (ev) {
      out.push(ev.target.result);
      i++;
      next();
    };
    reader.onerror = function () {
      i++;
      next();
    };
    reader.readAsDataURL(files[i]);
  }
  next();
}
function bindPhotoUpload(workingImages, removedPhotos) {
  workingImages = workingImages || [];
  removedPhotos = removedPhotos || {};
  function refreshPreview() {
    var box = document.getElementById('photo-preview-list');
    if (!box) return;
    var kept = workingImages
      .map(function (src, i) {
        return { src: src, i: i };
      })
      .filter(function (x) {
        return !removedPhotos[x.i];
      });
    var allSrc = kept.map(function (x) {
      return x.src;
    });
    box.innerHTML = kept.length
      ? kept
          .map(function (x, ki) {
            return (
              '<div class="photo-thumb" data-photo-i="' +
              x.i +
              '">' +
              '<button type="button" class="photo-thumb-open" data-view-src="' +
              esc(x.src) +
              '" data-view-gallery="' +
              esc(JSON.stringify(allSrc)) +
              '" data-view-index="' +
              ki +
              '" title="Tap to view">' +
              '<img src="' +
              esc(x.src) +
              '" alt="Photo" draggable="false">' +
              '</button>' +
              '<button type="button" class="icon-btn photo-remove" data-photo-remove="' +
              x.i +
              '" title="Remove">' +
              icon('x', 12) +
              '</button></div>'
            );
          })
          .join('')
      : '<p class="settings-empty">No photos yet.</p>';
    box.querySelectorAll('[data-photo-remove]').forEach(function (btn) {
      btn.onclick = function (e) {
        e.stopPropagation();
        removedPhotos[Number(btn.getAttribute('data-photo-remove'))] = true;
        refreshPreview();
      };
    });
    box.querySelectorAll('[data-view-gallery]').forEach(function (btn) {
      btn.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        var list = [];
        try {
          list = JSON.parse(btn.getAttribute('data-view-gallery') || '[]');
        } catch (err) {
          list = [btn.getAttribute('data-view-src')];
        }
        var start = Number(btn.getAttribute('data-view-index') || 0) || 0;
        openPhotoViewer(list, start, 'Photos');
      };
    });
  }
  refreshPreview();
}

/* ---------- Bindings ---------- */
function bindShell() {
  document.querySelectorAll('[data-nav]').forEach(function (el) {
    el.onclick = function () {
      state.view = el.getAttribute('data-nav');
      setMenuOpen(false);
      render();
    };
  });
  bindThemeControls();
  var menuBtn = document.getElementById('menu-toggle');
  if (menuBtn)
    menuBtn.onclick = function (e) {
      e.preventDefault();
      e.stopPropagation();
      setMenuOpen(!menuOpen);
    };
  var menuClose = document.getElementById('menu-close');
  if (menuClose)
    menuClose.onclick = function (e) {
      e.preventDefault();
      setMenuOpen(false);
    };
  var backdrop = document.getElementById('nav-backdrop');
  if (backdrop)
    backdrop.onclick = function () {
      setMenuOpen(false);
    };
  var lo = document.getElementById('logout-btn');
  if (lo)
    lo.onclick = function () {
      state.session = null;
      setMenuOpen(false);
      persist();
      render();
    };
  var gs = document.getElementById('global-search');
  if (gs)
    gs.addEventListener('input', function (e) {
      state.browse.q = e.target.value;
      state.view = 'product';
      render();
      var v = document.getElementById('global-search');
      if (v) {
        v.focus();
        v.setSelectionRange(v.value.length, v.value.length);
      }
    });
  var ssb = document.getElementById('share-selected-btn');
  if (ssb) ssb.onclick = function () {
    openShareModal();
  };
}

function bindView() {
  if (state.view === 'interests') bindInterests();
  if (state.view === 'upload' && canEdit()) bindUpload();
  if (state.view === 'product') bindProduct();
  if (state.view === 'share') bindShare();
  if (state.view === 'settings' && isAdmin()) bindSettings();
  bindPhotoViewers(document);
}

function bindInterests() {
  document.querySelectorAll('[data-open-share]').forEach(function (el) {
    el.onclick = function () {
      location.hash = 'share/' + el.getAttribute('data-open-share');
      render();
    };
  });
  document.querySelectorAll('[data-mark-seen]').forEach(function (el) {
    el.onclick = function () {
      var id = el.getAttribute('data-mark-seen');
      (state.shareLinks || []).forEach(function (s) {
        (s.interests || []).forEach(function (i) {
          if (i.id === id) i.seen = true;
        });
      });
      persist();
      render();
    };
  });
}

function parseAvailableFlag(v) {
  if (v == null || v === '') return true;
  var s = String(v).trim().toLowerCase();
  if (s === '0' || s === 'no' || s === 'false' || s === 'n' || s === 'not available' || s === 'unavailable' || s === 'out')
    return false;
  if (s === '1' || s === 'yes' || s === 'true' || s === 'y' || s === 'available' || s === 'in stock') return true;
  var n = Number(s);
  if (!isNaN(n)) return n > 0;
  return true;
}

function bindUpload() {
  bindListAndSpecsEditors();
  var removedPhotos = {};
  bindPhotoUpload([], removedPhotos);
  document.getElementById('up-submit').onclick = function () {
    var name = document.getElementById('up-name').value.trim();
    if (!name) {
      toast('Enter a name');
      return;
    }
    var specs = readAllProductSpecs();
    var fileInput = document.getElementById('prod-photos');
    readFilesAsDataUrls(fileInput && fileInput.files, function (images) {
      var item = normalizeItem({
        id: uid('i'),
        catalogueId: document.getElementById('up-cat').value,
        name: name,
        specs: specs,
        images: images || [],
        image: (images && images[0]) || '',
      });
      state.items.push(item);
      log(
        'Product added',
        item.name + ' · ' + (item.specs || []).length + ' specs · ' + (item.images || []).length + ' photo(s)'
      );
      persist();
      render();
      toast('Product added');
    });
  };

  var dropZone = document.getElementById('drop-zone');
  var fileInput = document.getElementById('bulk-file');
  function handleCsv(file) {
    if (!window.Papa) {
      toast('CSV parser loading… try again');
      return;
    }
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (res) {
        var rows = res.data
          .map(function (r) {
            var specs = [];
            (state.globalSpecs || []).forEach(function (g) {
              var raw =
                r[g.key] != null
                  ? r[g.key]
                  : r[g.key.toLowerCase()] != null
                    ? r[g.key.toLowerCase()]
                    : '';
              // legacy aliases
              if (!raw && normKey(g.key) === 'colours')
                raw = r.colors || r.Colors || r.color || r.Color || '';
              if (!raw && normKey(g.key) === 'sizes') raw = r.sizes || r.Sizes || r.size || r.Size || '';
              if (!raw && normKey(g.key) === 'category') raw = r.category || r.Category || '';
              if (!raw && normKey(g.key) === 'fabric') raw = r.fabric || r.Fabric || '';
              if (!raw && normKey(g.key) === 'price') raw = r.price || r.Price || '';
              if (!raw && normKey(g.key) === 'sku') raw = r.sku || r.SKU || '';
              var vals = parseList(raw);
              if (vals.length) specs.push(makeSpec(g.key, vals));
            });
            return normalizeItem({
              name: r.name || r.Name || '',
              specs: specs,
              images: [],
              image: '',
            });
          })
          .filter(function (r) {
            return r.name;
          });
        document.getElementById('bulk-preview').innerHTML =
          '<p style="margin:.5rem 0;color:var(--text-2)">' +
          rows.length +
          ' rows ready</p>' +
          '<button class="btn btn-primary btn-block" id="bulk-confirm">Import ' +
          rows.length +
          ' products</button>';
        document.getElementById('bulk-confirm').onclick = function () {
          var catId = document.getElementById('bulk-cat').value;
          rows.forEach(function (r) {
            state.items.push(Object.assign({ id: uid('i'), catalogueId: catId, image: '' }, r));
          });
          log('Bulk upload', rows.length + ' items · ' + file.name);
          persist();
          render();
          toast(rows.length + ' products imported');
        };
      },
    });
  }
  fileInput.addEventListener('change', function () {
    if (fileInput.files[0]) handleCsv(fileInput.files[0]);
  });
  dropZone.addEventListener('dragover', function (e) {
    e.preventDefault();
    dropZone.classList.add('drag');
  });
  dropZone.addEventListener('dragleave', function () {
    dropZone.classList.remove('drag');
  });
  dropZone.addEventListener('drop', function (e) {
    e.preventDefault();
    dropZone.classList.remove('drag');
    if (e.dataTransfer.files[0]) handleCsv(e.dataTransfer.files[0]);
  });
}

function bindProduct() {
  ['q', 'category', 'color', 'size', 'avail', 'sort'].forEach(function (key) {
    var el = document.getElementById('b-' + key);
    if (!el) return;
    el.addEventListener(key === 'q' ? 'input' : 'change', function (e) {
      state.browse[key] = e.target.value;
      render();
      if (key === 'q') {
        var v = document.getElementById('b-q');
        if (v) {
          v.focus();
          v.setSelectionRange(v.value.length, v.value.length);
        }
      }
    });
  });
  var selAll = document.getElementById('select-all-filtered');
  if (selAll)
    selAll.onclick = function () {
      filterItems().forEach(function (it) {
        if (state.selectedItems.indexOf(it.id) === -1) state.selectedItems.push(it.id);
      });
      persist();
      render();
    };
  var clearSel = document.getElementById('clear-sel');
  if (clearSel)
    clearSel.onclick = function () {
      state.selectedItems = [];
      persist();
      render();
    };
  var shareInline = document.getElementById('share-selected-inline');
  if (shareInline)
    shareInline.onclick = function () {
      openShareModal();
    };
  document.querySelectorAll('[data-select-item]').forEach(function (el) {
    el.addEventListener('change', function () {
      var id = el.getAttribute('data-select-item');
      var idx = state.selectedItems.indexOf(id);
      if (idx > -1) state.selectedItems.splice(idx, 1);
      else state.selectedItems.push(id);
      persist();
      render();
    });
  });
  document.querySelectorAll('[data-edit-item]').forEach(function (el) {
    el.onclick = function () {
      itemModal(
        state.items.find(function (i) {
          return i.id === el.getAttribute('data-edit-item');
        })
      );
    };
  });
  document.querySelectorAll('[data-del-item]').forEach(function (el) {
    el.onclick = function () {
      var id = el.getAttribute('data-del-item');
      var it = state.items.find(function (x) {
        return x.id === id;
      });
      if (!confirm('Delete "' + it.name + '"?')) return;
      state.items = state.items.filter(function (x) {
        return x.id !== id;
      });
      state.selectedItems = state.selectedItems.filter(function (x) {
        return x !== id;
      });
      log('Product deleted', it.name + ' · SKU ' + (it.sku || '—') + ' · id ' + id);
      persist();
      render();
    };
  });
  document.querySelectorAll('[data-share-one]').forEach(function (el) {
    el.onclick = function () {
      openShareModal([el.getAttribute('data-share-one')]);
    };
  });
  var clear = document.getElementById('clear-sel');
  if (clear)
    clear.onclick = function () {
      state.selectedItems = [];
      render();
    };
  var shareInline = document.getElementById('share-selected-inline');
  if (shareInline) shareInline.onclick = function () {
    openShareModal();
  };
}

function renderSkuMatch() {
  var box = document.getElementById('qs-sku-match');
  if (!box) return null;
  var skuEl = document.getElementById('qs-sku');
  var sku = (skuEl && skuEl.value) || '';
  var it = findItemBySku(sku);
  if (!String(sku).trim()) {
    box.innerHTML = '<p class="settings-empty">Type a SKU ID to match a product.</p>';
    box.removeAttribute('data-item-id');
    return null;
  }
  if (!it) {
    box.innerHTML =
      '<p class="qs-sku-miss">No product found for SKU <strong>' + esc(String(sku).trim()) + '</strong>.</p>';
    box.removeAttribute('data-item-id');
    return null;
  }
  box.setAttribute('data-item-id', it.id);
  box.innerHTML =
    '<div class="qs-sku-hit">' +
    '<strong>' +
    esc(it.name) +
    '</strong>' +
    '<span class="meta">' +
    esc(it.sku || '—') +
    ' · ' +
    esc(it.category || '—') +
    ' · ₹' +
    (it.price != null ? it.price : '—') +
    ' · ' +
    (it.available === false ? 'Not available' : 'Available') +
    '</span></div>';
  return it;
}
function bindShare() {
  renderSkuMatch();
  var auth = document.getElementById('qs-auth');
  var passWrap = document.getElementById('qs-pass-wrap');
  function syncQsAuth() {
    if (!passWrap || !auth) return;
    passWrap.style.display = auth.value === 'password' ? '' : 'none';
  }
  if (auth) auth.onchange = syncQsAuth;
  syncQsAuth();

  var skuEl = document.getElementById('qs-sku');
  if (skuEl) {
    skuEl.oninput = function () {
      renderSkuMatch();
    };
    skuEl.onchange = function () {
      renderSkuMatch();
    };
    skuEl.onkeydown = function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        renderSkuMatch();
      }
    };
  }
  var lookup = document.getElementById('qs-lookup');
  if (lookup)
    lookup.onclick = function () {
      var it = renderSkuMatch();
      if (it) toast('Matched · ' + (it.sku || it.name));
      else toast('No product for that SKU');
    };

  document.querySelectorAll('[data-share-filter]').forEach(function (btn) {
    btn.onclick = function () {
      shareListFilter = btn.getAttribute('data-share-filter') || 'all';
      render();
    };
  });

  var create = document.getElementById('qs-create');
  if (create)
    create.onclick = function () {
      var sku = (document.getElementById('qs-sku') && document.getElementById('qs-sku').value) || '';
      if (!String(sku).trim()) {
        toast('Enter a SKU ID');
        return;
      }
      var it = findItemBySku(sku);
      if (!it) {
        toast('No product found for that SKU');
        renderSkuMatch();
        return;
      }
      var authType = (document.getElementById('qs-auth') && document.getElementById('qs-auth').value) || 'password';
      var exp = Number(document.getElementById('qs-expiry') && document.getElementById('qs-expiry').value);
      if (!exp || exp < 1) {
        toast('Enter expiry days (min 1)');
        return;
      }
      var pass = (document.getElementById('qs-password') && document.getElementById('qs-password').value) || '';
      if (authType === 'password' && !pass.trim()) {
        toast('Set a password');
        return;
      }
      var labelInput = document.getElementById('qs-label');
      var label =
        (labelInput && labelInput.value.trim()) ||
        (it.sku ? 'SKU ' + it.sku : null) ||
        it.name ||
        null;
      var link = buildShareLinkRecord({
        type: 'selection',
        itemIds: [it.id],
        label: label,
        authType: authType,
        passwordValue: pass.trim(),
        expiresDays: exp,
      });
      link.sku = it.sku || '';
      state.shareLinks.unshift(link);
      shareListFilter = 'active';
      log(
        'Share link created',
        'SKU ' +
          (it.sku || '—') +
          ' · #' +
          link.token +
          ' · ' +
          authType +
          ' · watermark · expires ' +
          exp +
          'd' +
          (link.otpCode ? ' · OTP ' + link.otpCode : '')
      );
      persist();
      render();
      var url = location.origin + location.pathname + '#share/' + link.token;
      if (navigator.clipboard) navigator.clipboard.writeText(url).catch(function () {});
      toast(link.otpCode ? 'Link created · OTP ' + link.otpCode : 'Link created & copied');
    };

  document.querySelectorAll('[data-copy-link]').forEach(function (el) {
    el.onclick = function () {
      var token = el.getAttribute('data-copy-link');
      var url = location.origin + location.pathname + '#share/' + token;
      if (navigator.clipboard) navigator.clipboard.writeText(url).catch(function () {});
      log('Share link copied', '#' + token);
      persist();
      toast('Link copied');
    };
  });
  document.querySelectorAll('[data-open-share]').forEach(function (el) {
    el.onclick = function () {
      var token = el.getAttribute('data-open-share');
      log('Share link opened from portal', '#' + token);
      persist();
      location.hash = 'share/' + token;
      render();
    };
  });
  document.querySelectorAll('[data-edit-share]').forEach(function (el) {
    el.onclick = function () {
      openEditShareModal(el.getAttribute('data-edit-share'));
    };
  });
  document.querySelectorAll('[data-revoke-link]').forEach(function (el) {
    el.onclick = function () {
      var id = el.getAttribute('data-revoke-link');
      var link = state.shareLinks.find(function (s) {
        return s.id === id;
      });
      if (!confirm('Revoke this link?')) return;
      if (link) {
        link.status = 'revoked';
        log('Share link revoked', '#' + link.token + ' · ' + (link.label || link.type));
      }
      persist();
      render();
      toast('Link revoked');
    };
  });
  document.querySelectorAll('[data-allow-link]').forEach(function (el) {
    el.onclick = function () {
      var id = el.getAttribute('data-allow-link');
      var link = state.shareLinks.find(function (s) {
        return s.id === id;
      });
      if (!link) return;
      link.status = 'active';
      if (isTimeExpired(link)) {
        link.createdAt = Date.now();
        if (!link.expiresDays || link.expiresDays < 1) link.expiresDays = 30;
      }
      log('Share link allowed', '#' + link.token + ' · ' + (link.label || link.type));
      persist();
      render();
      toast('Link allowed again');
    };
  });
}

function bindSettings() {
  // accordion: only one open at a time; all closed by default
  document.querySelectorAll('[data-acc-toggle]').forEach(function (btn) {
    btn.onclick = function () {
      var id = btn.getAttribute('data-acc-toggle');
      settingsOpenSection = settingsOpenSection === id ? null : id;
      render();
    };
  });

  // 6 product display
  var pdSave = document.getElementById('pd-save');
  if (pdSave)
    pdSave.onclick = function () {
      var d = defaultProductDisplay();
      document.querySelectorAll('[data-pd]').forEach(function (c) {
        var k = c.getAttribute('data-pd');
        if (k) d[k] = !!c.checked;
      });
      state.productDisplay = d;
      log('Product display updated', Object.keys(d)
        .filter(function (k) {
          return d[k];
        })
        .join(', '));
      persist();
      settingsOpenSection = 'display';
      render();
      toast('Display options saved');
    };

  // 1 admin profile — login ID + password used on the portal gate
  var pfSave = document.getElementById('pf-save');
  if (pfSave)
    pfSave.onclick = function () {
      if (!state.profile) state.profile = {};
      var name = (document.getElementById('pf-name').value || '').trim();
      var email = (document.getElementById('pf-email').value || '').trim();
      var phone = (document.getElementById('pf-phone').value || '').trim();
      var password = document.getElementById('pf-password')
        ? String(document.getElementById('pf-password').value || '')
        : '';
      if (!email) {
        toast('Login ID / email is required');
        return;
      }
      if (!password) {
        toast('Password is required for login');
        return;
      }
      var prevEmail = state.profile.email || '';
      state.profile.name = name || 'Admin';
      state.profile.email = email;
      state.profile.phone = phone;
      state.profile.password = password;
      if (state.session && (state.session.role === 'admin' || state.session.role === 'developer')) {
        state.session.name = state.profile.name;
        state.session.email = state.profile.email;
        state.session.portalLabel = state.profile.name;
      }
      log(
        'Admin credentials updated',
        state.profile.name +
          ' · login ' +
          state.profile.email +
          (prevEmail && normalizeLoginId(prevEmail) !== normalizeLoginId(email)
            ? ' (was ' + prevEmail + ')'
            : '') +
          ' · password set'
      );
      persist();
      settingsOpenSection = 'admin';
      render();
      toast('Login credentials saved — use them next sign-in');
    };

  // 2 business profile
  var clearBizLogo = false;
  var bpLogoClear = document.getElementById('bp-logo-clear');
  if (bpLogoClear)
    bpLogoClear.onclick = function () {
      clearBizLogo = true;
      toast('Logo will be removed on save');
    };
  var bpSave = document.getElementById('bp-save');
  if (bpSave)
    bpSave.onclick = function () {
      if (!state.profile) state.profile = {};
      state.profile.company = (document.getElementById('bp-company').value || '').trim();
      state.profile.brandName = (document.getElementById('bp-brand').value || '').trim();
      if (clearBizLogo) state.profile.companyLogo = '';
      var finish = function () {
        log(
          'Business profile updated',
          (state.profile.company || '—') +
            ' · brand ' +
            (state.profile.brandName || '—') +
            (state.profile.companyLogo ? ' · logo set' : ' · no logo')
        );
        persist();
        settingsOpenSection = 'business';
        render();
        toast('Business profile saved');
      };
      var fileInput = document.getElementById('bp-logo');
      if (fileInput && fileInput.files && fileInput.files[0] && !clearBizLogo) {
        var reader = new FileReader();
        reader.onload = function (ev) {
          state.profile.companyLogo = ev.target.result;
          finish();
        };
        reader.readAsDataURL(fileInput.files[0]);
      } else {
        finish();
      }
    };

  // 3 add user
  var uCreate = document.getElementById('u-create');
  if (uCreate)
    uCreate.onclick = function () {
      var name = document.getElementById('u-name').value.trim();
      var email = document.getElementById('u-email').value.trim();
      var phone = (document.getElementById('u-phone') && document.getElementById('u-phone').value.trim()) || '';
      var pass = (document.getElementById('u-pass') && document.getElementById('u-pass').value.trim()) || '';
      if (!name || !email) {
        toast('Name and email required');
        return;
      }
      state.users.push({
        id: uid('u'),
        name: name,
        email: email,
        phone: phone,
        role: 'user',
        password: pass,
        status: 'active',
        access: [],
        createdAt: Date.now(),
      });
      log('User created', name + ' · ' + email + (phone ? ' · ' + phone : ''));
      persist();
      settingsOpenSection = 'manageusers';
      render();
      toast('User added');
    };

  // 4 manage users — same fields as Add users + Save / Access / Delete
  document.querySelectorAll('[data-u-save]').forEach(function (btn) {
    btn.onclick = function () {
      var id = btn.getAttribute('data-u-save');
      var u = state.users.find(function (x) {
        return x.id === id;
      });
      if (!u) return;
      var name = String((document.querySelector('[data-u-name="' + id + '"]') || {}).value || '').trim();
      var email = String((document.querySelector('[data-u-email="' + id + '"]') || {}).value || '').trim();
      var phone = String((document.querySelector('[data-u-phone="' + id + '"]') || {}).value || '').trim();
      var pass = String((document.querySelector('[data-u-pass="' + id + '"]') || {}).value || '').trim();
      if (!name || !email) {
        toast('Name and email required');
        return;
      }
      var prev = u.name + ' / ' + u.email;
      u.name = name;
      u.email = email;
      u.phone = phone;
      u.password = pass;
      u.role = 'user';
      if (!u.status) u.status = 'active';
      if (!Array.isArray(u.access)) u.access = [];
      log('User updated', prev + ' → ' + name + ' / ' + email);
      persist();
      settingsOpenSection = 'manageusers';
      render();
      toast('User saved');
    };
  });
  document.querySelectorAll('[data-u-access]').forEach(function (btn) {
    btn.onclick = function () {
      settingsOpenSection = 'manageusers';
      openUserAccessModal(btn.getAttribute('data-u-access'));
    };
  });
  document.querySelectorAll('[data-u-del]').forEach(function (btn) {
    btn.onclick = function () {
      var id = btn.getAttribute('data-u-del');
      var u = state.users.find(function (x) {
        return x.id === id;
      });
      if (!u || !confirm('Delete user “' + u.name + '”?')) return;
      state.users = state.users.filter(function (x) {
        return x.id !== id;
      });
      log('User deleted', u.name + ' · ' + u.email);
      persist();
      settingsOpenSection = 'manageusers';
      render();
      toast('User deleted');
    };
  });

  // 5 global headings + options
  function selectHeading(id) {
    if (!id || id === selectedGlobalSpecId) return;
    selectedGlobalSpecId = id;
    settingsOpenSection = 'globalspecs';
    log('Global heading selected', (getGlobalSpecById(selectedGlobalSpecId) || {}).key || selectedGlobalSpecId);
    persist();
    render();
  }
  document.querySelectorAll('[data-gs-select-btn]').forEach(function (btn) {
    btn.onclick = function (e) {
      e.stopPropagation();
      selectHeading(btn.getAttribute('data-gs-select-btn'));
    };
  });
  document.querySelectorAll('[data-gs-select]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      if (e.target.closest('[data-gs-opt-del], .gs-drag-handle, [data-gs-select-btn]')) return;
      selectHeading(el.getAttribute('data-gs-select'));
    });
  });

  function reorderList(arr, from, to) {
    if (from === to || from < 0 || to < 0 || from >= arr.length || to >= arr.length) return false;
    var item = arr.splice(from, 1)[0];
    arr.splice(to, 0, item);
    return true;
  }
  function bindGsDragList(container, type) {
    if (!container) return;
    var dragFrom = null;
    container.querySelectorAll('[data-gs-drag="' + type + '"]').forEach(function (el) {
      el.addEventListener('dragstart', function (e) {
        dragFrom = Number(el.getAttribute('data-gs-index'));
        el.classList.add('gs-dragging');
        try {
          e.dataTransfer.effectAllowed = 'move';
          e.dataTransfer.setData('text/plain', String(dragFrom));
        } catch (err) {}
      });
      el.addEventListener('dragend', function () {
        el.classList.remove('gs-dragging');
        container.querySelectorAll('.gs-drag-over').forEach(function (n) {
          n.classList.remove('gs-drag-over');
        });
        dragFrom = null;
      });
      el.addEventListener('dragover', function (e) {
        e.preventDefault();
        try {
          e.dataTransfer.dropEffect = 'move';
        } catch (err) {}
        if (!el.classList.contains('gs-dragging')) el.classList.add('gs-drag-over');
      });
      el.addEventListener('dragleave', function () {
        el.classList.remove('gs-drag-over');
      });
      el.addEventListener('drop', function (e) {
        e.preventDefault();
        el.classList.remove('gs-drag-over');
        var to = Number(el.getAttribute('data-gs-index'));
        var from = dragFrom;
        if (from == null || isNaN(from) || isNaN(to)) return;
        if (type === 'heading') {
          if (reorderList(state.globalSpecs, from, to)) {
            log('Global headings reordered', 'moved #' + (from + 1) + ' → #' + (to + 1));
            settingsOpenSection = 'globalspecs';
            persist();
            render();
          }
        } else if (type === 'option') {
          var g = getGlobalSpecById(selectedGlobalSpecId);
          if (!g || !Array.isArray(g.options)) return;
          if (reorderList(g.options, from, to)) {
            log('Global options reordered', g.key + ' · moved #' + (from + 1) + ' → #' + (to + 1));
            settingsOpenSection = 'globalspecs';
            persist();
            render();
          }
        }
      });
    });
  }
  bindGsDragList(document.getElementById('gs-heading-list'), 'heading');
  bindGsDragList(document.getElementById('gs-options-list'), 'option');

  var propsSave = document.getElementById('gs-heading-props-save');
  if (propsSave)
    propsSave.onclick = function () {
      var g = getGlobalSpecById(selectedGlobalSpecId);
      if (!g) return;
      var multiEl = document.getElementById('gs-heading-multi');
      g.multi = !!(multiEl && multiEl.checked);
      delete g.valueType;
      delete g.type;
      log('Heading settings saved', g.key + ' · ' + (g.multi ? 'multi' : 'single'));
      settingsOpenSection = 'globalspecs';
      persist();
      render();
      toast('Multi-select saved');
    };
  var hAdd = document.getElementById('gs-heading-add');
  if (hAdd)
    hAdd.onclick = function () {
      var name = (document.getElementById('gs-heading-new') && document.getElementById('gs-heading-new').value.trim()) || '';
      if (!name) {
        toast('Enter a heading name');
        return;
      }
      if (getGlobalSpecByKey(name)) {
        toast('Heading already exists');
        return;
      }
      var g = { id: uid('gs'), key: name, options: [], multi: false };
      state.globalSpecs.push(g);
      selectedGlobalSpecId = g.id;
      log('Global heading added', name);
      settingsOpenSection = 'globalspecs';
      persist();
      render();
      toast('Heading added');
    };
  var hDel = document.getElementById('gs-heading-del');
  if (hDel)
    hDel.onclick = function () {
      var g = getGlobalSpecById(selectedGlobalSpecId);
      if (!g || !confirm('Delete heading “' + g.key + '” and all its options?')) return;
      state.globalSpecs = state.globalSpecs.filter(function (x) {
        return x.id !== g.id;
      });
      selectedGlobalSpecId = state.globalSpecs[0] ? state.globalSpecs[0].id : null;
      log('Global heading deleted', g.key);
      settingsOpenSection = 'globalspecs';
      persist();
      render();
      toast('Heading deleted');
    };
  var oAdd = document.getElementById('gs-option-add');
  if (oAdd)
    oAdd.onclick = function () {
      var g = getGlobalSpecById(selectedGlobalSpecId);
      if (!g) return;
      var name = (document.getElementById('gs-option-new') && document.getElementById('gs-option-new').value.trim()) || '';
      if (!name) {
        toast('Enter an option');
        return;
      }
      if (!g.options) g.options = [];
      if (g.options.indexOf(name) > -1) {
        toast('Option already exists');
        return;
      }
      g.options.push(name);
      if (normKey(g.key) === 'category') ensureCategory(name);
      log('Global option added', g.key + ' · ' + name);
      settingsOpenSection = 'globalspecs';
      persist();
      render();
      toast('Option added');
    };
  document.querySelectorAll('[data-gs-opt-del]').forEach(function (btn) {
    btn.onclick = function (e) {
      e.stopPropagation();
      var g = getGlobalSpecById(selectedGlobalSpecId);
      if (!g) return;
      var idx = Number(btn.getAttribute('data-gs-opt-del'));
      var removed = (g.options || [])[idx];
      g.options = (g.options || []).filter(function (_, i) {
        return i !== idx;
      });
      if (normKey(g.key) === 'category' && removed) {
        state.categories = (state.categories || []).filter(function (c) {
          return c !== removed;
        });
      }
      log('Global option removed', g.key + ' · ' + (removed || ''));
      settingsOpenSection = 'globalspecs';
      persist();
      render();
    };
  });
}

window.addEventListener('hashchange', function () {
  setMenuOpen(false);
  render();
});
window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && menuOpen) setMenuOpen(false);
});
window.addEventListener('resize', function () {
  if (window.innerWidth > 900 && menuOpen) setMenuOpen(false);
});
if (window.matchMedia) {
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  var onScheme = function () {
    if (state && state.theme === 'system') {
      applyTheme('system', { skipPersist: true });
      render();
    }
  };
  if (mq.addEventListener) mq.addEventListener('change', onScheme);
  else if (mq.addListener) mq.addListener(onScheme);
}

// Early paint: apply stored theme before state loads so flash is correct
(function earlyTheme() {
  try {
    var t = localStorage.getItem(THEME_KEY) || 'system';
    var resolved = t === 'dark' || (t === 'system' && systemPrefersDark()) ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', resolved);
    document.documentElement.setAttribute('data-theme-pref', t);
    document.documentElement.style.colorScheme = resolved;
  } catch (e) {}
})();

loadState().then(function () {
  try {
    var t = localStorage.getItem(THEME_KEY);
    if (t === 'system' || t === 'light' || t === 'dark') state.theme = t;
  } catch (e) {}
  // migrate old sessions to show profile name top-right
  if (state.session && (state.session.role === 'admin' || state.session.role === 'developer')) {
    if (state.session.role === 'developer') state.session.role = 'admin';
    if (state.profile && state.profile.name) {
      state.session.name = state.profile.name;
      state.session.portalLabel = state.profile.name;
      if (state.profile.email) state.session.email = state.profile.email;
    } else {
      state.session.name = state.session.name || 'Admin';
      state.session.portalLabel = 'Admin';
    }
  }
  applyTheme(state.theme, { skipPersist: false });
  render();
});
