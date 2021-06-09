import {httpPost} from './Sevices';

    // module.exports = {
    //     /**
    //      * to verify the user details
    //       @param {} paramObject 
    //       @param {} baseURL 
    //      */
     export function AuthenticateUser(paramObject) {
            return new Promise((resolve, reject) => {
                httpPost(paramObject, 'http://keita.co.in/mjmart/api/register.php').then((response) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
            })
        }
    export function LoginAuthUser(paramObject) {
            return new Promise((resolve, reject) => {
                httpPost(paramObject, 'http://keita.co.in/mjmart/api/login.php').then((response) => {
                    resolve(response);
                }, (error) => {
                    reject(error);
                });
            })
        }


    // }
