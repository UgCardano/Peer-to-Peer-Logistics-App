import Button from "../../ui/button";
import styles from "./not-found.module.css";
import notfound from "../../assets/not-found.svg";

export default function NotFound() {
  return (
    <div className={`container ${styles["not-found"]}`}>
      <div className={styles.text}>
        <h1>404</h1>
        <h2>Oups!...</h2>
        <h3>Page not found</h3>
        <p>
          The page you're looking for doesn't exist or an error occured. Please
          go back to the home page
        </p>
        <Button to="/">Go to Home</Button>
      </div>
      <div className={styles.img}>
        <img src={notfound} alt="not found" />
      </div>
    </div>
  );
}
