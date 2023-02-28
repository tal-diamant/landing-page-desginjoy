import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Gray() {
  return (
    <section className={styles.gray}>
      <div className={styles.container}>
        <div className={styles.headingAndSupport}>
          <h2>
            It’s “you’ll <span>never</span> go back” better
          </h2>
          <p>
            Designjoy replaces unreliable freelancers and expensive agencies for
            one flat monthly fee, with designs delivered so fast that it will
            blow your mind.
          </p>
        </div>
        <div className={styles.quoteAndFeatures}>
          <div className={styles.quote}>
            <Image src="/images/red-quotes.svg" width={35} height={30} alt="" />
            <p className={styles.pTag}>Design is everything, and these guys have nailed it.</p>
            <div className={styles.author}>
                <div></div>
                <p>
                    Kevin O'Leary,{' '}
                    <span>
                        🦈 Shark Tank
                    </span>
                </p>
            </div>
          </div>
          <div className={styles.features}>
            <div className={styles.feature}>
                <h3>Totally async</h3>
                <p>Don't like meetings? We don't either; so much so that we've outlawed them completely.</p>
            </div>
            <div className={styles.feature}>
                <h3>Manage with Trello</h3>
                <p>Manage your design board using Trello. View active, queued and completed tasks with ease.</p>
            </div>
            <div className={styles.feature}>
                <h3>Invite unlimited team members</h3>
                <p>Invite your entire team, so anyone can submit requests and track their progress.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
