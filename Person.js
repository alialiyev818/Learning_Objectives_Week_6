function Person(firstname, lastname, date_of_birth) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.date_of_birth = new Date(date_of_birth);

    this.fullName = function() {
        return this.firstname + ' ' + this.lastname;
    };

    this.age = function() {
        var today = new Date();
        var birthYear = this.date_of_birth.getFullYear();
        var age = today.getFullYear() - birthYear;


        if (today.getMonth() < this.date_of_birth.getMonth() || 
            (today.getMonth() === this.date_of_birth.getMonth() && today.getDate() < this.date_of_birth.getDate())) {
            age--;
        }

        return age;
    };

    this.toString = function() {
        return this.fullName() + ' is ' + this.age() + ' years old!';
    };
}

var person = new Person('John', 'Doe', '1990-01-01');
console.log(person.toString()); 
