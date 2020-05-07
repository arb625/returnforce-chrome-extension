
window.onload = function() {
    setTimeout(function() {
        console.log("start")

        salesforce_seat_to_seat = {
            28: 0,
            29: 1,
            30: 2,
            27: 3,
            26: 4,
            25: 5,
            22: 6,
            23: 7,
            24: 8,
            21: 9,
            20: 10,
            19: 11,
        }

        seat_to_day = {
            0: 1,
            1: 2,
            2: 1,
            3: 3,
            4: 4,
            5: 3,
            6: 1,
            7: 2,
            8: 1,
            9: 4,
            10: 3,
            11: 4,
        }

        day_to_color = {
            1: "red",
            2: "yellow",
            3: "green",
            4: "blue",
        }

        circle_to_day = {
            27: 1,
            28: 2,
            29: 1,
            26: 3,
            25: 4,
            24: 3,
            21: 1,
            22: 2,
            23: 1,
            20: 4,
            19: 3,
            18: 4,
        }

        if (document.title.indexOf("Serraview") != -1) {

            function addButton() {
                setTimeout(function() {

                    var p = document.createElement("P")
                    p.id = "assignment_msg"
                    p.style.color = "green"

                    var salesforce_seat = Number(document.getElementsByClassName("popup-title ng-binding ng-scope")[0].textContent.split("-")[1])
                    var day = seat_to_day[salesforce_seat_to_seat[salesforce_seat]]
                    
                    var msg = "You've been assigned to day " + String(day) + "."
                    var t = document.createTextNode(msg);
                    p.appendChild(t)

                    var occupant_details = document.getElementsByClassName("occupant-details")[0]
                    if (!(occupant_details.textContent.includes("day"))) {
                        occupant_details.appendChild(p);
                    } else {
                        document.getElementById("assignment_msg").innerHTML = msg
                    }
                    
                }, 500)

            }

            // add listeners that assign day
            var circles = document.querySelectorAll("circle")
            for (var i = 0; i < circles.length; i++) {
                circles[i].addEventListener("click", addButton)
            }

            // color specific circles
            for (var i = 10; i < 30; i++) {
                circles[i].style.fill = day_to_color[circle_to_day[i]]
            }
        }
    }, 10000)

}