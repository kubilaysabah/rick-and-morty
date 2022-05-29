// Next
import Link from "next/link";
import { useRouter } from "next/router";

// React
import type { FC, ReactElement } from "react";
import { memo } from "react";

import Style from "./style.module.css";

const Character: FC<ICharacter> = ({
    created,
    episode,
    gender,
    id,
    image,
    location,
    name,
    origin,
    species,
    status,
    type,
    url,
}: ICharacter): ReactElement<ICharacter> => {
    const { back } = useRouter();

    return (
        <div className={Style.content}>
            <div>
                <div className={Style.contentContainer}>
                    <div className={Style.imageColumn}>
                        <img src={image} alt={name} className={Style.image} />
                    </div>
                    <div className={Style.contentColumn}>
                        <div>
                            <h1 className={Style.title}>{name}</h1>
                            <div className={Style.statusContainer}>
                                <div className={`${status === "Alive" ? Style.statusAlive : status === "Dead" ? Style.statusDead : Style.statusUnknown}`} />
                                <div className={Style.statusText}>{status}</div>
                            </div>
                            <small>{location.name}</small>
                        </div>
                        <button className={Style.turnBackButton} onClick={back}>Geri Dön</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default memo(Character);