from saudacoes import adm_perguntas
from saudacoes import ia_respostas
from saudacoes import emotions
import random

ia = 'Calih: '
adm = 'Diego: '

while True:
    adm_fala= input(adm).lower()

#--------------- BOM DIA / TARDE / NOITE / OI / OLÁ --------------
    if adm_fala in adm_perguntas.bd_adm:
        print (ia + random.choice(ia_respostas.bd) + random.choice (emotions.emotions_dia))
    elif adm_fala in adm_perguntas.bt_adm:
        print (ia + random.choice(ia_respostas.bt) + random.choice (emotions.emotions_tarde))
    elif adm_fala in adm_perguntas.bn_adm:
        print (ia + random.choice(ia_respostas.bn) + random.choice (emotions.emotions_noite))
    elif adm_fala in adm_perguntas.oi_adm:
        print (ia + random.choice(ia_respostas.oi) + random.choice (emotions.emotions_oi))
    
    
    

 #-------------------------------------------------------------  
    elif adm_fala == 'xau':
        print('Sistema: Calih foi dormir!')
        break
    else:
        print(ia + 'não entendi chefe')
        