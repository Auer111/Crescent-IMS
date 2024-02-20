import {
  ArrayField,
  Button,
  Datagrid,
  DateField,
  EditButton,
  ImageField,
  List,
  Show,
  SimpleList,
  SimpleShowLayout,
  SingleFieldList,
  TextField,
  TopToolbar,
  useRecordContext,
  useShowContext,
} from "react-admin";
import { Chip } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export const ProgramShow = () => {
  const PostEditActions = () => (
    <TopToolbar>
      <EditButton
        label="Invite"
        to={`/programs/${useRecordContext()?.id}/invite`}
        icon={<PersonAddIcon />}
      ></EditButton>
      <EditButton label="Edit"></EditButton>
      <EditButton
        label="Upload"
        to={`/programs/${useRecordContext()?.id}/upload`}
        icon={<AddPhotoAlternateIcon />}
      ></EditButton>
    </TopToolbar>
  );

  return (
    <Show actions={<PostEditActions />}>
      <SimpleShowLayout>
        <ArrayField source="photos">
          <SingleFieldList empty={<div>No Images</div>}>
            <ImageField source="src" />
          </SingleFieldList>
        </ArrayField>
        <TextField source="id" />
        <ImageField source="image.src" />
        <TextField source="name" />
        <DateField source="lastupdate" />
        <TextField source="updatedby" />
        <TextField source="description" />
      </SimpleShowLayout>
    </Show>
  );
};
