import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
      </thead>
      <tbody>
        {props.state.map((a, i) => {
          return (
            <tr key={i}>
              <td>{a.id}</td>
              <td>{a.name}</td>
              <td>{a.quan}</td>
              <td>
                <button
                  className='count'
                  onClick={() => {
                    props.dispatch({ type: "countUp" });
                  }}
                >
                  +
                </button>

                <button
                  className='count'
                  onClick={() => {
                    props.dispatch({ type: "countDown" });
                  }}
                >
                  -
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

function cartData(state) {
  return {
    state: state,
  };
}

export default connect(cartData)(Cart);
