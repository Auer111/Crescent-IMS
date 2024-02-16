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
  Show,
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

export const ProgramInvite = () => {
  const PostEditActions = () => (
    <TopToolbar>
      <EditButton label="Edit"></EditButton>
      <EditButton
        label="Upload"
        to={`/programs/${useRecordContext()?.id}/upload`}
        icon={<AddPhotoAlternateIcon />}
      ></EditButton>
      <ShowButton></ShowButton>
    </TopToolbar>
  );

  return (
    <Show actions={<PostEditActions />} title={"Invite"}>
      <Button
        sx={{ padding: "1em", width: "100%" }}
        label="Copy Invite Link"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
        }}
      ></Button>
    </Show>
  );
};
