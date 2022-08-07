const diemTrungBinh = (...rest) => {
    let tongDiem = 0;
    for (const value of rest) {
        tongDiem += value;
    }
    return tongDiem / rest.length;
}
const getElement = (id) => {
    return document.getElementById(id);
}
getElement('btnKhoi1').onclick = () => {
    const diemToan = Number(getElement('inpToan').value);
    const diemLy = Number(getElement('inpLy').value);
    const diemHoa = Number(getElement('inpHoa').value);
    const dtb = diemTrungBinh(diemToan, diemLy, diemHoa);
    getElement('tbKhoi1').innerHTML = dtb;
}


getElement('btnKhoi2').onclick = () => {
    const diemVan = Number(getElement('inpVan').value);
    const diemSu = Number(getElement('inpSu').value);
    const diemDia = Number(getElement('inpDia').value);
    const diemAnh = Number(getElement('inpEnglish').value);
    const dtb = diemTrungBinh(diemVan, diemSu, diemDia, diemAnh);
    getElement('tbKhoi2').innerHTML = dtb;
}