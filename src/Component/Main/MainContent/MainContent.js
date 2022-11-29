import "./MainContent.css";
import databiz from "../../../images/client-databiz.svg";
import audiophile from "../../../images/client-audiophile.svg";
import meet from "../../../images/client-meet.svg";
import maker from "../../../images/client-maker.svg";

const MainContent = () => {
  return (
    <div className="main_content">
      <div>
        <h1 className="title">Make remote work</h1>
      </div>
      <p className="text">
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <button className="btn">Learn more</button>
      <div className="clients">
        <img src={databiz} alt="databiz" />
        <img src={audiophile} alt="audiophile" />
        <img src={meet} alt="meet" />
        <img src={maker} alt="maker" />
      </div>
    </div>
  );
};

export default MainContent;
