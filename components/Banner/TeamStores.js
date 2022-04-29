//images
import NationalTeam from "./teamstores-asset/nationalteam.png";
import PremierLeauge from "./teamstores-asset/premier.png";
import Bundesliga from "./teamstores-asset/bundesliga.png";
import SeriA from "./teamstores-asset/seria.png";
import LaLiga from "./teamstores-asset/laliga.png";
import LigueOne from "./teamstores-asset/ligue1.png";

//nextjs
import Image from "next/image";
import Link from "next/link";

//styling
import styles from "./Banner.module.css";

const TeamStores = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-8/12 lg:mx-auto gap-4">
      <Link href="national-teams">
        <Image className={styles.zoomAnimation} src={NationalTeam} />
      </Link>
      <Link href="premier-leauge">
        <Image className={styles.zoomAnimation} src={PremierLeauge} />
      </Link>
      <Link href="bundesliga">
        <Image className={styles.zoomAnimation} src={Bundesliga} />
      </Link>
      <Link href="seriea-leauge">
        <Image className={styles.zoomAnimation} src={SeriA} />
      </Link>
      <Link href="la-liga">
        <Image className={styles.zoomAnimation} src={LaLiga} />
      </Link>
      <Link href="ligue-one">
        <Image className={styles.zoomAnimation} src={LigueOne} />
      </Link>
    </div>
  );
};

export default TeamStores;
