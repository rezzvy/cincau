const containerElement = document.querySelector('#pemesan');
const landingElement = document.querySelector('#landing');

const bodyElement = document.querySelector('body');


function getScreenHeight() {
    return window.innerHeight + 'px';
}

document.addEventListener('DOMContentLoaded', e => {
    bodyElement.style.setProperty('--screen-height', getScreenHeight());

})

window.addEventListener('resize', e => {
    bodyElement.style.setProperty('--screen-height', getScreenHeight());
})


const tombolBeli = document.querySelector('.order_landing');

const pemesanContainer = document.getElementById('pemesan');

tombolBeli.addEventListener('click', e => {
    pemesanContainer.classList.add('view')
})

const tombolTutupPemesan = document.querySelector('.close-pemesan');

tombolTutupPemesan.addEventListener('click', e => {
    pemesanContainer.classList.remove('view')
})






let namaPemesan = "";
let catatan = "-";
let jumlah = 1;

let hargaFix = 10000;



function generateText() {
    let hargaSekarang = hargaFix * jumlah;

    return `Hallo Kak\nSaya *${namaPemesan}* ingin memesan es cincau susunya sebanyak ${jumlah} botol, dan total biayanya adalah : Rp. ${hargaSekarang.toLocaleString('id-ID')}\n*Informasi tambahan*\n${catatan}
    `.trim();
}

function getFinalURL(message) {
    return `https://wa.me/6282231883115?text=${message}`;
}



const namaPemesanInput = document.getElementById('nama_pemesan');
const catatanInput = document.getElementById('catatan');
const jumlahInput = document.getElementById('jumlah');

namaPemesanInput.addEventListener('input', e => {
    namaPemesan = e.currentTarget.value;
})



catatanInput.addEventListener('input', e => {
    catatan = e.currentTarget.value;
})

jumlahInput.addEventListener('input', e => {
    jumlah = e.currentTarget.value;
})



const tombolPesan = document.querySelector('.btn-order');
const counterElement = document.querySelector('.counter')

let counter = 5;

const overlay = document.querySelector('.overlay')
tombolPesan.addEventListener('click', e => {
    overlay.classList.remove('not-view')


    let interval = setInterval(() => {
        if (counter === 0) {
            clearInterval(interval)

            let url = getFinalURL(encodeURIComponent(generateText()));

            window.location.href = url;
        }

        counterElement.textContent = counter;
        counter--;
    }, 1000);
})


const kurang = document.querySelector('.jumlah-kurang');
const tambah = document.querySelector('.jumlah-tambah');



const lalav = document.querySelector('.price-visual');

function getCurrentPrice() {
    let hargaSekarang = hargaFix * jumlah;
    return hargaSekarang.toLocaleString('id-ID');
}

kurang.addEventListener('click', e => {
    if (jumlah === 1) return

    jumlah--;
    jumlahInput.value = jumlah;

    lalav.textContent = getCurrentPrice();
})


tambah.addEventListener('click', e => {


    jumlah++;
    jumlahInput.value = jumlah;

    lalav.textContent = getCurrentPrice();
})

