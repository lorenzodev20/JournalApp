import journalApi from "@/api/journalApi"

export const loadEntries = async ({ commit }) => {
    const { data } = await journalApi.get('/entries.json')
    if ( !data ){
        commit('setEntries',[])
        return
    }
    const entries = []
    for( let id of Object.keys(data) ){
        entries.push({
            id,
            ...data[id]
        })
    }
    commit('setEntries',entries)
}
export const updateEntry = async ({ commit }, entry) => {
    const { id, date, picture, text } = entry
    // const dataTosave = JSON.stringify(entry)
    const dataTosave = { date, picture, text }
    const { data } = await journalApi.put(`/entries/${id}.json`, dataTosave)
    commit('updateEntry',data)
}
export const createEntry = async ({ commit }, entry) => {
    const { date, picture, text } = entry
    const dataTosave = { date, picture, text }
    const { data } = await journalApi.post(`/entries.json`, dataTosave)
    dataTosave.id = data.name
    commit('addEntry',dataTosave)
    return data.name
}
export const deleteEntry = async ({ commit }, id) => {
    await journalApi.delete(`/entries/${id}.json`)
    commit('deleteEntry',id)
    return id
}