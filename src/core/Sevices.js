
export function httpPost  (objParams, uri) {
    return new Promise((resolve, reject) => {
        try {
            
            fetch (uri, {
                method: "post",
                timeout: 30 * 1000,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(objParams)
            })
                .then(response => response.json())
                .then(res => {
                    resolve(res);
                }).catch(function (error) {
                    reject(error);
                })
        }
        catch (error) {
            reject(error);
        }
    })
}
export function httpGet (objParams, uri) {
    return new Promise((resolve, reject) => {
        try {
            fetch(uri, {
                method: "Post",
                timeout:  30 * 1000,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(objParams)
            })
                .then(response => response.json())
                .then(res => {
                    resolve(res);
                }).catch(function (error) {
                    reject(error);
                })
        }
        catch (error) {
            reject(error);
        }
    })
}