import { useContext } from "react";
import Title from "../components/Title";
import { AuthContext } from "../providers/AuthProvider";

const AddStudent = () => {
  const { user } = useContext(AuthContext);
  const handleStudent = (e) => {
    e.preventDefault();
    const form = e.target;
    const student = {
      name: form.name.value,
      roll: form.roll.value,
      remarks: form.remarks.value,
      teacher: user?.email,
    };
    console.log(student);
  };
  return (
    <div className="w-11/12 mx-auto">
      <Title>Add new Student</Title>
      <form
        onSubmit={handleStudent}
        className="mx-auto w-full max-w-lg  space-y-5 py-10"
      >
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          className="input input-bordered w-full "
        />
        <div className="flex gap-2">
          <input
            name="roll"
            type="number"
            placeholder="Student Roll"
            className="input input-bordered "
          />
          <input
            type="text"
            name="remarks"
            placeholder="remarks"
            className="input input-bordered flex-1"
          />
        </div>
        <button type="submit" className="btn-primary btn w-full">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
