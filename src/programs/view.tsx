import {
  Datagrid,
  DateField,
  List,
  ListBase,
  TextField,
  WithListContext,
} from "react-admin";
import {
  Grid,
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

export const ProgramView = () => (

  <ListBase perPage={100}>
    <WithListContext
      render={({ data, isLoading }) =>
        !isLoading && (
          <>
            <Container sx={{ pt: 2, pb: 2 }}>
              <Grid container spacing={2}>
                {data.map((camp, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={camp.image.src}
                        alt={camp.image.name}
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
        )
      }
    />
  </ListBase>
);
