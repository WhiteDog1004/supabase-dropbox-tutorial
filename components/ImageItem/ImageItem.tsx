import { Typography } from "@material-tailwind/react";
import Image from "next/image";

export const ImageItem = () => {
	return (
		<div className="w-full flex flex-col gap-2 p-4 border rounded-2xl">
			<div>
				<Image
					src={"/images/wolf.png"}
					width={80}
					height={80}
					alt={"animal"}
					className="w-full aspect-square rounded-2xl"
				/>
			</div>
			<Typography className="text-center">Wolf</Typography>
		</div>
	);
};
