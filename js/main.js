document.addEventListener('DOMContentLoaded', ()=>{
    const themeCheckbox = document.querySelector('#container-button input[type="checkbox"]');
    const body=document.body;
    const temaSalvo=localStorage.getItem('tema');
    if(temaSalvo==='escuro'){
        body.classList.add('dark-mode');
        themeCheckbox.checked = true;
    }else{
        body.classList.remove('dark-mode');
        themeCheckbox.checked=false;
    }

    themeCheckbox.addEventListener('change', () => {
        if (themeCheckbox.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('tema', 'escuro');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('tema', 'claro');
        }
    });
})