"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type User = {
  name: string;
  email: string;
  phone: string;
  isAdmin: boolean;
  memberTier: "Premium" | "Standard";
};

type RegisteredUser = {
  name: string;
  email: string;
  password: string;
};

type AuthStore = {
  user: User | null;
  registeredUsers: RegisteredUser[];
  login: (email: string, password: string) => { success: boolean; error?: string };
  register: (name: string, email: string, password: string) => { success: boolean; error?: string };
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
};

const ADMIN_EMAIL = "admin@luxe.com";
const ADMIN_PW = "admin123";

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      registeredUsers: [],

      login: (email, password) => {
        const state = get();
        if (email === ADMIN_EMAIL && password === ADMIN_PW) {
          set({
            user: {
              name: "Julian Vance",
              email: ADMIN_EMAIL,
              phone: "+1 (555) 123-4567",
              isAdmin: true,
              memberTier: "Premium",
            },
          });
          return { success: true };
        }
        const registered = state.registeredUsers.find(
          (u) => u.email === email && u.password === password
        );
        if (registered) {
          set({
            user: {
              name: registered.name,
              email: registered.email,
              phone: "",
              isAdmin: false,
              memberTier: "Standard",
            },
          });
          return { success: true };
        }
        return { success: false, error: "Invalid email or password" };
      },

      register: (name, email, password) => {
        const state = get();
        if (email === ADMIN_EMAIL) {
          return { success: false, error: "This email is reserved" };
        }
        if (state.registeredUsers.some((u) => u.email === email)) {
          return { success: false, error: "An account with this email already exists" };
        }
        set({
          registeredUsers: [...state.registeredUsers, { name, email, password }],
          user: {
            name,
            email,
            phone: "",
            isAdmin: false,
            memberTier: "Standard",
          },
        });
        return { success: true };
      },

      logout: () => set({ user: null }),

      updateProfile: (data) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...data } : null,
        })),
    }),
    { name: "luxe-auth" }
  )
);
