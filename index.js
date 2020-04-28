console.log('connected...')

window.addEventListener('DOMContentLoaded', () => {
    //getting the toggle btn
    let btn = document.getElementById('cb1')

    btn.addEventListener('click',  () => {
        changeMode(btn.checked)
    })
})

function changeMode(status){
    //getting all html elements first.
    let body = document.querySelector('body');
    let topCards = document.querySelector('.top-cards-container');
    let overviewCards = document.querySelector('.overview-cards-container');
    let middleHeader = document.querySelector('.middle-header');
    let header = document.querySelector('.header')


    //if true then change to light mode. if false change to dark mode.
    if(status){
        //body
        body.classList.remove('desktop-dark-v')
        body.classList.add('desktop-light-v');
        //top-cards
        topCards.classList.remove('dark-mode');
        topCards.classList.add('light-mode');
        //overview-cards
        overviewCards.classList.remove('dark-mode');
        overviewCards.classList.add('light-mode');
        //middle-header
        middleHeader.classList.remove('dark-text');
        middleHeader.classList.add('light-text');
        //main-header
        header.classList.remove('dark-mode-hdr');
    } else {
        //body
        body.classList.remove('desktop-light-v');
        body.classList.add('desktop-dark-v')
        //top-cards
        topCards.classList.remove('light-mode');
        topCards.classList.add('dark-mode');
        //overview-cards
        overviewCards.classList.remove('light-mode');
        overviewCards.classList.add('dark-mode');
        //middle-header
        middleHeader.classList.remove('light-text');
        middleHeader.classList.add('dark-text');
        //main-header
        header.classList.add('dark-mode-hdr')
    }
    
}