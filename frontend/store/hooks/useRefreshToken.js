import axios from "axios";
import useAuthStore from "../authStore";

const useRefreshToken = () => {
    const { setToken } = useAuthStore();

    const refresh = async () => {
        const uninterceptedAxiosInstance = axios.create();
        const data = {
            "refresh": localStorage.getItem('refresh-token')
        };

        const response = await uninterceptedAxiosInstance.post('/auth/token/refresh', data);
        setToken(response.data.access);

        return response.data.access;
    }

    return refresh;
};

export default useRefreshToken;
