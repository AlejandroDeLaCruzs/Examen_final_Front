import Link from "next/link";
import "./style.css";

export const CharacterCard = ({ character }: { character: character }) => {
  return (
    <Link href={`/character/${character.id}`} className="link">
      <div className="characterConteiner">
        <img src={character.image} />
        <div className="dataCharacter">
          <h1>{character.name}</h1>
          <h2>{character.status}</h2>
          <p>{character.gender}</p>
        </div>
      </div>
    </Link>
  );
};

export const CharacterCardById = ({ character }: { character: character }) => {
  return (
    <div>
      <img src={character.image} />
      <h1>{character.name}</h1>
      <h2>{character.gender}</h2>
      <p>{character.status}</p>
      <p>{character.id}</p>
      <p>{character.origin.name}</p>
      <p>{character.location.name}</p>
    </div>
  );
};
