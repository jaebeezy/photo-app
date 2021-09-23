import { useEffect, useState } from "react";
import Head from "next/head";

// data fetching
import axios from "axios";
import { config, searchPhotos } from "../services/pexels";

// react components
import Search from "../components/search";
import Paginate from "../components/paginate";
import Photos from "../components/photos";
import Header from "../components/header";
import Footer from "../components/footer";

// styling
import { GlobalStyle } from "../styles/global";
import { LoadingAnimation, ViewingArea } from "../styles/styles";

const App = (props) => {
  const [pageData, setPageData] = useState({}); // paginating data
  const [photos, setPhotos] = useState([]); // photo array
  const [search, setSearch] = useState(""); // search bar content
  const [loading, setLoading] = useState(false); // loading animation

  useEffect(() => {
    // grabbing the curated photos on initial render
    setPhotos(props.value.photos);
    setPageData(props.value);
  }, [props.value]);

  const onFormSubmit = async (e) => {
    // handling form submit for search function
    e.preventDefault();
    setSearch("");

    setLoading(true);
    const searchedPhotos = await searchPhotos(search);
    setPageData(searchedPhotos);
    setPhotos(searchedPhotos.photos);
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Pexels Photo Search</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStyle />
      <Header />
      <Search
        search={search}
        setSearch={setSearch}
        onFormSubmit={onFormSubmit}
      />
      {loading ? (
        <LoadingAnimation />
      ) : (
        <ViewingArea>
          <Photos photos={photos} />
          <Paginate
            pageData={pageData}
            setPageData={setPageData}
            setPhotos={setPhotos}
          />
        </ViewingArea>
      )}
      <Footer />
    </>
  );
};

export const getServerSideProps = async () => {
  // built-in next.js method for ssr
  let response;
  try {
    response = await axios.get("v1/curated?per_page=10", config);
  } catch (err) {
    console.log(err);
    // error handling
    response = { data: { photos: [] } };
  }

  return {
    // returning the server side rendered data as a prop
    props: {
      value: response.data,
    },
  };
};

export default App;
