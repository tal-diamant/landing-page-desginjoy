import Image from "next/image";
import Link from "next/link";
import { columnData } from "./data";
import styles from "./styles.module.scss";

interface Props {
    data: typeof columnData;
}


export default function PricingColumn({data}: Props) {
  return (
    <div className={styles.col}>
      <div className={styles.colTop}>
        <div className={styles.topTop}>
          <h3>{data.colTop.top.heading}</h3>
          <p>{data.colTop.top.text}</p>
        </div>
        <div className={styles.topBottom}>
          <span>{data.colTop.bottom.pricePerMonth}</span>
          <p>{data.colTop.bottom.text}</p>
          <div className={styles.button}>
            <Link href="">{data.colTop.bottom.action1}</Link>
          </div>
          <div>
            <Link href="">{data.colTop.bottom.action2}</Link>
          </div>
        </div>
        {data.colTop.tag.hasTag && <div className={styles.popular}>{data.colTop.tag.tagText}</div>}
        {data.colTop.decoration.hasDecoration && <Image
          src={data.colTop.decoration.image}
          className={styles[data.colTop.decoration.class]}
          width={data.colTop.decoration.width}
          height={data.colTop.decoration.height}
          alt=""
        />}
      </div>

      <div className={styles.colBottom}>
        <h4>{data.colBottom.heading}</h4>
        <ul>
          {data.colBottom.points.map(point => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
