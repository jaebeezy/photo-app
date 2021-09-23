import styled from "styled-components";

const PhotoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  justify-items: center;
  width: 100%;
  height: 80vh;
  overflow-x: auto;
  user-select: none;

  img {
    padding: 10px 2px;

    :hover {
      transform: scale(1.05);
    }
  }

  .wrapper {
    position: relative;
  }

  .info {
    position: absolute;
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
    opacity: 0;
    transition: 0.5s ease;

    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      opacity: 1;
    }

    a {
      cursor: pointer;
      font-size: 1em;
      font-weight: bold;
      text-decoration: none;
      color: black;
    }
  }
`;

const Photos = ({ photos }) => {
  if (photos && photos.length === 0) {
    // if photo array is empty
    return (
      <div>
        <h1>No photos 📷 found.</h1>
        <h1>Please try again. 🤠</h1>
      </div>
    );
  } else {
    return (
      <PhotoContainer>
        {photos.map((photo) => (
          <div className="wrapper" key={photo.id}>
            <img src={photo.src.medium} loading="lazy" alt={photo.url}></img>
            <div
              className="info"
              style={{ backgroundColor: `${photo.avg_color}` }}
            >
              <a
                href={`${photo.photographer_url}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                Photo by {photo.photographer}
              </a>
            </div>
          </div>
        ))}
      </PhotoContainer>
    );
  }
};

export default Photos;
