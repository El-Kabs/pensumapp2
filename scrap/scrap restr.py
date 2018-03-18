import urllib.request
from bs4 import BeautifulSoup
import json


quote_pagina = 'https://registroapps.uniandes.edu.co/scripts/semestre/adm_con_restricciones_joomla.php'
pagina = urllib.request.urlopen(quote_pagina)
soup = BeautifulSoup(pagina, 'html.parser')
urls = []
i = 0
for a in soup.find_all('a', href=True):
    urls.append(a['href'])

pagina_parte = 'https://registroapps.uniandes.edu.co/scripts'
dictMa = {}
for i in range(1, len(urls)):
    urls[i] = urls[i].replace('Á', '%C1').replace('É', '%C9').replace('Á', '%CD').replace('Ó', '%D3').replace('Ú', '%DA').replace('á', '%E1').replace('é', '%E9').replace('í', '%ED').replace('ó', '%F3').replace('ú', '%FA').replace('ñ', '%F1').replace('Ñ', '%D1').replace('..', '')
    paginaB = urls[i]
    paginaF = pagina_parte+paginaB
    paginaFF = urllib.request.urlopen(paginaF)
    soupd = BeautifulSoup(paginaFF, 'html.parser')
    l = 0
    materia = []
    restriccionesS = []
    restriccionesP = []
    restriccionesN = []
    m = 0
    tabla = soupd.find_all('table')[2]
    
    for fila in tabla.find_all('td'):
        if(m<5):
            pass
        elif(m%5==0):
            materia.append(fila.text.strip().replace(' ', ''))
        elif(m%5==1):
            pass
        elif(m%5==2):
            restric = fila.text.strip()
            if(restric == ''):
                restriccionesS.append('No tiene')
            elif(restric != ''):
                restriccionesS.append(restric)
        elif(m%5==3):
            restric = fila.text.strip()
            if(restric == ''):
                restriccionesP.append('No tiene')
            elif(restric != ''):
                restriccionesP.append(restric)
        elif(m%5==4):
            restric = fila.text.strip()
            if(restric == ''):
                restriccionesN.append('No tiene')
            elif(restric != ''):
                restriccionesN.append(restric)
        m+=1
    for z in range(0, len(materia)):
        dictMa[materia[z]] = [restriccionesS[z], restriccionesP[z], restriccionesN[z]]

for k, v in dictMa.items():
    print(k, v)
with open("restricciones.json", "w") as outfile:
    json.dump(dictMa, outfile, indent=4)
with open("restricciones2.json", "w") as outfile:
    json.dump([{'Materia': k, 'Restricciones':{'Semestre':v[0], 'Programa':v[1], 'Nivel':v[2]}} for k,v in dictMa.items()], outfile, indent=4)
    
            
