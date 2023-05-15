import { useParams } from "react-router-dom";
import "../css/style.css";

import Transactionform from "../../transactionForm/components/useform";
import { useSelector } from "react-redux";
export default function Edituser() {
  const { id } = useParams();
  const transaction_redux = useSelector((state) =>
    state.transaction.find((trans) => trans.tran_id == id)
  );

  // const index = Object.values(transactionRedux)
  //   .map((item) => item.tran_id)
  //   .findIndex((did) => did == id);

  return (
    <div>
      return <Transactionform formValues={transaction_redux} userId={id} />;
    </div>
  );
}
