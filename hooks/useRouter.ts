import { useRouter } from "next/navigation";

// Custom hook for navigation
export const useNavigation = () => {
    const router = useRouter();

    const back = () => {
        router.back();
    };

    const forward = () => {
        window.history.forward();
    };

    const reload = () => {
        router.refresh();
    };

    return {
        back,
        forward,
        reload,
    };
};
