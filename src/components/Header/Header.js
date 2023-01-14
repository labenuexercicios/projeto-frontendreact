import React from "react";
import { HeaderContainer } from "./Header.styled";
import { Button } from "@material-ui/core";
// import ShoppingCartIcon from '@material-ui/icons-material/ShoppingCart';
// import HomeIcon from '@material-ui/icons-material/HomeIcon';

const Header = (props) => {
  const { goToCartPage, goToHomePage } = props;
  const [isHomePage, setIsHomePage] = React.useState(true);

  const changeButtonPage = () => {
    if (props.currentPage == "HomePage") setIsHomePage(true);
    else setIsHomePage(false);

    console.log("isHomePage", isHomePage);
  };

  React.useEffect(() => {
    changeButtonPage();
    // setCurrentPage(props.currentPage);
    console.log("currentPage", props.currentPage);
  });

  return (
    <HeaderContainer>
      <h1>{props.title}</h1>

      {isHomePage ? (
        <Button color="primary" variant="contained" onClick={goToCartPage}>
          Carrinho
          {/* <ShoppingCartIcon/> */}
        </Button>
      ) : (
        <Button color="primary" variant="contained" onClick={goToHomePage}>
          Home
          {/* <HomeIcon/> */}
        </Button>
      )}
    </HeaderContainer>
  );
};
export default Header;
