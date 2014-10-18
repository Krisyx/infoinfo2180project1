var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
var search = function(lastName)
{
    var contactLength = contacts.length;
    for(var x=0; x<contactsLength; x++)
    {
        if(lastName === contacts[x].lastName)
        {
            printPerson(contacts[x]);
        }
    }
}

search("Jones");

function add(firstName,lastName,email,phoneNumber) {
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.phoneNumber=phoneNumber;
}
contacts[contacts.length]=new add("yy","yyy","tt","3434434");
list();