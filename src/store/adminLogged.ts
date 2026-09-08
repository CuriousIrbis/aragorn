import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type IAdminStore from "../types/adminStore";

const useAdminStore = create(
    persist<IAdminStore>(
        (set) => ({
            isLogged: false,

            setIsLogged: (status: boolean) => set(() => ({isLogged: status}))
        }),
        {
            name: 'logged-admin-status',
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)

export default useAdminStore;