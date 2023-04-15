import Fade from 'react-reveal/Fade';


const Products = (props) => {
    const FormatCurrency = (num) => {
        return Number(num.toFixed(3)).toLocaleString() + ' تومان'
    }

    return (
        <div className="products">
            <Fade bottom cascade>
                <ul>
                    {
                        props.item.map((item) =>
                            <li key={item.id}>
                                <div className="product">
                                    <img src={item.image} alt="" />
                                    <p>{item.title}</p>
                                    <div className="product-price">
                                        <button onClick={() => props.addToStore(item)}>افزودن به سبد خرید</button>
                                        <div className="price">{FormatCurrency(item.price)}</div>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </Fade>

        </div>
    );
}

export default Products;