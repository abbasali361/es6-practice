const person = {name: 'Jack William', age:17, job: 'facebooker',gfName: 'Ema Watson',address: 'Kocho Khet',phone: '01920880101',friends: ['Tom hancks','Tom cruise','Tom yearn'] };

const {phone} = person;

const complexObject = {
    name: 'abc',
    info: {
        address: 'Kola bagan',
        leader: 'Tiger Leader'
    }
}
const {leader} = complexObject.info;
// const {phone, gfName, address, salary} = person;
// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone, address, salary);
// console.log(gfName, phone , address, salary);
// console.log(gfName, phone , address, salary);

const friends = ['Sakib khan','Arman khan', 'Amir khan', 'Salman khan'];
// const [chotoFriend, nextFriend] = friends;
// console.log(chotoFriend, nextFriend);
const [chotoFriend, ...olderF] = friends;
// console.log(chotoFriend, nextFriend);
// console.log(restFriends);
console.log(olderF);