import styles from "./wallets.module.css";

import namiWallet from "../../assets/Nami-Wallet.svg";
import yoroiWallet from "../../assets/Yoroi-Wallet.png";
import eternlWallet from "../../assets/Eternl-Wallet.png";

export default function Wallets() {
  return (
    <>
      <ul className={styles.wallets}>
        <li>
          <span>
            <img src={namiWallet} alt="Nami wallet" />
          </span>
          <span>Nami</span>
        </li>
        <li>
          <span>
            <img src={yoroiWallet} alt="Yoroi Wallet" />
          </span>
          <span>Yoroi</span>
        </li>
        <li>
          <span>
            <img src={eternlWallet} alt="Eternl Wallet" />
          </span>
          <span>Eternl</span>
        </li>
      </ul>
      <div className="advert">
        The wallet connexion is comming soo. Not working for now!
      </div>
    </>
  );
}
