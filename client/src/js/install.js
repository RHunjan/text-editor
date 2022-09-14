const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// : Add an event handler to the `beforeinstallprompt` event - DONE

window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.style.visibility = 'visible';
});


// TODO: Implement a click event handler on the `butInstall` element - DONE
butInstall.addEventListener('click', () => {
event.prompt();
butInstall.setAttribute('disabled', true);
butInstall.textContent = 'Installed!';
});
// TODO: Add an handler for the `appinstalled` event - DONE
window.addEventListener('appinstalled', (event) => {
console.log('👍', 'appinstalled', event);
});
