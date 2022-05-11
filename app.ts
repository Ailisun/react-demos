// const show = (arr:string[]) =>{ //вказуємо тип стрінгів, який повертається
//     arr.slice()
//
// }
//
// const show2 = (a:number, b:number):number => {
//     return a+b
// }
//
// const show3 = (a:number, b:number):void => { //void означає, що фун-я нічого не повертає
// }

// const show4 = (a:number, b:number):number|string => { //вказуємо, що може повертати або число, або стрінгу
// return 'sdfg'
// }
//
// const ex1 = { name:'Max', age:15}
// const shoeUser = (user:{name:string, age:number}):void=>{
//     user.age
// }
// type UniqId = number //референс на тип
//
// interface IUser<T> { // шаблон по якому буде створений обєкт
//     id:UniqId,
//     age:number,
//     name:string,
//     address?:{
//         street:string,
//         house:number
//     },
//     arr:T[] //коли ми не знаємо що саме будемо повертати, може бути чесло, може бути стрічка
// }

// const user:IUser = {age:45, name:'Ann', id:6}

// const user:{name:string, age:number} = {age:45, name:'Ann'}
// const user2:Partial<IUser> = {age:49, name:'Kate'} //partial часткове використання інтерфейсу
// const user3:IUser<number> = {age:45, name:'Ann', id:6, arr:[1,2,4]}// Т - дженерік, ми можемо потім вказати що хочем

// class User {
//    private id:number, //заборонити використання полів в інших юзерах, по замовчуванню вони публічні і ми маємо доступ
//     readonly name:string, //readonly - не можна змінювати
//     age?:number
//
//     constructor(id: number, name: string, age: number) {
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
//     getId():number {
//        return this.id
//     }
// }
// const user:User = {age:15, id:66, name:'Mykola'}


interface IShapeActions { //example of using implements
    area:() =>number;
    perimeter:() =>number;
}

class Triangle implements IShapeActions{
    constructor(private a:number, private b:number, private c:number) {
    }
    area(): number {
        return this.a*this.b*this.c
    }

    perimeter(): number {
        return this.a + this.b +this.c
    } //implements наслідування

}

class Rectangle implements IShapeActions{
    constructor(private a:number, private b: number){

    }
    area(): number {
        return this.a*this.b
    }

    perimeter(): number {
        return this.a + this.b
    }

}

const shapes:IShapeActions[]=[ new Rectangle(3,5,), new Triangle(2,4,7)]
for (let shape of shapes){
    console.log(shape.area());
    console.log(shape.perimeter());
}