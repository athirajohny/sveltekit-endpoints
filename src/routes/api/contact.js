export const post = (request) => {
    const formBody = JSON.parse(request.body)
    const name = formBody.name
    const email = formBody.email
    return {
        body: {
            // message : 'ok',
            name,email,undefined
        },
    };
};