import { useState } from 'react';

interface User {
  id?: string;
  username?: string;
  email?: string;
}

export const useUser = () => {
  const [user] = useState<User | null>(null);

  return { user };
};
