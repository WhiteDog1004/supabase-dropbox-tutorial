"use server";

import { createServerSupabaseClient } from "@/utils/supabase/server";

const handleError = (error) => {
	console.log(error);
	throw error;
};

export const uploadFile = async (formData: FormData) => {
	const supabase = await createServerSupabaseClient();
	const file = formData.get("file") as File;

	const { data, error } = await supabase.storage
		.from(process.env.NEXT_PUBLIC_STORAGE_BUCKET)
		// upsert : 같은 name이 있으면 덮어쓰고 없으면 insert
		.upload(file.name, file, { upsert: true });

	if (error) {
		handleError(error);
	}

	return data;
};

export const searchFiles = async (search: string = "") => {
	const supabase = await createServerSupabaseClient();

	const { data, error } = await supabase.storage
		.from(process.env.NEXT_PUBLIC_STORAGE_BUCKET)
		.list(null, { search });

	if (error) {
		handleError(error);
	}

	return data;
};

export const deleteFile = async (fileName: string) => {
	const supabase = await createServerSupabaseClient();

	const { data, error } = await supabase.storage
		.from(process.env.NEXT_PUBLIC_STORAGE_BUCKET)
		.remove([fileName]);

	if (error) {
		handleError(error);
	}

	return data;
};
