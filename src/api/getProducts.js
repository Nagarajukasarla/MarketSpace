

export const getProducts = async () => {
    try {
        const response = await fetch ('https://dummyjson.com/products', {
            method: 'GET',
        });

        if (response.ok) {
            return await response.json();
        }
        else {
            console.log("Not found");
            return false;
        }

    }
    catch (e) {
        return new Error(`Error occured: ${e}`);
    }
};