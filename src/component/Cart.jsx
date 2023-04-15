import { useState, useEffect } from "react";
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';


const Cart = (props) => {

    const { store, removeOfStore } = props
    const itemPrice = store.reduce((a, c) => a + c.price * c.qty, 0)
    const totalPrice = itemPrice

    return (
        <div>
            {
                store.length === 0 ?
                    <div className="empty-price">سبد خرید خالی است</div> :
                    <div className="show-price">شما {store.length} محصول در سبد خرید دارید</div>
            }
            <div className="cart-item">
                {
                    store.map((p) =>
                        <Bounce left>
                            <div className="product-item" key={p.id}>
                                <div className="product-detail">
                                    <img src={p.image} alt="" />
                                    <p>{p.title}</p>
                                </div>
                                <div className="product-price">
                                    <div className="price">
                                        <span>{p.price}</span>
                                        <span className="qty">{p.qty} خرید</span>
                                    </div>
                                    <div className="remove-item">
                                        <button onClick={() => removeOfStore(p)}>حذف از سبد</button>
                                    </div>
                                </div>
                            </div>
                        </Bounce>

                    )
                }
            </div>
            <div className="total-price">
                <span>مجموع قیمت: </span>
                <span className="end-price">{totalPrice} تومان</span>
            </div>
        </div>
    );
}

export default Cart;