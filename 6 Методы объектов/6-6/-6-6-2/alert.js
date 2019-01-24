"use strict";

function applyAll(func, ...rest) {
    return func.apply(null, rest);
}