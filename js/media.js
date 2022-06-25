function reportWindowSize() {
    if (window.innerWidth <= 1100 ) {
        document.getElementById('left').style.display = 'none';
        document.getElementById('right').style.display = 'none';
        document.getElementById('center').classList = "col-12";
        document.getElementById('nav').style.display = 'none';
        document.getElementById('phoneNav').style.display = '';
        document.getElementById('sigInRightSide').style.display = 'none'
        document.getElementById('signUpRightSide').style.display = 'none'


        let cardsIcon = document.getElementsByClassName("icon")
        for (let i = 0; i < cardsIcon.length; i++) {
            cardsIcon[i].classList.remove('col-6')
            cardsIcon[i].classList.add('col-2')
        }

        let cardsImage = document.getElementsByClassName("cardImg")
        for (let i = 0; i < cardsImage.length; i++) {
            cardsImage[i].classList.remove('col-1')
            cardsImage[i].classList.add('col-2')
        }

    } else {
        document.getElementById('left').style.display = '';
        document.getElementById('right').style.display = '';
        document.getElementById('center').classList = "col-6";
        document.getElementById('nav').style.display = '';
        document.getElementById('phoneNav').style.display = 'none';
        document.getElementById('sigInRightSide').style.display = ''
        document.getElementById('signUpRightSide').style.display = ''

        let cardsIcon = document.getElementsByClassName("icon")
        for (let i = 0; i < cardsIcon.length; i++) {
            cardsIcon[i].classList.remove('col-2')
            cardsIcon[i].classList.add('col-6')
        }

        let cardsImage = document.getElementsByClassName("cardImg")
        for (let i = 0; i < cardsImage.length; i++) {
            cardsImage[i].classList.remove('col-2')
            cardsImage[i].classList.add('col-1')
        }
    }
}

window.onload = reportWindowSize;
window.onresize = reportWindowSize;