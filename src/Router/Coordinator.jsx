export const goToHome = (navigate) => {
  navigate(`/`);
};

export const goToProducts = (navigate, searchInput, idCategory) => {
  navigate(`/products/${searchInput}/${idCategory}`);
};

export const goToProduct = (navigate, idProduct) => {
  navigate(`/product/${idProduct}`);
};
