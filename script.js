const resp = document.getElementById('resp');
const enviar = document.getElementById('enviar');
const msg = document.getElementById('msg');


enviar.addEventListener('click', function(e){
    e.preventDefault();

    if(msg.value == 'bom dia' || msg.value == 'bomdia' || msg.value == 'bd' || msg.value == 'bom dia calih'){
        resp.innerHTML = 'bom dia chefinho'
    }

    if(msg.value == 'boa tarde' || msg.value == 'boatarde' || msg.value == 'bt' || msg.value == 'boa tarde calih'){
        resp.innerHTML = 'boa tarde chefinho'
    }

    if(msg.value == 'boa noite' || msg.value == 'boanoite' || msg.value == 'bn' || msg.value == 'boa noite calih'){
        resp.innerHTML = 'boa noite chefinho'
    }
})