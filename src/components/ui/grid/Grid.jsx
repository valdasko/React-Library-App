import './grid.css';
// apjuosiantis elementas suteikiantis papildomu stiliaus ar funkciju dalyku
function Grid(props) {
  let finalClass = props.cols === 2 ? 'cols2 myGrid' : 'myGrid';
  finalClass += props.cols === 1 ? 'cols1' : '';

  /**
   * turi grazinti klase kuria panaudosim su div
   * props.cols === 2 ? 'cols2 myGrid'
   * props.cols === 1 ? 'cols1 myGrid'
   * kitais atvejais  myGrid
   */
  function calculateClass() {
    let finalValue = 'myGrid';
    if (props.cols === 2) {
      finalValue += ' cols2';
    } else if (props.cols === 1) {
      finalValue += ' cols1';
    }
    return finalValue;
  }

  console.log('finalClass ===', finalClass);
  return <div className={calculateClass()}>{props.children}</div>;
}
export default Grid;
