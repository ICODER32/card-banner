import Card from "./components/Card";
import * as images from "./assets/images";

function App() {
  return (
    <>
      <div className="screen">
        <Card
          title_text={"Head Ball 2"}
          center_text={"Complete Level 5, 10, 15, 30 and 50!"}
          image_game={images.banner}
          image_android={images.android}
          image_Trophy={images.trophy}
          image_coin={images.coin}
        />
      </div>
    </>
  );
}

export default App;
