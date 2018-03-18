import urllib.request
from bs4 import BeautifulSoup
import json


quote_pagina = 'https://registroapps.uniandes.edu.co/scripts/semestre/adm_con_prerrequisitos_joomla.php'
pagina = urllib.request.urlopen(quote_pagina)
soup = BeautifulSoup(pagina, 'html.parser')
urls = []
i = 0
for a in soup.find_all('a', href=True):
    urls.append(a['href'])

pagina_parte = 'https://registroapps.uniandes.edu.co/scripts'
dictMa = {}
for i in range(1, len(urls)):
    urls[i] = urls[i].replace('Á', '%C1').replace('É', '%C9').replace('Á', '%CD').replace('Ó', '%D3').replace('Ú', '%DA').replace('á', '%E1').replace('é', '%E9').replace('í', '%ED').replace('ó', '%F3').replace('ú', '%FA').replace('ñ', '%F1').replace('Ñ', '%D1').replace('..', '').replace('ń', '%F1')
    paginaB = urls[i]
    paginaF = pagina_parte+paginaB
    paginaFF = urllib.request.urlopen(paginaF)
    print(paginaF)
    soupd = BeautifulSoup(paginaFF, 'html.parser')
    l = 0
    materia = []
    prerrequisito = []
    correquisito = []
    totales = []
    pres = []
    m = 0
    tabla = soupd.find_all('table')[3]
    m = 0
    for fila in tabla.find_all('td'):
        if(m<4):
            pass
        elif(m%4==0):
            print('SIGUIENTE MATERIA PERRO HIJUEPUTA CIEGO')
            materia.append(fila.text.strip().replace(' ', ''))
        elif(m%4==1):
            pass
        elif(m%4==2):
            preY = fila.text.strip().split(' Y ')
            presZ = []
            cosZ = []
            for x in preY:
                preZ = []
                coZ = []
                preO = x.strip().split(' O ')
                for p in preO:
                    if(p.endswith('*')):
                        p = p.replace(' ', '').replace('(', '').replace(')', '')
                        coZ.append(p)
                    elif(not p.endswith('*')):
                        p = p.replace(' ', '').replace('(', '').replace(')', '')
                        preZ.append(p)
                
                cosZ.append(coZ)
                presZ.append(preZ)
            for c in cosZ:
                if(not c):
                    cosZ.remove(c)
            correquisito.append(cosZ)
            prerrequisito.append(presZ)
        elif(m%4==3):
            pass
        m+=1
    for z in range(0, len(materia)):
        dictMa[materia[z]] = [prerrequisito[z], correquisito[z]]

for k, v in dictMa.items():
    print(k, v)
with open("prerrequisitos.json", "w") as outfile:
    json.dump([{'Materia': k, 'Requisitos':{'Prerrequisitos':v[0], 'Correquisitos':v[1]}} for k,v in dictMa.items()], outfile, indent=4)
    
