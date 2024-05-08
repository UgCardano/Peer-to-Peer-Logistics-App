import SendForm from "../../components/send-form";
import styles from "./send.module.css";

export default function SendParcel() {
  return (
    <div className={styles.parcels}>
      <div className={styles.header}>
        <h3>Want to send your parcel?</h3>
        <p>
          We bring a secure and fast way to send your parcel with Cardano
          blockchain.
        </p>
      </div>
      <SendForm />
    </div>
  );
}
