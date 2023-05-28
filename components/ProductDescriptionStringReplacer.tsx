import React from "react";

const ProductDescriptionStringReplacer = ({string, i}) => {
  const [displayedNumber, setDisplayedNumber] = React.useState(string.replace(/.{0,4}$/, 'XXXX'))
  if (string === '\n\n') return <br />
  if (string === '\n') return <br />
  return <span key={string + i} onClick={() => setDisplayedNumber(string)}>{displayedNumber}</span>
};

export default ProductDescriptionStringReplacer;
