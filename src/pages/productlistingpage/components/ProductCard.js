import "./ProductCard.css";
import {useCart} from "../../../index";
import {Link} from "react-router-dom";

function ProductCard({product}){
    const {cartDispatch,itemsInCart,items_count} = useCart();
    const {title,price,imageLink,_id} = product;
    return(
        <div className="product-card">
            <div className="product-card-header">
                <img className="hero-img " src={imageLink} alt="product" />
                <div className="content ">
                    <h2 className="hero-heading ">{title}</h2>
                    <h4 className="price">{price} Rupees</h4>
                </div>
            </div>
            <div className="product-card-footer">
            {
            itemsInCart.some(item => item._id === _id) && items_count>0  ?
            (<Link to="/cart"><button className="btn-go-to-cart">Go to cart</button></Link>):
            (<button className="btn-add-to-cart" onClick={()=>cartDispatch({type:"ADD_TO_CART",payload:product})}>add to cart</button>)
            }
            <button className="btn-buy-now">Buy now</button>
            </div>
        </div>
    );
}

export {ProductCard};