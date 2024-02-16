import * as React from "react";
import { ComponentType, ReactElement, isValidElement } from "react";
import { Route, Routes } from "react-router-dom";

import { ResourceProps, ResourceContextProvider } from "react-admin";

interface UploadResourceProps extends ResourceProps {
  upload?: ComponentType<any> | ReactElement;
  invite?: ComponentType<any> | ReactElement;
}

export const ResourceProgram = (props: UploadResourceProps) => {
  const { create, edit, list, name, show, upload, invite } = props;

  return (
    <ResourceContextProvider value={name}>
      <Routes>
        {create && <Route path="create/*" element={getElement(create)} />}
        {show && <Route path=":id/show/*" element={getElement(show)} />}
        {upload && <Route path=":id/upload" element={getElement(upload)} />}
        {invite && <Route path=":id/invite" element={getElement(invite)} />}
        {edit && <Route path=":id/*" element={getElement(edit)} />}
        {list && <Route path="/*" element={getElement(list)} />}

        {props.children}
      </Routes>
    </ResourceContextProvider>
  );
};

const getElement = (ElementOrComponent: ComponentType<any> | ReactElement) => {
  if (isValidElement(ElementOrComponent)) {
    return ElementOrComponent;
  }

  if (typeof ElementOrComponent === "function") {
    return <ElementOrComponent />;
  }

  return null;
};

ResourceProgram.raName = "Resource";

ResourceProgram.registerResource = ({
  create,
  edit,
  icon,
  list,
  name,
  options,
  show,
  recordRepresentation,
  hasCreate,
  hasEdit,
  hasShow,
}: ResourceProps) => ({
  name,
  options,
  hasList: !!list,
  hasCreate: !!create || !!hasCreate,
  hasEdit: !!edit || !!hasEdit,
  hasShow: !!show || !!hasShow,
  icon,
  recordRepresentation,
});
