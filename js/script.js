function hitungLuas(){
    const alas = parseFloat(document.getElementById('alas'). value);
    const tinggi = parseFloat(document.getElementById('tinggi'). value);
    const luas = (alas*tinggi)/2;
    document.getElementById('luas'). value = luas;
}

function resetLuas() {
    document.getElementById('alas'). value = '';
    document.getElementById('tinggi'). value = '';
    document.getElementById('luas'). value = '';
}