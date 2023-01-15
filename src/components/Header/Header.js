export default function Header (props){
    const {countItems} = props
    
    return (
        <div class='row center block'>
            <div>
                <a href="#/">
                    <h2>Promoção de Satelites Antigos</h2>
                </a>
            </div>
            <div>
                <a href="#/cart">Cart
                {countItems ? <button class='badge'>{countItems}</button>:''}
                </a>
            </div>
        </div>
        
    );
}