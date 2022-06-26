import styles from "./Input.module.css";

const Input = ({
  placeholder,
  hovered,
  focused,
  error,
  helperText,
  ...attributes
}) => {
  console.log(styles);
  return (
    <label className={styles["input-container"]}>
      <input
        className={`
          ${styles["input"]} 
          ${hovered && styles["hover"]} 
          ${focused && styles["focus"]} 
          ${error && "error"}
        `}
        type="text"
        placeholder={placeholder || "Placeholder"}
        {...attributes}
      />
      {helperText && <small>{helperText}</small>}
      <span className={styles["input-label"]}>Label</span>
    </label>
  );
};

export default Input;
