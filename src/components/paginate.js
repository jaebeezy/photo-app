import axios from "axios";
import { config } from "../services/pexels";

const Paginate = ({ pageData, setPhotos, setPageData }) => {
  const nextPageSubmit = async () => {
    // handler function to move on to the next page of photos
    try {
      const nextPagePhotos = await axios.get(pageData.next_page, config);
      if (nextPagePhotos.status === 200) {
        setPhotos(nextPagePhotos.data.photos);
        setPageData(nextPagePhotos.data);
      }
    } catch (error) {
      if (error.response.status === 429) {
        console.log("too many requests!");
      }
    }
  };

  const prevPageSubmit = async () => {
    // handler function to move to the prev page of photos
    try {
      const prevPagePhotos = await axios.get(pageData.prev_page, config);
      if (prevPagePhotos.status === 200) {
        setPhotos(prevPagePhotos.data.photos);
        setPageData(prevPagePhotos.data);
      }
    } catch (error) {
      if (error.response.status === 429) {
        console.log("too many requests!");
      }
    }
  };

  // conditional rendering for pagination
  if (pageData.next_page === undefined && pageData.prev_page === undefined) {
    // if next_page and prev_page key does not exist, no pagination needed
    return null;
  } else if (pageData.page === 1) {
    // when user is on the first page
    return (
      <div>
        <button onClick={nextPageSubmit}>next page</button>
      </div>
    );
  } else if (pageData.next_page === undefined && pageData.prev_page) {
    // when user is on the last page
    return (
      <div>
        <button onClick={prevPageSubmit}>prev page</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={prevPageSubmit}>prev page</button>
        <button onClick={nextPageSubmit}>next page</button>
      </div>
    );
  }
};

export default Paginate;
