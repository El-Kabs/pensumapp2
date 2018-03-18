import json
todo = {}
with open('merge.json') as json_data:
    d = json.load(json_data)
    for x in d:
        codigoM = x['Materia']
        nombreM = x['Nombre']
        creditosM = x['Creditos']
        restriccions = x['RestriccionSemestre']
        restriccionp = x['RestriccionPrograma']
        restriccionn = x['RestriccionNivel']
        pre = x['Prerrequisitos']
        co = x['Correquisitos']
        valores =  [nombreM, creditosM, restriccions, restriccionp, restriccionn, pre, co]
        todo[codigoM] = valores

with open("mergeGrande.json", "w") as outfile:
    i = 0
    for s in range (0, len(todo)):
        #json.dump(({k:{'Nombre': v[0], 'Creditos':v[1], 'RestriccionSemestre':v[2], 'RestriccionPrograma':v[3], 'RestriccionNivel':v[4], 'Prerrequisitos':v[5], 'Correquisitos':v[6]}} for k,v in todo.items()), outfile, indent=4)
        json.dump(([s: 'k'])), outfile, indent=4)
