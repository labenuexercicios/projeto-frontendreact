export const changeStringSearchStandard = (string) => {

    return string
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g,"")
  
}



