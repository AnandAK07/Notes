function Artist(skill,location){
    this.skill=skill;
    this.location=location;
    this.print=function(){
        console.log(`is having ${this.skill}`)
    }
}

let Amar=new Artist("singer","Goa");
let Akbar=new Artist("chef","Mumbai");
let Anthony=new Artist("Magician","Kashmir");

Amar.print.call(Akbar);
Amar.print.call(Anthony);
Akbar.print.call(Amar);
Akbar.print.call(Anthony);
Anthony.print.call(Amar);
Anthony.print.call(Akbar);
console.log(Amar.location);
