import React from "react";
import campImage from "./camp.png";

import { Loading, useGetList } from "react-admin";
import InfoIcon from "@mui/icons-material/Info";

const BuildingIcons = () => {
  const { data, total, isLoading, error } = useGetList("area");
  const filteredData =
    data?.filter((record) => record.hasOwnProperty("rect")) || [];

  if (isLoading) {
    return <></>;
  }
  return (
    <>
      {filteredData?.map((record) => (
        <div
          key={record.id}
          style={{
            position: "absolute",
            borderRadius: "100%",
            left: `${record.rect[0]}%`,
            top: `${record.rect[1]}%`,
            color: "#2196f3",
            background: "white",
            height: "1.5em",
          }}
        >
          <InfoIcon></InfoIcon>
        </div>
      ))}
    </>
  );
};

export const Dashboard = () => {
  return (
    <div style={{ position: "relative" }}>
      <img src={campImage} width="100%" />

      <BuildingIcons></BuildingIcons>
    </div>
  );
};
