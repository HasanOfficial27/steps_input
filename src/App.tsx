import { FormEvent, useState } from "react";
import "./App.css";
import { Steps } from "./Steps";
import Step1 from "./componants/Step1";
import Step2 from "./componants/Step2";
import Step3 from "./componants/Step3";
import Step4 from "./componants/Step4";

type IndicatorProps = {
  stepNo: number;
  title: string;
  des: string;
};
// type AddnsProps = {
//   id: number;
//   val: number;
// };
type FormDataProps = {
  //step 1
  nam: string;
  email: string;
  number: string;
  //step 2
  pPrice: number;
  pIndex: number;
  pType: string;
  //step3
  addn: number[];
};
function App() {
  const INDICATOR: IndicatorProps[] = [
    { stepNo: 0, title: "step 1", des: "your info" },
    { stepNo: 1, title: "step 2", des: "Select plan" },
    { stepNo: 2, title: "step 3", des: "add-ons" },
    { stepNo: 3, title: "step 4", des: "Summary" },
  ];

  const FORMDATA: FormDataProps = {
    nam: "",
    email: "",
    number: "",
    pPrice: 12,
    pIndex: 1,
    pType: "month",
    addn: Array(1).slice().fill(null),
  };
  const [data, setData] = useState(FORMDATA);

  const updateData = (fields: Partial<FormDataProps>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const {
    //steps,
    step,
    currentStepIndex,
    next,
    back,
    setCurrentStepIndex,
    isFirstStep,
    isLastStep,
  } = Steps([
    <Step1 {...data} updateData={updateData} />,
    <Step2 {...data} updateData={updateData} />,
    <Step3 {...data} updateData={updateData} />,
    <Step4 {...data} />,
  ]);

  const handleIndicator = (i: number) => {
    currentStepIndex > i
      ? setCurrentStepIndex(i)
      : setCurrentStepIndex(currentStepIndex);
  };
  const submitHandle = (e: FormEvent) => {
    e.preventDefault();

    let error: boolean = false;
    const nameRegX: RegExp = /^[a-zA-Z ]*$/i;
    const emailRegX: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const numberRegX: RegExp = /^[0]+[1]+[0-9]{9}$/i;

    if (data.nam == "" || data.email == "" || data.number == "") {
      error = true;
    } else {
      //error = true;
      if (
        data.nam.match(nameRegX) &&
        data.email.match(emailRegX) &&
        data.number.match(numberRegX)
      ) {
        error = false; //Successfully go forward
        //console.log("hi");
      } else {
        error = true;
        if (!data.nam.match(nameRegX)) {
          console.log("name problem");
        }
        if (!data.email.match(emailRegX)) {
          console.log("email problem");
        }
        if (!data.number.match(numberRegX)) {
          console.log("number problem");
        }
        // else {
        //   console.log("problem");
        // }
      }
    }
    // console.log(error);

    if (!error) {
      if (!isLastStep) {
        return next();
      }
      alert("Okay boss ur data submitted!");
    }
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(180px, 240px) auto",
          gap: "30px",
          borderRadius: "10px",
          maxWidth: "700px",
          padding: "2em",
          margin: "30px auto",
          background: "white",
        }}
      >
        <div
          className="stepsCon"
          style={{
            backgroundColor: "rgb(89, 0, 255)",
            display: "flex",
            width: "100%",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: "15px",
            padding: "20px 15px",
            borderRadius: "7px",
          }}
        >
          {INDICATOR.map((indicator, i: number) => (
            <div
              key={i}
              className={currentStepIndex == i ? "indicatorActive" : ""}
              style={{
                margin: "0",
                padding: "0",
                display: "flex",
                gap: "10px",
                justifyContent: "flex-start",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => handleIndicator(i)}
            >
              <div className="stepNo">{indicator.stepNo + 1}</div>
              <div>
                <span className="stepTitle">
                  {indicator.title.toUpperCase()}
                </span>
                <h4 className="stepDes">{indicator.des.toUpperCase()}</h4>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          className="stepsAndButton"
        >
          <div className="stepContainer">{step}</div>
          <div
            className="btnContainer"
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {!isFirstStep && (
              <button
                style={{ marginRight: "auto" }}
                className="btnSub"
                onClick={back}
                type="button"
              >
                Back
              </button>
            )}
            <button className="btnSub" onClick={submitHandle} type="button">
              {isLastStep ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
