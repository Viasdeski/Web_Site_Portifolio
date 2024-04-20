/*---SKILLS TABS---*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]');

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target);

            tabContent.forEach(tabContents => {
                tabContents.classList.remove('skills__active');
            })

            target.classList.add('skills__active');

            tabs.forEach(tab => {
                tab.classList.remove('skills__active');
            })

            tab.classList.add('skills__active');
        })
      })



/*--MIXITUP FILTER PORTFOLIO--*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
})


/*--Link Active Work--*/
const linkWork = document.querySelectorAll('.work__item');

function activeWork(){
    linkWork.forEach(l => l.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach(l => l.addEventListener('click', activeWork))