type Employee = {
  id: number;
  name: string;
  age: number;
};

//モーダル入れて編集出来るようにしたい

const EmployeesDetails: React.FC<Employee> = ({ id, name, age }) => {
  return (
    <div>
      <p>ID:{id}</p>
      <p>氏名:{name}</p>
      <p>年齢:{age}</p>
      <button>編集する</button>
    </div>
  );
};

export { EmployeesDetails };
