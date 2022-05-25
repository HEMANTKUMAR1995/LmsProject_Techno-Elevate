import { useState } from "react";
// import GlobalNavBar from "./GlobalNavBar";
// import "./Login.css";
import "./Application.css";

function Application() {
  const [userData, setuserData] = useState({
    userName: "",
    passWord: "",
    role: "",
  });
  const [localData, setlocalData] = useState();

  const [DataError, setDataError] = useState("");
  const [RequiredData, setRequiredData] = useState("");
  const [empError, setempError] = useState("");
  const [passError, setpassError] = useState("");

  //localstorage  set
  localStorage.setItem(
    "userData",
    JSON.stringify([
      { userName: "Deepti", passWord: "deepti123", role: "Admin" },
      { userName: "Satyam", passWord: "satyam123", role: "Mentor" },
      { userName: "Ranjith", passWord: "ranjit123", role: "Empolyee" },
      { userName: "Hemant", passWord: "hemant123", role: "Empolyee" },
      { userName: "Vidyashree", passWord: "vidya123", role: "Empolyee" },
    ])
  );

  //localstorage get
  let getData = JSON.parse(localStorage.getItem("userData"));
  // console.log(getData.passWord);

  //ChangeEvent
  let changeEvent = (e) => {
    setuserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    console.log(userData);
  };
  // <div>
  //  // user Data Validation
  // // let validateAdmin = () => {
  // //   if (userData.userName && userData.passWord) {
  // //     let isData = getData.map((val) => {
  // //       if (
  // //         val.userName === userData.userName &&
  // //         val.passWord === userData.passWord
  // //       ) {
  // //         return true;
  // //       }
  // //       // } else if (userData.userName !== val.userName) {
  // //       //   setempError("invalid username");
  // //       // } else if (userData.passWord !== val.passWord) {
  // //       //   setpassError("invalid password");

  // //       // }
  // //       else {
  // //         return false;
  // //       }
  // //     });
  // //     return isData.includes(true);
  // //   } else {
  // //     setRequiredData("Enter EmployeeId and Password");
  // //   }
  // // };

  // let userNameValidation = () => {
  //   if (userData.userName) {
  //     let isUserName = getData.map((val) => {
  //       if (val.userName === userData.userName) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     });
  //     console.log(isUserName);
  //     for (let i = 0; i < isUserName.length; i++) {
  //       if( isUserName[i] === true){
  //         return true;
  //         break;
  //       }
  //       else {
  //         setempError("invalid Emp ID");
  //         return false;
  //       }
  //     }
  //     // console.log(isUserName);
  //     // return isUserName;
  //   } else {
  //     setempError("Emp required");
  //   }
  // };

  // let passWordValidation = () => {
  //   if (userData.passWord) {
  //     let isPassWord = getData.map((val) => {
  //       if (val.passWord != userData.passWord) {
  //         setpassError("invalid Password");
  //         return false;
  //       } else {
  //         return true;
  //       }
  //        });
  //     console.log(isPassWord);
  //     return isPassWord;
  //   } else {
  //     setpassError("Password required");
  //   }
  // };

  // //Login Validation
  // // let login = () => {
  // //   let isAdmin = validateAdmin();
  // //   if (isAdmin) {
  // //     console.log("Validation passed");
  // //   } else {
  // //     setDataError("Entered Data is invalid...");
  // //   }
  // // };
  // </div>

  let userNameValidation = () => {
    let crossCheck;
    if (userData.userName) {
      let isUserName = getData.map((val) => {
        if (val.userName === userData.userName) {
          crossCheck = true;
          return crossCheck;
        } else {
          setempError("invalid Emp ID");
          crossCheck = false;
          return crossCheck;
        }
      });
      console.log(crossCheck);
      return isUserName;
    }
  };

  let passWordValidation = () => {
    let crossCheck;
    if (userData.passWord) {
      let isUserName = getData.map((val) => {
        if (val.passWord === userData.passWord) {
          crossCheck = true;
          return crossCheck;
        } else {
          setempError("invalid Password");
          crossCheck = false;
          return crossCheck;
        }
      });
      console.log(crossCheck);
      return isUserName;
    }
  };

  let login = () => {
    userNameValidation();
    passWordValidation();
    if (userNameValidation && passWordValidation) {
      alert("Welcome");
    } else {
      alert("retry");
    }
  };

  return (
    <div className="Login">
    <legend>Employee Id</legend>
      <input className="EmpiIdFeild"
        placeholder="useName"
        name="userName"
        value={userData.userName}
        onChange={changeEvent}
      />
      <br />
      {empError && <p style={{ color: "red" }}>{empError}</p>}

      <legend>Password</legend>
      <input
      className="PasswordFeild"
        placeholder="passWord"
        name="passWord"
        value={userData.passWord}
        onChange={changeEvent}
      />
      <br />
      {passError && <p style={{ color: "red" }}>{passError}</p>}
      {DataError && <p style={{ color: "red" }}>{DataError}</p>}
      {RequiredData && <p style={{ color: "red" }}>{RequiredData}</p>}

      <button onClick={login}>Login</button>
    </div>
  );
}
export default Application;
