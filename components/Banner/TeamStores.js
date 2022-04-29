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

const TeamStores = () => {
  return (
    <div>
      <Link href="national-teams">
        <Image src={NationalTeam} />
      </Link>
      <Link href="premier-leauge">
        <Image src={PremierLeauge} />
      </Link>
      <Link href="bundesliga">
        <Image src={Bundesliga} />
      </Link>
      <Link href="seriea-leauge">
        <Image src={SeriA} />
      </Link>
      <Link href="la-liga">
        <Image src={LaLiga} />
      </Link>
      <Link href="ligue-one">
        <Image src={LigueOne} />
      </Link>
    </div>
  );
};

export default TeamStores;
