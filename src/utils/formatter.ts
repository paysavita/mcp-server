export const formatResource = (name: string, data: any) => {
  return {
    type: "resource",
    name,
    timestamp: new Date().toISOString(),
    data
  };
};