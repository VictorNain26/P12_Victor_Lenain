import Logo from "../assets/logo.svg";

export const Header = () => {

  return (
    <header className="flex items-center justify-between bg-black h-[91px] shadow-xl">
      <div>
        <img src={ Logo } alt="Logo" className="w-44 h-16 ml-7 cursor-pointer" />
      </div>
      <ul className="flex grow justify-around text-white text-2xl">
        <li className="cursor-pointer">Accueil</li>
        <li className="cursor-pointer">Profil</li>
        <li className="cursor-pointer">Réglage</li>
        <li className="cursor-pointer">Communauté</li>
      </ul>
    </header>
  );
}
