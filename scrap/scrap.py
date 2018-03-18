import urllib.request
from bs4 import BeautifulSoup
import json


quote_pagina = 'https://registroapps.uniandes.edu.co/scripts/semestre/adm_con_horario_joomla.php'
pagina = urllib.request.urlopen(quote_pagina)
soup = BeautifulSoup(pagina, 'html.parser')
urls = []
i = 0
for a in soup.find_all('a', href=True):
    urls.append(a['href'])

pagina_parte = 'https://registroapps.uniandes.edu.co/scripts'
materias = {}
for i in range(0, len(urls)):
    urls[i] = urls[i].replace('Á', '%C1').replace('É', '%C9').replace('Á', '%CD').replace('Ó', '%D3').replace('Ú', '%DA').replace('á', '%E1').replace('é', '%E9').replace('í', '%ED').replace('ó', '%F3').replace('ú', '%FA').replace('ñ', '%F1').replace('Ñ', '%D1').replace('..', '')
    paginaB = urls[i]
    paginaF = pagina_parte+paginaB
    departa = paginaB.split('depto=')
    departamentoF = departa[1][0:4]
    paginaFF = urllib.request.urlopen(paginaF)
    soupd = BeautifulSoup(paginaFF, 'html.parser')
    l = 0
    nombreMaterias = []
    codigoMaterias = []
    creditoMaterias = []
    for b in soupd.find_all('td', width='60'):
        if(l%2!=0):
            codigoM = b.text.strip().replace(departamentoF, '')
            codigoMaterias.append(codigoM)
        l += 1
    m = 0
    for k in soupd.find_all('td', width='156'):
        if(m%2!=0):
            nombreCurso = k.text.strip()
            nombreMaterias.append(nombreCurso)
        m += 1
    w = 0
    for z in soupd.find_all('td', width='55'):
        if(w%2!=0):
            creditos = z.text.strip()
            creditoMaterias.append(creditos)
        w += 1
    for c in range (0, len(nombreMaterias)):
        agregar = departamentoF + codigoMaterias[c]
        valor = [nombreMaterias[c], creditoMaterias[c]]
        materias[agregar] = valor
    print(paginaF)

for k, v in materias.items():
    print(k, v)
with open("materias.json", "w") as outfile:
    json.dump([{'Materia': k, 'Informacion':{'Nombre':v[0], 'Creditos':v[1]}} for k,v in materias.items()], outfile, indent=4)
    
