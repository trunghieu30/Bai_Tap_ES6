const colorList = ['pallet', 'viridian', 'pewter', 'cerulean', 'vermillion', 'lavender', 'celadon', 'saffron', 'fuschia', 'cinnabar'];

function colorRender(colorList) {
    let html = '';
    for (const value of colorList) {
        html += `
    <button class="color-button ${value}" onclick ="getClassColor('${value}')"> </button>
    `
        document.querySelector('#colorContainer').innerHTML = html;
    }
    return html;
}
window.onload = function () {
    colorRender(colorList);
}
window.getClassColor = (value) => {
    let houseClass = document.querySelector('#house');
    houseClass.classList.add(value);
}