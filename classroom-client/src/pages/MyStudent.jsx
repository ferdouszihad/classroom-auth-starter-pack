import Title from "../components/Title";

const MyStudent = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Title>Manage Students</Title>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Roll</th>
              <th>Name</th>
              <th>Remarks</th>
              <th className="w-[200px]">Options</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td className="space-x-3">
                <button className="btn btn-sm btn-outline btn-primary">
                  Update
                </button>
                <button className="btn btn-sm btn-outline btn-error">
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyStudent;
