import { useState } from "react";
import FormWrapper from "../FormWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

type Step3Props = {
  addonsNo: number;
  addonsTitle: string;
};

type FormData3 = {
  addn: number[];
};
type FormData3Props = FormData3 & {
  updateData: (fields: Partial<FormData3>) => void;
};

export default function Step3({ addn, updateData }: FormData3Props) {
  const addones: Step3Props[] = [
    { addonsNo: 0, addonsTitle: "Support" },
    { addonsNo: 1, addonsTitle: "live chat" },
    { addonsNo: 2, addonsTitle: "Contact" },
  ]; //dont forgat to change in step 4

  const [addns, setAddns] = useState(addn); //addn==Array(1).slice().fill(9)

  const updateSelect = (i: number) => {
    let nextid = 1;
    for (let j = 0; j < (addns.length as number); j++) {
      if (addns[j] == i) {
        //alert("same!"); //uiuiuiui
        const index = addns.indexOf(i);
        setAddns([...addns.splice(index, 1, null as unknown as number)]);
        updateData({ addn: addns });
        break;
      }
      if (j == (addns.length as number) - 1) {
        //alert("sessh korse"); //jhjhjhj
        const newAddons = [
          ...addns.slice(0, nextid),
          i,
          ...addns.slice(nextid++),
        ];
        setAddns(newAddons);
        updateData({ addn: newAddons });
      }
    }
  };

  return (
    <FormWrapper title="Add-ones" des="Select any opportunity for free.">
      <div className="addonsWrapper">
        {addones.map((add, i) => (
          <div
            key={i}
            onClick={() => updateSelect(i)}
            style={{
              border: "1.6px solid rgba(143,164,146,0.34)",
              padding: "13px",
              margin: "20px 0",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              cursor: "pointer",
            }}
          >
            <h4
              style={{
                textTransform: "capitalize",
                fontSize: "19px",
                fontWeight: "bold",
                fontFamily: "'Open Sans',sans-serif",
                color: "rgba(16,14,10, 0.8)",
              }}
            >
              {add.addonsTitle}
            </h4>
            {/* <div>
              vallllll
              {addn.map((valll, i) => (
                <span key={i}> {valll}</span>
              ))}
            </div> */}

            <div
              className={
                addn.find((val) => {
                  return (val as unknown as number) == i;
                }) == i
                  ? "addnIcon activeSelect"
                  : "addnIcon"
                //(add as unknown as number) == i ? "activeSelect" : ""
              }
            >
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
          </div>
        ))}
      </div>
    </FormWrapper>
  );
}
