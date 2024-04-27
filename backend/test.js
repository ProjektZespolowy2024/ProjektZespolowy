app.get('/', (request, response) => {
    console.log(request)
    const currentDate = new Date();
    return response.status(234).send('TESTING Hello World! TESTING') 
})
