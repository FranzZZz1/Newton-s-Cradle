(() => {
    var __webpack_modules__ = {
        555: function(module, __unused_webpack_exports, __webpack_require__) {
            /*!
 * matter-js 0.19.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
            (function webpackUniversalModuleDefinition(root, factory) {
                if (true) module.exports = factory();
            })(0, (function() {
                return function(modules) {
                    var installedModules = {};
                    function __nested_webpack_require_1787__(moduleId) {
                        if (installedModules[moduleId]) return installedModules[moduleId].exports;
                        var module = installedModules[moduleId] = {
                            i: moduleId,
                            l: false,
                            exports: {}
                        };
                        modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_1787__);
                        module.l = true;
                        return module.exports;
                    }
                    __nested_webpack_require_1787__.m = modules;
                    __nested_webpack_require_1787__.c = installedModules;
                    __nested_webpack_require_1787__.d = function(exports, name, getter) {
                        if (!__nested_webpack_require_1787__.o(exports, name)) Object.defineProperty(exports, name, {
                            enumerable: true,
                            get: getter
                        });
                    };
                    __nested_webpack_require_1787__.r = function(exports) {
                        if (typeof Symbol !== "undefined" && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
                            value: "Module"
                        });
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                    };
                    __nested_webpack_require_1787__.t = function(value, mode) {
                        if (mode & 1) value = __nested_webpack_require_1787__(value);
                        if (mode & 8) return value;
                        if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
                        var ns = Object.create(null);
                        __nested_webpack_require_1787__.r(ns);
                        Object.defineProperty(ns, "default", {
                            enumerable: true,
                            value
                        });
                        if (mode & 2 && typeof value != "string") for (var key in value) __nested_webpack_require_1787__.d(ns, key, function(key) {
                            return value[key];
                        }.bind(null, key));
                        return ns;
                    };
                    __nested_webpack_require_1787__.n = function(module) {
                        var getter = module && module.__esModule ? function getDefault() {
                            return module["default"];
                        } : function getModuleExports() {
                            return module;
                        };
                        __nested_webpack_require_1787__.d(getter, "a", getter);
                        return getter;
                    };
                    __nested_webpack_require_1787__.o = function(object, property) {
                        return Object.prototype.hasOwnProperty.call(object, property);
                    };
                    __nested_webpack_require_1787__.p = "";
                    return __nested_webpack_require_1787__(__nested_webpack_require_1787__.s = 20);
                }([ function(module, exports) {
                    var Common = {};
                    module.exports = Common;
                    (function() {
                        Common._baseDelta = 1e3 / 60;
                        Common._nextId = 0;
                        Common._seed = 0;
                        Common._nowStartTime = +new Date;
                        Common._warnedOnce = {};
                        Common._decomp = null;
                        Common.extend = function(obj, deep) {
                            var argsStart, deepClone;
                            if (typeof deep === "boolean") {
                                argsStart = 2;
                                deepClone = deep;
                            } else {
                                argsStart = 1;
                                deepClone = true;
                            }
                            for (var i = argsStart; i < arguments.length; i++) {
                                var source = arguments[i];
                                if (source) for (var prop in source) if (deepClone && source[prop] && source[prop].constructor === Object) if (!obj[prop] || obj[prop].constructor === Object) {
                                    obj[prop] = obj[prop] || {};
                                    Common.extend(obj[prop], deepClone, source[prop]);
                                } else obj[prop] = source[prop]; else obj[prop] = source[prop];
                            }
                            return obj;
                        };
                        Common.clone = function(obj, deep) {
                            return Common.extend({}, deep, obj);
                        };
                        Common.keys = function(obj) {
                            if (Object.keys) return Object.keys(obj);
                            var keys = [];
                            for (var key in obj) keys.push(key);
                            return keys;
                        };
                        Common.values = function(obj) {
                            var values = [];
                            if (Object.keys) {
                                var keys = Object.keys(obj);
                                for (var i = 0; i < keys.length; i++) values.push(obj[keys[i]]);
                                return values;
                            }
                            for (var key in obj) values.push(obj[key]);
                            return values;
                        };
                        Common.get = function(obj, path, begin, end) {
                            path = path.split(".").slice(begin, end);
                            for (var i = 0; i < path.length; i += 1) obj = obj[path[i]];
                            return obj;
                        };
                        Common.set = function(obj, path, val, begin, end) {
                            var parts = path.split(".").slice(begin, end);
                            Common.get(obj, path, 0, -1)[parts[parts.length - 1]] = val;
                            return val;
                        };
                        Common.shuffle = function(array) {
                            for (var i = array.length - 1; i > 0; i--) {
                                var j = Math.floor(Common.random() * (i + 1));
                                var temp = array[i];
                                array[i] = array[j];
                                array[j] = temp;
                            }
                            return array;
                        };
                        Common.choose = function(choices) {
                            return choices[Math.floor(Common.random() * choices.length)];
                        };
                        Common.isElement = function(obj) {
                            if (typeof HTMLElement !== "undefined") return obj instanceof HTMLElement;
                            return !!(obj && obj.nodeType && obj.nodeName);
                        };
                        Common.isArray = function(obj) {
                            return Object.prototype.toString.call(obj) === "[object Array]";
                        };
                        Common.isFunction = function(obj) {
                            return typeof obj === "function";
                        };
                        Common.isPlainObject = function(obj) {
                            return typeof obj === "object" && obj.constructor === Object;
                        };
                        Common.isString = function(obj) {
                            return toString.call(obj) === "[object String]";
                        };
                        Common.clamp = function(value, min, max) {
                            if (value < min) return min;
                            if (value > max) return max;
                            return value;
                        };
                        Common.sign = function(value) {
                            return value < 0 ? -1 : 1;
                        };
                        Common.now = function() {
                            if (typeof window !== "undefined" && window.performance) if (window.performance.now) return window.performance.now(); else if (window.performance.webkitNow) return window.performance.webkitNow();
                            if (Date.now) return Date.now();
                            return new Date - Common._nowStartTime;
                        };
                        Common.random = function(min, max) {
                            min = typeof min !== "undefined" ? min : 0;
                            max = typeof max !== "undefined" ? max : 1;
                            return min + _seededRandom() * (max - min);
                        };
                        var _seededRandom = function() {
                            Common._seed = (Common._seed * 9301 + 49297) % 233280;
                            return Common._seed / 233280;
                        };
                        Common.colorToNumber = function(colorString) {
                            colorString = colorString.replace("#", "");
                            if (colorString.length == 3) colorString = colorString.charAt(0) + colorString.charAt(0) + colorString.charAt(1) + colorString.charAt(1) + colorString.charAt(2) + colorString.charAt(2);
                            return parseInt(colorString, 16);
                        };
                        Common.logLevel = 1;
                        Common.log = function() {
                            if (console && Common.logLevel > 0 && Common.logLevel <= 3) console.log.apply(console, [ "matter-js:" ].concat(Array.prototype.slice.call(arguments)));
                        };
                        Common.info = function() {
                            if (console && Common.logLevel > 0 && Common.logLevel <= 2) console.info.apply(console, [ "matter-js:" ].concat(Array.prototype.slice.call(arguments)));
                        };
                        Common.warn = function() {
                            if (console && Common.logLevel > 0 && Common.logLevel <= 3) console.warn.apply(console, [ "matter-js:" ].concat(Array.prototype.slice.call(arguments)));
                        };
                        Common.warnOnce = function() {
                            var message = Array.prototype.slice.call(arguments).join(" ");
                            if (!Common._warnedOnce[message]) {
                                Common.warn(message);
                                Common._warnedOnce[message] = true;
                            }
                        };
                        Common.deprecated = function(obj, prop, warning) {
                            obj[prop] = Common.chain((function() {
                                Common.warnOnce("🔅 deprecated 🔅", warning);
                            }), obj[prop]);
                        };
                        Common.nextId = function() {
                            return Common._nextId++;
                        };
                        Common.indexOf = function(haystack, needle) {
                            if (haystack.indexOf) return haystack.indexOf(needle);
                            for (var i = 0; i < haystack.length; i++) if (haystack[i] === needle) return i;
                            return -1;
                        };
                        Common.map = function(list, func) {
                            if (list.map) return list.map(func);
                            var mapped = [];
                            for (var i = 0; i < list.length; i += 1) mapped.push(func(list[i]));
                            return mapped;
                        };
                        Common.topologicalSort = function(graph) {
                            var result = [], visited = [], temp = [];
                            for (var node in graph) if (!visited[node] && !temp[node]) Common._topologicalSort(node, visited, temp, graph, result);
                            return result;
                        };
                        Common._topologicalSort = function(node, visited, temp, graph, result) {
                            var neighbors = graph[node] || [];
                            temp[node] = true;
                            for (var i = 0; i < neighbors.length; i += 1) {
                                var neighbor = neighbors[i];
                                if (temp[neighbor]) continue;
                                if (!visited[neighbor]) Common._topologicalSort(neighbor, visited, temp, graph, result);
                            }
                            temp[node] = false;
                            visited[node] = true;
                            result.push(node);
                        };
                        Common.chain = function() {
                            var funcs = [];
                            for (var i = 0; i < arguments.length; i += 1) {
                                var func = arguments[i];
                                if (func._chained) funcs.push.apply(funcs, func._chained); else funcs.push(func);
                            }
                            var chain = function() {
                                var lastResult, args = new Array(arguments.length);
                                for (var i = 0, l = arguments.length; i < l; i++) args[i] = arguments[i];
                                for (i = 0; i < funcs.length; i += 1) {
                                    var result = funcs[i].apply(lastResult, args);
                                    if (typeof result !== "undefined") lastResult = result;
                                }
                                return lastResult;
                            };
                            chain._chained = funcs;
                            return chain;
                        };
                        Common.chainPathBefore = function(base, path, func) {
                            return Common.set(base, path, Common.chain(func, Common.get(base, path)));
                        };
                        Common.chainPathAfter = function(base, path, func) {
                            return Common.set(base, path, Common.chain(Common.get(base, path), func));
                        };
                        Common.setDecomp = function(decomp) {
                            Common._decomp = decomp;
                        };
                        Common.getDecomp = function() {
                            var decomp = Common._decomp;
                            try {
                                if (!decomp && typeof window !== "undefined") decomp = window.decomp;
                                if (!decomp && typeof __webpack_require__.g !== "undefined") decomp = __webpack_require__.g.decomp;
                            } catch (e) {
                                decomp = null;
                            }
                            return decomp;
                        };
                    })();
                }, function(module, exports) {
                    var Bounds = {};
                    module.exports = Bounds;
                    (function() {
                        Bounds.create = function(vertices) {
                            var bounds = {
                                min: {
                                    x: 0,
                                    y: 0
                                },
                                max: {
                                    x: 0,
                                    y: 0
                                }
                            };
                            if (vertices) Bounds.update(bounds, vertices);
                            return bounds;
                        };
                        Bounds.update = function(bounds, vertices, velocity) {
                            bounds.min.x = 1 / 0;
                            bounds.max.x = -1 / 0;
                            bounds.min.y = 1 / 0;
                            bounds.max.y = -1 / 0;
                            for (var i = 0; i < vertices.length; i++) {
                                var vertex = vertices[i];
                                if (vertex.x > bounds.max.x) bounds.max.x = vertex.x;
                                if (vertex.x < bounds.min.x) bounds.min.x = vertex.x;
                                if (vertex.y > bounds.max.y) bounds.max.y = vertex.y;
                                if (vertex.y < bounds.min.y) bounds.min.y = vertex.y;
                            }
                            if (velocity) {
                                if (velocity.x > 0) bounds.max.x += velocity.x; else bounds.min.x += velocity.x;
                                if (velocity.y > 0) bounds.max.y += velocity.y; else bounds.min.y += velocity.y;
                            }
                        };
                        Bounds.contains = function(bounds, point) {
                            return point.x >= bounds.min.x && point.x <= bounds.max.x && point.y >= bounds.min.y && point.y <= bounds.max.y;
                        };
                        Bounds.overlaps = function(boundsA, boundsB) {
                            return boundsA.min.x <= boundsB.max.x && boundsA.max.x >= boundsB.min.x && boundsA.max.y >= boundsB.min.y && boundsA.min.y <= boundsB.max.y;
                        };
                        Bounds.translate = function(bounds, vector) {
                            bounds.min.x += vector.x;
                            bounds.max.x += vector.x;
                            bounds.min.y += vector.y;
                            bounds.max.y += vector.y;
                        };
                        Bounds.shift = function(bounds, position) {
                            var deltaX = bounds.max.x - bounds.min.x, deltaY = bounds.max.y - bounds.min.y;
                            bounds.min.x = position.x;
                            bounds.max.x = position.x + deltaX;
                            bounds.min.y = position.y;
                            bounds.max.y = position.y + deltaY;
                        };
                    })();
                }, function(module, exports) {
                    var Vector = {};
                    module.exports = Vector;
                    (function() {
                        Vector.create = function(x, y) {
                            return {
                                x: x || 0,
                                y: y || 0
                            };
                        };
                        Vector.clone = function(vector) {
                            return {
                                x: vector.x,
                                y: vector.y
                            };
                        };
                        Vector.magnitude = function(vector) {
                            return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
                        };
                        Vector.magnitudeSquared = function(vector) {
                            return vector.x * vector.x + vector.y * vector.y;
                        };
                        Vector.rotate = function(vector, angle, output) {
                            var cos = Math.cos(angle), sin = Math.sin(angle);
                            if (!output) output = {};
                            var x = vector.x * cos - vector.y * sin;
                            output.y = vector.x * sin + vector.y * cos;
                            output.x = x;
                            return output;
                        };
                        Vector.rotateAbout = function(vector, angle, point, output) {
                            var cos = Math.cos(angle), sin = Math.sin(angle);
                            if (!output) output = {};
                            var x = point.x + ((vector.x - point.x) * cos - (vector.y - point.y) * sin);
                            output.y = point.y + ((vector.x - point.x) * sin + (vector.y - point.y) * cos);
                            output.x = x;
                            return output;
                        };
                        Vector.normalise = function(vector) {
                            var magnitude = Vector.magnitude(vector);
                            if (magnitude === 0) return {
                                x: 0,
                                y: 0
                            };
                            return {
                                x: vector.x / magnitude,
                                y: vector.y / magnitude
                            };
                        };
                        Vector.dot = function(vectorA, vectorB) {
                            return vectorA.x * vectorB.x + vectorA.y * vectorB.y;
                        };
                        Vector.cross = function(vectorA, vectorB) {
                            return vectorA.x * vectorB.y - vectorA.y * vectorB.x;
                        };
                        Vector.cross3 = function(vectorA, vectorB, vectorC) {
                            return (vectorB.x - vectorA.x) * (vectorC.y - vectorA.y) - (vectorB.y - vectorA.y) * (vectorC.x - vectorA.x);
                        };
                        Vector.add = function(vectorA, vectorB, output) {
                            if (!output) output = {};
                            output.x = vectorA.x + vectorB.x;
                            output.y = vectorA.y + vectorB.y;
                            return output;
                        };
                        Vector.sub = function(vectorA, vectorB, output) {
                            if (!output) output = {};
                            output.x = vectorA.x - vectorB.x;
                            output.y = vectorA.y - vectorB.y;
                            return output;
                        };
                        Vector.mult = function(vector, scalar) {
                            return {
                                x: vector.x * scalar,
                                y: vector.y * scalar
                            };
                        };
                        Vector.div = function(vector, scalar) {
                            return {
                                x: vector.x / scalar,
                                y: vector.y / scalar
                            };
                        };
                        Vector.perp = function(vector, negate) {
                            negate = negate === true ? -1 : 1;
                            return {
                                x: negate * -vector.y,
                                y: negate * vector.x
                            };
                        };
                        Vector.neg = function(vector) {
                            return {
                                x: -vector.x,
                                y: -vector.y
                            };
                        };
                        Vector.angle = function(vectorA, vectorB) {
                            return Math.atan2(vectorB.y - vectorA.y, vectorB.x - vectorA.x);
                        };
                        Vector._temp = [ Vector.create(), Vector.create(), Vector.create(), Vector.create(), Vector.create(), Vector.create() ];
                    })();
                }, function(module, exports, __nested_webpack_require_35421__) {
                    var Vertices = {};
                    module.exports = Vertices;
                    var Vector = __nested_webpack_require_35421__(2);
                    var Common = __nested_webpack_require_35421__(0);
                    (function() {
                        Vertices.create = function(points, body) {
                            var vertices = [];
                            for (var i = 0; i < points.length; i++) {
                                var point = points[i], vertex = {
                                    x: point.x,
                                    y: point.y,
                                    index: i,
                                    body,
                                    isInternal: false
                                };
                                vertices.push(vertex);
                            }
                            return vertices;
                        };
                        Vertices.fromPath = function(path, body) {
                            var pathPattern = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi, points = [];
                            path.replace(pathPattern, (function(match, x, y) {
                                points.push({
                                    x: parseFloat(x),
                                    y: parseFloat(y)
                                });
                            }));
                            return Vertices.create(points, body);
                        };
                        Vertices.centre = function(vertices) {
                            var cross, temp, j, area = Vertices.area(vertices, true), centre = {
                                x: 0,
                                y: 0
                            };
                            for (var i = 0; i < vertices.length; i++) {
                                j = (i + 1) % vertices.length;
                                cross = Vector.cross(vertices[i], vertices[j]);
                                temp = Vector.mult(Vector.add(vertices[i], vertices[j]), cross);
                                centre = Vector.add(centre, temp);
                            }
                            return Vector.div(centre, 6 * area);
                        };
                        Vertices.mean = function(vertices) {
                            var average = {
                                x: 0,
                                y: 0
                            };
                            for (var i = 0; i < vertices.length; i++) {
                                average.x += vertices[i].x;
                                average.y += vertices[i].y;
                            }
                            return Vector.div(average, vertices.length);
                        };
                        Vertices.area = function(vertices, signed) {
                            var area = 0, j = vertices.length - 1;
                            for (var i = 0; i < vertices.length; i++) {
                                area += (vertices[j].x - vertices[i].x) * (vertices[j].y + vertices[i].y);
                                j = i;
                            }
                            if (signed) return area / 2;
                            return Math.abs(area) / 2;
                        };
                        Vertices.inertia = function(vertices, mass) {
                            var cross, j, numerator = 0, denominator = 0, v = vertices;
                            for (var n = 0; n < v.length; n++) {
                                j = (n + 1) % v.length;
                                cross = Math.abs(Vector.cross(v[j], v[n]));
                                numerator += cross * (Vector.dot(v[j], v[j]) + Vector.dot(v[j], v[n]) + Vector.dot(v[n], v[n]));
                                denominator += cross;
                            }
                            return mass / 6 * (numerator / denominator);
                        };
                        Vertices.translate = function(vertices, vector, scalar) {
                            scalar = typeof scalar !== "undefined" ? scalar : 1;
                            var i, verticesLength = vertices.length, translateX = vector.x * scalar, translateY = vector.y * scalar;
                            for (i = 0; i < verticesLength; i++) {
                                vertices[i].x += translateX;
                                vertices[i].y += translateY;
                            }
                            return vertices;
                        };
                        Vertices.rotate = function(vertices, angle, point) {
                            if (angle === 0) return;
                            var vertex, dx, dy, i, cos = Math.cos(angle), sin = Math.sin(angle), pointX = point.x, pointY = point.y, verticesLength = vertices.length;
                            for (i = 0; i < verticesLength; i++) {
                                vertex = vertices[i];
                                dx = vertex.x - pointX;
                                dy = vertex.y - pointY;
                                vertex.x = pointX + (dx * cos - dy * sin);
                                vertex.y = pointY + (dx * sin + dy * cos);
                            }
                            return vertices;
                        };
                        Vertices.contains = function(vertices, point) {
                            var nextVertex, pointX = point.x, pointY = point.y, verticesLength = vertices.length, vertex = vertices[verticesLength - 1];
                            for (var i = 0; i < verticesLength; i++) {
                                nextVertex = vertices[i];
                                if ((pointX - vertex.x) * (nextVertex.y - vertex.y) + (pointY - vertex.y) * (vertex.x - nextVertex.x) > 0) return false;
                                vertex = nextVertex;
                            }
                            return true;
                        };
                        Vertices.scale = function(vertices, scaleX, scaleY, point) {
                            if (scaleX === 1 && scaleY === 1) return vertices;
                            point = point || Vertices.centre(vertices);
                            var vertex, delta;
                            for (var i = 0; i < vertices.length; i++) {
                                vertex = vertices[i];
                                delta = Vector.sub(vertex, point);
                                vertices[i].x = point.x + delta.x * scaleX;
                                vertices[i].y = point.y + delta.y * scaleY;
                            }
                            return vertices;
                        };
                        Vertices.chamfer = function(vertices, radius, quality, qualityMin, qualityMax) {
                            if (typeof radius === "number") radius = [ radius ]; else radius = radius || [ 8 ];
                            quality = typeof quality !== "undefined" ? quality : -1;
                            qualityMin = qualityMin || 2;
                            qualityMax = qualityMax || 14;
                            var newVertices = [];
                            for (var i = 0; i < vertices.length; i++) {
                                var prevVertex = vertices[i - 1 >= 0 ? i - 1 : vertices.length - 1], vertex = vertices[i], nextVertex = vertices[(i + 1) % vertices.length], currentRadius = radius[i < radius.length ? i : radius.length - 1];
                                if (currentRadius === 0) {
                                    newVertices.push(vertex);
                                    continue;
                                }
                                var prevNormal = Vector.normalise({
                                    x: vertex.y - prevVertex.y,
                                    y: prevVertex.x - vertex.x
                                });
                                var nextNormal = Vector.normalise({
                                    x: nextVertex.y - vertex.y,
                                    y: vertex.x - nextVertex.x
                                });
                                var diagonalRadius = Math.sqrt(2 * Math.pow(currentRadius, 2)), radiusVector = Vector.mult(Common.clone(prevNormal), currentRadius), midNormal = Vector.normalise(Vector.mult(Vector.add(prevNormal, nextNormal), .5)), scaledVertex = Vector.sub(vertex, Vector.mult(midNormal, diagonalRadius));
                                var precision = quality;
                                if (quality === -1) precision = Math.pow(currentRadius, .32) * 1.75;
                                precision = Common.clamp(precision, qualityMin, qualityMax);
                                if (precision % 2 === 1) precision += 1;
                                var alpha = Math.acos(Vector.dot(prevNormal, nextNormal)), theta = alpha / precision;
                                for (var j = 0; j < precision; j++) newVertices.push(Vector.add(Vector.rotate(radiusVector, theta * j), scaledVertex));
                            }
                            return newVertices;
                        };
                        Vertices.clockwiseSort = function(vertices) {
                            var centre = Vertices.mean(vertices);
                            vertices.sort((function(vertexA, vertexB) {
                                return Vector.angle(centre, vertexA) - Vector.angle(centre, vertexB);
                            }));
                            return vertices;
                        };
                        Vertices.isConvex = function(vertices) {
                            var i, j, k, z, flag = 0, n = vertices.length;
                            if (n < 3) return null;
                            for (i = 0; i < n; i++) {
                                j = (i + 1) % n;
                                k = (i + 2) % n;
                                z = (vertices[j].x - vertices[i].x) * (vertices[k].y - vertices[j].y);
                                z -= (vertices[j].y - vertices[i].y) * (vertices[k].x - vertices[j].x);
                                if (z < 0) flag |= 1; else if (z > 0) flag |= 2;
                                if (flag === 3) return false;
                            }
                            if (flag !== 0) return true; else return null;
                        };
                        Vertices.hull = function(vertices) {
                            var vertex, i, upper = [], lower = [];
                            vertices = vertices.slice(0);
                            vertices.sort((function(vertexA, vertexB) {
                                var dx = vertexA.x - vertexB.x;
                                return dx !== 0 ? dx : vertexA.y - vertexB.y;
                            }));
                            for (i = 0; i < vertices.length; i += 1) {
                                vertex = vertices[i];
                                while (lower.length >= 2 && Vector.cross3(lower[lower.length - 2], lower[lower.length - 1], vertex) <= 0) lower.pop();
                                lower.push(vertex);
                            }
                            for (i = vertices.length - 1; i >= 0; i -= 1) {
                                vertex = vertices[i];
                                while (upper.length >= 2 && Vector.cross3(upper[upper.length - 2], upper[upper.length - 1], vertex) <= 0) upper.pop();
                                upper.push(vertex);
                            }
                            upper.pop();
                            lower.pop();
                            return upper.concat(lower);
                        };
                    })();
                }, function(module, exports, __nested_webpack_require_49544__) {
                    var Body = {};
                    module.exports = Body;
                    var Vertices = __nested_webpack_require_49544__(3);
                    var Vector = __nested_webpack_require_49544__(2);
                    var Sleeping = __nested_webpack_require_49544__(7);
                    var Common = __nested_webpack_require_49544__(0);
                    var Bounds = __nested_webpack_require_49544__(1);
                    var Axes = __nested_webpack_require_49544__(11);
                    (function() {
                        Body._timeCorrection = true;
                        Body._inertiaScale = 4;
                        Body._nextCollidingGroupId = 1;
                        Body._nextNonCollidingGroupId = -1;
                        Body._nextCategory = 1;
                        Body._baseDelta = 1e3 / 60;
                        Body.create = function(options) {
                            var defaults = {
                                id: Common.nextId(),
                                type: "body",
                                label: "Body",
                                parts: [],
                                plugin: {},
                                angle: 0,
                                vertices: Vertices.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                                position: {
                                    x: 0,
                                    y: 0
                                },
                                force: {
                                    x: 0,
                                    y: 0
                                },
                                torque: 0,
                                positionImpulse: {
                                    x: 0,
                                    y: 0
                                },
                                constraintImpulse: {
                                    x: 0,
                                    y: 0,
                                    angle: 0
                                },
                                totalContacts: 0,
                                speed: 0,
                                angularSpeed: 0,
                                velocity: {
                                    x: 0,
                                    y: 0
                                },
                                angularVelocity: 0,
                                isSensor: false,
                                isStatic: false,
                                isSleeping: false,
                                motion: 0,
                                sleepThreshold: 60,
                                density: .001,
                                restitution: 0,
                                friction: .1,
                                frictionStatic: .5,
                                frictionAir: .01,
                                collisionFilter: {
                                    category: 1,
                                    mask: 4294967295,
                                    group: 0
                                },
                                slop: .05,
                                timeScale: 1,
                                render: {
                                    visible: true,
                                    opacity: 1,
                                    strokeStyle: null,
                                    fillStyle: null,
                                    lineWidth: null,
                                    sprite: {
                                        xScale: 1,
                                        yScale: 1,
                                        xOffset: 0,
                                        yOffset: 0
                                    }
                                },
                                events: null,
                                bounds: null,
                                chamfer: null,
                                circleRadius: 0,
                                positionPrev: null,
                                anglePrev: 0,
                                parent: null,
                                axes: null,
                                area: 0,
                                mass: 0,
                                inertia: 0,
                                deltaTime: 1e3 / 60,
                                _original: null
                            };
                            var body = Common.extend(defaults, options);
                            _initProperties(body, options);
                            return body;
                        };
                        Body.nextGroup = function(isNonColliding) {
                            if (isNonColliding) return Body._nextNonCollidingGroupId--;
                            return Body._nextCollidingGroupId++;
                        };
                        Body.nextCategory = function() {
                            Body._nextCategory = Body._nextCategory << 1;
                            return Body._nextCategory;
                        };
                        var _initProperties = function(body, options) {
                            options = options || {};
                            Body.set(body, {
                                bounds: body.bounds || Bounds.create(body.vertices),
                                positionPrev: body.positionPrev || Vector.clone(body.position),
                                anglePrev: body.anglePrev || body.angle,
                                vertices: body.vertices,
                                parts: body.parts || [ body ],
                                isStatic: body.isStatic,
                                isSleeping: body.isSleeping,
                                parent: body.parent || body
                            });
                            Vertices.rotate(body.vertices, body.angle, body.position);
                            Axes.rotate(body.axes, body.angle);
                            Bounds.update(body.bounds, body.vertices, body.velocity);
                            Body.set(body, {
                                axes: options.axes || body.axes,
                                area: options.area || body.area,
                                mass: options.mass || body.mass,
                                inertia: options.inertia || body.inertia
                            });
                            var defaultFillStyle = body.isStatic ? "#14151f" : Common.choose([ "#f19648", "#f5d259", "#f55a3c", "#063e7b", "#ececd1" ]), defaultStrokeStyle = body.isStatic ? "#555" : "#ccc", defaultLineWidth = body.isStatic && body.render.fillStyle === null ? 1 : 0;
                            body.render.fillStyle = body.render.fillStyle || defaultFillStyle;
                            body.render.strokeStyle = body.render.strokeStyle || defaultStrokeStyle;
                            body.render.lineWidth = body.render.lineWidth || defaultLineWidth;
                            body.render.sprite.xOffset += -(body.bounds.min.x - body.position.x) / (body.bounds.max.x - body.bounds.min.x);
                            body.render.sprite.yOffset += -(body.bounds.min.y - body.position.y) / (body.bounds.max.y - body.bounds.min.y);
                        };
                        Body.set = function(body, settings, value) {
                            var property;
                            if (typeof settings === "string") {
                                property = settings;
                                settings = {};
                                settings[property] = value;
                            }
                            for (property in settings) {
                                if (!Object.prototype.hasOwnProperty.call(settings, property)) continue;
                                value = settings[property];
                                switch (property) {
                                  case "isStatic":
                                    Body.setStatic(body, value);
                                    break;

                                  case "isSleeping":
                                    Sleeping.set(body, value);
                                    break;

                                  case "mass":
                                    Body.setMass(body, value);
                                    break;

                                  case "density":
                                    Body.setDensity(body, value);
                                    break;

                                  case "inertia":
                                    Body.setInertia(body, value);
                                    break;

                                  case "vertices":
                                    Body.setVertices(body, value);
                                    break;

                                  case "position":
                                    Body.setPosition(body, value);
                                    break;

                                  case "angle":
                                    Body.setAngle(body, value);
                                    break;

                                  case "velocity":
                                    Body.setVelocity(body, value);
                                    break;

                                  case "angularVelocity":
                                    Body.setAngularVelocity(body, value);
                                    break;

                                  case "speed":
                                    Body.setSpeed(body, value);
                                    break;

                                  case "angularSpeed":
                                    Body.setAngularSpeed(body, value);
                                    break;

                                  case "parts":
                                    Body.setParts(body, value);
                                    break;

                                  case "centre":
                                    Body.setCentre(body, value);
                                    break;

                                  default:
                                    body[property] = value;
                                }
                            }
                        };
                        Body.setStatic = function(body, isStatic) {
                            for (var i = 0; i < body.parts.length; i++) {
                                var part = body.parts[i];
                                part.isStatic = isStatic;
                                if (isStatic) {
                                    part._original = {
                                        restitution: part.restitution,
                                        friction: part.friction,
                                        mass: part.mass,
                                        inertia: part.inertia,
                                        density: part.density,
                                        inverseMass: part.inverseMass,
                                        inverseInertia: part.inverseInertia
                                    };
                                    part.restitution = 0;
                                    part.friction = 1;
                                    part.mass = part.inertia = part.density = 1 / 0;
                                    part.inverseMass = part.inverseInertia = 0;
                                    part.positionPrev.x = part.position.x;
                                    part.positionPrev.y = part.position.y;
                                    part.anglePrev = part.angle;
                                    part.angularVelocity = 0;
                                    part.speed = 0;
                                    part.angularSpeed = 0;
                                    part.motion = 0;
                                } else if (part._original) {
                                    part.restitution = part._original.restitution;
                                    part.friction = part._original.friction;
                                    part.mass = part._original.mass;
                                    part.inertia = part._original.inertia;
                                    part.density = part._original.density;
                                    part.inverseMass = part._original.inverseMass;
                                    part.inverseInertia = part._original.inverseInertia;
                                    part._original = null;
                                }
                            }
                        };
                        Body.setMass = function(body, mass) {
                            var moment = body.inertia / (body.mass / 6);
                            body.inertia = moment * (mass / 6);
                            body.inverseInertia = 1 / body.inertia;
                            body.mass = mass;
                            body.inverseMass = 1 / body.mass;
                            body.density = body.mass / body.area;
                        };
                        Body.setDensity = function(body, density) {
                            Body.setMass(body, density * body.area);
                            body.density = density;
                        };
                        Body.setInertia = function(body, inertia) {
                            body.inertia = inertia;
                            body.inverseInertia = 1 / body.inertia;
                        };
                        Body.setVertices = function(body, vertices) {
                            if (vertices[0].body === body) body.vertices = vertices; else body.vertices = Vertices.create(vertices, body);
                            body.axes = Axes.fromVertices(body.vertices);
                            body.area = Vertices.area(body.vertices);
                            Body.setMass(body, body.density * body.area);
                            var centre = Vertices.centre(body.vertices);
                            Vertices.translate(body.vertices, centre, -1);
                            Body.setInertia(body, Body._inertiaScale * Vertices.inertia(body.vertices, body.mass));
                            Vertices.translate(body.vertices, body.position);
                            Bounds.update(body.bounds, body.vertices, body.velocity);
                        };
                        Body.setParts = function(body, parts, autoHull) {
                            var i;
                            parts = parts.slice(0);
                            body.parts.length = 0;
                            body.parts.push(body);
                            body.parent = body;
                            for (i = 0; i < parts.length; i++) {
                                var part = parts[i];
                                if (part !== body) {
                                    part.parent = body;
                                    body.parts.push(part);
                                }
                            }
                            if (body.parts.length === 1) return;
                            autoHull = typeof autoHull !== "undefined" ? autoHull : true;
                            if (autoHull) {
                                var vertices = [];
                                for (i = 0; i < parts.length; i++) vertices = vertices.concat(parts[i].vertices);
                                Vertices.clockwiseSort(vertices);
                                var hull = Vertices.hull(vertices), hullCentre = Vertices.centre(hull);
                                Body.setVertices(body, hull);
                                Vertices.translate(body.vertices, hullCentre);
                            }
                            var total = Body._totalProperties(body);
                            body.area = total.area;
                            body.parent = body;
                            body.position.x = total.centre.x;
                            body.position.y = total.centre.y;
                            body.positionPrev.x = total.centre.x;
                            body.positionPrev.y = total.centre.y;
                            Body.setMass(body, total.mass);
                            Body.setInertia(body, total.inertia);
                            Body.setPosition(body, total.centre);
                        };
                        Body.setCentre = function(body, centre, relative) {
                            if (!relative) {
                                body.positionPrev.x = centre.x - (body.position.x - body.positionPrev.x);
                                body.positionPrev.y = centre.y - (body.position.y - body.positionPrev.y);
                                body.position.x = centre.x;
                                body.position.y = centre.y;
                            } else {
                                body.positionPrev.x += centre.x;
                                body.positionPrev.y += centre.y;
                                body.position.x += centre.x;
                                body.position.y += centre.y;
                            }
                        };
                        Body.setPosition = function(body, position, updateVelocity) {
                            var delta = Vector.sub(position, body.position);
                            if (updateVelocity) {
                                body.positionPrev.x = body.position.x;
                                body.positionPrev.y = body.position.y;
                                body.velocity.x = delta.x;
                                body.velocity.y = delta.y;
                                body.speed = Vector.magnitude(delta);
                            } else {
                                body.positionPrev.x += delta.x;
                                body.positionPrev.y += delta.y;
                            }
                            for (var i = 0; i < body.parts.length; i++) {
                                var part = body.parts[i];
                                part.position.x += delta.x;
                                part.position.y += delta.y;
                                Vertices.translate(part.vertices, delta);
                                Bounds.update(part.bounds, part.vertices, body.velocity);
                            }
                        };
                        Body.setAngle = function(body, angle, updateVelocity) {
                            var delta = angle - body.angle;
                            if (updateVelocity) {
                                body.anglePrev = body.angle;
                                body.angularVelocity = delta;
                                body.angularSpeed = Math.abs(delta);
                            } else body.anglePrev += delta;
                            for (var i = 0; i < body.parts.length; i++) {
                                var part = body.parts[i];
                                part.angle += delta;
                                Vertices.rotate(part.vertices, delta, body.position);
                                Axes.rotate(part.axes, delta);
                                Bounds.update(part.bounds, part.vertices, body.velocity);
                                if (i > 0) Vector.rotateAbout(part.position, delta, body.position, part.position);
                            }
                        };
                        Body.setVelocity = function(body, velocity) {
                            var timeScale = body.deltaTime / Body._baseDelta;
                            body.positionPrev.x = body.position.x - velocity.x * timeScale;
                            body.positionPrev.y = body.position.y - velocity.y * timeScale;
                            body.velocity.x = (body.position.x - body.positionPrev.x) / timeScale;
                            body.velocity.y = (body.position.y - body.positionPrev.y) / timeScale;
                            body.speed = Vector.magnitude(body.velocity);
                        };
                        Body.getVelocity = function(body) {
                            var timeScale = Body._baseDelta / body.deltaTime;
                            return {
                                x: (body.position.x - body.positionPrev.x) * timeScale,
                                y: (body.position.y - body.positionPrev.y) * timeScale
                            };
                        };
                        Body.getSpeed = function(body) {
                            return Vector.magnitude(Body.getVelocity(body));
                        };
                        Body.setSpeed = function(body, speed) {
                            Body.setVelocity(body, Vector.mult(Vector.normalise(Body.getVelocity(body)), speed));
                        };
                        Body.setAngularVelocity = function(body, velocity) {
                            var timeScale = body.deltaTime / Body._baseDelta;
                            body.anglePrev = body.angle - velocity * timeScale;
                            body.angularVelocity = (body.angle - body.anglePrev) / timeScale;
                            body.angularSpeed = Math.abs(body.angularVelocity);
                        };
                        Body.getAngularVelocity = function(body) {
                            return (body.angle - body.anglePrev) * Body._baseDelta / body.deltaTime;
                        };
                        Body.getAngularSpeed = function(body) {
                            return Math.abs(Body.getAngularVelocity(body));
                        };
                        Body.setAngularSpeed = function(body, speed) {
                            Body.setAngularVelocity(body, Common.sign(Body.getAngularVelocity(body)) * speed);
                        };
                        Body.translate = function(body, translation, updateVelocity) {
                            Body.setPosition(body, Vector.add(body.position, translation), updateVelocity);
                        };
                        Body.rotate = function(body, rotation, point, updateVelocity) {
                            if (!point) Body.setAngle(body, body.angle + rotation, updateVelocity); else {
                                var cos = Math.cos(rotation), sin = Math.sin(rotation), dx = body.position.x - point.x, dy = body.position.y - point.y;
                                Body.setPosition(body, {
                                    x: point.x + (dx * cos - dy * sin),
                                    y: point.y + (dx * sin + dy * cos)
                                }, updateVelocity);
                                Body.setAngle(body, body.angle + rotation, updateVelocity);
                            }
                        };
                        Body.scale = function(body, scaleX, scaleY, point) {
                            var totalArea = 0, totalInertia = 0;
                            point = point || body.position;
                            for (var i = 0; i < body.parts.length; i++) {
                                var part = body.parts[i];
                                Vertices.scale(part.vertices, scaleX, scaleY, point);
                                part.axes = Axes.fromVertices(part.vertices);
                                part.area = Vertices.area(part.vertices);
                                Body.setMass(part, body.density * part.area);
                                Vertices.translate(part.vertices, {
                                    x: -part.position.x,
                                    y: -part.position.y
                                });
                                Body.setInertia(part, Body._inertiaScale * Vertices.inertia(part.vertices, part.mass));
                                Vertices.translate(part.vertices, {
                                    x: part.position.x,
                                    y: part.position.y
                                });
                                if (i > 0) {
                                    totalArea += part.area;
                                    totalInertia += part.inertia;
                                }
                                part.position.x = point.x + (part.position.x - point.x) * scaleX;
                                part.position.y = point.y + (part.position.y - point.y) * scaleY;
                                Bounds.update(part.bounds, part.vertices, body.velocity);
                            }
                            if (body.parts.length > 1) {
                                body.area = totalArea;
                                if (!body.isStatic) {
                                    Body.setMass(body, body.density * totalArea);
                                    Body.setInertia(body, totalInertia);
                                }
                            }
                            if (body.circleRadius) if (scaleX === scaleY) body.circleRadius *= scaleX; else body.circleRadius = null;
                        };
                        Body.update = function(body, deltaTime) {
                            deltaTime = (typeof deltaTime !== "undefined" ? deltaTime : 1e3 / 60) * body.timeScale;
                            var deltaTimeSquared = deltaTime * deltaTime, correction = Body._timeCorrection ? deltaTime / (body.deltaTime || deltaTime) : 1;
                            var frictionAir = 1 - body.frictionAir * (deltaTime / Common._baseDelta), velocityPrevX = (body.position.x - body.positionPrev.x) * correction, velocityPrevY = (body.position.y - body.positionPrev.y) * correction;
                            body.velocity.x = velocityPrevX * frictionAir + body.force.x / body.mass * deltaTimeSquared;
                            body.velocity.y = velocityPrevY * frictionAir + body.force.y / body.mass * deltaTimeSquared;
                            body.positionPrev.x = body.position.x;
                            body.positionPrev.y = body.position.y;
                            body.position.x += body.velocity.x;
                            body.position.y += body.velocity.y;
                            body.deltaTime = deltaTime;
                            body.angularVelocity = (body.angle - body.anglePrev) * frictionAir * correction + body.torque / body.inertia * deltaTimeSquared;
                            body.anglePrev = body.angle;
                            body.angle += body.angularVelocity;
                            for (var i = 0; i < body.parts.length; i++) {
                                var part = body.parts[i];
                                Vertices.translate(part.vertices, body.velocity);
                                if (i > 0) {
                                    part.position.x += body.velocity.x;
                                    part.position.y += body.velocity.y;
                                }
                                if (body.angularVelocity !== 0) {
                                    Vertices.rotate(part.vertices, body.angularVelocity, body.position);
                                    Axes.rotate(part.axes, body.angularVelocity);
                                    if (i > 0) Vector.rotateAbout(part.position, body.angularVelocity, body.position, part.position);
                                }
                                Bounds.update(part.bounds, part.vertices, body.velocity);
                            }
                        };
                        Body.updateVelocities = function(body) {
                            var timeScale = Body._baseDelta / body.deltaTime, bodyVelocity = body.velocity;
                            bodyVelocity.x = (body.position.x - body.positionPrev.x) * timeScale;
                            bodyVelocity.y = (body.position.y - body.positionPrev.y) * timeScale;
                            body.speed = Math.sqrt(bodyVelocity.x * bodyVelocity.x + bodyVelocity.y * bodyVelocity.y);
                            body.angularVelocity = (body.angle - body.anglePrev) * timeScale;
                            body.angularSpeed = Math.abs(body.angularVelocity);
                        };
                        Body.applyForce = function(body, position, force) {
                            var offset = {
                                x: position.x - body.position.x,
                                y: position.y - body.position.y
                            };
                            body.force.x += force.x;
                            body.force.y += force.y;
                            body.torque += offset.x * force.y - offset.y * force.x;
                        };
                        Body._totalProperties = function(body) {
                            var properties = {
                                mass: 0,
                                area: 0,
                                inertia: 0,
                                centre: {
                                    x: 0,
                                    y: 0
                                }
                            };
                            for (var i = body.parts.length === 1 ? 0 : 1; i < body.parts.length; i++) {
                                var part = body.parts[i], mass = part.mass !== 1 / 0 ? part.mass : 1;
                                properties.mass += mass;
                                properties.area += part.area;
                                properties.inertia += part.inertia;
                                properties.centre = Vector.add(properties.centre, Vector.mult(part.position, mass));
                            }
                            properties.centre = Vector.div(properties.centre, properties.mass);
                            return properties;
                        };
                    })();
                }, function(module, exports, __nested_webpack_require_99052__) {
                    var Events = {};
                    module.exports = Events;
                    var Common = __nested_webpack_require_99052__(0);
                    (function() {
                        Events.on = function(object, eventNames, callback) {
                            var name, names = eventNames.split(" ");
                            for (var i = 0; i < names.length; i++) {
                                name = names[i];
                                object.events = object.events || {};
                                object.events[name] = object.events[name] || [];
                                object.events[name].push(callback);
                            }
                            return callback;
                        };
                        Events.off = function(object, eventNames, callback) {
                            if (!eventNames) {
                                object.events = {};
                                return;
                            }
                            if (typeof eventNames === "function") {
                                callback = eventNames;
                                eventNames = Common.keys(object.events).join(" ");
                            }
                            var names = eventNames.split(" ");
                            for (var i = 0; i < names.length; i++) {
                                var callbacks = object.events[names[i]], newCallbacks = [];
                                if (callback && callbacks) for (var j = 0; j < callbacks.length; j++) if (callbacks[j] !== callback) newCallbacks.push(callbacks[j]);
                                object.events[names[i]] = newCallbacks;
                            }
                        };
                        Events.trigger = function(object, eventNames, event) {
                            var names, name, callbacks, eventClone;
                            var events = object.events;
                            if (events && Common.keys(events).length > 0) {
                                if (!event) event = {};
                                names = eventNames.split(" ");
                                for (var i = 0; i < names.length; i++) {
                                    name = names[i];
                                    callbacks = events[name];
                                    if (callbacks) {
                                        eventClone = Common.clone(event, false);
                                        eventClone.name = name;
                                        eventClone.source = object;
                                        for (var j = 0; j < callbacks.length; j++) callbacks[j].apply(object, [ eventClone ]);
                                    }
                                }
                            }
                        };
                    })();
                }, function(module, exports, __nested_webpack_require_102250__) {
                    var Composite = {};
                    module.exports = Composite;
                    var Events = __nested_webpack_require_102250__(5);
                    var Common = __nested_webpack_require_102250__(0);
                    var Bounds = __nested_webpack_require_102250__(1);
                    var Body = __nested_webpack_require_102250__(4);
                    (function() {
                        Composite.create = function(options) {
                            return Common.extend({
                                id: Common.nextId(),
                                type: "composite",
                                parent: null,
                                isModified: false,
                                bodies: [],
                                constraints: [],
                                composites: [],
                                label: "Composite",
                                plugin: {},
                                cache: {
                                    allBodies: null,
                                    allConstraints: null,
                                    allComposites: null
                                }
                            }, options);
                        };
                        Composite.setModified = function(composite, isModified, updateParents, updateChildren) {
                            composite.isModified = isModified;
                            if (isModified && composite.cache) {
                                composite.cache.allBodies = null;
                                composite.cache.allConstraints = null;
                                composite.cache.allComposites = null;
                            }
                            if (updateParents && composite.parent) Composite.setModified(composite.parent, isModified, updateParents, updateChildren);
                            if (updateChildren) for (var i = 0; i < composite.composites.length; i++) {
                                var childComposite = composite.composites[i];
                                Composite.setModified(childComposite, isModified, updateParents, updateChildren);
                            }
                        };
                        Composite.add = function(composite, object) {
                            var objects = [].concat(object);
                            Events.trigger(composite, "beforeAdd", {
                                object
                            });
                            for (var i = 0; i < objects.length; i++) {
                                var obj = objects[i];
                                switch (obj.type) {
                                  case "body":
                                    if (obj.parent !== obj) {
                                        Common.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");
                                        break;
                                    }
                                    Composite.addBody(composite, obj);
                                    break;

                                  case "constraint":
                                    Composite.addConstraint(composite, obj);
                                    break;

                                  case "composite":
                                    Composite.addComposite(composite, obj);
                                    break;

                                  case "mouseConstraint":
                                    Composite.addConstraint(composite, obj.constraint);
                                    break;
                                }
                            }
                            Events.trigger(composite, "afterAdd", {
                                object
                            });
                            return composite;
                        };
                        Composite.remove = function(composite, object, deep) {
                            var objects = [].concat(object);
                            Events.trigger(composite, "beforeRemove", {
                                object
                            });
                            for (var i = 0; i < objects.length; i++) {
                                var obj = objects[i];
                                switch (obj.type) {
                                  case "body":
                                    Composite.removeBody(composite, obj, deep);
                                    break;

                                  case "constraint":
                                    Composite.removeConstraint(composite, obj, deep);
                                    break;

                                  case "composite":
                                    Composite.removeComposite(composite, obj, deep);
                                    break;

                                  case "mouseConstraint":
                                    Composite.removeConstraint(composite, obj.constraint);
                                    break;
                                }
                            }
                            Events.trigger(composite, "afterRemove", {
                                object
                            });
                            return composite;
                        };
                        Composite.addComposite = function(compositeA, compositeB) {
                            compositeA.composites.push(compositeB);
                            compositeB.parent = compositeA;
                            Composite.setModified(compositeA, true, true, false);
                            return compositeA;
                        };
                        Composite.removeComposite = function(compositeA, compositeB, deep) {
                            var position = Common.indexOf(compositeA.composites, compositeB);
                            if (position !== -1) Composite.removeCompositeAt(compositeA, position);
                            if (deep) for (var i = 0; i < compositeA.composites.length; i++) Composite.removeComposite(compositeA.composites[i], compositeB, true);
                            return compositeA;
                        };
                        Composite.removeCompositeAt = function(composite, position) {
                            composite.composites.splice(position, 1);
                            Composite.setModified(composite, true, true, false);
                            return composite;
                        };
                        Composite.addBody = function(composite, body) {
                            composite.bodies.push(body);
                            Composite.setModified(composite, true, true, false);
                            return composite;
                        };
                        Composite.removeBody = function(composite, body, deep) {
                            var position = Common.indexOf(composite.bodies, body);
                            if (position !== -1) Composite.removeBodyAt(composite, position);
                            if (deep) for (var i = 0; i < composite.composites.length; i++) Composite.removeBody(composite.composites[i], body, true);
                            return composite;
                        };
                        Composite.removeBodyAt = function(composite, position) {
                            composite.bodies.splice(position, 1);
                            Composite.setModified(composite, true, true, false);
                            return composite;
                        };
                        Composite.addConstraint = function(composite, constraint) {
                            composite.constraints.push(constraint);
                            Composite.setModified(composite, true, true, false);
                            return composite;
                        };
                        Composite.removeConstraint = function(composite, constraint, deep) {
                            var position = Common.indexOf(composite.constraints, constraint);
                            if (position !== -1) Composite.removeConstraintAt(composite, position);
                            if (deep) for (var i = 0; i < composite.composites.length; i++) Composite.removeConstraint(composite.composites[i], constraint, true);
                            return composite;
                        };
                        Composite.removeConstraintAt = function(composite, position) {
                            composite.constraints.splice(position, 1);
                            Composite.setModified(composite, true, true, false);
                            return composite;
                        };
                        Composite.clear = function(composite, keepStatic, deep) {
                            if (deep) for (var i = 0; i < composite.composites.length; i++) Composite.clear(composite.composites[i], keepStatic, true);
                            if (keepStatic) composite.bodies = composite.bodies.filter((function(body) {
                                return body.isStatic;
                            })); else composite.bodies.length = 0;
                            composite.constraints.length = 0;
                            composite.composites.length = 0;
                            Composite.setModified(composite, true, true, false);
                            return composite;
                        };
                        Composite.allBodies = function(composite) {
                            if (composite.cache && composite.cache.allBodies) return composite.cache.allBodies;
                            var bodies = [].concat(composite.bodies);
                            for (var i = 0; i < composite.composites.length; i++) bodies = bodies.concat(Composite.allBodies(composite.composites[i]));
                            if (composite.cache) composite.cache.allBodies = bodies;
                            return bodies;
                        };
                        Composite.allConstraints = function(composite) {
                            if (composite.cache && composite.cache.allConstraints) return composite.cache.allConstraints;
                            var constraints = [].concat(composite.constraints);
                            for (var i = 0; i < composite.composites.length; i++) constraints = constraints.concat(Composite.allConstraints(composite.composites[i]));
                            if (composite.cache) composite.cache.allConstraints = constraints;
                            return constraints;
                        };
                        Composite.allComposites = function(composite) {
                            if (composite.cache && composite.cache.allComposites) return composite.cache.allComposites;
                            var composites = [].concat(composite.composites);
                            for (var i = 0; i < composite.composites.length; i++) composites = composites.concat(Composite.allComposites(composite.composites[i]));
                            if (composite.cache) composite.cache.allComposites = composites;
                            return composites;
                        };
                        Composite.get = function(composite, id, type) {
                            var objects, object;
                            switch (type) {
                              case "body":
                                objects = Composite.allBodies(composite);
                                break;

                              case "constraint":
                                objects = Composite.allConstraints(composite);
                                break;

                              case "composite":
                                objects = Composite.allComposites(composite).concat(composite);
                                break;
                            }
                            if (!objects) return null;
                            object = objects.filter((function(object) {
                                return object.id.toString() === id.toString();
                            }));
                            return object.length === 0 ? null : object[0];
                        };
                        Composite.move = function(compositeA, objects, compositeB) {
                            Composite.remove(compositeA, objects);
                            Composite.add(compositeB, objects);
                            return compositeA;
                        };
                        Composite.rebase = function(composite) {
                            var objects = Composite.allBodies(composite).concat(Composite.allConstraints(composite)).concat(Composite.allComposites(composite));
                            for (var i = 0; i < objects.length; i++) objects[i].id = Common.nextId();
                            return composite;
                        };
                        Composite.translate = function(composite, translation, recursive) {
                            var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
                            for (var i = 0; i < bodies.length; i++) Body.translate(bodies[i], translation);
                            return composite;
                        };
                        Composite.rotate = function(composite, rotation, point, recursive) {
                            var cos = Math.cos(rotation), sin = Math.sin(rotation), bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
                            for (var i = 0; i < bodies.length; i++) {
                                var body = bodies[i], dx = body.position.x - point.x, dy = body.position.y - point.y;
                                Body.setPosition(body, {
                                    x: point.x + (dx * cos - dy * sin),
                                    y: point.y + (dx * sin + dy * cos)
                                });
                                Body.rotate(body, rotation);
                            }
                            return composite;
                        };
                        Composite.scale = function(composite, scaleX, scaleY, point, recursive) {
                            var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
                            for (var i = 0; i < bodies.length; i++) {
                                var body = bodies[i], dx = body.position.x - point.x, dy = body.position.y - point.y;
                                Body.setPosition(body, {
                                    x: point.x + dx * scaleX,
                                    y: point.y + dy * scaleY
                                });
                                Body.scale(body, scaleX, scaleY);
                            }
                            return composite;
                        };
                        Composite.bounds = function(composite) {
                            var bodies = Composite.allBodies(composite), vertices = [];
                            for (var i = 0; i < bodies.length; i += 1) {
                                var body = bodies[i];
                                vertices.push(body.bounds.min, body.bounds.max);
                            }
                            return Bounds.create(vertices);
                        };
                    })();
                }, function(module, exports, __nested_webpack_require_125937__) {
                    var Sleeping = {};
                    module.exports = Sleeping;
                    var Body = __nested_webpack_require_125937__(4);
                    var Events = __nested_webpack_require_125937__(5);
                    var Common = __nested_webpack_require_125937__(0);
                    (function() {
                        Sleeping._motionWakeThreshold = .18;
                        Sleeping._motionSleepThreshold = .08;
                        Sleeping._minBias = .9;
                        Sleeping.update = function(bodies, delta) {
                            var timeScale = delta / Common._baseDelta, motionSleepThreshold = Sleeping._motionSleepThreshold;
                            for (var i = 0; i < bodies.length; i++) {
                                var body = bodies[i], speed = Body.getSpeed(body), angularSpeed = Body.getAngularSpeed(body), motion = speed * speed + angularSpeed * angularSpeed;
                                if (body.force.x !== 0 || body.force.y !== 0) {
                                    Sleeping.set(body, false);
                                    continue;
                                }
                                var minMotion = Math.min(body.motion, motion), maxMotion = Math.max(body.motion, motion);
                                body.motion = Sleeping._minBias * minMotion + (1 - Sleeping._minBias) * maxMotion;
                                if (body.sleepThreshold > 0 && body.motion < motionSleepThreshold) {
                                    body.sleepCounter += 1;
                                    if (body.sleepCounter >= body.sleepThreshold / timeScale) Sleeping.set(body, true);
                                } else if (body.sleepCounter > 0) body.sleepCounter -= 1;
                            }
                        };
                        Sleeping.afterCollisions = function(pairs) {
                            var motionSleepThreshold = Sleeping._motionSleepThreshold;
                            for (var i = 0; i < pairs.length; i++) {
                                var pair = pairs[i];
                                if (!pair.isActive) continue;
                                var collision = pair.collision, bodyA = collision.bodyA.parent, bodyB = collision.bodyB.parent;
                                if (bodyA.isSleeping && bodyB.isSleeping || bodyA.isStatic || bodyB.isStatic) continue;
                                if (bodyA.isSleeping || bodyB.isSleeping) {
                                    var sleepingBody = bodyA.isSleeping && !bodyA.isStatic ? bodyA : bodyB, movingBody = sleepingBody === bodyA ? bodyB : bodyA;
                                    if (!sleepingBody.isStatic && movingBody.motion > motionSleepThreshold) Sleeping.set(sleepingBody, false);
                                }
                            }
                        };
                        Sleeping.set = function(body, isSleeping) {
                            var wasSleeping = body.isSleeping;
                            if (isSleeping) {
                                body.isSleeping = true;
                                body.sleepCounter = body.sleepThreshold;
                                body.positionImpulse.x = 0;
                                body.positionImpulse.y = 0;
                                body.positionPrev.x = body.position.x;
                                body.positionPrev.y = body.position.y;
                                body.anglePrev = body.angle;
                                body.speed = 0;
                                body.angularSpeed = 0;
                                body.motion = 0;
                                if (!wasSleeping) Events.trigger(body, "sleepStart");
                            } else {
                                body.isSleeping = false;
                                body.sleepCounter = 0;
                                if (wasSleeping) Events.trigger(body, "sleepEnd");
                            }
                        };
                    })();
                }, function(module, exports, __nested_webpack_require_130181__) {
                    var Collision = {};
                    module.exports = Collision;
                    var Vertices = __nested_webpack_require_130181__(3);
                    var Pair = __nested_webpack_require_130181__(9);
                    (function() {
                        var _supports = [];
                        var _overlapAB = {
                            overlap: 0,
                            axis: null
                        };
                        var _overlapBA = {
                            overlap: 0,
                            axis: null
                        };
                        Collision.create = function(bodyA, bodyB) {
                            return {
                                pair: null,
                                collided: false,
                                bodyA,
                                bodyB,
                                parentA: bodyA.parent,
                                parentB: bodyB.parent,
                                depth: 0,
                                normal: {
                                    x: 0,
                                    y: 0
                                },
                                tangent: {
                                    x: 0,
                                    y: 0
                                },
                                penetration: {
                                    x: 0,
                                    y: 0
                                },
                                supports: []
                            };
                        };
                        Collision.collides = function(bodyA, bodyB, pairs) {
                            Collision._overlapAxes(_overlapAB, bodyA.vertices, bodyB.vertices, bodyA.axes);
                            if (_overlapAB.overlap <= 0) return null;
                            Collision._overlapAxes(_overlapBA, bodyB.vertices, bodyA.vertices, bodyB.axes);
                            if (_overlapBA.overlap <= 0) return null;
                            var collision, pair = pairs && pairs.table[Pair.id(bodyA, bodyB)];
                            if (!pair) {
                                collision = Collision.create(bodyA, bodyB);
                                collision.collided = true;
                                collision.bodyA = bodyA.id < bodyB.id ? bodyA : bodyB;
                                collision.bodyB = bodyA.id < bodyB.id ? bodyB : bodyA;
                                collision.parentA = collision.bodyA.parent;
                                collision.parentB = collision.bodyB.parent;
                            } else collision = pair.collision;
                            bodyA = collision.bodyA;
                            bodyB = collision.bodyB;
                            var minOverlap;
                            if (_overlapAB.overlap < _overlapBA.overlap) minOverlap = _overlapAB; else minOverlap = _overlapBA;
                            var normal = collision.normal, supports = collision.supports, minAxis = minOverlap.axis, minAxisX = minAxis.x, minAxisY = minAxis.y;
                            if (minAxisX * (bodyB.position.x - bodyA.position.x) + minAxisY * (bodyB.position.y - bodyA.position.y) < 0) {
                                normal.x = minAxisX;
                                normal.y = minAxisY;
                            } else {
                                normal.x = -minAxisX;
                                normal.y = -minAxisY;
                            }
                            collision.tangent.x = -normal.y;
                            collision.tangent.y = normal.x;
                            collision.depth = minOverlap.overlap;
                            collision.penetration.x = normal.x * collision.depth;
                            collision.penetration.y = normal.y * collision.depth;
                            var supportsB = Collision._findSupports(bodyA, bodyB, normal, 1), supportCount = 0;
                            if (Vertices.contains(bodyA.vertices, supportsB[0])) supports[supportCount++] = supportsB[0];
                            if (Vertices.contains(bodyA.vertices, supportsB[1])) supports[supportCount++] = supportsB[1];
                            if (supportCount < 2) {
                                var supportsA = Collision._findSupports(bodyB, bodyA, normal, -1);
                                if (Vertices.contains(bodyB.vertices, supportsA[0])) supports[supportCount++] = supportsA[0];
                                if (supportCount < 2 && Vertices.contains(bodyB.vertices, supportsA[1])) supports[supportCount++] = supportsA[1];
                            }
                            if (supportCount === 0) supports[supportCount++] = supportsB[0];
                            supports.length = supportCount;
                            return collision;
                        };
                        Collision._overlapAxes = function(result, verticesA, verticesB, axes) {
                            var overlap, overlapAB, overlapBA, dot, i, j, verticesALength = verticesA.length, verticesBLength = verticesB.length, verticesAX = verticesA[0].x, verticesAY = verticesA[0].y, verticesBX = verticesB[0].x, verticesBY = verticesB[0].y, axesLength = axes.length, overlapMin = Number.MAX_VALUE, overlapAxisNumber = 0;
                            for (i = 0; i < axesLength; i++) {
                                var axis = axes[i], axisX = axis.x, axisY = axis.y, minA = verticesAX * axisX + verticesAY * axisY, minB = verticesBX * axisX + verticesBY * axisY, maxA = minA, maxB = minB;
                                for (j = 1; j < verticesALength; j += 1) {
                                    dot = verticesA[j].x * axisX + verticesA[j].y * axisY;
                                    if (dot > maxA) maxA = dot; else if (dot < minA) minA = dot;
                                }
                                for (j = 1; j < verticesBLength; j += 1) {
                                    dot = verticesB[j].x * axisX + verticesB[j].y * axisY;
                                    if (dot > maxB) maxB = dot; else if (dot < minB) minB = dot;
                                }
                                overlapAB = maxA - minB;
                                overlapBA = maxB - minA;
                                overlap = overlapAB < overlapBA ? overlapAB : overlapBA;
                                if (overlap < overlapMin) {
                                    overlapMin = overlap;
                                    overlapAxisNumber = i;
                                    if (overlap <= 0) break;
                                }
                            }
                            result.axis = axes[overlapAxisNumber];
                            result.overlap = overlapMin;
                        };
                        Collision._projectToAxis = function(projection, vertices, axis) {
                            var min = vertices[0].x * axis.x + vertices[0].y * axis.y, max = min;
                            for (var i = 1; i < vertices.length; i += 1) {
                                var dot = vertices[i].x * axis.x + vertices[i].y * axis.y;
                                if (dot > max) max = dot; else if (dot < min) min = dot;
                            }
                            projection.min = min;
                            projection.max = max;
                        };
                        Collision._findSupports = function(bodyA, bodyB, normal, direction) {
                            var vertexA, vertexB, vertexC, distance, j, vertices = bodyB.vertices, verticesLength = vertices.length, bodyAPositionX = bodyA.position.x, bodyAPositionY = bodyA.position.y, normalX = normal.x * direction, normalY = normal.y * direction, nearestDistance = Number.MAX_VALUE;
                            for (j = 0; j < verticesLength; j += 1) {
                                vertexB = vertices[j];
                                distance = normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y);
                                if (distance < nearestDistance) {
                                    nearestDistance = distance;
                                    vertexA = vertexB;
                                }
                            }
                            vertexC = vertices[(verticesLength + vertexA.index - 1) % verticesLength];
                            nearestDistance = normalX * (bodyAPositionX - vertexC.x) + normalY * (bodyAPositionY - vertexC.y);
                            vertexB = vertices[(vertexA.index + 1) % verticesLength];
                            if (normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y) < nearestDistance) {
                                _supports[0] = vertexA;
                                _supports[1] = vertexB;
                                return _supports;
                            }
                            _supports[0] = vertexA;
                            _supports[1] = vertexC;
                            return _supports;
                        };
                    })();
                }, function(module, exports, __nested_webpack_require_142084__) {
                    var Pair = {};
                    module.exports = Pair;
                    var Contact = __nested_webpack_require_142084__(16);
                    (function() {
                        Pair.create = function(collision, timestamp) {
                            var bodyA = collision.bodyA, bodyB = collision.bodyB;
                            var pair = {
                                id: Pair.id(bodyA, bodyB),
                                bodyA,
                                bodyB,
                                collision,
                                contacts: [],
                                activeContacts: [],
                                separation: 0,
                                isActive: true,
                                confirmedActive: true,
                                isSensor: bodyA.isSensor || bodyB.isSensor,
                                timeCreated: timestamp,
                                timeUpdated: timestamp,
                                inverseMass: 0,
                                friction: 0,
                                frictionStatic: 0,
                                restitution: 0,
                                slop: 0
                            };
                            Pair.update(pair, collision, timestamp);
                            return pair;
                        };
                        Pair.update = function(pair, collision, timestamp) {
                            var contacts = pair.contacts, supports = collision.supports, activeContacts = pair.activeContacts, parentA = collision.parentA, parentB = collision.parentB, parentAVerticesLength = parentA.vertices.length;
                            pair.isActive = true;
                            pair.timeUpdated = timestamp;
                            pair.collision = collision;
                            pair.separation = collision.depth;
                            pair.inverseMass = parentA.inverseMass + parentB.inverseMass;
                            pair.friction = parentA.friction < parentB.friction ? parentA.friction : parentB.friction;
                            pair.frictionStatic = parentA.frictionStatic > parentB.frictionStatic ? parentA.frictionStatic : parentB.frictionStatic;
                            pair.restitution = parentA.restitution > parentB.restitution ? parentA.restitution : parentB.restitution;
                            pair.slop = parentA.slop > parentB.slop ? parentA.slop : parentB.slop;
                            collision.pair = pair;
                            activeContacts.length = 0;
                            for (var i = 0; i < supports.length; i++) {
                                var support = supports[i], contactId = support.body === parentA ? support.index : parentAVerticesLength + support.index, contact = contacts[contactId];
                                if (contact) activeContacts.push(contact); else activeContacts.push(contacts[contactId] = Contact.create(support));
                            }
                        };
                        Pair.setActive = function(pair, isActive, timestamp) {
                            if (isActive) {
                                pair.isActive = true;
                                pair.timeUpdated = timestamp;
                            } else {
                                pair.isActive = false;
                                pair.activeContacts.length = 0;
                            }
                        };
                        Pair.id = function(bodyA, bodyB) {
                            if (bodyA.id < bodyB.id) return "A" + bodyA.id + "B" + bodyB.id; else return "A" + bodyB.id + "B" + bodyA.id;
                        };
                    })();
                }, function(module, exports, __nested_webpack_require_145828__) {
                    var Constraint = {};
                    module.exports = Constraint;
                    var Vertices = __nested_webpack_require_145828__(3);
                    var Vector = __nested_webpack_require_145828__(2);
                    var Sleeping = __nested_webpack_require_145828__(7);
                    var Bounds = __nested_webpack_require_145828__(1);
                    var Axes = __nested_webpack_require_145828__(11);
                    var Common = __nested_webpack_require_145828__(0);
                    (function() {
                        Constraint._warming = .4;
                        Constraint._torqueDampen = 1;
                        Constraint._minLength = 1e-6;
                        Constraint.create = function(options) {
                            var constraint = options;
                            if (constraint.bodyA && !constraint.pointA) constraint.pointA = {
                                x: 0,
                                y: 0
                            };
                            if (constraint.bodyB && !constraint.pointB) constraint.pointB = {
                                x: 0,
                                y: 0
                            };
                            var initialPointA = constraint.bodyA ? Vector.add(constraint.bodyA.position, constraint.pointA) : constraint.pointA, initialPointB = constraint.bodyB ? Vector.add(constraint.bodyB.position, constraint.pointB) : constraint.pointB, length = Vector.magnitude(Vector.sub(initialPointA, initialPointB));
                            constraint.length = typeof constraint.length !== "undefined" ? constraint.length : length;
                            constraint.id = constraint.id || Common.nextId();
                            constraint.label = constraint.label || "Constraint";
                            constraint.type = "constraint";
                            constraint.stiffness = constraint.stiffness || (constraint.length > 0 ? 1 : .7);
                            constraint.damping = constraint.damping || 0;
                            constraint.angularStiffness = constraint.angularStiffness || 0;
                            constraint.angleA = constraint.bodyA ? constraint.bodyA.angle : constraint.angleA;
                            constraint.angleB = constraint.bodyB ? constraint.bodyB.angle : constraint.angleB;
                            constraint.plugin = {};
                            var render = {
                                visible: true,
                                lineWidth: 2,
                                strokeStyle: "#ffffff",
                                type: "line",
                                anchors: true
                            };
                            if (constraint.length === 0 && constraint.stiffness > .1) {
                                render.type = "pin";
                                render.anchors = false;
                            } else if (constraint.stiffness < .9) render.type = "spring";
                            constraint.render = Common.extend(render, constraint.render);
                            return constraint;
                        };
                        Constraint.preSolveAll = function(bodies) {
                            for (var i = 0; i < bodies.length; i += 1) {
                                var body = bodies[i], impulse = body.constraintImpulse;
                                if (body.isStatic || impulse.x === 0 && impulse.y === 0 && impulse.angle === 0) continue;
                                body.position.x += impulse.x;
                                body.position.y += impulse.y;
                                body.angle += impulse.angle;
                            }
                        };
                        Constraint.solveAll = function(constraints, delta) {
                            var timeScale = Common.clamp(delta / Common._baseDelta, 0, 1);
                            for (var i = 0; i < constraints.length; i += 1) {
                                var constraint = constraints[i], fixedA = !constraint.bodyA || constraint.bodyA && constraint.bodyA.isStatic, fixedB = !constraint.bodyB || constraint.bodyB && constraint.bodyB.isStatic;
                                if (fixedA || fixedB) Constraint.solve(constraints[i], timeScale);
                            }
                            for (i = 0; i < constraints.length; i += 1) {
                                constraint = constraints[i];
                                fixedA = !constraint.bodyA || constraint.bodyA && constraint.bodyA.isStatic;
                                fixedB = !constraint.bodyB || constraint.bodyB && constraint.bodyB.isStatic;
                                if (!fixedA && !fixedB) Constraint.solve(constraints[i], timeScale);
                            }
                        };
                        Constraint.solve = function(constraint, timeScale) {
                            var bodyA = constraint.bodyA, bodyB = constraint.bodyB, pointA = constraint.pointA, pointB = constraint.pointB;
                            if (!bodyA && !bodyB) return;
                            if (bodyA && !bodyA.isStatic) {
                                Vector.rotate(pointA, bodyA.angle - constraint.angleA, pointA);
                                constraint.angleA = bodyA.angle;
                            }
                            if (bodyB && !bodyB.isStatic) {
                                Vector.rotate(pointB, bodyB.angle - constraint.angleB, pointB);
                                constraint.angleB = bodyB.angle;
                            }
                            var pointAWorld = pointA, pointBWorld = pointB;
                            if (bodyA) pointAWorld = Vector.add(bodyA.position, pointA);
                            if (bodyB) pointBWorld = Vector.add(bodyB.position, pointB);
                            if (!pointAWorld || !pointBWorld) return;
                            var delta = Vector.sub(pointAWorld, pointBWorld), currentLength = Vector.magnitude(delta);
                            if (currentLength < Constraint._minLength) currentLength = Constraint._minLength;
                            var torque, share, normal, normalVelocity, relativeVelocity, difference = (currentLength - constraint.length) / currentLength, isRigid = constraint.stiffness >= 1 || constraint.length === 0, stiffness = isRigid ? constraint.stiffness * timeScale : constraint.stiffness * timeScale * timeScale, damping = constraint.damping * timeScale, force = Vector.mult(delta, difference * stiffness), massTotal = (bodyA ? bodyA.inverseMass : 0) + (bodyB ? bodyB.inverseMass : 0), inertiaTotal = (bodyA ? bodyA.inverseInertia : 0) + (bodyB ? bodyB.inverseInertia : 0), resistanceTotal = massTotal + inertiaTotal;
                            if (damping > 0) {
                                var zero = Vector.create();
                                normal = Vector.div(delta, currentLength);
                                relativeVelocity = Vector.sub(bodyB && Vector.sub(bodyB.position, bodyB.positionPrev) || zero, bodyA && Vector.sub(bodyA.position, bodyA.positionPrev) || zero);
                                normalVelocity = Vector.dot(normal, relativeVelocity);
                            }
                            if (bodyA && !bodyA.isStatic) {
                                share = bodyA.inverseMass / massTotal;
                                bodyA.constraintImpulse.x -= force.x * share;
                                bodyA.constraintImpulse.y -= force.y * share;
                                bodyA.position.x -= force.x * share;
                                bodyA.position.y -= force.y * share;
                                if (damping > 0) {
                                    bodyA.positionPrev.x -= damping * normal.x * normalVelocity * share;
                                    bodyA.positionPrev.y -= damping * normal.y * normalVelocity * share;
                                }
                                torque = Vector.cross(pointA, force) / resistanceTotal * Constraint._torqueDampen * bodyA.inverseInertia * (1 - constraint.angularStiffness);
                                bodyA.constraintImpulse.angle -= torque;
                                bodyA.angle -= torque;
                            }
                            if (bodyB && !bodyB.isStatic) {
                                share = bodyB.inverseMass / massTotal;
                                bodyB.constraintImpulse.x += force.x * share;
                                bodyB.constraintImpulse.y += force.y * share;
                                bodyB.position.x += force.x * share;
                                bodyB.position.y += force.y * share;
                                if (damping > 0) {
                                    bodyB.positionPrev.x += damping * normal.x * normalVelocity * share;
                                    bodyB.positionPrev.y += damping * normal.y * normalVelocity * share;
                                }
                                torque = Vector.cross(pointB, force) / resistanceTotal * Constraint._torqueDampen * bodyB.inverseInertia * (1 - constraint.angularStiffness);
                                bodyB.constraintImpulse.angle += torque;
                                bodyB.angle += torque;
                            }
                        };
                        Constraint.postSolveAll = function(bodies) {
                            for (var i = 0; i < bodies.length; i++) {
                                var body = bodies[i], impulse = body.constraintImpulse;
                                if (body.isStatic || impulse.x === 0 && impulse.y === 0 && impulse.angle === 0) continue;
                                Sleeping.set(body, false);
                                for (var j = 0; j < body.parts.length; j++) {
                                    var part = body.parts[j];
                                    Vertices.translate(part.vertices, impulse);
                                    if (j > 0) {
                                        part.position.x += impulse.x;
                                        part.position.y += impulse.y;
                                    }
                                    if (impulse.angle !== 0) {
                                        Vertices.rotate(part.vertices, impulse.angle, body.position);
                                        Axes.rotate(part.axes, impulse.angle);
                                        if (j > 0) Vector.rotateAbout(part.position, impulse.angle, body.position, part.position);
                                    }
                                    Bounds.update(part.bounds, part.vertices, body.velocity);
                                }
                                impulse.angle *= Constraint._warming;
                                impulse.x *= Constraint._warming;
                                impulse.y *= Constraint._warming;
                            }
                        };
                        Constraint.pointAWorld = function(constraint) {
                            return {
                                x: (constraint.bodyA ? constraint.bodyA.position.x : 0) + (constraint.pointA ? constraint.pointA.x : 0),
                                y: (constraint.bodyA ? constraint.bodyA.position.y : 0) + (constraint.pointA ? constraint.pointA.y : 0)
                            };
                        };
                        Constraint.pointBWorld = function(constraint) {
                            return {
                                x: (constraint.bodyB ? constraint.bodyB.position.x : 0) + (constraint.pointB ? constraint.pointB.x : 0),
                                y: (constraint.bodyB ? constraint.bodyB.position.y : 0) + (constraint.pointB ? constraint.pointB.y : 0)
                            };
                        };
                    })();
                }, function(module, exports, __nested_webpack_require_162575__) {
                    var Axes = {};
                    module.exports = Axes;
                    var Vector = __nested_webpack_require_162575__(2);
                    var Common = __nested_webpack_require_162575__(0);
                    (function() {
                        Axes.fromVertices = function(vertices) {
                            var axes = {};
                            for (var i = 0; i < vertices.length; i++) {
                                var j = (i + 1) % vertices.length, normal = Vector.normalise({
                                    x: vertices[j].y - vertices[i].y,
                                    y: vertices[i].x - vertices[j].x
                                }), gradient = normal.y === 0 ? 1 / 0 : normal.x / normal.y;
                                gradient = gradient.toFixed(3).toString();
                                axes[gradient] = normal;
                            }
                            return Common.values(axes);
                        };
                        Axes.rotate = function(axes, angle) {
                            if (angle === 0) return;
                            var cos = Math.cos(angle), sin = Math.sin(angle);
                            for (var i = 0; i < axes.length; i++) {
                                var xx, axis = axes[i];
                                xx = axis.x * cos - axis.y * sin;
                                axis.y = axis.x * sin + axis.y * cos;
                                axis.x = xx;
                            }
                        };
                    })();
                }, function(module, exports, __nested_webpack_require_164316__) {
                    var Bodies = {};
                    module.exports = Bodies;
                    var Vertices = __nested_webpack_require_164316__(3);
                    var Common = __nested_webpack_require_164316__(0);
                    var Body = __nested_webpack_require_164316__(4);
                    var Bounds = __nested_webpack_require_164316__(1);
                    var Vector = __nested_webpack_require_164316__(2);
                    (function() {
                        Bodies.rectangle = function(x, y, width, height, options) {
                            options = options || {};
                            var rectangle = {
                                label: "Rectangle Body",
                                position: {
                                    x,
                                    y
                                },
                                vertices: Vertices.fromPath("L 0 0 L " + width + " 0 L " + width + " " + height + " L 0 " + height)
                            };
                            if (options.chamfer) {
                                var chamfer = options.chamfer;
                                rectangle.vertices = Vertices.chamfer(rectangle.vertices, chamfer.radius, chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
                                delete options.chamfer;
                            }
                            return Body.create(Common.extend({}, rectangle, options));
                        };
                        Bodies.trapezoid = function(x, y, width, height, slope, options) {
                            options = options || {};
                            slope *= .5;
                            var roof = (1 - slope * 2) * width;
                            var verticesPath, x1 = width * slope, x2 = x1 + roof, x3 = x2 + x1;
                            if (slope < .5) verticesPath = "L 0 0 L " + x1 + " " + -height + " L " + x2 + " " + -height + " L " + x3 + " 0"; else verticesPath = "L 0 0 L " + x2 + " " + -height + " L " + x3 + " 0";
                            var trapezoid = {
                                label: "Trapezoid Body",
                                position: {
                                    x,
                                    y
                                },
                                vertices: Vertices.fromPath(verticesPath)
                            };
                            if (options.chamfer) {
                                var chamfer = options.chamfer;
                                trapezoid.vertices = Vertices.chamfer(trapezoid.vertices, chamfer.radius, chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
                                delete options.chamfer;
                            }
                            return Body.create(Common.extend({}, trapezoid, options));
                        };
                        Bodies.circle = function(x, y, radius, options, maxSides) {
                            options = options || {};
                            var circle = {
                                label: "Circle Body",
                                circleRadius: radius
                            };
                            maxSides = maxSides || 25;
                            var sides = Math.ceil(Math.max(10, Math.min(maxSides, radius)));
                            if (sides % 2 === 1) sides += 1;
                            return Bodies.polygon(x, y, sides, radius, Common.extend({}, circle, options));
                        };
                        Bodies.polygon = function(x, y, sides, radius, options) {
                            options = options || {};
                            if (sides < 3) return Bodies.circle(x, y, radius, options);
                            var theta = 2 * Math.PI / sides, path = "", offset = theta * .5;
                            for (var i = 0; i < sides; i += 1) {
                                var angle = offset + i * theta, xx = Math.cos(angle) * radius, yy = Math.sin(angle) * radius;
                                path += "L " + xx.toFixed(3) + " " + yy.toFixed(3) + " ";
                            }
                            var polygon = {
                                label: "Polygon Body",
                                position: {
                                    x,
                                    y
                                },
                                vertices: Vertices.fromPath(path)
                            };
                            if (options.chamfer) {
                                var chamfer = options.chamfer;
                                polygon.vertices = Vertices.chamfer(polygon.vertices, chamfer.radius, chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
                                delete options.chamfer;
                            }
                            return Body.create(Common.extend({}, polygon, options));
                        };
                        Bodies.fromVertices = function(x, y, vertexSets, options, flagInternal, removeCollinear, minimumArea, removeDuplicatePoints) {
                            var canDecomp, body, parts, isConvex, isConcave, vertices, i, j, k, v, z, decomp = Common.getDecomp();
                            canDecomp = Boolean(decomp && decomp.quickDecomp);
                            options = options || {};
                            parts = [];
                            flagInternal = typeof flagInternal !== "undefined" ? flagInternal : false;
                            removeCollinear = typeof removeCollinear !== "undefined" ? removeCollinear : .01;
                            minimumArea = typeof minimumArea !== "undefined" ? minimumArea : 10;
                            removeDuplicatePoints = typeof removeDuplicatePoints !== "undefined" ? removeDuplicatePoints : .01;
                            if (!Common.isArray(vertexSets[0])) vertexSets = [ vertexSets ];
                            for (v = 0; v < vertexSets.length; v += 1) {
                                vertices = vertexSets[v];
                                isConvex = Vertices.isConvex(vertices);
                                isConcave = !isConvex;
                                if (isConcave && !canDecomp) Common.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices.");
                                if (isConvex || !canDecomp) {
                                    if (isConvex) vertices = Vertices.clockwiseSort(vertices); else vertices = Vertices.hull(vertices);
                                    parts.push({
                                        position: {
                                            x,
                                            y
                                        },
                                        vertices
                                    });
                                } else {
                                    var concave = vertices.map((function(vertex) {
                                        return [ vertex.x, vertex.y ];
                                    }));
                                    decomp.makeCCW(concave);
                                    if (removeCollinear !== false) decomp.removeCollinearPoints(concave, removeCollinear);
                                    if (removeDuplicatePoints !== false && decomp.removeDuplicatePoints) decomp.removeDuplicatePoints(concave, removeDuplicatePoints);
                                    var decomposed = decomp.quickDecomp(concave);
                                    for (i = 0; i < decomposed.length; i++) {
                                        var chunk = decomposed[i];
                                        var chunkVertices = chunk.map((function(vertices) {
                                            return {
                                                x: vertices[0],
                                                y: vertices[1]
                                            };
                                        }));
                                        if (minimumArea > 0 && Vertices.area(chunkVertices) < minimumArea) continue;
                                        parts.push({
                                            position: Vertices.centre(chunkVertices),
                                            vertices: chunkVertices
                                        });
                                    }
                                }
                            }
                            for (i = 0; i < parts.length; i++) parts[i] = Body.create(Common.extend(parts[i], options));
                            if (flagInternal) {
                                var coincident_max_dist = 5;
                                for (i = 0; i < parts.length; i++) {
                                    var partA = parts[i];
                                    for (j = i + 1; j < parts.length; j++) {
                                        var partB = parts[j];
                                        if (Bounds.overlaps(partA.bounds, partB.bounds)) {
                                            var pav = partA.vertices, pbv = partB.vertices;
                                            for (k = 0; k < partA.vertices.length; k++) for (z = 0; z < partB.vertices.length; z++) {
                                                var da = Vector.magnitudeSquared(Vector.sub(pav[(k + 1) % pav.length], pbv[z])), db = Vector.magnitudeSquared(Vector.sub(pav[k], pbv[(z + 1) % pbv.length]));
                                                if (da < coincident_max_dist && db < coincident_max_dist) {
                                                    pav[k].isInternal = true;
                                                    pbv[z].isInternal = true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (parts.length > 1) {
                                body = Body.create(Common.extend({
                                    parts: parts.slice(0)
                                }, options));
                                Body.setPosition(body, {
                                    x,
                                    y
                                });
                                return body;
                            } else return parts[0];
                        };
                    })();
                }, function(module, exports, __nested_webpack_require_178316__) {
                    var Detector = {};
                    module.exports = Detector;
                    var Common = __nested_webpack_require_178316__(0);
                    var Collision = __nested_webpack_require_178316__(8);
                    (function() {
                        Detector.create = function(options) {
                            var defaults = {
                                bodies: [],
                                pairs: null
                            };
                            return Common.extend(defaults, options);
                        };
                        Detector.setBodies = function(detector, bodies) {
                            detector.bodies = bodies.slice(0);
                        };
                        Detector.clear = function(detector) {
                            detector.bodies = [];
                        };
                        Detector.collisions = function(detector) {
                            var i, j, collisions = [], pairs = detector.pairs, bodies = detector.bodies, bodiesLength = bodies.length, canCollide = Detector.canCollide, collides = Collision.collides;
                            bodies.sort(Detector._compareBoundsX);
                            for (i = 0; i < bodiesLength; i++) {
                                var bodyA = bodies[i], boundsA = bodyA.bounds, boundXMax = bodyA.bounds.max.x, boundYMax = bodyA.bounds.max.y, boundYMin = bodyA.bounds.min.y, bodyAStatic = bodyA.isStatic || bodyA.isSleeping, partsALength = bodyA.parts.length, partsASingle = partsALength === 1;
                                for (j = i + 1; j < bodiesLength; j++) {
                                    var bodyB = bodies[j], boundsB = bodyB.bounds;
                                    if (boundsB.min.x > boundXMax) break;
                                    if (boundYMax < boundsB.min.y || boundYMin > boundsB.max.y) continue;
                                    if (bodyAStatic && (bodyB.isStatic || bodyB.isSleeping)) continue;
                                    if (!canCollide(bodyA.collisionFilter, bodyB.collisionFilter)) continue;
                                    var partsBLength = bodyB.parts.length;
                                    if (partsASingle && partsBLength === 1) {
                                        var collision = collides(bodyA, bodyB, pairs);
                                        if (collision) collisions.push(collision);
                                    } else {
                                        var partsAStart = partsALength > 1 ? 1 : 0, partsBStart = partsBLength > 1 ? 1 : 0;
                                        for (var k = partsAStart; k < partsALength; k++) {
                                            var partA = bodyA.parts[k];
                                            boundsA = partA.bounds;
                                            for (var z = partsBStart; z < partsBLength; z++) {
                                                var partB = bodyB.parts[z];
                                                boundsB = partB.bounds;
                                                if (boundsA.min.x > boundsB.max.x || boundsA.max.x < boundsB.min.x || boundsA.max.y < boundsB.min.y || boundsA.min.y > boundsB.max.y) continue;
                                                collision = collides(partA, partB, pairs);
                                                if (collision) collisions.push(collision);
                                            }
                                        }
                                    }
                                }
                            }
                            return collisions;
                        };
                        Detector.canCollide = function(filterA, filterB) {
                            if (filterA.group === filterB.group && filterA.group !== 0) return filterA.group > 0;
                            return (filterA.mask & filterB.category) !== 0 && (filterB.mask & filterA.category) !== 0;
                        };
                        Detector._compareBoundsX = function(bodyA, bodyB) {
                            return bodyA.bounds.min.x - bodyB.bounds.min.x;
                        };
                    })();
                }, function(module, exports, __nested_webpack_require_184361__) {
                    var Mouse = {};
                    module.exports = Mouse;
                    var Common = __nested_webpack_require_184361__(0);
                    (function() {
                        Mouse.create = function(element) {
                            var mouse = {};
                            if (!element) Common.log("Mouse.create: element was undefined, defaulting to document.body", "warn");
                            mouse.element = element || document.body;
                            mouse.absolute = {
                                x: 0,
                                y: 0
                            };
                            mouse.position = {
                                x: 0,
                                y: 0
                            };
                            mouse.mousedownPosition = {
                                x: 0,
                                y: 0
                            };
                            mouse.mouseupPosition = {
                                x: 0,
                                y: 0
                            };
                            mouse.offset = {
                                x: 0,
                                y: 0
                            };
                            mouse.scale = {
                                x: 1,
                                y: 1
                            };
                            mouse.wheelDelta = 0;
                            mouse.button = -1;
                            mouse.pixelRatio = parseInt(mouse.element.getAttribute("data-pixel-ratio"), 10) || 1;
                            mouse.sourceEvents = {
                                mousemove: null,
                                mousedown: null,
                                mouseup: null,
                                mousewheel: null
                            };
                            mouse.mousemove = function(event) {
                                var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;
                                if (touches) {
                                    mouse.button = 0;
                                    event.preventDefault();
                                }
                                mouse.absolute.x = position.x;
                                mouse.absolute.y = position.y;
                                mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                                mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                                mouse.sourceEvents.mousemove = event;
                            };
                            mouse.mousedown = function(event) {
                                var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;
                                if (touches) {
                                    mouse.button = 0;
                                    event.preventDefault();
                                } else mouse.button = event.button;
                                mouse.absolute.x = position.x;
                                mouse.absolute.y = position.y;
                                mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                                mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                                mouse.mousedownPosition.x = mouse.position.x;
                                mouse.mousedownPosition.y = mouse.position.y;
                                mouse.sourceEvents.mousedown = event;
                            };
                            mouse.mouseup = function(event) {
                                var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;
                                if (touches) event.preventDefault();
                                mouse.button = -1;
                                mouse.absolute.x = position.x;
                                mouse.absolute.y = position.y;
                                mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                                mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                                mouse.mouseupPosition.x = mouse.position.x;
                                mouse.mouseupPosition.y = mouse.position.y;
                                mouse.sourceEvents.mouseup = event;
                            };
                            mouse.mousewheel = function(event) {
                                mouse.wheelDelta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
                                event.preventDefault();
                            };
                            Mouse.setElement(mouse, mouse.element);
                            return mouse;
                        };
                        Mouse.setElement = function(mouse, element) {
                            mouse.element = element;
                            element.addEventListener("mousemove", mouse.mousemove);
                            element.addEventListener("mousedown", mouse.mousedown);
                            element.addEventListener("mouseup", mouse.mouseup);
                            element.addEventListener("mousewheel", mouse.mousewheel);
                            element.addEventListener("DOMMouseScroll", mouse.mousewheel);
                            element.addEventListener("touchmove", mouse.mousemove);
                            element.addEventListener("touchstart", mouse.mousedown);
                            element.addEventListener("touchend", mouse.mouseup);
                        };
                        Mouse.clearSourceEvents = function(mouse) {
                            mouse.sourceEvents.mousemove = null;
                            mouse.sourceEvents.mousedown = null;
                            mouse.sourceEvents.mouseup = null;
                            mouse.sourceEvents.mousewheel = null;
                            mouse.wheelDelta = 0;
                        };
                        Mouse.setOffset = function(mouse, offset) {
                            mouse.offset.x = offset.x;
                            mouse.offset.y = offset.y;
                            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                        };
                        Mouse.setScale = function(mouse, scale) {
                            mouse.scale.x = scale.x;
                            mouse.scale.y = scale.y;
                            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                        };
                        Mouse._getRelativeMousePosition = function(event, element, pixelRatio) {
                            var x, y, elementBounds = element.getBoundingClientRect(), rootNode = document.documentElement || document.body.parentNode || document.body, scrollX = window.pageXOffset !== void 0 ? window.pageXOffset : rootNode.scrollLeft, scrollY = window.pageYOffset !== void 0 ? window.pageYOffset : rootNode.scrollTop, touches = event.changedTouches;
                            if (touches) {
                                x = touches[0].pageX - elementBounds.left - scrollX;
                                y = touches[0].pageY - elementBounds.top - scrollY;
                            } else {
                                x = event.pageX - elementBounds.left - scrollX;
                                y = event.pageY - elementBounds.top - scrollY;
                            }
                            return {
                                x: x / (element.clientWidth / (element.width || element.clientWidth) * pixelRatio),
                                y: y / (element.clientHeight / (element.height || element.clientHeight) * pixelRatio)
                            };
                        };
                    })();
                }, function(module, exports, __nested_webpack_require_191365__) {
                    var Plugin = {};
                    module.exports = Plugin;
                    var Common = __nested_webpack_require_191365__(0);
                    (function() {
                        Plugin._registry = {};
                        Plugin.register = function(plugin) {
                            if (!Plugin.isPlugin(plugin)) Common.warn("Plugin.register:", Plugin.toString(plugin), "does not implement all required fields.");
                            if (plugin.name in Plugin._registry) {
                                var registered = Plugin._registry[plugin.name], pluginVersion = Plugin.versionParse(plugin.version).number, registeredVersion = Plugin.versionParse(registered.version).number;
                                if (pluginVersion > registeredVersion) {
                                    Common.warn("Plugin.register:", Plugin.toString(registered), "was upgraded to", Plugin.toString(plugin));
                                    Plugin._registry[plugin.name] = plugin;
                                } else if (pluginVersion < registeredVersion) Common.warn("Plugin.register:", Plugin.toString(registered), "can not be downgraded to", Plugin.toString(plugin)); else if (plugin !== registered) Common.warn("Plugin.register:", Plugin.toString(plugin), "is already registered to different plugin object");
                            } else Plugin._registry[plugin.name] = plugin;
                            return plugin;
                        };
                        Plugin.resolve = function(dependency) {
                            return Plugin._registry[Plugin.dependencyParse(dependency).name];
                        };
                        Plugin.toString = function(plugin) {
                            return typeof plugin === "string" ? plugin : (plugin.name || "anonymous") + "@" + (plugin.version || plugin.range || "0.0.0");
                        };
                        Plugin.isPlugin = function(obj) {
                            return obj && obj.name && obj.version && obj.install;
                        };
                        Plugin.isUsed = function(module, name) {
                            return module.used.indexOf(name) > -1;
                        };
                        Plugin.isFor = function(plugin, module) {
                            var parsed = plugin.for && Plugin.dependencyParse(plugin.for);
                            return !plugin.for || module.name === parsed.name && Plugin.versionSatisfies(module.version, parsed.range);
                        };
                        Plugin.use = function(module, plugins) {
                            module.uses = (module.uses || []).concat(plugins || []);
                            if (module.uses.length === 0) {
                                Common.warn("Plugin.use:", Plugin.toString(module), "does not specify any dependencies to install.");
                                return;
                            }
                            var dependencies = Plugin.dependencies(module), sortedDependencies = Common.topologicalSort(dependencies), status = [];
                            for (var i = 0; i < sortedDependencies.length; i += 1) {
                                if (sortedDependencies[i] === module.name) continue;
                                var plugin = Plugin.resolve(sortedDependencies[i]);
                                if (!plugin) {
                                    status.push("❌ " + sortedDependencies[i]);
                                    continue;
                                }
                                if (Plugin.isUsed(module, plugin.name)) continue;
                                if (!Plugin.isFor(plugin, module)) {
                                    Common.warn("Plugin.use:", Plugin.toString(plugin), "is for", plugin.for, "but installed on", Plugin.toString(module) + ".");
                                    plugin._warned = true;
                                }
                                if (plugin.install) plugin.install(module); else {
                                    Common.warn("Plugin.use:", Plugin.toString(plugin), "does not specify an install function.");
                                    plugin._warned = true;
                                }
                                if (plugin._warned) {
                                    status.push("🔶 " + Plugin.toString(plugin));
                                    delete plugin._warned;
                                } else status.push("✅ " + Plugin.toString(plugin));
                                module.used.push(plugin.name);
                            }
                            if (status.length > 0) Common.info(status.join("  "));
                        };
                        Plugin.dependencies = function(module, tracked) {
                            var parsedBase = Plugin.dependencyParse(module), name = parsedBase.name;
                            tracked = tracked || {};
                            if (name in tracked) return;
                            module = Plugin.resolve(module) || module;
                            tracked[name] = Common.map(module.uses || [], (function(dependency) {
                                if (Plugin.isPlugin(dependency)) Plugin.register(dependency);
                                var parsed = Plugin.dependencyParse(dependency), resolved = Plugin.resolve(dependency);
                                if (resolved && !Plugin.versionSatisfies(resolved.version, parsed.range)) {
                                    Common.warn("Plugin.dependencies:", Plugin.toString(resolved), "does not satisfy", Plugin.toString(parsed), "used by", Plugin.toString(parsedBase) + ".");
                                    resolved._warned = true;
                                    module._warned = true;
                                } else if (!resolved) {
                                    Common.warn("Plugin.dependencies:", Plugin.toString(dependency), "used by", Plugin.toString(parsedBase), "could not be resolved.");
                                    module._warned = true;
                                }
                                return parsed.name;
                            }));
                            for (var i = 0; i < tracked[name].length; i += 1) Plugin.dependencies(tracked[name][i], tracked);
                            return tracked;
                        };
                        Plugin.dependencyParse = function(dependency) {
                            if (Common.isString(dependency)) {
                                var pattern = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;
                                if (!pattern.test(dependency)) Common.warn("Plugin.dependencyParse:", dependency, "is not a valid dependency string.");
                                return {
                                    name: dependency.split("@")[0],
                                    range: dependency.split("@")[1] || "*"
                                };
                            }
                            return {
                                name: dependency.name,
                                range: dependency.range || dependency.version
                            };
                        };
                        Plugin.versionParse = function(range) {
                            var pattern = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
                            if (!pattern.test(range)) Common.warn("Plugin.versionParse:", range, "is not a valid version or range.");
                            var parts = pattern.exec(range);
                            var major = Number(parts[4]);
                            var minor = Number(parts[5]);
                            var patch = Number(parts[6]);
                            return {
                                isRange: Boolean(parts[1] || parts[2]),
                                version: parts[3],
                                range,
                                operator: parts[1] || parts[2] || "",
                                major,
                                minor,
                                patch,
                                parts: [ major, minor, patch ],
                                prerelease: parts[7],
                                number: major * 1e8 + minor * 1e4 + patch
                            };
                        };
                        Plugin.versionSatisfies = function(version, range) {
                            range = range || "*";
                            var r = Plugin.versionParse(range), v = Plugin.versionParse(version);
                            if (r.isRange) {
                                if (r.operator === "*" || version === "*") return true;
                                if (r.operator === ">") return v.number > r.number;
                                if (r.operator === ">=") return v.number >= r.number;
                                if (r.operator === "~") return v.major === r.major && v.minor === r.minor && v.patch >= r.patch;
                                if (r.operator === "^") {
                                    if (r.major > 0) return v.major === r.major && v.number >= r.number;
                                    if (r.minor > 0) return v.minor === r.minor && v.patch >= r.patch;
                                    return v.patch === r.patch;
                                }
                            }
                            return version === range || version === "*";
                        };
                    })();
                }, function(module, exports) {
                    var Contact = {};
                    module.exports = Contact;
                    (function() {
                        Contact.create = function(vertex) {
                            return {
                                vertex,
                                normalImpulse: 0,
                                tangentImpulse: 0
                            };
                        };
                    })();
                }, function(module, exports, __nested_webpack_require_205269__) {
                    var Engine = {};
                    module.exports = Engine;
                    var Sleeping = __nested_webpack_require_205269__(7);
                    var Resolver = __nested_webpack_require_205269__(18);
                    var Detector = __nested_webpack_require_205269__(13);
                    var Pairs = __nested_webpack_require_205269__(19);
                    var Events = __nested_webpack_require_205269__(5);
                    var Composite = __nested_webpack_require_205269__(6);
                    var Constraint = __nested_webpack_require_205269__(10);
                    var Common = __nested_webpack_require_205269__(0);
                    var Body = __nested_webpack_require_205269__(4);
                    (function() {
                        Engine.create = function(options) {
                            options = options || {};
                            var defaults = {
                                positionIterations: 6,
                                velocityIterations: 4,
                                constraintIterations: 2,
                                enableSleeping: false,
                                events: [],
                                plugin: {},
                                gravity: {
                                    x: 0,
                                    y: 1,
                                    scale: .001
                                },
                                timing: {
                                    timestamp: 0,
                                    timeScale: 1,
                                    lastDelta: 0,
                                    lastElapsed: 0
                                }
                            };
                            var engine = Common.extend(defaults, options);
                            engine.world = options.world || Composite.create({
                                label: "World"
                            });
                            engine.pairs = options.pairs || Pairs.create();
                            engine.detector = options.detector || Detector.create();
                            engine.grid = {
                                buckets: []
                            };
                            engine.world.gravity = engine.gravity;
                            engine.broadphase = engine.grid;
                            engine.metrics = {};
                            return engine;
                        };
                        Engine.update = function(engine, delta) {
                            var startTime = Common.now();
                            var i, world = engine.world, detector = engine.detector, pairs = engine.pairs, timing = engine.timing, timestamp = timing.timestamp;
                            delta = typeof delta !== "undefined" ? delta : Common._baseDelta;
                            delta *= timing.timeScale;
                            timing.timestamp += delta;
                            timing.lastDelta = delta;
                            var event = {
                                timestamp: timing.timestamp,
                                delta
                            };
                            Events.trigger(engine, "beforeUpdate", event);
                            var allBodies = Composite.allBodies(world), allConstraints = Composite.allConstraints(world);
                            if (world.isModified) {
                                Detector.setBodies(detector, allBodies);
                                Composite.setModified(world, false, false, true);
                            }
                            if (engine.enableSleeping) Sleeping.update(allBodies, delta);
                            Engine._bodiesApplyGravity(allBodies, engine.gravity);
                            if (delta > 0) Engine._bodiesUpdate(allBodies, delta);
                            Constraint.preSolveAll(allBodies);
                            for (i = 0; i < engine.constraintIterations; i++) Constraint.solveAll(allConstraints, delta);
                            Constraint.postSolveAll(allBodies);
                            detector.pairs = engine.pairs;
                            var collisions = Detector.collisions(detector);
                            Pairs.update(pairs, collisions, timestamp);
                            if (engine.enableSleeping) Sleeping.afterCollisions(pairs.list);
                            if (pairs.collisionStart.length > 0) Events.trigger(engine, "collisionStart", {
                                pairs: pairs.collisionStart
                            });
                            var positionDamping = Common.clamp(20 / engine.positionIterations, 0, 1);
                            Resolver.preSolvePosition(pairs.list);
                            for (i = 0; i < engine.positionIterations; i++) Resolver.solvePosition(pairs.list, delta, positionDamping);
                            Resolver.postSolvePosition(allBodies);
                            Constraint.preSolveAll(allBodies);
                            for (i = 0; i < engine.constraintIterations; i++) Constraint.solveAll(allConstraints, delta);
                            Constraint.postSolveAll(allBodies);
                            Resolver.preSolveVelocity(pairs.list);
                            for (i = 0; i < engine.velocityIterations; i++) Resolver.solveVelocity(pairs.list, delta);
                            Engine._bodiesUpdateVelocities(allBodies);
                            if (pairs.collisionActive.length > 0) Events.trigger(engine, "collisionActive", {
                                pairs: pairs.collisionActive
                            });
                            if (pairs.collisionEnd.length > 0) Events.trigger(engine, "collisionEnd", {
                                pairs: pairs.collisionEnd
                            });
                            Engine._bodiesClearForces(allBodies);
                            Events.trigger(engine, "afterUpdate", event);
                            engine.timing.lastElapsed = Common.now() - startTime;
                            return engine;
                        };
                        Engine.merge = function(engineA, engineB) {
                            Common.extend(engineA, engineB);
                            if (engineB.world) {
                                engineA.world = engineB.world;
                                Engine.clear(engineA);
                                var bodies = Composite.allBodies(engineA.world);
                                for (var i = 0; i < bodies.length; i++) {
                                    var body = bodies[i];
                                    Sleeping.set(body, false);
                                    body.id = Common.nextId();
                                }
                            }
                        };
                        Engine.clear = function(engine) {
                            Pairs.clear(engine.pairs);
                            Detector.clear(engine.detector);
                        };
                        Engine._bodiesClearForces = function(bodies) {
                            var bodiesLength = bodies.length;
                            for (var i = 0; i < bodiesLength; i++) {
                                var body = bodies[i];
                                body.force.x = 0;
                                body.force.y = 0;
                                body.torque = 0;
                            }
                        };
                        Engine._bodiesApplyGravity = function(bodies, gravity) {
                            var gravityScale = typeof gravity.scale !== "undefined" ? gravity.scale : .001, bodiesLength = bodies.length;
                            if (gravity.x === 0 && gravity.y === 0 || gravityScale === 0) return;
                            for (var i = 0; i < bodiesLength; i++) {
                                var body = bodies[i];
                                if (body.isStatic || body.isSleeping) continue;
                                body.force.y += body.mass * gravity.y * gravityScale;
                                body.force.x += body.mass * gravity.x * gravityScale;
                            }
                        };
                        Engine._bodiesUpdate = function(bodies, delta) {
                            var bodiesLength = bodies.length;
                            for (var i = 0; i < bodiesLength; i++) {
                                var body = bodies[i];
                                if (body.isStatic || body.isSleeping) continue;
                                Body.update(body, delta);
                            }
                        };
                        Engine._bodiesUpdateVelocities = function(bodies) {
                            var bodiesLength = bodies.length;
                            for (var i = 0; i < bodiesLength; i++) Body.updateVelocities(bodies[i]);
                        };
                    })();
                }, function(module, exports, __nested_webpack_require_222656__) {
                    var Resolver = {};
                    module.exports = Resolver;
                    var Vertices = __nested_webpack_require_222656__(3);
                    var Common = __nested_webpack_require_222656__(0);
                    var Bounds = __nested_webpack_require_222656__(1);
                    (function() {
                        Resolver._restingThresh = 2;
                        Resolver._restingThreshTangent = Math.sqrt(6);
                        Resolver._positionDampen = .9;
                        Resolver._positionWarming = .8;
                        Resolver._frictionNormalMultiplier = 5;
                        Resolver._frictionMaxStatic = Number.MAX_VALUE;
                        Resolver.preSolvePosition = function(pairs) {
                            var i, pair, activeCount, pairsLength = pairs.length;
                            for (i = 0; i < pairsLength; i++) {
                                pair = pairs[i];
                                if (!pair.isActive) continue;
                                activeCount = pair.activeContacts.length;
                                pair.collision.parentA.totalContacts += activeCount;
                                pair.collision.parentB.totalContacts += activeCount;
                            }
                        };
                        Resolver.solvePosition = function(pairs, delta, damping) {
                            var i, pair, collision, bodyA, bodyB, normal, contactShare, positionImpulse, positionDampen = Resolver._positionDampen * (damping || 1), slopDampen = Common.clamp(delta / Common._baseDelta, 0, 1), pairsLength = pairs.length;
                            for (i = 0; i < pairsLength; i++) {
                                pair = pairs[i];
                                if (!pair.isActive || pair.isSensor) continue;
                                collision = pair.collision;
                                bodyA = collision.parentA;
                                bodyB = collision.parentB;
                                normal = collision.normal;
                                pair.separation = normal.x * (bodyB.positionImpulse.x + collision.penetration.x - bodyA.positionImpulse.x) + normal.y * (bodyB.positionImpulse.y + collision.penetration.y - bodyA.positionImpulse.y);
                            }
                            for (i = 0; i < pairsLength; i++) {
                                pair = pairs[i];
                                if (!pair.isActive || pair.isSensor) continue;
                                collision = pair.collision;
                                bodyA = collision.parentA;
                                bodyB = collision.parentB;
                                normal = collision.normal;
                                positionImpulse = pair.separation - pair.slop * slopDampen;
                                if (bodyA.isStatic || bodyB.isStatic) positionImpulse *= 2;
                                if (!(bodyA.isStatic || bodyA.isSleeping)) {
                                    contactShare = positionDampen / bodyA.totalContacts;
                                    bodyA.positionImpulse.x += normal.x * positionImpulse * contactShare;
                                    bodyA.positionImpulse.y += normal.y * positionImpulse * contactShare;
                                }
                                if (!(bodyB.isStatic || bodyB.isSleeping)) {
                                    contactShare = positionDampen / bodyB.totalContacts;
                                    bodyB.positionImpulse.x -= normal.x * positionImpulse * contactShare;
                                    bodyB.positionImpulse.y -= normal.y * positionImpulse * contactShare;
                                }
                            }
                        };
                        Resolver.postSolvePosition = function(bodies) {
                            var positionWarming = Resolver._positionWarming, bodiesLength = bodies.length, verticesTranslate = Vertices.translate, boundsUpdate = Bounds.update;
                            for (var i = 0; i < bodiesLength; i++) {
                                var body = bodies[i], positionImpulse = body.positionImpulse, positionImpulseX = positionImpulse.x, positionImpulseY = positionImpulse.y, velocity = body.velocity;
                                body.totalContacts = 0;
                                if (positionImpulseX !== 0 || positionImpulseY !== 0) {
                                    for (var j = 0; j < body.parts.length; j++) {
                                        var part = body.parts[j];
                                        verticesTranslate(part.vertices, positionImpulse);
                                        boundsUpdate(part.bounds, part.vertices, velocity);
                                        part.position.x += positionImpulseX;
                                        part.position.y += positionImpulseY;
                                    }
                                    body.positionPrev.x += positionImpulseX;
                                    body.positionPrev.y += positionImpulseY;
                                    if (positionImpulseX * velocity.x + positionImpulseY * velocity.y < 0) {
                                        positionImpulse.x = 0;
                                        positionImpulse.y = 0;
                                    } else {
                                        positionImpulse.x *= positionWarming;
                                        positionImpulse.y *= positionWarming;
                                    }
                                }
                            }
                        };
                        Resolver.preSolveVelocity = function(pairs) {
                            var i, j, pairsLength = pairs.length;
                            for (i = 0; i < pairsLength; i++) {
                                var pair = pairs[i];
                                if (!pair.isActive || pair.isSensor) continue;
                                var contacts = pair.activeContacts, contactsLength = contacts.length, collision = pair.collision, bodyA = collision.parentA, bodyB = collision.parentB, normal = collision.normal, tangent = collision.tangent;
                                for (j = 0; j < contactsLength; j++) {
                                    var contact = contacts[j], contactVertex = contact.vertex, normalImpulse = contact.normalImpulse, tangentImpulse = contact.tangentImpulse;
                                    if (normalImpulse !== 0 || tangentImpulse !== 0) {
                                        var impulseX = normal.x * normalImpulse + tangent.x * tangentImpulse, impulseY = normal.y * normalImpulse + tangent.y * tangentImpulse;
                                        if (!(bodyA.isStatic || bodyA.isSleeping)) {
                                            bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
                                            bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
                                            bodyA.anglePrev += bodyA.inverseInertia * ((contactVertex.x - bodyA.position.x) * impulseY - (contactVertex.y - bodyA.position.y) * impulseX);
                                        }
                                        if (!(bodyB.isStatic || bodyB.isSleeping)) {
                                            bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
                                            bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
                                            bodyB.anglePrev -= bodyB.inverseInertia * ((contactVertex.x - bodyB.position.x) * impulseY - (contactVertex.y - bodyB.position.y) * impulseX);
                                        }
                                    }
                                }
                            }
                        };
                        Resolver.solveVelocity = function(pairs, delta) {
                            var tangentImpulse, maxFriction, i, j, timeScale = delta / Common._baseDelta, timeScaleSquared = timeScale * timeScale, timeScaleCubed = timeScaleSquared * timeScale, restingThresh = -Resolver._restingThresh * timeScale, restingThreshTangent = Resolver._restingThreshTangent, frictionNormalMultiplier = Resolver._frictionNormalMultiplier * timeScale, frictionMaxStatic = Resolver._frictionMaxStatic, pairsLength = pairs.length;
                            for (i = 0; i < pairsLength; i++) {
                                var pair = pairs[i];
                                if (!pair.isActive || pair.isSensor) continue;
                                var collision = pair.collision, bodyA = collision.parentA, bodyB = collision.parentB, bodyAVelocity = bodyA.velocity, bodyBVelocity = bodyB.velocity, normalX = collision.normal.x, normalY = collision.normal.y, tangentX = collision.tangent.x, tangentY = collision.tangent.y, contacts = pair.activeContacts, contactsLength = contacts.length, contactShare = 1 / contactsLength, inverseMassTotal = bodyA.inverseMass + bodyB.inverseMass, friction = pair.friction * pair.frictionStatic * frictionNormalMultiplier;
                                bodyAVelocity.x = bodyA.position.x - bodyA.positionPrev.x;
                                bodyAVelocity.y = bodyA.position.y - bodyA.positionPrev.y;
                                bodyBVelocity.x = bodyB.position.x - bodyB.positionPrev.x;
                                bodyBVelocity.y = bodyB.position.y - bodyB.positionPrev.y;
                                bodyA.angularVelocity = bodyA.angle - bodyA.anglePrev;
                                bodyB.angularVelocity = bodyB.angle - bodyB.anglePrev;
                                for (j = 0; j < contactsLength; j++) {
                                    var contact = contacts[j], contactVertex = contact.vertex;
                                    var offsetAX = contactVertex.x - bodyA.position.x, offsetAY = contactVertex.y - bodyA.position.y, offsetBX = contactVertex.x - bodyB.position.x, offsetBY = contactVertex.y - bodyB.position.y;
                                    var velocityPointAX = bodyAVelocity.x - offsetAY * bodyA.angularVelocity, velocityPointAY = bodyAVelocity.y + offsetAX * bodyA.angularVelocity, velocityPointBX = bodyBVelocity.x - offsetBY * bodyB.angularVelocity, velocityPointBY = bodyBVelocity.y + offsetBX * bodyB.angularVelocity;
                                    var relativeVelocityX = velocityPointAX - velocityPointBX, relativeVelocityY = velocityPointAY - velocityPointBY;
                                    var normalVelocity = normalX * relativeVelocityX + normalY * relativeVelocityY, tangentVelocity = tangentX * relativeVelocityX + tangentY * relativeVelocityY;
                                    var normalOverlap = pair.separation + normalVelocity;
                                    var normalForce = Math.min(normalOverlap, 1);
                                    normalForce = normalOverlap < 0 ? 0 : normalForce;
                                    var frictionLimit = normalForce * friction;
                                    if (tangentVelocity < -frictionLimit || tangentVelocity > frictionLimit) {
                                        maxFriction = tangentVelocity > 0 ? tangentVelocity : -tangentVelocity;
                                        tangentImpulse = pair.friction * (tangentVelocity > 0 ? 1 : -1) * timeScaleCubed;
                                        if (tangentImpulse < -maxFriction) tangentImpulse = -maxFriction; else if (tangentImpulse > maxFriction) tangentImpulse = maxFriction;
                                    } else {
                                        tangentImpulse = tangentVelocity;
                                        maxFriction = frictionMaxStatic;
                                    }
                                    var oAcN = offsetAX * normalY - offsetAY * normalX, oBcN = offsetBX * normalY - offsetBY * normalX, share = contactShare / (inverseMassTotal + bodyA.inverseInertia * oAcN * oAcN + bodyB.inverseInertia * oBcN * oBcN);
                                    var normalImpulse = (1 + pair.restitution) * normalVelocity * share;
                                    tangentImpulse *= share;
                                    if (normalVelocity < restingThresh) contact.normalImpulse = 0; else {
                                        var contactNormalImpulse = contact.normalImpulse;
                                        contact.normalImpulse += normalImpulse;
                                        if (contact.normalImpulse > 0) contact.normalImpulse = 0;
                                        normalImpulse = contact.normalImpulse - contactNormalImpulse;
                                    }
                                    if (tangentVelocity < -restingThreshTangent || tangentVelocity > restingThreshTangent) contact.tangentImpulse = 0; else {
                                        var contactTangentImpulse = contact.tangentImpulse;
                                        contact.tangentImpulse += tangentImpulse;
                                        if (contact.tangentImpulse < -maxFriction) contact.tangentImpulse = -maxFriction;
                                        if (contact.tangentImpulse > maxFriction) contact.tangentImpulse = maxFriction;
                                        tangentImpulse = contact.tangentImpulse - contactTangentImpulse;
                                    }
                                    var impulseX = normalX * normalImpulse + tangentX * tangentImpulse, impulseY = normalY * normalImpulse + tangentY * tangentImpulse;
                                    if (!(bodyA.isStatic || bodyA.isSleeping)) {
                                        bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
                                        bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
                                        bodyA.anglePrev += (offsetAX * impulseY - offsetAY * impulseX) * bodyA.inverseInertia;
                                    }
                                    if (!(bodyB.isStatic || bodyB.isSleeping)) {
                                        bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
                                        bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
                                        bodyB.anglePrev -= (offsetBX * impulseY - offsetBY * impulseX) * bodyB.inverseInertia;
                                    }
                                }
                            }
                        };
                    })();
                }, function(module, exports, __nested_webpack_require_238208__) {
                    var Pairs = {};
                    module.exports = Pairs;
                    var Pair = __nested_webpack_require_238208__(9);
                    var Common = __nested_webpack_require_238208__(0);
                    (function() {
                        Pairs.create = function(options) {
                            return Common.extend({
                                table: {},
                                list: [],
                                collisionStart: [],
                                collisionActive: [],
                                collisionEnd: []
                            }, options);
                        };
                        Pairs.update = function(pairs, collisions, timestamp) {
                            var collision, pairIndex, pair, i, pairsList = pairs.list, pairsListLength = pairsList.length, pairsTable = pairs.table, collisionsLength = collisions.length, collisionStart = pairs.collisionStart, collisionEnd = pairs.collisionEnd, collisionActive = pairs.collisionActive;
                            collisionStart.length = 0;
                            collisionEnd.length = 0;
                            collisionActive.length = 0;
                            for (i = 0; i < pairsListLength; i++) pairsList[i].confirmedActive = false;
                            for (i = 0; i < collisionsLength; i++) {
                                collision = collisions[i];
                                pair = collision.pair;
                                if (pair) {
                                    if (pair.isActive) collisionActive.push(pair); else collisionStart.push(pair);
                                    Pair.update(pair, collision, timestamp);
                                    pair.confirmedActive = true;
                                } else {
                                    pair = Pair.create(collision, timestamp);
                                    pairsTable[pair.id] = pair;
                                    collisionStart.push(pair);
                                    pairsList.push(pair);
                                }
                            }
                            var removePairIndex = [];
                            pairsListLength = pairsList.length;
                            for (i = 0; i < pairsListLength; i++) {
                                pair = pairsList[i];
                                if (!pair.confirmedActive) {
                                    Pair.setActive(pair, false, timestamp);
                                    collisionEnd.push(pair);
                                    if (!pair.collision.bodyA.isSleeping && !pair.collision.bodyB.isSleeping) removePairIndex.push(i);
                                }
                            }
                            for (i = 0; i < removePairIndex.length; i++) {
                                pairIndex = removePairIndex[i] - i;
                                pair = pairsList[pairIndex];
                                pairsList.splice(pairIndex, 1);
                                delete pairsTable[pair.id];
                            }
                        };
                        Pairs.clear = function(pairs) {
                            pairs.table = {};
                            pairs.list.length = 0;
                            pairs.collisionStart.length = 0;
                            pairs.collisionActive.length = 0;
                            pairs.collisionEnd.length = 0;
                            return pairs;
                        };
                    })();
                }, function(module, exports, __nested_webpack_require_242061__) {
                    var Matter = module.exports = __nested_webpack_require_242061__(21);
                    Matter.Axes = __nested_webpack_require_242061__(11);
                    Matter.Bodies = __nested_webpack_require_242061__(12);
                    Matter.Body = __nested_webpack_require_242061__(4);
                    Matter.Bounds = __nested_webpack_require_242061__(1);
                    Matter.Collision = __nested_webpack_require_242061__(8);
                    Matter.Common = __nested_webpack_require_242061__(0);
                    Matter.Composite = __nested_webpack_require_242061__(6);
                    Matter.Composites = __nested_webpack_require_242061__(22);
                    Matter.Constraint = __nested_webpack_require_242061__(10);
                    Matter.Contact = __nested_webpack_require_242061__(16);
                    Matter.Detector = __nested_webpack_require_242061__(13);
                    Matter.Engine = __nested_webpack_require_242061__(17);
                    Matter.Events = __nested_webpack_require_242061__(5);
                    Matter.Grid = __nested_webpack_require_242061__(23);
                    Matter.Mouse = __nested_webpack_require_242061__(14);
                    Matter.MouseConstraint = __nested_webpack_require_242061__(24);
                    Matter.Pair = __nested_webpack_require_242061__(9);
                    Matter.Pairs = __nested_webpack_require_242061__(19);
                    Matter.Plugin = __nested_webpack_require_242061__(15);
                    Matter.Query = __nested_webpack_require_242061__(25);
                    Matter.Render = __nested_webpack_require_242061__(26);
                    Matter.Resolver = __nested_webpack_require_242061__(18);
                    Matter.Runner = __nested_webpack_require_242061__(27);
                    Matter.SAT = __nested_webpack_require_242061__(28);
                    Matter.Sleeping = __nested_webpack_require_242061__(7);
                    Matter.Svg = __nested_webpack_require_242061__(29);
                    Matter.Vector = __nested_webpack_require_242061__(2);
                    Matter.Vertices = __nested_webpack_require_242061__(3);
                    Matter.World = __nested_webpack_require_242061__(30);
                    Matter.Engine.run = Matter.Runner.run;
                    Matter.Common.deprecated(Matter.Engine, "run", "Engine.run ➤ use Matter.Runner.run(engine) instead");
                }, function(module, exports, __nested_webpack_require_243597__) {
                    var Matter = {};
                    module.exports = Matter;
                    var Plugin = __nested_webpack_require_243597__(15);
                    var Common = __nested_webpack_require_243597__(0);
                    (function() {
                        Matter.name = "matter-js";
                        Matter.version = true ? "0.19.0" : 0;
                        Matter.uses = [];
                        Matter.used = [];
                        Matter.use = function() {
                            Plugin.use(Matter, Array.prototype.slice.call(arguments));
                        };
                        Matter.before = function(path, func) {
                            path = path.replace(/^Matter./, "");
                            return Common.chainPathBefore(Matter, path, func);
                        };
                        Matter.after = function(path, func) {
                            path = path.replace(/^Matter./, "");
                            return Common.chainPathAfter(Matter, path, func);
                        };
                    })();
                }, function(module, exports, __nested_webpack_require_246505__) {
                    var Composites = {};
                    module.exports = Composites;
                    var Composite = __nested_webpack_require_246505__(6);
                    var Constraint = __nested_webpack_require_246505__(10);
                    var Common = __nested_webpack_require_246505__(0);
                    var Body = __nested_webpack_require_246505__(4);
                    var Bodies = __nested_webpack_require_246505__(12);
                    var deprecated = Common.deprecated;
                    (function() {
                        Composites.stack = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
                            var lastBody, stack = Composite.create({
                                label: "Stack"
                            }), x = xx, y = yy, i = 0;
                            for (var row = 0; row < rows; row++) {
                                var maxHeight = 0;
                                for (var column = 0; column < columns; column++) {
                                    var body = callback(x, y, column, row, lastBody, i);
                                    if (body) {
                                        var bodyHeight = body.bounds.max.y - body.bounds.min.y, bodyWidth = body.bounds.max.x - body.bounds.min.x;
                                        if (bodyHeight > maxHeight) maxHeight = bodyHeight;
                                        Body.translate(body, {
                                            x: bodyWidth * .5,
                                            y: bodyHeight * .5
                                        });
                                        x = body.bounds.max.x + columnGap;
                                        Composite.addBody(stack, body);
                                        lastBody = body;
                                        i += 1;
                                    } else x += columnGap;
                                }
                                y += maxHeight + rowGap;
                                x = xx;
                            }
                            return stack;
                        };
                        Composites.chain = function(composite, xOffsetA, yOffsetA, xOffsetB, yOffsetB, options) {
                            var bodies = composite.bodies;
                            for (var i = 1; i < bodies.length; i++) {
                                var bodyA = bodies[i - 1], bodyB = bodies[i], bodyAHeight = bodyA.bounds.max.y - bodyA.bounds.min.y, bodyAWidth = bodyA.bounds.max.x - bodyA.bounds.min.x, bodyBHeight = bodyB.bounds.max.y - bodyB.bounds.min.y, bodyBWidth = bodyB.bounds.max.x - bodyB.bounds.min.x;
                                var defaults = {
                                    bodyA,
                                    pointA: {
                                        x: bodyAWidth * xOffsetA,
                                        y: bodyAHeight * yOffsetA
                                    },
                                    bodyB,
                                    pointB: {
                                        x: bodyBWidth * xOffsetB,
                                        y: bodyBHeight * yOffsetB
                                    }
                                };
                                var constraint = Common.extend(defaults, options);
                                Composite.addConstraint(composite, Constraint.create(constraint));
                            }
                            composite.label += " Chain";
                            return composite;
                        };
                        Composites.mesh = function(composite, columns, rows, crossBrace, options) {
                            var row, col, bodyA, bodyB, bodyC, bodies = composite.bodies;
                            for (row = 0; row < rows; row++) {
                                for (col = 1; col < columns; col++) {
                                    bodyA = bodies[col - 1 + row * columns];
                                    bodyB = bodies[col + row * columns];
                                    Composite.addConstraint(composite, Constraint.create(Common.extend({
                                        bodyA,
                                        bodyB
                                    }, options)));
                                }
                                if (row > 0) for (col = 0; col < columns; col++) {
                                    bodyA = bodies[col + (row - 1) * columns];
                                    bodyB = bodies[col + row * columns];
                                    Composite.addConstraint(composite, Constraint.create(Common.extend({
                                        bodyA,
                                        bodyB
                                    }, options)));
                                    if (crossBrace && col > 0) {
                                        bodyC = bodies[col - 1 + (row - 1) * columns];
                                        Composite.addConstraint(composite, Constraint.create(Common.extend({
                                            bodyA: bodyC,
                                            bodyB
                                        }, options)));
                                    }
                                    if (crossBrace && col < columns - 1) {
                                        bodyC = bodies[col + 1 + (row - 1) * columns];
                                        Composite.addConstraint(composite, Constraint.create(Common.extend({
                                            bodyA: bodyC,
                                            bodyB
                                        }, options)));
                                    }
                                }
                            }
                            composite.label += " Mesh";
                            return composite;
                        };
                        Composites.pyramid = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
                            return Composites.stack(xx, yy, columns, rows, columnGap, rowGap, (function(x, y, column, row, lastBody, i) {
                                var actualRows = Math.min(rows, Math.ceil(columns / 2)), lastBodyWidth = lastBody ? lastBody.bounds.max.x - lastBody.bounds.min.x : 0;
                                if (row > actualRows) return;
                                row = actualRows - row;
                                var start = row, end = columns - 1 - row;
                                if (column < start || column > end) return;
                                if (i === 1) Body.translate(lastBody, {
                                    x: (column + (columns % 2 === 1 ? 1 : -1)) * lastBodyWidth,
                                    y: 0
                                });
                                var xOffset = lastBody ? column * lastBodyWidth : 0;
                                return callback(xx + xOffset + column * columnGap, y, column, row, lastBody, i);
                            }));
                        };
                        Composites.newtonsCradle = function(xx, yy, number, size, length) {
                            var newtonsCradle = Composite.create({
                                label: "Newtons Cradle"
                            });
                            for (var i = 0; i < number; i++) {
                                var separation = 1.9, circle = Bodies.circle(xx + i * (size * separation), yy + length, size, {
                                    inertia: 1 / 0,
                                    restitution: 1,
                                    friction: 0,
                                    frictionAir: 1e-4,
                                    slop: 1
                                }), constraint = Constraint.create({
                                    pointA: {
                                        x: xx + i * (size * separation),
                                        y: yy
                                    },
                                    bodyB: circle
                                });
                                Composite.addBody(newtonsCradle, circle);
                                Composite.addConstraint(newtonsCradle, constraint);
                            }
                            return newtonsCradle;
                        };
                        deprecated(Composites, "newtonsCradle", "Composites.newtonsCradle ➤ moved to newtonsCradle example");
                        Composites.car = function(xx, yy, width, height, wheelSize) {
                            var group = Body.nextGroup(true), wheelBase = 20, wheelAOffset = -width * .5 + wheelBase, wheelBOffset = width * .5 - wheelBase, wheelYOffset = 0;
                            var car = Composite.create({
                                label: "Car"
                            }), body = Bodies.rectangle(xx, yy, width, height, {
                                collisionFilter: {
                                    group
                                },
                                chamfer: {
                                    radius: height * .5
                                },
                                density: 2e-4
                            });
                            var wheelA = Bodies.circle(xx + wheelAOffset, yy + wheelYOffset, wheelSize, {
                                collisionFilter: {
                                    group
                                },
                                friction: .8
                            });
                            var wheelB = Bodies.circle(xx + wheelBOffset, yy + wheelYOffset, wheelSize, {
                                collisionFilter: {
                                    group
                                },
                                friction: .8
                            });
                            var axelA = Constraint.create({
                                bodyB: body,
                                pointB: {
                                    x: wheelAOffset,
                                    y: wheelYOffset
                                },
                                bodyA: wheelA,
                                stiffness: 1,
                                length: 0
                            });
                            var axelB = Constraint.create({
                                bodyB: body,
                                pointB: {
                                    x: wheelBOffset,
                                    y: wheelYOffset
                                },
                                bodyA: wheelB,
                                stiffness: 1,
                                length: 0
                            });
                            Composite.addBody(car, body);
                            Composite.addBody(car, wheelA);
                            Composite.addBody(car, wheelB);
                            Composite.addConstraint(car, axelA);
                            Composite.addConstraint(car, axelB);
                            return car;
                        };
                        deprecated(Composites, "car", "Composites.car ➤ moved to car example");
                        Composites.softBody = function(xx, yy, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions) {
                            particleOptions = Common.extend({
                                inertia: 1 / 0
                            }, particleOptions);
                            constraintOptions = Common.extend({
                                stiffness: .2,
                                render: {
                                    type: "line",
                                    anchors: false
                                }
                            }, constraintOptions);
                            var softBody = Composites.stack(xx, yy, columns, rows, columnGap, rowGap, (function(x, y) {
                                return Bodies.circle(x, y, particleRadius, particleOptions);
                            }));
                            Composites.mesh(softBody, columns, rows, crossBrace, constraintOptions);
                            softBody.label = "Soft Body";
                            return softBody;
                        };
                        deprecated(Composites, "softBody", "Composites.softBody ➤ moved to softBody and cloth examples");
                    })();
                }, function(module, exports, __nested_webpack_require_259115__) {
                    var Grid = {};
                    module.exports = Grid;
                    var Pair = __nested_webpack_require_259115__(9);
                    var Common = __nested_webpack_require_259115__(0);
                    var deprecated = Common.deprecated;
                    (function() {
                        Grid.create = function(options) {
                            var defaults = {
                                buckets: {},
                                pairs: {},
                                pairsList: [],
                                bucketWidth: 48,
                                bucketHeight: 48
                            };
                            return Common.extend(defaults, options);
                        };
                        Grid.update = function(grid, bodies, engine, forceUpdate) {
                            var i, col, row, bucket, bucketId, world = engine.world, buckets = grid.buckets, gridChanged = false;
                            for (i = 0; i < bodies.length; i++) {
                                var body = bodies[i];
                                if (body.isSleeping && !forceUpdate) continue;
                                if (world.bounds && (body.bounds.max.x < world.bounds.min.x || body.bounds.min.x > world.bounds.max.x || body.bounds.max.y < world.bounds.min.y || body.bounds.min.y > world.bounds.max.y)) continue;
                                var newRegion = Grid._getRegion(grid, body);
                                if (!body.region || newRegion.id !== body.region.id || forceUpdate) {
                                    if (!body.region || forceUpdate) body.region = newRegion;
                                    var union = Grid._regionUnion(newRegion, body.region);
                                    for (col = union.startCol; col <= union.endCol; col++) for (row = union.startRow; row <= union.endRow; row++) {
                                        bucketId = Grid._getBucketId(col, row);
                                        bucket = buckets[bucketId];
                                        var isInsideNewRegion = col >= newRegion.startCol && col <= newRegion.endCol && row >= newRegion.startRow && row <= newRegion.endRow;
                                        var isInsideOldRegion = col >= body.region.startCol && col <= body.region.endCol && row >= body.region.startRow && row <= body.region.endRow;
                                        if (!isInsideNewRegion && isInsideOldRegion) if (isInsideOldRegion) if (bucket) Grid._bucketRemoveBody(grid, bucket, body);
                                        if (body.region === newRegion || isInsideNewRegion && !isInsideOldRegion || forceUpdate) {
                                            if (!bucket) bucket = Grid._createBucket(buckets, bucketId);
                                            Grid._bucketAddBody(grid, bucket, body);
                                        }
                                    }
                                    body.region = newRegion;
                                    gridChanged = true;
                                }
                            }
                            if (gridChanged) grid.pairsList = Grid._createActivePairsList(grid);
                        };
                        deprecated(Grid, "update", "Grid.update ➤ replaced by Matter.Detector");
                        Grid.clear = function(grid) {
                            grid.buckets = {};
                            grid.pairs = {};
                            grid.pairsList = [];
                        };
                        deprecated(Grid, "clear", "Grid.clear ➤ replaced by Matter.Detector");
                        Grid._regionUnion = function(regionA, regionB) {
                            var startCol = Math.min(regionA.startCol, regionB.startCol), endCol = Math.max(regionA.endCol, regionB.endCol), startRow = Math.min(regionA.startRow, regionB.startRow), endRow = Math.max(regionA.endRow, regionB.endRow);
                            return Grid._createRegion(startCol, endCol, startRow, endRow);
                        };
                        Grid._getRegion = function(grid, body) {
                            var bounds = body.bounds, startCol = Math.floor(bounds.min.x / grid.bucketWidth), endCol = Math.floor(bounds.max.x / grid.bucketWidth), startRow = Math.floor(bounds.min.y / grid.bucketHeight), endRow = Math.floor(bounds.max.y / grid.bucketHeight);
                            return Grid._createRegion(startCol, endCol, startRow, endRow);
                        };
                        Grid._createRegion = function(startCol, endCol, startRow, endRow) {
                            return {
                                id: startCol + "," + endCol + "," + startRow + "," + endRow,
                                startCol,
                                endCol,
                                startRow,
                                endRow
                            };
                        };
                        Grid._getBucketId = function(column, row) {
                            return "C" + column + "R" + row;
                        };
                        Grid._createBucket = function(buckets, bucketId) {
                            var bucket = buckets[bucketId] = [];
                            return bucket;
                        };
                        Grid._bucketAddBody = function(grid, bucket, body) {
                            var i, gridPairs = grid.pairs, pairId = Pair.id, bucketLength = bucket.length;
                            for (i = 0; i < bucketLength; i++) {
                                var bodyB = bucket[i];
                                if (body.id === bodyB.id || body.isStatic && bodyB.isStatic) continue;
                                var id = pairId(body, bodyB), pair = gridPairs[id];
                                if (pair) pair[2] += 1; else gridPairs[id] = [ body, bodyB, 1 ];
                            }
                            bucket.push(body);
                        };
                        Grid._bucketRemoveBody = function(grid, bucket, body) {
                            var i, gridPairs = grid.pairs, pairId = Pair.id;
                            bucket.splice(Common.indexOf(bucket, body), 1);
                            var bucketLength = bucket.length;
                            for (i = 0; i < bucketLength; i++) {
                                var pair = gridPairs[pairId(body, bucket[i])];
                                if (pair) pair[2] -= 1;
                            }
                        };
                        Grid._createActivePairsList = function(grid) {
                            var pair, k, gridPairs = grid.pairs, pairKeys = Common.keys(gridPairs), pairKeysLength = pairKeys.length, pairs = [];
                            for (k = 0; k < pairKeysLength; k++) {
                                pair = gridPairs[pairKeys[k]];
                                if (pair[2] > 0) pairs.push(pair); else delete gridPairs[pairKeys[k]];
                            }
                            return pairs;
                        };
                    })();
                }, function(module, exports, __nested_webpack_require_269445__) {
                    var MouseConstraint = {};
                    module.exports = MouseConstraint;
                    var Vertices = __nested_webpack_require_269445__(3);
                    var Sleeping = __nested_webpack_require_269445__(7);
                    var Mouse = __nested_webpack_require_269445__(14);
                    var Events = __nested_webpack_require_269445__(5);
                    var Detector = __nested_webpack_require_269445__(13);
                    var Constraint = __nested_webpack_require_269445__(10);
                    var Composite = __nested_webpack_require_269445__(6);
                    var Common = __nested_webpack_require_269445__(0);
                    var Bounds = __nested_webpack_require_269445__(1);
                    (function() {
                        MouseConstraint.create = function(engine, options) {
                            var mouse = (engine ? engine.mouse : null) || (options ? options.mouse : null);
                            if (!mouse) if (engine && engine.render && engine.render.canvas) mouse = Mouse.create(engine.render.canvas); else if (options && options.element) mouse = Mouse.create(options.element); else {
                                mouse = Mouse.create();
                                Common.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected");
                            }
                            var constraint = Constraint.create({
                                label: "Mouse Constraint",
                                pointA: mouse.position,
                                pointB: {
                                    x: 0,
                                    y: 0
                                },
                                length: .01,
                                stiffness: .1,
                                angularStiffness: 1,
                                render: {
                                    strokeStyle: "#90EE90",
                                    lineWidth: 3
                                }
                            });
                            var defaults = {
                                type: "mouseConstraint",
                                mouse,
                                element: null,
                                body: null,
                                constraint,
                                collisionFilter: {
                                    category: 1,
                                    mask: 4294967295,
                                    group: 0
                                }
                            };
                            var mouseConstraint = Common.extend(defaults, options);
                            Events.on(engine, "beforeUpdate", (function() {
                                var allBodies = Composite.allBodies(engine.world);
                                MouseConstraint.update(mouseConstraint, allBodies);
                                MouseConstraint._triggerEvents(mouseConstraint);
                            }));
                            return mouseConstraint;
                        };
                        MouseConstraint.update = function(mouseConstraint, bodies) {
                            var mouse = mouseConstraint.mouse, constraint = mouseConstraint.constraint, body = mouseConstraint.body;
                            if (mouse.button === 0) if (!constraint.bodyB) for (var i = 0; i < bodies.length; i++) {
                                body = bodies[i];
                                if (Bounds.contains(body.bounds, mouse.position) && Detector.canCollide(body.collisionFilter, mouseConstraint.collisionFilter)) for (var j = body.parts.length > 1 ? 1 : 0; j < body.parts.length; j++) {
                                    var part = body.parts[j];
                                    if (Vertices.contains(part.vertices, mouse.position)) {
                                        constraint.pointA = mouse.position;
                                        constraint.bodyB = mouseConstraint.body = body;
                                        constraint.pointB = {
                                            x: mouse.position.x - body.position.x,
                                            y: mouse.position.y - body.position.y
                                        };
                                        constraint.angleB = body.angle;
                                        Sleeping.set(body, false);
                                        Events.trigger(mouseConstraint, "startdrag", {
                                            mouse,
                                            body
                                        });
                                        break;
                                    }
                                }
                            } else {
                                Sleeping.set(constraint.bodyB, false);
                                constraint.pointA = mouse.position;
                            } else {
                                constraint.bodyB = mouseConstraint.body = null;
                                constraint.pointB = null;
                                if (body) Events.trigger(mouseConstraint, "enddrag", {
                                    mouse,
                                    body
                                });
                            }
                        };
                        MouseConstraint._triggerEvents = function(mouseConstraint) {
                            var mouse = mouseConstraint.mouse, mouseEvents = mouse.sourceEvents;
                            if (mouseEvents.mousemove) Events.trigger(mouseConstraint, "mousemove", {
                                mouse
                            });
                            if (mouseEvents.mousedown) Events.trigger(mouseConstraint, "mousedown", {
                                mouse
                            });
                            if (mouseEvents.mouseup) Events.trigger(mouseConstraint, "mouseup", {
                                mouse
                            });
                            Mouse.clearSourceEvents(mouse);
                        };
                    })();
                }, function(module, exports, __nested_webpack_require_277940__) {
                    var Query = {};
                    module.exports = Query;
                    var Vector = __nested_webpack_require_277940__(2);
                    var Collision = __nested_webpack_require_277940__(8);
                    var Bounds = __nested_webpack_require_277940__(1);
                    var Bodies = __nested_webpack_require_277940__(12);
                    var Vertices = __nested_webpack_require_277940__(3);
                    (function() {
                        Query.collides = function(body, bodies) {
                            var collisions = [], bodiesLength = bodies.length, bounds = body.bounds, collides = Collision.collides, overlaps = Bounds.overlaps;
                            for (var i = 0; i < bodiesLength; i++) {
                                var bodyA = bodies[i], partsALength = bodyA.parts.length, partsAStart = partsALength === 1 ? 0 : 1;
                                if (overlaps(bodyA.bounds, bounds)) for (var j = partsAStart; j < partsALength; j++) {
                                    var part = bodyA.parts[j];
                                    if (overlaps(part.bounds, bounds)) {
                                        var collision = collides(part, body);
                                        if (collision) {
                                            collisions.push(collision);
                                            break;
                                        }
                                    }
                                }
                            }
                            return collisions;
                        };
                        Query.ray = function(bodies, startPoint, endPoint, rayWidth) {
                            rayWidth = rayWidth || 1e-100;
                            var rayAngle = Vector.angle(startPoint, endPoint), rayLength = Vector.magnitude(Vector.sub(startPoint, endPoint)), rayX = (endPoint.x + startPoint.x) * .5, rayY = (endPoint.y + startPoint.y) * .5, ray = Bodies.rectangle(rayX, rayY, rayLength, rayWidth, {
                                angle: rayAngle
                            }), collisions = Query.collides(ray, bodies);
                            for (var i = 0; i < collisions.length; i += 1) {
                                var collision = collisions[i];
                                collision.body = collision.bodyB = collision.bodyA;
                            }
                            return collisions;
                        };
                        Query.region = function(bodies, bounds, outside) {
                            var result = [];
                            for (var i = 0; i < bodies.length; i++) {
                                var body = bodies[i], overlaps = Bounds.overlaps(body.bounds, bounds);
                                if (overlaps && !outside || !overlaps && outside) result.push(body);
                            }
                            return result;
                        };
                        Query.point = function(bodies, point) {
                            var result = [];
                            for (var i = 0; i < bodies.length; i++) {
                                var body = bodies[i];
                                if (Bounds.contains(body.bounds, point)) for (var j = body.parts.length === 1 ? 0 : 1; j < body.parts.length; j++) {
                                    var part = body.parts[j];
                                    if (Bounds.contains(part.bounds, point) && Vertices.contains(part.vertices, point)) {
                                        result.push(body);
                                        break;
                                    }
                                }
                            }
                            return result;
                        };
                    })();
                }, function(module, exports, __nested_webpack_require_282315__) {
                    var Render = {};
                    module.exports = Render;
                    var Body = __nested_webpack_require_282315__(4);
                    var Common = __nested_webpack_require_282315__(0);
                    var Composite = __nested_webpack_require_282315__(6);
                    var Bounds = __nested_webpack_require_282315__(1);
                    var Events = __nested_webpack_require_282315__(5);
                    var Vector = __nested_webpack_require_282315__(2);
                    var Mouse = __nested_webpack_require_282315__(14);
                    (function() {
                        var _requestAnimationFrame, _cancelAnimationFrame;
                        if (typeof window !== "undefined") {
                            _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
                                window.setTimeout((function() {
                                    callback(Common.now());
                                }), 1e3 / 60);
                            };
                            _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
                        }
                        Render._goodFps = 30;
                        Render._goodDelta = 1e3 / 60;
                        Render.create = function(options) {
                            var defaults = {
                                engine: null,
                                element: null,
                                canvas: null,
                                mouse: null,
                                frameRequestId: null,
                                timing: {
                                    historySize: 60,
                                    delta: 0,
                                    deltaHistory: [],
                                    lastTime: 0,
                                    lastTimestamp: 0,
                                    lastElapsed: 0,
                                    timestampElapsed: 0,
                                    timestampElapsedHistory: [],
                                    engineDeltaHistory: [],
                                    engineElapsedHistory: [],
                                    elapsedHistory: []
                                },
                                options: {
                                    width: 800,
                                    height: 600,
                                    pixelRatio: 1,
                                    background: "#14151f",
                                    wireframeBackground: "#14151f",
                                    hasBounds: !!options.bounds,
                                    enabled: true,
                                    wireframes: true,
                                    showSleeping: true,
                                    showDebug: false,
                                    showStats: false,
                                    showPerformance: false,
                                    showBounds: false,
                                    showVelocity: false,
                                    showCollisions: false,
                                    showSeparations: false,
                                    showAxes: false,
                                    showPositions: false,
                                    showAngleIndicator: false,
                                    showIds: false,
                                    showVertexNumbers: false,
                                    showConvexHulls: false,
                                    showInternalEdges: false,
                                    showMousePosition: false
                                }
                            };
                            var render = Common.extend(defaults, options);
                            if (render.canvas) {
                                render.canvas.width = render.options.width || render.canvas.width;
                                render.canvas.height = render.options.height || render.canvas.height;
                            }
                            render.mouse = options.mouse;
                            render.engine = options.engine;
                            render.canvas = render.canvas || _createCanvas(render.options.width, render.options.height);
                            render.context = render.canvas.getContext("2d");
                            render.textures = {};
                            render.bounds = render.bounds || {
                                min: {
                                    x: 0,
                                    y: 0
                                },
                                max: {
                                    x: render.canvas.width,
                                    y: render.canvas.height
                                }
                            };
                            render.controller = Render;
                            render.options.showBroadphase = false;
                            if (render.options.pixelRatio !== 1) Render.setPixelRatio(render, render.options.pixelRatio);
                            if (Common.isElement(render.element)) render.element.appendChild(render.canvas);
                            return render;
                        };
                        Render.run = function(render) {
                            (function loop(time) {
                                render.frameRequestId = _requestAnimationFrame(loop);
                                _updateTiming(render, time);
                                Render.world(render, time);
                                if (render.options.showStats || render.options.showDebug) Render.stats(render, render.context, time);
                                if (render.options.showPerformance || render.options.showDebug) Render.performance(render, render.context, time);
                            })();
                        };
                        Render.stop = function(render) {
                            _cancelAnimationFrame(render.frameRequestId);
                        };
                        Render.setPixelRatio = function(render, pixelRatio) {
                            var options = render.options, canvas = render.canvas;
                            if (pixelRatio === "auto") pixelRatio = _getPixelRatio(canvas);
                            options.pixelRatio = pixelRatio;
                            canvas.setAttribute("data-pixel-ratio", pixelRatio);
                            canvas.width = options.width * pixelRatio;
                            canvas.height = options.height * pixelRatio;
                            canvas.style.width = options.width + "px";
                            canvas.style.height = options.height + "px";
                        };
                        Render.lookAt = function(render, objects, padding, center) {
                            center = typeof center !== "undefined" ? center : true;
                            objects = Common.isArray(objects) ? objects : [ objects ];
                            padding = padding || {
                                x: 0,
                                y: 0
                            };
                            var bounds = {
                                min: {
                                    x: 1 / 0,
                                    y: 1 / 0
                                },
                                max: {
                                    x: -1 / 0,
                                    y: -1 / 0
                                }
                            };
                            for (var i = 0; i < objects.length; i += 1) {
                                var object = objects[i], min = object.bounds ? object.bounds.min : object.min || object.position || object, max = object.bounds ? object.bounds.max : object.max || object.position || object;
                                if (min && max) {
                                    if (min.x < bounds.min.x) bounds.min.x = min.x;
                                    if (max.x > bounds.max.x) bounds.max.x = max.x;
                                    if (min.y < bounds.min.y) bounds.min.y = min.y;
                                    if (max.y > bounds.max.y) bounds.max.y = max.y;
                                }
                            }
                            var width = bounds.max.x - bounds.min.x + 2 * padding.x, height = bounds.max.y - bounds.min.y + 2 * padding.y, viewHeight = render.canvas.height, viewWidth = render.canvas.width, outerRatio = viewWidth / viewHeight, innerRatio = width / height, scaleX = 1, scaleY = 1;
                            if (innerRatio > outerRatio) scaleY = innerRatio / outerRatio; else scaleX = outerRatio / innerRatio;
                            render.options.hasBounds = true;
                            render.bounds.min.x = bounds.min.x;
                            render.bounds.max.x = bounds.min.x + width * scaleX;
                            render.bounds.min.y = bounds.min.y;
                            render.bounds.max.y = bounds.min.y + height * scaleY;
                            if (center) {
                                render.bounds.min.x += width * .5 - width * scaleX * .5;
                                render.bounds.max.x += width * .5 - width * scaleX * .5;
                                render.bounds.min.y += height * .5 - height * scaleY * .5;
                                render.bounds.max.y += height * .5 - height * scaleY * .5;
                            }
                            render.bounds.min.x -= padding.x;
                            render.bounds.max.x -= padding.x;
                            render.bounds.min.y -= padding.y;
                            render.bounds.max.y -= padding.y;
                            if (render.mouse) {
                                Mouse.setScale(render.mouse, {
                                    x: (render.bounds.max.x - render.bounds.min.x) / render.canvas.width,
                                    y: (render.bounds.max.y - render.bounds.min.y) / render.canvas.height
                                });
                                Mouse.setOffset(render.mouse, render.bounds.min);
                            }
                        };
                        Render.startViewTransform = function(render) {
                            var boundsWidth = render.bounds.max.x - render.bounds.min.x, boundsHeight = render.bounds.max.y - render.bounds.min.y, boundsScaleX = boundsWidth / render.options.width, boundsScaleY = boundsHeight / render.options.height;
                            render.context.setTransform(render.options.pixelRatio / boundsScaleX, 0, 0, render.options.pixelRatio / boundsScaleY, 0, 0);
                            render.context.translate(-render.bounds.min.x, -render.bounds.min.y);
                        };
                        Render.endViewTransform = function(render) {
                            render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
                        };
                        Render.world = function(render, time) {
                            var startTime = Common.now(), engine = render.engine, world = engine.world, canvas = render.canvas, context = render.context, options = render.options, timing = render.timing;
                            var i, allBodies = Composite.allBodies(world), allConstraints = Composite.allConstraints(world), background = options.wireframes ? options.wireframeBackground : options.background, bodies = [], constraints = [];
                            var event = {
                                timestamp: engine.timing.timestamp
                            };
                            Events.trigger(render, "beforeRender", event);
                            if (render.currentBackground !== background) _applyBackground(render, background);
                            context.globalCompositeOperation = "source-in";
                            context.fillStyle = "transparent";
                            context.fillRect(0, 0, canvas.width, canvas.height);
                            context.globalCompositeOperation = "source-over";
                            if (options.hasBounds) {
                                for (i = 0; i < allBodies.length; i++) {
                                    var body = allBodies[i];
                                    if (Bounds.overlaps(body.bounds, render.bounds)) bodies.push(body);
                                }
                                for (i = 0; i < allConstraints.length; i++) {
                                    var constraint = allConstraints[i], bodyA = constraint.bodyA, bodyB = constraint.bodyB, pointAWorld = constraint.pointA, pointBWorld = constraint.pointB;
                                    if (bodyA) pointAWorld = Vector.add(bodyA.position, constraint.pointA);
                                    if (bodyB) pointBWorld = Vector.add(bodyB.position, constraint.pointB);
                                    if (!pointAWorld || !pointBWorld) continue;
                                    if (Bounds.contains(render.bounds, pointAWorld) || Bounds.contains(render.bounds, pointBWorld)) constraints.push(constraint);
                                }
                                Render.startViewTransform(render);
                                if (render.mouse) {
                                    Mouse.setScale(render.mouse, {
                                        x: (render.bounds.max.x - render.bounds.min.x) / render.options.width,
                                        y: (render.bounds.max.y - render.bounds.min.y) / render.options.height
                                    });
                                    Mouse.setOffset(render.mouse, render.bounds.min);
                                }
                            } else {
                                constraints = allConstraints;
                                bodies = allBodies;
                                if (render.options.pixelRatio !== 1) render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
                            }
                            if (!options.wireframes || engine.enableSleeping && options.showSleeping) Render.bodies(render, bodies, context); else {
                                if (options.showConvexHulls) Render.bodyConvexHulls(render, bodies, context);
                                Render.bodyWireframes(render, bodies, context);
                            }
                            if (options.showBounds) Render.bodyBounds(render, bodies, context);
                            if (options.showAxes || options.showAngleIndicator) Render.bodyAxes(render, bodies, context);
                            if (options.showPositions) Render.bodyPositions(render, bodies, context);
                            if (options.showVelocity) Render.bodyVelocity(render, bodies, context);
                            if (options.showIds) Render.bodyIds(render, bodies, context);
                            if (options.showSeparations) Render.separations(render, engine.pairs.list, context);
                            if (options.showCollisions) Render.collisions(render, engine.pairs.list, context);
                            if (options.showVertexNumbers) Render.vertexNumbers(render, bodies, context);
                            if (options.showMousePosition) Render.mousePosition(render, render.mouse, context);
                            Render.constraints(constraints, context);
                            if (options.hasBounds) Render.endViewTransform(render);
                            Events.trigger(render, "afterRender", event);
                            timing.lastElapsed = Common.now() - startTime;
                        };
                        Render.stats = function(render, context, time) {
                            var engine = render.engine, world = engine.world, bodies = Composite.allBodies(world), parts = 0, width = 55, height = 44, x = 0, y = 0;
                            for (var i = 0; i < bodies.length; i += 1) parts += bodies[i].parts.length;
                            var sections = {
                                Part: parts,
                                Body: bodies.length,
                                Cons: Composite.allConstraints(world).length,
                                Comp: Composite.allComposites(world).length,
                                Pair: engine.pairs.list.length
                            };
                            context.fillStyle = "#0e0f19";
                            context.fillRect(x, y, width * 5.5, height);
                            context.font = "12px Arial";
                            context.textBaseline = "top";
                            context.textAlign = "right";
                            for (var key in sections) {
                                var section = sections[key];
                                context.fillStyle = "#aaa";
                                context.fillText(key, x + width, y + 8);
                                context.fillStyle = "#eee";
                                context.fillText(section, x + width, y + 26);
                                x += width;
                            }
                        };
                        Render.performance = function(render, context) {
                            var engine = render.engine, timing = render.timing, deltaHistory = timing.deltaHistory, elapsedHistory = timing.elapsedHistory, timestampElapsedHistory = timing.timestampElapsedHistory, engineDeltaHistory = timing.engineDeltaHistory, engineElapsedHistory = timing.engineElapsedHistory, lastEngineDelta = engine.timing.lastDelta;
                            var deltaMean = _mean(deltaHistory), elapsedMean = _mean(elapsedHistory), engineDeltaMean = _mean(engineDeltaHistory), engineElapsedMean = _mean(engineElapsedHistory), timestampElapsedMean = _mean(timestampElapsedHistory), rateMean = timestampElapsedMean / deltaMean || 0, fps = 1e3 / deltaMean || 0;
                            var graphHeight = 4, gap = 12, width = 60, height = 34, x = 10, y = 69;
                            context.fillStyle = "#0e0f19";
                            context.fillRect(0, 50, gap * 4 + width * 5 + 22, height);
                            Render.status(context, x, y, width, graphHeight, deltaHistory.length, Math.round(fps) + " fps", fps / Render._goodFps, (function(i) {
                                return deltaHistory[i] / deltaMean - 1;
                            }));
                            Render.status(context, x + gap + width, y, width, graphHeight, engineDeltaHistory.length, lastEngineDelta.toFixed(2) + " dt", Render._goodDelta / lastEngineDelta, (function(i) {
                                return engineDeltaHistory[i] / engineDeltaMean - 1;
                            }));
                            Render.status(context, x + (gap + width) * 2, y, width, graphHeight, engineElapsedHistory.length, engineElapsedMean.toFixed(2) + " ut", 1 - engineElapsedMean / Render._goodFps, (function(i) {
                                return engineElapsedHistory[i] / engineElapsedMean - 1;
                            }));
                            Render.status(context, x + (gap + width) * 3, y, width, graphHeight, elapsedHistory.length, elapsedMean.toFixed(2) + " rt", 1 - elapsedMean / Render._goodFps, (function(i) {
                                return elapsedHistory[i] / elapsedMean - 1;
                            }));
                            Render.status(context, x + (gap + width) * 4, y, width, graphHeight, timestampElapsedHistory.length, rateMean.toFixed(2) + " x", rateMean * rateMean * rateMean, (function(i) {
                                return (timestampElapsedHistory[i] / deltaHistory[i] / rateMean || 0) - 1;
                            }));
                        };
                        Render.status = function(context, x, y, width, height, count, label, indicator, plotY) {
                            context.strokeStyle = "#888";
                            context.fillStyle = "#444";
                            context.lineWidth = 1;
                            context.fillRect(x, y + 7, width, 1);
                            context.beginPath();
                            context.moveTo(x, y + 7 - height * Common.clamp(.4 * plotY(0), -2, 2));
                            for (var i = 0; i < width; i += 1) context.lineTo(x + i, y + 7 - (i < count ? height * Common.clamp(.4 * plotY(i), -2, 2) : 0));
                            context.stroke();
                            context.fillStyle = "hsl(" + Common.clamp(25 + 95 * indicator, 0, 120) + ",100%,60%)";
                            context.fillRect(x, y - 7, 4, 4);
                            context.font = "12px Arial";
                            context.textBaseline = "middle";
                            context.textAlign = "right";
                            context.fillStyle = "#eee";
                            context.fillText(label, x + width, y - 5);
                        };
                        Render.constraints = function(constraints, context) {
                            var c = context;
                            for (var i = 0; i < constraints.length; i++) {
                                var constraint = constraints[i];
                                if (!constraint.render.visible || !constraint.pointA || !constraint.pointB) continue;
                                var start, end, bodyA = constraint.bodyA, bodyB = constraint.bodyB;
                                if (bodyA) start = Vector.add(bodyA.position, constraint.pointA); else start = constraint.pointA;
                                if (constraint.render.type === "pin") {
                                    c.beginPath();
                                    c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                                    c.closePath();
                                } else {
                                    if (bodyB) end = Vector.add(bodyB.position, constraint.pointB); else end = constraint.pointB;
                                    c.beginPath();
                                    c.moveTo(start.x, start.y);
                                    if (constraint.render.type === "spring") {
                                        var offset, delta = Vector.sub(end, start), normal = Vector.perp(Vector.normalise(delta)), coils = Math.ceil(Common.clamp(constraint.length / 5, 12, 20));
                                        for (var j = 1; j < coils; j += 1) {
                                            offset = j % 2 === 0 ? 1 : -1;
                                            c.lineTo(start.x + delta.x * (j / coils) + normal.x * offset * 4, start.y + delta.y * (j / coils) + normal.y * offset * 4);
                                        }
                                    }
                                    c.lineTo(end.x, end.y);
                                }
                                if (constraint.render.lineWidth) {
                                    c.lineWidth = constraint.render.lineWidth;
                                    c.strokeStyle = constraint.render.strokeStyle;
                                    c.stroke();
                                }
                                if (constraint.render.anchors) {
                                    c.fillStyle = constraint.render.strokeStyle;
                                    c.beginPath();
                                    c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                                    c.arc(end.x, end.y, 3, 0, 2 * Math.PI);
                                    c.closePath();
                                    c.fill();
                                }
                            }
                        };
                        Render.bodies = function(render, bodies, context) {
                            var body, part, i, k, c = context, options = (render.engine, render.options), showInternalEdges = options.showInternalEdges || !options.wireframes;
                            for (i = 0; i < bodies.length; i++) {
                                body = bodies[i];
                                if (!body.render.visible) continue;
                                for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
                                    part = body.parts[k];
                                    if (!part.render.visible) continue;
                                    if (options.showSleeping && body.isSleeping) c.globalAlpha = .5 * part.render.opacity; else if (part.render.opacity !== 1) c.globalAlpha = part.render.opacity;
                                    if (part.render.sprite && part.render.sprite.texture && !options.wireframes) {
                                        var sprite = part.render.sprite, texture = _getTexture(render, sprite.texture);
                                        c.translate(part.position.x, part.position.y);
                                        c.rotate(part.angle);
                                        c.drawImage(texture, texture.width * -sprite.xOffset * sprite.xScale, texture.height * -sprite.yOffset * sprite.yScale, texture.width * sprite.xScale, texture.height * sprite.yScale);
                                        c.rotate(-part.angle);
                                        c.translate(-part.position.x, -part.position.y);
                                    } else {
                                        if (part.circleRadius) {
                                            c.beginPath();
                                            c.arc(part.position.x, part.position.y, part.circleRadius, 0, 2 * Math.PI);
                                        } else {
                                            c.beginPath();
                                            c.moveTo(part.vertices[0].x, part.vertices[0].y);
                                            for (var j = 1; j < part.vertices.length; j++) {
                                                if (!part.vertices[j - 1].isInternal || showInternalEdges) c.lineTo(part.vertices[j].x, part.vertices[j].y); else c.moveTo(part.vertices[j].x, part.vertices[j].y);
                                                if (part.vertices[j].isInternal && !showInternalEdges) c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                                            }
                                            c.lineTo(part.vertices[0].x, part.vertices[0].y);
                                            c.closePath();
                                        }
                                        if (!options.wireframes) {
                                            c.fillStyle = part.render.fillStyle;
                                            if (part.render.lineWidth) {
                                                c.lineWidth = part.render.lineWidth;
                                                c.strokeStyle = part.render.strokeStyle;
                                                c.stroke();
                                            }
                                            c.fill();
                                        } else {
                                            c.lineWidth = 1;
                                            c.strokeStyle = "#bbb";
                                            c.stroke();
                                        }
                                    }
                                    c.globalAlpha = 1;
                                }
                            }
                        };
                        Render.bodyWireframes = function(render, bodies, context) {
                            var body, part, i, j, k, c = context, showInternalEdges = render.options.showInternalEdges;
                            c.beginPath();
                            for (i = 0; i < bodies.length; i++) {
                                body = bodies[i];
                                if (!body.render.visible) continue;
                                for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
                                    part = body.parts[k];
                                    c.moveTo(part.vertices[0].x, part.vertices[0].y);
                                    for (j = 1; j < part.vertices.length; j++) {
                                        if (!part.vertices[j - 1].isInternal || showInternalEdges) c.lineTo(part.vertices[j].x, part.vertices[j].y); else c.moveTo(part.vertices[j].x, part.vertices[j].y);
                                        if (part.vertices[j].isInternal && !showInternalEdges) c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                                    }
                                    c.lineTo(part.vertices[0].x, part.vertices[0].y);
                                }
                            }
                            c.lineWidth = 1;
                            c.strokeStyle = "#bbb";
                            c.stroke();
                        };
                        Render.bodyConvexHulls = function(render, bodies, context) {
                            var body, i, j, c = context;
                            c.beginPath();
                            for (i = 0; i < bodies.length; i++) {
                                body = bodies[i];
                                if (!body.render.visible || body.parts.length === 1) continue;
                                c.moveTo(body.vertices[0].x, body.vertices[0].y);
                                for (j = 1; j < body.vertices.length; j++) c.lineTo(body.vertices[j].x, body.vertices[j].y);
                                c.lineTo(body.vertices[0].x, body.vertices[0].y);
                            }
                            c.lineWidth = 1;
                            c.strokeStyle = "rgba(255,255,255,0.2)";
                            c.stroke();
                        };
                        Render.vertexNumbers = function(render, bodies, context) {
                            var i, j, k, c = context;
                            for (i = 0; i < bodies.length; i++) {
                                var parts = bodies[i].parts;
                                for (k = parts.length > 1 ? 1 : 0; k < parts.length; k++) {
                                    var part = parts[k];
                                    for (j = 0; j < part.vertices.length; j++) {
                                        c.fillStyle = "rgba(255,255,255,0.2)";
                                        c.fillText(i + "_" + j, part.position.x + (part.vertices[j].x - part.position.x) * .8, part.position.y + (part.vertices[j].y - part.position.y) * .8);
                                    }
                                }
                            }
                        };
                        Render.mousePosition = function(render, mouse, context) {
                            var c = context;
                            c.fillStyle = "rgba(255,255,255,0.8)";
                            c.fillText(mouse.position.x + "  " + mouse.position.y, mouse.position.x + 5, mouse.position.y - 5);
                        };
                        Render.bodyBounds = function(render, bodies, context) {
                            var c = context, options = (render.engine, render.options);
                            c.beginPath();
                            for (var i = 0; i < bodies.length; i++) {
                                var body = bodies[i];
                                if (body.render.visible) {
                                    var parts = bodies[i].parts;
                                    for (var j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                                        var part = parts[j];
                                        c.rect(part.bounds.min.x, part.bounds.min.y, part.bounds.max.x - part.bounds.min.x, part.bounds.max.y - part.bounds.min.y);
                                    }
                                }
                            }
                            if (options.wireframes) c.strokeStyle = "rgba(255,255,255,0.08)"; else c.strokeStyle = "rgba(0,0,0,0.1)";
                            c.lineWidth = 1;
                            c.stroke();
                        };
                        Render.bodyAxes = function(render, bodies, context) {
                            var part, i, j, k, c = context, options = (render.engine, render.options);
                            c.beginPath();
                            for (i = 0; i < bodies.length; i++) {
                                var body = bodies[i], parts = body.parts;
                                if (!body.render.visible) continue;
                                if (options.showAxes) for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                                    part = parts[j];
                                    for (k = 0; k < part.axes.length; k++) {
                                        var axis = part.axes[k];
                                        c.moveTo(part.position.x, part.position.y);
                                        c.lineTo(part.position.x + axis.x * 20, part.position.y + axis.y * 20);
                                    }
                                } else for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                                    part = parts[j];
                                    for (k = 0; k < part.axes.length; k++) {
                                        c.moveTo(part.position.x, part.position.y);
                                        c.lineTo((part.vertices[0].x + part.vertices[part.vertices.length - 1].x) / 2, (part.vertices[0].y + part.vertices[part.vertices.length - 1].y) / 2);
                                    }
                                }
                            }
                            if (options.wireframes) {
                                c.strokeStyle = "indianred";
                                c.lineWidth = 1;
                            } else {
                                c.strokeStyle = "rgba(255, 255, 255, 0.4)";
                                c.globalCompositeOperation = "overlay";
                                c.lineWidth = 2;
                            }
                            c.stroke();
                            c.globalCompositeOperation = "source-over";
                        };
                        Render.bodyPositions = function(render, bodies, context) {
                            var body, part, i, k, c = context, options = (render.engine, render.options);
                            c.beginPath();
                            for (i = 0; i < bodies.length; i++) {
                                body = bodies[i];
                                if (!body.render.visible) continue;
                                for (k = 0; k < body.parts.length; k++) {
                                    part = body.parts[k];
                                    c.arc(part.position.x, part.position.y, 3, 0, 2 * Math.PI, false);
                                    c.closePath();
                                }
                            }
                            if (options.wireframes) c.fillStyle = "indianred"; else c.fillStyle = "rgba(0,0,0,0.5)";
                            c.fill();
                            c.beginPath();
                            for (i = 0; i < bodies.length; i++) {
                                body = bodies[i];
                                if (body.render.visible) {
                                    c.arc(body.positionPrev.x, body.positionPrev.y, 2, 0, 2 * Math.PI, false);
                                    c.closePath();
                                }
                            }
                            c.fillStyle = "rgba(255,165,0,0.8)";
                            c.fill();
                        };
                        Render.bodyVelocity = function(render, bodies, context) {
                            var c = context;
                            c.beginPath();
                            for (var i = 0; i < bodies.length; i++) {
                                var body = bodies[i];
                                if (!body.render.visible) continue;
                                var velocity = Body.getVelocity(body);
                                c.moveTo(body.position.x, body.position.y);
                                c.lineTo(body.position.x + velocity.x, body.position.y + velocity.y);
                            }
                            c.lineWidth = 3;
                            c.strokeStyle = "cornflowerblue";
                            c.stroke();
                        };
                        Render.bodyIds = function(render, bodies, context) {
                            var i, j, c = context;
                            for (i = 0; i < bodies.length; i++) {
                                if (!bodies[i].render.visible) continue;
                                var parts = bodies[i].parts;
                                for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                                    var part = parts[j];
                                    c.font = "12px Arial";
                                    c.fillStyle = "rgba(255,255,255,0.5)";
                                    c.fillText(part.id, part.position.x + 10, part.position.y - 10);
                                }
                            }
                        };
                        Render.collisions = function(render, pairs, context) {
                            var pair, collision, i, j, c = context, options = render.options;
                            c.beginPath();
                            for (i = 0; i < pairs.length; i++) {
                                pair = pairs[i];
                                if (!pair.isActive) continue;
                                collision = pair.collision;
                                for (j = 0; j < pair.activeContacts.length; j++) {
                                    var contact = pair.activeContacts[j], vertex = contact.vertex;
                                    c.rect(vertex.x - 1.5, vertex.y - 1.5, 3.5, 3.5);
                                }
                            }
                            if (options.wireframes) c.fillStyle = "rgba(255,255,255,0.7)"; else c.fillStyle = "orange";
                            c.fill();
                            c.beginPath();
                            for (i = 0; i < pairs.length; i++) {
                                pair = pairs[i];
                                if (!pair.isActive) continue;
                                collision = pair.collision;
                                if (pair.activeContacts.length > 0) {
                                    var normalPosX = pair.activeContacts[0].vertex.x, normalPosY = pair.activeContacts[0].vertex.y;
                                    if (pair.activeContacts.length === 2) {
                                        normalPosX = (pair.activeContacts[0].vertex.x + pair.activeContacts[1].vertex.x) / 2;
                                        normalPosY = (pair.activeContacts[0].vertex.y + pair.activeContacts[1].vertex.y) / 2;
                                    }
                                    if (collision.bodyB === collision.supports[0].body || collision.bodyA.isStatic === true) c.moveTo(normalPosX - collision.normal.x * 8, normalPosY - collision.normal.y * 8); else c.moveTo(normalPosX + collision.normal.x * 8, normalPosY + collision.normal.y * 8);
                                    c.lineTo(normalPosX, normalPosY);
                                }
                            }
                            if (options.wireframes) c.strokeStyle = "rgba(255,165,0,0.7)"; else c.strokeStyle = "orange";
                            c.lineWidth = 1;
                            c.stroke();
                        };
                        Render.separations = function(render, pairs, context) {
                            var pair, collision, bodyA, bodyB, i, c = context, options = render.options;
                            c.beginPath();
                            for (i = 0; i < pairs.length; i++) {
                                pair = pairs[i];
                                if (!pair.isActive) continue;
                                collision = pair.collision;
                                bodyA = collision.bodyA;
                                bodyB = collision.bodyB;
                                var k = 1;
                                if (!bodyB.isStatic && !bodyA.isStatic) k = .5;
                                if (bodyB.isStatic) k = 0;
                                c.moveTo(bodyB.position.x, bodyB.position.y);
                                c.lineTo(bodyB.position.x - collision.penetration.x * k, bodyB.position.y - collision.penetration.y * k);
                                k = 1;
                                if (!bodyB.isStatic && !bodyA.isStatic) k = .5;
                                if (bodyA.isStatic) k = 0;
                                c.moveTo(bodyA.position.x, bodyA.position.y);
                                c.lineTo(bodyA.position.x + collision.penetration.x * k, bodyA.position.y + collision.penetration.y * k);
                            }
                            if (options.wireframes) c.strokeStyle = "rgba(255,165,0,0.5)"; else c.strokeStyle = "orange";
                            c.stroke();
                        };
                        Render.inspector = function(inspector, context) {
                            inspector.engine;
                            var bounds, selected = inspector.selected, render = inspector.render, options = render.options;
                            if (options.hasBounds) {
                                var boundsWidth = render.bounds.max.x - render.bounds.min.x, boundsHeight = render.bounds.max.y - render.bounds.min.y, boundsScaleX = boundsWidth / render.options.width, boundsScaleY = boundsHeight / render.options.height;
                                context.scale(1 / boundsScaleX, 1 / boundsScaleY);
                                context.translate(-render.bounds.min.x, -render.bounds.min.y);
                            }
                            for (var i = 0; i < selected.length; i++) {
                                var item = selected[i].data;
                                context.translate(.5, .5);
                                context.lineWidth = 1;
                                context.strokeStyle = "rgba(255,165,0,0.9)";
                                context.setLineDash([ 1, 2 ]);
                                switch (item.type) {
                                  case "body":
                                    bounds = item.bounds;
                                    context.beginPath();
                                    context.rect(Math.floor(bounds.min.x - 3), Math.floor(bounds.min.y - 3), Math.floor(bounds.max.x - bounds.min.x + 6), Math.floor(bounds.max.y - bounds.min.y + 6));
                                    context.closePath();
                                    context.stroke();
                                    break;

                                  case "constraint":
                                    var point = item.pointA;
                                    if (item.bodyA) point = item.pointB;
                                    context.beginPath();
                                    context.arc(point.x, point.y, 10, 0, 2 * Math.PI);
                                    context.closePath();
                                    context.stroke();
                                    break;
                                }
                                context.setLineDash([]);
                                context.translate(-.5, -.5);
                            }
                            if (inspector.selectStart !== null) {
                                context.translate(.5, .5);
                                context.lineWidth = 1;
                                context.strokeStyle = "rgba(255,165,0,0.6)";
                                context.fillStyle = "rgba(255,165,0,0.1)";
                                bounds = inspector.selectBounds;
                                context.beginPath();
                                context.rect(Math.floor(bounds.min.x), Math.floor(bounds.min.y), Math.floor(bounds.max.x - bounds.min.x), Math.floor(bounds.max.y - bounds.min.y));
                                context.closePath();
                                context.stroke();
                                context.fill();
                                context.translate(-.5, -.5);
                            }
                            if (options.hasBounds) context.setTransform(1, 0, 0, 1, 0, 0);
                        };
                        var _updateTiming = function(render, time) {
                            var engine = render.engine, timing = render.timing, historySize = timing.historySize, timestamp = engine.timing.timestamp;
                            timing.delta = time - timing.lastTime || Render._goodDelta;
                            timing.lastTime = time;
                            timing.timestampElapsed = timestamp - timing.lastTimestamp || 0;
                            timing.lastTimestamp = timestamp;
                            timing.deltaHistory.unshift(timing.delta);
                            timing.deltaHistory.length = Math.min(timing.deltaHistory.length, historySize);
                            timing.engineDeltaHistory.unshift(engine.timing.lastDelta);
                            timing.engineDeltaHistory.length = Math.min(timing.engineDeltaHistory.length, historySize);
                            timing.timestampElapsedHistory.unshift(timing.timestampElapsed);
                            timing.timestampElapsedHistory.length = Math.min(timing.timestampElapsedHistory.length, historySize);
                            timing.engineElapsedHistory.unshift(engine.timing.lastElapsed);
                            timing.engineElapsedHistory.length = Math.min(timing.engineElapsedHistory.length, historySize);
                            timing.elapsedHistory.unshift(timing.lastElapsed);
                            timing.elapsedHistory.length = Math.min(timing.elapsedHistory.length, historySize);
                        };
                        var _mean = function(values) {
                            var result = 0;
                            for (var i = 0; i < values.length; i += 1) result += values[i];
                            return result / values.length || 0;
                        };
                        var _createCanvas = function(width, height) {
                            var canvas = document.createElement("canvas");
                            canvas.width = width;
                            canvas.height = height;
                            canvas.oncontextmenu = function() {
                                return false;
                            };
                            canvas.onselectstart = function() {
                                return false;
                            };
                            return canvas;
                        };
                        var _getPixelRatio = function(canvas) {
                            var context = canvas.getContext("2d"), devicePixelRatio = window.devicePixelRatio || 1, backingStorePixelRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
                            return devicePixelRatio / backingStorePixelRatio;
                        };
                        var _getTexture = function(render, imagePath) {
                            var image = render.textures[imagePath];
                            if (image) return image;
                            image = render.textures[imagePath] = new Image;
                            image.src = imagePath;
                            return image;
                        };
                        var _applyBackground = function(render, background) {
                            var cssBackground = background;
                            if (/(jpg|gif|png)$/.test(background)) cssBackground = "url(" + background + ")";
                            render.canvas.style.background = cssBackground;
                            render.canvas.style.backgroundSize = "contain";
                            render.currentBackground = background;
                        };
                    })();
                }, function(module, exports, __nested_webpack_require_339525__) {
                    var Runner = {};
                    module.exports = Runner;
                    var Events = __nested_webpack_require_339525__(5);
                    var Engine = __nested_webpack_require_339525__(17);
                    var Common = __nested_webpack_require_339525__(0);
                    (function() {
                        var _requestAnimationFrame, _cancelAnimationFrame;
                        if (typeof window !== "undefined") {
                            _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
                            _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
                        }
                        if (!_requestAnimationFrame) {
                            var _frameTimeout;
                            _requestAnimationFrame = function(callback) {
                                _frameTimeout = setTimeout((function() {
                                    callback(Common.now());
                                }), 1e3 / 60);
                            };
                            _cancelAnimationFrame = function() {
                                clearTimeout(_frameTimeout);
                            };
                        }
                        Runner.create = function(options) {
                            var defaults = {
                                fps: 60,
                                deltaSampleSize: 60,
                                counterTimestamp: 0,
                                frameCounter: 0,
                                deltaHistory: [],
                                timePrev: null,
                                frameRequestId: null,
                                isFixed: false,
                                enabled: true
                            };
                            var runner = Common.extend(defaults, options);
                            runner.delta = runner.delta || 1e3 / runner.fps;
                            runner.deltaMin = runner.deltaMin || 1e3 / runner.fps;
                            runner.deltaMax = runner.deltaMax || 1e3 / (runner.fps * .5);
                            runner.fps = 1e3 / runner.delta;
                            return runner;
                        };
                        Runner.run = function(runner, engine) {
                            if (typeof runner.positionIterations !== "undefined") {
                                engine = runner;
                                runner = Runner.create();
                            }
                            (function run(time) {
                                runner.frameRequestId = _requestAnimationFrame(run);
                                if (time && runner.enabled) Runner.tick(runner, engine, time);
                            })();
                            return runner;
                        };
                        Runner.tick = function(runner, engine, time) {
                            var delta, timing = engine.timing;
                            if (runner.isFixed) delta = runner.delta; else {
                                delta = time - runner.timePrev || runner.delta;
                                runner.timePrev = time;
                                runner.deltaHistory.push(delta);
                                runner.deltaHistory = runner.deltaHistory.slice(-runner.deltaSampleSize);
                                delta = Math.min.apply(null, runner.deltaHistory);
                                delta = delta < runner.deltaMin ? runner.deltaMin : delta;
                                delta = delta > runner.deltaMax ? runner.deltaMax : delta;
                                runner.delta = delta;
                            }
                            var event = {
                                timestamp: timing.timestamp
                            };
                            Events.trigger(runner, "beforeTick", event);
                            runner.frameCounter += 1;
                            if (time - runner.counterTimestamp >= 1e3) {
                                runner.fps = runner.frameCounter * ((time - runner.counterTimestamp) / 1e3);
                                runner.counterTimestamp = time;
                                runner.frameCounter = 0;
                            }
                            Events.trigger(runner, "tick", event);
                            Events.trigger(runner, "beforeUpdate", event);
                            Engine.update(engine, delta);
                            Events.trigger(runner, "afterUpdate", event);
                            Events.trigger(runner, "afterTick", event);
                        };
                        Runner.stop = function(runner) {
                            _cancelAnimationFrame(runner.frameRequestId);
                        };
                        Runner.start = function(runner, engine) {
                            Runner.run(runner, engine);
                        };
                    })();
                }, function(module, exports, __nested_webpack_require_348064__) {
                    var SAT = {};
                    module.exports = SAT;
                    var Collision = __nested_webpack_require_348064__(8);
                    var Common = __nested_webpack_require_348064__(0);
                    var deprecated = Common.deprecated;
                    (function() {
                        SAT.collides = function(bodyA, bodyB) {
                            return Collision.collides(bodyA, bodyB);
                        };
                        deprecated(SAT, "collides", "SAT.collides ➤ replaced by Collision.collides");
                    })();
                }, function(module, exports, __nested_webpack_require_349134__) {
                    var Svg = {};
                    module.exports = Svg;
                    __nested_webpack_require_349134__(1);
                    var Common = __nested_webpack_require_349134__(0);
                    (function() {
                        Svg.pathToVertices = function(path, sampleLength) {
                            if (typeof window !== "undefined" && !("SVGPathSeg" in window)) Common.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");
                            var i, il, total, point, segment, segments, segmentsQueue, lastSegment, lastPoint, segmentIndex, lx, ly, points = [], length = 0, x = 0, y = 0;
                            sampleLength = sampleLength || 15;
                            var addPoint = function(px, py, pathSegType) {
                                var isRelative = pathSegType % 2 === 1 && pathSegType > 1;
                                if (!lastPoint || px != lastPoint.x || py != lastPoint.y) {
                                    if (lastPoint && isRelative) {
                                        lx = lastPoint.x;
                                        ly = lastPoint.y;
                                    } else {
                                        lx = 0;
                                        ly = 0;
                                    }
                                    var point = {
                                        x: lx + px,
                                        y: ly + py
                                    };
                                    if (isRelative || !lastPoint) lastPoint = point;
                                    points.push(point);
                                    x = lx + px;
                                    y = ly + py;
                                }
                            };
                            var addSegmentPoint = function(segment) {
                                var segType = segment.pathSegTypeAsLetter.toUpperCase();
                                if (segType === "Z") return;
                                switch (segType) {
                                  case "M":
                                  case "L":
                                  case "T":
                                  case "C":
                                  case "S":
                                  case "Q":
                                    x = segment.x;
                                    y = segment.y;
                                    break;

                                  case "H":
                                    x = segment.x;
                                    break;

                                  case "V":
                                    y = segment.y;
                                    break;
                                }
                                addPoint(x, y, segment.pathSegType);
                            };
                            Svg._svgPathToAbsolute(path);
                            total = path.getTotalLength();
                            segments = [];
                            for (i = 0; i < path.pathSegList.numberOfItems; i += 1) segments.push(path.pathSegList.getItem(i));
                            segmentsQueue = segments.concat();
                            while (length < total) {
                                segmentIndex = path.getPathSegAtLength(length);
                                segment = segments[segmentIndex];
                                if (segment != lastSegment) {
                                    while (segmentsQueue.length && segmentsQueue[0] != segment) addSegmentPoint(segmentsQueue.shift());
                                    lastSegment = segment;
                                }
                                switch (segment.pathSegTypeAsLetter.toUpperCase()) {
                                  case "C":
                                  case "T":
                                  case "S":
                                  case "Q":
                                  case "A":
                                    point = path.getPointAtLength(length);
                                    addPoint(point.x, point.y, 0);
                                    break;
                                }
                                length += sampleLength;
                            }
                            for (i = 0, il = segmentsQueue.length; i < il; ++i) addSegmentPoint(segmentsQueue[i]);
                            return points;
                        };
                        Svg._svgPathToAbsolute = function(path) {
                            var x0, y0, x1, y1, x2, y2, segs = path.pathSegList, x = 0, y = 0, len = segs.numberOfItems;
                            for (var i = 0; i < len; ++i) {
                                var seg = segs.getItem(i), segType = seg.pathSegTypeAsLetter;
                                if (/[MLHVCSQTA]/.test(segType)) {
                                    if ("x" in seg) x = seg.x;
                                    if ("y" in seg) y = seg.y;
                                } else {
                                    if ("x1" in seg) x1 = x + seg.x1;
                                    if ("x2" in seg) x2 = x + seg.x2;
                                    if ("y1" in seg) y1 = y + seg.y1;
                                    if ("y2" in seg) y2 = y + seg.y2;
                                    if ("x" in seg) x += seg.x;
                                    if ("y" in seg) y += seg.y;
                                    switch (segType) {
                                      case "m":
                                        segs.replaceItem(path.createSVGPathSegMovetoAbs(x, y), i);
                                        break;

                                      case "l":
                                        segs.replaceItem(path.createSVGPathSegLinetoAbs(x, y), i);
                                        break;

                                      case "h":
                                        segs.replaceItem(path.createSVGPathSegLinetoHorizontalAbs(x), i);
                                        break;

                                      case "v":
                                        segs.replaceItem(path.createSVGPathSegLinetoVerticalAbs(y), i);
                                        break;

                                      case "c":
                                        segs.replaceItem(path.createSVGPathSegCurvetoCubicAbs(x, y, x1, y1, x2, y2), i);
                                        break;

                                      case "s":
                                        segs.replaceItem(path.createSVGPathSegCurvetoCubicSmoothAbs(x, y, x2, y2), i);
                                        break;

                                      case "q":
                                        segs.replaceItem(path.createSVGPathSegCurvetoQuadraticAbs(x, y, x1, y1), i);
                                        break;

                                      case "t":
                                        segs.replaceItem(path.createSVGPathSegCurvetoQuadraticSmoothAbs(x, y), i);
                                        break;

                                      case "a":
                                        segs.replaceItem(path.createSVGPathSegArcAbs(x, y, seg.r1, seg.r2, seg.angle, seg.largeArcFlag, seg.sweepFlag), i);
                                        break;

                                      case "z":
                                      case "Z":
                                        x = x0;
                                        y = y0;
                                        break;
                                    }
                                }
                                if (segType == "M" || segType == "m") {
                                    x0 = x;
                                    y0 = y;
                                }
                            }
                        };
                    })();
                }, function(module, exports, __nested_webpack_require_356595__) {
                    var World = {};
                    module.exports = World;
                    var Composite = __nested_webpack_require_356595__(6);
                    __nested_webpack_require_356595__(0);
                    (function() {
                        World.create = Composite.create;
                        World.add = Composite.add;
                        World.remove = Composite.remove;
                        World.clear = Composite.clear;
                        World.addComposite = Composite.addComposite;
                        World.addBody = Composite.addBody;
                        World.addConstraint = Composite.addConstraint;
                    })();
                } ]);
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        __webpack_require__.g = function() {
            if (typeof globalThis === "object") return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if (typeof window === "object") return window;
            }
        }();
    })();
    (() => {
        "use strict";
        const flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        function setHash(hash) {
            hash = hash ? `#${hash}` : window.location.href.split("#")[0];
            history.pushState("", "", hash);
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        function tabs() {
            const tabs = document.querySelectorAll("[data-tabs]");
            let tabsActiveHash = [];
            if (tabs.length > 0) {
                const hash = getHash();
                if (hash && hash.startsWith("tab-")) tabsActiveHash = hash.replace("tab-", "").split("-");
                tabs.forEach(((tabsBlock, index) => {
                    tabsBlock.classList.add("_tab-init");
                    tabsBlock.setAttribute("data-tabs-index", index);
                    tabsBlock.addEventListener("click", setTabsAction);
                    initTabs(tabsBlock);
                }));
                let mdQueriesArray = dataMediaQueries(tabs, "tabs");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
            }
            function setTitlePosition(tabsMediaArray, matchMedia) {
                tabsMediaArray.forEach((tabsMediaItem => {
                    tabsMediaItem = tabsMediaItem.item;
                    let tabsTitles = tabsMediaItem.querySelector("[data-tabs-titles]");
                    let tabsTitleItems = tabsMediaItem.querySelectorAll("[data-tabs-title]");
                    let tabsContent = tabsMediaItem.querySelector("[data-tabs-body]");
                    let tabsContentItems = tabsMediaItem.querySelectorAll("[data-tabs-item]");
                    tabsTitleItems = Array.from(tabsTitleItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems = Array.from(tabsContentItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems.forEach(((tabsContentItem, index) => {
                        if (matchMedia.matches) {
                            tabsContent.append(tabsTitleItems[index]);
                            tabsContent.append(tabsContentItem);
                            tabsMediaItem.classList.add("_tab-spoller");
                        } else {
                            tabsTitles.append(tabsTitleItems[index]);
                            tabsMediaItem.classList.remove("_tab-spoller");
                        }
                    }));
                }));
            }
            function initTabs(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-titles]>*");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-body]>*");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;
                if (tabsActiveHashBlock) {
                    const tabsActiveTitle = tabsBlock.querySelector("[data-tabs-titles]>._tab-active");
                    tabsActiveTitle ? tabsActiveTitle.classList.remove("_tab-active") : null;
                }
                if (tabsContent.length) {
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        tabsTitles[index].setAttribute("data-tabs-title", "");
                        tabsContentItem.setAttribute("data-tabs-item", "");
                        if (tabsActiveHashBlock && index == tabsActiveHash[1]) tabsTitles[index].classList.add("_tab-active");
                        tabsContentItem.hidden = !tabsTitles[index].classList.contains("_tab-active");
                    }));
                }
            }
            function setTabsStatus(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-title]");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-item]");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                function isTabsAnamate(tabsBlock) {
                    if (tabsBlock.hasAttribute("data-tabs-animate")) return tabsBlock.dataset.tabsAnimate > 0 ? Number(tabsBlock.dataset.tabsAnimate) : 500;
                }
                const tabsBlockAnimate = isTabsAnamate(tabsBlock);
                if (tabsContent.length > 0) {
                    const isHash = tabsBlock.hasAttribute("data-tabs-hash");
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        if (tabsTitles[index].classList.contains("_tab-active")) {
                            if (tabsBlockAnimate) _slideDown(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = false;
                            if (isHash && !tabsContentItem.closest(".popup")) setHash(`tab-${tabsBlockIndex}-${index}`);
                        } else if (tabsBlockAnimate) _slideUp(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = true;
                    }));
                }
            }
            function setTabsAction(e) {
                const el = e.target;
                if (el.closest("[data-tabs-title]")) {
                    const tabTitle = el.closest("[data-tabs-title]");
                    const tabsBlock = tabTitle.closest("[data-tabs]");
                    if (!tabTitle.classList.contains("_tab-active") && !tabsBlock.querySelector("._slide")) {
                        let tabActiveTitle = tabsBlock.querySelectorAll("[data-tabs-title]._tab-active");
                        tabActiveTitle.length ? tabActiveTitle = Array.from(tabActiveTitle).filter((item => item.closest("[data-tabs]") === tabsBlock)) : null;
                        tabActiveTitle.length ? tabActiveTitle[0].classList.remove("_tab-active") : null;
                        tabTitle.classList.add("_tab-active");
                        setTabsStatus(tabsBlock);
                    }
                    e.preventDefault();
                }
            }
        }
        function FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        function ssr_window_esm_isObject(obj) {
            return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target, src) {
            if (target === void 0) target = {};
            if (src === void 0) src = {};
            Object.keys(src).forEach((key => {
                if (typeof target[key] === "undefined") target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = typeof document !== "undefined" ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if (typeof setTimeout === "undefined") {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if (typeof setTimeout === "undefined") return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = typeof window !== "undefined" ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function utils_classesToTokens(classes) {
            if (classes === void 0) classes = "";
            return classes.trim().split(" ").filter((c => !!c.trim()));
        }
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay) {
            if (delay === void 0) delay = 0;
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis) {
            if (axis === void 0) axis = "x";
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
        }
        function isNode(node) {
            if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
            return node && (node.nodeType === 1 || node.nodeType === 11);
        }
        function utils_extend() {
            const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < arguments.length; i += 1) {
                const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll(_ref) {
            let {swiper, targetPosition, side} = _ref;
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (startTime === null) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        function utils_elementChildren(element, selector) {
            if (selector === void 0) selector = "";
            return [ ...element.children ].filter((el => el.matches(selector)));
        }
        function showWarning(text) {
            try {
                console.warn(text);
                return;
            } catch (err) {}
        }
        function utils_createElement(tag, classes) {
            if (classes === void 0) classes = [];
            const el = document.createElement(tag);
            el.classList.add(...Array.isArray(classes) ? classes : utils_classesToTokens(classes));
            return el;
        }
        function elementPrevAll(el, selector) {
            const prevEls = [];
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (prev.matches(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return prevEls;
        }
        function elementNextAll(el, selector) {
            const nextEls = [];
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (next.matches(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return nextEls;
        }
        function elementStyle(el, prop) {
            const window = ssr_window_esm_getWindow();
            return window.getComputedStyle(el, null).getPropertyValue(prop);
        }
        function utils_elementIndex(el) {
            let child = el;
            let i;
            if (child) {
                i = 0;
                while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
                return i;
            }
            return;
        }
        function utils_elementParents(el, selector) {
            const parents = [];
            let parent = el.parentElement;
            while (parent) {
                if (selector) {
                    if (parent.matches(selector)) parents.push(parent);
                } else parents.push(parent);
                parent = parent.parentElement;
            }
            return parents;
        }
        function utils_elementOuterSize(el, size, includeMargins) {
            const window = ssr_window_esm_getWindow();
            if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
            return el.offsetWidth;
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice(_temp) {
            let {userAgent} = _temp === void 0 ? {} : _temp;
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = platform === "Win32";
            let macos = platform === "MacIntel";
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides) {
            if (overrides === void 0) overrides = {};
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            let needPerspectiveFix = false;
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            if (isSafari()) {
                const ua = String(window.navigator.userAgent);
                if (ua.includes("Version/")) {
                    const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
                    needPerspectiveFix = major < 16 || major === 16 && minor < 2;
                }
            }
            return {
                isSafari: needPerspectiveFix || isSafari(),
                needPerspectiveFix,
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize(_ref) {
            let {swiper, on, emit} = _ref;
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((_ref2 => {
                            let {contentBoxSize, contentRect, target} = _ref2;
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = function(target, options) {
                if (options === void 0) options = {};
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (swiper.__preventObserver__) return;
                    if (mutations.length === 1) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                    childList: typeof options.childList === "undefined" ? true : options.childList,
                    characterData: typeof options.characterData === "undefined" ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = utils_elementParents(swiper.hostEl);
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.hostEl, {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.wrapperEl, {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        var eventsEmitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                function onceHandler() {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit() {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                if (typeof args[0] === "string" || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const el = swiper.el;
            if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = el.clientWidth;
            if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = el.clientHeight;
            if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
            width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
            height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if (typeof swiperSize === "undefined") return;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            swiper.virtualSize = -spaceBetween;
            slides.forEach((slideEl => {
                if (rtl) slideEl.style.marginLeft = ""; else slideEl.style.marginRight = "";
                slideEl.style.marginBottom = "";
                slideEl.style.marginTop = "";
            }));
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slides); else if (swiper.grid) swiper.grid.unsetSlides();
            let slideSize;
            const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                let slide;
                if (slides[i]) slide = slides[i];
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slides);
                if (slides[i] && elementStyle(slide, "display") === "none") continue;
                if (params.slidesPerView === "auto") {
                    if (shouldResetSlideSize) slides[i].style[swiper.getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide);
                    const currentTransform = slide.style.transform;
                    const currentWebKitTransform = slide.style.webkitTransform;
                    if (currentTransform) slide.style.transform = "none";
                    if (currentWebKitTransform) slide.style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? utils_elementOuterSize(slide, "width", true) : utils_elementOuterSize(slide, "height", true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide;
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide.style.transform = currentTransform;
                    if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
            if (params.setWrapperSize) wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (isVirtual && params.loop) {
                const size = slidesSizesGrid[0] + spaceBetween;
                if (params.slidesPerGroup > 1) {
                    const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                    const groupSize = size * params.slidesPerGroup;
                    for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                }
                for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                    if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                    slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                    swiper.virtualSize += size;
                }
            }
            if (snapGrid.length === 0) snapGrid = [ 0 ];
            if (spaceBetween !== 0) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode || params.loop) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).forEach((slideEl => {
                    slideEl.style[key] = `${spaceBetween}px`;
                }));
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap <= 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            swiper.emit("slidesUpdated");
            if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
                return swiper.slides[index];
            };
            if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
        }
        function updateSlidesProgress(translate) {
            if (translate === void 0) translate = this && this.translate || 0;
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (slides.length === 0) return;
            if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass);
            }));
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            let spaceBetween = params.spaceBetween;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides[i].classList.add(params.slideVisibleClass);
                }
                if (isFullyVisible) slides[i].classList.add(params.slideFullyVisibleClass);
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
        }
        function updateProgress(translate) {
            const swiper = this;
            if (typeof translate === "undefined") {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd, progressLoop} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (translatesDiff === 0) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
                const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
                isBeginning = isBeginningRounded || progress <= 0;
                isEnd = isEndRounded || progress >= 1;
                if (isBeginningRounded) progress = 0;
                if (isEndRounded) progress = 1;
            }
            if (params.loop) {
                const firstSlideIndex = swiper.getSlideIndexByData(0);
                const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
                const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
                const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
                const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
                const translateAbs = Math.abs(translate);
                if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
                if (progressLoop > 1) progressLoop -= 1;
            }
            Object.assign(swiper, {
                progress,
                progressLoop,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, slidesEl, activeIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            const getFilteredSlide = selector => utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            }));
            let activeSlide;
            let prevSlide;
            let nextSlide;
            if (isVirtual) if (params.loop) {
                let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
                if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
            } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`); else if (gridEnabled) {
                activeSlide = slides.filter((slideEl => slideEl.column === activeIndex))[0];
                nextSlide = slides.filter((slideEl => slideEl.column === activeIndex + 1))[0];
                prevSlide = slides.filter((slideEl => slideEl.column === activeIndex - 1))[0];
            } else activeSlide = slides[activeIndex];
            if (activeSlide) {
                activeSlide.classList.add(params.slideActiveClass);
                if (gridEnabled) {
                    if (nextSlide) nextSlide.classList.add(params.slideNextClass);
                    if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
                } else {
                    nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                    if (params.loop && !nextSlide) nextSlide = slides[0];
                    if (nextSlide) nextSlide.classList.add(params.slideNextClass);
                    prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                    if (params.loop && !prevSlide === 0) prevSlide = slides[slides.length - 1];
                    if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
                }
            }
            swiper.emitSlidesClasses();
        }
        const processLazyPreloader = (swiper, imageEl) => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
            const slideEl = imageEl.closest(slideSelector());
            if (slideEl) {
                let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                if (!lazyEl && swiper.isElement) if (slideEl.shadowRoot) lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`); else requestAnimationFrame((() => {
                    if (slideEl.shadowRoot) {
                        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                        if (lazyEl) lazyEl.remove();
                    }
                }));
                if (lazyEl) lazyEl.remove();
            }
        };
        const unlazy = (swiper, index) => {
            if (!swiper.slides[index]) return;
            const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
            if (imageEl) imageEl.removeAttribute("loading");
        };
        const preload = swiper => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            let amount = swiper.params.lazyPreloadPrevNext;
            const len = swiper.slides.length;
            if (!len || !amount || amount < 0) return;
            amount = Math.min(amount, len);
            const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
            const activeIndex = swiper.activeIndex;
            if (swiper.params.grid && swiper.params.grid.rows > 1) {
                const activeColumn = activeIndex;
                const preloadColumns = [ activeColumn - amount ];
                preloadColumns.push(...Array.from({
                    length: amount
                }).map(((_, i) => activeColumn + slidesPerView + i)));
                swiper.slides.forEach(((slideEl, i) => {
                    if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
                }));
                return;
            }
            const slideIndexLastInView = activeIndex + slidesPerView - 1;
            if (swiper.params.rewind || swiper.params.loop) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
                const realIndex = (i % len + len) % len;
                if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
            } else for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
        };
        function getActiveIndexByTranslate(swiper) {
            const {slidesGrid, params} = swiper;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            let activeIndex;
            for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
            if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
            return activeIndex;
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            const getVirtualRealIndex = aIndex => {
                let realIndex = aIndex - swiper.virtual.slidesBefore;
                if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
                if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
                return realIndex;
            };
            if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex && !swiper.params.loop) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                return;
            }
            if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
                swiper.realIndex = getVirtualRealIndex(activeIndex);
                return;
            }
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            let realIndex;
            if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex); else if (gridEnabled) {
                const firstSlideInColumn = swiper.slides.filter((slideEl => slideEl.column === activeIndex))[0];
                let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
                if (Number.isNaN(activeSlideIndex)) activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
                realIndex = Math.floor(activeSlideIndex / params.grid.rows);
            } else if (swiper.slides[activeIndex]) {
                const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
                if (slideIndex) realIndex = parseInt(slideIndex, 10); else realIndex = activeIndex;
            } else realIndex = activeIndex;
            Object.assign(swiper, {
                previousSnapIndex,
                snapIndex,
                previousRealIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            if (swiper.initialized) preload(swiper);
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) {
                if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
                swiper.emit("slideChange");
            }
        }
        function updateClickedSlide(el, path) {
            const swiper = this;
            const params = swiper.params;
            let slide = el.closest(`.${params.slideClass}, swiper-slide`);
            if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) [ ...path.slice(path.indexOf(el) + 1, path.length) ].forEach((pathEl => {
                if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) slide = pathEl;
            }));
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        var update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis) {
            if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate(wrapperEl, axis);
            currentTranslate += swiper.cssOverflowAdjustment();
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) {
                if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment(); else y -= swiper.cssOverflowAdjustment();
                wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            }
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (translate === void 0) translate = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (translateBounds === void 0) translateBounds = true;
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (speed === 0) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        var translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) {
                swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
                swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
            }
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit(_ref) {
            let {swiper, runCallbacks, direction, step} = _ref;
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === "reset") {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        var transition = {
            setTransition,
            transitionStart,
            transitionEnd
        };
        function slideTo(index, speed, runCallbacks, internal, initial) {
            if (index === void 0) index = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") index = parseInt(index, 10);
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(translate * 100);
                const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if (params.effect !== "slide") swiper.setTranslate(translate);
                if (direction !== "reset") {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (speed === 0) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                        swiper._cssModeVirtualInitialSet = true;
                        requestAnimationFrame((() => {
                            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                        }));
                    } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._immediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index, speed, runCallbacks, internal) {
            if (index === void 0) index = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") {
                const indexAsNumber = parseInt(index, 10);
                index = indexAsNumber;
            }
            const swiper = this;
            const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
            let newIndex = index;
            if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; else {
                let targetSlideIndex;
                if (gridEnabled) {
                    const slideIndex = newIndex * swiper.params.grid.rows;
                    targetSlideIndex = swiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex))[0].column;
                } else targetSlideIndex = swiper.getSlideIndexByData(newIndex);
                const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
                const {centeredSlides} = swiper.params;
                let slidesPerView = swiper.params.slidesPerView;
                if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                    slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
                    if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
                }
                let needLoopFix = cols - targetSlideIndex < slidesPerView;
                if (centeredSlides) needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
                if (needLoopFix) {
                    const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
                    swiper.loopFix({
                        direction,
                        slideTo: true,
                        activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
                        slideRealIndex: direction === "next" ? swiper.realIndex : void 0
                    });
                }
                if (gridEnabled) {
                    const slideIndex = newIndex * swiper.params.grid.rows;
                    newIndex = swiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex))[0].column;
                } else newIndex = swiper.getSlideIndexByData(newIndex);
            }
            requestAnimationFrame((() => {
                swiper.slideTo(newIndex, speed, runCallbacks, internal);
            }));
            return swiper;
        }
        function slideNext(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {enabled, params, animating} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "next"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
                if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
                    requestAnimationFrame((() => {
                        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
                    }));
                    return true;
                }
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
            if (!enabled) return swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "prev"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if (typeof prevSnap === "undefined" && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if (typeof prevSnap !== "undefined") {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
                requestAnimationFrame((() => {
                    swiper.slideTo(prevIndex, speed, runCallbacks, internal);
                }));
                return true;
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (threshold === void 0) threshold = .5;
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        var slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate(slideRealIndex) {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            const initSlides = () => {
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                slides.forEach(((el, index) => {
                    el.setAttribute("data-swiper-slide-index", index);
                }));
            };
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
            const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
            const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
            const addBlankSlides = amountOfSlides => {
                for (let i = 0; i < amountOfSlides; i += 1) {
                    const slideEl = swiper.isElement ? utils_createElement("swiper-slide", [ params.slideBlankClass ]) : utils_createElement("div", [ params.slideClass, params.slideBlankClass ]);
                    swiper.slidesEl.append(slideEl);
                }
            };
            if (shouldFillGroup) {
                if (params.loopAddBlankSlides) {
                    const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
                    addBlankSlides(slidesToAdd);
                    swiper.recalcSlides();
                    swiper.updateSlides();
                } else showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                initSlides();
            } else if (shouldFillGrid) {
                if (params.loopAddBlankSlides) {
                    const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
                    addBlankSlides(slidesToAdd);
                    swiper.recalcSlides();
                    swiper.updateSlides();
                } else showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                initSlides();
            } else initSlides();
            swiper.loopFix({
                slideRealIndex,
                direction: params.centeredSlides ? void 0 : "next"
            });
        }
        function loopFix(_temp) {
            let {slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel} = _temp === void 0 ? {} : _temp;
            const swiper = this;
            if (!swiper.params.loop) return;
            swiper.emit("beforeLoopFix");
            const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
            const {centeredSlides} = params;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            if (swiper.virtual && params.virtual.enabled) {
                if (slideTo) if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                swiper.emit("loopFix");
                return;
            }
            let slidesPerView = params.slidesPerView;
            if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
                if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
            }
            const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
            let loopedSlides = slidesPerGroup;
            if (loopedSlides % slidesPerGroup !== 0) loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
            loopedSlides += params.loopAdditionalSlides;
            swiper.loopedSlides = loopedSlides;
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            if (slides.length < slidesPerView + loopedSlides) showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"); else if (gridEnabled && params.grid.fill === "row") showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const prependSlidesIndexes = [];
            const appendSlidesIndexes = [];
            let activeIndex = swiper.activeIndex;
            if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(slides.filter((el => el.classList.contains(params.slideActiveClass)))[0]); else activeIndex = activeSlideIndex;
            const isNext = direction === "next" || !direction;
            const isPrev = direction === "prev" || !direction;
            let slidesPrepended = 0;
            let slidesAppended = 0;
            const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
            const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
            const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === "undefined" ? -slidesPerView / 2 + .5 : 0);
            if (activeColIndexWithShift < loopedSlides) {
                slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
                for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
                    const index = i - Math.floor(i / cols) * cols;
                    if (gridEnabled) {
                        const colIndexToPrepend = cols - index - 1;
                        for (let i = slides.length - 1; i >= 0; i -= 1) if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
                    } else prependSlidesIndexes.push(cols - index - 1);
                }
            } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
                slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
                for (let i = 0; i < slidesAppended; i += 1) {
                    const index = i - Math.floor(i / cols) * cols;
                    if (gridEnabled) slides.forEach(((slide, slideIndex) => {
                        if (slide.column === index) appendSlidesIndexes.push(slideIndex);
                    })); else appendSlidesIndexes.push(index);
                }
            }
            swiper.__preventObserver__ = true;
            requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
            if (isPrev) prependSlidesIndexes.forEach((index => {
                slides[index].swiperLoopMoveDOM = true;
                slidesEl.prepend(slides[index]);
                slides[index].swiperLoopMoveDOM = false;
            }));
            if (isNext) appendSlidesIndexes.forEach((index => {
                slides[index].swiperLoopMoveDOM = true;
                slidesEl.append(slides[index]);
                slides[index].swiperLoopMoveDOM = false;
            }));
            swiper.recalcSlides();
            if (params.slidesPerView === "auto") swiper.updateSlides(); else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) swiper.slides.forEach(((slide, slideIndex) => {
                swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
            }));
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
                if (typeof slideRealIndex === "undefined") {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                        swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
                        if (setTranslate) {
                            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                        }
                    }
                } else if (setTranslate) {
                    const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
                    swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
                    swiper.touchEventsData.currentTranslate = swiper.translate;
                }
            } else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) {
                        swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                        swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                    }
                }
            } else {
                const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
                swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.controller && swiper.controller.control && !byController) {
                const loopParams = {
                    slideRealIndex,
                    direction,
                    setTranslate,
                    activeSlideIndex,
                    byController: true
                };
                if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                    if (!c.destroyed && c.params.loop) c.loopFix({
                        ...loopParams,
                        slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
                    });
                })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix({
                    ...loopParams,
                    slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
                });
            }
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            swiper.recalcSlides();
            const newSlidesOrder = [];
            swiper.slides.forEach((slideEl => {
                const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
                newSlidesOrder[index] = slideEl;
            }));
            swiper.slides.forEach((slideEl => {
                slideEl.removeAttribute("data-swiper-slide-index");
            }));
            newSlidesOrder.forEach((slideEl => {
                slidesEl.append(slideEl);
            }));
            swiper.recalcSlides();
            swiper.slideTo(swiper.realIndex, 0);
        }
        var loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        var grabCursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base) {
            if (base === void 0) base = this;
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function preventEdgeSwipe(swiper, event, startX) {
            const window = ssr_window_esm_getWindow();
            const {params} = swiper;
            const edgeSwipeDetection = params.edgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
                if (edgeSwipeDetection === "prevent") {
                    event.preventDefault();
                    return true;
                }
                return false;
            }
            return true;
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            const data = swiper.touchEventsData;
            if (e.type === "pointerdown") {
                if (data.pointerId !== null && data.pointerId !== e.pointerId) return;
                data.pointerId = e.pointerId;
            } else if (e.type === "touchstart" && e.targetTouches.length === 1) data.touchId = e.targetTouches[0].identifier;
            if (e.type === "touchstart") {
                preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
                return;
            }
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && e.pointerType === "mouse") return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let targetEl = e.target;
            if (params.touchEventsTarget === "wrapper") if (!swiper.wrapperEl.contains(targetEl)) return;
            if ("which" in e && e.which === 3) return;
            if ("button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
            const eventPath = e.composedPath ? e.composedPath() : e.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
            touches.currentX = e.pageX;
            touches.currentY = e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            if (!preventEdgeSwipe(swiper, e, startX)) return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            let preventDefault = true;
            if (targetEl.matches(data.focusableElements)) {
                preventDefault = false;
                if (targetEl.nodeName === "SELECT") data.isTouched = false;
            }
            if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) document.activeElement.blur();
            const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
            if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (e.type === "pointermove") {
                if (data.touchId !== null) return;
                const id = e.pointerId;
                if (id !== data.pointerId) return;
            }
            let targetTouch;
            if (e.type === "touchmove") {
                targetTouch = [ ...e.changedTouches ].filter((t => t.identifier === data.touchId))[0];
                if (!targetTouch || targetTouch.identifier !== data.touchId) return;
            } else targetTouch = e;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            const pageX = targetTouch.pageX;
            const pageY = targetTouch.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            touches.previousX = touches.currentX;
            touches.previousY = touches.currentY;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if (typeof data.isScrolling === "undefined") {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            let diff = swiper.isHorizontal() ? diffX : diffY;
            let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
            if (params.oneWayMovement) {
                diff = Math.abs(diff) * (rtl ? 1 : -1);
                touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
            }
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) {
                diff = -diff;
                touchesDiff = -touchesDiff;
            }
            const prevTouchesDirection = swiper.touchesDirection;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
            const isLoop = swiper.params.loop && !params.cssMode;
            const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
            if (!data.isMoved) {
                if (isLoop && allowLoopFix) swiper.loopFix({
                    direction: swiper.swipeDirection
                });
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) {
                    const evt = new window.CustomEvent("transitionend", {
                        bubbles: true,
                        cancelable: true
                    });
                    swiper.wrapperEl.dispatchEvent(evt);
                }
                data.allowMomentumBounce = false;
                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            let loopFixed;
            (new Date).getTime();
            if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
                Object.assign(touches, {
                    startX: pageX,
                    startY: pageY,
                    currentX: pageX,
                    currentY: pageY,
                    startTranslate: data.currentTranslate
                });
                data.loopSwapReset = true;
                data.startTranslate = data.currentTranslate;
                return;
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0) {
                if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] : swiper.minTranslate())) swiper.loopFix({
                    direction: "prev",
                    setTranslate: true,
                    activeSlideIndex: 0
                });
                if (data.currentTranslate > swiper.minTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                }
            } else if (diff < 0) {
                if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] : swiper.maxTranslate())) swiper.loopFix({
                    direction: "next",
                    setTranslate: true,
                    activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                });
                if (data.currentTranslate < swiper.maxTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                }
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let targetTouch;
            const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
            if (!isTouchEvent) {
                if (data.touchId !== null) return;
                if (e.pointerId !== data.pointerId) return;
                targetTouch = e;
            } else {
                targetTouch = [ ...e.changedTouches ].filter((t => t.identifier === data.touchId))[0];
                if (!targetTouch || targetTouch.identifier !== data.touchId) return;
            }
            if ([ "pointercancel", "pointerout", "pointerleave", "contextmenu" ].includes(e.type)) {
                const proceed = [ "pointercancel", "contextmenu" ].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
                if (!proceed) return;
            }
            data.pointerId = null;
            data.touchId = null;
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && e.pointerType === "mouse") return;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (typeof slidesGrid[i + increment] !== "undefined") {
                    if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (swipeToLast || currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                    if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && el.offsetWidth === 0) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            const isVirtualLoop = isVirtual && params.loop;
            if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                clearTimeout(swiper.autoplay.resizeTimeout);
                swiper.autoplay.resizeTimeout = setTimeout((() => {
                    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
                }), 500);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (swiper.translate === 0) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        function onLoad(e) {
            const swiper = this;
            processLazyPreloader(swiper, e.target);
            if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
            swiper.update();
        }
        function onDocumentTouchStart() {
            const swiper = this;
            if (swiper.documentTouchHandlerProceeded) return;
            swiper.documentTouchHandlerProceeded = true;
            if (swiper.params.touchReleaseOnEdges) swiper.el.style.touchAction = "auto";
        }
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, el, wrapperEl, device} = swiper;
            const capture = !!params.nested;
            const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            document[domMethod]("touchstart", swiper.onDocumentTouchStart, {
                passive: false,
                capture
            });
            el[domMethod]("touchstart", swiper.onTouchStart, {
                passive: false
            });
            el[domMethod]("pointerdown", swiper.onTouchStart, {
                passive: false
            });
            document[domMethod]("touchmove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("pointermove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("touchend", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerup", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointercancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("touchcancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerout", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerleave", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("contextmenu", swiper.onTouchEnd, {
                passive: true
            });
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
            el[domMethod]("load", swiper.onLoad, {
                capture: true
            });
        };
        function attachEvents() {
            const swiper = this;
            const {params} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            swiper.onLoad = onLoad.bind(swiper);
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        var events$1 = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {realIndex, initialized, params, el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                el.classList.add(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                if (typeof breakpointParams[prop] === "undefined") return;
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            const wasLoop = params.loop;
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            const hasLoop = swiper.params.loop;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (initialized) if (needsReLoop) {
                swiper.loopDestroy();
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (!wasLoop && hasLoop) {
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (wasLoop && !hasLoop) swiper.loopDestroy();
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base, containerEl) {
            if (base === void 0) base = "window";
            if (!breakpoints || base === "container" && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if (typeof point === "string" && point.indexOf("@") === 0) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if (base === "window") {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        var breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if (typeof item === "object") Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if (typeof item === "string") resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, el, device} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            el.classList.add(...classNames);
            swiper.emitContainerClasses();
        }
        function swiper_core_removeClasses() {
            const swiper = this;
            const {el, classNames} = swiper;
            el.classList.remove(...classNames);
            swiper.emitContainerClasses();
        }
        var classes = {
            addClasses,
            removeClasses: swiper_core_removeClasses
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = swiper.snapGrid.length === 1;
            if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
            if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        var checkOverflow$1 = {
            checkOverflow
        };
        var defaults = {
            init: true,
            direction: "horizontal",
            oneWayMovement: false,
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            eventsPrefix: "swiper",
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 5,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loop: false,
            loopAddBlankSlides: true,
            loopAdditionalSlides: 0,
            loopPreventsSliding: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-blank",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideFullyVisibleClass: "swiper-slide-fully-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
                if (obj === void 0) obj = {};
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if (typeof moduleParams !== "object" || moduleParams === null) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (params[moduleParamName] === true) params[moduleParamName] = {
                    enabled: true
                };
                if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) params[moduleParamName].auto = true;
                if ([ "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) params[moduleParamName].auto = true;
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter,
            update,
            translate,
            transition,
            slide,
            loop,
            grabCursor,
            events: events$1,
            breakpoints,
            checkOverflow: checkOverflow$1,
            classes
        };
        const extendedDefaults = {};
        class swiper_core_Swiper {
            constructor() {
                let el;
                let params;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                const document = ssr_window_esm_getDocument();
                if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
                    const swipers = [];
                    document.querySelectorAll(params.el).forEach((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new swiper_core_Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        params,
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return swiper.params.direction === "horizontal";
                    },
                    isVertical() {
                        return swiper.params.direction === "vertical";
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                    },
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        pointerId: null,
                        touchId: null
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            getDirectionLabel(property) {
                if (this.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            getSlideIndex(slideEl) {
                const {slidesEl, params} = this;
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                const firstSlideIndex = utils_elementIndex(slides[0]);
                return utils_elementIndex(slideEl) - firstSlideIndex;
            }
            getSlideIndexByData(index) {
                return this.getSlideIndex(this.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index))[0]);
            }
            recalcSlides() {
                const swiper = this;
                const {slidesEl, params} = swiper;
                swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.forEach((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view, exact) {
                if (view === void 0) view = "current";
                if (exact === void 0) exact = false;
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (typeof params.slidesPerView === "number") return params.slidesPerView;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl);
                }));
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
                    setTranslate();
                    if (params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                        translated = swiper.slideTo(slides.length - 1, 0, false, true);
                    } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate) {
                if (needUpdate === void 0) needUpdate = true;
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
                if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
                swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.forEach((slideEl => {
                    if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
                swiper.rtl = direction === "rtl";
                swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
                if (swiper.rtl) {
                    swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(element) {
                const swiper = this;
                if (swiper.mounted) return true;
                let el = element || swiper.params.el;
                if (typeof el === "string") el = document.querySelector(el);
                if (!el) return false;
                el.swiper = swiper;
                if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === "SWIPER-CONTAINER") swiper.isElement = true;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = el.shadowRoot.querySelector(getWrapperSelector());
                        return res;
                    }
                    return utils_elementChildren(el, getWrapperSelector())[0];
                };
                let wrapperEl = getWrapper();
                if (!wrapperEl && swiper.params.createElements) {
                    wrapperEl = utils_createElement("div", swiper.params.wrapperClass);
                    el.append(wrapperEl);
                    utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                        wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    el,
                    wrapperEl,
                    slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
                    hostEl: swiper.isElement ? el.parentNode.host : el,
                    mounted: true,
                    rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
                    rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
                    wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (mounted === false) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                if (swiper.params.loop) swiper.loopCreate();
                swiper.attachEvents();
                const lazyElements = [ ...swiper.el.querySelectorAll('[loading="lazy"]') ];
                if (swiper.isElement) lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
                lazyElements.forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                        processLazyPreloader(swiper, e.target);
                    }));
                }));
                preload(swiper);
                swiper.initialized = true;
                preload(swiper);
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance, cleanStyles) {
                if (deleteInstance === void 0) deleteInstance = true;
                if (cleanStyles === void 0) cleanStyles = true;
                const swiper = this;
                const {params, el, wrapperEl, slides} = swiper;
                if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    el.removeAttribute("style");
                    wrapperEl.removeAttribute("style");
                    if (slides && slides.length) slides.forEach((slideEl => {
                        slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                        slideEl.removeAttribute("style");
                        slideEl.removeAttribute("data-swiper-slide-index");
                    }));
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (deleteInstance !== false) {
                    swiper.el.swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!swiper_core_Swiper.prototype.__modules__) swiper_core_Swiper.prototype.__modules__ = [];
                const modules = swiper_core_Swiper.prototype.__modules__;
                if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => swiper_core_Swiper.installModule(m)));
                    return swiper_core_Swiper;
                }
                swiper_core_Swiper.installModule(module);
                return swiper_core_Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                swiper_core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        swiper_core_Swiper.use([ Resize, Observer ]);
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && params.auto === true) {
                    let element = utils_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                    if (!element) {
                        element = utils_createElement("div", checkProps[key]);
                        element.className = checkProps[key];
                        swiper.el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                prevEl: null
            };
            const makeElementsArray = el => (Array.isArray(el) ? el : [ el ]).filter((e => !!e));
            function getEl(el) {
                let res;
                if (el && typeof el === "string" && swiper.isElement) {
                    res = swiper.el.querySelector(el);
                    if (res) return res;
                }
                if (el) {
                    if (typeof el === "string") res = [ ...document.querySelectorAll(el) ];
                    if (swiper.params.uniqueNavElements && typeof el === "string" && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el);
                }
                if (el && !res) return el;
                return res;
            }
            function toggleEl(el, disabled) {
                const params = swiper.params.navigation;
                el = makeElementsArray(el);
                el.forEach((subEl => {
                    if (subEl) {
                        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                        if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
                        if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                    }
                }));
            }
            function update() {
                const {nextEl, prevEl} = swiper.navigation;
                if (swiper.params.loop) {
                    toggleEl(prevEl, false);
                    toggleEl(nextEl, false);
                    return;
                }
                toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
                emit("navigationPrev");
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
                emit("navigationNext");
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                let nextEl = getEl(params.nextEl);
                let prevEl = getEl(params.prevEl);
                Object.assign(swiper.navigation, {
                    nextEl,
                    prevEl
                });
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const initButton = (el, dir) => {
                    if (el) el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
                };
                nextEl.forEach((el => initButton(el, "next")));
                prevEl.forEach((el => initButton(el, "prev")));
            }
            function destroy() {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const destroyButton = (el, dir) => {
                    el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
                };
                nextEl.forEach((el => destroyButton(el, "next")));
                prevEl.forEach((el => destroyButton(el, "prev")));
            }
            on("init", (() => {
                if (swiper.params.navigation.enabled === false) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                if (swiper.enabled) {
                    update();
                    return;
                }
                [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.add(swiper.params.navigation.lockClass)));
            }));
            on("click", ((_s, e) => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass); else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                    if (isHidden === true) emit("navigationShow"); else emit("navigationHide");
                    [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.toggle(swiper.params.navigation.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
                init();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        function Autoplay(_ref) {
            let {swiper, extendParams, on, emit, params} = _ref;
            swiper.autoplay = {
                running: false,
                paused: false,
                timeLeft: 0
            };
            extendParams({
                autoplay: {
                    enabled: false,
                    delay: 3e3,
                    waitForTransition: true,
                    disableOnInteraction: false,
                    stopOnLastSlide: false,
                    reverseDirection: false,
                    pauseOnMouseEnter: false
                }
            });
            let timeout;
            let raf;
            let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
            let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
            let autoplayTimeLeft;
            let autoplayStartTime = (new Date).getTime();
            let wasPaused;
            let isTouched;
            let pausedByTouch;
            let touchStartTimeout;
            let slideChanged;
            let pausedByInteraction;
            let pausedByPointerEnter;
            function onTransitionEnd(e) {
                if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
                if (e.target !== swiper.wrapperEl) return;
                swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
                if (pausedByPointerEnter) return;
                resume();
            }
            const calcTimeLeft = () => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (swiper.autoplay.paused) wasPaused = true; else if (wasPaused) {
                    autoplayDelayCurrent = autoplayTimeLeft;
                    wasPaused = false;
                }
                const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (new Date).getTime();
                swiper.autoplay.timeLeft = timeLeft;
                emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
                raf = requestAnimationFrame((() => {
                    calcTimeLeft();
                }));
            };
            const getSlideDelay = () => {
                let activeSlideEl;
                if (swiper.virtual && swiper.params.virtual.enabled) activeSlideEl = swiper.slides.filter((slideEl => slideEl.classList.contains("swiper-slide-active")))[0]; else activeSlideEl = swiper.slides[swiper.activeIndex];
                if (!activeSlideEl) return;
                const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
                return currentSlideDelay;
            };
            const run = delayForce => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                cancelAnimationFrame(raf);
                calcTimeLeft();
                let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
                autoplayDelayTotal = swiper.params.autoplay.delay;
                autoplayDelayCurrent = swiper.params.autoplay.delay;
                const currentSlideDelay = getSlideDelay();
                if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
                    delay = currentSlideDelay;
                    autoplayDelayTotal = currentSlideDelay;
                    autoplayDelayCurrent = currentSlideDelay;
                }
                autoplayTimeLeft = delay;
                const speed = swiper.params.speed;
                const proceed = () => {
                    if (!swiper || swiper.destroyed) return;
                    if (swiper.params.autoplay.reverseDirection) {
                        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
                            swiper.slidePrev(speed, true, true);
                            emit("autoplay");
                        } else if (!swiper.params.autoplay.stopOnLastSlide) {
                            swiper.slideTo(swiper.slides.length - 1, speed, true, true);
                            emit("autoplay");
                        }
                    } else if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
                        swiper.slideNext(speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        swiper.slideTo(0, speed, true, true);
                        emit("autoplay");
                    }
                    if (swiper.params.cssMode) {
                        autoplayStartTime = (new Date).getTime();
                        requestAnimationFrame((() => {
                            run();
                        }));
                    }
                };
                if (delay > 0) {
                    clearTimeout(timeout);
                    timeout = setTimeout((() => {
                        proceed();
                    }), delay);
                } else requestAnimationFrame((() => {
                    proceed();
                }));
                return delay;
            };
            const start = () => {
                autoplayStartTime = (new Date).getTime();
                swiper.autoplay.running = true;
                run();
                emit("autoplayStart");
            };
            const stop = () => {
                swiper.autoplay.running = false;
                clearTimeout(timeout);
                cancelAnimationFrame(raf);
                emit("autoplayStop");
            };
            const pause = (internal, reset) => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                clearTimeout(timeout);
                if (!internal) pausedByInteraction = true;
                const proceed = () => {
                    emit("autoplayPause");
                    if (swiper.params.autoplay.waitForTransition) swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd); else resume();
                };
                swiper.autoplay.paused = true;
                if (reset) {
                    if (slideChanged) autoplayTimeLeft = swiper.params.autoplay.delay;
                    slideChanged = false;
                    proceed();
                    return;
                }
                const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
                autoplayTimeLeft = delay - ((new Date).getTime() - autoplayStartTime);
                if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
                if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
                proceed();
            };
            const resume = () => {
                if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
                autoplayStartTime = (new Date).getTime();
                if (pausedByInteraction) {
                    pausedByInteraction = false;
                    run(autoplayTimeLeft);
                } else run();
                swiper.autoplay.paused = false;
                emit("autoplayResume");
            };
            const onVisibilityChange = () => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                const document = ssr_window_esm_getDocument();
                if (document.visibilityState === "hidden") {
                    pausedByInteraction = true;
                    pause(true);
                }
                if (document.visibilityState === "visible") resume();
            };
            const onPointerEnter = e => {
                if (e.pointerType !== "mouse") return;
                pausedByInteraction = true;
                pausedByPointerEnter = true;
                if (swiper.animating || swiper.autoplay.paused) return;
                pause(true);
            };
            const onPointerLeave = e => {
                if (e.pointerType !== "mouse") return;
                pausedByPointerEnter = false;
                if (swiper.autoplay.paused) resume();
            };
            const attachMouseEvents = () => {
                if (swiper.params.autoplay.pauseOnMouseEnter) {
                    swiper.el.addEventListener("pointerenter", onPointerEnter);
                    swiper.el.addEventListener("pointerleave", onPointerLeave);
                }
            };
            const detachMouseEvents = () => {
                swiper.el.removeEventListener("pointerenter", onPointerEnter);
                swiper.el.removeEventListener("pointerleave", onPointerLeave);
            };
            const attachDocumentEvents = () => {
                const document = ssr_window_esm_getDocument();
                document.addEventListener("visibilitychange", onVisibilityChange);
            };
            const detachDocumentEvents = () => {
                const document = ssr_window_esm_getDocument();
                document.removeEventListener("visibilitychange", onVisibilityChange);
            };
            on("init", (() => {
                if (swiper.params.autoplay.enabled) {
                    attachMouseEvents();
                    attachDocumentEvents();
                    start();
                }
            }));
            on("destroy", (() => {
                detachMouseEvents();
                detachDocumentEvents();
                if (swiper.autoplay.running) stop();
            }));
            on("_freeModeStaticRelease", (() => {
                if (pausedByTouch || pausedByInteraction) resume();
            }));
            on("_freeModeNoMomentumRelease", (() => {
                if (!swiper.params.autoplay.disableOnInteraction) pause(true, true); else stop();
            }));
            on("beforeTransitionStart", ((_s, speed, internal) => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (internal || !swiper.params.autoplay.disableOnInteraction) pause(true, true); else stop();
            }));
            on("sliderFirstMove", (() => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (swiper.params.autoplay.disableOnInteraction) {
                    stop();
                    return;
                }
                isTouched = true;
                pausedByTouch = false;
                pausedByInteraction = false;
                touchStartTimeout = setTimeout((() => {
                    pausedByInteraction = true;
                    pausedByTouch = true;
                    pause(true);
                }), 200);
            }));
            on("touchEnd", (() => {
                if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
                clearTimeout(touchStartTimeout);
                clearTimeout(timeout);
                if (swiper.params.autoplay.disableOnInteraction) {
                    pausedByTouch = false;
                    isTouched = false;
                    return;
                }
                if (pausedByTouch && swiper.params.cssMode) resume();
                pausedByTouch = false;
                isTouched = false;
            }));
            on("slideChange", (() => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                slideChanged = true;
            }));
            Object.assign(swiper.autoplay, {
                start,
                stop,
                pause,
                resume
            });
        }
        function initSliders() {
            if (document.querySelector(".preview__slider")) {
                let isTransitioning = false;
                let swiperSpeed = 600;
                const prevButton = document.querySelector(".preview__button-prev");
                const nextButton = document.querySelector(".preview__button-next");
                new swiper_core_Swiper(".preview__slider", {
                    modules: [ Navigation, Autoplay ],
                    observer: true,
                    observeParents: true,
                    slidesPerView: 1,
                    centeredSlides: true,
                    spaceBetween: 32,
                    autoHeight: false,
                    speed: swiperSpeed,
                    loop: false,
                    autoplay: {
                        delay: 3e3,
                        disableOnInteraction: false
                    },
                    navigation: {
                        prevEl: ".preview__button-prev",
                        nextEl: ".preview__button-next"
                    },
                    breakpoints: {
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 0
                        }
                    },
                    on: {
                        transitionStart: function() {
                            const previewSwiper = this;
                            prevButton.disabled = true;
                            nextButton.disabled = true;
                            previewSwiper.autoplay.stop();
                        },
                        transitionEnd: function() {
                            const previewSwiper = this;
                            prevButton.disabled = false;
                            nextButton.disabled = false;
                            previewSwiper.autoplay.start();
                        },
                        init: function() {
                            let swiper = this;
                            prevButton.addEventListener("click", (function() {
                                if (!isTransitioning) if (swiper.isBeginning) swiper.slideTo(swiper.slides.length - 1, swiperSpeed); else swiper.slidePrev();
                            }));
                            nextButton.addEventListener("click", (function() {
                                if (!isTransitioning) if (swiper.isEnd) swiper.slideTo(0, swiperSpeed); else swiper.slideNext();
                            }));
                            swiper.on("transitionStart", (function() {
                                isTransitioning = true;
                            }));
                            swiper.on("transitionEnd", (function() {
                                isTransitioning = false;
                            }));
                        }
                    }
                });
            }
        }
        window.addEventListener("load", (function(e) {
            initSliders();
        }));
        class ScrollWatcher {
            constructor(props) {
                let defaultConfig = {
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                this.observer;
                !document.documentElement.classList.contains("watcher") ? this.scrollWatcherRun() : null;
            }
            scrollWatcherUpdate() {
                this.scrollWatcherRun();
            }
            scrollWatcherRun() {
                document.documentElement.classList.add("watcher");
                this.scrollWatcherConstructor(document.querySelectorAll("[data-watch]"));
            }
            scrollWatcherConstructor(items) {
                if (items.length) {
                    this.scrollWatcherLogging(`Прокинувся, стежу за об'єктами (${items.length})...`);
                    let uniqParams = uniqArray(Array.from(items).map((function(item) {
                        return `${item.dataset.watchRoot ? item.dataset.watchRoot : null}|${item.dataset.watchMargin ? item.dataset.watchMargin : "0px"}|${item.dataset.watchThreshold ? item.dataset.watchThreshold : 0}`;
                    })));
                    uniqParams.forEach((uniqParam => {
                        let uniqParamArray = uniqParam.split("|");
                        let paramsWatch = {
                            root: uniqParamArray[0],
                            margin: uniqParamArray[1],
                            threshold: uniqParamArray[2]
                        };
                        let groupItems = Array.from(items).filter((function(item) {
                            let watchRoot = item.dataset.watchRoot ? item.dataset.watchRoot : null;
                            let watchMargin = item.dataset.watchMargin ? item.dataset.watchMargin : "0px";
                            let watchThreshold = item.dataset.watchThreshold ? item.dataset.watchThreshold : 0;
                            if (String(watchRoot) === paramsWatch.root && String(watchMargin) === paramsWatch.margin && String(watchThreshold) === paramsWatch.threshold) return item;
                        }));
                        let configWatcher = this.getScrollWatcherConfig(paramsWatch);
                        this.scrollWatcherInit(groupItems, configWatcher);
                    }));
                } else this.scrollWatcherLogging("Сплю, немає об'єктів для стеження. ZzzZZzz");
            }
            getScrollWatcherConfig(paramsWatch) {
                let configWatcher = {};
                if (document.querySelector(paramsWatch.root)) configWatcher.root = document.querySelector(paramsWatch.root); else if (paramsWatch.root !== "null") this.scrollWatcherLogging(`Эмм... батьківського об'єкта ${paramsWatch.root} немає на сторінці`);
                configWatcher.rootMargin = paramsWatch.margin;
                if (paramsWatch.margin.indexOf("px") < 0 && paramsWatch.margin.indexOf("%") < 0) {
                    this.scrollWatcherLogging(`йой, налаштування data-watch-margin потрібно задавати в PX або %`);
                    return;
                }
                if (paramsWatch.threshold === "prx") {
                    paramsWatch.threshold = [];
                    for (let i = 0; i <= 1; i += .005) paramsWatch.threshold.push(i);
                } else paramsWatch.threshold = paramsWatch.threshold.split(",");
                configWatcher.threshold = paramsWatch.threshold;
                return configWatcher;
            }
            scrollWatcherCreate(configWatcher) {
                this.observer = new IntersectionObserver(((entries, observer) => {
                    entries.forEach((entry => {
                        this.scrollWatcherCallback(entry, observer);
                    }));
                }), configWatcher);
            }
            scrollWatcherInit(items, configWatcher) {
                this.scrollWatcherCreate(configWatcher);
                items.forEach((item => this.observer.observe(item)));
            }
            scrollWatcherIntersecting(entry, targetElement) {
                if (entry.isIntersecting) {
                    !targetElement.classList.contains("_watcher-view") ? targetElement.classList.add("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я бачу ${targetElement.classList}, додав клас _watcher-view`);
                } else {
                    targetElement.classList.contains("_watcher-view") ? targetElement.classList.remove("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я не бачу ${targetElement.classList}, прибрав клас _watcher-view`);
                }
            }
            scrollWatcherOff(targetElement, observer) {
                observer.unobserve(targetElement);
                this.scrollWatcherLogging(`Я перестав стежити за ${targetElement.classList}`);
            }
            scrollWatcherLogging(message) {
                this.config.logging ? FLS(`[Спостерігач]: ${message}`) : null;
            }
            scrollWatcherCallback(entry, observer) {
                const targetElement = entry.target;
                this.scrollWatcherIntersecting(entry, targetElement);
                targetElement.hasAttribute("data-watch-once") && entry.isIntersecting ? this.scrollWatcherOff(targetElement, observer) : null;
                document.dispatchEvent(new CustomEvent("watcherCallback", {
                    detail: {
                        entry
                    }
                }));
            }
        }
        flsModules.watcher = new ScrollWatcher({});
        var matter = __webpack_require__(555);
        if (document.querySelector(".preview__slider")) document.addEventListener("DOMContentLoaded", (function() {
            const previewContainer = document.querySelector(".preview__inner");
            const previewSlider = previewContainer.querySelector(".preview__slider");
            const previewButtons = previewContainer.querySelector(".preview__buttons");
            const mql = window.matchMedia("(max-width: 576px)");
            if (mql.matches) previewContainer.insertBefore(previewSlider, previewButtons); else previewContainer.insertBefore(previewButtons, previewSlider);
            mql.addEventListener("change", (function() {
                if (mql.matches) previewContainer.insertBefore(previewSlider, previewButtons); else previewContainer.insertBefore(previewButtons, previewSlider);
            }));
        }));
        (function() {
            "use strict";
            var utils = {
                extend: function(defaults, options) {
                    if (typeof options !== "object") options = {};
                    for (var key in options) if (defaults.hasOwnProperty(key)) defaults[key] = options[key];
                    return defaults;
                },
                isIE: function() {
                    var myNav = navigator.userAgent.toLowerCase();
                    return myNav.indexOf("msie") != -1 ? parseInt(myNav.split("msie")[1]) : false;
                },
                setStyle: function(el, property, value) {
                    el.style[property.charAt(0).toLowerCase() + property.slice(1)] = value;
                },
                setVendor: function(el, property, value) {
                    el.style[property.charAt(0).toLowerCase() + property.slice(1)] = value;
                    el.style["webkit" + property] = value;
                    el.style["moz" + property] = value;
                    el.style["ms" + property] = value;
                    el.style["o" + property] = value;
                },
                hasClass: function(el, className) {
                    if (el.classList) return el.classList.contains(className); else return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
                },
                addClass: function(el, className) {
                    if (el.classList) el.classList.add(className); else if (!utils.hasClass(el, className)) el.className += " " + className;
                },
                removeClass: function(el, className) {
                    if (el.classList) el.classList.remove(className); else if (utils.hasClass(el, className)) {
                        var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
                        el.className = el.className.replace(reg, " ");
                    }
                }
            };
            function FullPage(element, options) {
                var defaults = {
                    section: ".section",
                    animationDuration: 700,
                    animationTiming: "ease",
                    animationTranform: "transform",
                    pagination: true,
                    keyboard: true,
                    touch: true,
                    touchLimit: 100,
                    loop: false,
                    onLeave: null,
                    afterLoad: null
                };
                this.el = document.querySelector(element);
                this.settings = utils.extend(defaults, options);
                this.body = document.querySelector("body");
                this.sections = this.el.querySelectorAll(this.settings.section);
                this.init();
                return this;
            }
            FullPage.prototype.init = function() {
                this.index = 0;
                this.lastAnimation = 0;
                this.build();
                this.bindEvents();
                this.makeActive(this.index);
                if (typeof this.settings.afterLoad === "function") this.settings.afterLoad(this.index);
            };
            FullPage.prototype.build = function() {
                if (this.settings.pagination) this.paginationHTML();
            };
            FullPage.prototype.bindEvents = function() {
                var self = this;
                if (this.settings.pagination) {
                    var paginationLinks = document.querySelectorAll(".slide-navigation li a");
                    for (var i = 0; i < paginationLinks.length; i++) (function(index) {
                        paginationLinks[i].addEventListener("click", (function(event) {
                            self.index = index;
                            self.move(self.index);
                            event.preventDefault();
                        }));
                    })(i);
                }
                if (this.settings.keyboard) document.addEventListener("keydown", this.keyboard.bind(this));
                if (this.settings.touch) this.enableTouch(document);
                document.addEventListener("mousewheel", this.mousewheel.bind(this));
                document.addEventListener("DOMMouseScroll", this.mousewheel.bind(this));
            };
            FullPage.prototype.makeActive = function(index) {
                document.querySelectorAll(".slide-navigation li a");
                for (var i = 0; i < this.sections.length; i++) utils.removeClass(this.sections[i], "is-active");
                utils.addClass(this.sections[index], "is-active");
            };
            FullPage.prototype.move = function(index) {
                var self = this;
                if (typeof self.settings.onLeave === "function") self.settings.onLeave(this.index);
                if (utils.isIE() === 9) {
                    utils.setStyle(this.el, "position", "relative");
                    utils.setStyle(this.el, "top", index * -100 + "%");
                    utils.setVendor(this.el, "Transition", "transform " + this.settings.animationDuration + "ms");
                }
                utils.setVendor(this.el, "Transform", "translate3d(0, " + index * -100 + "%, 0)");
                utils.setVendor(this.el, "Transition", "transform " + this.settings.animationDuration + "ms");
                var checkEnd = function() {
                    if (typeof self.settings.afterLoad === "function") self.settings.afterLoad(self.index);
                };
                this.el.addEventListener("transitionend", checkEnd);
                this.index = index;
                this.makeActive(index);
            };
            FullPage.prototype.moveUp = function() {
                if (this.index > 0) this.move(this.index - 1);
            };
            FullPage.prototype.moveDown = function() {
                if (this.index + 1 < this.sections.length) this.move(this.index + 1);
            };
            FullPage.prototype.moveTo = function(index) {
                this.move(index);
            };
            FullPage.prototype.enableTouch = function(el) {
                var self = this;
                var startCoords = 0;
                var endCoords = 0;
                var distance = 0;
                el.addEventListener("touchstart", (function(event) {
                    startCoords = event.changedTouches[0].pageY;
                }));
                el.addEventListener("touchmove", (function(event) {
                    event.preventDefault();
                }));
                el.addEventListener("touchend", (function(event) {
                    var time = (new Date).getTime();
                    endCoords = event.changedTouches[0].pageY;
                    distance = endCoords - startCoords;
                    if (time - Math.abs(self.lastAnimation) < self.settings.animationDuration) return;
                    if (distance < 0 && Math.abs(distance) > self.settings.touchLimit) self.moveDown(); else if (distance > 0 && Math.abs(distance) > self.settings.touchLimit) self.moveUp();
                    self.lastAnimation = time;
                }));
            };
            FullPage.prototype.mousewheel = function(event) {
                var time = (new Date).getTime();
                var delta = event.wheelDelta || -event.detail;
                if (time - Math.abs(this.lastAnimation) < this.settings.animationDuration) return;
                if (delta < 0) this.moveDown(); else this.moveUp();
                this.lastAnimation = time;
            };
            FullPage.prototype.keyboard = function(event) {
                var time = (new Date).getTime();
                if (time - Math.abs(this.lastAnimation) < this.settings.animationDuration) return;
                if (event.keyCode === 38) this.moveUp();
                if (event.keyCode === 40) this.moveDown();
                this.lastAnimation = time;
            };
            FullPage.prototype.paginationHTML = function() {
                var paginationList = "";
                for (var i = 0; i < this.sections.length; i++) paginationList += '<li><a data-index="' + i + '" href="#' + i + '"></a></li>';
                var pagination = document.createElement("ul");
                pagination.setAttribute("class", "slide-navigation");
                pagination.innerHTML = paginationList;
                this.body.appendChild(pagination);
            };
            window.FullPage = FullPage;
        })(window);
        document.addEventListener("DOMContentLoaded", (function() {
            var Example = Example || {};
            const canvasWidth = 1920;
            const canvasHeight = window.innerHeight;
            var numberInput = document.querySelector("#number");
            var sizeInput = document.querySelector("#size");
            var lengthInput = document.querySelector("#length");
            var timingInput = document.querySelector("#timing");
            Example.newtonsCradle = function() {
                var Engine = matter.Engine, Render = matter.Render, Runner = matter.Runner, MouseConstraint = (matter.Body, 
                matter.Composites, matter.MouseConstraint), Mouse = matter.Mouse, Composite = matter.Composite;
                var engine = Engine.create(), world = engine.world;
                var render = Render.create({
                    element: document.querySelector(".interaction__container"),
                    engine,
                    options: {
                        background: "#fff",
                        width: canvasWidth,
                        height: canvasHeight,
                        showVelocity: true,
                        wireframes: false
                    }
                });
                Render.run(render);
                var runner = Runner.create();
                Runner.run(runner, engine);
                function getInputValues() {
                    return {
                        number: parseInt(numberInput.value > 6 ? numberInput.value = 6 : numberInput.value) || 0,
                        size: parseFloat(sizeInput.value > 60 ? sizeInput.value = 60 : sizeInput.value) || 30,
                        length: parseFloat(lengthInput.value > 550 ? lengthInput.value = 550 : lengthInput.value) || 280
                    };
                }
                var mouse = Mouse.create(render.canvas);
                var mouseConstraint = MouseConstraint.create(engine, {
                    mouse,
                    constraint: {
                        stiffness: .2,
                        render: {
                            visible: false
                        }
                    }
                });
                function updateScene() {
                    var values = getInputValues();
                    Composite.clear(world);
                    Composite.add(world, mouseConstraint);
                    const cradleHeight = values.length + values.size / 2;
                    const cradleWidth = values.number * values.size;
                    var cradleCenterX = (render.options.width - cradleWidth * 1.95) / 2;
                    var cradleCenterY = (render.options.height - cradleHeight) / 2;
                    var cradle = Example.newtonsCradle.newtonsCradle(cradleCenterX, cradleCenterY, values.number, values.size, values.length, updateScene) || 1;
                    Composite.add(world, cradle);
                    engine.timing.timeScale = parseFloat(timingInput.value > 3 ? timingInput.value = 3 : timingInput.value) || 1;
                    console.log(engine.timing.timeScale);
                    render.mouse = mouse;
                }
                updateScene();
                numberInput.addEventListener("input", updateScene);
                sizeInput.addEventListener("input", updateScene);
                lengthInput.addEventListener("input", updateScene);
                timingInput.addEventListener("input", updateScene);
                Render.lookAt(render, {
                    min: {
                        x: 0,
                        y: 50
                    },
                    max: {
                        x: canvasWidth,
                        y: canvasHeight
                    }
                });
                return {
                    engine,
                    runner,
                    render,
                    canvas: render.canvas,
                    stop: function() {
                        matter.Render.stop(render);
                        matter.Runner.stop(runner);
                    }
                };
            };
            const exBtn = document.querySelector(".interaction__panel-expand");
            const exPanel = document.querySelector(".interaction__expand");
            const exReset = document.querySelector(".interaction__reset");
            let resetEventAdded = false;
            Example.newtonsCradle.newtonsCradle = function(xx, yy, number, size, length, updateScene) {
                var Composite = matter.Composite, Constraint = matter.Constraint, Bodies = matter.Bodies;
                const input = document.querySelector(".air");
                const updateFrictionAir = function() {
                    return parseFloat(input.value) || 0;
                };
                input.addEventListener("input", (function() {
                    for (var i = 0; i < number; i++) circles[i].frictionAir = updateFrictionAir();
                }));
                var newtonsCradle = Composite.create({
                    label: "Newtons Cradle"
                });
                var circles = [];
                var constraints = [];
                var newLength = parseFloat(lengthInput.value);
                function updateInputCount() {
                    var desiredCount = parseInt(numberInput.value);
                    var currentCount = exPanel.querySelectorAll(".interaction__input").length;
                    while (desiredCount > currentCount) {
                        const label = document.createElement("label");
                        label.className = "interaction__label";
                        label.textContent = `Длина нити №${currentCount + 1}`;
                        const input = document.createElement("input");
                        input.className = `interaction__input interaction__input--${currentCount + 1} interaction__input--length`;
                        input.type = "number";
                        input.value = newLength;
                        label.appendChild(input);
                        exPanel.appendChild(label);
                        input.addEventListener("input", (function(event) {
                            var newInputValue = parseFloat(event.target.value);
                            if (!isNaN(newInputValue)) updateScene();
                        }));
                        currentCount++;
                    }
                    while (desiredCount < currentCount) {
                        exPanel.removeChild(exPanel.lastChild);
                        currentCount--;
                    }
                }
                updateInputCount();
                const inputs = document.querySelectorAll(".interaction__input--length");
                if (!resetEventAdded) {
                    exReset.addEventListener("click", (function() {
                        inputs.forEach((e => {
                            e.value = newLength;
                            updateScene();
                        }));
                    }));
                    resetEventAdded = true;
                }
                inputs.forEach((e => {
                    e.value > 550 ? e.value = 550 : e.value;
                }));
                for (var i = 0; i < number && i < 6; i++) {
                    let val = exPanel.querySelector(`.interaction__input--${i + 1}`).value;
                    var separation = 1.9;
                    var circle = Bodies.circle(xx + i * (size * separation), yy + parseInt(val), size, {
                        inertia: 1 / 0,
                        restitution: 1,
                        friction: 1,
                        frictionAir: updateFrictionAir(),
                        slop: size * .02,
                        label: "Circle Body",
                        render: {
                            fillStyle: "#242424",
                            visible: true,
                            opacity: 1,
                            strokeStyle: "#242424",
                            lineWidth: 1
                        }
                    });
                    var constraint = Constraint.create({
                        pointA: {
                            x: xx + i * (size * separation),
                            y: yy
                        },
                        bodyB: circle,
                        length: parseInt(val)
                    });
                    constraint.render.strokeStyle = "#242424";
                    constraint.render.lineWidth = 1;
                    Composite.addBody(newtonsCradle, circle);
                    Composite.addConstraint(newtonsCradle, constraint);
                    circles.push(circle);
                    constraints.push(constraint);
                    console.log(size);
                }
                return newtonsCradle;
            };
            if (typeof module !== "undefined") module.exports = Example.newtonsCradle;
            Example.newtonsCradle();
            const expandPanel = () => {
                exPanel.classList.toggle("visually-hidden");
                exBtn.classList.toggle("active");
            };
            exBtn.addEventListener("click", expandPanel);
            new FullPage(".main", {
                section: ".panel-section",
                pagination: false,
                touchLimit: 30
            });
        }));
        window["FLS"] = true;
        isWebp();
        tabs();
    })();
})();