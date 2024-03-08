import FormWrapper from "../FormWrapper";

type FormData1 = {
  nam: string;
  email: string;
  number: string;
};
type FormDataProps = FormData1 & {
  updateData: (fields: Partial<FormData1>) => void;
};
export default function Step1({
  nam,
  email,
  number,
  updateData,
}: FormDataProps) {
  return (
    <FormWrapper
      title="Personal Info"
      des="Please provide your name, email address, and phone number."
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={nam}
        onChange={(e) => updateData({ nam: e.target.value })}
        placeholder="e.g. Stephen King"
        required
      />
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => updateData({ email: e.target.value })}
        placeholder="e.g. stphen@lorem.com"
        required
      />
      <label htmlFor="number">Phone Number</label>
      <input
        type="text"
        id="number"
        name="number"
        value={number}
        onChange={(e) => updateData({ number: e.target.value })}
        placeholder="e.g. 0123456789"
        required
      />
    </FormWrapper>
  );
}
