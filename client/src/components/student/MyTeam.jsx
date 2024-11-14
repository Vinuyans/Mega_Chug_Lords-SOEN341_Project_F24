
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation} from "react-router-dom";

function MyTeam() {

//get the teammates--in this case temporarily hardcode them
const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "Alice A"},
    { id: 2, name: "Bob B"},
    { id: 3, name: "Charlie C"}
]);



    return(
        <div style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#6596A8",
            padding: "30px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
            borderRadius: "10px",
            width: "700px",
            color: "white",
            fontFamily: "'Poppins', sans-serif",
            textAlign: "center",
            zIndex: 1000
        }}>

{/*Display the name of the team as well as its teammates */}
<h1 style={{ fontSize: "38px", marginBottom: "20px", fontWeigh: "bold" }}>Team Name: MegaChugLords</h1>
            <ul style={{
                listStyle: "none",
                padding: 0,
                textAlign: "left",
                fontSize: "16px",
                lineHeight: "1.6"
            }}>
                {/*will have to replace this part- check for the teacher course view--it will take the names from the db */}
                {teamMembers.map(member => (
                    <li key={member.id} style={{ marginBottom: "12px", fontSize: "20px", display:"flex", alignItems:"left"}}>
                        {member.name}

                        {/*include a rate button--for now it does nothing */}
                        
                        <button style={{
                            backgroundColor: "transparent",
                            color: "white",
                            border: "solid" ,
                            borderRadius: "4px",
                            padding: "6px 12px",
                            cursor: "pointer",
                            fontSize: "14px",
                            marginLeft: "auto"
                        }}>
                            Rate
                        </button> {/*for now it has no functionality, will need to add an onclick to link it with the Part of the rating form later on*/}
                    </li>
                ))}
            </ul>





        </div>
    );



};

export default MyTeam;