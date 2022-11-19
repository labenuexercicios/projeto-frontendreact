export const changeStringSearchStandard = (string) => {

    return string
        .trim()
        .toLowerCase()
        .replace(/[áàâäãå]/g, "a")
        .replace(/[éèêë]/g, "e")
        .replace(/[íìîï]/g, "i")
        .replace(/[óòôöõ]/g, "o")
        .replace(/[úùûü]/g, "u")
        .replace("ç","c")
        .replace(/[^\w\s]/gi, "")
  
}



