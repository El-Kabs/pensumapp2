import json

materias = {}
restricciones = {}
prer = {}
materiasRestric = {}
materiasCompleta = {}
retornar = {"records":[]}
with open('materias.json') as json_data:
    d = json.load(json_data)
    for x in d:
        materiaNombre = x['Informacion']['Nombre']
        creditos = x['Informacion']['Creditos']
        valores = [materiaNombre, creditos]
        materias[x['Materia']] = valores
with open('restricciones2.json') as restricciones_data:
    d = json.load(restricciones_data)
    for x in d:
        semestre = x['Restricciones']['Semestre']
        programa = x['Restricciones']['Programa']
        nivel = x['Restricciones']['Nivel']
        valores = [semestre, programa, nivel]
        restricciones[x['Materia']] = valores
with open('prerrequisitos.json') as prerrequisitos_data:
    d = json.load(prerrequisitos_data)
    for x in d:
        pre = x['Requisitos']['Prerrequisitos']
        co = x['Requisitos']['Correquisitos']
        valores = [pre, co]
        prer[x['Materia']] = valores

for k, v in materias.items():
    try:
        codigoM = k
        nombreM = materias[k][0]
        creditosM = materias[k][1]
        restriccions = restricciones[k][0]
        restriccionp = restricciones[k][1]
        restriccionn = restricciones[k][2]
    except KeyError:
        restriccions = 'No tiene restricciones'
        restriccionp = 'No tiene restricciones'
        restriccionn = 'No tiene restricciones'
    valores = [nombreM, creditosM, restriccions, restriccionp, restriccionn]
    materiasRestric[codigoM] = valores

for k, v in materiasRestric.items():
    try:
        codigoM = k
        nombreM = materiasRestric[k][0]
        creditosM = materiasRestric[k][1]
        restriccions = materiasRestric[k][2]
        restriccionp = materiasRestric[k][3]
        restriccionn = materiasRestric[k][4]
        pre = prer[k][0]
        co = prer[k][1]
    except KeyError:
        pre = 'No tiene prerrequisitos'
        co = 'No tiene correquisitos'
    valores = [nombreM, creditosM, restriccions, restriccionp, restriccionn, pre, co]
    materiasCompleta[codigoM] = valores
print(len(materias))
print(len(materiasRestric))
print(len(materiasCompleta))
for k, v in materiasCompleta.items():
    retornar["records"].append({'Codigo': k, 'Nombre': v[0], 'Creditos':v[1], 'RestriccionSemestre':v[2], 'RestriccionPrograma':v[3], 'RestriccionNivel':v[4], 'Prerrequisitos':v[5], 'Correquisitos':v[6]})

with open('materiasCompletas.json', "w") as f:
            f.write(str(retornar).replace('\'', '\"'))
with open("merge.json", "w") as outfile:
    json.dump({k:{'Nombre': v[0], 'Creditos':v[1], 'RestriccionSemestre':v[2], 'RestriccionPrograma':v[3], 'RestriccionNivel':v[4], 'Prerrequisitos':v[5], 'Correquisitos':v[6]} for k,v in materiasCompleta.items()}, outfile, indent=4)

