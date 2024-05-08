import { useModal } from "../../hooks/useModal";
import Button from "../../ui/button";
import Wallets from "../wallets";

export default function ConnectWallect() {
  const { modal, openModal } = useModal(<Wallets />);

  return (
    <>
      <Button isGradient onClick={openModal}>
        Connect Wallet
      </Button>
      {modal}
    </>
  );
}
