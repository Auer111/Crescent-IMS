import {
  Create,
  DateInput,
  Edit,
  FileInput,
  ImageField,
  SimpleForm,
  TextInput,
} from "react-admin";

export const ProgramCreate = () => (
  <Create>
    <SimpleForm>
      <FileInput source="image" />
      <TextInput source="name" />
      <TextInput source="description" />
    </SimpleForm>
  </Create>
);
