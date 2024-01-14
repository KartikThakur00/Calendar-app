import React from "react";

const downloadFile = ({ data, fileName, fileType }) => {
  const blob = new Blob([data], { type: fileType });
  const a = document.createElement("a");
  a.download = fileName;
  a.href = window.URL.createObjectURL(blob);
  const clickEvt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  a.dispatchEvent(clickEvt);
  a.remove();
};

const exportToJson = (e) => {
  const data = JSON.parse(localStorage.getItem("checked")) || [];
  const jsonData = JSON.stringify(data);
  e.preventDefault();
  downloadFile({
    data: jsonData,
    fileName: "data.json",
    fileType: "text/json",
  });
};

const Download = () => {
  return (
    <div className="absolute right-5 bottom-5">
      <button
        onClick={exportToJson}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Download
      </button>
    </div>
  );
};

export default Download;
