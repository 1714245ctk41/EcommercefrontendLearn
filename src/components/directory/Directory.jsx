import React, { Component } from "react";
import "./Directory.scss";
import MenuItem from "../menuItem/MenuItem";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "VEGETABLE",
          imageUrl: "./images/catbox-hom4-5.jpg",
          id: 1,
          linkUrl: "vegetable",
        },
        {
          title: "DRINK",
          imageUrl: "./images/backiee-106925.jpg",
          id: 2,
          linkUrl: "drink",
        },
        {
          title: "FRESH MEAT",
          imageUrl: "./images/backiee-86720.jpg",
          id: 3,
          linkUrl: "fresh meat",
        },
        {
          title: "JUICE",
          imageUrl: "./images/8f5ab40639f89696abb7b832b91d61fa.jpg",
          id: 4,
          linkUrl: "juice",
        },
        {
          title: "BREAD",
          imageUrl: "./images/ca6e631267ddae063a54a0918607fb5e.jpg",
          id: 1,
          linkUrl: "bread",
        },
      ],
    };
  }
  render() {
    return (
      <div className="row">
        <section id="photos">
          {this.state.sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))}
        </section>
      </div>
    );
  }
}

export default Directory;
