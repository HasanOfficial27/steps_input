import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  des: string;
  children: ReactNode;
};

export default function FormWrapper({
  title,
  des,
  children,
}: FormWrapperProps) {
  return (
    <>
      <h1
        style={{
          color: "rgb(6,2,32",
          fontFamily: "'Open Sans', sans-serif",
          fontSize: "25px",
          margin: "0",
          fontWeight: "bold",
          textTransform: "capitalize",
        }}
      >
        {title}
      </h1>
      <p
        style={{
          margin: "5px 0 20px 0",
          fontFamily: "'Open Sans', sans-serif",
          color: "rgba(23,42,26,0.7",
          lineHeight: "19px",
          fontSize: "16px",
        }}
      >
        {des}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        {children}
      </div>
    </>
  );
}
