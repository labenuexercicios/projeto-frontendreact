
export function currencyBrazil(value, symbol) {
    if (!value) return null
    if (symbol) {
        return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }
    return value.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export const removeAccent = (text) => {
    text = text.toLowerCase()
    text = text.replace(/[àáâãäå]/, "a");
    text = text.replace(/[èéêë]/, "e");
    text = text.replace(/[ç]/, "c");
    text = text.replace(/[òóõôö]/, "o");
    return text
}

export const nameSector = {
    all: 'Todos Produtos',
    toys: 'Brinquedos',
    shoes: 'Tênis',
    schoolbags: 'Mochilas',
    shirts: 'Camisas',
    mugs: 'Canecas'
}

export const sortArrayAD = (array, type) => {
    switch (type) {
        case 'A':
            return array.sort((a, b) => a.price - b.price)
        case 'D':
            return array.sort((a, b) => b.price - a.price)
        case 'AZ':
            return array.sort((a, b) => removeAccent(a.name).localeCompare(removeAccent(b.name)))
        case 'ZA':
            return array.sort((a, b) => removeAccent(b.name).localeCompare(removeAccent(a.name)))
        default:
            return array
    }
}

export function searchProduct(props) {
    const [codePro, products] = props
    return products.find(e => e.code === codePro)
}


export function orderArray(type,setTypeSort) {
    setTypeSort(type)
}

export function saveCart(cart) {
    localStorage.shoppingCart = JSON.stringify(cart)
}


export const modal = (title, text,success) => {
    if(!success){ 
        swal(title, text, "error")
    } else {
        swal(title, text, "success")
    }
}
