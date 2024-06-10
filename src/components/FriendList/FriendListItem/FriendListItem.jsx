import PropTypes from "prop-types";

import css from "./FriendListItem.module.css";

const FriendListItem = ({ image, name, isOnline }) => {
  return (
    <div>
      <img src={image} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      {isOnline ? (
        <p className={css.online}>Online</p>
      ) : (
        <p className={css.offline}>Offline</p>
      )}
    </div>
  );
};

FriendListItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
