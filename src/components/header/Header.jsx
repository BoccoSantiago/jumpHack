import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import CartModal from "./CartModal";

function Header() {
  const { user, logout } = useAuth();

  return (
    <div className=" d-flex justify-content-between bg-success bg-opacity-75 p-2">
      <Link
        to="/"
        className="text-decoration-none text-white fw-bold fs-3 d-flex justify-content-center align-items-baseline gap-2"
      >
        SIAMI
      </Link>

      {user ? (
        <Stack direction="horizontal" gap={3}>
          <Button onClick={logout} className="btn-light py-1">
            Log out
          </Button>
        </Stack>
      ) : (
        <Stack direction="horizontal" gap={3}>
          <CartModal />
        </Stack>
      )}
    </div>
  );
}

export default Header;