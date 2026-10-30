const daftarMateri = [
    // KELAS 10
    {
        id: 1,
        kelas: '10',
        mapel: 'Matematika',
        judul: 'Eksponen & Logaritma',
        deskripsi: 'Memahami sifat-sifat pangkat, bentuk akar, serta penyelesaian persamaan logaritma.',
        konsep: 'Eksponen adalah perkalian berulang. Logaritma adalah kebalikan (invers) dari eksponen.',
        rumus: 'a^m × a^n = a^(m+n)\nlog_a(b × c) = log_a(b) + log_a(c)',
        tips: 'Ingat! Jika basis logaritma sama, penjumlahan logaritma menjadi perkalian numerus.'
    },
    {
        id: 2,
        kelas: '10',
        mapel: 'Fisika',
        judul: 'Vektor & Vektor Satuan',
        deskripsi: 'Penjumlahan vektor, resultan gaya, dan komponen vektor pada sumbu X dan Y.',
        konsep: 'Vektor memiliki nilai dan arah. Komponen searah sumbu X memakai cosinus, sumbu Y memakai sinus.',
        rumus: 'Rx = R × cos(θ)\nRy = R × sin(θ)\n|R| = √(Rx² + Ry²)',
        tips: 'Gunakan aturan Phytagoras untuk mencari resultan dua vektor yang saling tegak lurus.'
    },
    {
        id: 3,
        kelas: '10',
        mapel: 'Kimia',
        judul: 'Struktur Atom & Sistem Periodik',
        deskripsi: 'Partikel penyusun atom (proton, elektron, neutron) dan konfigurasi elektron.',
        konsep: 'Atom terdiri dari inti (proton + neutron) dan dikelilingi oleh elektron pada kulit atom.',
        rumus: 'Nomor Massa (A) = Proton + Neutron\nJumlah Elektron = Nomor Atom (Z) [Atom Netral]',
        tips: 'Konfigurasikan elektron sesuai aturan Aufbau dari tingkat energi terendah (1s, 2s, 2p, dst).'
    },
    {
        id: 4,
        kelas: '10',
        mapel: 'Sosiologi',
        judul: 'Interaksi Sosial & Tindakan Sosial',
        deskripsi: 'Syarat terjadinya interaksi sosial: Kontak sosial dan Komunikasi.',
        konsep: 'Interaksi sosial adalah hubungan timbal balik antara individu maupun kelompok.',
        rumus: 'Syarat Interaksi = Kontak Sosial + Komunikasi',
        tips: 'Pahami perbedaan bentuk asosiatif (kerjasama) dan disosiatif (konflik/persaingan).'
    },

    // KELAS 11
    {
        id: 5,
        kelas: '11',
        mapel: 'Matematika',
        judul: 'Trigonometri Analitika',
        deskripsi: 'Rumus jumlah dan selisih sudut serta identitas trigonometri.',
        konsep: 'Menghitung nilai sin, cos, tan untuk sudut-sudut tak istimewa tanpa kalkulator.',
        rumus: 'sin(A + B) = sin A cos B + cos A sin B\ncos(A + B) = cos A cos B - sin A sin B',
        tips: 'Hafalkan lagu singkatan: "Sin Cuma Sama", "Cos Cuma Beda" untuk mengingat tanda + / -.'
    },
    {
        id: 6,
        kelas: '11',
        mapel: 'Fisika',
        judul: 'Dinamika Rotasi & Momen Inersia',
        deskripsi: 'Konsep torsi, benda tegar, dan hukum kekekalan momentum sudut.',
        konsep: 'Torsi adalah penyebab benda berotasi. Momen inersia adalah kelembaman benda saat berputar.',
        rumus: 'τ = F × r × sin(θ)\nI = m × r²\nΣτ = I × α',
        tips: 'Semakin jauh massa benda dari sumbu putar, semakin besar momen inersianya (makin sulit diputar).'
    },
    {
        id: 7,
        kelas: '11',
        mapel: 'Biologi',
        judul: 'Sistem Peredaran Darah',
        deskripsi: 'Komponen darah, struktur jantung, dan mekanisme peredaran darah besar/kecil.',
        konsep: 'Peredaran darah manusia tertutup dan ganda (melalui jantung dua kali dalam satu putaran).',
        rumus: 'Peredaran Darah Kecil: Jantung (Bilik Kanan) -> Paru-paru -> Jantung (Serambi Kiri)\nPeredaran Darah Besar: Jantung (Bilik Kiri) -> Seluruh Tubuh -> Jantung (Serambi Kanan)',
        tips: 'Bilik kiri jantung memiliki dinding otot paling tebal karena memompa darah ke seluruh tubuh.'
    },
    {
        id: 8,
        kelas: '11',
        mapel: 'Ekonomi',
        judul: 'Pendapatan Nasional & Inflasi',
        deskripsi: 'Perhitungan PDB (GDP), Pendapatan Per Kapita, dan indeks harga.',
        konsep: 'Pendapatan nasional mengukur total nilai barang/jasa yang dihasilkan suatu negara dalam 1 tahun.',
        rumus: 'Metode Pengeluaran: Y = C + I + G + (X - M)\nC=Konsumsi, I=Investasi, G=Pemerintah, X=Ekspor, M=Impor',
        tips: 'Ingat rumus metode pengeluaran dengan singkatan **CIG-XM**.'
    },

    // KELAS 12
    {
        id: 9,
        kelas: '12',
        mapel: 'Matematika',
        judul: 'Kalkulus: Integral Tentu & Tak Tentu',
        deskripsi: 'Konsep kebalikan turunan dan perhitungan luas daerah di bawah kurva.',
        konsep: 'Integral adalah anti-turunan. Integral tentu memiliki batas atas dan bawah.',
        rumus: '∫ x^n dx = (1 / (n+1)) × x^(n+1) + C\n∫[a ke b] f(x) dx = F(b) - F(a)',
        tips: 'Jangan lupa selalu tambahkan konstanta (+ C) untuk hasil integral tak tentu!'
    },
    {
        id: 10,
        kelas: '12',
        mapel: 'Kimia',
        judul: 'Sifat Koligatif Larutan',
        deskripsi: 'Penurunan tekanan uap, kenaikan titik didih, dan tekanan osmotik.',
        konsep: 'Sifat larutan yang hanya bergantung pada JUMLAH zat terlarut, bukan jenis zatnya.',
        rumus: 'ΔTb = m × Kb × i (Kenaikan titik didih)\nπ = M × R × T × i (Tekanan Osmotik)',
        tips: 'Untuk larutan elektrolit, selalu kalikan dengan faktor Van\'t Hoff (i).'
    },
    {
        id: 11,
        kelas: '12',
        mapel: 'Biologi',
        judul: 'Substansi Genetik: DNA & RNA',
        deskripsi: 'Struktur heliks ganda DNA, sintesis protein (transkripsi & translasi).',
        konsep: 'DNA menyimpan informasi genetik. Sintesis protein mengubah cetakan DNA menjadi asam amino.',
        rumus: 'Basa Nitrogen DNA: Adenin (A) = Timin (T) | Guanin (G) ≡ Sitosin (C)\nPada RNA: Timin diganti Urasil (U)',
        tips: 'Transkripsi terjadi di Inti Sel (Nukleus), Translasi terjadi di Ribosom.'
    },
    {
        id: 12,
        kelas: '12',
        mapel: 'Sejarah',
        judul: 'Proklamasi & Perjuangan Mempertahankan Kemerdekaan',
        deskripsi: 'Peristiwa Rengasdengklok, Perjanjian Linggarjati, Renville, hingga KMB.',
        konsep: 'Upaya mempertahankan kemerdekaan dilakukan melalui dua jalur: Perjuangan Fisik dan Diplomasi.',
        rumus: 'Jalur Diplomasi Utama: Linggarjati (1947) -> Renville (1948) -> Roem-Royen (1949) -> KMB (1949)',
        tips: 'Hafalkan urutan diplomasi dengan singkatan **Li-Ren-Ro-KMB**.'
    }

    function renderMateri(data) {
    const container = document.getElementById('materi-grid');
    if (!container) return;

    container.innerHTML = ''; // Kosongkan container

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = `materi-card kelas-${item.kelas} bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-6 shadow-sm relative flex flex-col justify-between`;
        

        let badgeColor = 'bg-blue-100 text-blue-700';
        if (item.kelas === '11') badgeColor = 'bg-emerald-100 text-emerald-700';
        if (item.kelas === '12') badgeColor = 'bg-purple-100 text-purple-700';

        card.innerHTML = `
            <div>
                <div class="flex justify-between items-center mb-3">
                    <span class="${badgeColor} text-xs font-semibold px-2.5 py-1 rounded-md">Kelas ${item.kelas}</span>
                    <span class="text-xs text-slate-400 font-medium">${item.mapel}</span>
                </div>
                <h3 class="font-bold text-lg text-slate-800 mb-2">${item.judul}</h3>
                <p class="text-slate-600 text-sm mb-4">${item.deskripsi}</p>
            </div>
            <button onclick="openModal('${item.judul}', 'Kelas ${item.kelas} - ${item.mapel}', '${escapeHtml(item.konsep)}', '${escapeHtml(item.rumus)}', '${escapeHtml(item.tips)}')" 
                class="w-full bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium py-2 rounded-xl text-sm transition-colors flex items-center justify-center space-x-2">
                <i data-lucide="file-text" class="w-4 h-4"></i>
                <span>Lihat Ringkasan</span>
            </button>
        `;
        container.appendChild(card);
    });

    if (window.lucide) lucide.createIcons();
}

unction escapeHtml(text) {
    return text.replace(/'/g, "\\'").replace(/\n/g, '\\n');
}


function filterKelas(kelas) {
    if (kelas === 'all') {
        renderMateri(daftarMateri);
    } else {
        const filtered = daftarMateri.filter(item => item.kelas === kelas);
        renderMateri(filtered);
    }
}

function setupSearch() {
    const searchInput = document.getElementById('search-materi');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const keyword = e.target.value.toLowerCase();
        const filtered = daftarMateri.filter(item => 
            item.judul.toLowerCase().includes(keyword) || 
            item.mapel.toLowerCase().includes(keyword) || 
            item.deskripsi.toLowerCase().includes(keyword)
        );
        renderMateri(filtered);
    });
}

function openModal(title, badge, concept, formula, tips) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-badge').innerText = badge;
    document.getElementById('modal-concept').innerText = concept;
    document.getElementById('modal-formula').innerText = formula;
    document.getElementById('modal-tips').innerText = tips;
    
    document.getElementById('summary-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('summary-modal').classList.add('hidden');
}


let timeLeft = 25 * 60;
let timerId = null;

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const display = document.getElementById('timer-display');
    if (display) {
        display.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

function startTimer() {
    if (timerId !== null) return;
    timerId = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timerId);
            timerId = null;
            alert("Waktu belajar selesai! Saatnya istirahat 5 menit.");
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerId);
    timerId = null;
}

function resetTimer() {
    pauseTimer();
    timeLeft = 25 * 60;
    updateTimerDisplay();
}

function addTodo() {
    const input = document.getElementById('todo-input');
    const text = input.value.trim();
    if (text === '') return;

    const ul = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.className = "flex items-center justify-between p-3 bg-white/90 rounded-xl text-sm border border-slate-100";
    li.innerHTML = `
        <span class="text-slate-700">${text}</span>
        <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-red-500"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
    `;
    ul.appendChild(li);
    input.value = '';
    
    if (window.lucide) lucide.createIcons();
}

window.addEventListener('DOMContentLoaded', () => {
    renderMateri(daftarMateri);
    setupSearch();
    if (window.lucide) lucide.createIcons();
});
