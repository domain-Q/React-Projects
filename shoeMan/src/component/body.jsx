export default function Body() {
  return (
    <div className="container">
      <div className="left">
        <h1>YOUR FEET DESERVE THE BEST </h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO 
          HELP YOU WITH OUR SHOES.YOUR FEET DESERVE 
          THE BEST AND WE’RE HERE TO HELP YOU WITH OUR 
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop now</button>
          <button className="second-btn">Categories</button>
        </div>
        <div className="available-on">
          <p>Also available on</p>
          <div className="brand-icons">
            <img src="./images/flipkart.png" alt="flipkart " />
            <img src="./images/amazon.png" alt="flipkart " />
          </div>
        </div>
      </div>

      <div className="right">
        <img src="./images/shoe_image.png" alt="" />
      </div>
    </div>
  );
}
