import {constants} from '../constants';

export const postsServices = {
    getAllPosts: () => fetch(constants.apiUrl + 'posts').then(value => value.json())
}