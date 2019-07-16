import React from 'react'
import { connect } from 'react-redux';

const ReservationForm = () => (
    <section>
        <form method="post" action="traitement.php" />

        <fieldset>
            <p>
                <label for="firstname">First name</label>
                <input type="text" name="firstname" id="firstname" placeholder="First Name" />
            </p>

            <p>
                <label for="lastname">Last name</label>
                <input type="text" name="lastname" id="lastname" placeholder="Last Name" />
            </p>

            <p>
                <label for="youremail">Email</label>
                <input type="email" name="youremail" id="youremail" placeholder="Email address" />
            </p>

            <p>
                <label for="AdultTicket">Email</label>
                <input type="number" name="AdultTicket" id="AdultTicket" />
            </p>



            <input type="submit" name="submit" id="submit" value="send" />


        </fieldset>


    </section>
);

export default connect()(ReservationForm)
