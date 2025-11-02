
/*  The first three digits in each number are operator codes
 make print to console like this
(063) 111 1234
(333) 456 8768
(444) 657 5547
*/
let st = `063-111-1234
(333) 456-8768
4446575547`;

let formatted = st.replace(/\(?(\d{3})\)?[-\s]?(\d{3})[-\s]?(\d{4})/g, '($1) $2 $3');

console.log(formatted);


