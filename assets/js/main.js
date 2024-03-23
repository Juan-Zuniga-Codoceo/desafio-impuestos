import Cliente from './Cliente.js';
import Impuestos from './Impuestos.js';

const impuestoDeJuan = new Impuestos(2500000, 300000);
const juan = new Cliente('Juan', impuestoDeJuan);

console.log(juan.calcularImpuesto());