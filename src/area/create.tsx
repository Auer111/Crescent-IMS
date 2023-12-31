import {
  Create,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { Title } from "./title";

export const AreaCreate = () => (
  <Create title={<Title />}>
    <SimpleForm>
      <TextInput source="name" defaultValue={""} />
      <TextInput sx={{ visibility: "hidden" }} source="parent" />
    </SimpleForm>
  </Create>
);
