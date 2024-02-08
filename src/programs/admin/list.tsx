import { Datagrid, DateField, ImageField, List, TextField } from "react-admin";

export const ProgramList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="description" />
      <ImageField source="image.src" />
    </Datagrid>
  </List>
);
