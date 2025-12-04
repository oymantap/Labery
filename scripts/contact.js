document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('telegram-bot-form');
    const statusMessage = document.getElementById('form-status');
    const sendButton = document.getElementById('send-button');

    // !!! GANTI DUA NILAI INI DENGAN DATA BOT ANDA !!!
    const BOT_TOKEN = '8229493100:AAHK-p6CduMaO26TSAJi2YialSpamsxLWZU'; // Ganti dengan Token Bot Telegram Anda
    const CHAT_ID = '6741987892';     // Ganti dengan ID Chat Telegram Anda
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        sendButton.disabled = true;
        sendButton.textContent = 'Mengirim...';
        statusMessage.textContent = 'Memproses pengiriman pesan...';

        const name = document.getElementById('user-name').value;
        const email = document.getElementById('user-email').value;
        const message = document.getElementById('user-message').value;

        // Merakit pesan yang akan dikirim ke Telegram
        let telegramMessage = `*Pesan Baru dari Labery Website*\n\n`;
        telegramMessage += `*Nama:* ${name}\n`;
        if (email) {
            telegramMessage += `*Email:* ${email}\n`;
        }
        telegramMessage += `*Pesan:*\n${message}`;

        // Mengirim pesan menggunakan Telegram Bot API (via GET Request)
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(telegramMessage)}&parse_mode=Markdown`;

        fetch(url)
            .then(response => {
                if (response.ok) {
                    statusMessage.textContent = '✅ Pesan berhasil terkirim! Kami akan segera menghubungi Anda.';
                    form.reset();
                } else {
                    statusMessage.textContent = '❌ Gagal mengirim pesan. Silakan hubungi via WhatsApp/Telegram.';
                    console.error('Telegram API Error:', response.statusText);
                }
            })
            .catch(error => {
                statusMessage.textContent = '❌ Terjadi kesalahan jaringan. Cek koneksi Anda.';
                console.error('Fetch Error:', error);
            })
            .finally(() => {
                sendButton.disabled = false;
                sendButton.textContent = 'Kirim Pesan';
                setTimeout(() => { statusMessage.textContent = ''; }, 5000);
            });
    });
});
