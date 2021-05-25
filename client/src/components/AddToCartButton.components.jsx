import "./AddToCardButton.components.css";

export const AddToCartButton = ({candleObj,saveOrder}) => {
    return (
        <div className="add-to-cart-btn" onClick={() => saveOrder(candleObj)}>
            ADD TO CART
        </div>
    );
}