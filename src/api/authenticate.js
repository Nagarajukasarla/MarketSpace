
export const authenticate = async (username, password) => {
    try {
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                username: `${username}`,
                password: `${password}`
            })
        });

        if (response.ok) {
            return await response.json();
        }
        else {
            console.log(response.status);
            return false;
        }
    }
    catch (e) {
        return new Error(`An error occurred: ${e}`);
    }
};

export default authenticate;