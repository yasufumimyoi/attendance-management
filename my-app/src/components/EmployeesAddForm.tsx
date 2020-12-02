//react hook formを入れたい
//データベースにinsertさせる
//追加後ダッシュボード画面に移動させる

const EmployeesAddForm = () => {
  return (
    <div>
      <h3>新規従業員追加</h3>
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button>追加</button>
      </form>
    </div>
  );
};

export { EmployeesAddForm };
