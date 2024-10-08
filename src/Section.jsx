import { useDispatch, useSelector } from "react-redux";
import { addCart, deleteCart } from "./Slice/productSlice/productSlice";
import { useNavigate } from "react-router-dom";

const Section = ({ title, product }) => {
  const { cart } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const getItemCount = (itemName) => {
    return cart[itemName]?.count || 0; 
  };

  return (
    <div className="border rounded m-3 px-3 pt-1 pb-0">
      <h2 className="p-2">{title}</h2>
      <div className="scrollbar d-flex mb-2 pb-2 gap-3 overflow-scroll">
        {product.map((item, index) => (
          <div key={`${item.id}-${index}`} className="border rounded text-center overflow-hidden" style={{ minWidth: "300px" }}>
            <div className="w-100 bg-secondary mb-0" style={{ height: "200px" }}></div>
            <div className="p-2">
              <h3 className="d-flex justify-content-center align-items-center" style={{ minHeight: "65px" }}>
                {item.name}
              </h3>
              <p className="d-flex justify-content-center align-items-center mb-0" style={{ maxHeight: "50px", minHeight: "50px" }}>
                {item.description}
              </p>
              <h5 className="p-2">
                <span className="px-1">&#36;</span>
                {item.rate}
              </h5>
              {getItemCount(item.name) === 0 ? (
                <button className="btn btn-primary w-100" onClick={() => {dispatch(addCart({ name: item.name, rate: item.rate }))}}>Add to Cart</button>
              ) : (
                <div className="w-100 d-flex justify-content-center gap-2">
                  <button className="btn border btn-light" onClick={() => {dispatch(addCart({ name: item.name, rate: item.rate }))}}>+</button>
                  <button className="btn border btn-light flex-grow-1" onClick={()=>{navigate('/cart')}}>View Cart</button>
                  <button className="btn border btn-light" onClick={() => {dispatch(deleteCart({ name: item.name }))}}>-</button>
                </div>
              )}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Section;
