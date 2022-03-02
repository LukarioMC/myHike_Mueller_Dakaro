function read_display_quote() {
    console.log("Display Quote function ran.");

    const todaysQuotes = db.collection("quotes").doc("tuesday");

    // Get the quote from the database.
    todaysQuotes.onSnapshot( 
        tuesdayDoc => {
            let q = tuesdayDoc.data().quote;

            console.log("Current Data: " + q);
            document.getElementById("quote-placeholder").innerText = q;
        }
    )
}

function insert_users_name() {
    // Checks if the user has logged in or not.
    firebase.auth().onAuthStateChanged(
        user => {
            if(user){
                let currentUser = db.collection("users").doc(user.uid); 
                currentUser.get().then( 
                    userDoc => {
                        let users_name = userDoc.data().name;
                        console.log("User's Name: " + users_name);
                        document.getElementById("user-name-placeholder").innerText = users_name;
                    }
                );
            }
        }
    );
}

var hikesRef = db.collection("hikes");

function populateHikes() {
    hikesRef.add({
        id : "MI01",
        name : "Rolley Lake Nature Trail",
        city : "Mission",
        province : "BC",
        difficulty : "easy",
        length : "4.67km",
        details : "A beautiful hike by the lakeside."
    });
    hikesRef.add({
        id : "MI02",
        name : "Heritage Park Trail",
        city : "Mission",
        province : "BC",
        difficulty : "easy",
        length : "2.4km",
        details : "Walk around the historical heritage park."
    });
    hikesRef.add({
        id :"NV01",
        name : "Mount Seymour Trail",
        city : "North Vancouver",
        province : "BC",
        difficulty : "hard",
        length : "8.2 km",
        details : "Visit three peaks and experience stunning views."
    });
}

function generateHikesData(max) {
    for (i = 1; i <= max; i++) {
        hikesRef.add({
            id : "SomeID" + i,
            name : "Hike " + i,
            details : "Experience stunning views and nature."
        });
    }
}

function displayHikes() {
    //TODO Display hiking data
}

insert_users_name();
read_display_quote();

displayHikes();