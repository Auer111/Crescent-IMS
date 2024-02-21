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
  SaveButton,
  ShowButton,
  SimpleForm,
  TextInput,
  Title,
  ToggleThemeButton,
  Toolbar,
  TopToolbar,
  UpdateButton,
  useDataProvider,
  useEditContext,
  useGetOne,
  useRecordContext,
  useRedirect,
  useSaveContext,
} from "react-admin";
import { Backdrop, CircularProgress, Typography } from "@mui/material";
import { ImageUploader } from "../../utils/ImageUploader";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useEffect, useRef, useState } from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useParams } from "react-router-dom";

export const ProgramUpload = () => {
  const { id } = useParams();
  const [uploading, setIsUploading] = useState(false);
  const [fileCount, setFileCount] = useState(0);
  const redirect = useRedirect();
  const dataProvider = useDataProvider();

  const getUploadStatus = (count: number) => {
    dataProvider.getOne("programs", { id: id }).then((result) => {
      setTimeout(() => {
        getProgramData(result.data.photos.length + count);
      }, 3000);
    });
  };

  const getProgramData = (targetCount: number) => {
    dataProvider.getOne("programs", { id: id }).then((result) => {
      const currentUploads = result?.data?.photos?.length ?? 0;
      if (currentUploads < targetCount) {
        setTimeout(() => {
          getProgramData(targetCount);
        }, 3000);
      } else {
        setIsUploading(false);
        redirect(`/programs/${id}/show`);
      }
      console.log("targetCount", targetCount);
      console.log(" currentUploads:", result.data.photos.length);
    });
  };

  const PostEditActions = () => (
    <TopToolbar>
      <EditButton
        label="Invite"
        to={`/programs/${id}/invite`}
        icon={<PersonAddIcon />}
      ></EditButton>
      <EditButton label="Edit" />
      <ShowButton></ShowButton>
    </TopToolbar>
  );

  return (
    <>
      <Edit actions={<PostEditActions />} redirect="" title={"Upload"}>
        <SimpleForm
          toolbar={
            <Toolbar>
              <SaveButton
                onClick={(data) => {
                  getUploadStatus(fileCount);
                  setIsUploading(true);
                }}
                label="Upload"
              />
            </Toolbar>
          }
        >
          <ImageUploader
            source="photos"
            multiple={true}
            setFileCount={setFileCount}
          ></ImageUploader>
        </SimpleForm>
      </Edit>
      {uploading && (
        <Backdrop
          sx={{
            flexDirection: "column",
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={true} // Assuming you want it to be always open
        >
          <CircularProgress color="inherit" />
          <Typography padding={"1rem"}>Uploading</Typography>
        </Backdrop>
      )}
    </>
  );
};
