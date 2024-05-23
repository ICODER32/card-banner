/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Card = ({
  // eslint-disable-next-line react/prop-types
  title_text,
  center_text,
  image_game,
  image_android,
  image_Trophy,
  image_coin,
}) => {
  return (
    <>
      <div className="card">
        <div className="first">
          <div className="gameLogo">
            <img src={image_game} alt="" width={100} />
          </div>
          <div className="android">
            <img src={image_android} alt="" width={30} />
          </div>
        </div>
        <div className="second">
          <div className="heading">
            <h1 className="poppins-bold">{title_text}</h1>
          </div>
          <div className="level">
            <p className="poppins-semibold">{center_text}</p>
          </div>
          <div>
            <button>
              <img src={image_Trophy} alt="" width={20} />{" "}
              <span className="poppins-semibold">Multi Reward</span>
            </button>
          </div>
        </div>
        <div className="third">
          <div>
            <img src={image_coin} alt="" width={30} />
          </div>
          <div>
            <p className="poppins-bold">3037</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
