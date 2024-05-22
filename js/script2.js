function hitungKeliling() {
    const sisi1 = parseFloat(document.getElementById('sisi1'). value);
    const sisi2 = parseFloat(document.getElementById('sisi2'). value);
    const sisi3 = parseFloat(document.getElementById('sisi3'). value);
    const keliling = sisi1+sisi2+sisi3;
    document.getElementById('keliling'). value = keliling;
}
function resetKeliling(){
    document.getElementById('sisi1'). value = '';
    document.getElementById('sisi2'). value = '';
    document.getElementById('sisi3'). value = '';
    document.getElementById('keliling'). value = '';
}