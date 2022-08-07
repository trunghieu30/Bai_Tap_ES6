let string = document.querySelector('.heading').innerHTML;
let hoverMe = [...string];
function tachChu(hoverMe) {
    let html = '';
    for (const value of hoverMe) {
        html += `
            <span>${value}</span>
            `;
    }
    document.querySelector('.heading').innerHTML = html;
}
tachChu(hoverMe);