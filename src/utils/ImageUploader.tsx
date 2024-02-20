import React, { useState } from "react";
import { ImageInput, ImageField } from "react-admin";

interface ImageUploaderProps {
  source: string;
  multiple: boolean;
}


export const ImageUploader: React.FC<ImageUploaderProps> = ({source, multiple}) => {
  const [previews, setPreviews] = useState<
    Array<{ src: string; title: string }>
  >([]);

  const handleFilesSelected = (files: File[]) => {
    // Generate preview URLs for selected files
    const newPreviews = files.map((file) => ({
      src: URL.createObjectURL(file), // Generate preview URL
      title: file.name, // Use filename as title
    }));
    setPreviews(newPreviews);
    console.log(files); // Log the selected files
  };

  return (
    <div>
      <ImageInput
        source={source}
        multiple={multiple}
        options={{
          onDropAccepted: handleFilesSelected,
        }}
      />
      {/* Render image previews */}
      <div style={{ display: "flex" }}>
        {previews.map((preview, index) => (
          <ImageField
            key={index}
            record={preview}
            source="src"
            title={preview.title}
            className="small"
          />
        ))}
      </div>
    </div>
  );
};
