import React from "react"
import { Link } from "gatsby"
import navigationBarStyles from "./navigationBar.module.css"

export default () => (
    <div className={navigationBarStyles.container}>
        <Link className={navigationBarStyles.navLink} to={"/bio/"}>bio</Link>
        <Link className={navigationBarStyles.navLink} to={"/blog/"}>blog</Link>
    </div>
)