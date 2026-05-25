"use client";
import { api } from "@/lib/api/api";
import { useEffect, useState } from "react";
import { CharacterCard } from "./components/CharacterCard/index";
import "./style.css";
import { StatusBoton } from "./components/StatusBoton";
import { GenderBoton } from "./components/GenderBoton";
import { Paginacion } from "./components/Paginacion";

const Home = () => {
  const [characters, setCharacter] = useState<character[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [info, setInfo] = useState<info>();
  const [status, setStatus] = useState<string>("Dead");
  const [indexStatus, setindexStatus] = useState<number>(0);
  const [gender, setGender] = useState<string>("Female");
  const [indexGender, setIndexGender] = useState<number>(0);
  const [input, setInput] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [noHayResultados, setnoHayResultados] = useState<boolean>(false);

  const fetchData = () => {
    try {
      api
        .get(
          `/character/?status=${status}&gender=${gender}&name=${input}&page=${page}`,
        )
        .then((res) => {
          setCharacter(res.data.results);
          setInfo(res.data.info);
        })
        .finally(() => setLoading(false));
    } catch (error) {
      console.log(error);
      setnoHayResultados(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [status, gender, page]);

  if (loading) return <h1>Loading...</h1>;

  

  return (
    <div className="charactersConteiner">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            setPage(1);
            fetchData();
          }
        }}
      />
      <h3>Filtros:</h3>
      <div className="filtros">
        <div className="filtroStatus">
          <p>Status</p>
          <StatusBoton
            setStatus={setStatus}
            index={indexStatus}
            status={status}
            setIndex={setindexStatus}
            setPage={setPage}
            
          />
        </div>
        <div>
          <p>Gender</p>
          <GenderBoton
            setGender={setGender}
            setIndex={setIndexGender}
            gender={gender}
            index={indexGender}
            setPage={setPage}
          />
        </div>
      </div>

        
      <div className="characterList">
        {noHayResultados ? (
          <h1>no hay results</h1>
        ) : (
          characters &&
          characters.map((character) => (
            <CharacterCard character={character} key={character.id} />
          ))
        )}
      </div>
      {info && <Paginacion setPage={setPage} actualPage={page} info={info}/>}
    </div>
  );
};

export default Home;
