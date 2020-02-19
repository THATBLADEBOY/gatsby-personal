import { Link } from "gatsby";
import React from "react";

import navigationBarStyles from "./navigationBar.module.css";

export default () => (
  <div className={navigationBarStyles.container}>
    <h3>austin blade</h3>
    <Link className={navigationBarStyles.navLink} to={"/bio"}>
      bio
    </Link>
    <Link className={navigationBarStyles.navLink} to={"/blog"}>
      blog
    </Link>
  </div>
)
