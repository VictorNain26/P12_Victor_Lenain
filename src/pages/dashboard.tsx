import { getUser, getUserAverageSessions, getUserActivity, getUserPerformance } from "../data/getUser";
import { CardInfo } from "../components/cardInfo";
import { DisplayRadial } from "../components/recharts/radial";
import { DisplayBar } from "../components/recharts/bar";
import { DisplayLine } from "../components/recharts/line";
import { DisplayRadar } from "../components/recharts/radar";

import fireIcon from "../assets/fire_icon.svg";
import chickenIcon from "../assets/chicken_icon.svg";
import appleIcon from "../assets/apple_icon.svg";
import cheeseburgerIcon from "../assets/cheeseburger_icon.svg";

export const Dashboard = () => {
  const { user } = getUser(12);
  const { activity } = getUserActivity(12);
  const { averageSessions } = getUserAverageSessions(12);
  const { performance } = getUserPerformance(12);

  if (!user || !activity || !averageSessions || !performance) return <div>chargement...</div>

  return (
    <main className="flex flex-col grow mt-16 ml-28 mr-20 mb-20">
      <h1 className="text-5xl">Bonjour <span className="text-red-600">{ user.userInfos.firstName }</span></h1>
      <p className="mt-6 text-lg font-normal mb-20">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="flex">
        <div className="flex flex-col mr-8">
          <div className="bg-zinc-50 rounded mb-7 p-7">
            <h3 className="text-base">Activité quotidienne</h3>
            <DisplayBar activity={ activity.sessions } />
          </div>
          <div className="flex justify-between">
            <div className="bg-red-600 rounded"><DisplayLine averageSessions={ averageSessions.sessions } /></div>
            <div className="bg-zinc-800 rounded"><DisplayRadar performances={ performance.data } kind={ performance.kind } /></div>
            <div className="bg-zinc-50 rounded"><DisplayRadial score={ user.todayScore } /></div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <CardInfo count={ `${user.keyData.calorieCount}kCal` } cardType={ {icon: fireIcon, title: "Calories", bgColor: "bg-red-600/[0.1]"} } />
          <CardInfo count={ `${user.keyData.proteinCount }g` } cardType={ {icon: chickenIcon, title: "Proteines", bgColor: "bg-sky-400/[0.1]"} } />
          <CardInfo count={ `${user.keyData.carbohydrateCount }g` } cardType={ {icon: appleIcon, title: "Glucides", bgColor: "bg-yellow-400/[0.1]"} } />
          <CardInfo count={ `${user.keyData.lipidCount }g` } cardType={ {icon: cheeseburgerIcon, title: "Lipides", bgColor: "bg-pink-500/[0.1]"} } />
        </div>
      </div>
    </main>
  )
}
