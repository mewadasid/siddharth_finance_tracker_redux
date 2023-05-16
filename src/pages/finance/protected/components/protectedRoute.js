import { useEffect } from "react";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function Protected({ Cmp }) {
  const cookie = new Cookies();
  const token = cookie.get("token");

  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
  }, []);
  return Cmp;
}
