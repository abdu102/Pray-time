
let main = $('.cardsMain');
let select = $('.select');
let city = [];
function renderCards(data) {
    main.innerHTML = null;


    $('.dataMonth').textContent = data.date
    setInterval(() => {
        let timeNow = new Date();

        $('.dataHours').textContent = `
        ${String(timeNow.getHours()).padStart(2, 0)}:${String(timeNow.getMinutes()).padStart(2, 0)}:${String(timeNow.getSeconds()).padStart(2, 0)}
        `
    }, 1000)

    for( const [key, value] of Object.entries(data.times)) {
        console.log(`${key}: ${value}`);
        let splitText = key.split("_")[0].split("");
        let prayTime = splitText[0].toLocaleUpperCase() + splitText.slice(1).join("");

        let cards = `
        <div class="card w-[250px] h-[353px] rounded-[25px] flex flex-col justify-between items-center p-2">
        <h4 class="text-[#FFC700] text-[32px] font-bold">${prayTime}</h4>
        ${
            key == 'tong_saharlik' ? `<img src="./img/first.png" alt="">` : key == 'quyosh' ? `<img src="./img/second.png" alt="">` : key == 'peshin' ? `<img src="./img/third.png" alt="">` :
            key == 'asr' ? `<img src="./img/four.png" alt="">` : key == 'shom_iftor' ? `<img src="./img/fifth.png" alt="">` : `<img src="./img/six.png" alt="">`
        }
        <h4 class="text-white text-[48px] font-bold">${value}</h4>
    </div>
    

   
    `
    main.insertAdjacentHTML('beforeend', cards)}

}
select.addEventListener('change', e => {
    $('.city').innerHTML = e.target.value + ' shahri';
fetchData(`https://islomapi.uz/api/present/day?region=${e.target.value}`, renderCards);
})

fetchData('https://islomapi.uz/api/present/day?region=Toshkent', renderCards);