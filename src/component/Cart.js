import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function Cart(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {state.reducer.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.id + 1}</td>
                <td>{a.name}</td>
                <td>{a.quan}</td>
                <td>
                  <button
                    className='count'
                    onClick={() => {
                      dispatch({ type: "countUp", data: a.id });
                    }}>
                    +
                  </button>

                  <button
                    className='count'
                    onClick={() => {
                      dispatch({ type: "countDown", data: a.id });
                      if (a.quan < 1) {
                        a.quan = 1;
                      }
                    }}>
                    -
                  </button>
                </td>
                <td>
                  <button onClick={() => {}}>❌</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {props.alertOpen === true ? (
        <div className='my-alert'>
          <p>지금 구매하시면 20% 할인</p>
          <button
            onClick={() => {
              dispatch({ type: "alertClose" });
            }}>
            닫기
          </button>
        </div>
      ) : null}
    </>
  );
}

export default Cart;
