// A JavaScript Program to simulate a library system
// K. Chase Tramel - github.com/ChaseTramel

class DataHandler {
    
    saveData () {
        serialize JSON
    }      
    loadData () {
        deserialize JSON
        error handling
    }
}
class Library {
    constructor
    create empty books array
    create empty patrons array
    set standard checkout time
    set special checkout time
    set fine rate
    addBook () {
        create new Book object
        add to book array
        save data
    }
    removeBook () {
        confirm message?
        if yes
            remove Book object from book array
            save data
        if no
            return
    }
    addPatron (all patron properties)
        create new Patron object
        add to patrons array
        save data
    removePatron (IDNumber, librarian)
        confirm message?
        if yes && librarian
            remove Patron object from patrons array
            save data
        if no || librarian false
            return
    displayInfo(IDNumber, type, librarian) {
        if IDNumber {
            if type == "Patron" && librarian {
                display individual patron info
                display fine info
            } elif type == "Patron" {
                display individual patron info
            } elif type == "Book" && librarian {
                display individual book info
                display current patron
            } else {
                display individual book info
            }
        } elif {
            if type == "Book" && librarian {
                display all books with current patrons
            } elif type == "Book" {
                display all books, no patron info
            } elif type == "Patron" && librarian {
                display all patrons with fine info
            } else {
                display all patrons, no fine info
            }
        }
    }
    searchBooks (search term) {
        not sure how to implement
    }
    idExists (IDNumber) {
        if IDNumber in book array
            return true
        elif IDNumber in patron this.array
            return true
        else
            return false
    }
    getObject (IDNumber, type) {

    }
}
class Book {
    constructor
    makeBookID() {
        while idExists == true
            attemptedID = 8 random digits
            return attemptedID
        saveData 
    }
    checkOut (IDnumber, librarian) {
        get patron via getObject(IDnumber)
        if patron fine > 0
            error message, fine
        eif patron not in Library.patrons
            error message, pls register
        elif book has due date
            error message, book checked out
        else
            set book data to checked out
            if librarian
                set due date to date + librarian days
            else
                set due date to date + standard days
            success message
            save data

    }
    return () {
        if due date is not none
            calculateFine
            reset book data
            save 
        else
            error message, book is not checked out
    }
    calculateFine () {
        today is today
        if dueDate && duedate is less than today //today is after due date
            days late = (today - duedate) as days
            fine = days late * library.fineRate
    }
    displayInfo (IDNumber) {
        library.displayInfo(IDNumber, "Book", false)
    }
}
class Patron () {
    constructor
    makePatronID () {
        while idExists == true
            attemptedID = 8 random digits
            return attemptedID
        savedata    
    }
    payFine () {
        display fine info
        if fine > 0
            fine -= payment
            success message, remaining balance, if any
                if fine < 0 
                change = abs(fine)
                message giving change
                message printing fine balance
        savedata
    }
    displayInfo(IDNumber) {
        library.displayInfo(IDNumber, "Patron", false)
    }
}
class Librarian {

}