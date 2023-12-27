import { Create, Edit, SimpleForm, TextInput } from "react-admin";
import { Title } from "./title";

export const UserCreate = () => (
  <Create title={<Title />}>
    <SimpleForm>
      <TextInput source="name" defaultValue={""} />
      <TextInput source="username" defaultValue={""} />
      <TextInput source="email" defaultValue={""} />
      <TextInput source="address" defaultValue={""} />
      <TextInput source="phone" defaultValue={""} />
      <TextInput source="website" defaultValue={""} />
      <TextInput source="company" defaultValue={""} />
    </SimpleForm>
  </Create>
);
