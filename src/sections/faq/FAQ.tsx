import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";
import FAQItem from "@/components/FAQ item/FAQItem";
import { faqData } from "@/components/FAQ item/data";
import styles from "./styles.module.scss";

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = useCallback((id: number) => {
    setOpenFAQ((current) => (current !== id ? id : null));
  },[]);

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2 className={styles.heading}>FAQs</h2>
        <div className={styles.faqs}>
          {faqData.map(({ id, question, answer }, i) => (
            <FAQItem
              key={id}
              id={id}
              question={question}
              answer={answer}
              isOpen={openFAQ === id}
              onToggle={toggleFAQ}
            />
          ))}
        </div>
        <div className={styles.button}>
            <Link href="">View all FAQs</Link>
        </div>
      </div>
    </section>
  );
}
