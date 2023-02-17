import MainHeader from "./main-header";
import { HeaderContent } from "./styled";
import SubHeader from "./sub-header";


function Header(props) {
  const { setIsOnFilter, setCategory } = props;
  return (
    <HeaderContent>
      <SubHeader />
      <MainHeader setCategory={setCategory} setIsOnFilter={setIsOnFilter} />
    </HeaderContent>
  );
}
export default Header;
