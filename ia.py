from saudacoes import adm_perguntas
from saudacoes import ia_respostas
from saudacoes import emotions
import random

ia = 'Calih: '
adm = 'Diego: '

while True:
    adm_fala= input(adm).lower()
    if adm_fala in adm_perguntas.bd_adm:
        print (ia + random.choice(ia_respostas.bd) + random.choice (emotions.emotions_1))
    if adm_fala == 'xau':
        print('Sistema: Calih foi dormir!')
        break