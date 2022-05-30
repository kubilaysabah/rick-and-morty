// Next
import { useRouter } from "next/router";

// React
import type { FC, ReactElement } from "react";
import { useEffect, useState } from "react";

// Style
import Style from "./style.module.css";

// Components
import { Characters } from "components";

const Episode: FC<IEpisode> = ({
  air_date,
  characters,
  created,
  episode,
  id,
  name,
  url
}: IEpisode): ReactElement<IEpisode> => {
  const { back } = useRouter();
  const [characterList, setCharacterList] = useState<ICharacter[]>([]);

  useEffect(() => {
    (async (): Promise<void> => {
      let list: ICharacter[] = [];

      for await (const character of characters) {
        const response = await fetch(character);
        list.push(await response.json());
      }

      setCharacterList(list);
    })();
  }, [characters]);

  return (
    <div className={Style.content}>
      <div>
        <div className={Style.contentContainer}>
          <h1 className={Style.title}>{name} <span className={Style.code}>{episode}</span></h1>
          <small className={Style.smallTitle}>{air_date}</small>
        </div>
        <Characters characters={characterList} />
        <button onClick={back} className={Style.turnBackButton}>Geri Dön</button>
      </div>
    </div>
  );
};


export default Episode;