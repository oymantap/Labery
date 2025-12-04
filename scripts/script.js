// --- script.js ---

// ... Kode const code, const reverse, function encode(), function decode(), function copyOutput() Anda berada di sini ...

// --- Fungsi Toggle Tema ---
function toggleTheme() {
    // 1. Toggle class 'dark-mode' pada elemen <body>
    const isDarkMode = document.body.classList.toggle('dark-mode');
    
    // 2. Simpan preferensi pengguna ke Local Storage
    if (isDarkMode) {
        localStorage.setItem('labery-theme', 'dark');
    } else {
        localStorage.setItem('labery-theme', 'light');
    }
}

// --- Fungsi Pemuatan Tema Otomatis ---
function loadTheme() {
    const savedTheme = localStorage.getItem('labery-theme');

    // Jika tema tersimpan sebagai 'dark', terapkan kelas dark-mode
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } 
    // Jika tidak ada preferensi atau 'light', biarkan default.
}

// --- Listener Event (PENTING: Menjalankan kode saat DOM siap) ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Muat tema segera saat DOMContentLoaded
    loadTheme(); 
    
    // 2. Tambahkan event listener ke logo LABERY
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', (e) => {
            e.preventDefault(); // Mencegah pindah halaman karena href="#"
            toggleTheme();
        });
    }
    
    // ... Event listener lain yang mungkin ada (misalnya untuk FAQ, dll.) ...
});
