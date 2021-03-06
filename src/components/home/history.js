import React from "react";
import { Grid } from "@mui/material";
import Slider from "react-slick";
import HistoryItem from "../HistoryItem";

class History extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      delay: 0,
      slidesToShow: 3,
      slidesToScroll: 1,
      padding: "1rem",
      autoplay: true,
      speed: 500,
      centerMode: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            centerMode: false,
            slidesToShow: 1,
          },
        },
      ],
    };
    const { cat, posts } = this.props;
    return (
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <div className="title mb-2">
            {cat.acf && cat.acf.tag && <div className="tag">{cat.acf.tag}</div>}
            <h1>{cat.name}</h1>
          </div>
          {posts && posts.length > 0 && (
            <Slider {...settings}>
              {posts.map((post) => (
                <HistoryItem post={post} key={post.id} />
              ))}
            </Slider>
          )}
          <div
            className="icon-scroll-down"
            onClick={() => this.props.handleChange(4)}
          >
            <span>Scroll down</span>
            <img src="/images/arrow-down.gif" alt="arrow down" />
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default History;
