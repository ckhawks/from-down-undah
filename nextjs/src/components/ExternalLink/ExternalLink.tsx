import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ExternalLink.module.scss'

const ExternalLink = (props: any) => {
  return (
    <a href={props.href} className={`${styles.link} link`}>{props.children} <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.icon}/></a>

  )
}

export default ExternalLink;

