import { useDispatch, useSelector } from "react-redux";
import CDN_URL from "../../utils/constants";
import { addItem, removeItem } from "../../utils/cartSlice";
import { FaMinus, FaPlus } from "react-icons/fa";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  // Helper function to check if the item is in the cart
  const isItemInCart = (itemId) => {
    return cartItems.some((cartItem) => cartItem.card.info.id === itemId);
  };

  return (
    <div className="">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="px-4 m-2 border-b-2 text-left flex justify-between"
        >
          <div className="flex flex-col py-2 w-9/12">
            <span className="font-bold">{item.card.info.name}</span>
            <span>₹{item.card.info.price ? item.card.info.price / 100 : 290}</span>
            <p className="text-justify">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 m-4 p-2">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full rounded-md"
              alt={item.card.info.name}
            />

            <div className="flex justify-center items-center bg-black text-white p-2 mx-14 rounded-md shadow-lg cursor-pointer">
              {!isItemInCart(item.card.info.id) ? (
                <div
                  className="button"
                  onClick={() => handleAddItem(item)}
                >
                  Add
                </div>
              ) : (
                <div className="flex items-center justify-center gap-3 bg-black text-white rounded-md shadow-lg cursor-pointer">
                  <div
                    className="cursor-pointer"
                    onClick={() => handleRemoveItem(item)}
                  >
                    <FaMinus />
                  </div>
                  <div className="w-[10px]">
                    {/* Find the quantity of this item in the cart */}
                    {cartItems.filter(cartItem => cartItem.card.info.id === item.card.info.id).length}
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => handleAddItem(item)}
                  >
                    <FaPlus />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
