import {
  Datagrid,
  DateField,
  List,
  ListBase,
  Loading,
  TextField,
  WithListContext,
  useGetMany,
  useRedirect,
} from "react-admin";
import {
  Grid,
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { Profile } from "../profile/profile";
import { MirrorText } from "../utils/mirrorText";

interface ProgramCollectionProps {
  profile: Profile;
  // other props if any
}

export const ProgramCollection: React.FC<ProgramCollectionProps> = ({
  profile,
}) => {
  const redirect = useRedirect();
  const { data, isLoading, error, refetch } = useGetMany("programs", {
    ids: profile.programs,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <MirrorText text="Programs" />
      <Container sx={{ pt: 2, pb: 2 }}>
        <Grid container spacing={2}>
          {data!
            ?.filter((camp) => camp.name)
            .map((camp, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  onClick={() => redirect(camp.id)}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={camp?.image?.src}
                    alt={camp?.image?.name}
                    sx={{ width: "8em", height: "8em" }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {camp.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {camp.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};
