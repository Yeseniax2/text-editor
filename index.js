



const main = document.querySelector('#main');
main.innerHTML = '';

constloadSpinner = ()=> {
    const spinner = document.createElement('div');
    spinner.classList.add(spinner);
    spinner.innerHTML=`
    <div class="loading-container">
  <div class="loading-spinner" />
  </div>
    `;
    main.appendChild(spinner);

};

const editor = new editor();

if (typeof editor === 'undefined') {
    loadspinner();
}

if ('serviceworker' in navigator) {
    const workboxsw = new Workbox();
    workboxsw.register();
} ekse {
    console.error('service workers are not supported')
}