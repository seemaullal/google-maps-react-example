import React from "react";
import Loadingimage from "./images/watermelon-loading.png";
export default function Loading() {
  return (
    <div className="loading-box">
      <img src={Loadingimage} alt="" />
      <div>Loading...</div>
    </div>
  );
}
