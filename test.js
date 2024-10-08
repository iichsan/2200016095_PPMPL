const { expect } = require('chai');
const { tambah, kali, kurang, bagi } = require('./math');

describe('Pengujian Fungsi Matematika', () => {
    // Test case untuk fungsi tambah
    it('seharusnya mengembalikan 4 saat menambahkan 2 + 2', () => {
        expect(tambah(2, 2)).to.equal(4);
    });

    // Test case untuk fungsi kali
    it('seharusnya mengembalikan 6 saat mengalikan 2 * 3', () => {
        expect(kali(2, 3)).to.equal(6);
    });

    // Test case untuk fungsi pengurangan
    it('seharusnya mengembalikan 0 saat mengurangkan 2 - 2', () => {
        expect(kurang(2, 2)).to.equal(0);
    });
    
    // Test case untuk fungsi pembagian
    it('seharusnya mengembalikan 2 saat membagi 6 / 3', () => {
        expect(bagi(6, 3)).to.equal(2);
    });

    // Test case untuk pembagian dengan nol
    it('seharusnya melempar error saat membagi dengan 0', () => {
        expect(() => bagi(6, 0)).to.throw("Tidak bisa membagi dengan nol");
    });

    // Test case untuk pengurangan dengan angka negatif
    it('seharusnya mengembalikan 0 saat mengurangkan -2 - (-2)', () => {
        expect(kurang(-2, -2)).to.equal(0);
    });

    // Test case untuk input bukan angka (string)
    it('seharusnya melempar error saat membagi input berupa string', () => {
        expect(() => bagi('ab', 0)).to.throw("Input salah");
    });

    // Test case untuk input null
    it('seharusnya melempar error saat input berupa null', () => {
        expect(() => bagi(null, 0)).to.throw("Input salah");
    });

});
