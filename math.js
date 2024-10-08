// math.js
function tambah(a, b) {   
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Input harus berupa angka");
    }
    return a + b; 
}  

function kali(a, b) {   
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Input harus berupa angka");
    }
    return a * b; 
}

// Fungsi pengurangan
function kurang(a, b) {
    return a - b;
}

// Fungsi pembagian
// Fungsi pembagian
function bagi(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Input salah");
    }
    if (b === 0) {
        throw new Error("Tidak bisa membagi dengan nol");
    }
    return a / b;
}


module.exports = { tambah, kali, kurang, bagi };
