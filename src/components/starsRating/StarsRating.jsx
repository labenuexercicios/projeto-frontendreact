import { StarsStyled } from "./Style";

export function StarsRating(props) {
  let stars;
  switch (props.rating) {
    case 0:
      stars = "☆☆☆☆☆";
      break;
    case 1:
      stars = "★☆☆☆☆";
      break;
    case 2:
      stars = "★★☆☆☆";
      break;
    case 3:
      stars = "★★★☆☆";
      break;
    case 4:
      stars = "★★★★☆";
      break;
    case 5:
      stars = "★★★★★";
      break;
  }
  return <StarsStyled>{stars}</StarsStyled>;
}
