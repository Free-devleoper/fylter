//Modules
// CommonJS EVERY file is module(by default)
//Modules - Encapslated Code (only share minimum)
const names=require('./4-names')
const sayHi=require('./5-utils')
const data=require('./6-alternative-flavor')

sayHi('susan')
sayHi(names.jhone)
sayHi(names.peter)
require('./7-mind-gernade')