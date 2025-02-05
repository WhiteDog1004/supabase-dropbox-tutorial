import { Typography } from "@material-tailwind/react";
import Image from "next/image";

export const Header = () => {
	return (
		<div className="flex flex-row gap-2 items-center">
			<div className="w-7 h-7">
				<Image
					src={"/images/dropbox_icon.png"}
					width={30}
					height={30}
					alt={"logo"}
				/>
			</div>
			<Typography variant="h3" className="font-bold">
				Dogbox
			</Typography>
		</div>
	);
};
