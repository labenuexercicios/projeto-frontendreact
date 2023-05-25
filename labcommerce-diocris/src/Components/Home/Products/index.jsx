import { ProductsStyle, MainLineWrapper } from "./style";

export default function ProductsList({ renderList, setToOrder }) {
  return (
    <>
      <ProductsStyle>
        <MainLineWrapper>
          <div className="inline-header">
            <p>Items: {renderList.length}</p>
            <h1>The Stellar Gem Emporium</h1>
            <select
              onChange={(e) => {
                setToOrder(e.target.value);
              }}
            >
              <option>list</option>
              <option name="" id="">
                list A-Z
              </option>
              <option name="" id="">
                list Z-A
              </option>
              <option name="" id="">
                ascending
              </option>
              <option name="" id="">
                descending
              </option>
            </select>
          </div>
        </MainLineWrapper>
        {renderList}
      </ProductsStyle>
    </>
  );
}
