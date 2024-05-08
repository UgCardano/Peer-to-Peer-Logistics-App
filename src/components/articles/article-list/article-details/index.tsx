import { useGetSingleParcel } from "../../../../hooks/useGetSingleParcel";
import Button from "../../../../ui/button";
import styles from "./article-details.module.css";

export default function ArticleDetails({ itemId }: { itemId: number }) {
  const { data, isLoading, error } = useGetSingleParcel(itemId);

  if (isLoading) return <h2>Loading...</h2>;

  if (!isLoading && error) return <h2>No data</h2>;

  return (
    <div className={styles["article-details"]}>
      <div className={styles["part-1"]}>
        <div className={styles.img}>
          <img src={data?.image} alt={data?.title} />
        </div>
        <div className={styles.details}>
          <h3>{data?.title}</h3>
          <div className={styles.wrapper}>
            <p>
              Weight: <span>12kg</span>
            </p>
            <p>
              Piece(s): <span>1 item</span>
            </p>
            <p>
              Shipping from: <span>Nairobi, Kenya</span>
            </p>
            <p>
              Shipping to: <span>Lubumbashi, Drc</span>
            </p>
            <p>
              Current Status: <span>Wait for Shipping</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.desc}>
        <h4>Description</h4>
        <div className={styles.more}>
          {data?.description}
          {/* <p>
            Lorem ipsum dolor sit amet consectetur. Nibh lectus velit quisque
            ornare.{" "}
            <a href="https://www.google.com" target="_blank">
              Ut quam amet
            </a>{" "}
            arcu sed tellus enim sit euismod. Cursus lectus quis sed felis
            interdum. <u>Vestibulum</u> non venenatis posuere id pellentesque
            in. Augue porta sit massa porttitor viverra lorem viverra diam.
            Pellentesque nulla. Lorem ipsum dolor sit amet consectetur. Nibh
            lectus velit quisque ornare. Ut quam amet arcu sed tellus enim sit
            euismod. <i>Cursus lectus quis sed felis interdum</i>. Vestibulum
            non venenatis posuere id pellentesque in. Augue porta sit massa
            porttitor viverra lorem viverra diam. Pellentesque nulla.
          </p>
          <h5>Pellentesque nulla</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nibh lectus velit quisque
            ornare. Ut quam amet arcu sed tellus enim sit euismod. Cursus lectus
            quis sed felis interdum.
          </p>
          <ul>
            <li>Nibh lectus velit quisque ornare.</li>
            <li>Nibh lectus velit quisque ornare.</li>
            <li>Nibh lectus velit quisque ornare.</li>
            <li>Nibh lectus velit quisque ornare.</li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nibh lectus velit quisque
            ornare. Ut quam amet arcu sed tellus enim sit euismod. Cursus lectus
            quis sed felis interdum. <b>Vestibulum</b> non venenatis posuere id
            pellentesque in. Augue porta sit massa porttitor viverra lorem
            viverra diam. Pellentesque nulla.
          </p> */}
        </div>
      </div>
      <Button>Curry Parcel</Button>
    </div>
  );
}
