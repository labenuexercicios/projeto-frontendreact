
    export const filterProducts = (products, minFilter,maxFilter,searchFilter) => {
    return products.filter(product => {
      const meetsMinFilter = minFilter === '' || product.value >= minFilter;
      const meetsMaxFilter = maxFilter === '' || product.value <= maxFilter;
      const meetsSearchFilter = searchFilter === '' || product.name.toLowerCase().includes(searchFilter.toLowerCase());
      return meetsMinFilter && meetsMaxFilter && meetsSearchFilter;
    });
  };

   export const sortProducts = (products, sortBy) => {
    return [...products].sort((a, b) => {
      if (sortBy === 'asc') {
        return a.value - b.value;
      } else if (sortBy === 'desc') {
        return b.value - a.value;
      } else {
        return 0;
      }
    });
  };