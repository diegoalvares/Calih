const resp = document.getElementById('resp');
const enviar = document.getElementById('enviar');
const msg = document.getElementById('msg');
const cor1 = document.getElementById('circulo')

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

    /* ------------- Td bom ------------------- */
    
    if(msg.value == 'tudo bom' || msg.value == 'tdbom' || msg.value == 'td bom' || msg.value == 'tudo bem' || msg.value == 'tdbem' || msg.value == 'como você está'|| msg.value == 'como vc está'|| msg.value == 'como vc esta'|| msg.value == 'como vai'){
        resp.innerHTML = 'tudo ótimo chefinho'
    }


    /* ------------- abrir alguns sites ------------------- */

    if(msg.value == 'abrir google' || msg.value == 'calih abre o google' || msg.value == 'calih abre o google por favor' || msg.value == 'por favor calih abre o google' || msg.value == 'quero entrar no google' || msg.value == 'calih entra no google'|| msg.value == 'abre o google'|| msg.value == 'calih quero entrar no google'){
        resp.innerHTML = 'ok chefinho'
        window.open('https://www.google.com/')
    }

    if(msg.value == 'abrir youtube' || msg.value == 'calih abre o youtube' || msg.value == 'calih abre o youtube por favor' || msg.value == 'por favor calih abre o youtube' || msg.value == 'quero entrar no youtube' || msg.value == 'calih entra no youtube'|| msg.value == 'abre o youtube'|| msg.value == 'calih quero entrar no youtube'){
        resp.innerHTML = 'ok chefinho'
        window.open('https://www.youtube.com/')
    }
    
})

setTimeout()