function Header (props){

    const {countCartItems} = props;
return (

<div className="header">
    <div>
         <h2 className="tituloHeader">Bem-vindo(a) a sua loja espacial!</h2>
        
    </div>
<div className="linkBag"> 
    <a className="link" href="#/cart">Itens diferentes no carrinho: 
     {countCartItems ? (
    <button className="badge">{countCartItems}</button>) : (
        ''
    )}
    </a> {''}
 
</div>
</div>


);
}

export default Header;