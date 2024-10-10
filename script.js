function redirectToForm() {
    // Mendapatkan nilai dari layanan yang dipilih
    const selectedService = document.querySelector('input[name="service"]:checked');

    // Cek apakah ada layanan yang dipilih
    if (selectedService) {
        // Jika ada layanan yang dipilih, alihkan pengguna ke halaman form yang sesuai
        window.location.href = 'form-layanan.html?service=' + selectedService.value;
    } else {
        alert('Silakan pilih salah satu layanan sebelum mengirim.');
    }
}

// Fungsi untuk mendapatkan nilai parameter dari URL
function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Mengisi form layanan berdasarkan URL
window.onload = function() {
    const selectedService = getParameterByName('service');
    if (selectedService) {
        // Jika layanan dipilih dari halaman sebelumnya, isi otomatis pada form
        document.getElementById('service').value = selectedService;
    }
};