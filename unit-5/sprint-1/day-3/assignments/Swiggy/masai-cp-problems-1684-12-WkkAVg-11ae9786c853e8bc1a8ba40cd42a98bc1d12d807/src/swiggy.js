function UserInfo(name,location) {
    this.name=name;
    this.location=location;
}

function serveFood(food) {
   return `Serving ${food} to ${this.name} in ${this.location}`;
}
function serveIn(name,location,food) {
    let userInfo=new UserInfo(name,location);
    return serveFood.call(userInfo,food);
}
function billNote(total) {
    return `${this.name}'s bill is INR ${total}`
}
function generateInVoice(name,location,quantity,price) {
    let userInfo=new UserInfo(name,location);
    return billNote.apply(userInfo,[quantity*price]);
}

export { UserInfo, serveIn, serveFood, billNote, generateInVoice };
