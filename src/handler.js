const notes = require('./notes.js');

const getAllNotes = (request,h) =>({
    status : 'success',
    data : {
        notes
    }
});
const addNotes = (request,h) => {
    const {title, tags, body} = request.payload;
    const id = Math.random();
    const createdAt = new Date().toISOString();
    const newNote = {
        id,
        title,
        tags,
        body,
        createdAt
    };
    notes.push(newNote);
    const isSuccess = notes.filter((note) => note?.id === id).length > 0;
    if(isSuccess) {
        const response = h.response({
            status :'success',
            message : 'Congratulation your notes has been succsessfully added',
            data : {
                noteId : id,
            }
        });
        response.code(201);
        return response;
    };

    const response = h.response({
        status :'failed',
        message :'Something went wrong'
    });
    response.code(404);
    return response;

}

module.exports = {getAllNotes}