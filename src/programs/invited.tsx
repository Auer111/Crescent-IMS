import {
  Datagrid,
  DateField,
  List,
  ListBase,
  Loading,
  RecordContext,
  RecordContextProvider,
  Show,
  ShowBase,
  SimpleShowLayout,
  TextField,
  Title,
  WithListContext,
  WithRecord,
  useDataProvider,
  useGetOne,
  useRecordContext,
  useRedirect,
  useResourceContext,
  useShowContext,
  useShowController,
} from "react-admin";
import {
  Grid,
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { Profile } from "../profile/profile";
import { useState } from "react";

interface ProgramInvitedProps {
  profile: Profile;
  // other props if any
}

export const ProgramInvited: React.FC<ProgramInvitedProps> = ({ profile }) => {
  const { id } = useParams();
  const redirect = useRedirect();
  const dataProvider = useDataProvider();
  const { data, isLoading } = useGetOne("programs", { id });
  if (isLoading) {
    return <Loading />;
  }

  const addProgram = () => {
    if (!profile.programs) {
      profile.programs = [];
    }
    if (!profile.programs.includes(id!)) {
      profile.programs.push(id!);

      dataProvider
        .update("profiles", {
          id: profile.id,
          data: { programs: profile.programs },
          previousData: profile,
        })
        .then((response) => {
          redirect("/programs");
        })
        .catch((error) => {
          redirect("/error");
        });
    } else {
      redirect("/programs");
    }
  };

  return (
    <div style={{ display: "grid", placeContent: "center", height: "100vh" }}>
      <Title title="Book Show" />
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Your invited to join
          </Typography>
          <Typography variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2">{data.description}</Typography>
        </CardContent>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={addProgram}>Accept Invitation</Button>
        </div>
      </Card>
    </div>
  );
};
