export async function login({ username, password}) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (username === 'Dom' && password === 'pass') {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    });
}