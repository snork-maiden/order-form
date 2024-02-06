import { createStore } from "vuex"

const state = {
    citiesList: [
        {
            id: 1,
            name: "Москва"
        },
        {
            id: 2,
            name: "Санкт-Петербург"
        },
        {
            id: 3,
            name: "Казань"
        }
    ],
    currentCityId: null,

}
const getters = {
    getCitiesList(state) {
        return state.citiesList
    },
    getCurrentCityId(state) {
        return state.currentCityId
    },
}

const actions = {}

const mutations = {
    currentCityId(state, payload) {
        if (payload.cityId === null) {
            state.currentCityId = payload.cityId;
            return
        }

        const ids = state.citiesList.map(city => city.id)
        if (!ids.find(payload.cityId)) {
            throw new Error('This city id does not exist')
        }
        state.currentCityId = payload.cityId;
    }
}



export default createStore({
    state,
    getters,
    actions,
    mutations
})