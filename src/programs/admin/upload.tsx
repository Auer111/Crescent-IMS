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
import { ImageUploader } from "../../utils/ImageUploader";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useState } from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export const ProgramUpload = () => {
  const PostEditActions = () => (
    <TopToolbar>
      <EditButton
        label="Invite"
        to={`/programs/${useRecordContext()?.id}/invite`}
        icon={<PersonAddIcon />}
      ></EditButton>
      <EditButton label="Edit" />
      <ShowButton></ShowButton>
    </TopToolbar>
  );

  return (
    <Edit actions={<PostEditActions />} redirect="show" title={"Upload"}>
      <SimpleForm>
        <ImageUploader></ImageUploader>
      </SimpleForm>
    </Edit>
  );
};
