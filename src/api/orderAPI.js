import axios from 'axios';

const baseURL = 'http://hh.autodrive-agency.ru/test-tasks/front/task-7/'

export async function sendOrderRequest(formData) {
    try {
        const response = await axios.post(baseURL, formData);
        return response;
    } catch (error) {
        console.error(error)
    }

}