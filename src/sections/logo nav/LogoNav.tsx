import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function LogoNav() {
  return (
    <>
      <div className={styles.navbar}>
        <div>
            <Image src="/images/logo.svg" width={120} height={25} alt="" />
        </div>
        <div>
            
        </div>
      </div>

      <div className={styles.logonav}>
        <Link href="">
          <Image src="/images/logo.svg" width={128} height={26.4} alt="" />
        </Link>
      </div>
    </>
  );
}
