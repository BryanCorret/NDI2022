import json
def que_des_minuscule(texte):
    """Méthode pour transformé toutes les
    chaine de carractère en une seule compréhensible
    en retirant tout les carractères spécifiques

    Args:
        texte (_type_): _description_
        taille_bloc (int, optional): _description_. Defaults to 5.

    Returns:
        _type_: _description_
    """
    # remplace les caracteres accentues, supprime les espaces et la ponctuation
    # renvoie une chaine de lettres majuscules
    chaine = ""
    i=0  # tient le compte des lettres du message transforme
    texte = texte.lower()
    for c in texte:
        if c in ("ä","à","â"):
            chaine += "a"
        elif c in ("é","è","ë","ê"):
            chaine += "e"
        elif c in ("î","ï"):
            chaine += "i"
        elif c in ("ô","ö"):
            chaine += "o"
        elif c in ("ü","û","ù"):
            chaine += "u"
        elif c == "ç":
            chaine += "c"
        elif c in ("'","’"):
            chaine += " "
        else:   # on ne tient pas compte du caractere lu
            chaine+=c
    return chaine

def recupfichier():
    file = open('Data/sql-pays.csv', "r")
    tous_les_pays = file.readlines()
    file.close()
    dico_pays={}
    for pays in tous_les_pays:
        pays=pays.split(',')
        dico_pays[pays[4].replace('"',"")]=pays[2].replace('"',"")
    file = open('Data/API_SH.HIV.0014_DS2_fr_csv_v2_4523404.csv', "r")
    lignes = file.readlines()
    file.close()
    debut=0
    pays_nb_cas_VIH_par_annee = {}
    liste_exemple =[]
    for ligne in lignes:
        if debut==4:
            liste_exemple = ligne.split(',')
        if debut>4:
            ligne = ligne.split(',')
            dico_annee_cas ={}
            if ligne[0].replace('"',"") in dico_pays.keys():
                for i in range(4,len(ligne)-1):
                    if ligne[i].replace('"',"") == '':
                        dico_annee_cas[int(liste_exemple[i].replace('"',""))]= 0
                    else:
                        dico_annee_cas[int(liste_exemple[i].replace('"',""))]= int(ligne[i].replace('"',""))
                print(ligne[0].replace('"',""))
                pays_nb_cas_VIH_par_annee[dico_pays[ligne[0].replace('"',"")]]=dico_annee_cas
        else:
            debut+=1
    with open('detailsData.json', 'w') as mon_fichier_donnée:
  	    json.dump(pays_nb_cas_VIH_par_annee, mon_fichier_donnée)
recupfichier()
