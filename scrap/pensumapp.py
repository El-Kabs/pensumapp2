import json
import requests
prefijos = ['SICO', 'MSCM', 'MDIS', 'ADMI', 'DPUB', 'ARTI', 'MGPD', 'CBCA', 'DLIT', 'DEIN', 'MIFI', 'DEPO', 'MUSI', 'DADM', 'QUIM', 'ICYA', 'HART', 'ANTR', 'CIDE', 'FILO', 'IQUI', 'IELE', 'FISI', 'BCOM', 'HIST', 'BIOL', 'AUTO', 'DISE', 'INTL', 'EECO', 'DPRO', 'MLIT', 'ARTE', 'MPCU', 'DERE', 'DEMP', 'PSCL', 'IING', 'MIAD', 'LEGI', 'DIGS', 'GTEL', 'MTRI', 'DEPR', 'MGAD', 'ESIO', 'MGPU', 'MBIT', 'CBIO', 'MGAP', 'DMIN', 'DECA', 'MEDI', 'MISO', 'EDUC', 'MART', 'MADM', 'CISO', 'RJUR', 'FARH', 'MPAZ', 'DEPI', 'MSIN', 'CBPC', 'CPOL', 'GEOC', 'PSIC', 'MIIA', 'ISIS', 'MINE', 'MGPA', 'GPUB', 'MBAE', 'SPUB', 'CBCC', 'MBIO', 'IIND', 'LITE', 'ECON', 'DENI', 'MATE', 'EMAT', 'MHAR', 'DDER', 'EPID', 'MECU', 'MFIN', 'IGEN', 'IBIO', 'EDUI', 'IMEC', 'MECA', 'PERI', 'ARQU', 'MPET', 'LENG', 'CBCO', 'CONT', 'STRA', 'MPER', 'MMER', 'DCOM', 'HDIG', 'EINT', 'EGOB', 'MGEO', 'DGGJ', 'MDER']
headers = {'Referer': 'https://registroapps.uniandes.edu.co/oferta_cursos/index.php'}

retornar = {"records": []}

cuantos = len(prefijos)
i = 0
for b in prefijos:
    req = requests.get('https://registroapps.uniandes.edu.co/oferta_cursos/api/get_courses.php?term=201910&ptrm=1&prefix='+str(b), headers=headers)
    jsonP = json.loads(req.text)
    ultimo = ""
    for x in jsonP['records']:
        retorno = {}
        if(ultimo == str(x['class']+x["course"])):
            pass
        else:
            ultimo = str(x['class']+x["course"])
            retorno['title'] = x['title'].replace('"', ' ').replace("\xa0", " ").replace('xa0', ' ').replace("\\", "")
            retorno['depto'] = x['class']
            retorno['cod'] = x['course']
            retorno['coreq'] = x['coreq']
            retorno['prereq'] = x['prereq']
            retorno['restr'] = x['restr']
            retorno['credits'] = x['credits']
            retornar["records"].append(retorno)
    i = i + 1
    print("Van: "+str(i)+" de "+str(cuantos))

i = 0
for b in prefijos:
    req = requests.get('https://registroapps.uniandes.edu.co/oferta_cursos/api/get_courses.php?term=201910&ptrm=8A&prefix='+str(b), headers=headers)
    jsonP = json.loads(req.text)
    ultimo = ""
    for x in jsonP['records']:
        retorno = {}
        if(ultimo == str(x['class']+x["course"])):
            pass
        else:
            ultimo = str(x['class']+x["course"])
            retorno['title'] = x['title'].replace('"', ' ').replace("\xa0", " ").replace('xa0', ' ').replace("\\", "")
            retorno['depto'] = x['class']
            retorno['cod'] = x['course']
            retorno['coreq'] = x['coreq']
            retorno['prereq'] = x['prereq']
            retorno['restr'] = x['restr']
            retorno['credits'] = x['credits']
            retornar["records"].append(retorno)
    i = i + 1
    print("Van: "+str(i)+" de "+str(cuantos))

i = 0
for b in prefijos:
    req = requests.get('https://registroapps.uniandes.edu.co/oferta_cursos/api/get_courses.php?term=201910&ptrm=8B&prefix='+str(b), headers=headers)
    jsonP = json.loads(req.text)
    ultimo = ""
    for x in jsonP['records']:
        retorno = {}
        if(ultimo == str(x['class']+x["course"])):
            pass
        else:
            ultimo = str(x['class']+x["course"])
            retorno['title'] = x['title'].replace('"', ' ').replace("\xa0", " ").replace('xa0', ' ').replace("\\", "")
            retorno['depto'] = x['class']
            retorno['cod'] = x['course']
            retorno['coreq'] = x['coreq']
            retorno['prereq'] = x['prereq']
            retorno['restr'] = x['restr']
            retorno['credits'] = x['credits']
            retornar["records"].append(retorno)
    i = i + 1
    print("Van: "+str(i)+" de "+str(cuantos))

i = 0
for b in prefijos:
    req = requests.get('https://registroapps.uniandes.edu.co/oferta_cursos/api/get_courses.php?term=201910&ptrm=3&prefix='+str(b), headers=headers)
    jsonP = json.loads(req.text)
    ultimo = ""
    for x in jsonP['records']:
        retorno = {}
        if(ultimo == str(x['class']+x["course"])):
            pass
        else:
            ultimo = str(x['class']+x["course"])
            retorno['title'] = x['title'].replace('"', ' ').replace("\xa0", " ").replace('xa0', ' ').replace("\\", "")
            retorno['depto'] = x['class']
            retorno['cod'] = x['course']
            retorno['coreq'] = x['coreq']
            retorno['prereq'] = x['prereq']
            retorno['restr'] = x['restr']
            retorno['credits'] = x['credits']
            retornar["records"].append(retorno)
    i = i + 1
    print("Van: "+str(i)+" de "+str(cuantos))

with open('materiasFinal.json', "w") as f:
    json.dump(retornar, f, ensure_ascii=False)
