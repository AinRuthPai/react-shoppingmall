import { useHistory } from "react-router-dom";

function Card({ shoes }) {
  const history = useHistory();

  return (
    <div className='col-md-4'>
      <img
        className='cardImg'
        src={`https://ainruthpai.github.io/imgSrc/shoeshop/shoes${shoes.id + 1}.jpg`}
        alt='shoesImg'
        onClick={() => {
          history.push("/detail/" + shoes.id);
        }}
      />
      <h5
        className='cardTitle'
        onClick={() => {
          history.push("/detail/" + shoes.id);
        }}>
        {shoes.title}
      </h5>
      <p>{shoes.content}</p>
      <p>{shoes.price}원</p>
      <p>재고 : {shoes.stock}</p>
      {/* <Test /> */}
    </div>
  );
}

export default Card;
