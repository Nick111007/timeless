import './Products.css'
import './index.css'
import {useEffect, useState} from "react";



function Products()
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [day, setDay] = useState(0);
    const [month, setMonth] = useState(0);
    const [stored, setStored] = useState<{Name: string, Email: string, Month: number, Day: number}[]>(localStorage.getItem("appointments") ? JSON.parse(localStorage.getItem("appointments") as string) : []);

    useEffect( ()=>{
            localStorage.setItem("appointments", JSON.stringify(stored));
        }, [stored]

    )
    return (
        <div className="container">
            <div className="scheduler">
                <h1 className="scheduler_title">Volunteer Form</h1>
                <div className="scheduler_contents">
                    <div className="left">
                        <div className="scheduler_inputs">
                            <div className="scheduler_input">
                                <h3>Full Name</h3>
                                <input className="scheduler_input_name" type="text" onChange={(e) => {
                                    e.target.value = e.target.value + "";
                                    setName(e.target.value);
                                }}/>
                            </div>
                            <div className="scheduler_input">
                                <h3>Email</h3>
                                <input className="scheduler_input_email" type="text" onChange={(e) => {
                                    e.target.value = e.target.value + "";
                                    setEmail(e.target.value);
                                }}/>
                            </div>
                            <div className="scheduler_input">
                                <h3>Volunteer Date</h3>
                                <input className="scheduler_input_date" type="date" onChange={(e) => {
                                    e.target.value = e.target.value + "";

                                    const dates: string[] = e.target.value.split('-');
                                    setDay(Number(dates[2]));
                                    setMonth(Number(dates[1]));
                                }}/>
                            </div>
                        </div>
                        <div className="scheduler_options">
                            <button className="scheduler_options_submit" onClick={()=>{

                                var appointments: {Name: string, Email: string, Month: number, Day: number}[] = getAppointments();
                                appointments.push({
                                    Name: name,
                                    Email: email,
                                    Month: month,
                                    Day: day
                                });

                                setStored(appointments);
                            }}>Submit Form</button>
                            <button className="scheduler_options_cancel">Cancel</button>
                        </div>
                    </div>
                    <div className="right">
                        <h3 className="right_title">Scheduled</h3>
                        <div className="appointments">
                            {
                                stored.map((appointment, index) =>
                                    <Appointment name={appointment.Name} email={appointment.Email} day={appointment.Day} month={appointment.Month} remove={()=>{
                                        const temp = [];
                                        for(let i = 0; i < stored.length; i++)
                                            if(i !== index)
                                                temp.push(stored[i]);
                                        setStored(temp);
                                    }}/>)
                            }
                        </div>
                        <h4 className="right_hours">Total Hours: {stored.length * 4}</h4>
                    </div>
                </div>
            </div>
        </div>

    )
}

function Appointment({ name, email, month, day, remove}:{ name: string, email: string, month: number, day: number, remove:()=>void})
{
    return (
        <div className="appointment">
            <div className="appointment_contact">
                <h4 className="appointment_name">{name}</h4>
                <h4 className="appointment_email">{email}</h4>
            </div>
            <h3 className="appointment_date">{getMonthShort(month)} - {day}</h3>
            <h4 className="appointment_cancel" onClick={remove}
            >X</h4>
        </div>
    )
}

function getAppointments()
{
    var appointments: {Name: string, Email: string, Month: number, Day: number}[] = localStorage.getItem("appointments") != null ? JSON.parse(localStorage.getItem("appointments") as string) : [];
    return appointments;
}

function getMonthShort(x: number) {
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    return months[x - 1] || "";
}

export default Products;