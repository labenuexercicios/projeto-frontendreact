export const goToProducts = (navigate, searchInput, idCategory) => {
  navigate(`/products/${searchInput}/${idCategory}`);
};

export const goToHome = (navigate) => {
  navigate(`/`);
};
