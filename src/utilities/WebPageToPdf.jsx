import React from "react";

const WebPageToPdf = ({ file }) => {
  return (
    <div>
      <iframe src={file} width='100%' height='600px' className="z-50" />
    </div>
  );
};

export default WebPageToPdf;
