import { useRecordContext } from "react-admin";

export const Title = () => {
  const record = useRecordContext();
  return <span>{record.name}</span>;
};
