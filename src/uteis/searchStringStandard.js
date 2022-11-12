export const changeStringSearchStandard= (string) =>{

const newString = string
.trim()
.toLowerCase()
.replace("á","a")
.replace("à","a")
.replace("â","a")
.replace("ä","a")
.replace("ã","a")
.replace("é","e")
.replace("è","e")
.replace("ê","e")
.replace("ë","e")
.replace("í","i")
.replace("ì","i")
.replace("î","i")
.replace("ï","i")
.replace("ó","o")
.replace("ò","o")
.replace("ô","o")
.replace("ö","o")
.replace("õ","o")
.replace("ú","u")
.replace("ù","u")
.replace("û","u")
.replace("ü","u")
.replace("ç","c")
.replace("ª","")
.replace("º","")
.replace("-","")

return newString
}