import { useCart } from "../context/cart.context";

const Counter = () => {
  const { items, count, addQuantity, decQuantity } = useCart();
  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        <span style={{ width: "60px", display: "inline-block" }}>
          <b>{/* {item.name} */}</b>
        </span>
        &nbsp;
        <span style={{ display: "inline-block", marginRight: "1rem" }}>
          {/* {item.fruit} */}
        </span>
        <button
          // onClick={() => incQty(item, 1)}
          onClick={() => addQuantity()}
        >
          +
        </button>
        <input
          style={{ width: "5%" }}
          type="text"
          readOnly
          // value={item.qty}
          value={count}
        />
        <button
          // onClick={() => decQty(item, 1)}
          onClick={() => decQuantity()}
        >
          -
        </button>
        <pre>{JSON.stringify(items)}</pre>
      </div>
    </div>
  );
};

export default Counter;
