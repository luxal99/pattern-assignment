interface UseGetValueFromJsonProp {
  object: any;
  path: string;
}

export const useGetValueFromJson = ({
  object,
  path,
}: UseGetValueFromJsonProp) => {
  if (!object || !path) {
    return "";
  }

  const value = path.split(".").reduce((prev, curr) => {
    return prev ? prev[curr] : null;
  }, object);

  if (!value) {
    return "";
  }
  if (!value && typeof value !== "number") {
    return "";
  }

  return path.split(".").reduce((prev, curr) => {
    return prev ? prev[curr] : null;
  }, object);
};
