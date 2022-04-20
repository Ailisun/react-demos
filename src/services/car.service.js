import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carService = {
    getAll:() => axiosService.get(urls.cars), //завжди витягує інформацію з сервера
    getById: (id) => axiosService.get(`${urls.cars}/${id}`),
    create:(car) => axiosService.post(urls.cars, car), //записуємо інформацію
    // updateById: (id) => axiosService.patch()
    updateById: (id, newCar) => axiosService.put(`${urls.cars}/${id}`, newCar),
    deleteById:(id) => axiosService.delete(`${urls.cars}/${id}`) //видаляємо
}

export {
    carService
}
// СRUD - create, read, update, delete or delete
