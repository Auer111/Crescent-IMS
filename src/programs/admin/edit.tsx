import {
  AddItemButton,
  Button,
  DateInput,
  Edit,
  EditButton,
  FileInput,
  IconButtonWithTooltip,
  ImageField,
  ImageInput,
  ShowButton,
  SimpleForm,
  TextInput,
  Title,
  ToggleThemeButton,
  TopToolbar,
  UpdateButton,
  useRecordContext,
} from "react-admin";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { ImageUploader } from "../../utils/ImageUploader";

export const ProgramEdit = () => {
  const PostEditActions = () => (
    <TopToolbar>
      <EditButton
        label="Invite"
        to={`/programs/${useRecordContext()?.id}/invite`}
        icon={<PersonAddIcon />}
      ></EditButton>
      <EditButton
        label="Upload"
        to={`/programs/${useRecordContext()?.id}/upload`}
        icon={<AddPhotoAlternateIcon />}
      />
      <ShowButton></ShowButton>
    </TopToolbar>
  );

  return (
    <Edit actions={<PostEditActions />} redirect="show" title="Edit">
      <SimpleForm>
        <TextInput source="id" disabled={true} />
        <ImageInput source={"image"} multiple={false} />
        <TextInput source="name" />
        <TextInput source="description" />
      </SimpleForm>
    </Edit>
  );
};
