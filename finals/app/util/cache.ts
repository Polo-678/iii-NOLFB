const tokenMap = new Map<string, string>();

export const tokenCache = {
  getToken: async (key: string) => {
    return tokenMap.get(key) || null; // Return token or null if not found
  },
  saveToken: async (key: string, token: string) => {
    tokenMap.set(key, token); // Save token
  },
};
