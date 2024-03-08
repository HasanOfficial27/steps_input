import FormWrapper from "../FormWrapper";
type Step3Prop = {
  addonsNo: number;
  addonsTitle: string;
};
type Step4Data = {
  nam: string;
  email: string;
  number: string;
  pPrice: number;
  pIndex: number;
  pType: string;
  addn: number[];
};

export default function Step4({
  nam,
  email,
  number,
  pPrice,
  pType,
  addn,
}: Step4Data) {
  const addoness: Step3Prop[] = [
    { addonsNo: 0, addonsTitle: "Support" },
    { addonsNo: 1, addonsTitle: "live chat" },
    { addonsNo: 2, addonsTitle: "Contact" },
  ]; //dont forgat to change in step 3
  return (
    <FormWrapper title="Summary" des="Check out the info you provided.">
      <div className="outControl">
        Name: <span>{nam}</span>
      </div>
      <div className="outControl">
        Email: <span>{email}</span>
      </div>
      <div className="outControl">
        Number: <span>{number}</span>
      </div>

      <div className="outControl">
        Plan:
        <span>
          ${pPrice}/{pType == "month" ? "mo" : "ye"}
        </span>
      </div>

      <div className="outAddnsCon">
        {addn.map((val, i) => {
          if (val == 0) {
            return (
              <div key={i} className="outAddns">
                {addoness[val].addonsTitle}
              </div>
            );
          } else if (val == 1) {
            return (
              <div key={i} className="outAddns">
                {addoness[val].addonsTitle}
              </div>
            );
          } else if (val == 2) {
            return (
              <div key={i} className="outAddns">
                {addoness[val].addonsTitle}
              </div>
            );
          }
        })}
      </div>
      {/* {   let nextid = 1;
    for (let j = 0; j < (addns.length as number); j++) {
      if (addn[j] == i) {
        //alert("same!"); //uiuiuiui
        const index = addn.indexOf(i);
        setAddns([...addns.splice(index, 1, 9)]);
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
      }
    }} 
       {addones.map((addn, i: number) => {
        <div key={i}>
          Addones {addn} and i is {i}
        </div>;
      })} */}
    </FormWrapper>
  );
}
