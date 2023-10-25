import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

type TBearStoreState = {
    bears: number;
    color: string;
    size: string;
    increasePopulation: ()=>void;
    removeAllBears: ()=>void;
    reset:()=>void;
    // getOwner: () => Promise<string>;
};

// export const useBearStore = create<TBearStoreState>()(devtools((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   // getOwner: async () => {
//   //   const response = await fetch('https://api.github.com/users/1');
//   //   const owner = await response.json();
//   //   console.log(owner.name);
//   //   return owner.name;
//   // }
// }), {
//   // if it is production environment, just change =>  enabled: false
//   enabled: true,
//   name: "bear store",
// }))

export const useBearStore = create<TBearStoreState>()(persist((set) => ({
  bears: 0,
  color: "red",
  size: "big",
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  reset: ()=>set(state=>({
    bears: state.bears,
    color: "red",
    size: "big"
  }))
}), {
  name: "bear store",
  partialize: (state) =>
  Object.fromEntries(
    Object.entries(state).filter(([key]) => !['size','color'].includes(key))
  ),

  // partialize: (state) => ({ bears: state.bears }),
  // if we want to store in session storeage, use below argument, but default is localStorage.
  // storage: createJSONStorage(()=>sessionStorage),
  }
));