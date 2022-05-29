// Next
import Link from "next/link";

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
    return (
        <div className={Style.content}>
            <div>
                <div className={Style.contentContainer}>
                    <div className={Style.imageColumn}>
                        <img src={image} alt={name} className={Style.image} />
                    </div>
                    <div className={Style.contentColumn}>
                        <h1 className={Style.title}>{name}</h1>
                        <div className={Style.statusContainer}>
                            <div className={`${status === "Alive" ? Style.statusAlive : status === "Dead" ? Style.statusDead : Style.statusUnknown}`} />
                            <div className={Style.statusText}>{status}</div>
                        </div>
                        <small className={Style.location}>{location.name}</small>
                        <Link href="/" passHref>
                            <a className={Style.turnBackButton}>Geri Dön</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default memo(Character);