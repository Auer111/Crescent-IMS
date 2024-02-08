import {
  DateInput,
  Edit,
  FileInput,
  ImageField,
  SimpleForm,
  TextInput,
} from "react-admin";

export const ProgramEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <ImageField source="image.src" />
      <FileInput source="image" />
      <TextInput source="name" />
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);
