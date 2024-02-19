"use client"

import { deleteMessage } from "@/lib/message";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeleteMessageButton = (props: { messageId: number }) => {
return (<button
  className={`button`}
  onClick={async () => {
    await deleteMessage(props.messageId);
  }}
>
  <FontAwesomeIcon icon={faTrash} /> Delete
</button>)}

export default DeleteMessageButton;