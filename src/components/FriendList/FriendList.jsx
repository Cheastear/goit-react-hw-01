import FriendListItem from "./FriendListItem/FriendListItem";

import css from "./FriendList.module.css";

import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((elem) => {
        return (
          <li key={elem.id}>
            <FriendListItem
              image={elem.avatar}
              name={elem.name}
              isOnline={elem.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
