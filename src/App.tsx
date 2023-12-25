import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { UserList, UserShow, UserEdit, UserCreate } from "./user";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users" show={UserShow} list={UserList} edit={UserEdit} create={UserCreate} />
  </Admin>
);
