let store = {};

const globalStore = {};

globalStore.set = (key, value) => {
    store = { ...store, [key]: value };
    return store
}

globalStore.get = () => {
    return store;
}


export default globalStore;
