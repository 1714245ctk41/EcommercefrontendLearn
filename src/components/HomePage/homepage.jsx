import React from "react";
import "./homepage.scss";

const HomePage = () => (
  <div className="homepage row container">
    <div className="column">
      {/* start menu-iteme */}
      <div className="menu-item ">
        <div className="content">
          <img src="images/catbox-hom4-5.jpg" alt="" />

          <div className="subtitle">
            <div className="subtitle-contain">
              <i class="fas fa-plus"></i>
              <span>
                <i>SEE NOW</i>
              </span>
            </div>
          </div>

          <h1 className="title bounce-7">ICE</h1>
        </div>
      </div>
      {/* end menu-item */}
    </div>
    <div className="column">
      {/* start menu-iteme */}
      <div className="menu-item">
        <div className="content">
          <img src="./images/backiee-106925.jpg" alt="" />

          <div className="subtitle">
            <i class="fas fa-plus"></i>
            <span>
              <i>SEE NOW</i>
            </span>
          </div>
          <h1 className="title bounce-7">DRINK</h1>
        </div>
      </div>

      <div className="subtitle-contain"> </div>
      {/* end menu-item */}
      {/* start menu-iteme */}
      <div className="menu-item">
        <div className="content">
          <img src="./images/backiee-86720.jpg" alt="" />
          <div className="subtitle">
            <div className="subtitle-contain">
              <i class="fas fa-plus"></i>
              <span>
                <i>SEE NOW</i>
              </span>
            </div>
          </div>
          <h1 className="title bounce-7">FRESH MEAT</h1>{" "}
        </div>
      </div>
      {/* end menu-item */}
    </div>
    <div className="column">
      {/* start menu-iteme */}
      <div className="menu-item">
        <div className="content">
          <img src="./images/pomegranate-400x440.jpg" alt="" />
          <div className="subtitle">
            <div className="subtitle-contain">
              <i class="fas fa-plus"></i>
              <span>
                <i>SEE NOW</i>
              </span>
            </div>
          </div>
          <h1 className="title bounce-7">JUICE</h1>{" "}
        </div>
      </div>
      {/* end menu-item */}
    </div>
    <div className="column">
      {/* start menu-iteme */}
      <div className="menu-item">
        <div className="content">
          <img src="./images/backiee-40694.jpg" alt="" />
          <div className="subtitle">
            <div className="subtitle-contain">
              <i class="fas fa-plus"></i>
              <span>
                <i>SEE NOW</i>
              </span>
            </div>
          </div>
          <h1 className="title bounce-7">BREAD</h1>{" "}
        </div>
      </div>
      {/* end menu-item */}
    </div>
  </div>
);

export default HomePage;
