import axios from "axios";

const useRefreshToken = () => {
    const refresh = async () => {
        const uninterceptedAxiosInstance = axios.create();
        const data = {
            "refresh": localStorage.getItem('refresh-token')
        };

        const response = await uninterceptedAxiosInstance.post('/auth/token/refresh', data);
        localStorage.setItem('access-token', response.data.access);

        return response.data.access;
    }

    return refresh;
};

export default useRefreshToken;
