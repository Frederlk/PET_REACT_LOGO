import { useHttp } from "../helpers/http.hook";

const useVkInfo = () => {
    const { request, clearError, process, setProcess } = useHttp();

    const _apiBase = "http://localhost:8010/proxy/method/",
        _apiKey = "access_token=5531395a5531395a5531395af1554df2c1555315531395a37a1c4df9d0fb37cecb7d2bb",
        _apiV = "v=5.131";

    const getGroup = async (id) => {
        const res = await request(`${_apiBase}groups.getById?group_id=${id}&fields=members_count&${_apiKey}&${_apiV}`);
        return res.response[0];
    };

    const getMembers = async (id) => {
        const res = await request(
            `${_apiBase}groups.getMembers?group_id=${id}&offset=120&fields=photo_50&count=20&${_apiKey}&${_apiV}`
        );
        return res.response.items;
    };

    return {
        process,
        setProcess,
        clearError,
        getGroup,
        getMembers,
    };
};

export default useVkInfo;
