import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { loginState } from "../../recoil/appState";
import RestfulUtils from "../../utils/RestfulUtils";
import "./Lessons.css";
const Lessons = (props) => {
  return (
    <div
      className="Lessons"
      style={{ backgroundColor: "#545454", minHeight: "calc(100vh - 226px)" }}
    >
      Bài học
    </div>
  );
};

export default Lessons;
