import { EmailField, Show, SimpleShowLayout, TextField } from "react-admin";
import { Title } from "./title";

export const LocationShow = () => (
  <Show title={<Title />}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address" />
      <TextField source="phone" />
      <TextField source="website" />
      <TextField source="company" />
    </SimpleShowLayout>
  </Show>
);
