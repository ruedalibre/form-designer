import React from "react";
import styles from "./Text.module.scss";
import { IBaseQuestion } from "../../Interfaces/IBaseQuestion";

interface Text extends IBaseQuestion {
    question: TextQuestion;
    onChange: (value: string) => void;
}

export interface TextQuestion extends IBaseQuestion {
    type: "text";
    value: string;
    placeholder: string;
}


const Text: React.FunctionComponent<Text> = ({ question, onChange }) => {
    return (
        <div className={styles.text}>
            <label>{question.label}</label>
            <input type="text" value={question.value} onChange={e => onChange(e.target.value)} placeholder={question.placeholder} />
        </div>
    );
}

export default Text;