import Cookie from 'js-cookie';

export const setCookie = (cookieName, token) => {
    Cookie.set(cookieName, token, {
        expires: 1,
        secure: true,
        sameSite: 'Strict',
        path: "/",
    });
};

export default setCookie;