import { Typography, Breadcrumbs } from "@mui/material";
import {
  CreateButton,
  ListBase,
  WithListContext,
  useRecordContext,
} from "react-admin";
import { Grid, useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { buildNestedStructure } from "../utils/data";

export const LocationList = () => {
  const theme = useTheme();
  const [path, setPath] = useState([""]);
  const [pathName, setPathName] = useState(["Camp"]);

  const handleBreadcrumbClick = (index: number) => {
    setPath(path.slice(0, index + 1));
    setPathName(pathName.slice(0, index + 1));
  };

  return (
    <ListBase perPage={100}>
      <WithListContext
        render={({ data, isLoading }) =>
          !isLoading && (
            <>
              <Grid container spacing={2} sx={{ px: 2 }}>
                {buildNestedStructure(data, "id", "parent_id")[0]
                  ["children"].sort((a: any, b: any) =>
                    a.name.localeCompare(b.name)
                  )
                  .map((i: any, index: any) => (
                    <Grid item xs={12} md={4} key={index}>
                      <Paper
                        onClick={() => {
                          setPath([...path, i.id.toString()]);
                          setPathName([...pathName, i.name]);
                        }}
                        elevation={3}
                        sx={{ p: 2, cursor: "pointer" }}
                      >
                        {i.name}
                      </Paper>
                    </Grid>
                  ))}
              </Grid>
            </>
          )
        }
      />
    </ListBase>
  );
};
