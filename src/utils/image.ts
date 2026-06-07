export const getImage = (folder: string, fileName: string) => {
  if (!folder && !fileName) return null;
  const bucker_url = import.meta.env.VITE_APP_BUCKET_URL || "";
  return `${bucker_url}/${folder}/${fileName}`;
};
