import { getMessages } from "@/lib/message";
import BackButton from "../../components/BackButton/BackButton";
import styles from "../page.module.scss";

export default async function Messages() {
  const messages = await getMessages();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <BackButton href="/" text="Hub" />
        <h1>Messages</h1>
        {messages &&
          messages.map((message) => {
            console.log("message", message);
            return (
              <div key={message.id} className={styles.message}>
                <b>{message.authorName}</b> ({message.authorDiscordId}):{" "}
                {message.message}{" "}
                <div className={styles.date}>
                  {message.messageTime.toString()}
                </div>
                {/* <Link href={"messages/" + crate.name}>{crate.name}</Link> */}
              </div>
            );
          })}
        {messages.length === 0 && <p>No messages found.</p>}
      </div>
    </main>
  );
}
