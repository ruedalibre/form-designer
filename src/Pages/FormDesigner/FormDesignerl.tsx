import * as React from "react";
import { useState } from "react";
import { IBaseQuestion } from "../../Interfaces/IBaseQuestion";
import Text from "../../FormComponents/Text/Text";
import styles from "./FormDesigner.module.scss";

const FormDesigner: React.FC = () => {
  const [questions, setQuestions] = useState<IBaseQuestion[]>([
    {
      id: "q1",
      type: "radio",
      title: "Do you like React?",
      options: ["Yes", "No"],
      required: true,
      updateValue: () => {},
      getValue: () => {},
    },
    {
      id: "q2",
      type: "text",
      title: "Why do you like React?",
      required: false,
      updateValue: () => {},
      getValue: () => {},
    },
  ]);

  const handleOptionChange = (id: string, value: string) => {
    if (id === "q1" && value === "Yes") {
      setQuestions([
        ...questions,
        {
          id: "q3",
          type: "text",
          title: "Tell us more about your experience with React.",
          required: true,
          updateValue: () => {},
          getValue: () => {},
        },
      ]);
    } else if (id === "q1" && value === "No") {
      setQuestions(questions.filter((question) => question.id !== "q3"));
    }
  };

  const renderQuestions = () => {
    return questions.map((question, index) => (
      <Text
        key={question.id}
        value={}
        question={question}
        number={index + 1}
        onOptionChange={handleOptionChange}
      />
    ));
  };
  return (
    <div className={styles.formDesigner}>
      <h1>Form Designer</h1>
    </div>
  );
};

export default FormDesigner;
