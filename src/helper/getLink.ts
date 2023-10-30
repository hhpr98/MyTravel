export const getLink = (img: ImageProperies): string => {
  if (img?.type === "Google Drive")
    return `https://drive.google.com/uc?export=view&id=${img.id}`;
  if (img?.url)
    return img.url;
  return "";
};

export const getAllImages = (album: ImageAlbums): string[] =>
  album.images.map((image) => getLink(image));
