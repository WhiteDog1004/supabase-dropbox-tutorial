"use client";

import { FileDragDrop } from "@/components/FileDragDrop";
import { Header } from "@/components/Header";
import { ImageLists } from "@/components/ImageLists";
import { SearchInput } from "@/components/SearchInput";
import { useState } from "react";

export const MainClientPage = () => {
	const [searchValue, setSearchValue] = useState("");

	return (
		<div className="p-4 flex flex-col gap-4">
			<Header />
			<SearchInput
				searchInput={searchValue}
				setSearchInput={setSearchValue}
			/>
			<FileDragDrop />
			<ImageLists />
		</div>
	);
};
