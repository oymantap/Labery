document.addEventListener('DOMContentLoaded', function() {
    console.log('Halaman Tentang Kami (about.html) telah dimuat.');
    
    // Contoh fungsionalitas: Menambahkan status waktu saat ini
    const missionSection = document.getElementById('misi-kami');
    
    if (missionSection) {
        const p = document.createElement('p');
        const now = new Date();
        p.innerHTML = `Labery terus dikembangkan. Data terakhir diakses pada: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}.`;
        p.style.marginTop = '20px';
        p.style.fontStyle = 'italic';
        
        missionSection.appendChild(p);
    }
});
