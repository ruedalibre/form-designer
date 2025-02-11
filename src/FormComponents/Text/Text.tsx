import React from "react";
import { TextQuestion } from "../../Interfaces/IQuestionTypes";
import styles from "./Text.module.scss";

interface TextProps {
  question: TextQuestion;
  showDescription?: boolean;
  showLabel?: boolean;
  onChange: (id: string, value: string) => void;
}

const Text: React.FC<TextProps> = ({
  question,
  showDescription,
  showLabel,
  onChange,
}) => {
  const [showWarning, setShowWarning] = React.useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    question.updateValue(value);
    onChange(question.id, value);

    if (question.validate && !question.validate()) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  };

  return (
    <>
      <div className={styles.questionContainer}>
        <div className={styles.questionLine}>
          <p className={styles.questionTitle}>{question.title}</p>
          <span className={styles.required}>
            {question.required ? "*" : ""}
          </span>
        </div>

        {showDescription && question.description && (
          <p className={styles.textDescription}>{question.description}</p>
        )}

        <div className={styles.inputLine}>
          {showLabel && question.label && (
            <label htmlFor={question.id} className={styles.textLabel}>
              {question.label}&nbsp;
            </label>
          )}
          <input
            className={styles.textInput}
            type={question.type}
            value={question.value}
            placeholder={question.placeholder}
            onChange={handleChange}
          />
        </div>
        {showWarning && question.warning && (
          <span className={styles.texdtWaring}>{question.warning}</span>
        )}
      </div>
    </>
  );
};

export default Text;
