import { Typography } from "@material-tailwind/react";

export const FileDragDrop = () => {
	return (
		<div className="w-full border-2 border-dotted border-indigo-700 flex flex-col items-center justify-center relative">
			<div className="py-20 flex flex-col">
				<input
					type="file"
					className="w-full h-full absolute left-0 top-0 opacity-0"
				/>
				<Typography>
					파일을 여기에 끌어다 놓거나 클릭하여 업로드하세요!
				</Typography>
			</div>
		</div>
	);
};
