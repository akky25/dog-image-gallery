type docApiResType = {
  message: string[];
  status: string;
};

// eslint-disable-next-line import/prefer-default-export
export const fetchImages = async (breed: string): Promise<string[]> => {
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random/12`
  );
  if (!response.ok) {
    throw new Error("API ERROR");
  }
  const data = (await response.json()) as docApiResType;

  return data.message;
};
