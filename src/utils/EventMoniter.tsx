import React, { useRef, useEffect } from "react";

export interface FileEvent {
  detail: {
    fileName: string;
    data?: string;
  };
}

interface EventMonitorProps {
  uploadWillStartEventHandler?: (event: FileEvent) => void; // Add the onFileEvent callback prop
  uploadRunningEventHandler?: (event: FileEvent) => void;
  uploadProgressEventHandler?: (event: FileEvent) => void;
  uploadCompleteEventHandler?: (event: FileEvent) => void;
  fileReadyEventHandler?: (event: FileEvent) => void;
}

const EventMonitor: React.FC<EventMonitorProps> = ({
  uploadWillStartEventHandler,
  uploadRunningEventHandler,
  uploadProgressEventHandler,
  uploadCompleteEventHandler,
  fileReadyEventHandler,
}) => {
  const eventMonitorRef = useRef<HTMLDivElement>(null);

  // subscribe for file upload events on mount
  useEffect(() => {
    const eventMonitor = eventMonitorRef.current;
    if (!eventMonitor) return; // never too cautious

    // @ts-ignore
    eventMonitor.addEventListener(
      "FILE_UPLOAD_WILL_START",
      uploadWillStartEventHandler
    );
    // @ts-ignore
    eventMonitor.addEventListener(
      "FILE_UPLOAD_RUNNING",
      uploadRunningEventHandler
    );
    // @ts-ignore
    eventMonitor.addEventListener(
      "FILE_UPLOAD_PROGRESS",
      uploadProgressEventHandler
    );
    // @ts-ignore
    // eventMonitor.addEventListener('FILE_UPLOAD_PAUSED', ___);
    // @ts-ignore
    // eventMonitor.addEventListener('FILE_UPLOAD_CANCELD', ___);
    // @ts-ignore
    eventMonitor.addEventListener(
      "FILE_UPLOAD_COMPLETE",
      uploadCompleteEventHandler
    );
    // @ts-ignore
    eventMonitor.addEventListener("FILE_SAVED", fileReadyEventHandler);

    // unsubscribe on unmount
    return () => {
      if (!eventMonitor) return; // never too cautious

      // @ts-ignore
      eventMonitor.removeEventListener(
        "FILE_UPLOAD_WILL_START",
        uploadWillStartEventHandler
      );
      // @ts-ignore
      eventMonitor.removeEventListener(
        "FILE_UPLOAD_RUNNING",
        uploadRunningEventHandler
      );
      // @ts-ignore
      eventMonitor.removeEventListener(
        "FILE_UPLOAD_PROGRESS",
        uploadProgressEventHandler
      );
      // @ts-ignore
      // eventMonitor.removeEventListener('FILE_UPLOAD_PAUSED', ___);
      // @ts-ignore
      // eventMonitor.removeEventListener('FILE_UPLOAD_CANCELD', ___);
      // @ts-ignore
      eventMonitor.removeEventListener(
        "FILE_UPLOAD_COMPLETE",
        uploadCompleteEventHandler
      );
      // @ts-ignore
      eventMonitor.removeEventListener("FILE_SAVED", fileReadyEventHandler);
    };
  }, []);

  return <div id="eventMonitor" ref={eventMonitorRef} />;
};

export default EventMonitor;
