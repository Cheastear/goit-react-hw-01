import PropTypes from "prop-types";

import css from "./Stats.module.css";

// eslint-disable-next-line react/prop-types
const Stats = ({ followers, views, likes }) => {
  return (
    <ul className={css.stats}>
      <li>
        <span>Followers</span>
        <span className={css["span-stat"]}>{followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span className={css["span-stat"]}>{views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span className={css["span-stat"]}>{likes}</span>
      </li>
    </ul>
  );
};

Stats.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Stats;
