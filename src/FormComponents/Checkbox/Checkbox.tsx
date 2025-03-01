import * as React from "react";
import { useEffect, useState } from "react";
import { CheckboxQuestion } from "../../Interfaces/IQuestionTypes";
import styles from "./Checkbox.module.scss";

interface ICheckboxProps {
  question: CheckboxQuestion;
  showDescription?: boolean;
}

export interface ICheckboxOption {
  checked: boolean;
  label: string;
  value: boolean;
}

const Checkbox: React.FunctionComponent<ICheckboxProps> = ({
  question,
  showDescription,
}) => {
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const [options, setOptions] = useState<ICheckboxOption[]>(question.options);

  const handleChange = (checked: boolean, index: number): void => {
    const updatedOptions = options.map((option, i) =>
      i === index ? { ...option, checked } : option
    );
    setOptions(updatedOptions);
    question.updateValue(updatedOptions);

    if (question.validate && !question.validate()) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  };

  useEffect(() => {
    return () => {
      question.reset?.();
      setShowWarning(false);
    };
  }, [question]);

  return (
    <>
      <div className={styles.questionContainer}>
        <div className={styles.questionLine}>
          <span className={styles.questionNumber}>&nbsp;</span>
          <p className={styles.questionTitle}>{question.title}</p>
          <span className={styles.required}>
            {question.required ? "*" : ""}
          </span>
        </div>

        {showDescription && question.description && (
          <p className={styles.attachmentDescription}>{question.description}</p>
        )}

        <div className={styles.inputLine}>
          {options.map((option, index) => (
            <label key={index} className={styles.checkboxLabel}>
              <input
                className={styles.checkBox}
                type={question.type}
                checked={option.value}
                onChange={() => handleChange(option.checked, index)}
              />
              {option.label}
            </label>
          ))}
        </div>
        {showWarning && question.validation?.errorMessage && (
          <span className={styles.checkboxWarning}>
            {question.validation.errorMessage}
          </span>
        )}
      </div>
    </>
  );
};

export default Checkbox;
