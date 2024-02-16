import { Create, Edit, SimpleForm, TextInput } from "react-admin";
import { Title } from "./title";

export const ProfileCreate = () => (
  <Create title={<Title />}>
    <SimpleForm>
      <TextInput source="name" defaultValue={""} />
      <TextInput source="email" defaultValue={""} />
      <TextInput source="phone" defaultValue={""} />
    </SimpleForm>
  </Create>
);
