import { Edit, SimpleForm, TextInput } from "react-admin";
import { Title } from "./title";


export const LocationEdit = () => (
  <Edit title={<Title />}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="address" />
      <TextInput source="phone" />
      <TextInput source="website" />
      <TextInput source="company" />
    </SimpleForm>
  </Edit>
);
