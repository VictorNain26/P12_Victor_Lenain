interface CardType {
  bgColor: string;
  icon: string
  title: string
}

export const CardInfo = ({ count, cardType }: { count: string, cardType: CardType }) => {
  return (
    <div className="flex items-center py-8 pl-8 bg-zinc-50 rounded w-[258px]">
      <div className={`flex justify-center items-center ${cardType.bgColor} rounded-md w-[60px] h-[60px] mr-6`}>
        <img src={ cardType.icon } alt="icon" className="" />
      </div>
      <div className="">
        <p className="font-bold text-xl">{ count }</p>
        <p className="text-sm text-gray-500">{ cardType.title }</p>
      </div>
    </div>
  );
}
