import { EmailField, Show, SimpleShowLayout, TextField } from "react-admin";
import { Title } from "./title";

export const ProfileShow = () => (
  <Show title={<Title />}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
    </SimpleShowLayout>
  </Show>
);
