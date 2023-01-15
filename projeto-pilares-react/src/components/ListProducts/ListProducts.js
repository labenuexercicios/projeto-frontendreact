import { Card } from "../CardProduct/CardProduct";

export const ListProducts = ({
  valueMin,
  valueMax,
  searchName,
  select,
  order,
  data,
  addToCart,
  addToFavorites,
  favoriteIcon,
}) => {
  return data
    .filter((elem) => {
      return elem.name.toLowerCase().includes(searchName.toLowerCase());
    })
    .filter((elem) => {
      return elem.value >= valueMin || valueMin === "";
    })
    .filter((elem) => {
      return elem.value <= valueMax || valueMax === "";
    })
    .sort((currentElem, nextElem) => {
      switch (select) {
        case "price":
          return currentElem.value - nextElem.value;
        default:
          return currentElem.name.localeCompare(nextElem.name);
      }
    })
    .sort(() => {
      if (order === "decrescente") {
        return -1;
      } else {
        return 0;
      }
    })
    .map((data) => {
      return (
        <Card
          key={data.id}
          data={data}
          addToCart={addToCart}
          addToFavorites={addToFavorites}
          favoriteIcon={favoriteIcon}
        />
      );
    });
};
