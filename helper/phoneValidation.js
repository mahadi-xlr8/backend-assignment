// checking if it is a valid phone number accourding to our country
module.exports=(phone)=>{
    if(phone.match(/^(\+88)?01([0-9]{9})$/g))return true;
    return false;
}