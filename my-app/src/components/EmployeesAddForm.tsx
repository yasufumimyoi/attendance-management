import { useForm } from "react-hook-form";

//データベースにinsertさせる
//追加後ダッシュボード画面に移動させる

const EmployeesAddForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <div>
      <h3>新規従業員追加</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" ref={register} />
        <input name="age" ref={register({ required: true })} />
        {errors.age && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </div>
  );
};

export { EmployeesAddForm };
