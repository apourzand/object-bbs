
// https://marmelab.com/blog/2020/07/02/manage-your-jwt-react-admin-authentication-in-memory.html
const inMemoryJWTManager = () => {
    let inMemoryJWT = null;

    // This listener allows to disconnect another session of react-admin started in another tab
    window.addEventListener('storage', (event) => {
        if (event.key === 'ra-logout') {
            inMemoryJWT = null;
        }
    });

    const getToken = () => inMemoryJWT;

    const setToken = (token) => {
        inMemoryJWT = token;
        return true;
    };

    const ereaseToken = () => {
        inMemoryJWT = null;
        return true;
    }

    return {
        ereaseToken,
        getToken,
        setToken,
    }
};

export default inMemoryJWTManager();