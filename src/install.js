const butInstall = document.getElementById('buttonInstall')

window.addEventListener('beforeinstallprompt',(event)=>{

window.deferredPrompt = event;

butInstallclassList.toggle('hidden',false)
console.log('pwa install')
});

butInstall.addEventListener('click', async ()=>{

    const promptEvent = window.deferredPrompt;
   if (!promptEvent){
    return;
   }})

   promptEventt.prompt();

   window.defferedprompt = null;

   butInstall.classList.toggle('hidden', true);
