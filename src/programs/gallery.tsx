import { ImageList, ImageListItem, Typography } from "@mui/material";
import { Loading, useDataProvider, useGetOne, useRedirect } from "react-admin";
import { useParams } from "react-router-dom";
import { MirrorText } from "../utils/mirrorText";

export const ProgramGallery = () => {
  const { id } = useParams();
  const redirect = useRedirect();

  const { data, isLoading } = useGetOne("programs", { id });
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <MirrorText text="Gallery"/>
      <ImageList variant="masonry" cols={3} gap={8}>
        {data.photos.map((item: any, index: number) => (
          <ImageListItem key={index}>
            <img
              srcSet={`${item.src}`}
              src={`${item.src}`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};
