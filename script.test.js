// const items = {
// 	item1: 'banana',
// 	item2: 'apple',
// 	item3: 'manggo',
// 	item4: 'pear',
// 	item5: 'strowberry'
// }

// Object.entries(items).forEach(([key, val], index) => {
// 	console.log(key, val, index)
// })

// range(0.01, 0.08)
// console.log(Math.random() * (0.08 - 0.01) + 0.01)

// const test = () => {return {data: 'something'}}

// console.log(test())

// const myObj = {
// 	fName: 'someone',
// 	lName: 'hihihiha',
// 	fullName: function () {
// 		return this.fName + ' ' + this.lName
// 	} 
// }

// const secondObj = {
// 	fName: 'hifapfdf',
// 	lName: 'sogppgod'
// }


// console.log(myObj.fullName.bind(secondObj)())

// if; else; try; catch; var; 
// let; const; finally; function; 
// typeof; class p {}; return; 
// throw; yield; this; continue; 
// for(); while; contructor; break; 
// new; delete; switch; case; default; 
// debugger; import; from; delete; do; 
// extends; export; async; await; else if;
// null; package; in; instanceof; true; false;
// satisfies; asserts; as; with; void; of;


const myObj = {
	name: '',
	class: '',
	changeName: function (value) {
		this.name = value
	},
	changeClass: function (value) {
		this.class = value
	}
}

console.log(myObj.name, myObj.class)

myObj.changeName('kajfdl')
myObj.changeClass('lkfja')

console.log(myObj.name, myObj.class)