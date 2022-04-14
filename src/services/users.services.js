import {constants} from "../constants";

export const usersServices = {
    getAllUsers:()=> fetch(constants.apiUrl + 'users').then(value => value.json())

}