import React from "react";
import { DateQuestion } from "../../Interfaces/IQuestionTypes";
import styles from "./Date.module.scss";

interface DateProps {
  question: DateQuestion;
  showDescription?: boolean;
  showLabel?: boolean;
  onChange: (id: string, value: string) => void;
}

const Date: React.FC<DateProps> = ({
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
          <p className={styles.dateDescription}>{question.description}</p>
        )}

        <div className={styles.inputLine}>
          {showLabel && question.label && (
            <label className={styles.dateLabel}>{question.label}&nbsp;</label>
          )}
          <input
            className={styles.dateInput}
            type={question.type}
            value={question.value}
            onChange={handleChange}
          />
        </div>
        {showWarning && question.validation?.errorMessage && (
          <span className={styles.dateWarning}>{question.validation.errorMessage}</span>
        )}
      </div>
    </>
  );
};

export default Date;
