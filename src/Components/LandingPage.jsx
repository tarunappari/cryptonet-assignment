import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const LandingPage = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      let res = await axios.get(
        "https://randomuser.me/api/?page=1&results=1&seed=abc"
      );
      if (res.data) {
        setData(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <LandingPageContainer>
      <div>
        {data.results.map((profile, i) => (
          <li key={i} className="cardContainer">
            <div className="imgContainer">
              <img src={profile.picture.large} alt="pic" />
            </div>
            <div className="info">
              <div className="nameDiv">
                <h2 className="first">{profile.name.first}</h2>
                <h2 className="last">{profile.name.last}</h2>
              </div>
              <div>
                <p className="email">{profile.email}</p>
              </div>
              <div>
                <p className="gender">{profile.gender}</p>
              </div>
              <div>
                <p className="phone">Phone : {profile.phone}</p>
              </div>
            </div>
          </li>
        ))}
      </div>
    </LandingPageContainer>
  );
};

export default LandingPage;

let LandingPageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-top: -2rem;
  background-color: #e2e2e2;
  li {
    list-style-type: none;
  }
  .cardContainer {
    display: flex;
    box-shadow: 3px 8px 20px 1px #888888;
    .imgContainer {
      display: flex;
      justify-content: center;
      img {
        width: 14rem;
      }
      border-bottom: 2.7rem solid #fc9173;
      border-top: 2.7rem solid #fc9173;
      border-left: 2.7rem solid #fc9173;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      border-bottom: 2.7rem solid #cccbcb;
      border-top: 2.7rem solid #cccbcb;
      border-right: 2.7rem solid #cccbcb;
      padding: 1rem 1.5rem;
      .nameDiv {
        display: flex;
        justify-content: space-between;
        padding: 0.4rem;
        .first{
            font-size: 2rem;
            font-weight: 800;
            letter-spacing: 0.2rem;

        }
        .last{
            font-size: 1.2rem;
            align-self: flex-end;
            padding-bottom: 0.3rem;
            letter-spacing: 1px;
        }
      }
      .email{
        color: #f9704a;
      }
      .email,.gender,.phone{
        font-weight: 550;
      }
    }
  }
`;
