const accountId = 144
let accountEmail = "vjyrawat6july@gmail.com"

/*
Prefer not to use var
because of issue in block scope and functional scope.
*/
var  accountPassword = "12345"
accountCity = "khatima"
let accountState

// acountId = 123  not  allowed with const

accountEmail = "abc@gmail.com"
accountPassword = 1000
accountCity = "dehradun"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

