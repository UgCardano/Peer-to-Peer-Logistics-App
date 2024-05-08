import Button from "../../ui/button";
import styles from "./send-form.module.css";
import { LuAsterisk } from "react-icons/lu";

export default function SendForm() {
  return (
    <form className={styles.form}>
      <div className={styles.inputs}>
        <div>
          <span>
            <label htmlFor="name">Parcel Name</label>
            <LuAsterisk />
          </span>
          <input type="text" id="name" />
        </div>
        <div>
          <span>
            <label htmlFor="to">Destination</label>
            <LuAsterisk />
          </span>
          <input type="text" id="to" />
        </div>
        <div>
          <span>
            <label htmlFor="from">Shipping from</label>
            <LuAsterisk />
          </span>
          <input type="text" id="from" />
        </div>
        <div>
          <span>
            <label htmlFor="weight">Weight (in kg)</label>
            <LuAsterisk />
          </span>
          <input type="text" id="weight" />
        </div>
        <div>
          <span>
            <label htmlFor="pieces">Piece(s)</label>
            <LuAsterisk />
          </span>
          <input type="text" id="pieces" />
        </div>
        <div className={styles.description}>
          <span>
            <label htmlFor="desc">Parcel description</label>
            <LuAsterisk />
          </span>
          <textarea id="desc"></textarea>
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" id="is-urgent" />
          <span>
            <label htmlFor="is-urgent">Is the shipping urgent?</label>
          </span>
        </div>
      </div>
      <Button>Confirm</Button>
    </form>
  );
}
