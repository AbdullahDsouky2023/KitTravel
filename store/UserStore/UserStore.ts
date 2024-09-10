import { create } from "zustand";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface UserStore {
  user: User;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: {
    id: "alif",
    name: "alif",
    email: "alif@gmail.com",
    role: "admin",
  },
  setUser: (user: User) => set({ user }),
    }));