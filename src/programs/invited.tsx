import {
  Datagrid,
  DateField,
  List,
  ListBase,
  RecordContextProvider,
  ShowBase,
  SimpleShowLayout,
  TextField,
  Title,
  WithListContext,
  WithRecord,
  useRecordContext,
  useShowController,
} from "react-admin";
import {
  Grid,
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

export const ProgramInvited = () => {
  const { data } = useRecordContext();
  return (
    <RecordContextProvider value={data}>
      <ShowBase>
        <div>
          <Title title="Book Show" />
          <Card>
            <SimpleShowLayout>
              <TextField label="Name" source="name" />
            </SimpleShowLayout>
          </Card>
        </div>
      </ShowBase>
    </RecordContextProvider>
  );
};
