let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

let coursesHtml = document.querySelectorAll('.course'),
    radioBtnHtml = document.querySelectorAll('input');

let priceArr = courses.map((course) => {
    let price = course.prices.map((num) => {
        return num
    }).filter(num => num)
    if (price.length) {
        return price
    }
})
let newPriceArr = [].concat(...priceArr)
newPriceArr.pop()

for (let i = 0; i < courses.length; i++) {
    coursesHtml[i].setAttribute('data-price', newPriceArr[i])
    coursesHtml[i].textContent = `${courses[i].name}, ${coursesHtml[i].getAttribute('data-price')} usd`
}

radioBtnHtml.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        if (event.target.id === '1') {
            coursesHtml.forEach((elem) => {
                elem.classList.remove('hide')
                if(+elem.getAttribute('data-price') > 100){
                    elem.classList.add('hide')
                }
            })
        } else if (event.target.id === '2'){
            coursesHtml.forEach((elem) => {
                elem.classList.remove('hide')
                if (+elem.getAttribute('data-price') > 250 ||
                    +elem.getAttribute('data-price') <= 100
                ) {
                    elem.classList.add('hide')
                }
            })
        } else if (event.target.id === '3'){
            coursesHtml.forEach((elem) => {
                elem.classList.remove('hide')
                if (+elem.getAttribute('data-price') < 400) {
                    elem.classList.add('hide')
                }
            })
        } else {
            coursesHtml.forEach((elem) => {
                elem.classList.remove('hide')
            })
        }
    })
})





