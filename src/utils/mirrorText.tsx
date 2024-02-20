import { ImageList, ImageListItem, Typography } from "@mui/material";

interface MirrorTextProps {
  text: string;
  // other props if any
}

export const MirrorText: React.FC<MirrorTextProps> = ({ text }) => {
  return (
    <>
      <Typography
        gutterBottom
        variant="h2"
        component="div"
        textAlign={"center"}
        padding={"3rem 1rem 0 1rem"}
        sx={{
          textTransform: "uppercase",
        }}
      >
        {text}
      </Typography>

      <Typography
        variant="h2"
        component="div"
        textAlign={"center"}
        sx={{
          transform: "translateY(-0.9em) rotateX(179deg);",
          marginBottom: "-1em",
          textTransform: "uppercase",
        }}
      >
        {text}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            background: `linear-gradient(
            180deg,
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 0.95) 70%,
            rgba(255, 255, 255, 0.25) 95%,
            rgba(255, 255, 255, 0) 100%
          )`,
          }}
        ></div>
      </Typography>
    </>
  );
};
