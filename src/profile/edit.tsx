import { Edit, SimpleForm, TextInput } from "react-admin";
import { Title } from "./title";


export const ProfileEdit = () => (
  <Edit title={<Title />}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone" />
    </SimpleForm>
  </Edit>
);
