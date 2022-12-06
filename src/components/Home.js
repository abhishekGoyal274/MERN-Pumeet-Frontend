import { Link } from "react-router-dom";
import Pdf from "./Documents/TENTATIVE VACANT SEATS _PUMEET AND PULEET.pdf";
const Home = () => {
  return (
    <>
      <div style={{ padding: "20px 40px 40px" }}>
        <h1>WELCOME</h1>
        <h5>
          <br />
          <div className="App">
            <a href={Pdf} style={{ color: "blue" }} target="_blank">
              TENTATIVE VACANT SEATS FOR PUMEET AND PULEET.
            </a>
          </div>
          <br />
          <br />
          <span style={{ color: "#D0342C" }}>
            To Participate in PUMEET Online Counseling admission process, it is
            mandatory for a candidate to update the following information by
            login to{" "}
            <Link to="/login" style={{ color: "blue" }}>
              https://pumeet.puchd.ac.in/.
            </Link>{" "}
            Last date for updating the following is 08th September, 2022.
          </span>
          <br />
          <br />
          <br />
          <ol>
            <li>
              BE First Year (Semester 1 and 2) percentage and Mark sheets (If
              result declared, however, it is mandatory to submit the result at
              the time of counseling)
            </li>
            <br />
            <li>Category / Subcategory Certificate Upload </li>
            <br />
            <li>Choice Filling in order of preference.</li>
          </ol>
          <br />
          <span style={{ color: "#D0342C" }}>Please Note:</span> <br />
          <br />
          <ul>
            <li>
              Failure to upload the supporting document of a particular category
              will debar the candidate for that particular category.
            </li>{" "}
            <br />
            <li>
              All the certificates/affidavit claiming reservation under various
              categories must have been issued not later than 16th September,
              2022.{" "}
            </li>
          </ul>
          <br />
          <span style={{ color: "#D0342C" }}>Merit List</span>
          <br />
          Merit List will be preparedon the basis of marks obtained by the
          candidate in PUMEET 2022 entrance test. Candidates securing equal
          marks shall be bracketed together. Their inter-se merit will be
          determined by the Institution in accordance with the following
          criteria: <br /><br />
          (i) A candidate getting higher percentage of marks in the qualifying
          examination (B.E./B.Tech. 1st& 2nd Sem.) shall rank higher in order of
          merit. <br /><br />
          (ii)That if the marks in qualifying examination are same then the
          candidates obtaining more marks in the immediate lower examination
          (i.e. 10+2), shall rank higher in order of merit. <br /><br />
          (iii)That if two or more candidates secure equal marks in (i) & (ii)
          above, candidate senior in age shall rank higher in the order of
          merit. 

          <br />
          <br/>
          <br/>

          <span style={{ color: "#D0342C" }}>
            Time and Venue of counselling:{" "}
          </span>
          <br />
          9.00 A.M. at Old Library, Block 1, UIET, Panjab University, Chandigarh
          as per counselling schedule. <br />
          1st round of Counselling for PUMEET.: 19-09-2022 <br />
          2nd Round of Counselling for PUMEET.: 27-09-2022
          <br />
        </h5>
      </div>
    </>
  );
};

export default Home;
