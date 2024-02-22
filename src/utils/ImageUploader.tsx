import React, { useState } from "react";
import { ImageInput, ImageField } from "react-admin";
import EventMonitor, { FileEvent } from "./EventMoniter";
import { LinearProgress, Typography } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

interface ImageUploaderProps {
  source: string;
  multiple: boolean;
  setFileCount: (count: number) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  source,
  multiple,
  setFileCount,
}) => {
  const [previews, setPreviews] = useState<
    Array<{ src: string; title: string; uploadPercentage: number }>
  >([]);

  const handleFilesSelected = (files: File[]) => {
    // Generate preview URLs for selected files
    const newPreviews = files.map((file) => ({
      src: URL.createObjectURL(file), // Generate preview URL
      title: file.name, // Use filename as title
      uploadPercentage: 0,
    }));
    setPreviews(newPreviews);
    setFileCount(files.length);
  };

  const updateUploadProgress = (fileName: string, uploadPercentage: number) => {
    setPreviews((prevPreviews) =>
      prevPreviews.map((preview) =>
        preview.title === fileName ? { ...preview, uploadPercentage } : preview
      )
    );
  };

  console.log(previews);

  return (
    <div>
      <EventMonitor
        uploadCompleteEventHandler={(event: FileEvent) => {
          updateUploadProgress(event.detail.fileName, 100);
        }}
        uploadProgressEventHandler={(event: FileEvent) => {
          updateUploadProgress(
            event.detail.fileName,
            parseInt(event?.detail?.data ?? "") || 0
          );
        }}
      />
      {previews.length > 0 &&
      previews.every((p) => p.uploadPercentage === 100) ? (
        <Typography variant="h3" style={{ color: "GrayText" }}>
          Upload Complete
        </Typography>
      ) : (
        <ImageInput
          source={source}
          multiple={multiple}
          options={{
            onDropAccepted: handleFilesSelected,
          }}
        />
      )}
      {/* Render image previews */}
      <div style={{ display: "flex" }}>
        {previews.map((preview, index) => (
          <div key={index}>
            <ImageField
              key={index}
              record={preview}
              source="src"
              title={preview.title}
              className="ImageField"
            />
            {preview.uploadPercentage < 100 ? (
              <LinearProgress
                variant="determinate"
                value={preview.uploadPercentage}
              />
            ) : (
              <TaskAltIcon className="complete" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
