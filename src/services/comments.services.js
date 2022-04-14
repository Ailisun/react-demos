import {constants} from '../constants';

 export const commentsServices = {
     getAllComments: () => fetch(constants.apiUrl + 'comments').then(value => value.json())
 }