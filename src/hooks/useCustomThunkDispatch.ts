import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store/store";

const useCustomThunkDispatch = () => {
    const useThunkDispatch = () => useDispatch<AppDispatch>();
    const thunkDispatch = useThunkDispatch();
    return thunkDispatch;
};

export { useCustomThunkDispatch };