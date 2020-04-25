import decodeJwt from 'jwt-decode';

const clientId = process.env.REACT_APP_CLIENT_ID;
const accessTokenEndpoint = `${process.env.REACT_APP_AUTH_URL}${process.env.REACT_APP_ACCESS_TOKEN_ENDPOINT}`;

const authProvider = {
    login: ({username, password}) =>  {
        const oAuthParams = {
            grant_type: "password",
            username: username,
            password: password,
            client_secret: process.env.REACT_APP_CLIENT_SECRET,
            client_id: clientId,
        };
        const body = Object.keys(oAuthParams).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(oAuthParams[key]);
        }).join('&');
        const request = new Request(accessTokenEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(( {access_token} ) => {
                const decodedToken = decodeJwt(access_token);
                localStorage.setItem('token', access_token);
                localStorage.setItem('permissions', decodedToken.realm_access.roles);
            });
    },
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('permissions');
        return Promise.resolve();
    },
    checkAuth: () => localStorage.getItem('token')
        ? Promise.resolve()
        : Promise.reject(),
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    getPermissions: () => {
        const role = localStorage.getItem('permissions');
        return role ? Promise.resolve(role) : Promise.reject();
    }
};

export default authProvider;