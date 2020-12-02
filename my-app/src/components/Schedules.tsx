import { useEffect } from "react";

//react-big-calendarを使ってみる？

const Schedules = () => {
  //認証ステータスで取ってくるデータを決定させる？
  //区分でrenderさせる内容変更させる？
  useEffect(() => {
    console.log("Fetch");
  }, []);

  return (
    <div>
      <p>従業員シフト一覧</p>
    </div>
  );
};

export { Schedules };
