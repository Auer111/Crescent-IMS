import { useMediaQuery, Theme } from "@mui/material";
import { ListBase, WithListContext } from "react-admin";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";

const filter = "";
export const AreaList = () => (
  <ListBase>
    <WithListContext
      render={({ data, isLoading }) =>
        !isLoading && (
          <Grid container spacing={2}>
            {data
              .filter((i) => i.parent === filter)
              .map((i, index) => (
                <Grid item xs={4} key={index}>
                  <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
                    {i.name}
                  </Paper>
                </Grid>
              ))}
          </Grid>
        )
      }
    />
  </ListBase>
);
