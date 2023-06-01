import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { HomeArticle, HomeCards, OrdenacaoSection } from "./HomeStyle";

function Home() {

  const produto1 = {
    imagem: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0cc25e2e-d94d-42eb-a44c-a0dbb83598ae/d1x0kxu-81c4653a-fd15-441a-955f-0c9a36f3deea.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBjYzI1ZTJlLWQ5NGQtNDJlYi1hNDRjLWEwZGJiODM1OThhZVwvZDF4MGt4dS04MWM0NjUzYS1mZDE1LTQ0MWEtOTU1Zi0wYzlhMzZmM2RlZWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VK8ToE-ytyT-5ZUqgX96j_iiUOt6cIFoTvQ_Xo7bJDg",
    nomeDoProduto:"Produto 1",
    valor: 10.55

  }

  const produto2 ={
    imagem:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4478bc05-6740-4374-8ef8-e740fce2a2ad/d1n877v-6cae745c-39be-4b7b-96da-2955b59682ca.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ0NzhiYzA1LTY3NDAtNDM3NC04ZWY4LWU3NDBmY2UyYTJhZFwvZDFuODc3di02Y2FlNzQ1Yy0zOWJlLTRiN2ItOTZkYS0yOTU1YjU5NjgyY2EucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nXWtEhYkda00EiwbO6fYjzLuDYxkIzZTFx_2WaPtA1g",
    nomeDoProduto:"Produto 2",
    valor: 15.00,
  }

  const produto3 = {
    imagem:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0cc25e2e-d94d-42eb-a44c-a0dbb83598ae/d23too7-87cadebf-c3c1-4026-867c-a04f577b6703.png/v1/fill/w_100,h_100,q_80,strp/free_red_panda_icon_100x100_2_by_supertuffpinkpuff_d23too7-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwIiwicGF0aCI6IlwvZlwvMGNjMjVlMmUtZDk0ZC00MmViLWE0NGMtYTBkYmI4MzU5OGFlXC9kMjN0b283LTg3Y2FkZWJmLWMzYzEtNDAyNi04NjdjLWEwNGY1NzdiNjcwMy5wbmciLCJ3aWR0aCI6Ijw9MTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.749OdiscvcX3htZlSlpKIUi6QPhjcW2DpBaxB0rDwww",
    nomeDoProduto:"Produto 1",
    valor: 80.00
  }

  return (
    <HomeArticle>
      <OrdenacaoSection>
        <div>Quantidade de produtos:</div>
        <div>
          <label>Ordenação</label>
          <select>
            <option value="">Opções</option>
          </select>
        </div>
      </OrdenacaoSection>

      <HomeCards>
        <ProductCard 
        image={produto1.imagem}
        nomeDoProduto={produto1.nomeDoProduto}
        valor={produto1.valor}
        />
        <ProductCard 
        image={produto2.imagem}
        nomeDoProduto={produto2.nomeDoProduto}
        valor={produto2.valor}
        />
        <ProductCard 
        image={produto3.imagem}
        nomeDoProduto={produto3.nomeDoProduto}
        valor={produto3.valor}
        />
      </HomeCards>
    </HomeArticle>
  );
}

export default Home;
