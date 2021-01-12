 import Datastore from '@google-cloud/datastore'

export const datastore = new Datastore.Datastore()

export async function saveEntity(keyArray, formattedData) {
    const key = datastore.key(keyArray)
    const entity = {
        key: key,
        data: formattedData
    }
    try {
        await datastore.save(entity)
        console.log(`${key.name} created successfully.`)
    } catch (err) {
        console.error('ERROR:', err)
    }
    return key
}

export function formatData(fieldNames, object) {
    return fieldNames.map(name => ({
        name: name,
        value: object[name]
    })).filter(it => typeof it.value !== 'undefined')
}