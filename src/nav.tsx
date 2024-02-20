import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useRedirect } from "react-admin";

export const Nav = () => {
  const redirect = useRedirect();

  return (
    <BottomNavigation
      showLabels
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        borderTop: "1px solid black",
        boxShadow: "1px 11px 20px 0 black",
      }}
    >
      <BottomNavigationAction
        label="Programs"
        onClick={() => redirect("programs")}
        icon={<LocalActivityIcon />}
      />
      <BottomNavigationAction
        label="Settings"
        onClick={() => redirect("profile")}
        icon={<ManageAccountsIcon />}
      />
    </BottomNavigation>
  );
};
