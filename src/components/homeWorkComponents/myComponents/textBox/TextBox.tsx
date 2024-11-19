import styles from "./textBox.module.css";
import cn from "classnames";

interface ITextBoxProps {
  text: JSX.Element;
  background?: boolean;
  textAlignInbox?: "left" | "right" | "center";
}

export default function TextBox({
  text,
  background,
  textAlignInbox,
}: ITextBoxProps) {
  return (
    <div
      className={cn(styles.container, [background ? styles.background : ""])}
      style={{ textAlign: textAlignInbox || undefined }}
    >
      {text}
    </div>
  );
}
