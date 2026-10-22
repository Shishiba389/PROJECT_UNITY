// Raw brand labels supplied for the A.N.T interface mockup.
const brandNames = [
  'JONE', 'SKINHOUSE', 'SHANGPREE', 'REALBARRIER', 'MEDIHEAL', 'COXIR',
  'MOMSBATHRECIPE', 'BANILA', 'ITSSKIN', 'SKIN79', 'ENATURE', 'CHASINRABBITS',
  'DIXIONIST', 'BRÄNDITA', 'STAY_WELL', 'MISSHA', 'DRAN', 'DRORACLE', 'TCFS',
  'LAMUSE', 'LETMESKIN', 'MDOC', 'LISSEDERM', 'WHEN', 'SKINLOVERS',
  'somebymi', 'SKINLITE', 'SHILLS', 'VINOIR', 'SKINFOOD', 'ATOPALM',
  'A´PIEU', 'HOLIKA', 'LEADERS', 'VEGANGLOW', 'DERMA-B', 'MIZON', 'DERMAL',
  'BIOSYNEXT', 'LANEIGE', 'EYENLIP', 'DUFT&DOFT', 'STAY_SAFE', 'DRMEDI',
  'HEMIRUS', 'MAYERI', 'STAY_NATURAL', 'WHITE_LABEL', 'BEAUTYOFJOSEON',
  'ZEROID', 'COSRX', 'MAKEHEAL', 'MOART', 'BBIA', 'PERIPERA', 'ABOUTTONE',
  'KÄSITÖÖ', 'PETAMEDIA', 'VGLOVE', 'LEELOOP', 'BCL', 'PURABLE', 'LUQUE',
  'TIRTIR', 'BIODANCE', 'GLOWSTATION', 'MEDICUBE', 'PUREDERM', 'GOODAL',
  'NEWGENE', 'MAJESTA', 'SHUREI', 'CAMED', 'NUP', 'ABIB', 'ANILLO', 'AMUSE',
  'ANUA', 'APLB', 'APRILSKIN', 'ARENCIA', 'AROMATIC89', 'AROMATICA', 'AVIF',
  'AXIS-Y', 'AYUNCHE', 'BEBARE', 'THESAEM', 'BODDYS', 'BALLONBLANC',
  'BLACKROUGE', 'BIOHEALBOH', 'BOSON', 'BARULAB', 'BRMUD', 'BRINGGREEN',
  'BEAUSTA', 'COCOON', 'CELLFUSION', 'CLIO', 'COMMON_LABS', 'CELIMAX',
  'CP-1', 'COLORGRAM', 'CENTELLIAN24', 'DRFORHAIR', 'DAENGGIMEORI',
  'KLAIRS', 'DALBA', 'Dr.Melaxin', 'DRALTHEA', 'DEARDAHLIA', 'DRJART',
  'DRNINETEEN', 'DERMATORY', 'DEWYTREE', 'EDO', 'ETUDEHOUSE', 'EUNYUL',
  'ESPOIR', 'EQQUALBERRY', 'ESFOLIO', '8THETHALASSO', 'FILFLO', 'FARMSKIN',
  'FARMSTAY', 'FRUDIA', 'FRAIJOUR', 'FORTHESKIN', 'FWEE', 'GENABELLE',
  'HEIMISH', 'ANDHONEY', 'HOUSEOFHUR', 'HARUHARU', 'hwarang', 'IDEWCARE',
  'imfrom', 'ILLIYOON', 'ILSO', 'IMMEME', 'INNISFREE', 'INOPHARM', 'ISNTREE',
  'IUNIK', 'Jcprogram', 'JUDYDOLL', 'JIGOTT', 'J-IN_KONJAC', 'KAJA',
  'KSECRET', 'KIERO', 'KJM', 'DRREJU', 'NUMBUZIN', 'KEYTH', 'LAKA',
  'lookatme', 'LADOR', 'LITTLECIRKUS', 'Madeca21', 'MIDHA', 'MEDI-PEEL',
  'MENOKIN', 'MAMONDE', 'MARYMAY', 'MANYO', 'ROSEHEART', 'MERZY', 'MIXSOON',
  'NACIFIC', 'NATUREREPUBLIK', 'NEEDLY', 'NATUREREPUBLIC', 'NEOGEN',
  'NINELESS', 'NATURAL_MOONY', 'NOONI', 'THEORDINARY', 'ONE-DAY´S_YOU',
  'ONGREDIENTS', 'OTTIE', 'PUPPYCRUSH', 'PODL', 'PYUNKANGYUL', 'MAKE_PREM',
  'PURITO', 'QA', 'ROUNDLAB', 'ROMAND', 'REVOLUTION', 'ROVECTIN', 'RYO',
  'SKIN1004', 'Seoulected', 'SMILEBLOOM', 'SUNGBOONEDITOR', 'TOCOBO'
];

// Display changes are conservative. Original spellings remain searchable.
const brandDisplayOverrides = {
  JONE: 'J.ONE',
  FARMSKIN: 'FARM SKIN', BALLONBLANC: 'BALLON BLANC',
  Jcprogram: 'JC PROGRAM',
  SKINHOUSE: 'THE SKIN HOUSE', REALBARRIER: 'REAL BARRIER',
  CHASINRABBITS: "CHASIN' RABBITS", ITSSKIN: "IT'S SKIN",
  MOMSBATHRECIPE: "MOM'S BATH RECIPE", BEAUTYOFJOSEON: 'BEAUTY OF JOSEON',
  somebymi: 'SOME BY MI', imfrom: "I'M FROM", HOUSEOFHUR: 'HOUSE OF HUR',
  THESAEM: 'THE SAEM', 'Dr.Melaxin': 'DR. MELAXIN',
  NATUREREPUBLIK: 'NATURE REPUBLIC', NATUREREPUBLIC: 'NATURE REPUBLIC',
  'ONE-DAY´S_YOU': "ONE DAY'S YOU", AROMATIC89: 'AROMATIC 89',
  '8THETHALASSO': '8 THE THALASSO', NATURAL_MOONY: 'NATURAL MOONY',
  ROUNDLAB: 'ROUND LAB', BIOHEALBOH: 'BIOHEAL BOH',
  DEARDAHLIA: 'DEAR DAHLIA', THEORDINARY: 'THE ORDINARY',
  lookatme: 'LOOK AT ME', 'A´PIEU': "A'PIEU"
};

const brandLogoFiles = {
  ...distributorBrandLogoFiles,
  ...popularBrandLogoFiles,
  ...communityBrandLogoFiles,
  SHANGPREE: 'logos/shangpree.svg', REALBARRIER: 'logos/realbarrier.svg',
  ITSSKIN: 'logos/itsskin.svg', DIXIONIST: 'logos/dixionist.svg',
  CHASINRABBITS: 'logos/chasinrabbits.svg', ATOPALM: 'logos/atopalm.svg',
  'DERMA-B': 'logos/derma_b.svg', ZEROID: 'logos/zeroid.svg',
  COSRX: 'logos/cosrx.png', MEDICUBE: 'logos/medicube.svg',
  BEAUTYOFJOSEON: 'logos/beautyofjoseon.png', ANUA: 'logos/anua.png',
  INNISFREE: 'logos/innisfree.svg', LANEIGE: 'logos/laneige.svg',
  SKIN1004: 'logos/skin1004.png'
};

const brandSearchKey = value => String(value).normalize('NFKD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLocaleLowerCase().replace(/[^a-z0-9]/g, '');

const lightLogoBrands = new Set([
  'DRNINETEEN', 'FRAIJOUR', 'HOUSE OF HUR', 'JUDYDOLL',
  'ANILLO', 'BLACKROUGE', "I'M FROM", 'MERZY', 'CP-1', 'KAJA',
  'FARM SKIN', 'NEWGENE'
]);

const brandCatalog = (() => {
  const byKey = new Map();
  for (const rawName of brandNames) {
    if (rawName === 'QA') continue; // Source placeholder, not a brand.
    const name = brandDisplayOverrides[rawName] || rawName.replaceAll('_', ' ');
    const key = brandSearchKey(name);
    let brand = byKey.get(key);
    if (!brand) {
      brand = { id: `brand-${key}`, name, aliases: [], logo: null, invertLogo: lightLogoBrands.has(name) };
      byKey.set(key, brand);
    }
    if (rawName !== name && !brand.aliases.includes(rawName)) brand.aliases.push(rawName);
    if (brandLogoFiles[rawName] || brandLogoFiles[name]) {
      brand.logo = brandLogoFiles[rawName] || brandLogoFiles[name];
    }
  }
  return [...byKey.values()];
})();
