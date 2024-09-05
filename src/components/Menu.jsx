import { pizzaData } from "../data";
function Menu() {
  return (
    <div className="container menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our store oven. all organic, all delicious.
      </p>
      <ul className="pizzas">
        {pizzaData.map((item) => (
          <li
            className={`pizza ${item.soldOut ? "sold-out" : ""}`}
            key={item.name}
          >
            <img src={item.photoName} alt="images" />
            <div>
              <h3>{item.name}</h3>
              <p>{item.ingredients}</p>
              <span>
                {item.soldOut ? (
                  <span>SOLD OUT</span>
                ) : (
                  <span>{item.price}</span>
                )}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
