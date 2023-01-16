import { Card } from "../CardProduct/CardProduct";
export const Favorites = ({
  data,
  addToCart,
  addToFavorites,
  favoriteIcon,
  favorites,
}) => {
  return favorites.map((elem) => {
    return (
      <div key={elem.id}>
        <Card
          data={elem}
          addToCart={addToCart}
          addToFavorites={addToFavorites}
          favoriteIcon={favoriteIcon}
        />
      </div>
    );
  });
};
