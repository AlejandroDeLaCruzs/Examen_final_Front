import "./style.css";

export const StatusBoton = ({
  setStatus,
  setIndex,
  index,
  status,
  setPage,
}: {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  status: string;
}) => {
  const typesStatus: string[] = ["Dead", "Alive", "unknown"];

  return (
    <div className="statusBoton">
      <button
        onClick={() => {
          setStatus(typesStatus.at(index) as string);
          setPage(1);
          if (index + 1 < 3) {
            setIndex(index + 1);
          } else {
            setIndex(0);
          }
        }}
      >
        {status}
      </button>
    </div>
  );
};
