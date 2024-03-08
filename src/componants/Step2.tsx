import { useState } from "react";
import FormWrapper from "../FormWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faPuzzlePiece,
  faGamepad,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

type PlansProps = {
  planNo: number;
  planTitle: string;
  planPrice: { month: number; year: number };
  planImg: any;
}[];
type FormData2 = {
  pPrice: number;
  pIndex: number;
  pType: string;
};
type FormData2Props = FormData2 & {
  updateData: (fields: Partial<FormData2>) => void;
};

export default function Step2({
  // pPrice,
  pIndex,
  pType,
  updateData,
}: FormData2Props) {
  const plans: PlansProps = [
    {
      planNo: 0,
      planTitle: "arcade",
      planPrice: { month: 9, year: 96 },
      planImg: faPuzzlePiece,
    },
    {
      planNo: 1,
      planTitle: "advanced",
      planPrice: { month: 12, year: 130 },
      planImg: faGamepad,
    },
    {
      planNo: 2,
      planTitle: "pro",
      planPrice: { month: 15, year: 165 },
      planImg: faTrophy,
    },
  ];

  const [priceType, setPriceType] = useState(pType);
  const [planIndex, setPlanIndex] = useState(pIndex);
  //const [price, setPrice] = useState(pPrice);

  const updatePlan = (i: number) => {
    setPlanIndex(i);
    // priceType == "month"
    //   ? setPrice(plans[i].planPrice.month)
    //   : setPrice(plans[i].planPrice.year);
    updateData({
      pIndex: i,
      pPrice:
        priceType == "month"
          ? plans[i].planPrice.month
          : plans[i].planPrice.year,
      pType: priceType,
    });
  };
  // const dataUpdate = () => {
  //   updateData({ pIndex: planIndex, pPrice: price });
  // };

  const togglePriceChange = () => {
    if (priceType == "year") {
      setPriceType("month");
      //setPrice(plans[planIndex].planPrice.month);
      updateData({
        pIndex: planIndex,
        pPrice: plans[planIndex].planPrice.month,
        pType: "month",
      });
    } else {
      setPriceType("year");
      //setPrice(plans[planIndex].planPrice.year);
      updateData({
        pIndex: planIndex,
        pPrice: plans[planIndex].planPrice.year,
        pType: "year",
      });
    }
  };
  return (
    <FormWrapper
      title="Select your plan"
      des="You have the option of monthly or year billing."
    >
      <div>
        {plans.map((plan, i: number) => (
          <div
            key={i}
            onClick={() => updatePlan(i)}
            className={"plan " + `${pIndex == i ? "activePlan" : ""}`}
          >
            <div className="planIconCon">
              <FontAwesomeIcon icon={plan.planImg} />
            </div>
            <div className="planContent">
              <h4>{plan.planTitle}</h4>
              <p>
                $
                {priceType == "month"
                  ? plan.planPrice.month + "/mo"
                  : plan.planPrice.year + "/ye"}
              </p>
            </div>
            {pIndex == i && (
              <div
                style={{
                  marginLeft: "auto",
                  marginRight: "10px",
                  color: "rgb(14, 99, 236)",
                }}
              >
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
            )}
          </div>
        ))}
        {/* price month and year  */}
        <div className="toggleCon">
          <span className={pType == "month" ? "activePlanPeriod" : ""}>
            Monthly
          </span>
          <div onClick={togglePriceChange} className="togglebtn">
            <span className={pType == "month" ? "month" : "year"}></span>
          </div>
          <span className={pType == "year" ? "activePlanPeriod" : ""}>
            yearly
          </span>
        </div>
      </div>
    </FormWrapper>
  );
}
