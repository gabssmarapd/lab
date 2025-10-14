import PropTypes from 'prop-types';

function Item(props) {
  return (
    <li>
      {props.marca} - {props.ano_lancamento}
    </li>
  );
}

Item.defaultProps = {
  marca: "Não Informado",
  ano_lancamento: 0
};


export default Item;
