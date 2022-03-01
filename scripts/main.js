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

insert_users_name();
read_display_quote();