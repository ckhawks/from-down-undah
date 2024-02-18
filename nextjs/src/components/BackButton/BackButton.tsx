import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import classes from "./BackButton.module.scss";

const BackButton = (props: any) => {
  return (
    <Link className={`${classes.base}`} href={props.href}>
      <FontAwesomeIcon icon={faArrowLeft} className={classes.icon}/> {props.text}
    </Link>
  );
};

export default BackButton;