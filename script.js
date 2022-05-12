// ----Event Listeners ----//

const btn = document.querySelector('#btnDeleteAll');

/*btn.addEventListener('click', function() {
    console.log('btn clicked');
}); --- fonksiyonu bir kere kullanabiliriz ---*/

btn.addEventListener('click', btnClick);

function btnClick() {
    console.log('btn clicked');
} // --- fonsuyonu birden fazla kez kullanabiliriz ---*/