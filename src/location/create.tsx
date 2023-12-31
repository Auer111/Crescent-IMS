import {
  Create,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { Title } from "./title";

export const LocationCreate = () => (
  <Create title={<Title />}>
    <SimpleForm>
      <TextInput source="name" defaultValue={""} />
      <TextInput sx={{ visibility: "hidden" }} source="parent" />
      <ReferenceInput source="location_parent_id" reference="locations" />
    </SimpleForm>
  </Create>
);
