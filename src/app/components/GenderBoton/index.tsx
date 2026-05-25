import "./style.css";

export const GenderBoton = ({
  setGender,
  setIndex,
  index,
  gender,
  setPage,
}: {
  setGender: React.Dispatch<React.SetStateAction<string>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  gender: string;
}) => {
  const typesGender: string[] = ["Female", "Male", "Genderless", "unknown"];

  return (
    <div className="genderBoton">
      <button
        onClick={() => {
          setGender(typesGender.at(index) as string);
          setPage(1);
          if (index + 1 < 4) {
            setIndex(index + 1);
          } else {
            setIndex(0);
          }
        }}
      >
        {gender}
      </button>
    </div>
  );
};
