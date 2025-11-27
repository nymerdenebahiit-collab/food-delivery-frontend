export const Card = () => {
  return (
    <div className="w-full bg-black">
      <div
        aria-label="Outer part of the card"
        className="bg-[#FFF] p-4 flex flex-col gap-5 w-[365px] h-[310px] rounded-[20px]"
      >
        <div
          aria-label="Card's image"
          className="w-80 h-[170px] bg-blue-500"
        ></div>
        <div aria-label="Card's contents"></div>
      </div>
    </div>
  );
};
