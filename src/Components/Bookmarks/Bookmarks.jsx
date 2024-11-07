import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-200 p-4 ml-4 rounded-md">
      <div className="w-full text-center border-2 rounded-lg p-2 border-purple-600 bg-[rgba(96, 71, 236, 0.1)] mb-4">
        <h3 className="text-2xl text-purple-600">
          Spent Time On Read: {readingTime}
        </h3>
      </div>

      <h2 className="text-3xl text-center">
        Bookmarked Blogs: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
