import fs from 'fs';

import esprima from 'esprima';
import { findGlobals } from './variables';
import { informalObjects } from './informal'
import { findClones } from './clones';
import { findFunctionDefinitions } from './quality';
import { findMutatedVariables, findUsesOfVariable } from './animation';

var filename = 'animated_shapes.js';
var code = fs.readFileSync('corpus/' + filename);
var ast = esprima.parse(code);

var globals = findGlobals(ast);
var objects = informalObjects(globals);

console.log(objects);

findClones(ast);

findFunctionDefinitions(ast);

var mutatedVariables = findMutatedVariables(ast, globals);
console.log(`mutated variables = ${mutatedVariables}`);

findUsesOfVariable(ast, "ballX");
