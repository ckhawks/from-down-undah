import DeleteMessageButton from "@/components/Messages/DeleteMessageButton/DeleteMessageButton";
import { getAllDiscordUsers } from "@/lib/discordUser";
import { getMessages } from "@/lib/message";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackButton from "../../components/BackButton/BackButton";
import styles from "../page.module.scss";
import { timeSince } from "@/lib/time";

export default async function Messages() {
  const messages = await getMessages();

  const users = await getAllDiscordUsers();

  return (
    <main className={`${styles.main} content`}>
      <div className={styles.description}>
        <BackButton href="/" text="Hub" />
        <h1>Message Log</h1>
        {messages && <>{messages.length} entries</>}
        {messages &&
          messages.reverse().map((message) => {
            // console.log("message", message);
            return (
              <div key={message.id} className={styles.messageCard}>
                <div
                  className={styles["avatar-wrapper"]}
                  style={{ backgroundColor: `#${message.discordUser.color}` }}
                >
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className={styles.messageContent}>
                  <b>{message.discordUser?.username}</b>
                  <div>{message.message}</div>
                </div>
                <div className={styles.date}>
                  {timeSince(message.messageTime)}
                </div>
                {/* <DeleteMessageButton messageId={message.id} /> */}
                {/* <Link href={"messages/" + crate.name}>{crate.name}</Link> */}
              </div>
            );
          })}
        {messages.length === 0 && <p>No messages found.</p>}
        <h1>Users (debug)</h1>
        {users &&
          users.map((user) => {
            return (
              <div key={user.id} className={styles.message}>
                <div
                  className={styles["avatar-wrapper"]}
                  style={{ backgroundColor: `#${user.color}` }}
                >
                  {" "}
                  <FontAwesomeIcon icon={faUser} />
                </div>
                {user.id}: <b>{user.username}</b> ({user.discordId.toString()}),
                color: {user.color}
              </div>
            );
          })}
      </div>
    </main>
  );
}
