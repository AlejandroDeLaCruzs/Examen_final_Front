import "./style.css";

export const Paginacion = ({
  info,
  setPage,
  actualPage,
}: {
  info: info;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  actualPage: number;
}) => {

  return (
    <div className="paginacion">
      {1  < actualPage && (
        <h1 onClick={() => setPage(info.pages - 2)}>{1}</h1>
      )}
      {2 < actualPage && (
        <h1 onClick={() => setPage(info.pages - 1)}>{2}</h1>
      )}
      {3  < actualPage && (
        <h1 onClick={() => setPage(info.pages)}>{3}</h1>
      )}


      {info.prev && <h1 onClick={() => setPage(actualPage - 1)}>{"<"}</h1>}
      
      <h1>{actualPage}</h1>

      {info.next && <h1 onClick={() => setPage(actualPage + 1)}>{">"}</h1>}
      {info.pages - 2 > actualPage && (
        <h1 onClick={() => setPage(info.pages - 2)}>{info.pages - 2}</h1>
      )}
      {info.pages - 1 > actualPage && (
        <h1 onClick={() => setPage(info.pages - 1)}>{info.pages - 1}</h1>
      )}
      {info.pages > actualPage && (
        <h1 onClick={() => setPage(info.pages)}>{info.pages}</h1>
      )}
    </div>
  );
};
