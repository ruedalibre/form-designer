import * as React from "react";
import { useEffect, useState } from "react";
import { AttachmentQuestion } from "../../Interfaces/IQuestionTypes";
import styles from "./Attachment.module.scss";

interface IAttachmentProps {
  question: AttachmentQuestion;
  showDescription?: boolean;
  showLabel?: boolean;
  showWarning: boolean;
}

const Attachment: React.FC<IAttachmentProps> = ({
  question,
  showDescription,
  showLabel,
  showWarning: initialShowWarning = false,
}) => {
  const [showWarning, setShowWarning] = useState<boolean>(initialShowWarning);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileUpload = (): void => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newFiles = event.target.files ? Array.from(event.target.files) : [];
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    question.updateValue(newFiles[0]);

    if (question.validate && !question.validate()) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  };

  const handleRemoveFile = (index: number): void => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  useEffect(() => {
    return () => {
      question.reset?.();
      setFiles([]);
      setShowWarning(false);
    };
  }, [question]);

  useEffect(() => {
    setShowWarning(initialShowWarning);
  }, [initialShowWarning]);

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
          {showLabel && question.label && (
            <label htmlFor={question.id} className={styles.dateLabel}>
              {question.label}&nbsp;
            </label>
          )}
          <input
            ref={fileInputRef}
            className={styles.attachmentInput}
            type="file"
            onChange={handleChange}
            style={{ display: "none" }}
          />
          <button
            type="button"
            className={styles.customFileUpload}
            onClick={handleFileUpload}
          >
            Adjuntar archivo
          </button>
        </div>
        {files.length > 0 && (
          <ul className={styles.fileList}>
            {files.map((file, index) => (
              <li key={index} className={styles.fileItem}>
                {file.name}
                <button
                  type="button"
                  className={styles.removeFileButton}
                  onClick={() => handleRemoveFile(index)}
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>
        )}
        {showWarning && question.validation?.errorMessage && (
          <span className={styles.attachmentWarning}>
            {question.validation.errorMessage}
          </span>
        )}
      </div>
    </>
  );
};

export default Attachment;
