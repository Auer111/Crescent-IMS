import { Create, Edit, SimpleForm, TextInput } from "react-admin";
import { Title } from "./title";

export const UserCreate = () => (
  <Create title={<Title />}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="address.street" />
      <TextInput source="phone" />
      <TextInput source="website" />
      <TextInput source="company.name" />
    </SimpleForm>
  </Create>
);
