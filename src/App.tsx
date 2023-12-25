import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  Login,
} from "react-admin";
import { UserList, UserShow, UserEdit, UserCreate } from "./user";
import { dataProvider } from "./dataProvider";
//import { authProvider } from "./authProvider";
import { initGoogleAuthProvider } from "ra-auth-google";

export const App = () => {
  const { authProvider, LoginButton } = initGoogleAuthProvider({
    client_id:
      "607651373773-1nqoimeotqogj47ne7qu0eam7hgns5fh.apps.googleusercontent.com",
  });

  const LoginPage = () => (
    <Login backgroundImage="radial-gradient(#ffffff, #929292) !important">
      <LoginButton theme="filled_black" />
    </Login>
  );

  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={LoginPage}
    >
      <Resource
        name="users"
        show={UserShow}
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
      />
    </Admin>
  );
};
