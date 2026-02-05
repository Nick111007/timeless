import './App.css'
import './Hero.css'
import './Proposal.css'

import daniel_img from '../src/images/daniel_millers.jpg'
import jackson_img from '../src/images/jackson_johnson.jpg'
import michelle_img from '../src/images/michelle_smith.jpg'
import rachel_img from '../src/images/rachel_brown.jpg'
import {Link} from "react-router";

function App()
{

  return (
    <>
        <div className="hero">
            <div className="hero_contents">
                <h5 className="hero_est">Est. October 27, 2025</h5>
                <h1 className="hero_name">Together We Nourish</h1>
                <p className="hero_description">
                    “When we share what we have, we multiply hope’,
                    we aim to ensure that no one in our community goes
                    without a meal or basic necessity”
                </p>
                <Link to="/products" style={{color: "white"}}>
                    <button className="hero_button">Volunteer Now</button>
                </Link>
            </div>
        </div>
        <div className="team">
            <TeamMember
                name="Daniel Miller"
                role="Program Coordinator"
                email="danielmtwn@gmail.com"
                desc="Our program coordinator, Daniel Miller, is in charge of planning, managing budgets and records, and anessential to our organizations success!"
                image={daniel_img}
            />
            <TeamMember
              name="Michelle Smith"
              role="Fundraising Coordinator/Grant Writer"
              email="michelletwn@gmail.com"
              desc="Michelle Smith, fundraising coordinator and grant writer, plans all our events that help us collect money to help others! She also researches possible grants for our organization."
              image={michelle_img}
          />
          <TeamMember
              name="Rachel Brown"
              role="Advertisement Assistant"
              email="brownracheltwn@gmail.com"
              desc="Rachel Brown is our advertisement assistant. She helps us promote our organization and attract people who are interested in helping. She also works for other organizations too."
              image={rachel_img}
          />
          <TeamMember
              name="Jackson Johnson"
              role="Volunteer Coordinator"
              email="jjacksontwn@gmail.com"
              desc="Jackson Johnson recruits potential volunteers and directs them to different task. He also coordinates our team meetings and address amy questions regarding volunteer hours and work."
              image={jackson_img}
          />
      </div>
        <div className="about">
            <h1 className="about_header"> Our Mission </h1>
            <p className="about_text">
                At Together We Nourish, our mission is to provide food and essential necessities to those in need within our community. Based in Freehold, NJ, we believe that a little goes a long way. We strive to make everyday life easier for others while inspiring compassion and expanding our reach to communities beyond our own
            </p>

        </div>
    </>
  )
}

function TeamMember({ name, role, email, desc, image }:{ name: string, role: string, email: string, desc: string, image: string })
{
    return (
        <div className="team_member">
            <img className="team_member_img" src={image} alt=""/>

            <div>
                <h3 className="team_member_role" >{role}</h3>
                <h1 className="team_member_name" >{name}</h1>
            </div>

            <p className="team_member_desc">{desc}</p>
            <h3 className="team_member_email">{email}</h3>
        </div>
    )
}

export default App
