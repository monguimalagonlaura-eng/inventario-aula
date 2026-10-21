export function actualizarStock(stock, movimiento) {
if (!Number.isInteger(stock) || stock < 0) {
throw new Error('Stock invalido');
}
if (!Number.isInteger(movimiento)) {
throw new Error('Movimiento invalido');
}
const nuevoStock = stock + movimiento;
if (nuevoStock < 0) {
throw new Error('Stock insuficiente');
}
return nuevoStock;
}