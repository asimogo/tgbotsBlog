export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    return {
        status: 1,
        msg: 'ok' + query.id
    }
})
