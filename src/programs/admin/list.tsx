import { useMediaQuery, Theme } from "@mui/material";
import {
  Datagrid,
  DateField,
  ImageField,
  List,
  TextField,
  SimpleList,
  EmailField,
  ReferenceField,
  IconButtonWithTooltip,
  Show,
} from "react-admin";
import LinkIcon from "@mui/icons-material/Link";

export const ProgramList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
  return (
    <List>
      {isSmall ? (
        <SimpleList
          linkType="show"
          primaryText={(record) => record.name}
          secondaryText={(record) => record.description}
        />
      ) : (
        <Datagrid rowClick="show">
          <TextField source="name" />
          <TextField source="description" />
        </Datagrid>
      )}
    </List>
  );
};
