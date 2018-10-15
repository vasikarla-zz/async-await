const users = [{
    id: 1,
    name: 'Raj',
    schoolId: 101
}, {
    id: 2,
    name: 'Sasha',
    schoolId: 201
}];
const grades = [];

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        console.log("Finding User...");
        const user = users.find((user) => user.id === id); 
        if(user){
            console.log("Able to find user");
            resolve(user);
        }else{
            reject(`Unable to find the user, with id of : ${id}`);
        }
    });
};

getUser(2).then((user) => {
    return(user);
}).then((e) => {
    console.log("Error");
});