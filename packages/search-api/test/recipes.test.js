import chai from 'chai';
import recipes from '../src/recipes.js';

const { expect } = chai;

describe('recipes routing module', function () {
    it('should exist', function () {
        expect(recipes).to.be.ok;
    });
});
