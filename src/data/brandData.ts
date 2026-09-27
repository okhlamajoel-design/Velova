import { MaterialInnovation, LookbookItem, AthletePartner, BrandManifestoPillar } from '../types/brand';

export const HERO_IMAGE = '/src/assets/images/hero_sportswear_runner_1790493087429.jpg';
export const FABRIC_IMAGE = '/src/assets/images/fabric_technical_textile_1790493102118.jpg';
export const ATHLETE_PORTRAIT_IMAGE = '/src/assets/images/athlete_editorial_portrait_1790493114570.jpg';
export const URBAN_LOOKBOOK_IMAGE = '/src/assets/images/sportswear_lookbook_urban_1790493126527.jpg';

export const BRAND_MANIFESTO_PILLARS: BrandManifestoPillar[] = [
  {
    number: '01',
    title: 'Desain Berbasis Biomekanika Murni',
    shortDefinition: 'Menolak estetika dangkal demi efisiensi kinetik tubuh',
    detailedArgument:
      'Kami tidak mendesain pakaian untuk etalase ritel atau tren musiman yang lekas usang. Setiap garis jahitan, panel kompresi, dan zonasi ventilasi lahir dari pemetaan vektor gerak otot rangka saat atlet melampaui ambang laktat tubuh mereka.',
    metricLabel: 'Waktu Riset Tiap Purwarupa',
    metricValue: '18 Bulan'
  },
  {
    number: '02',
    title: 'Rekayasa Tekstil Polimer Sirkular',
    shortDefinition: 'Kekuatan serat karbon mikro tanpa polusi mikroplastik',
    detailedArgument:
      'Kami merekayasa benang teknis yang berasal dari fermentasi biomassa alami dan limbah jaring poliamida laut yang diurai kembali hingga tingkat molekuler, menghasilkan elastisitas 4-arah tanpa kompromi daya regang.',
    metricLabel: 'Bahan Bio-Sintetik Daur Ulang',
    metricValue: '100%'
  },
  {
    number: '03',
    title: 'Manifesto Non-Komersial & Kurasi',
    shortDefinition: 'Karya purwarupa untuk riset, bukan komoditas konsumsi cepat',
    detailedArgument:
      'VELOVA beroperasi sebagai rumah riset desain dan laboratorium eksplorasi. Koleksi yang kami ciptakan tidak diperjualbelikan secara massal; siluet kami dialokasikan khusus bagi atlet uji coba, peneliti aerodinamika, dan arsip pameran desain global.',
    metricLabel: 'Prinsip Ritel',
    metricValue: 'Arsip & Riset'
  }
];

export const MATERIAL_INNOVATIONS: MaterialInnovation[] = [
  {
    id: 'mat-aeroweave',
    code: 'AERO-X1',
    name: 'Aeroweave™ Hexa-Vent',
    tagline: 'Struktur sarang lebah mikro yang membuka pori saat suhu tubuh meningkat',
    description:
      'Anyaman biomimetik yang terinspirasi oleh spirakel serangga. Saat serat bersentuhan dengan kelembapan keringat dan panas tubuh, struktur anyaman mikro melar secara dinamis untuk melipatgandakan debit aliran udara.',
    scientificFormula: 'Polymer Matrix C-72 with Dynamic Porosity Factor',
    primaryBenefit: 'Menurunkan suhu mikro-iklim kulit hingga 2.4°C dalam kondisi lari maraton intensif',
    specs: {
      breathability: 96,
      elasticity: 88,
      weightGsm: 78,
      thermalRegulation: 'Aktif / Auto-ventilating'
    },
    keyFeatures: [
      'Pori ventilasi heksagonal mikroskopis tanpa jahitan las',
      'Anti-kelembapan hidrofobik instan (evaporasi dalam < 14 detik)',
      'Tekstur ultra-halus yang meniadakan hambatan gesekan kulit (anti-chafing)'
    ],
    usageScenario: 'Lari jarak jauh, lintasan maraton panas ekstrem, dan balap sepeda jalan raya',
    microStructureDescription: 'Kisi-kisi heksagonal 45-mikron dengan benang inti konduktif termal'
  },
  {
    id: 'mat-biocompress',
    code: 'COMP-V8',
    name: 'Bio-Compression Matrix',
    tagline: 'Dukungan fasciomuskular terarah untuk meminimalkan getaran otot',
    description:
      'Rajutan kompresi densitas variabel yang mengikuti jalur fascia dan rantai kinetik paha serta betis. Mengurangi osilasi mikroskopis otot yang menjadi biang utama kelelahan pada kilometer ke-30 ke atas.',
    scientificFormula: 'Elastane-Nylon Helix Core with Targeted Tension Gradients',
    primaryBenefit: 'Mengurangi osilasi otot sebesar 34% dan mempercepat pemulihan laktat',
    specs: {
      breathability: 84,
      elasticity: 94,
      weightGsm: 135,
      thermalRegulation: 'Netral / Stabilisator Suhu'
    },
    keyFeatures: [
      'Gradien tekanan 18-22 mmHg terverifikasi laboratorium fisiologi',
      'Pola peregangan asimetris yang mendukung kontraksi eksentrik',
      'Tepian laser-cut tanpa pita karet silikon yang menekan pembuluh darah'
    ],
    usageScenario: 'Latihan interval intensitas tinggi, trail running kecuraman ekstrem, dan pemulihan atlet',
    microStructureDescription: 'Spiral heliks ganda dengan elastisitas resistansi terukur'
  },
  {
    id: 'mat-thermo0k',
    code: 'THRM-0K',
    name: 'ThermoReflect™ Nanoweft',
    tagline: 'Perisai termal ultra-ringan untuk iklim sub-nol ketinggian tinggi',
    description:
      'Lapisan insulasi membran monomolekuler setebal 12 mikron yang memantulkan kembali 91% radiasi inframerah tubuh manusia tanpa menambah bobot pakaian atau membatasi rentang gerak bahu.',
    scientificFormula: 'Reflective Vapor-Deposited Ceramic Nano-Fiber Layer',
    primaryBenefit: 'Isolasi termal kelas ekspedisi kutub dengan ketebalan kurang dari 1 milimeter',
    specs: {
      breathability: 82,
      elasticity: 76,
      weightGsm: 92,
      thermalRegulation: 'Retensi Termal Ekstrem (-15°C hingga +5°C)'
    },
    keyFeatures: [
      'Membran tahan angin 100% dengan rating ketahanan air 20,000mm',
      'Refleksi panas inframerah spektrum jauh dari metabolisme sel tubuh',
      'Fleksibilitas senyap tanpa suara gemerisik kain plastik konvensional'
    ],
    usageScenario: 'Ekspedisi pegunungan alpine, lari trail musim dingin, dan penjelajahan lereng bersalju',
    microStructureDescription: 'Deposisi uap keramik pada kisi jaring poliester daur ulang'
  },
  {
    id: 'mat-carbonweft',
    code: 'CARB-NX',
    name: 'CarbonWeft™ Seamless Knit',
    tagline: 'Tenunan filamen karbon mikro untuk ketahanan gesekan abrasif',
    description:
      'Mengintegrasikan serat karbon berkekuatan tarik tinggi ke dalam rajutan melingkar 3D tanpa sambungan potong jahit. Memberikan perlindungan dari gesekan batu karang dan ranting tanpa mengorbankan kenyamanan layaknya kulit kedua.',
    scientificFormula: 'Multi-filament Carbon-infused Regenerated Polyamide',
    primaryBenefit: 'Ketahanan abrasi 500,000 siklus Martindale dengan bobot bulu',
    specs: {
      breathability: 91,
      elasticity: 89,
      weightGsm: 110,
      thermalRegulation: 'Konduksi Seimbang'
    },
    keyFeatures: [
      'Konstruksi zero-seam (tanpa sambungan benang luar)',
      'Serat anti-bakteri intrinsik alami tanpa lapisan kimia bilas',
      'Integritas bentuk struktural bahkan setelah 300 jam kompresi konstan'
    ],
    usageScenario: 'Ultra-maraton gurun, panjat bebas, dan lari halang rintang ekstrem',
    microStructureDescription: 'Filamen karbon mikro continuous-tow yang teranyam dalam pola tubular'
  }
];

export const CONCEPT_LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: 'look-01',
    code: 'PROTO-DS.01',
    series: 'Series 01: Dawn Strides',
    title: 'The Stratos Aero-Singlet & Kinetic Split Shorts',
    category: 'Studi Aerodinamika Lintasan Aspal',
    conceptPhilosophy:
      'Eksplorasi pengurangan bobot ekstrem untuk pelari maraton sub-2:10. Seluruh atasan hanya berbobot 42 gram dengan garis aerodinamis yang membelah turbulensi udara di area dada dan tulang belikat.',
    aerodynamicDrag: '-8.2% drag coef. pada 21 km/jam',
    prototypeEdition: 'Purwarupa Uji #04 (Laboratorium Bandung - Stuttgart)',
    image: HERO_IMAGE,
    aspectRatio: '16:9',
    testedWith: 'Uji Terowongan Angin & Pengujian Jalan Raya 1,200 km',
    ergonomicHighlights: [
      'Kelim bonded ultrasonik tipis 0.3mm untuk mencegah lecet puting dan ketiak',
      'Zonasi pori heksagonal di sepanjang tulang belakang',
      'Pinggang terintegrasi tanpa tali pengikat tebal'
    ],
    textileComposition: '72% Bio-Polyester Aeroweave™, 28% Elastane Helix',
    designNotes:
      'Diuji oleh atlet maraton nasional pada suhu udara 31°C dan kelembapan 85%. Menunjukkan penurunan denyut nadi kerja sebesar 3 bpm berkat efisiensi regulasi panas.'
  },
  {
    id: 'look-02',
    code: 'PROTO-AA.02',
    series: 'Series 02: Alpine Ascent',
    title: 'Summit-Shell 0K & Articulated Gaiter Tights',
    category: 'Eksplorasi Ketahanan Ketinggian Ekstrem',
    conceptPhilosophy:
      'Siluet pelindung bagi pelari punggung gunung dan penjelajah alpen yang menghadapi perubahan cuaca mendadak dari terik matahari lereng bawah menuju badai kabut beku punggungan 3,000 meter.',
    aerodynamicDrag: 'Optimalisasi Vektor Angin Silang 40 knot',
    prototypeEdition: 'Purwarupa Eksplorasi #09 (Gunung Rinjani - Pegunungan Alpen)',
    image: ATHLETE_PORTRAIT_IMAGE,
    aspectRatio: '3:4',
    testedWith: 'Ekspedisi Lari Trail 100K & Ketinggian 3,726 mdpl',
    ergonomicHighlights: [
      'Kapuchon berpenutup magnetik yang mengikuti perputaran leher tanpa menghalangi pandangan tepi',
      'Artikulasi lutut 3 dimensi dengan bantalan mikro penyerap benturan kerikil',
      'Lapisan insulasi ThermoReflect™ di area organ vital dada'
    ],
    textileComposition: 'CarbonWeft™ Ripstop, Nanoweft Membran 12µm, DWR Bebas PFC',
    designNotes:
      'Siluet ini dirancang untuk membuktikan bahwa perlindungan cuaca badai gunung tidak harus berwujud jaket tebal yang kaku dan memperlambat langkah atlet.'
  },
  {
    id: 'look-03',
    code: 'PROTO-UV.03',
    series: 'Series 03: Urban Velocity',
    title: 'Monolith Nocturne Wind-Cape & Compression Bottoms',
    category: 'Riset Visibilitas Kinetik Metropolitan',
    conceptPhilosophy:
      'Penggabungan estetika brutalist urban dengan elemen keselamatan fotoluminesens pasif. Garis reflektif mikro menyatu dengan kain hitam pekat saat siang hari, namun memancarkan siluet atletik tajam saat terpapar lampu kendaraan malam.',
    aerodynamicDrag: 'Zero Flap Profile pada Kecepatan Sprint',
    prototypeEdition: 'Purwarupa Riset Kota #12 (Tokyo - Jakarta)',
    image: URBAN_LOOKBOOK_IMAGE,
    aspectRatio: '16:9',
    testedWith: 'Uji Lari Urban Malam Hari & Analisis Reflektometri 360°',
    ergonomicHighlights: [
      'Pigmen mikrosfer kaca mikro reflektif tertanam dalam serat',
      'Potongan raglan asimetris untuk ayunan bahu tak terbatas',
      'Penyimpanan tersembunyi berperedam guncangan di titik pusat gravitasi punggung bawah'
    ],
    textileComposition: 'Reflective Bio-Nylon Seamless, Bio-Compression Matrix',
    designNotes:
      'Menghapus dikotomi antara pakaian olahraga teknis dan karya seni busana masa depan. Menampilkan garis tegas arsitektural yang berdialog dengan lanskap kota modern.'
  }
];

export const ATHLETE_PARTNERS: AthletePartner[] = [
  {
    id: 'ath-01',
    name: 'Arya Samudra',
    discipline: 'Ultra-Trail Specialist (160km Endurance)',
    fieldTestLocation: 'Rinjani Ultra & Mont-Blanc Circuit',
    milestone: 'Uji Coba Lapangan 2,400 km / 48,000m Elevasi',
    quote:
      'Pakaian olahraga konvensional selalu menjadi musuh tersembunyi setelah kilometer ke-70: keliman yang menggores kulit dan kain basah yang berat. VELOVA terasa seperti lapisan kedua tubuh yang menghilang begitu saya mulai berlari.',
    testNotes: 'Menguji ketahanan abrasi CarbonWeft™ pada medan bebatuan vulkanik tajam tanpa ada serat robek.'
  },
  {
    id: 'ath-02',
    name: 'Maya Daniswara',
    discipline: 'Olympic Distance 800m & 1500m Middle Distance',
    fieldTestLocation: 'Stuttgart High-Performance Track Lab',
    milestone: '400+ Sesi Terowongan Angin & Simulasi Laktat',
    quote:
      'Pada kecepatan 25 km/jam, setiap turbulensi udara di punggung dan paha sangat terasa. Aeroweave™ membuktikan bahwa ventilasi dan stabilitas bentuk bisa berjalan seiring tanpa getaran kain yang memperlambat.',
    testNotes: 'Validasi pengurangan drag aerodinamis sebesar 8.2% pada posisi lari sprint membungkuk.'
  },
  {
    id: 'ath-03',
    name: 'Kaelen Thorne',
    discipline: 'Fast-Packing & Alpine Speed Ascent',
    fieldTestLocation: 'Southern Alps & Himalaya High Passes',
    milestone: 'Suhu Pengujian -18°C hingga +35°C',
    quote:
      'VELOVA membongkar anggapan usang bahwa perlengkapan gunung harus kaku dan merepotkan. Kebebasan gerak adalah bentuk perlindungan keselamatan tertinggi di ketinggian curam.',
    testNotes: 'Uji retensi suhu ThermoReflect™ selama 14 jam bivuak darurat di ketinggian 4,200 meter.'
  }
];

export const RESEARCH_EXHIBITION_INFO = {
  labName: 'VELOVA KINETIC ARCHIVE & LAB',
  physicalStudioLocation: 'Kawasan Desain Kreatif SCBD, Jakarta & Studio Riset Tekstil Bandung',
  visitingHours: 'Berdasarkan Reservasi Kurasi Akademik, Atlet, dan Media (Selasa – Sabtu)',
  nextExhibition: 'Batas Gerak: Pameran Antropometri & Rekayasa Tekstil Masa Depan',
  curatorNote:
    'Kami mengundang desainer industri, fisioterapis olahraga, atlet profesional, dan institusi riset material untuk berdiskusi, menyentuh contoh purwarupa serat, dan mengamati proses pengujian di terowongan angin mikro kami.'
};
