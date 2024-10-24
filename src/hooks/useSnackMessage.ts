import { useState } from "react"

const useSnackMessage = () => {
    const [isOpenSnackBar, setIsOpenSnackBar] = useState<boolean>(false);
    const showSnackBar = () => setIsOpenSnackBar(true);
    const closeSnackBar = () => setIsOpenSnackBar(false);

    return { isOpenSnackBar, showSnackBar, closeSnackBar };
};

export { useSnackMessage };