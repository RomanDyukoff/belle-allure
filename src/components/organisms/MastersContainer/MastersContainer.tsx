"use client";

import { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import galya from "@/assets/images/galya.png";
import nina from "@/assets/images/nina.png";
import valya from "@/assets/images/valya.jpg";
import zina from "@/assets/images/zina.png";
import { AdaptiveContainer } from "@/components/atoms/AdaptiveContainer/AdaptivContainer";
import { Title } from "@/components/atoms/TItle/Title";
import { useCn } from "@/hooks/useCn";

import styles from "./index.module.scss";

interface MastersDataType {
	name: string;
	id: string;
}

interface ImagesDataType {
	src: StaticImageData;
	id: string;
}

const dataImage: ImagesDataType[] = [
	{ src: galya, id: "1" },
	{ src: valya, id: "2" },
	{ src: zina, id: "3" },
	{ src: nina, id: "4" },
];

const dataMasters: MastersDataType[] = [
	{ name: "Галя", id: "1" },
	{ name: "Валя", id: "2" },
	{ name: "Зина", id: "3" },
	{ name: "Нина", id: "4" },
];

export const MastersContainer = () => {
	const cx = useCn(styles);
	const [imageIndex, setImageIndex] = useState(0);
	const [isHovering, setIsHovering] = useState(false);

	const handleMouseEnter = (id: string) => {
		setIsHovering(true);
		setImageIndex(dataImage.findIndex((image) => +image.id === +id));
	};

	const handleMouseLeave = () => {
		setIsHovering(false);
	};

	useEffect(() => {
		let interval: NodeJS.Timeout;

		if (!isHovering) {
			interval = setInterval(() => {
				setImageIndex((prevIndex) => (prevIndex + 1) % dataImage.length);
			}, 2000);
		}

		return () => clearInterval(interval);
	}, [isHovering]);

	return (
		<section className={cx("masters")}>
			<AdaptiveContainer>
				<Title classNames={cx("masters__title")} levet="h2">
					Наши мастера
				</Title>
				<div className={cx("masters__wrapper")}>
					<ul className={cx("masters__list")}>
						{dataMasters.map(({ name, id }) => (
							<li
								key={id}
								className={cx("masters__item")}
								onMouseEnter={() => handleMouseEnter(id)}
								onMouseLeave={handleMouseLeave}
							>
								<span>{name}</span>
								<ArrowForwardIcon className={cx("arrow")} />
							</li>
						))}
					</ul>

					<div className={cx("masters__images")}>
						<div className={cx("masters__image")}>
							<Image src={dataImage[imageIndex].src} alt="photo" />
						</div>
					</div>
				</div>
			</AdaptiveContainer>
		</section>
	);
};
