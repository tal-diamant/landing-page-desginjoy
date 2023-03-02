import Image from "next/image";
import { useState } from "react";
import styles from "./styles.module.scss";

interface Props {
  isOpen: boolean;
  onToggle: (id: number) => void;
  id: number;
  question: string;
  answer: string[];
}

export default function FAQItem({ isOpen, onToggle, id, question, answer }: Props) {
  return (
    <div className={styles.faqItem} onClick={() => onToggle(id)}>
      <div className={styles.text}>
        <p className={styles.question}>
          {question}
        </p>
        {isOpen && (
          <p className={styles.answer}>
            {answer[0]}
            {answer[1] && <><br/><br /></>}
            {answer[1] || ''}
          </p>
        )}
      </div>
      <Image src="/images/faq-arrow.svg" className={`${isOpen? styles.rotate: ''}`} width={16} height={16} alt="" />
    </div>
  );
}

/* 
    <p className={styles.answer}>
        Good question! For starters, the annual cost of a full-time
        senior-level designer now exceeds $100,000, plus benefits (and good
        luck finding one available). Aside from that, you may not always
        have enough work to keep them busy at all times, so you're stuck
        paying for time you aren't able to utilize.
        <br />
        <br />
        With the monthly plan, you can pause and resume your subscription as
        often as you need to ensure you're only paying your designer when
        you have work available for them.
    </p>
*/