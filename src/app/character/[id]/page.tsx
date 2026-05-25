"use client";

import { CharacterCardById } from "@/app/components/CharacterCard";
import { api } from "@/lib/api/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "./style.css"

const CharacetById = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<character>();
  const [loading, setLoading] = useState<boolean>(true);

  const feecthData = () => {
    try {
      api
        .get(`/character/${id}`)
        .then((res) => setCharacter(res.data))
        .finally(() => setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    feecthData();
  }, [id]);

  if (loading) return <h1>Loading...</h1>;

  return <div className="characterById">{character && <CharacterCardById character={character} />}</div>;
};

export default CharacetById;
