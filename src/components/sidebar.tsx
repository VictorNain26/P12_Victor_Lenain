import icons from "../assets/nav-l.png";

export const Sidebar = () => {

  return (
    <aside className="flex flex-col items-center justify-end bg-black min-h-screen w-[117px] -mt-[91px] shadow-xl z-[-10]">
      <div className="flex grow flex-col justify-center bg-red">
        <img src={ icons } alt="icons" />
      </div>
      <p className="flex text-white text-xs -rotate-90 mb-28 whitespace-nowrap">Copiryght, SportSee 2020</p>
    </aside>
  );
}
