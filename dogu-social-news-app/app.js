let textFormEl = document.getElementById("text-area");
const textCountEl = document.getElementById("counted-text");
const shareBtn = document.getElementById("share-btn");
const delBtn = document.querySelector('.delete');
const post = document.getElementById('post');

shareBtn.disabled = true;

textFormEl.addEventListener("keyup", KarakterSayac);
textFormEl.addEventListener("keydown", LimitKontrol);
textFormEl.addEventListener("paste", PanoLimitKontrol);
shareBtn.onclick = () => {

};
delBtn.onclick = () => {
    post.classList.remove('media');
    post.innerText = "";
};

function KarakterSayac() {

    let yaziUzunlugu = textFormEl.value.length;
    textCountEl.innerText = textFormEl.value.length;

    shareBtn.disabled = yaziUzunlugu <= 0;
}

function LimitKontrol(e) {

    let yaziUzunlugu = textFormEl.value.length;

    if (yaziUzunlugu >= 140 && e.key !== 'Backspace') {
        e.preventDefault();
    }
}

function PanoLimitKontrol(e) {
    e.preventDefault();


    let pano = (e.clipboardData || window.clipboardData).getData('text');
    let karakterUzunlugu = pano.trim().length;

    let yazi;
    if (karakterUzunlugu >= 140) {
        yazi = pano.trim().substr(0, 140);

    } else {
        yazi = pano.trim();
    }
    textFormEl.value = yazi;
    KarakterSayac();
}

