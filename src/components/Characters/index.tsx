// Next
import Link from "next/link";

// React
import type { FC, ReactElement } from "react";
import { v4 as uid } from "uuid";

// Style
import Style from "./style.module.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperProps } from "swiper/react";
import "swiper/css";

const Settings: SwiperProps = {
    slidesPerView: "auto"
};

type CharactersProps = {
    characters?: ICharacter[]
}

const Characters: FC<CharactersProps> = ({
    characters = []
}: CharactersProps): ReactElement<CharactersProps> => {
    return (
        <Swiper {...Settings} className={Style.slider}>
            {characters.map(character => (
                <SwiperSlide key={uid()} className={Style.item}>
                    <Link href={`/character/${character.id}`}>
                        <a className={Style.link}>
                            <div className={Style.overlay} />
                            <img src={character.image} alt={character.name} className={Style.image} />
                            <div className={Style.content}>
                                <h1 className={Style.title}>{character.name}</h1>
                                <div className={Style.statusContainer}>
                                    <div className={`${character.status === "Alive" ? Style.statusAlive : character.status === "Dead" ? Style.statusDead : Style.statusUnknown}`} />
                                    <div className={Style.statusText}>{character.status}</div>
                                </div>
                                <small className={Style.location}>{character.location.name}</small>
                            </div>
                        </a>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};


export default Characters;