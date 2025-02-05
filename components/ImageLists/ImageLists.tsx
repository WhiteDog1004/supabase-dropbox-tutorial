import { ImageItem } from "../ImageItem";

export const ImageLists = () => {
	return (
		<div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-3">
			<ImageItem />
			<ImageItem />
		</div>
	);
};
