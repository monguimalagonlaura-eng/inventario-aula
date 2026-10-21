import test from 'node:test';
import assert from 'node:assert/strict';
import { actualizarStock } from '../src/inventario.js';
test('agrega cinco materiales', () => {
assert.equal(actualizarStock(10, 5), 15);
});
test('retira tres materiales', () => {
assert.equal(actualizarStock(10, -3), 7);
});
test('impide retirar mas de lo disponible', () => {
assert.throws(() => actualizarStock(2, -3),
/Stock insuficiente/);
});