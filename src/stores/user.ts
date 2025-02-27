import { User } from '@supabase/supabase-js';
import { create } from 'zustand';

interface UserState {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
}

const useBearStore = create<UserState>()((set) => ({
  user: undefined,
  setUser: (user: User | undefined) => set({ user })
}));

export default useBearStore;
