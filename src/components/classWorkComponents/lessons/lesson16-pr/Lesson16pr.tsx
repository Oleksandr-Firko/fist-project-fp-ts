import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Lesson16pr() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("../../../store");
  }, []);
  return <></>;
}
