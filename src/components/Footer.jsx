function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const CloseHour = 22;
  const isOpen = hour >= openHour && hour <= CloseHour;

  return (
    <footer className="footer container">
      {isOpen ? (
        <div className="order">
          <p>We're open until {CloseHour}:00. Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 to {CloseHour}:00
        </p>
      )}
    </footer>
  );
}

export default Footer;
