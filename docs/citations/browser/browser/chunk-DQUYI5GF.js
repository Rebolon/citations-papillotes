import {
  APP_BOOTSTRAP_LISTENER,
  ApplicationRef,
  BehaviorSubject,
  ChangeDetectorRef,
  Compiler,
  ConnectableObservable,
  Console,
  EMPTY,
  ElementRef,
  EmptyError,
  EnvironmentInjector,
  EventEmitter,
  InitialRenderPendingTasks,
  InjectFlags,
  InjectionToken,
  Injector,
  Location,
  LocationStrategy,
  NgModuleFactory$1,
  NgZone,
  Renderer2,
  RuntimeError,
  Subject,
  Subscription,
  Title,
  ViewContainerRef,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  catchError,
  combineLatest,
  concat,
  concatMap,
  createEnvironmentInjector,
  defaultIfEmpty,
  defer,
  distinct,
  filter,
  finalize,
  first,
  from,
  inject,
  isInjectable,
  isNgModule,
  isObservable,
  isPromise,
  isStandalone,
  last,
  makeEnvironmentProviders,
  map,
  mapTo,
  mergeAll,
  mergeMap,
  of,
  pipe,
  refCount,
  reflectComponentType,
  scan,
  startWith,
  switchMap,
  take,
  takeLast,
  takeUntil,
  tap,
  throwError,
  toArray,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵattribute,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵsanitizeUrlOrResourceUrl
} from "./chunk-XICENEYU.js";

// node_modules/@angular/router/fesm2022/router.mjs
var PRIMARY_OUTLET = "primary";
var RouteTitleKey = /* @__PURE__ */ Symbol("RouteTitle");
var ParamsAsMap = class {
  constructor(params) {
    this.params = params || {};
  }
  has(name) {
    return Object.prototype.hasOwnProperty.call(this.params, name);
  }
  get(name) {
    if (this.has(name)) {
      const v = this.params[name];
      return Array.isArray(v) ? v[0] : v;
    }
    return null;
  }
  getAll(name) {
    if (this.has(name)) {
      const v = this.params[name];
      return Array.isArray(v) ? v : [v];
    }
    return [];
  }
  get keys() {
    return Object.keys(this.params);
  }
};
function convertToParamMap(params) {
  return new ParamsAsMap(params);
}
function defaultUrlMatcher(segments, segmentGroup, route) {
  const parts = route.path.split("/");
  if (parts.length > segments.length) {
    return null;
  }
  if (route.pathMatch === "full" && (segmentGroup.hasChildren() || parts.length < segments.length)) {
    return null;
  }
  const posParams = {};
  for (let index = 0; index < parts.length; index++) {
    const part = parts[index];
    const segment = segments[index];
    const isParameter = part.startsWith(":");
    if (isParameter) {
      posParams[part.substring(1)] = segment;
    } else if (part !== segment.path) {
      return null;
    }
  }
  return {
    consumed: segments.slice(0, parts.length),
    posParams
  };
}
function shallowEqualArrays(a, b) {
  if (a.length !== b.length)
    return false;
  for (let i = 0; i < a.length; ++i) {
    if (!shallowEqual(a[i], b[i]))
      return false;
  }
  return true;
}
function shallowEqual(a, b) {
  const k1 = a ? getDataKeys(a) : void 0;
  const k2 = b ? getDataKeys(b) : void 0;
  if (!k1 || !k2 || k1.length != k2.length) {
    return false;
  }
  let key;
  for (let i = 0; i < k1.length; i++) {
    key = k1[i];
    if (!equalArraysOrString(a[key], b[key])) {
      return false;
    }
  }
  return true;
}
function getDataKeys(obj) {
  return [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)];
}
function equalArraysOrString(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length)
      return false;
    const aSorted = [...a].sort();
    const bSorted = [...b].sort();
    return aSorted.every((val, index) => bSorted[index] === val);
  } else {
    return a === b;
  }
}
function last2(a) {
  return a.length > 0 ? a[a.length - 1] : null;
}
function wrapIntoObservable(value) {
  if (isObservable(value)) {
    return value;
  }
  if (isPromise(value)) {
    return from(Promise.resolve(value));
  }
  return of(value);
}
var pathCompareMap = {
  "exact": equalSegmentGroups,
  "subset": containsSegmentGroup
};
var paramCompareMap = {
  "exact": equalParams,
  "subset": containsParams,
  "ignored": () => true
};
function containsTree(container, containee, options) {
  return pathCompareMap[options.paths](container.root, containee.root, options.matrixParams) && paramCompareMap[options.queryParams](container.queryParams, containee.queryParams) && !(options.fragment === "exact" && container.fragment !== containee.fragment);
}
function equalParams(container, containee) {
  return shallowEqual(container, containee);
}
function equalSegmentGroups(container, containee, matrixParams) {
  if (!equalPath(container.segments, containee.segments))
    return false;
  if (!matrixParamsMatch(container.segments, containee.segments, matrixParams)) {
    return false;
  }
  if (container.numberOfChildren !== containee.numberOfChildren)
    return false;
  for (const c in containee.children) {
    if (!container.children[c])
      return false;
    if (!equalSegmentGroups(container.children[c], containee.children[c], matrixParams))
      return false;
  }
  return true;
}
function containsParams(container, containee) {
  return Object.keys(containee).length <= Object.keys(container).length && Object.keys(containee).every((key) => equalArraysOrString(container[key], containee[key]));
}
function containsSegmentGroup(container, containee, matrixParams) {
  return containsSegmentGroupHelper(container, containee, containee.segments, matrixParams);
}
function containsSegmentGroupHelper(container, containee, containeePaths, matrixParams) {
  if (container.segments.length > containeePaths.length) {
    const current = container.segments.slice(0, containeePaths.length);
    if (!equalPath(current, containeePaths))
      return false;
    if (containee.hasChildren())
      return false;
    if (!matrixParamsMatch(current, containeePaths, matrixParams))
      return false;
    return true;
  } else if (container.segments.length === containeePaths.length) {
    if (!equalPath(container.segments, containeePaths))
      return false;
    if (!matrixParamsMatch(container.segments, containeePaths, matrixParams))
      return false;
    for (const c in containee.children) {
      if (!container.children[c])
        return false;
      if (!containsSegmentGroup(container.children[c], containee.children[c], matrixParams)) {
        return false;
      }
    }
    return true;
  } else {
    const current = containeePaths.slice(0, container.segments.length);
    const next = containeePaths.slice(container.segments.length);
    if (!equalPath(container.segments, current))
      return false;
    if (!matrixParamsMatch(container.segments, current, matrixParams))
      return false;
    if (!container.children[PRIMARY_OUTLET])
      return false;
    return containsSegmentGroupHelper(container.children[PRIMARY_OUTLET], containee, next, matrixParams);
  }
}
function matrixParamsMatch(containerPaths, containeePaths, options) {
  return containeePaths.every((containeeSegment, i) => {
    return paramCompareMap[options](containerPaths[i].parameters, containeeSegment.parameters);
  });
}
var UrlTree = class {
  constructor(root = new UrlSegmentGroup([], {}), queryParams = {}, fragment = null) {
    this.root = root;
    this.queryParams = queryParams;
    this.fragment = fragment;
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (root.segments.length > 0) {
        throw new RuntimeError(4015, "The root `UrlSegmentGroup` should not contain `segments`. Instead, these segments belong in the `children` so they can be associated with a named outlet.");
      }
    }
  }
  get queryParamMap() {
    if (!this._queryParamMap) {
      this._queryParamMap = convertToParamMap(this.queryParams);
    }
    return this._queryParamMap;
  }
  /** @docsNotRequired */
  toString() {
    return DEFAULT_SERIALIZER.serialize(this);
  }
};
var UrlSegmentGroup = class {
  constructor(segments, children) {
    this.segments = segments;
    this.children = children;
    this.parent = null;
    Object.values(children).forEach((v) => v.parent = this);
  }
  /** Whether the segment has child segments */
  hasChildren() {
    return this.numberOfChildren > 0;
  }
  /** Number of child segments */
  get numberOfChildren() {
    return Object.keys(this.children).length;
  }
  /** @docsNotRequired */
  toString() {
    return serializePaths(this);
  }
};
var UrlSegment = class {
  constructor(path, parameters) {
    this.path = path;
    this.parameters = parameters;
  }
  get parameterMap() {
    if (!this._parameterMap) {
      this._parameterMap = convertToParamMap(this.parameters);
    }
    return this._parameterMap;
  }
  /** @docsNotRequired */
  toString() {
    return serializePath(this);
  }
};
function equalSegments(as, bs) {
  return equalPath(as, bs) && as.every((a, i) => shallowEqual(a.parameters, bs[i].parameters));
}
function equalPath(as, bs) {
  if (as.length !== bs.length)
    return false;
  return as.every((a, i) => a.path === bs[i].path);
}
function mapChildrenIntoArray(segment, fn) {
  let res = [];
  Object.entries(segment.children).forEach(([childOutlet, child]) => {
    if (childOutlet === PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  Object.entries(segment.children).forEach(([childOutlet, child]) => {
    if (childOutlet !== PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  return res;
}
var UrlSerializer = /* @__PURE__ */ (() => {
  const _UrlSerializer = class _UrlSerializer {
  };
  _UrlSerializer.\u0275fac = function UrlSerializer_Factory(t) {
    return new (t || _UrlSerializer)();
  };
  _UrlSerializer.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UrlSerializer,
    factory: () => (() => new DefaultUrlSerializer())(),
    providedIn: "root"
  });
  let UrlSerializer2 = _UrlSerializer;
  return UrlSerializer2;
})();
var DefaultUrlSerializer = class {
  /** Parses a url into a `UrlTree` */
  parse(url) {
    const p = new UrlParser(url);
    return new UrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
  }
  /** Converts a `UrlTree` into a url */
  serialize(tree2) {
    const segment = `/${serializeSegment(tree2.root, true)}`;
    const query = serializeQueryParams(tree2.queryParams);
    const fragment = typeof tree2.fragment === `string` ? `#${encodeUriFragment(tree2.fragment)}` : "";
    return `${segment}${query}${fragment}`;
  }
};
var DEFAULT_SERIALIZER = /* @__PURE__ */ new DefaultUrlSerializer();
function serializePaths(segment) {
  return segment.segments.map((p) => serializePath(p)).join("/");
}
function serializeSegment(segment, root) {
  if (!segment.hasChildren()) {
    return serializePaths(segment);
  }
  if (root) {
    const primary = segment.children[PRIMARY_OUTLET] ? serializeSegment(segment.children[PRIMARY_OUTLET], false) : "";
    const children = [];
    Object.entries(segment.children).forEach(([k, v]) => {
      if (k !== PRIMARY_OUTLET) {
        children.push(`${k}:${serializeSegment(v, false)}`);
      }
    });
    return children.length > 0 ? `${primary}(${children.join("//")})` : primary;
  } else {
    const children = mapChildrenIntoArray(segment, (v, k) => {
      if (k === PRIMARY_OUTLET) {
        return [serializeSegment(segment.children[PRIMARY_OUTLET], false)];
      }
      return [`${k}:${serializeSegment(v, false)}`];
    });
    if (Object.keys(segment.children).length === 1 && segment.children[PRIMARY_OUTLET] != null) {
      return `${serializePaths(segment)}/${children[0]}`;
    }
    return `${serializePaths(segment)}/(${children.join("//")})`;
  }
}
function encodeUriString(s) {
  return encodeURIComponent(s).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",");
}
function encodeUriQuery(s) {
  return encodeUriString(s).replace(/%3B/gi, ";");
}
function encodeUriFragment(s) {
  return encodeURI(s);
}
function encodeUriSegment(s) {
  return encodeUriString(s).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&");
}
function decode(s) {
  return decodeURIComponent(s);
}
function decodeQuery(s) {
  return decode(s.replace(/\+/g, "%20"));
}
function serializePath(path) {
  return `${encodeUriSegment(path.path)}${serializeMatrixParams(path.parameters)}`;
}
function serializeMatrixParams(params) {
  return Object.keys(params).map((key) => `;${encodeUriSegment(key)}=${encodeUriSegment(params[key])}`).join("");
}
function serializeQueryParams(params) {
  const strParams = Object.keys(params).map((name) => {
    const value = params[name];
    return Array.isArray(value) ? value.map((v) => `${encodeUriQuery(name)}=${encodeUriQuery(v)}`).join("&") : `${encodeUriQuery(name)}=${encodeUriQuery(value)}`;
  }).filter((s) => !!s);
  return strParams.length ? `?${strParams.join("&")}` : "";
}
var SEGMENT_RE = /^[^\/()?;#]+/;
function matchSegments(str) {
  const match2 = str.match(SEGMENT_RE);
  return match2 ? match2[0] : "";
}
var MATRIX_PARAM_SEGMENT_RE = /^[^\/()?;=#]+/;
function matchMatrixKeySegments(str) {
  const match2 = str.match(MATRIX_PARAM_SEGMENT_RE);
  return match2 ? match2[0] : "";
}
var QUERY_PARAM_RE = /^[^=?&#]+/;
function matchQueryParams(str) {
  const match2 = str.match(QUERY_PARAM_RE);
  return match2 ? match2[0] : "";
}
var QUERY_PARAM_VALUE_RE = /^[^&#]+/;
function matchUrlQueryParamValue(str) {
  const match2 = str.match(QUERY_PARAM_VALUE_RE);
  return match2 ? match2[0] : "";
}
var UrlParser = class {
  constructor(url) {
    this.url = url;
    this.remaining = url;
  }
  parseRootSegment() {
    this.consumeOptional("/");
    if (this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#")) {
      return new UrlSegmentGroup([], {});
    }
    return new UrlSegmentGroup([], this.parseChildren());
  }
  parseQueryParams() {
    const params = {};
    if (this.consumeOptional("?")) {
      do {
        this.parseQueryParam(params);
      } while (this.consumeOptional("&"));
    }
    return params;
  }
  parseFragment() {
    return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null;
  }
  parseChildren() {
    if (this.remaining === "") {
      return {};
    }
    this.consumeOptional("/");
    const segments = [];
    if (!this.peekStartsWith("(")) {
      segments.push(this.parseSegment());
    }
    while (this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(")) {
      this.capture("/");
      segments.push(this.parseSegment());
    }
    let children = {};
    if (this.peekStartsWith("/(")) {
      this.capture("/");
      children = this.parseParens(true);
    }
    let res = {};
    if (this.peekStartsWith("(")) {
      res = this.parseParens(false);
    }
    if (segments.length > 0 || Object.keys(children).length > 0) {
      res[PRIMARY_OUTLET] = new UrlSegmentGroup(segments, children);
    }
    return res;
  }
  // parse a segment with its matrix parameters
  // ie `name;k1=v1;k2`
  parseSegment() {
    const path = matchSegments(this.remaining);
    if (path === "" && this.peekStartsWith(";")) {
      throw new RuntimeError(4009, (typeof ngDevMode === "undefined" || ngDevMode) && `Empty path url segment cannot have parameters: '${this.remaining}'.`);
    }
    this.capture(path);
    return new UrlSegment(decode(path), this.parseMatrixParams());
  }
  parseMatrixParams() {
    const params = {};
    while (this.consumeOptional(";")) {
      this.parseParam(params);
    }
    return params;
  }
  parseParam(params) {
    const key = matchMatrixKeySegments(this.remaining);
    if (!key) {
      return;
    }
    this.capture(key);
    let value = "";
    if (this.consumeOptional("=")) {
      const valueMatch = matchSegments(this.remaining);
      if (valueMatch) {
        value = valueMatch;
        this.capture(value);
      }
    }
    params[decode(key)] = decode(value);
  }
  // Parse a single query parameter `name[=value]`
  parseQueryParam(params) {
    const key = matchQueryParams(this.remaining);
    if (!key) {
      return;
    }
    this.capture(key);
    let value = "";
    if (this.consumeOptional("=")) {
      const valueMatch = matchUrlQueryParamValue(this.remaining);
      if (valueMatch) {
        value = valueMatch;
        this.capture(value);
      }
    }
    const decodedKey = decodeQuery(key);
    const decodedVal = decodeQuery(value);
    if (params.hasOwnProperty(decodedKey)) {
      let currentVal = params[decodedKey];
      if (!Array.isArray(currentVal)) {
        currentVal = [currentVal];
        params[decodedKey] = currentVal;
      }
      currentVal.push(decodedVal);
    } else {
      params[decodedKey] = decodedVal;
    }
  }
  // parse `(a/b//outlet_name:c/d)`
  parseParens(allowPrimary) {
    const segments = {};
    this.capture("(");
    while (!this.consumeOptional(")") && this.remaining.length > 0) {
      const path = matchSegments(this.remaining);
      const next = this.remaining[path.length];
      if (next !== "/" && next !== ")" && next !== ";") {
        throw new RuntimeError(4010, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot parse url '${this.url}'`);
      }
      let outletName = void 0;
      if (path.indexOf(":") > -1) {
        outletName = path.slice(0, path.indexOf(":"));
        this.capture(outletName);
        this.capture(":");
      } else if (allowPrimary) {
        outletName = PRIMARY_OUTLET;
      }
      const children = this.parseChildren();
      segments[outletName] = Object.keys(children).length === 1 ? children[PRIMARY_OUTLET] : new UrlSegmentGroup([], children);
      this.consumeOptional("//");
    }
    return segments;
  }
  peekStartsWith(str) {
    return this.remaining.startsWith(str);
  }
  // Consumes the prefix when it is present and returns whether it has been consumed
  consumeOptional(str) {
    if (this.peekStartsWith(str)) {
      this.remaining = this.remaining.substring(str.length);
      return true;
    }
    return false;
  }
  capture(str) {
    if (!this.consumeOptional(str)) {
      throw new RuntimeError(4011, (typeof ngDevMode === "undefined" || ngDevMode) && `Expected "${str}".`);
    }
  }
};
function createRoot(rootCandidate) {
  return rootCandidate.segments.length > 0 ? new UrlSegmentGroup([], {
    [PRIMARY_OUTLET]: rootCandidate
  }) : rootCandidate;
}
function squashSegmentGroup(segmentGroup) {
  const newChildren = {};
  for (const childOutlet of Object.keys(segmentGroup.children)) {
    const child = segmentGroup.children[childOutlet];
    const childCandidate = squashSegmentGroup(child);
    if (childOutlet === PRIMARY_OUTLET && childCandidate.segments.length === 0 && childCandidate.hasChildren()) {
      for (const [grandChildOutlet, grandChild] of Object.entries(childCandidate.children)) {
        newChildren[grandChildOutlet] = grandChild;
      }
    } else if (childCandidate.segments.length > 0 || childCandidate.hasChildren()) {
      newChildren[childOutlet] = childCandidate;
    }
  }
  const s = new UrlSegmentGroup(segmentGroup.segments, newChildren);
  return mergeTrivialChildren(s);
}
function mergeTrivialChildren(s) {
  if (s.numberOfChildren === 1 && s.children[PRIMARY_OUTLET]) {
    const c = s.children[PRIMARY_OUTLET];
    return new UrlSegmentGroup(s.segments.concat(c.segments), c.children);
  }
  return s;
}
function isUrlTree(v) {
  return v instanceof UrlTree;
}
function createUrlTreeFromSnapshot(relativeTo, commands, queryParams = null, fragment = null) {
  const relativeToUrlSegmentGroup = createSegmentGroupFromRoute(relativeTo);
  return createUrlTreeFromSegmentGroup(relativeToUrlSegmentGroup, commands, queryParams, fragment);
}
function createSegmentGroupFromRoute(route) {
  let targetGroup;
  function createSegmentGroupFromRouteRecursive(currentRoute) {
    const childOutlets = {};
    for (const childSnapshot of currentRoute.children) {
      const root = createSegmentGroupFromRouteRecursive(childSnapshot);
      childOutlets[childSnapshot.outlet] = root;
    }
    const segmentGroup = new UrlSegmentGroup(currentRoute.url, childOutlets);
    if (currentRoute === route) {
      targetGroup = segmentGroup;
    }
    return segmentGroup;
  }
  const rootCandidate = createSegmentGroupFromRouteRecursive(route.root);
  const rootSegmentGroup = createRoot(rootCandidate);
  return targetGroup ?? rootSegmentGroup;
}
function createUrlTreeFromSegmentGroup(relativeTo, commands, queryParams, fragment) {
  let root = relativeTo;
  while (root.parent) {
    root = root.parent;
  }
  if (commands.length === 0) {
    return tree(root, root, root, queryParams, fragment);
  }
  const nav = computeNavigation(commands);
  if (nav.toRoot()) {
    return tree(root, root, new UrlSegmentGroup([], {}), queryParams, fragment);
  }
  const position = findStartingPositionForTargetGroup(nav, root, relativeTo);
  const newSegmentGroup = position.processChildren ? updateSegmentGroupChildren(position.segmentGroup, position.index, nav.commands) : updateSegmentGroup(position.segmentGroup, position.index, nav.commands);
  return tree(root, position.segmentGroup, newSegmentGroup, queryParams, fragment);
}
function isMatrixParams(command) {
  return typeof command === "object" && command != null && !command.outlets && !command.segmentPath;
}
function isCommandWithOutlets(command) {
  return typeof command === "object" && command != null && command.outlets;
}
function tree(oldRoot, oldSegmentGroup, newSegmentGroup, queryParams, fragment) {
  let qp = {};
  if (queryParams) {
    Object.entries(queryParams).forEach(([name, value]) => {
      qp[name] = Array.isArray(value) ? value.map((v) => `${v}`) : `${value}`;
    });
  }
  let rootCandidate;
  if (oldRoot === oldSegmentGroup) {
    rootCandidate = newSegmentGroup;
  } else {
    rootCandidate = replaceSegment(oldRoot, oldSegmentGroup, newSegmentGroup);
  }
  const newRoot = createRoot(squashSegmentGroup(rootCandidate));
  return new UrlTree(newRoot, qp, fragment);
}
function replaceSegment(current, oldSegment, newSegment) {
  const children = {};
  Object.entries(current.children).forEach(([outletName, c]) => {
    if (c === oldSegment) {
      children[outletName] = newSegment;
    } else {
      children[outletName] = replaceSegment(c, oldSegment, newSegment);
    }
  });
  return new UrlSegmentGroup(current.segments, children);
}
var Navigation = class {
  constructor(isAbsolute, numberOfDoubleDots, commands) {
    this.isAbsolute = isAbsolute;
    this.numberOfDoubleDots = numberOfDoubleDots;
    this.commands = commands;
    if (isAbsolute && commands.length > 0 && isMatrixParams(commands[0])) {
      throw new RuntimeError(4003, (typeof ngDevMode === "undefined" || ngDevMode) && "Root segment cannot have matrix parameters");
    }
    const cmdWithOutlet = commands.find(isCommandWithOutlets);
    if (cmdWithOutlet && cmdWithOutlet !== last2(commands)) {
      throw new RuntimeError(4004, (typeof ngDevMode === "undefined" || ngDevMode) && "{outlets:{}} has to be the last command");
    }
  }
  toRoot() {
    return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/";
  }
};
function computeNavigation(commands) {
  if (typeof commands[0] === "string" && commands.length === 1 && commands[0] === "/") {
    return new Navigation(true, 0, commands);
  }
  let numberOfDoubleDots = 0;
  let isAbsolute = false;
  const res = commands.reduce((res2, cmd, cmdIdx) => {
    if (typeof cmd === "object" && cmd != null) {
      if (cmd.outlets) {
        const outlets = {};
        Object.entries(cmd.outlets).forEach(([name, commands2]) => {
          outlets[name] = typeof commands2 === "string" ? commands2.split("/") : commands2;
        });
        return [...res2, {
          outlets
        }];
      }
      if (cmd.segmentPath) {
        return [...res2, cmd.segmentPath];
      }
    }
    if (!(typeof cmd === "string")) {
      return [...res2, cmd];
    }
    if (cmdIdx === 0) {
      cmd.split("/").forEach((urlPart, partIndex) => {
        if (partIndex == 0 && urlPart === ".") {
        } else if (partIndex == 0 && urlPart === "") {
          isAbsolute = true;
        } else if (urlPart === "..") {
          numberOfDoubleDots++;
        } else if (urlPart != "") {
          res2.push(urlPart);
        }
      });
      return res2;
    }
    return [...res2, cmd];
  }, []);
  return new Navigation(isAbsolute, numberOfDoubleDots, res);
}
var Position = class {
  constructor(segmentGroup, processChildren, index) {
    this.segmentGroup = segmentGroup;
    this.processChildren = processChildren;
    this.index = index;
  }
};
function findStartingPositionForTargetGroup(nav, root, target) {
  if (nav.isAbsolute) {
    return new Position(root, true, 0);
  }
  if (!target) {
    return new Position(root, false, NaN);
  }
  if (target.parent === null) {
    return new Position(target, true, 0);
  }
  const modifier = isMatrixParams(nav.commands[0]) ? 0 : 1;
  const index = target.segments.length - 1 + modifier;
  return createPositionApplyingDoubleDots(target, index, nav.numberOfDoubleDots);
}
function createPositionApplyingDoubleDots(group, index, numberOfDoubleDots) {
  let g = group;
  let ci = index;
  let dd = numberOfDoubleDots;
  while (dd > ci) {
    dd -= ci;
    g = g.parent;
    if (!g) {
      throw new RuntimeError(4005, (typeof ngDevMode === "undefined" || ngDevMode) && "Invalid number of '../'");
    }
    ci = g.segments.length;
  }
  return new Position(g, false, ci - dd);
}
function getOutlets(commands) {
  if (isCommandWithOutlets(commands[0])) {
    return commands[0].outlets;
  }
  return {
    [PRIMARY_OUTLET]: commands
  };
}
function updateSegmentGroup(segmentGroup, startIndex, commands) {
  if (!segmentGroup) {
    segmentGroup = new UrlSegmentGroup([], {});
  }
  if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
    return updateSegmentGroupChildren(segmentGroup, startIndex, commands);
  }
  const m = prefixedWith(segmentGroup, startIndex, commands);
  const slicedCommands = commands.slice(m.commandIndex);
  if (m.match && m.pathIndex < segmentGroup.segments.length) {
    const g = new UrlSegmentGroup(segmentGroup.segments.slice(0, m.pathIndex), {});
    g.children[PRIMARY_OUTLET] = new UrlSegmentGroup(segmentGroup.segments.slice(m.pathIndex), segmentGroup.children);
    return updateSegmentGroupChildren(g, 0, slicedCommands);
  } else if (m.match && slicedCommands.length === 0) {
    return new UrlSegmentGroup(segmentGroup.segments, {});
  } else if (m.match && !segmentGroup.hasChildren()) {
    return createNewSegmentGroup(segmentGroup, startIndex, commands);
  } else if (m.match) {
    return updateSegmentGroupChildren(segmentGroup, 0, slicedCommands);
  } else {
    return createNewSegmentGroup(segmentGroup, startIndex, commands);
  }
}
function updateSegmentGroupChildren(segmentGroup, startIndex, commands) {
  if (commands.length === 0) {
    return new UrlSegmentGroup(segmentGroup.segments, {});
  } else {
    const outlets = getOutlets(commands);
    const children = {};
    if (Object.keys(outlets).some((o) => o !== PRIMARY_OUTLET) && segmentGroup.children[PRIMARY_OUTLET] && segmentGroup.numberOfChildren === 1 && segmentGroup.children[PRIMARY_OUTLET].segments.length === 0) {
      const childrenOfEmptyChild = updateSegmentGroupChildren(segmentGroup.children[PRIMARY_OUTLET], startIndex, commands);
      return new UrlSegmentGroup(segmentGroup.segments, childrenOfEmptyChild.children);
    }
    Object.entries(outlets).forEach(([outlet, commands2]) => {
      if (typeof commands2 === "string") {
        commands2 = [commands2];
      }
      if (commands2 !== null) {
        children[outlet] = updateSegmentGroup(segmentGroup.children[outlet], startIndex, commands2);
      }
    });
    Object.entries(segmentGroup.children).forEach(([childOutlet, child]) => {
      if (outlets[childOutlet] === void 0) {
        children[childOutlet] = child;
      }
    });
    return new UrlSegmentGroup(segmentGroup.segments, children);
  }
}
function prefixedWith(segmentGroup, startIndex, commands) {
  let currentCommandIndex = 0;
  let currentPathIndex = startIndex;
  const noMatch2 = {
    match: false,
    pathIndex: 0,
    commandIndex: 0
  };
  while (currentPathIndex < segmentGroup.segments.length) {
    if (currentCommandIndex >= commands.length)
      return noMatch2;
    const path = segmentGroup.segments[currentPathIndex];
    const command = commands[currentCommandIndex];
    if (isCommandWithOutlets(command)) {
      break;
    }
    const curr = `${command}`;
    const next = currentCommandIndex < commands.length - 1 ? commands[currentCommandIndex + 1] : null;
    if (currentPathIndex > 0 && curr === void 0)
      break;
    if (curr && next && typeof next === "object" && next.outlets === void 0) {
      if (!compare(curr, next, path))
        return noMatch2;
      currentCommandIndex += 2;
    } else {
      if (!compare(curr, {}, path))
        return noMatch2;
      currentCommandIndex++;
    }
    currentPathIndex++;
  }
  return {
    match: true,
    pathIndex: currentPathIndex,
    commandIndex: currentCommandIndex
  };
}
function createNewSegmentGroup(segmentGroup, startIndex, commands) {
  const paths = segmentGroup.segments.slice(0, startIndex);
  let i = 0;
  while (i < commands.length) {
    const command = commands[i];
    if (isCommandWithOutlets(command)) {
      const children = createNewSegmentChildren(command.outlets);
      return new UrlSegmentGroup(paths, children);
    }
    if (i === 0 && isMatrixParams(commands[0])) {
      const p = segmentGroup.segments[startIndex];
      paths.push(new UrlSegment(p.path, stringify(commands[0])));
      i++;
      continue;
    }
    const curr = isCommandWithOutlets(command) ? command.outlets[PRIMARY_OUTLET] : `${command}`;
    const next = i < commands.length - 1 ? commands[i + 1] : null;
    if (curr && next && isMatrixParams(next)) {
      paths.push(new UrlSegment(curr, stringify(next)));
      i += 2;
    } else {
      paths.push(new UrlSegment(curr, {}));
      i++;
    }
  }
  return new UrlSegmentGroup(paths, {});
}
function createNewSegmentChildren(outlets) {
  const children = {};
  Object.entries(outlets).forEach(([outlet, commands]) => {
    if (typeof commands === "string") {
      commands = [commands];
    }
    if (commands !== null) {
      children[outlet] = createNewSegmentGroup(new UrlSegmentGroup([], {}), 0, commands);
    }
  });
  return children;
}
function stringify(params) {
  const res = {};
  Object.entries(params).forEach(([k, v]) => res[k] = `${v}`);
  return res;
}
function compare(path, params, segment) {
  return path == segment.path && shallowEqual(params, segment.parameters);
}
var IMPERATIVE_NAVIGATION = "imperative";
var RouterEvent = class {
  constructor(id, url) {
    this.id = id;
    this.url = url;
  }
};
var NavigationStart = class extends RouterEvent {
  constructor(id, url, navigationTrigger = "imperative", restoredState = null) {
    super(id, url);
    this.type = 0;
    this.navigationTrigger = navigationTrigger;
    this.restoredState = restoredState;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
  }
};
var NavigationEnd = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.type = 1;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
  }
};
var NavigationCancel = class extends RouterEvent {
  constructor(id, url, reason, code) {
    super(id, url);
    this.reason = reason;
    this.code = code;
    this.type = 2;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
  }
};
var NavigationSkipped = class extends RouterEvent {
  constructor(id, url, reason, code) {
    super(id, url);
    this.reason = reason;
    this.code = code;
    this.type = 16;
  }
};
var NavigationError = class extends RouterEvent {
  constructor(id, url, error, target) {
    super(id, url);
    this.error = error;
    this.target = target;
    this.type = 3;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
  }
};
var RoutesRecognized = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.type = 4;
  }
  /** @docsNotRequired */
  toString() {
    return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var GuardsCheckStart = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.type = 7;
  }
  toString() {
    return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var GuardsCheckEnd = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects, state, shouldActivate) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.shouldActivate = shouldActivate;
    this.type = 8;
  }
  toString() {
    return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
  }
};
var ResolveStart = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.type = 5;
  }
  toString() {
    return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var ResolveEnd = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.type = 6;
  }
  toString() {
    return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var RouteConfigLoadStart = class {
  constructor(route) {
    this.route = route;
    this.type = 9;
  }
  toString() {
    return `RouteConfigLoadStart(path: ${this.route.path})`;
  }
};
var RouteConfigLoadEnd = class {
  constructor(route) {
    this.route = route;
    this.type = 10;
  }
  toString() {
    return `RouteConfigLoadEnd(path: ${this.route.path})`;
  }
};
var ChildActivationStart = class {
  constructor(snapshot) {
    this.snapshot = snapshot;
    this.type = 11;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ChildActivationStart(path: '${path}')`;
  }
};
var ChildActivationEnd = class {
  constructor(snapshot) {
    this.snapshot = snapshot;
    this.type = 12;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ChildActivationEnd(path: '${path}')`;
  }
};
var ActivationStart = class {
  constructor(snapshot) {
    this.snapshot = snapshot;
    this.type = 13;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ActivationStart(path: '${path}')`;
  }
};
var ActivationEnd = class {
  constructor(snapshot) {
    this.snapshot = snapshot;
    this.type = 14;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ActivationEnd(path: '${path}')`;
  }
};
var BeforeActivateRoutes = class {
};
var RedirectRequest = class {
  constructor(url) {
    this.url = url;
  }
};
var OutletContext = class {
  constructor() {
    this.outlet = null;
    this.route = null;
    this.injector = null;
    this.children = new ChildrenOutletContexts();
    this.attachRef = null;
  }
};
var ChildrenOutletContexts = /* @__PURE__ */ (() => {
  const _ChildrenOutletContexts = class _ChildrenOutletContexts {
    constructor() {
      this.contexts = /* @__PURE__ */ new Map();
    }
    /** Called when a `RouterOutlet` directive is instantiated */
    onChildOutletCreated(childName, outlet) {
      const context = this.getOrCreateContext(childName);
      context.outlet = outlet;
      this.contexts.set(childName, context);
    }
    /**
     * Called when a `RouterOutlet` directive is destroyed.
     * We need to keep the context as the outlet could be destroyed inside a NgIf and might be
     * re-created later.
     */
    onChildOutletDestroyed(childName) {
      const context = this.getContext(childName);
      if (context) {
        context.outlet = null;
        context.attachRef = null;
      }
    }
    /**
     * Called when the corresponding route is deactivated during navigation.
     * Because the component get destroyed, all children outlet are destroyed.
     */
    onOutletDeactivated() {
      const contexts = this.contexts;
      this.contexts = /* @__PURE__ */ new Map();
      return contexts;
    }
    onOutletReAttached(contexts) {
      this.contexts = contexts;
    }
    getOrCreateContext(childName) {
      let context = this.getContext(childName);
      if (!context) {
        context = new OutletContext();
        this.contexts.set(childName, context);
      }
      return context;
    }
    getContext(childName) {
      return this.contexts.get(childName) || null;
    }
  };
  _ChildrenOutletContexts.\u0275fac = function ChildrenOutletContexts_Factory(t) {
    return new (t || _ChildrenOutletContexts)();
  };
  _ChildrenOutletContexts.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ChildrenOutletContexts,
    factory: _ChildrenOutletContexts.\u0275fac,
    providedIn: "root"
  });
  let ChildrenOutletContexts2 = _ChildrenOutletContexts;
  return ChildrenOutletContexts2;
})();
var Tree = class {
  constructor(root) {
    this._root = root;
  }
  get root() {
    return this._root.value;
  }
  /**
   * @internal
   */
  parent(t) {
    const p = this.pathFromRoot(t);
    return p.length > 1 ? p[p.length - 2] : null;
  }
  /**
   * @internal
   */
  children(t) {
    const n = findNode(t, this._root);
    return n ? n.children.map((t2) => t2.value) : [];
  }
  /**
   * @internal
   */
  firstChild(t) {
    const n = findNode(t, this._root);
    return n && n.children.length > 0 ? n.children[0].value : null;
  }
  /**
   * @internal
   */
  siblings(t) {
    const p = findPath(t, this._root);
    if (p.length < 2)
      return [];
    const c = p[p.length - 2].children.map((c2) => c2.value);
    return c.filter((cc) => cc !== t);
  }
  /**
   * @internal
   */
  pathFromRoot(t) {
    return findPath(t, this._root).map((s) => s.value);
  }
};
function findNode(value, node) {
  if (value === node.value)
    return node;
  for (const child of node.children) {
    const node2 = findNode(value, child);
    if (node2)
      return node2;
  }
  return null;
}
function findPath(value, node) {
  if (value === node.value)
    return [node];
  for (const child of node.children) {
    const path = findPath(value, child);
    if (path.length) {
      path.unshift(node);
      return path;
    }
  }
  return [];
}
var TreeNode = class {
  constructor(value, children) {
    this.value = value;
    this.children = children;
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function nodeChildrenAsMap(node) {
  const map2 = {};
  if (node) {
    node.children.forEach((child) => map2[child.value.outlet] = child);
  }
  return map2;
}
var RouterState = class extends Tree {
  /** @internal */
  constructor(root, snapshot) {
    super(root);
    this.snapshot = snapshot;
    setRouterState(this, root);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function createEmptyState(urlTree, rootComponent) {
  const snapshot = createEmptyStateSnapshot(urlTree, rootComponent);
  const emptyUrl = new BehaviorSubject([new UrlSegment("", {})]);
  const emptyParams = new BehaviorSubject({});
  const emptyData = new BehaviorSubject({});
  const emptyQueryParams = new BehaviorSubject({});
  const fragment = new BehaviorSubject("");
  const activated = new ActivatedRoute(emptyUrl, emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, snapshot.root);
  activated.snapshot = snapshot.root;
  return new RouterState(new TreeNode(activated, []), snapshot);
}
function createEmptyStateSnapshot(urlTree, rootComponent) {
  const emptyParams = {};
  const emptyData = {};
  const emptyQueryParams = {};
  const fragment = "";
  const activated = new ActivatedRouteSnapshot([], emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, null, {});
  return new RouterStateSnapshot("", new TreeNode(activated, []));
}
var ActivatedRoute = class {
  /** @internal */
  constructor(urlSubject, paramsSubject, queryParamsSubject, fragmentSubject, dataSubject, outlet, component, futureSnapshot) {
    this.urlSubject = urlSubject;
    this.paramsSubject = paramsSubject;
    this.queryParamsSubject = queryParamsSubject;
    this.fragmentSubject = fragmentSubject;
    this.dataSubject = dataSubject;
    this.outlet = outlet;
    this.component = component;
    this._futureSnapshot = futureSnapshot;
    this.title = this.dataSubject?.pipe(map((d) => d[RouteTitleKey])) ?? of(void 0);
    this.url = urlSubject;
    this.params = paramsSubject;
    this.queryParams = queryParamsSubject;
    this.fragment = fragmentSubject;
    this.data = dataSubject;
  }
  /** The configuration used to match this route. */
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  /** The root of the router state. */
  get root() {
    return this._routerState.root;
  }
  /** The parent of this route in the router state tree. */
  get parent() {
    return this._routerState.parent(this);
  }
  /** The first child of this route in the router state tree. */
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  /** The children of this route in the router state tree. */
  get children() {
    return this._routerState.children(this);
  }
  /** The path from the root of the router state tree to this route. */
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  /**
   * An Observable that contains a map of the required and optional parameters
   * specific to the route.
   * The map supports retrieving single and multiple values from the same parameter.
   */
  get paramMap() {
    if (!this._paramMap) {
      this._paramMap = this.params.pipe(map((p) => convertToParamMap(p)));
    }
    return this._paramMap;
  }
  /**
   * An Observable that contains a map of the query parameters available to all routes.
   * The map supports retrieving single and multiple values from the query parameter.
   */
  get queryParamMap() {
    if (!this._queryParamMap) {
      this._queryParamMap = this.queryParams.pipe(map((p) => convertToParamMap(p)));
    }
    return this._queryParamMap;
  }
  toString() {
    return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
  }
};
function getInherited(route, parent, paramsInheritanceStrategy = "emptyOnly") {
  let inherited;
  const {
    routeConfig
  } = route;
  if (parent !== null && (paramsInheritanceStrategy === "always" || // inherit parent data if route is empty path
  routeConfig?.path === "" || // inherit parent data if parent was componentless
  !parent.component && !parent.routeConfig?.loadComponent)) {
    inherited = {
      params: __spreadValues(__spreadValues({}, parent.params), route.params),
      data: __spreadValues(__spreadValues({}, parent.data), route.data),
      resolve: __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, route.data), parent.data), routeConfig?.data), route._resolvedData)
    };
  } else {
    inherited = {
      params: route.params,
      data: route.data,
      resolve: __spreadValues(__spreadValues({}, route.data), route._resolvedData ?? {})
    };
  }
  if (routeConfig && hasStaticTitle(routeConfig)) {
    inherited.resolve[RouteTitleKey] = routeConfig.title;
  }
  return inherited;
}
var ActivatedRouteSnapshot = class {
  /** The resolved route title */
  get title() {
    return this.data?.[RouteTitleKey];
  }
  /** @internal */
  constructor(url, params, queryParams, fragment, data2, outlet, component, routeConfig, resolve) {
    this.url = url;
    this.params = params;
    this.queryParams = queryParams;
    this.fragment = fragment;
    this.data = data2;
    this.outlet = outlet;
    this.component = component;
    this.routeConfig = routeConfig;
    this._resolve = resolve;
  }
  /** The root of the router state */
  get root() {
    return this._routerState.root;
  }
  /** The parent of this route in the router state tree */
  get parent() {
    return this._routerState.parent(this);
  }
  /** The first child of this route in the router state tree */
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  /** The children of this route in the router state tree */
  get children() {
    return this._routerState.children(this);
  }
  /** The path from the root of the router state tree to this route */
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    if (!this._paramMap) {
      this._paramMap = convertToParamMap(this.params);
    }
    return this._paramMap;
  }
  get queryParamMap() {
    if (!this._queryParamMap) {
      this._queryParamMap = convertToParamMap(this.queryParams);
    }
    return this._queryParamMap;
  }
  toString() {
    const url = this.url.map((segment) => segment.toString()).join("/");
    const matched = this.routeConfig ? this.routeConfig.path : "";
    return `Route(url:'${url}', path:'${matched}')`;
  }
};
var RouterStateSnapshot = class extends Tree {
  /** @internal */
  constructor(url, root) {
    super(root);
    this.url = url;
    setRouterState(this, root);
  }
  toString() {
    return serializeNode(this._root);
  }
};
function setRouterState(state, node) {
  node.value._routerState = state;
  node.children.forEach((c) => setRouterState(state, c));
}
function serializeNode(node) {
  const c = node.children.length > 0 ? ` { ${node.children.map(serializeNode).join(", ")} } ` : "";
  return `${node.value}${c}`;
}
function advanceActivatedRoute(route) {
  if (route.snapshot) {
    const currentSnapshot = route.snapshot;
    const nextSnapshot = route._futureSnapshot;
    route.snapshot = nextSnapshot;
    if (!shallowEqual(currentSnapshot.queryParams, nextSnapshot.queryParams)) {
      route.queryParamsSubject.next(nextSnapshot.queryParams);
    }
    if (currentSnapshot.fragment !== nextSnapshot.fragment) {
      route.fragmentSubject.next(nextSnapshot.fragment);
    }
    if (!shallowEqual(currentSnapshot.params, nextSnapshot.params)) {
      route.paramsSubject.next(nextSnapshot.params);
    }
    if (!shallowEqualArrays(currentSnapshot.url, nextSnapshot.url)) {
      route.urlSubject.next(nextSnapshot.url);
    }
    if (!shallowEqual(currentSnapshot.data, nextSnapshot.data)) {
      route.dataSubject.next(nextSnapshot.data);
    }
  } else {
    route.snapshot = route._futureSnapshot;
    route.dataSubject.next(route._futureSnapshot.data);
  }
}
function equalParamsAndUrlSegments(a, b) {
  const equalUrlParams = shallowEqual(a.params, b.params) && equalSegments(a.url, b.url);
  const parentsMismatch = !a.parent !== !b.parent;
  return equalUrlParams && !parentsMismatch && (!a.parent || equalParamsAndUrlSegments(a.parent, b.parent));
}
function hasStaticTitle(config) {
  return typeof config.title === "string" || config.title === null;
}
var RouterOutlet = /* @__PURE__ */ (() => {
  const _RouterOutlet = class _RouterOutlet {
    constructor() {
      this.activated = null;
      this._activatedRoute = null;
      this.name = PRIMARY_OUTLET;
      this.activateEvents = new EventEmitter();
      this.deactivateEvents = new EventEmitter();
      this.attachEvents = new EventEmitter();
      this.detachEvents = new EventEmitter();
      this.parentContexts = inject(ChildrenOutletContexts);
      this.location = inject(ViewContainerRef);
      this.changeDetector = inject(ChangeDetectorRef);
      this.environmentInjector = inject(EnvironmentInjector);
      this.inputBinder = inject(INPUT_BINDER, {
        optional: true
      });
      this.supportsBindingToComponentInputs = true;
    }
    /** @internal */
    get activatedComponentRef() {
      return this.activated;
    }
    /** @nodoc */
    ngOnChanges(changes) {
      if (changes["name"]) {
        const {
          firstChange,
          previousValue
        } = changes["name"];
        if (firstChange) {
          return;
        }
        if (this.isTrackedInParentContexts(previousValue)) {
          this.deactivate();
          this.parentContexts.onChildOutletDestroyed(previousValue);
        }
        this.initializeOutletWithName();
      }
    }
    /** @nodoc */
    ngOnDestroy() {
      if (this.isTrackedInParentContexts(this.name)) {
        this.parentContexts.onChildOutletDestroyed(this.name);
      }
      this.inputBinder?.unsubscribeFromRouteData(this);
    }
    isTrackedInParentContexts(outletName) {
      return this.parentContexts.getContext(outletName)?.outlet === this;
    }
    /** @nodoc */
    ngOnInit() {
      this.initializeOutletWithName();
    }
    initializeOutletWithName() {
      this.parentContexts.onChildOutletCreated(this.name, this);
      if (this.activated) {
        return;
      }
      const context = this.parentContexts.getContext(this.name);
      if (context?.route) {
        if (context.attachRef) {
          this.attach(context.attachRef, context.route);
        } else {
          this.activateWith(context.route, context.injector);
        }
      }
    }
    get isActivated() {
      return !!this.activated;
    }
    /**
     * @returns The currently activated component instance.
     * @throws An error if the outlet is not activated.
     */
    get component() {
      if (!this.activated)
        throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
      return this.activated.instance;
    }
    get activatedRoute() {
      if (!this.activated)
        throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
      return this._activatedRoute;
    }
    get activatedRouteData() {
      if (this._activatedRoute) {
        return this._activatedRoute.snapshot.data;
      }
      return {};
    }
    /**
     * Called when the `RouteReuseStrategy` instructs to detach the subtree
     */
    detach() {
      if (!this.activated)
        throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
      this.location.detach();
      const cmp = this.activated;
      this.activated = null;
      this._activatedRoute = null;
      this.detachEvents.emit(cmp.instance);
      return cmp;
    }
    /**
     * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
     */
    attach(ref, activatedRoute) {
      this.activated = ref;
      this._activatedRoute = activatedRoute;
      this.location.insert(ref.hostView);
      this.inputBinder?.bindActivatedRouteToOutletComponent(this);
      this.attachEvents.emit(ref.instance);
    }
    deactivate() {
      if (this.activated) {
        const c = this.component;
        this.activated.destroy();
        this.activated = null;
        this._activatedRoute = null;
        this.deactivateEvents.emit(c);
      }
    }
    activateWith(activatedRoute, environmentInjector) {
      if (this.isActivated) {
        throw new RuntimeError(4013, (typeof ngDevMode === "undefined" || ngDevMode) && "Cannot activate an already activated outlet");
      }
      this._activatedRoute = activatedRoute;
      const location = this.location;
      const snapshot = activatedRoute.snapshot;
      const component = snapshot.component;
      const childContexts = this.parentContexts.getOrCreateContext(this.name).children;
      const injector = new OutletInjector(activatedRoute, childContexts, location.injector);
      this.activated = location.createComponent(component, {
        index: location.length,
        injector,
        environmentInjector: environmentInjector ?? this.environmentInjector
      });
      this.changeDetector.markForCheck();
      this.inputBinder?.bindActivatedRouteToOutletComponent(this);
      this.activateEvents.emit(this.activated.instance);
    }
  };
  _RouterOutlet.\u0275fac = function RouterOutlet_Factory(t) {
    return new (t || _RouterOutlet)();
  };
  _RouterOutlet.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RouterOutlet,
    selectors: [["router-outlet"]],
    inputs: {
      name: "name"
    },
    outputs: {
      activateEvents: "activate",
      deactivateEvents: "deactivate",
      attachEvents: "attach",
      detachEvents: "detach"
    },
    exportAs: ["outlet"],
    standalone: true,
    features: [\u0275\u0275NgOnChangesFeature]
  });
  let RouterOutlet2 = _RouterOutlet;
  return RouterOutlet2;
})();
var OutletInjector = class {
  constructor(route, childContexts, parent) {
    this.route = route;
    this.childContexts = childContexts;
    this.parent = parent;
  }
  get(token, notFoundValue) {
    if (token === ActivatedRoute) {
      return this.route;
    }
    if (token === ChildrenOutletContexts) {
      return this.childContexts;
    }
    return this.parent.get(token, notFoundValue);
  }
};
var INPUT_BINDER = /* @__PURE__ */ new InjectionToken("");
var RoutedComponentInputBinder = /* @__PURE__ */ (() => {
  const _RoutedComponentInputBinder = class _RoutedComponentInputBinder {
    constructor() {
      this.outletDataSubscriptions = /* @__PURE__ */ new Map();
    }
    bindActivatedRouteToOutletComponent(outlet) {
      this.unsubscribeFromRouteData(outlet);
      this.subscribeToRouteData(outlet);
    }
    unsubscribeFromRouteData(outlet) {
      this.outletDataSubscriptions.get(outlet)?.unsubscribe();
      this.outletDataSubscriptions.delete(outlet);
    }
    subscribeToRouteData(outlet) {
      const {
        activatedRoute
      } = outlet;
      const dataSubscription = combineLatest([activatedRoute.queryParams, activatedRoute.params, activatedRoute.data]).pipe(switchMap(([queryParams, params, data2], index) => {
        data2 = __spreadValues(__spreadValues(__spreadValues({}, queryParams), params), data2);
        if (index === 0) {
          return of(data2);
        }
        return Promise.resolve(data2);
      })).subscribe((data2) => {
        if (!outlet.isActivated || !outlet.activatedComponentRef || outlet.activatedRoute !== activatedRoute || activatedRoute.component === null) {
          this.unsubscribeFromRouteData(outlet);
          return;
        }
        const mirror = reflectComponentType(activatedRoute.component);
        if (!mirror) {
          this.unsubscribeFromRouteData(outlet);
          return;
        }
        for (const {
          templateName
        } of mirror.inputs) {
          outlet.activatedComponentRef.setInput(templateName, data2[templateName]);
        }
      });
      this.outletDataSubscriptions.set(outlet, dataSubscription);
    }
  };
  _RoutedComponentInputBinder.\u0275fac = function RoutedComponentInputBinder_Factory(t) {
    return new (t || _RoutedComponentInputBinder)();
  };
  _RoutedComponentInputBinder.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RoutedComponentInputBinder,
    factory: _RoutedComponentInputBinder.\u0275fac
  });
  let RoutedComponentInputBinder2 = _RoutedComponentInputBinder;
  return RoutedComponentInputBinder2;
})();
function createRouterState(routeReuseStrategy, curr, prevState) {
  const root = createNode(routeReuseStrategy, curr._root, prevState ? prevState._root : void 0);
  return new RouterState(root, curr);
}
function createNode(routeReuseStrategy, curr, prevState) {
  if (prevState && routeReuseStrategy.shouldReuseRoute(curr.value, prevState.value.snapshot)) {
    const value = prevState.value;
    value._futureSnapshot = curr.value;
    const children = createOrReuseChildren(routeReuseStrategy, curr, prevState);
    return new TreeNode(value, children);
  } else {
    if (routeReuseStrategy.shouldAttach(curr.value)) {
      const detachedRouteHandle = routeReuseStrategy.retrieve(curr.value);
      if (detachedRouteHandle !== null) {
        const tree2 = detachedRouteHandle.route;
        tree2.value._futureSnapshot = curr.value;
        tree2.children = curr.children.map((c) => createNode(routeReuseStrategy, c));
        return tree2;
      }
    }
    const value = createActivatedRoute(curr.value);
    const children = curr.children.map((c) => createNode(routeReuseStrategy, c));
    return new TreeNode(value, children);
  }
}
function createOrReuseChildren(routeReuseStrategy, curr, prevState) {
  return curr.children.map((child) => {
    for (const p of prevState.children) {
      if (routeReuseStrategy.shouldReuseRoute(child.value, p.value.snapshot)) {
        return createNode(routeReuseStrategy, child, p);
      }
    }
    return createNode(routeReuseStrategy, child);
  });
}
function createActivatedRoute(c) {
  return new ActivatedRoute(new BehaviorSubject(c.url), new BehaviorSubject(c.params), new BehaviorSubject(c.queryParams), new BehaviorSubject(c.fragment), new BehaviorSubject(c.data), c.outlet, c.component, c);
}
var NAVIGATION_CANCELING_ERROR = "ngNavigationCancelingError";
function redirectingNavigationError(urlSerializer, redirect) {
  const {
    redirectTo,
    navigationBehaviorOptions
  } = isUrlTree(redirect) ? {
    redirectTo: redirect,
    navigationBehaviorOptions: void 0
  } : redirect;
  const error = navigationCancelingError(ngDevMode && `Redirecting to "${urlSerializer.serialize(redirectTo)}"`, 0, redirect);
  error.url = redirectTo;
  error.navigationBehaviorOptions = navigationBehaviorOptions;
  return error;
}
function navigationCancelingError(message, code, redirectUrl) {
  const error = new Error("NavigationCancelingError: " + (message || ""));
  error[NAVIGATION_CANCELING_ERROR] = true;
  error.cancellationCode = code;
  if (redirectUrl) {
    error.url = redirectUrl;
  }
  return error;
}
function isRedirectingNavigationCancelingError$1(error) {
  return isNavigationCancelingError$1(error) && isUrlTree(error.url);
}
function isNavigationCancelingError$1(error) {
  return error && error[NAVIGATION_CANCELING_ERROR];
}
var \u0275EmptyOutletComponent = /* @__PURE__ */ (() => {
  const _\u0275EmptyOutletComponent = class _\u0275EmptyOutletComponent {
  };
  _\u0275EmptyOutletComponent.\u0275fac = function \u0275EmptyOutletComponent_Factory(t) {
    return new (t || _\u0275EmptyOutletComponent)();
  };
  _\u0275EmptyOutletComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _\u0275EmptyOutletComponent,
    selectors: [["ng-component"]],
    standalone: true,
    features: [\u0275\u0275StandaloneFeature],
    decls: 1,
    vars: 0,
    template: function \u0275EmptyOutletComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    },
    dependencies: [RouterOutlet],
    encapsulation: 2
  });
  let \u0275EmptyOutletComponent2 = _\u0275EmptyOutletComponent;
  return \u0275EmptyOutletComponent2;
})();
function getOrCreateRouteInjectorIfNeeded(route, currentInjector) {
  if (route.providers && !route._injector) {
    route._injector = createEnvironmentInjector(route.providers, currentInjector, `Route: ${route.path}`);
  }
  return route._injector ?? currentInjector;
}
function validateConfig(config, parentPath = "", requireStandaloneComponents = false) {
  for (let i = 0; i < config.length; i++) {
    const route = config[i];
    const fullPath = getFullPath(parentPath, route);
    validateNode(route, fullPath, requireStandaloneComponents);
  }
}
function assertStandalone(fullPath, component) {
  if (component && isNgModule(component)) {
    throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. You are using 'loadComponent' with a module, but it must be used with standalone components. Use 'loadChildren' instead.`);
  } else if (component && !isStandalone(component)) {
    throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. The component must be standalone.`);
  }
}
function validateNode(route, fullPath, requireStandaloneComponents) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!route) {
      throw new RuntimeError(4014, `
      Invalid configuration of route '${fullPath}': Encountered undefined route.
      The reason might be an extra comma.

      Example:
      const routes: Routes = [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        { path: 'dashboard',  component: DashboardComponent },, << two commas
        { path: 'detail/:id', component: HeroDetailComponent }
      ];
    `);
    }
    if (Array.isArray(route)) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': Array cannot be specified`);
    }
    if (!route.redirectTo && !route.component && !route.loadComponent && !route.children && !route.loadChildren && route.outlet && route.outlet !== PRIMARY_OUTLET) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': a componentless route without children or loadChildren cannot have a named outlet set`);
    }
    if (route.redirectTo && route.children) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and children cannot be used together`);
    }
    if (route.redirectTo && route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and loadChildren cannot be used together`);
    }
    if (route.children && route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': children and loadChildren cannot be used together`);
    }
    if (route.redirectTo && (route.component || route.loadComponent)) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and component/loadComponent cannot be used together`);
    }
    if (route.component && route.loadComponent) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': component and loadComponent cannot be used together`);
    }
    if (route.redirectTo && route.canActivate) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and canActivate cannot be used together. Redirects happen before activation so canActivate will never be executed.`);
    }
    if (route.path && route.matcher) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': path and matcher cannot be used together`);
    }
    if (route.redirectTo === void 0 && !route.component && !route.loadComponent && !route.children && !route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. One of the following must be provided: component, loadComponent, redirectTo, children or loadChildren`);
    }
    if (route.path === void 0 && route.matcher === void 0) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': routes must have either a path or a matcher specified`);
    }
    if (typeof route.path === "string" && route.path.charAt(0) === "/") {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': path cannot start with a slash`);
    }
    if (route.path === "" && route.redirectTo !== void 0 && route.pathMatch === void 0) {
      const exp = `The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`;
      throw new RuntimeError(4014, `Invalid configuration of route '{path: "${fullPath}", redirectTo: "${route.redirectTo}"}': please provide 'pathMatch'. ${exp}`);
    }
    if (requireStandaloneComponents) {
      assertStandalone(fullPath, route.component);
    }
  }
  if (route.children) {
    validateConfig(route.children, fullPath, requireStandaloneComponents);
  }
}
function getFullPath(parentPath, currentRoute) {
  if (!currentRoute) {
    return parentPath;
  }
  if (!parentPath && !currentRoute.path) {
    return "";
  } else if (parentPath && !currentRoute.path) {
    return `${parentPath}/`;
  } else if (!parentPath && currentRoute.path) {
    return currentRoute.path;
  } else {
    return `${parentPath}/${currentRoute.path}`;
  }
}
function standardizeConfig(r) {
  const children = r.children && r.children.map(standardizeConfig);
  const c = children ? __spreadProps(__spreadValues({}, r), {
    children
  }) : __spreadValues({}, r);
  if (!c.component && !c.loadComponent && (children || c.loadChildren) && c.outlet && c.outlet !== PRIMARY_OUTLET) {
    c.component = \u0275EmptyOutletComponent;
  }
  return c;
}
function getOutlet(route) {
  return route.outlet || PRIMARY_OUTLET;
}
function sortByMatchingOutlets(routes, outletName) {
  const sortedConfig = routes.filter((r) => getOutlet(r) === outletName);
  sortedConfig.push(...routes.filter((r) => getOutlet(r) !== outletName));
  return sortedConfig;
}
function getClosestRouteInjector(snapshot) {
  if (!snapshot)
    return null;
  if (snapshot.routeConfig?._injector) {
    return snapshot.routeConfig._injector;
  }
  for (let s = snapshot.parent; s; s = s.parent) {
    const route = s.routeConfig;
    if (route?._loadedInjector)
      return route._loadedInjector;
    if (route?._injector)
      return route._injector;
  }
  return null;
}
var warnedAboutUnsupportedInputBinding = false;
var activateRoutes = (rootContexts, routeReuseStrategy, forwardEvent, inputBindingEnabled) => map((t) => {
  new ActivateRoutes(routeReuseStrategy, t.targetRouterState, t.currentRouterState, forwardEvent, inputBindingEnabled).activate(rootContexts);
  return t;
});
var ActivateRoutes = class {
  constructor(routeReuseStrategy, futureState, currState, forwardEvent, inputBindingEnabled) {
    this.routeReuseStrategy = routeReuseStrategy;
    this.futureState = futureState;
    this.currState = currState;
    this.forwardEvent = forwardEvent;
    this.inputBindingEnabled = inputBindingEnabled;
  }
  activate(parentContexts) {
    const futureRoot = this.futureState._root;
    const currRoot = this.currState ? this.currState._root : null;
    this.deactivateChildRoutes(futureRoot, currRoot, parentContexts);
    advanceActivatedRoute(this.futureState.root);
    this.activateChildRoutes(futureRoot, currRoot, parentContexts);
  }
  // De-activate the child route that are not re-used for the future state
  deactivateChildRoutes(futureNode, currNode, contexts) {
    const children = nodeChildrenAsMap(currNode);
    futureNode.children.forEach((futureChild) => {
      const childOutletName = futureChild.value.outlet;
      this.deactivateRoutes(futureChild, children[childOutletName], contexts);
      delete children[childOutletName];
    });
    Object.values(children).forEach((v) => {
      this.deactivateRouteAndItsChildren(v, contexts);
    });
  }
  deactivateRoutes(futureNode, currNode, parentContext) {
    const future = futureNode.value;
    const curr = currNode ? currNode.value : null;
    if (future === curr) {
      if (future.component) {
        const context = parentContext.getContext(future.outlet);
        if (context) {
          this.deactivateChildRoutes(futureNode, currNode, context.children);
        }
      } else {
        this.deactivateChildRoutes(futureNode, currNode, parentContext);
      }
    } else {
      if (curr) {
        this.deactivateRouteAndItsChildren(currNode, parentContext);
      }
    }
  }
  deactivateRouteAndItsChildren(route, parentContexts) {
    if (route.value.component && this.routeReuseStrategy.shouldDetach(route.value.snapshot)) {
      this.detachAndStoreRouteSubtree(route, parentContexts);
    } else {
      this.deactivateRouteAndOutlet(route, parentContexts);
    }
  }
  detachAndStoreRouteSubtree(route, parentContexts) {
    const context = parentContexts.getContext(route.value.outlet);
    const contexts = context && route.value.component ? context.children : parentContexts;
    const children = nodeChildrenAsMap(route);
    for (const childOutlet of Object.keys(children)) {
      this.deactivateRouteAndItsChildren(children[childOutlet], contexts);
    }
    if (context && context.outlet) {
      const componentRef = context.outlet.detach();
      const contexts2 = context.children.onOutletDeactivated();
      this.routeReuseStrategy.store(route.value.snapshot, {
        componentRef,
        route,
        contexts: contexts2
      });
    }
  }
  deactivateRouteAndOutlet(route, parentContexts) {
    const context = parentContexts.getContext(route.value.outlet);
    const contexts = context && route.value.component ? context.children : parentContexts;
    const children = nodeChildrenAsMap(route);
    for (const childOutlet of Object.keys(children)) {
      this.deactivateRouteAndItsChildren(children[childOutlet], contexts);
    }
    if (context) {
      if (context.outlet) {
        context.outlet.deactivate();
        context.children.onOutletDeactivated();
      }
      context.attachRef = null;
      context.route = null;
    }
  }
  activateChildRoutes(futureNode, currNode, contexts) {
    const children = nodeChildrenAsMap(currNode);
    futureNode.children.forEach((c) => {
      this.activateRoutes(c, children[c.value.outlet], contexts);
      this.forwardEvent(new ActivationEnd(c.value.snapshot));
    });
    if (futureNode.children.length) {
      this.forwardEvent(new ChildActivationEnd(futureNode.value.snapshot));
    }
  }
  activateRoutes(futureNode, currNode, parentContexts) {
    const future = futureNode.value;
    const curr = currNode ? currNode.value : null;
    advanceActivatedRoute(future);
    if (future === curr) {
      if (future.component) {
        const context = parentContexts.getOrCreateContext(future.outlet);
        this.activateChildRoutes(futureNode, currNode, context.children);
      } else {
        this.activateChildRoutes(futureNode, currNode, parentContexts);
      }
    } else {
      if (future.component) {
        const context = parentContexts.getOrCreateContext(future.outlet);
        if (this.routeReuseStrategy.shouldAttach(future.snapshot)) {
          const stored = this.routeReuseStrategy.retrieve(future.snapshot);
          this.routeReuseStrategy.store(future.snapshot, null);
          context.children.onOutletReAttached(stored.contexts);
          context.attachRef = stored.componentRef;
          context.route = stored.route.value;
          if (context.outlet) {
            context.outlet.attach(stored.componentRef, stored.route.value);
          }
          advanceActivatedRoute(stored.route.value);
          this.activateChildRoutes(futureNode, null, context.children);
        } else {
          const injector = getClosestRouteInjector(future.snapshot);
          context.attachRef = null;
          context.route = future;
          context.injector = injector;
          if (context.outlet) {
            context.outlet.activateWith(future, context.injector);
          }
          this.activateChildRoutes(futureNode, null, context.children);
        }
      } else {
        this.activateChildRoutes(futureNode, null, parentContexts);
      }
    }
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const context = parentContexts.getOrCreateContext(future.outlet);
      const outlet = context.outlet;
      if (outlet && this.inputBindingEnabled && !outlet.supportsBindingToComponentInputs && !warnedAboutUnsupportedInputBinding) {
        console.warn(`'withComponentInputBinding' feature is enabled but this application is using an outlet that may not support binding to component inputs.`);
        warnedAboutUnsupportedInputBinding = true;
      }
    }
  }
};
var CanActivate = class {
  constructor(path) {
    this.path = path;
    this.route = this.path[this.path.length - 1];
  }
};
var CanDeactivate = class {
  constructor(component, route) {
    this.component = component;
    this.route = route;
  }
};
function getAllRouteGuards(future, curr, parentContexts) {
  const futureRoot = future._root;
  const currRoot = curr ? curr._root : null;
  return getChildRouteGuards(futureRoot, currRoot, parentContexts, [futureRoot.value]);
}
function getCanActivateChild(p) {
  const canActivateChild = p.routeConfig ? p.routeConfig.canActivateChild : null;
  if (!canActivateChild || canActivateChild.length === 0)
    return null;
  return {
    node: p,
    guards: canActivateChild
  };
}
function getTokenOrFunctionIdentity(tokenOrFunction, injector) {
  const NOT_FOUND = Symbol();
  const result = injector.get(tokenOrFunction, NOT_FOUND);
  if (result === NOT_FOUND) {
    if (typeof tokenOrFunction === "function" && !isInjectable(tokenOrFunction)) {
      return tokenOrFunction;
    } else {
      return injector.get(tokenOrFunction);
    }
  }
  return result;
}
function getChildRouteGuards(futureNode, currNode, contexts, futurePath, checks = {
  canDeactivateChecks: [],
  canActivateChecks: []
}) {
  const prevChildren = nodeChildrenAsMap(currNode);
  futureNode.children.forEach((c) => {
    getRouteGuards(c, prevChildren[c.value.outlet], contexts, futurePath.concat([c.value]), checks);
    delete prevChildren[c.value.outlet];
  });
  Object.entries(prevChildren).forEach(([k, v]) => deactivateRouteAndItsChildren(v, contexts.getContext(k), checks));
  return checks;
}
function getRouteGuards(futureNode, currNode, parentContexts, futurePath, checks = {
  canDeactivateChecks: [],
  canActivateChecks: []
}) {
  const future = futureNode.value;
  const curr = currNode ? currNode.value : null;
  const context = parentContexts ? parentContexts.getContext(futureNode.value.outlet) : null;
  if (curr && future.routeConfig === curr.routeConfig) {
    const shouldRun = shouldRunGuardsAndResolvers(curr, future, future.routeConfig.runGuardsAndResolvers);
    if (shouldRun) {
      checks.canActivateChecks.push(new CanActivate(futurePath));
    } else {
      future.data = curr.data;
      future._resolvedData = curr._resolvedData;
    }
    if (future.component) {
      getChildRouteGuards(futureNode, currNode, context ? context.children : null, futurePath, checks);
    } else {
      getChildRouteGuards(futureNode, currNode, parentContexts, futurePath, checks);
    }
    if (shouldRun && context && context.outlet && context.outlet.isActivated) {
      checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, curr));
    }
  } else {
    if (curr) {
      deactivateRouteAndItsChildren(currNode, context, checks);
    }
    checks.canActivateChecks.push(new CanActivate(futurePath));
    if (future.component) {
      getChildRouteGuards(futureNode, null, context ? context.children : null, futurePath, checks);
    } else {
      getChildRouteGuards(futureNode, null, parentContexts, futurePath, checks);
    }
  }
  return checks;
}
function shouldRunGuardsAndResolvers(curr, future, mode) {
  if (typeof mode === "function") {
    return mode(curr, future);
  }
  switch (mode) {
    case "pathParamsChange":
      return !equalPath(curr.url, future.url);
    case "pathParamsOrQueryParamsChange":
      return !equalPath(curr.url, future.url) || !shallowEqual(curr.queryParams, future.queryParams);
    case "always":
      return true;
    case "paramsOrQueryParamsChange":
      return !equalParamsAndUrlSegments(curr, future) || !shallowEqual(curr.queryParams, future.queryParams);
    case "paramsChange":
    default:
      return !equalParamsAndUrlSegments(curr, future);
  }
}
function deactivateRouteAndItsChildren(route, context, checks) {
  const children = nodeChildrenAsMap(route);
  const r = route.value;
  Object.entries(children).forEach(([childName, node]) => {
    if (!r.component) {
      deactivateRouteAndItsChildren(node, context, checks);
    } else if (context) {
      deactivateRouteAndItsChildren(node, context.children.getContext(childName), checks);
    } else {
      deactivateRouteAndItsChildren(node, null, checks);
    }
  });
  if (!r.component) {
    checks.canDeactivateChecks.push(new CanDeactivate(null, r));
  } else if (context && context.outlet && context.outlet.isActivated) {
    checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, r));
  } else {
    checks.canDeactivateChecks.push(new CanDeactivate(null, r));
  }
}
function isFunction(v) {
  return typeof v === "function";
}
function isBoolean(v) {
  return typeof v === "boolean";
}
function isCanLoad(guard) {
  return guard && isFunction(guard.canLoad);
}
function isCanActivate(guard) {
  return guard && isFunction(guard.canActivate);
}
function isCanActivateChild(guard) {
  return guard && isFunction(guard.canActivateChild);
}
function isCanDeactivate(guard) {
  return guard && isFunction(guard.canDeactivate);
}
function isCanMatch(guard) {
  return guard && isFunction(guard.canMatch);
}
function isEmptyError(e) {
  return e instanceof EmptyError || e?.name === "EmptyError";
}
var INITIAL_VALUE = /* @__PURE__ */ Symbol("INITIAL_VALUE");
function prioritizedGuardValue() {
  return switchMap((obs) => {
    return combineLatest(obs.map((o) => o.pipe(take(1), startWith(INITIAL_VALUE)))).pipe(map((results) => {
      for (const result of results) {
        if (result === true) {
          continue;
        } else if (result === INITIAL_VALUE) {
          return INITIAL_VALUE;
        } else if (result === false || result instanceof UrlTree) {
          return result;
        }
      }
      return true;
    }), filter((item) => item !== INITIAL_VALUE), take(1));
  });
}
function checkGuards(injector, forwardEvent) {
  return mergeMap((t) => {
    const {
      targetSnapshot,
      currentSnapshot,
      guards: {
        canActivateChecks,
        canDeactivateChecks
      }
    } = t;
    if (canDeactivateChecks.length === 0 && canActivateChecks.length === 0) {
      return of(__spreadProps(__spreadValues({}, t), {
        guardsResult: true
      }));
    }
    return runCanDeactivateChecks(canDeactivateChecks, targetSnapshot, currentSnapshot, injector).pipe(mergeMap((canDeactivate) => {
      return canDeactivate && isBoolean(canDeactivate) ? runCanActivateChecks(targetSnapshot, canActivateChecks, injector, forwardEvent) : of(canDeactivate);
    }), map((guardsResult) => __spreadProps(__spreadValues({}, t), {
      guardsResult
    })));
  });
}
function runCanDeactivateChecks(checks, futureRSS, currRSS, injector) {
  return from(checks).pipe(mergeMap((check) => runCanDeactivate(check.component, check.route, currRSS, futureRSS, injector)), first((result) => {
    return result !== true;
  }, true));
}
function runCanActivateChecks(futureSnapshot, checks, injector, forwardEvent) {
  return from(checks).pipe(concatMap((check) => {
    return concat(fireChildActivationStart(check.route.parent, forwardEvent), fireActivationStart(check.route, forwardEvent), runCanActivateChild(futureSnapshot, check.path, injector), runCanActivate(futureSnapshot, check.route, injector));
  }), first((result) => {
    return result !== true;
  }, true));
}
function fireActivationStart(snapshot, forwardEvent) {
  if (snapshot !== null && forwardEvent) {
    forwardEvent(new ActivationStart(snapshot));
  }
  return of(true);
}
function fireChildActivationStart(snapshot, forwardEvent) {
  if (snapshot !== null && forwardEvent) {
    forwardEvent(new ChildActivationStart(snapshot));
  }
  return of(true);
}
function runCanActivate(futureRSS, futureARS, injector) {
  const canActivate = futureARS.routeConfig ? futureARS.routeConfig.canActivate : null;
  if (!canActivate || canActivate.length === 0)
    return of(true);
  const canActivateObservables = canActivate.map((canActivate2) => {
    return defer(() => {
      const closestInjector = getClosestRouteInjector(futureARS) ?? injector;
      const guard = getTokenOrFunctionIdentity(canActivate2, closestInjector);
      const guardVal = isCanActivate(guard) ? guard.canActivate(futureARS, futureRSS) : closestInjector.runInContext(() => guard(futureARS, futureRSS));
      return wrapIntoObservable(guardVal).pipe(first());
    });
  });
  return of(canActivateObservables).pipe(prioritizedGuardValue());
}
function runCanActivateChild(futureRSS, path, injector) {
  const futureARS = path[path.length - 1];
  const canActivateChildGuards = path.slice(0, path.length - 1).reverse().map((p) => getCanActivateChild(p)).filter((_) => _ !== null);
  const canActivateChildGuardsMapped = canActivateChildGuards.map((d) => {
    return defer(() => {
      const guardsMapped = d.guards.map((canActivateChild) => {
        const closestInjector = getClosestRouteInjector(d.node) ?? injector;
        const guard = getTokenOrFunctionIdentity(canActivateChild, closestInjector);
        const guardVal = isCanActivateChild(guard) ? guard.canActivateChild(futureARS, futureRSS) : closestInjector.runInContext(() => guard(futureARS, futureRSS));
        return wrapIntoObservable(guardVal).pipe(first());
      });
      return of(guardsMapped).pipe(prioritizedGuardValue());
    });
  });
  return of(canActivateChildGuardsMapped).pipe(prioritizedGuardValue());
}
function runCanDeactivate(component, currARS, currRSS, futureRSS, injector) {
  const canDeactivate = currARS && currARS.routeConfig ? currARS.routeConfig.canDeactivate : null;
  if (!canDeactivate || canDeactivate.length === 0)
    return of(true);
  const canDeactivateObservables = canDeactivate.map((c) => {
    const closestInjector = getClosestRouteInjector(currARS) ?? injector;
    const guard = getTokenOrFunctionIdentity(c, closestInjector);
    const guardVal = isCanDeactivate(guard) ? guard.canDeactivate(component, currARS, currRSS, futureRSS) : closestInjector.runInContext(() => guard(component, currARS, currRSS, futureRSS));
    return wrapIntoObservable(guardVal).pipe(first());
  });
  return of(canDeactivateObservables).pipe(prioritizedGuardValue());
}
function runCanLoadGuards(injector, route, segments, urlSerializer) {
  const canLoad = route.canLoad;
  if (canLoad === void 0 || canLoad.length === 0) {
    return of(true);
  }
  const canLoadObservables = canLoad.map((injectionToken) => {
    const guard = getTokenOrFunctionIdentity(injectionToken, injector);
    const guardVal = isCanLoad(guard) ? guard.canLoad(route, segments) : injector.runInContext(() => guard(route, segments));
    return wrapIntoObservable(guardVal);
  });
  return of(canLoadObservables).pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
function redirectIfUrlTree(urlSerializer) {
  return pipe(tap((result) => {
    if (!isUrlTree(result))
      return;
    throw redirectingNavigationError(urlSerializer, result);
  }), map((result) => result === true));
}
function runCanMatchGuards(injector, route, segments, urlSerializer) {
  const canMatch = route.canMatch;
  if (!canMatch || canMatch.length === 0)
    return of(true);
  const canMatchObservables = canMatch.map((injectionToken) => {
    const guard = getTokenOrFunctionIdentity(injectionToken, injector);
    const guardVal = isCanMatch(guard) ? guard.canMatch(route, segments) : injector.runInContext(() => guard(route, segments));
    return wrapIntoObservable(guardVal);
  });
  return of(canMatchObservables).pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
var NoMatch = class {
  constructor(segmentGroup) {
    this.segmentGroup = segmentGroup || null;
  }
};
var AbsoluteRedirect = class extends Error {
  constructor(urlTree) {
    super();
    this.urlTree = urlTree;
  }
};
function noMatch$1(segmentGroup) {
  return throwError(new NoMatch(segmentGroup));
}
function namedOutletsRedirect(redirectTo) {
  return throwError(new RuntimeError(4e3, (typeof ngDevMode === "undefined" || ngDevMode) && `Only absolute redirects can have named outlets. redirectTo: '${redirectTo}'`));
}
function canLoadFails(route) {
  return throwError(navigationCancelingError(
    (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot load children because the guard of the route "path: '${route.path}'" returned false`,
    3
    /* NavigationCancellationCode.GuardRejected */
  ));
}
var ApplyRedirects = class {
  constructor(urlSerializer, urlTree) {
    this.urlSerializer = urlSerializer;
    this.urlTree = urlTree;
  }
  noMatchError(e) {
    return new RuntimeError(4002, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot match any routes. URL Segment: '${e.segmentGroup}'`);
  }
  lineralizeSegments(route, urlTree) {
    let res = [];
    let c = urlTree.root;
    while (true) {
      res = res.concat(c.segments);
      if (c.numberOfChildren === 0) {
        return of(res);
      }
      if (c.numberOfChildren > 1 || !c.children[PRIMARY_OUTLET]) {
        return namedOutletsRedirect(route.redirectTo);
      }
      c = c.children[PRIMARY_OUTLET];
    }
  }
  applyRedirectCommands(segments, redirectTo, posParams) {
    const newTree = this.applyRedirectCreateUrlTree(redirectTo, this.urlSerializer.parse(redirectTo), segments, posParams);
    if (redirectTo.startsWith("/")) {
      throw new AbsoluteRedirect(newTree);
    }
    return newTree;
  }
  applyRedirectCreateUrlTree(redirectTo, urlTree, segments, posParams) {
    const newRoot = this.createSegmentGroup(redirectTo, urlTree.root, segments, posParams);
    return new UrlTree(newRoot, this.createQueryParams(urlTree.queryParams, this.urlTree.queryParams), urlTree.fragment);
  }
  createQueryParams(redirectToParams, actualParams) {
    const res = {};
    Object.entries(redirectToParams).forEach(([k, v]) => {
      const copySourceValue = typeof v === "string" && v.startsWith(":");
      if (copySourceValue) {
        const sourceName = v.substring(1);
        res[k] = actualParams[sourceName];
      } else {
        res[k] = v;
      }
    });
    return res;
  }
  createSegmentGroup(redirectTo, group, segments, posParams) {
    const updatedSegments = this.createSegments(redirectTo, group.segments, segments, posParams);
    let children = {};
    Object.entries(group.children).forEach(([name, child]) => {
      children[name] = this.createSegmentGroup(redirectTo, child, segments, posParams);
    });
    return new UrlSegmentGroup(updatedSegments, children);
  }
  createSegments(redirectTo, redirectToSegments, actualSegments, posParams) {
    return redirectToSegments.map((s) => s.path.startsWith(":") ? this.findPosParam(redirectTo, s, posParams) : this.findOrReturn(s, actualSegments));
  }
  findPosParam(redirectTo, redirectToUrlSegment, posParams) {
    const pos = posParams[redirectToUrlSegment.path.substring(1)];
    if (!pos)
      throw new RuntimeError(4001, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot redirect to '${redirectTo}'. Cannot find '${redirectToUrlSegment.path}'.`);
    return pos;
  }
  findOrReturn(redirectToUrlSegment, actualSegments) {
    let idx = 0;
    for (const s of actualSegments) {
      if (s.path === redirectToUrlSegment.path) {
        actualSegments.splice(idx);
        return s;
      }
      idx++;
    }
    return redirectToUrlSegment;
  }
};
var noMatch = {
  matched: false,
  consumedSegments: [],
  remainingSegments: [],
  parameters: {},
  positionalParamSegments: {}
};
function matchWithChecks(segmentGroup, route, segments, injector, urlSerializer) {
  const result = match(segmentGroup, route, segments);
  if (!result.matched) {
    return of(result);
  }
  injector = getOrCreateRouteInjectorIfNeeded(route, injector);
  return runCanMatchGuards(injector, route, segments, urlSerializer).pipe(map((v) => v === true ? result : __spreadValues({}, noMatch)));
}
function match(segmentGroup, route, segments) {
  if (route.path === "") {
    if (route.pathMatch === "full" && (segmentGroup.hasChildren() || segments.length > 0)) {
      return __spreadValues({}, noMatch);
    }
    return {
      matched: true,
      consumedSegments: [],
      remainingSegments: segments,
      parameters: {},
      positionalParamSegments: {}
    };
  }
  const matcher = route.matcher || defaultUrlMatcher;
  const res = matcher(segments, segmentGroup, route);
  if (!res)
    return __spreadValues({}, noMatch);
  const posParams = {};
  Object.entries(res.posParams ?? {}).forEach(([k, v]) => {
    posParams[k] = v.path;
  });
  const parameters = res.consumed.length > 0 ? __spreadValues(__spreadValues({}, posParams), res.consumed[res.consumed.length - 1].parameters) : posParams;
  return {
    matched: true,
    consumedSegments: res.consumed,
    remainingSegments: segments.slice(res.consumed.length),
    // TODO(atscott): investigate combining parameters and positionalParamSegments
    parameters,
    positionalParamSegments: res.posParams ?? {}
  };
}
function split(segmentGroup, consumedSegments, slicedSegments, config) {
  if (slicedSegments.length > 0 && containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, config)) {
    const s2 = new UrlSegmentGroup(consumedSegments, createChildrenForEmptyPaths(config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
    return {
      segmentGroup: s2,
      slicedSegments: []
    };
  }
  if (slicedSegments.length === 0 && containsEmptyPathMatches(segmentGroup, slicedSegments, config)) {
    const s2 = new UrlSegmentGroup(segmentGroup.segments, addEmptyPathsToChildrenIfNeeded(segmentGroup, consumedSegments, slicedSegments, config, segmentGroup.children));
    return {
      segmentGroup: s2,
      slicedSegments
    };
  }
  const s = new UrlSegmentGroup(segmentGroup.segments, segmentGroup.children);
  return {
    segmentGroup: s,
    slicedSegments
  };
}
function addEmptyPathsToChildrenIfNeeded(segmentGroup, consumedSegments, slicedSegments, routes, children) {
  const res = {};
  for (const r of routes) {
    if (emptyPathMatch(segmentGroup, slicedSegments, r) && !children[getOutlet(r)]) {
      const s = new UrlSegmentGroup([], {});
      res[getOutlet(r)] = s;
    }
  }
  return __spreadValues(__spreadValues({}, children), res);
}
function createChildrenForEmptyPaths(routes, primarySegment) {
  const res = {};
  res[PRIMARY_OUTLET] = primarySegment;
  for (const r of routes) {
    if (r.path === "" && getOutlet(r) !== PRIMARY_OUTLET) {
      const s = new UrlSegmentGroup([], {});
      res[getOutlet(r)] = s;
    }
  }
  return res;
}
function containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, routes) {
  return routes.some((r) => emptyPathMatch(segmentGroup, slicedSegments, r) && getOutlet(r) !== PRIMARY_OUTLET);
}
function containsEmptyPathMatches(segmentGroup, slicedSegments, routes) {
  return routes.some((r) => emptyPathMatch(segmentGroup, slicedSegments, r));
}
function emptyPathMatch(segmentGroup, slicedSegments, r) {
  if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r.pathMatch === "full") {
    return false;
  }
  return r.path === "";
}
function isImmediateMatch(route, rawSegment, segments, outlet) {
  if (getOutlet(route) !== outlet && (outlet === PRIMARY_OUTLET || !emptyPathMatch(rawSegment, segments, route))) {
    return false;
  }
  if (route.path === "**") {
    return true;
  }
  return match(rawSegment, route, segments).matched;
}
function noLeftoversInUrl(segmentGroup, segments, outlet) {
  return segments.length === 0 && !segmentGroup.children[outlet];
}
var NoLeftoversInUrl = class {
};
function recognize$1(injector, configLoader, rootComponentType, config, urlTree, urlSerializer, paramsInheritanceStrategy = "emptyOnly") {
  return new Recognizer(injector, configLoader, rootComponentType, config, urlTree, paramsInheritanceStrategy, urlSerializer).recognize();
}
var MAX_ALLOWED_REDIRECTS = 31;
var Recognizer = class {
  constructor(injector, configLoader, rootComponentType, config, urlTree, paramsInheritanceStrategy, urlSerializer) {
    this.injector = injector;
    this.configLoader = configLoader;
    this.rootComponentType = rootComponentType;
    this.config = config;
    this.urlTree = urlTree;
    this.paramsInheritanceStrategy = paramsInheritanceStrategy;
    this.urlSerializer = urlSerializer;
    this.applyRedirects = new ApplyRedirects(this.urlSerializer, this.urlTree);
    this.absoluteRedirectCount = 0;
    this.allowRedirects = true;
  }
  noMatchError(e) {
    return new RuntimeError(4002, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot match any routes. URL Segment: '${e.segmentGroup}'`);
  }
  recognize() {
    const rootSegmentGroup = split(this.urlTree.root, [], [], this.config).segmentGroup;
    return this.match(rootSegmentGroup).pipe(map((children) => {
      const root = new ActivatedRouteSnapshot([], Object.freeze({}), Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, PRIMARY_OUTLET, this.rootComponentType, null, {});
      const rootNode = new TreeNode(root, children);
      const routeState = new RouterStateSnapshot("", rootNode);
      const tree2 = createUrlTreeFromSnapshot(root, [], this.urlTree.queryParams, this.urlTree.fragment);
      tree2.queryParams = this.urlTree.queryParams;
      routeState.url = this.urlSerializer.serialize(tree2);
      this.inheritParamsAndData(routeState._root, null);
      return {
        state: routeState,
        tree: tree2
      };
    }));
  }
  match(rootSegmentGroup) {
    const expanded$ = this.processSegmentGroup(this.injector, this.config, rootSegmentGroup, PRIMARY_OUTLET);
    return expanded$.pipe(catchError((e) => {
      if (e instanceof AbsoluteRedirect) {
        this.urlTree = e.urlTree;
        return this.match(e.urlTree.root);
      }
      if (e instanceof NoMatch) {
        throw this.noMatchError(e);
      }
      throw e;
    }));
  }
  inheritParamsAndData(routeNode, parent) {
    const route = routeNode.value;
    const i = getInherited(route, parent, this.paramsInheritanceStrategy);
    route.params = Object.freeze(i.params);
    route.data = Object.freeze(i.data);
    routeNode.children.forEach((n) => this.inheritParamsAndData(n, route));
  }
  processSegmentGroup(injector, config, segmentGroup, outlet) {
    if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
      return this.processChildren(injector, config, segmentGroup);
    }
    return this.processSegment(injector, config, segmentGroup, segmentGroup.segments, outlet, true).pipe(map((child) => child instanceof TreeNode ? [child] : []));
  }
  /**
   * Matches every child outlet in the `segmentGroup` to a `Route` in the config. Returns `null` if
   * we cannot find a match for _any_ of the children.
   *
   * @param config - The `Routes` to match against
   * @param segmentGroup - The `UrlSegmentGroup` whose children need to be matched against the
   *     config.
   */
  processChildren(injector, config, segmentGroup) {
    const childOutlets = [];
    for (const child of Object.keys(segmentGroup.children)) {
      if (child === "primary") {
        childOutlets.unshift(child);
      } else {
        childOutlets.push(child);
      }
    }
    return from(childOutlets).pipe(concatMap((childOutlet) => {
      const child = segmentGroup.children[childOutlet];
      const sortedConfig = sortByMatchingOutlets(config, childOutlet);
      return this.processSegmentGroup(injector, sortedConfig, child, childOutlet);
    }), scan((children, outletChildren) => {
      children.push(...outletChildren);
      return children;
    }), defaultIfEmpty(null), last(), mergeMap((children) => {
      if (children === null)
        return noMatch$1(segmentGroup);
      const mergedChildren = mergeEmptyPathMatches(children);
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        checkOutletNameUniqueness(mergedChildren);
      }
      sortActivatedRouteSnapshots(mergedChildren);
      return of(mergedChildren);
    }));
  }
  processSegment(injector, routes, segmentGroup, segments, outlet, allowRedirects) {
    return from(routes).pipe(concatMap((r) => {
      return this.processSegmentAgainstRoute(r._injector ?? injector, routes, r, segmentGroup, segments, outlet, allowRedirects).pipe(catchError((e) => {
        if (e instanceof NoMatch) {
          return of(null);
        }
        throw e;
      }));
    }), first((x) => !!x), catchError((e) => {
      if (isEmptyError(e)) {
        if (noLeftoversInUrl(segmentGroup, segments, outlet)) {
          return of(new NoLeftoversInUrl());
        }
        return noMatch$1(segmentGroup);
      }
      throw e;
    }));
  }
  processSegmentAgainstRoute(injector, routes, route, rawSegment, segments, outlet, allowRedirects) {
    if (!isImmediateMatch(route, rawSegment, segments, outlet))
      return noMatch$1(rawSegment);
    if (route.redirectTo === void 0) {
      return this.matchSegmentAgainstRoute(injector, rawSegment, route, segments, outlet);
    }
    if (this.allowRedirects && allowRedirects) {
      return this.expandSegmentAgainstRouteUsingRedirect(injector, rawSegment, routes, route, segments, outlet);
    }
    return noMatch$1(rawSegment);
  }
  expandSegmentAgainstRouteUsingRedirect(injector, segmentGroup, routes, route, segments, outlet) {
    const {
      matched,
      consumedSegments,
      positionalParamSegments,
      remainingSegments
    } = route.path === "**" ? createWildcardMatchResult(segments) : match(segmentGroup, route, segments);
    if (!matched)
      return noMatch$1(segmentGroup);
    if (route.redirectTo.startsWith("/")) {
      this.absoluteRedirectCount++;
      if (this.absoluteRedirectCount > MAX_ALLOWED_REDIRECTS) {
        if (ngDevMode) {
          throw new RuntimeError(4016, `Detected possible infinite redirect when redirecting from '${this.urlTree}' to '${route.redirectTo}'.
This is currently a dev mode only error but will become a call stack size exceeded error in production in a future major version.`);
        }
        this.allowRedirects = false;
      }
    }
    const newTree = this.applyRedirects.applyRedirectCommands(consumedSegments, route.redirectTo, positionalParamSegments);
    return this.applyRedirects.lineralizeSegments(route, newTree).pipe(mergeMap((newSegments) => {
      return this.processSegment(injector, routes, segmentGroup, newSegments.concat(remainingSegments), outlet, false);
    }));
  }
  matchSegmentAgainstRoute(injector, rawSegment, route, segments, outlet) {
    let matchResult;
    if (route.path === "**") {
      matchResult = of(createWildcardMatchResult(segments));
      rawSegment.children = {};
    } else {
      matchResult = matchWithChecks(rawSegment, route, segments, injector, this.urlSerializer);
    }
    return matchResult.pipe(switchMap((result) => {
      if (!result.matched) {
        return noMatch$1(rawSegment);
      }
      injector = route._injector ?? injector;
      return this.getChildConfig(injector, route, segments).pipe(switchMap(({
        routes: childConfig
      }) => {
        const childInjector = route._loadedInjector ?? injector;
        const {
          consumedSegments,
          remainingSegments,
          parameters
        } = result;
        const snapshot = new ActivatedRouteSnapshot(consumedSegments, parameters, Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, getData(route), getOutlet(route), route.component ?? route._loadedComponent ?? null, route, getResolve(route));
        const {
          segmentGroup,
          slicedSegments
        } = split(rawSegment, consumedSegments, remainingSegments, childConfig);
        if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
          return this.processChildren(childInjector, childConfig, segmentGroup).pipe(map((children) => {
            if (children === null) {
              return null;
            }
            return new TreeNode(snapshot, children);
          }));
        }
        if (childConfig.length === 0 && slicedSegments.length === 0) {
          return of(new TreeNode(snapshot, []));
        }
        const matchedOnOutlet = getOutlet(route) === outlet;
        return this.processSegment(childInjector, childConfig, segmentGroup, slicedSegments, matchedOnOutlet ? PRIMARY_OUTLET : outlet, true).pipe(map((child) => {
          return new TreeNode(snapshot, child instanceof TreeNode ? [child] : []);
        }));
      }));
    }));
  }
  getChildConfig(injector, route, segments) {
    if (route.children) {
      return of({
        routes: route.children,
        injector
      });
    }
    if (route.loadChildren) {
      if (route._loadedRoutes !== void 0) {
        return of({
          routes: route._loadedRoutes,
          injector: route._loadedInjector
        });
      }
      return runCanLoadGuards(injector, route, segments, this.urlSerializer).pipe(mergeMap((shouldLoadResult) => {
        if (shouldLoadResult) {
          return this.configLoader.loadChildren(injector, route).pipe(tap((cfg) => {
            route._loadedRoutes = cfg.routes;
            route._loadedInjector = cfg.injector;
          }));
        }
        return canLoadFails(route);
      }));
    }
    return of({
      routes: [],
      injector
    });
  }
};
function sortActivatedRouteSnapshots(nodes) {
  nodes.sort((a, b) => {
    if (a.value.outlet === PRIMARY_OUTLET)
      return -1;
    if (b.value.outlet === PRIMARY_OUTLET)
      return 1;
    return a.value.outlet.localeCompare(b.value.outlet);
  });
}
function hasEmptyPathConfig(node) {
  const config = node.value.routeConfig;
  return config && config.path === "";
}
function mergeEmptyPathMatches(nodes) {
  const result = [];
  const mergedNodes = /* @__PURE__ */ new Set();
  for (const node of nodes) {
    if (!hasEmptyPathConfig(node)) {
      result.push(node);
      continue;
    }
    const duplicateEmptyPathNode = result.find((resultNode) => node.value.routeConfig === resultNode.value.routeConfig);
    if (duplicateEmptyPathNode !== void 0) {
      duplicateEmptyPathNode.children.push(...node.children);
      mergedNodes.add(duplicateEmptyPathNode);
    } else {
      result.push(node);
    }
  }
  for (const mergedNode of mergedNodes) {
    const mergedChildren = mergeEmptyPathMatches(mergedNode.children);
    result.push(new TreeNode(mergedNode.value, mergedChildren));
  }
  return result.filter((n) => !mergedNodes.has(n));
}
function checkOutletNameUniqueness(nodes) {
  const names = {};
  nodes.forEach((n) => {
    const routeWithSameOutletName = names[n.value.outlet];
    if (routeWithSameOutletName) {
      const p = routeWithSameOutletName.url.map((s) => s.toString()).join("/");
      const c = n.value.url.map((s) => s.toString()).join("/");
      throw new RuntimeError(4006, (typeof ngDevMode === "undefined" || ngDevMode) && `Two segments cannot have the same outlet name: '${p}' and '${c}'.`);
    }
    names[n.value.outlet] = n.value;
  });
}
function getData(route) {
  return route.data || {};
}
function getResolve(route) {
  return route.resolve || {};
}
function createWildcardMatchResult(segments) {
  return {
    matched: true,
    parameters: segments.length > 0 ? last2(segments).parameters : {},
    consumedSegments: segments,
    remainingSegments: [],
    positionalParamSegments: {}
  };
}
function recognize(injector, configLoader, rootComponentType, config, serializer, paramsInheritanceStrategy) {
  return mergeMap((t) => recognize$1(injector, configLoader, rootComponentType, config, t.extractedUrl, serializer, paramsInheritanceStrategy).pipe(map(({
    state: targetSnapshot,
    tree: urlAfterRedirects
  }) => {
    return __spreadProps(__spreadValues({}, t), {
      targetSnapshot,
      urlAfterRedirects
    });
  })));
}
function resolveData(paramsInheritanceStrategy, injector) {
  return mergeMap((t) => {
    const {
      targetSnapshot,
      guards: {
        canActivateChecks
      }
    } = t;
    if (!canActivateChecks.length) {
      return of(t);
    }
    const routesWithResolversToRun = canActivateChecks.map((check) => check.route);
    const routesWithResolversSet = new Set(routesWithResolversToRun);
    const routesNeedingDataUpdates = (
      // List all ActivatedRoutes in an array, starting from the parent of the first route to run
      // resolvers. We go from the parent because the first route might have siblings that also
      // run resolvers.
      flattenRouteTree(routesWithResolversToRun[0].parent).slice(1)
    );
    let routesProcessed = 0;
    return from(routesNeedingDataUpdates).pipe(concatMap((route) => {
      if (routesWithResolversSet.has(route)) {
        return runResolve(route, targetSnapshot, paramsInheritanceStrategy, injector);
      } else {
        route.data = getInherited(route, route.parent, paramsInheritanceStrategy).resolve;
        return of(void 0);
      }
    }), tap(() => routesProcessed++), takeLast(1), mergeMap((_) => routesProcessed === routesNeedingDataUpdates.length ? of(t) : EMPTY));
  });
}
function flattenRouteTree(route) {
  const descendants = route.children.map((child) => flattenRouteTree(child)).flat();
  return [route, ...descendants];
}
function runResolve(futureARS, futureRSS, paramsInheritanceStrategy, injector) {
  const config = futureARS.routeConfig;
  const resolve = futureARS._resolve;
  if (config?.title !== void 0 && !hasStaticTitle(config)) {
    resolve[RouteTitleKey] = config.title;
  }
  return resolveNode(resolve, futureARS, futureRSS, injector).pipe(map((resolvedData) => {
    futureARS._resolvedData = resolvedData;
    futureARS.data = getInherited(futureARS, futureARS.parent, paramsInheritanceStrategy).resolve;
    return null;
  }));
}
function resolveNode(resolve, futureARS, futureRSS, injector) {
  const keys = getDataKeys(resolve);
  if (keys.length === 0) {
    return of({});
  }
  const data2 = {};
  return from(keys).pipe(mergeMap((key) => getResolver(resolve[key], futureARS, futureRSS, injector).pipe(first(), tap((value) => {
    data2[key] = value;
  }))), takeLast(1), mapTo(data2), catchError((e) => isEmptyError(e) ? EMPTY : throwError(e)));
}
function getResolver(injectionToken, futureARS, futureRSS, injector) {
  const closestInjector = getClosestRouteInjector(futureARS) ?? injector;
  const resolver = getTokenOrFunctionIdentity(injectionToken, closestInjector);
  const resolverValue = resolver.resolve ? resolver.resolve(futureARS, futureRSS) : closestInjector.runInContext(() => resolver(futureARS, futureRSS));
  return wrapIntoObservable(resolverValue);
}
function switchTap(next) {
  return switchMap((v) => {
    const nextResult = next(v);
    if (nextResult) {
      return from(nextResult).pipe(map(() => v));
    }
    return of(v);
  });
}
var TitleStrategy = /* @__PURE__ */ (() => {
  const _TitleStrategy = class _TitleStrategy {
    /**
     * @returns The `title` of the deepest primary route.
     */
    buildTitle(snapshot) {
      let pageTitle;
      let route = snapshot.root;
      while (route !== void 0) {
        pageTitle = this.getResolvedTitleForRoute(route) ?? pageTitle;
        route = route.children.find((child) => child.outlet === PRIMARY_OUTLET);
      }
      return pageTitle;
    }
    /**
     * Given an `ActivatedRouteSnapshot`, returns the final value of the
     * `Route.title` property, which can either be a static string or a resolved value.
     */
    getResolvedTitleForRoute(snapshot) {
      return snapshot.data[RouteTitleKey];
    }
  };
  _TitleStrategy.\u0275fac = function TitleStrategy_Factory(t) {
    return new (t || _TitleStrategy)();
  };
  _TitleStrategy.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TitleStrategy,
    factory: () => (() => inject(DefaultTitleStrategy))(),
    providedIn: "root"
  });
  let TitleStrategy2 = _TitleStrategy;
  return TitleStrategy2;
})();
var DefaultTitleStrategy = /* @__PURE__ */ (() => {
  const _DefaultTitleStrategy = class _DefaultTitleStrategy extends TitleStrategy {
    constructor(title) {
      super();
      this.title = title;
    }
    /**
     * Sets the title of the browser to the given value.
     *
     * @param title The `pageTitle` from the deepest primary route.
     */
    updateTitle(snapshot) {
      const title = this.buildTitle(snapshot);
      if (title !== void 0) {
        this.title.setTitle(title);
      }
    }
  };
  _DefaultTitleStrategy.\u0275fac = function DefaultTitleStrategy_Factory(t) {
    return new (t || _DefaultTitleStrategy)(\u0275\u0275inject(Title));
  };
  _DefaultTitleStrategy.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DefaultTitleStrategy,
    factory: _DefaultTitleStrategy.\u0275fac,
    providedIn: "root"
  });
  let DefaultTitleStrategy2 = _DefaultTitleStrategy;
  return DefaultTitleStrategy2;
})();
var ROUTER_CONFIGURATION = /* @__PURE__ */ new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router config" : "", {
  providedIn: "root",
  factory: () => ({})
});
var ROUTES = /* @__PURE__ */ new InjectionToken("ROUTES");
var RouterConfigLoader = /* @__PURE__ */ (() => {
  const _RouterConfigLoader = class _RouterConfigLoader {
    constructor() {
      this.componentLoaders = /* @__PURE__ */ new WeakMap();
      this.childrenLoaders = /* @__PURE__ */ new WeakMap();
      this.compiler = inject(Compiler);
    }
    loadComponent(route) {
      if (this.componentLoaders.get(route)) {
        return this.componentLoaders.get(route);
      } else if (route._loadedComponent) {
        return of(route._loadedComponent);
      }
      if (this.onLoadStartListener) {
        this.onLoadStartListener(route);
      }
      const loadRunner = wrapIntoObservable(route.loadComponent()).pipe(map(maybeUnwrapDefaultExport), tap((component) => {
        if (this.onLoadEndListener) {
          this.onLoadEndListener(route);
        }
        (typeof ngDevMode === "undefined" || ngDevMode) && assertStandalone(route.path ?? "", component);
        route._loadedComponent = component;
      }), finalize(() => {
        this.componentLoaders.delete(route);
      }));
      const loader = new ConnectableObservable(loadRunner, () => new Subject()).pipe(refCount());
      this.componentLoaders.set(route, loader);
      return loader;
    }
    loadChildren(parentInjector, route) {
      if (this.childrenLoaders.get(route)) {
        return this.childrenLoaders.get(route);
      } else if (route._loadedRoutes) {
        return of({
          routes: route._loadedRoutes,
          injector: route._loadedInjector
        });
      }
      if (this.onLoadStartListener) {
        this.onLoadStartListener(route);
      }
      const moduleFactoryOrRoutes$ = loadChildren(route, this.compiler, parentInjector, this.onLoadEndListener);
      const loadRunner = moduleFactoryOrRoutes$.pipe(finalize(() => {
        this.childrenLoaders.delete(route);
      }));
      const loader = new ConnectableObservable(loadRunner, () => new Subject()).pipe(refCount());
      this.childrenLoaders.set(route, loader);
      return loader;
    }
  };
  _RouterConfigLoader.\u0275fac = function RouterConfigLoader_Factory(t) {
    return new (t || _RouterConfigLoader)();
  };
  _RouterConfigLoader.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RouterConfigLoader,
    factory: _RouterConfigLoader.\u0275fac,
    providedIn: "root"
  });
  let RouterConfigLoader2 = _RouterConfigLoader;
  return RouterConfigLoader2;
})();
function loadChildren(route, compiler, parentInjector, onLoadEndListener) {
  return wrapIntoObservable(route.loadChildren()).pipe(map(maybeUnwrapDefaultExport), mergeMap((t) => {
    if (t instanceof NgModuleFactory$1 || Array.isArray(t)) {
      return of(t);
    } else {
      return from(compiler.compileModuleAsync(t));
    }
  }), map((factoryOrRoutes) => {
    if (onLoadEndListener) {
      onLoadEndListener(route);
    }
    let injector;
    let rawRoutes;
    let requireStandaloneComponents = false;
    if (Array.isArray(factoryOrRoutes)) {
      rawRoutes = factoryOrRoutes;
      requireStandaloneComponents = true;
    } else {
      injector = factoryOrRoutes.create(parentInjector).injector;
      rawRoutes = injector.get(ROUTES, [], {
        optional: true,
        self: true
      }).flat();
    }
    const routes = rawRoutes.map(standardizeConfig);
    (typeof ngDevMode === "undefined" || ngDevMode) && validateConfig(routes, route.path, requireStandaloneComponents);
    return {
      routes,
      injector
    };
  }));
}
function isWrappedDefaultExport(value) {
  return value && typeof value === "object" && "default" in value;
}
function maybeUnwrapDefaultExport(input) {
  return isWrappedDefaultExport(input) ? input["default"] : input;
}
var UrlHandlingStrategy = /* @__PURE__ */ (() => {
  const _UrlHandlingStrategy = class _UrlHandlingStrategy {
  };
  _UrlHandlingStrategy.\u0275fac = function UrlHandlingStrategy_Factory(t) {
    return new (t || _UrlHandlingStrategy)();
  };
  _UrlHandlingStrategy.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UrlHandlingStrategy,
    factory: () => (() => inject(DefaultUrlHandlingStrategy))(),
    providedIn: "root"
  });
  let UrlHandlingStrategy2 = _UrlHandlingStrategy;
  return UrlHandlingStrategy2;
})();
var DefaultUrlHandlingStrategy = /* @__PURE__ */ (() => {
  const _DefaultUrlHandlingStrategy = class _DefaultUrlHandlingStrategy {
    shouldProcessUrl(url) {
      return true;
    }
    extract(url) {
      return url;
    }
    merge(newUrlPart, wholeUrl) {
      return newUrlPart;
    }
  };
  _DefaultUrlHandlingStrategy.\u0275fac = function DefaultUrlHandlingStrategy_Factory(t) {
    return new (t || _DefaultUrlHandlingStrategy)();
  };
  _DefaultUrlHandlingStrategy.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DefaultUrlHandlingStrategy,
    factory: _DefaultUrlHandlingStrategy.\u0275fac,
    providedIn: "root"
  });
  let DefaultUrlHandlingStrategy2 = _DefaultUrlHandlingStrategy;
  return DefaultUrlHandlingStrategy2;
})();
var CREATE_VIEW_TRANSITION = /* @__PURE__ */ new InjectionToken(ngDevMode ? "view transition helper" : "");
var VIEW_TRANSITION_OPTIONS = /* @__PURE__ */ new InjectionToken(ngDevMode ? "view transition options" : "");
var NavigationTransitions = /* @__PURE__ */ (() => {
  const _NavigationTransitions = class _NavigationTransitions {
    get hasRequestedNavigation() {
      return this.navigationId !== 0;
    }
    constructor() {
      this.currentNavigation = null;
      this.currentTransition = null;
      this.lastSuccessfulNavigation = null;
      this.events = new Subject();
      this.transitionAbortSubject = new Subject();
      this.configLoader = inject(RouterConfigLoader);
      this.environmentInjector = inject(EnvironmentInjector);
      this.urlSerializer = inject(UrlSerializer);
      this.rootContexts = inject(ChildrenOutletContexts);
      this.location = inject(Location);
      this.inputBindingEnabled = inject(INPUT_BINDER, {
        optional: true
      }) !== null;
      this.titleStrategy = inject(TitleStrategy);
      this.options = inject(ROUTER_CONFIGURATION, {
        optional: true
      }) || {};
      this.paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly";
      this.urlHandlingStrategy = inject(UrlHandlingStrategy);
      this.createViewTransition = inject(CREATE_VIEW_TRANSITION, {
        optional: true
      });
      this.navigationId = 0;
      this.afterPreactivation = () => of(void 0);
      this.rootComponentType = null;
      const onLoadStart = (r) => this.events.next(new RouteConfigLoadStart(r));
      const onLoadEnd = (r) => this.events.next(new RouteConfigLoadEnd(r));
      this.configLoader.onLoadEndListener = onLoadEnd;
      this.configLoader.onLoadStartListener = onLoadStart;
    }
    complete() {
      this.transitions?.complete();
    }
    handleNavigationRequest(request) {
      const id = ++this.navigationId;
      this.transitions?.next(__spreadProps(__spreadValues(__spreadValues({}, this.transitions.value), request), {
        id
      }));
    }
    setupNavigations(router, initialUrlTree, initialRouterState) {
      this.transitions = new BehaviorSubject({
        id: 0,
        currentUrlTree: initialUrlTree,
        currentRawUrl: initialUrlTree,
        extractedUrl: this.urlHandlingStrategy.extract(initialUrlTree),
        urlAfterRedirects: this.urlHandlingStrategy.extract(initialUrlTree),
        rawUrl: initialUrlTree,
        extras: {},
        resolve: null,
        reject: null,
        promise: Promise.resolve(true),
        source: IMPERATIVE_NAVIGATION,
        restoredState: null,
        currentSnapshot: initialRouterState.snapshot,
        targetSnapshot: null,
        currentRouterState: initialRouterState,
        targetRouterState: null,
        guards: {
          canActivateChecks: [],
          canDeactivateChecks: []
        },
        guardsResult: null
      });
      return this.transitions.pipe(
        filter((t) => t.id !== 0),
        // Extract URL
        map((t) => __spreadProps(__spreadValues({}, t), {
          extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl)
        })),
        // Using switchMap so we cancel executing navigations when a new one comes in
        switchMap((overallTransitionState) => {
          this.currentTransition = overallTransitionState;
          let completed = false;
          let errored = false;
          return of(overallTransitionState).pipe(
            // Store the Navigation object
            tap((t) => {
              this.currentNavigation = {
                id: t.id,
                initialUrl: t.rawUrl,
                extractedUrl: t.extractedUrl,
                trigger: t.source,
                extras: t.extras,
                previousNavigation: !this.lastSuccessfulNavigation ? null : __spreadProps(__spreadValues({}, this.lastSuccessfulNavigation), {
                  previousNavigation: null
                })
              };
            }),
            switchMap((t) => {
              const urlTransition = !router.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl();
              const onSameUrlNavigation = t.extras.onSameUrlNavigation ?? router.onSameUrlNavigation;
              if (!urlTransition && onSameUrlNavigation !== "reload") {
                const reason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation to ${t.rawUrl} was ignored because it is the same as the current Router URL.` : "";
                this.events.next(new NavigationSkipped(
                  t.id,
                  this.urlSerializer.serialize(t.rawUrl),
                  reason,
                  0
                  /* NavigationSkippedCode.IgnoredSameUrlNavigation */
                ));
                t.resolve(null);
                return EMPTY;
              }
              if (this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)) {
                return of(t).pipe(
                  // Fire NavigationStart event
                  switchMap((t2) => {
                    const transition = this.transitions?.getValue();
                    this.events.next(new NavigationStart(t2.id, this.urlSerializer.serialize(t2.extractedUrl), t2.source, t2.restoredState));
                    if (transition !== this.transitions?.getValue()) {
                      return EMPTY;
                    }
                    return Promise.resolve(t2);
                  }),
                  // Recognize
                  recognize(this.environmentInjector, this.configLoader, this.rootComponentType, router.config, this.urlSerializer, this.paramsInheritanceStrategy),
                  // Update URL if in `eager` update mode
                  tap((t2) => {
                    overallTransitionState.targetSnapshot = t2.targetSnapshot;
                    overallTransitionState.urlAfterRedirects = t2.urlAfterRedirects;
                    this.currentNavigation = __spreadProps(__spreadValues({}, this.currentNavigation), {
                      finalUrl: t2.urlAfterRedirects
                    });
                    const routesRecognized = new RoutesRecognized(t2.id, this.urlSerializer.serialize(t2.extractedUrl), this.urlSerializer.serialize(t2.urlAfterRedirects), t2.targetSnapshot);
                    this.events.next(routesRecognized);
                  })
                );
              } else if (urlTransition && this.urlHandlingStrategy.shouldProcessUrl(t.currentRawUrl)) {
                const {
                  id,
                  extractedUrl,
                  source,
                  restoredState,
                  extras
                } = t;
                const navStart = new NavigationStart(id, this.urlSerializer.serialize(extractedUrl), source, restoredState);
                this.events.next(navStart);
                const targetSnapshot = createEmptyState(extractedUrl, this.rootComponentType).snapshot;
                this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), {
                  targetSnapshot,
                  urlAfterRedirects: extractedUrl,
                  extras: __spreadProps(__spreadValues({}, extras), {
                    skipLocationChange: false,
                    replaceUrl: false
                  })
                });
                this.currentNavigation.finalUrl = extractedUrl;
                return of(overallTransitionState);
              } else {
                const reason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation was ignored because the UrlHandlingStrategy indicated neither the current URL ${t.currentRawUrl} nor target URL ${t.rawUrl} should be processed.` : "";
                this.events.next(new NavigationSkipped(
                  t.id,
                  this.urlSerializer.serialize(t.extractedUrl),
                  reason,
                  1
                  /* NavigationSkippedCode.IgnoredByUrlHandlingStrategy */
                ));
                t.resolve(null);
                return EMPTY;
              }
            }),
            // --- GUARDS ---
            tap((t) => {
              const guardsStart = new GuardsCheckStart(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot);
              this.events.next(guardsStart);
            }),
            map((t) => {
              this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), {
                guards: getAllRouteGuards(t.targetSnapshot, t.currentSnapshot, this.rootContexts)
              });
              return overallTransitionState;
            }),
            checkGuards(this.environmentInjector, (evt) => this.events.next(evt)),
            tap((t) => {
              overallTransitionState.guardsResult = t.guardsResult;
              if (isUrlTree(t.guardsResult)) {
                throw redirectingNavigationError(this.urlSerializer, t.guardsResult);
              }
              const guardsEnd = new GuardsCheckEnd(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot, !!t.guardsResult);
              this.events.next(guardsEnd);
            }),
            filter((t) => {
              if (!t.guardsResult) {
                this.cancelNavigationTransition(
                  t,
                  "",
                  3
                  /* NavigationCancellationCode.GuardRejected */
                );
                return false;
              }
              return true;
            }),
            // --- RESOLVE ---
            switchTap((t) => {
              if (t.guards.canActivateChecks.length) {
                return of(t).pipe(tap((t2) => {
                  const resolveStart = new ResolveStart(t2.id, this.urlSerializer.serialize(t2.extractedUrl), this.urlSerializer.serialize(t2.urlAfterRedirects), t2.targetSnapshot);
                  this.events.next(resolveStart);
                }), switchMap((t2) => {
                  let dataResolved = false;
                  return of(t2).pipe(resolveData(this.paramsInheritanceStrategy, this.environmentInjector), tap({
                    next: () => dataResolved = true,
                    complete: () => {
                      if (!dataResolved) {
                        this.cancelNavigationTransition(
                          t2,
                          typeof ngDevMode === "undefined" || ngDevMode ? `At least one route resolver didn't emit any value.` : "",
                          2
                          /* NavigationCancellationCode.NoDataFromResolver */
                        );
                      }
                    }
                  }));
                }), tap((t2) => {
                  const resolveEnd = new ResolveEnd(t2.id, this.urlSerializer.serialize(t2.extractedUrl), this.urlSerializer.serialize(t2.urlAfterRedirects), t2.targetSnapshot);
                  this.events.next(resolveEnd);
                }));
              }
              return void 0;
            }),
            // --- LOAD COMPONENTS ---
            switchTap((t) => {
              const loadComponents = (route) => {
                const loaders = [];
                if (route.routeConfig?.loadComponent && !route.routeConfig._loadedComponent) {
                  loaders.push(this.configLoader.loadComponent(route.routeConfig).pipe(tap((loadedComponent) => {
                    route.component = loadedComponent;
                  }), map(() => void 0)));
                }
                for (const child of route.children) {
                  loaders.push(...loadComponents(child));
                }
                return loaders;
              };
              return combineLatest(loadComponents(t.targetSnapshot.root)).pipe(defaultIfEmpty(), take(1));
            }),
            switchTap(() => this.afterPreactivation()),
            switchMap(() => {
              const {
                currentSnapshot,
                targetSnapshot
              } = overallTransitionState;
              const viewTransitionStarted = this.createViewTransition?.(this.environmentInjector, currentSnapshot.root, targetSnapshot.root);
              return viewTransitionStarted ? from(viewTransitionStarted).pipe(map(() => overallTransitionState)) : of(overallTransitionState);
            }),
            map((t) => {
              const targetRouterState = createRouterState(router.routeReuseStrategy, t.targetSnapshot, t.currentRouterState);
              this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), {
                targetRouterState
              });
              this.currentNavigation.targetRouterState = targetRouterState;
              return overallTransitionState;
            }),
            tap(() => {
              this.events.next(new BeforeActivateRoutes());
            }),
            activateRoutes(this.rootContexts, router.routeReuseStrategy, (evt) => this.events.next(evt), this.inputBindingEnabled),
            // Ensure that if some observable used to drive the transition doesn't
            // complete, the navigation still finalizes This should never happen, but
            // this is done as a safety measure to avoid surfacing this error (#49567).
            take(1),
            tap({
              next: (t) => {
                completed = true;
                this.lastSuccessfulNavigation = this.currentNavigation;
                this.events.next(new NavigationEnd(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects)));
                this.titleStrategy?.updateTitle(t.targetRouterState.snapshot);
                t.resolve(true);
              },
              complete: () => {
                completed = true;
              }
            }),
            // There used to be a lot more logic happening directly within the
            // transition Observable. Some of this logic has been refactored out to
            // other places but there may still be errors that happen there. This gives
            // us a way to cancel the transition from the outside. This may also be
            // required in the future to support something like the abort signal of the
            // Navigation API where the navigation gets aborted from outside the
            // transition.
            takeUntil(this.transitionAbortSubject.pipe(tap((err) => {
              throw err;
            }))),
            finalize(() => {
              if (!completed && !errored) {
                const cancelationReason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation ID ${overallTransitionState.id} is not equal to the current navigation id ${this.navigationId}` : "";
                this.cancelNavigationTransition(
                  overallTransitionState,
                  cancelationReason,
                  1
                  /* NavigationCancellationCode.SupersededByNewNavigation */
                );
              }
              if (this.currentNavigation?.id === overallTransitionState.id) {
                this.currentNavigation = null;
              }
            }),
            catchError((e) => {
              errored = true;
              if (isNavigationCancelingError$1(e)) {
                this.events.next(new NavigationCancel(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), e.message, e.cancellationCode));
                if (!isRedirectingNavigationCancelingError$1(e)) {
                  overallTransitionState.resolve(false);
                } else {
                  this.events.next(new RedirectRequest(e.url));
                }
              } else {
                this.events.next(new NavigationError(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), e, overallTransitionState.targetSnapshot ?? void 0));
                try {
                  overallTransitionState.resolve(router.errorHandler(e));
                } catch (ee) {
                  overallTransitionState.reject(ee);
                }
              }
              return EMPTY;
            })
          );
        })
      );
    }
    cancelNavigationTransition(t, reason, code) {
      const navCancel = new NavigationCancel(t.id, this.urlSerializer.serialize(t.extractedUrl), reason, code);
      this.events.next(navCancel);
      t.resolve(false);
    }
    /**
     * @returns Whether we're navigating to somewhere that is not what the Router is
     * currently set to.
     */
    isUpdatingInternalState() {
      return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString();
    }
    /**
     * @returns Whether we're updating the browser URL to something new (navigation is going
     * to somewhere not displayed in the URL bar and we will update the URL
     * bar if navigation succeeds).
     */
    isUpdatedBrowserUrl() {
      const extractedBrowserUrl = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(true)));
      return extractedBrowserUrl.toString() !== this.currentTransition?.extractedUrl.toString() && !this.currentTransition?.extras.skipLocationChange;
    }
  };
  _NavigationTransitions.\u0275fac = function NavigationTransitions_Factory(t) {
    return new (t || _NavigationTransitions)();
  };
  _NavigationTransitions.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NavigationTransitions,
    factory: _NavigationTransitions.\u0275fac,
    providedIn: "root"
  });
  let NavigationTransitions2 = _NavigationTransitions;
  return NavigationTransitions2;
})();
function isBrowserTriggeredNavigation(source) {
  return source !== IMPERATIVE_NAVIGATION;
}
var RouteReuseStrategy = /* @__PURE__ */ (() => {
  const _RouteReuseStrategy = class _RouteReuseStrategy {
  };
  _RouteReuseStrategy.\u0275fac = function RouteReuseStrategy_Factory(t) {
    return new (t || _RouteReuseStrategy)();
  };
  _RouteReuseStrategy.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RouteReuseStrategy,
    factory: () => (() => inject(DefaultRouteReuseStrategy))(),
    providedIn: "root"
  });
  let RouteReuseStrategy2 = _RouteReuseStrategy;
  return RouteReuseStrategy2;
})();
var BaseRouteReuseStrategy = class {
  /**
   * Whether the given route should detach for later reuse.
   * Always returns false for `BaseRouteReuseStrategy`.
   * */
  shouldDetach(route) {
    return false;
  }
  /**
   * A no-op; the route is never stored since this strategy never detaches routes for later re-use.
   */
  store(route, detachedTree) {
  }
  /** Returns `false`, meaning the route (and its subtree) is never reattached */
  shouldAttach(route) {
    return false;
  }
  /** Returns `null` because this strategy does not store routes for later re-use. */
  retrieve(route) {
    return null;
  }
  /**
   * Determines if a route should be reused.
   * This strategy returns `true` when the future route config and current route config are
   * identical.
   */
  shouldReuseRoute(future, curr) {
    return future.routeConfig === curr.routeConfig;
  }
};
var DefaultRouteReuseStrategy = /* @__PURE__ */ (() => {
  const _DefaultRouteReuseStrategy = class _DefaultRouteReuseStrategy extends BaseRouteReuseStrategy {
  };
  _DefaultRouteReuseStrategy.\u0275fac = /* @__PURE__ */ (() => {
    let \u0275DefaultRouteReuseStrategy_BaseFactory;
    return function DefaultRouteReuseStrategy_Factory(t) {
      return (\u0275DefaultRouteReuseStrategy_BaseFactory || (\u0275DefaultRouteReuseStrategy_BaseFactory = \u0275\u0275getInheritedFactory(_DefaultRouteReuseStrategy)))(t || _DefaultRouteReuseStrategy);
    };
  })();
  _DefaultRouteReuseStrategy.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DefaultRouteReuseStrategy,
    factory: _DefaultRouteReuseStrategy.\u0275fac,
    providedIn: "root"
  });
  let DefaultRouteReuseStrategy2 = _DefaultRouteReuseStrategy;
  return DefaultRouteReuseStrategy2;
})();
var StateManager = /* @__PURE__ */ (() => {
  const _StateManager = class _StateManager {
  };
  _StateManager.\u0275fac = function StateManager_Factory(t) {
    return new (t || _StateManager)();
  };
  _StateManager.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StateManager,
    factory: () => (() => inject(HistoryStateManager))(),
    providedIn: "root"
  });
  let StateManager2 = _StateManager;
  return StateManager2;
})();
var HistoryStateManager = /* @__PURE__ */ (() => {
  const _HistoryStateManager = class _HistoryStateManager extends StateManager {
    constructor() {
      super(...arguments);
      this.location = inject(Location);
      this.urlSerializer = inject(UrlSerializer);
      this.options = inject(ROUTER_CONFIGURATION, {
        optional: true
      }) || {};
      this.canceledNavigationResolution = this.options.canceledNavigationResolution || "replace";
      this.urlHandlingStrategy = inject(UrlHandlingStrategy);
      this.urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
      this.currentUrlTree = new UrlTree();
      this.rawUrlTree = this.currentUrlTree;
      this.currentPageId = 0;
      this.lastSuccessfulId = -1;
      this.routerState = createEmptyState(this.currentUrlTree, null);
      this.stateMemento = this.createStateMemento();
    }
    getCurrentUrlTree() {
      return this.currentUrlTree;
    }
    getRawUrlTree() {
      return this.rawUrlTree;
    }
    restoredState() {
      return this.location.getState();
    }
    /**
     * The ɵrouterPageId of whatever page is currently active in the browser history. This is
     * important for computing the target page id for new navigations because we need to ensure each
     * page id in the browser history is 1 more than the previous entry.
     */
    get browserPageId() {
      if (this.canceledNavigationResolution !== "computed") {
        return this.currentPageId;
      }
      return this.restoredState()?.\u0275routerPageId ?? this.currentPageId;
    }
    getRouterState() {
      return this.routerState;
    }
    createStateMemento() {
      return {
        rawUrlTree: this.rawUrlTree,
        currentUrlTree: this.currentUrlTree,
        routerState: this.routerState
      };
    }
    registerNonRouterCurrentEntryChangeListener(listener) {
      return this.location.subscribe((event) => {
        if (event["type"] === "popstate") {
          listener(event["url"], event.state);
        }
      });
    }
    handleRouterEvent(e, currentTransition) {
      if (e instanceof NavigationStart) {
        this.stateMemento = this.createStateMemento();
      } else if (e instanceof NavigationSkipped) {
        this.rawUrlTree = currentTransition.initialUrl;
      } else if (e instanceof RoutesRecognized) {
        if (this.urlUpdateStrategy === "eager") {
          if (!currentTransition.extras.skipLocationChange) {
            const rawUrl = this.urlHandlingStrategy.merge(currentTransition.finalUrl, currentTransition.initialUrl);
            this.setBrowserUrl(rawUrl, currentTransition);
          }
        }
      } else if (e instanceof BeforeActivateRoutes) {
        this.currentUrlTree = currentTransition.finalUrl;
        this.rawUrlTree = this.urlHandlingStrategy.merge(currentTransition.finalUrl, currentTransition.initialUrl);
        this.routerState = currentTransition.targetRouterState;
        if (this.urlUpdateStrategy === "deferred") {
          if (!currentTransition.extras.skipLocationChange) {
            this.setBrowserUrl(this.rawUrlTree, currentTransition);
          }
        }
      } else if (e instanceof NavigationCancel && (e.code === 3 || e.code === 2)) {
        this.restoreHistory(currentTransition);
      } else if (e instanceof NavigationError) {
        this.restoreHistory(currentTransition, true);
      } else if (e instanceof NavigationEnd) {
        this.lastSuccessfulId = e.id;
        this.currentPageId = this.browserPageId;
      }
    }
    setBrowserUrl(url, transition) {
      const path = this.urlSerializer.serialize(url);
      if (this.location.isCurrentPathEqualTo(path) || !!transition.extras.replaceUrl) {
        const currentBrowserPageId = this.browserPageId;
        const state = __spreadValues(__spreadValues({}, transition.extras.state), this.generateNgRouterState(transition.id, currentBrowserPageId));
        this.location.replaceState(path, "", state);
      } else {
        const state = __spreadValues(__spreadValues({}, transition.extras.state), this.generateNgRouterState(transition.id, this.browserPageId + 1));
        this.location.go(path, "", state);
      }
    }
    /**
     * Performs the necessary rollback action to restore the browser URL to the
     * state before the transition.
     */
    restoreHistory(navigation, restoringFromCaughtError = false) {
      if (this.canceledNavigationResolution === "computed") {
        const currentBrowserPageId = this.browserPageId;
        const targetPagePosition = this.currentPageId - currentBrowserPageId;
        if (targetPagePosition !== 0) {
          this.location.historyGo(targetPagePosition);
        } else if (this.currentUrlTree === navigation.finalUrl && targetPagePosition === 0) {
          this.resetState(navigation);
          this.resetUrlToCurrentUrlTree();
        } else {
        }
      } else if (this.canceledNavigationResolution === "replace") {
        if (restoringFromCaughtError) {
          this.resetState(navigation);
        }
        this.resetUrlToCurrentUrlTree();
      }
    }
    resetState(navigation) {
      this.routerState = this.stateMemento.routerState;
      this.currentUrlTree = this.stateMemento.currentUrlTree;
      this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, navigation.finalUrl ?? this.rawUrlTree);
    }
    resetUrlToCurrentUrlTree() {
      this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId));
    }
    generateNgRouterState(navigationId, routerPageId) {
      if (this.canceledNavigationResolution === "computed") {
        return {
          navigationId,
          \u0275routerPageId: routerPageId
        };
      }
      return {
        navigationId
      };
    }
  };
  _HistoryStateManager.\u0275fac = /* @__PURE__ */ (() => {
    let \u0275HistoryStateManager_BaseFactory;
    return function HistoryStateManager_Factory(t) {
      return (\u0275HistoryStateManager_BaseFactory || (\u0275HistoryStateManager_BaseFactory = \u0275\u0275getInheritedFactory(_HistoryStateManager)))(t || _HistoryStateManager);
    };
  })();
  _HistoryStateManager.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _HistoryStateManager,
    factory: _HistoryStateManager.\u0275fac,
    providedIn: "root"
  });
  let HistoryStateManager2 = _HistoryStateManager;
  return HistoryStateManager2;
})();
var NavigationResult = /* @__PURE__ */ function(NavigationResult2) {
  NavigationResult2[NavigationResult2["COMPLETE"] = 0] = "COMPLETE";
  NavigationResult2[NavigationResult2["FAILED"] = 1] = "FAILED";
  NavigationResult2[NavigationResult2["REDIRECTING"] = 2] = "REDIRECTING";
  return NavigationResult2;
}(NavigationResult || {});
function afterNextNavigation(router, action) {
  router.events.pipe(filter((e) => e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError || e instanceof NavigationSkipped), map((e) => {
    if (e instanceof NavigationEnd || e instanceof NavigationSkipped) {
      return NavigationResult.COMPLETE;
    }
    const redirecting = e instanceof NavigationCancel ? e.code === 0 || e.code === 1 : false;
    return redirecting ? NavigationResult.REDIRECTING : NavigationResult.FAILED;
  }), filter((result) => result !== NavigationResult.REDIRECTING), take(1)).subscribe(() => {
    action();
  });
}
function defaultErrorHandler(error) {
  throw error;
}
var exactMatchOptions = {
  paths: "exact",
  fragment: "ignored",
  matrixParams: "ignored",
  queryParams: "exact"
};
var subsetMatchOptions = {
  paths: "subset",
  fragment: "ignored",
  matrixParams: "ignored",
  queryParams: "subset"
};
var Router = /* @__PURE__ */ (() => {
  const _Router = class _Router {
    get currentUrlTree() {
      return this.stateManager.getCurrentUrlTree();
    }
    get rawUrlTree() {
      return this.stateManager.getRawUrlTree();
    }
    /**
     * An event stream for routing events.
     */
    get events() {
      return this._events;
    }
    /**
     * The current state of routing in this NgModule.
     */
    get routerState() {
      return this.stateManager.getRouterState();
    }
    constructor() {
      this.disposed = false;
      this.isNgZoneEnabled = false;
      this.console = inject(Console);
      this.stateManager = inject(StateManager);
      this.options = inject(ROUTER_CONFIGURATION, {
        optional: true
      }) || {};
      this.pendingTasks = inject(InitialRenderPendingTasks);
      this.urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
      this.navigationTransitions = inject(NavigationTransitions);
      this.urlSerializer = inject(UrlSerializer);
      this.location = inject(Location);
      this.urlHandlingStrategy = inject(UrlHandlingStrategy);
      this._events = new Subject();
      this.errorHandler = this.options.errorHandler || defaultErrorHandler;
      this.navigated = false;
      this.routeReuseStrategy = inject(RouteReuseStrategy);
      this.onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
      this.config = inject(ROUTES, {
        optional: true
      })?.flat() ?? [];
      this.componentInputBindingEnabled = !!inject(INPUT_BINDER, {
        optional: true
      });
      this.eventsSubscription = new Subscription();
      this.isNgZoneEnabled = inject(NgZone) instanceof NgZone && NgZone.isInAngularZone();
      this.resetConfig(this.config);
      this.navigationTransitions.setupNavigations(this, this.currentUrlTree, this.routerState).subscribe({
        error: (e) => {
          this.console.warn(ngDevMode ? `Unhandled Navigation Error: ${e}` : e);
        }
      });
      this.subscribeToNavigationEvents();
    }
    subscribeToNavigationEvents() {
      const subscription = this.navigationTransitions.events.subscribe((e) => {
        try {
          const currentTransition = this.navigationTransitions.currentTransition;
          const currentNavigation = this.navigationTransitions.currentNavigation;
          if (currentTransition !== null && currentNavigation !== null) {
            this.stateManager.handleRouterEvent(e, currentNavigation);
            if (e instanceof NavigationCancel && e.code !== 0 && e.code !== 1) {
              this.navigated = true;
            } else if (e instanceof NavigationEnd) {
              this.navigated = true;
            } else if (e instanceof RedirectRequest) {
              const mergedTree = this.urlHandlingStrategy.merge(e.url, currentTransition.currentRawUrl);
              const extras = {
                skipLocationChange: currentTransition.extras.skipLocationChange,
                // The URL is already updated at this point if we have 'eager' URL
                // updates or if the navigation was triggered by the browser (back
                // button, URL bar, etc). We want to replace that item in history
                // if the navigation is rejected.
                replaceUrl: this.urlUpdateStrategy === "eager" || isBrowserTriggeredNavigation(currentTransition.source)
              };
              this.scheduleNavigation(mergedTree, IMPERATIVE_NAVIGATION, null, extras, {
                resolve: currentTransition.resolve,
                reject: currentTransition.reject,
                promise: currentTransition.promise
              });
            }
          }
          if (isPublicRouterEvent(e)) {
            this._events.next(e);
          }
        } catch (e2) {
          this.navigationTransitions.transitionAbortSubject.next(e2);
        }
      });
      this.eventsSubscription.add(subscription);
    }
    /** @internal */
    resetRootComponentType(rootComponentType) {
      this.routerState.root.component = rootComponentType;
      this.navigationTransitions.rootComponentType = rootComponentType;
    }
    /**
     * Sets up the location change listener and performs the initial navigation.
     */
    initialNavigation() {
      this.setUpLocationChangeListener();
      if (!this.navigationTransitions.hasRequestedNavigation) {
        this.navigateToSyncWithBrowser(this.location.path(true), IMPERATIVE_NAVIGATION, this.stateManager.restoredState());
      }
    }
    /**
     * Sets up the location change listener. This listener detects navigations triggered from outside
     * the Router (the browser back/forward buttons, for example) and schedules a corresponding Router
     * navigation so that the correct events, guards, etc. are triggered.
     */
    setUpLocationChangeListener() {
      if (!this.nonRouterCurrentEntryChangeSubscription) {
        this.nonRouterCurrentEntryChangeSubscription = this.stateManager.registerNonRouterCurrentEntryChangeListener((url, state) => {
          setTimeout(() => {
            this.navigateToSyncWithBrowser(url, "popstate", state);
          }, 0);
        });
      }
    }
    /**
     * Schedules a router navigation to synchronize Router state with the browser state.
     *
     * This is done as a response to a popstate event and the initial navigation. These
     * two scenarios represent times when the browser URL/state has been updated and
     * the Router needs to respond to ensure its internal state matches.
     */
    navigateToSyncWithBrowser(url, source, state) {
      const extras = {
        replaceUrl: true
      };
      const restoredState = state?.navigationId ? state : null;
      if (state) {
        const stateCopy = __spreadValues({}, state);
        delete stateCopy.navigationId;
        delete stateCopy.\u0275routerPageId;
        if (Object.keys(stateCopy).length !== 0) {
          extras.state = stateCopy;
        }
      }
      const urlTree = this.parseUrl(url);
      this.scheduleNavigation(urlTree, source, restoredState, extras);
    }
    /** The current URL. */
    get url() {
      return this.serializeUrl(this.currentUrlTree);
    }
    /**
     * Returns the current `Navigation` object when the router is navigating,
     * and `null` when idle.
     */
    getCurrentNavigation() {
      return this.navigationTransitions.currentNavigation;
    }
    /**
     * The `Navigation` object of the most recent navigation to succeed and `null` if there
     *     has not been a successful navigation yet.
     */
    get lastSuccessfulNavigation() {
      return this.navigationTransitions.lastSuccessfulNavigation;
    }
    /**
     * Resets the route configuration used for navigation and generating links.
     *
     * @param config The route array for the new configuration.
     *
     * @usageNotes
     *
     * ```
     * router.resetConfig([
     *  { path: 'team/:id', component: TeamCmp, children: [
     *    { path: 'simple', component: SimpleCmp },
     *    { path: 'user/:name', component: UserCmp }
     *  ]}
     * ]);
     * ```
     */
    resetConfig(config) {
      (typeof ngDevMode === "undefined" || ngDevMode) && validateConfig(config);
      this.config = config.map(standardizeConfig);
      this.navigated = false;
    }
    /** @nodoc */
    ngOnDestroy() {
      this.dispose();
    }
    /** Disposes of the router. */
    dispose() {
      this.navigationTransitions.complete();
      if (this.nonRouterCurrentEntryChangeSubscription) {
        this.nonRouterCurrentEntryChangeSubscription.unsubscribe();
        this.nonRouterCurrentEntryChangeSubscription = void 0;
      }
      this.disposed = true;
      this.eventsSubscription.unsubscribe();
    }
    /**
     * Appends URL segments to the current URL tree to create a new URL tree.
     *
     * @param commands An array of URL fragments with which to construct the new URL tree.
     * If the path is static, can be the literal URL string. For a dynamic path, pass an array of path
     * segments, followed by the parameters for each segment.
     * The fragments are applied to the current URL tree or the one provided  in the `relativeTo`
     * property of the options object, if supplied.
     * @param navigationExtras Options that control the navigation strategy.
     * @returns The new URL tree.
     *
     * @usageNotes
     *
     * ```
     * // create /team/33/user/11
     * router.createUrlTree(['/team', 33, 'user', 11]);
     *
     * // create /team/33;expand=true/user/11
     * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
     *
     * // you can collapse static segments like this (this works only with the first passed-in value):
     * router.createUrlTree(['/team/33/user', userId]);
     *
     * // If the first segment can contain slashes, and you do not want the router to split it,
     * // you can do the following:
     * router.createUrlTree([{segmentPath: '/one/two'}]);
     *
     * // create /team/33/(user/11//right:chat)
     * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: 'chat'}}]);
     *
     * // remove the right secondary node
     * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: null}}]);
     *
     * // assuming the current url is `/team/33/user/11` and the route points to `user/11`
     *
     * // navigate to /team/33/user/11/details
     * router.createUrlTree(['details'], {relativeTo: route});
     *
     * // navigate to /team/33/user/22
     * router.createUrlTree(['../22'], {relativeTo: route});
     *
     * // navigate to /team/44/user/22
     * router.createUrlTree(['../../team/44/user/22'], {relativeTo: route});
     *
     * Note that a value of `null` or `undefined` for `relativeTo` indicates that the
     * tree should be created relative to the root.
     * ```
     */
    createUrlTree(commands, navigationExtras = {}) {
      const {
        relativeTo,
        queryParams,
        fragment,
        queryParamsHandling,
        preserveFragment
      } = navigationExtras;
      const f = preserveFragment ? this.currentUrlTree.fragment : fragment;
      let q = null;
      switch (queryParamsHandling) {
        case "merge":
          q = __spreadValues(__spreadValues({}, this.currentUrlTree.queryParams), queryParams);
          break;
        case "preserve":
          q = this.currentUrlTree.queryParams;
          break;
        default:
          q = queryParams || null;
      }
      if (q !== null) {
        q = this.removeEmptyProps(q);
      }
      let relativeToUrlSegmentGroup;
      try {
        const relativeToSnapshot = relativeTo ? relativeTo.snapshot : this.routerState.snapshot.root;
        relativeToUrlSegmentGroup = createSegmentGroupFromRoute(relativeToSnapshot);
      } catch (e) {
        if (typeof commands[0] !== "string" || !commands[0].startsWith("/")) {
          commands = [];
        }
        relativeToUrlSegmentGroup = this.currentUrlTree.root;
      }
      return createUrlTreeFromSegmentGroup(relativeToUrlSegmentGroup, commands, q, f ?? null);
    }
    /**
     * Navigates to a view using an absolute route path.
     *
     * @param url An absolute path for a defined route. The function does not apply any delta to the
     *     current URL.
     * @param extras An object containing properties that modify the navigation strategy.
     *
     * @returns A Promise that resolves to 'true' when navigation succeeds,
     * to 'false' when navigation fails, or is rejected on error.
     *
     * @usageNotes
     *
     * The following calls request navigation to an absolute path.
     *
     * ```
     * router.navigateByUrl("/team/33/user/11");
     *
     * // Navigate without updating the URL
     * router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
     * ```
     *
     * @see [Routing and Navigation guide](guide/router)
     *
     */
    navigateByUrl(url, extras = {
      skipLocationChange: false
    }) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (this.isNgZoneEnabled && !NgZone.isInAngularZone()) {
          this.console.warn(`Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?`);
        }
      }
      const urlTree = isUrlTree(url) ? url : this.parseUrl(url);
      const mergedTree = this.urlHandlingStrategy.merge(urlTree, this.rawUrlTree);
      return this.scheduleNavigation(mergedTree, IMPERATIVE_NAVIGATION, null, extras);
    }
    /**
     * Navigate based on the provided array of commands and a starting point.
     * If no starting route is provided, the navigation is absolute.
     *
     * @param commands An array of URL fragments with which to construct the target URL.
     * If the path is static, can be the literal URL string. For a dynamic path, pass an array of path
     * segments, followed by the parameters for each segment.
     * The fragments are applied to the current URL or the one provided  in the `relativeTo` property
     * of the options object, if supplied.
     * @param extras An options object that determines how the URL should be constructed or
     *     interpreted.
     *
     * @returns A Promise that resolves to `true` when navigation succeeds, to `false` when navigation
     *     fails,
     * or is rejected on error.
     *
     * @usageNotes
     *
     * The following calls request navigation to a dynamic route path relative to the current URL.
     *
     * ```
     * router.navigate(['team', 33, 'user', 11], {relativeTo: route});
     *
     * // Navigate without updating the URL, overriding the default behavior
     * router.navigate(['team', 33, 'user', 11], {relativeTo: route, skipLocationChange: true});
     * ```
     *
     * @see [Routing and Navigation guide](guide/router)
     *
     */
    navigate(commands, extras = {
      skipLocationChange: false
    }) {
      validateCommands(commands);
      return this.navigateByUrl(this.createUrlTree(commands, extras), extras);
    }
    /** Serializes a `UrlTree` into a string */
    serializeUrl(url) {
      return this.urlSerializer.serialize(url);
    }
    /** Parses a string into a `UrlTree` */
    parseUrl(url) {
      try {
        return this.urlSerializer.parse(url);
      } catch {
        return this.urlSerializer.parse("/");
      }
    }
    isActive(url, matchOptions) {
      let options;
      if (matchOptions === true) {
        options = __spreadValues({}, exactMatchOptions);
      } else if (matchOptions === false) {
        options = __spreadValues({}, subsetMatchOptions);
      } else {
        options = matchOptions;
      }
      if (isUrlTree(url)) {
        return containsTree(this.currentUrlTree, url, options);
      }
      const urlTree = this.parseUrl(url);
      return containsTree(this.currentUrlTree, urlTree, options);
    }
    removeEmptyProps(params) {
      return Object.keys(params).reduce((result, key) => {
        const value = params[key];
        if (value !== null && value !== void 0) {
          result[key] = value;
        }
        return result;
      }, {});
    }
    scheduleNavigation(rawUrl, source, restoredState, extras, priorPromise) {
      if (this.disposed) {
        return Promise.resolve(false);
      }
      let resolve;
      let reject;
      let promise;
      if (priorPromise) {
        resolve = priorPromise.resolve;
        reject = priorPromise.reject;
        promise = priorPromise.promise;
      } else {
        promise = new Promise((res, rej) => {
          resolve = res;
          reject = rej;
        });
      }
      const taskId = this.pendingTasks.add();
      afterNextNavigation(this, () => {
        queueMicrotask(() => this.pendingTasks.remove(taskId));
      });
      this.navigationTransitions.handleNavigationRequest({
        source,
        restoredState,
        currentUrlTree: this.currentUrlTree,
        currentRawUrl: this.currentUrlTree,
        rawUrl,
        extras,
        resolve,
        reject,
        promise,
        currentSnapshot: this.routerState.snapshot,
        currentRouterState: this.routerState
      });
      return promise.catch((e) => {
        return Promise.reject(e);
      });
    }
  };
  _Router.\u0275fac = function Router_Factory(t) {
    return new (t || _Router)();
  };
  _Router.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Router,
    factory: _Router.\u0275fac,
    providedIn: "root"
  });
  let Router2 = _Router;
  return Router2;
})();
function validateCommands(commands) {
  for (let i = 0; i < commands.length; i++) {
    const cmd = commands[i];
    if (cmd == null) {
      throw new RuntimeError(4008, (typeof ngDevMode === "undefined" || ngDevMode) && `The requested path contains ${cmd} segment at index ${i}`);
    }
  }
}
function isPublicRouterEvent(e) {
  return !(e instanceof BeforeActivateRoutes) && !(e instanceof RedirectRequest);
}
var RouterLink = /* @__PURE__ */ (() => {
  const _RouterLink = class _RouterLink {
    constructor(router, route, tabIndexAttribute, renderer, el, locationStrategy) {
      this.router = router;
      this.route = route;
      this.tabIndexAttribute = tabIndexAttribute;
      this.renderer = renderer;
      this.el = el;
      this.locationStrategy = locationStrategy;
      this.href = null;
      this.commands = null;
      this.onChanges = new Subject();
      this.preserveFragment = false;
      this.skipLocationChange = false;
      this.replaceUrl = false;
      const tagName = el.nativeElement.tagName?.toLowerCase();
      this.isAnchorElement = tagName === "a" || tagName === "area";
      if (this.isAnchorElement) {
        this.subscription = router.events.subscribe((s) => {
          if (s instanceof NavigationEnd) {
            this.updateHref();
          }
        });
      } else {
        this.setTabIndexIfNotOnNativeEl("0");
      }
    }
    /**
     * Modifies the tab index if there was not a tabindex attribute on the element during
     * instantiation.
     */
    setTabIndexIfNotOnNativeEl(newTabIndex) {
      if (this.tabIndexAttribute != null || this.isAnchorElement) {
        return;
      }
      this.applyAttributeValue("tabindex", newTabIndex);
    }
    /** @nodoc */
    ngOnChanges(changes) {
      if (this.isAnchorElement) {
        this.updateHref();
      }
      this.onChanges.next(this);
    }
    /**
     * Commands to pass to {@link Router#createUrlTree}.
     *   - **array**: commands to pass to {@link Router#createUrlTree}.
     *   - **string**: shorthand for array of commands with just the string, i.e. `['/route']`
     *   - **null|undefined**: effectively disables the `routerLink`
     * @see {@link Router#createUrlTree}
     */
    set routerLink(commands) {
      if (commands != null) {
        this.commands = Array.isArray(commands) ? commands : [commands];
        this.setTabIndexIfNotOnNativeEl("0");
      } else {
        this.commands = null;
        this.setTabIndexIfNotOnNativeEl(null);
      }
    }
    /** @nodoc */
    onClick(button, ctrlKey, shiftKey, altKey, metaKey) {
      if (this.urlTree === null) {
        return true;
      }
      if (this.isAnchorElement) {
        if (button !== 0 || ctrlKey || shiftKey || altKey || metaKey) {
          return true;
        }
        if (typeof this.target === "string" && this.target != "_self") {
          return true;
        }
      }
      const extras = {
        skipLocationChange: this.skipLocationChange,
        replaceUrl: this.replaceUrl,
        state: this.state
      };
      this.router.navigateByUrl(this.urlTree, extras);
      return !this.isAnchorElement;
    }
    /** @nodoc */
    ngOnDestroy() {
      this.subscription?.unsubscribe();
    }
    updateHref() {
      this.href = this.urlTree !== null && this.locationStrategy ? this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(this.urlTree)) : null;
      const sanitizedValue = this.href === null ? null : (
        // This class represents a directive that can be added to both `<a>` elements,
        // as well as other elements. As a result, we can't define security context at
        // compile time. So the security context is deferred to runtime.
        // The `ɵɵsanitizeUrlOrResourceUrl` selects the necessary sanitizer function
        // based on the tag and property names. The logic mimics the one from
        // `packages/compiler/src/schema/dom_security_schema.ts`, which is used at compile time.
        //
        // Note: we should investigate whether we can switch to using `@HostBinding('attr.href')`
        // instead of applying a value via a renderer, after a final merge of the
        // `RouterLinkWithHref` directive.
        \u0275\u0275sanitizeUrlOrResourceUrl(this.href, this.el.nativeElement.tagName.toLowerCase(), "href")
      );
      this.applyAttributeValue("href", sanitizedValue);
    }
    applyAttributeValue(attrName, attrValue) {
      const renderer = this.renderer;
      const nativeElement = this.el.nativeElement;
      if (attrValue !== null) {
        renderer.setAttribute(nativeElement, attrName, attrValue);
      } else {
        renderer.removeAttribute(nativeElement, attrName);
      }
    }
    get urlTree() {
      if (this.commands === null) {
        return null;
      }
      return this.router.createUrlTree(this.commands, {
        // If the `relativeTo` input is not defined, we want to use `this.route` by default.
        // Otherwise, we should use the value provided by the user in the input.
        relativeTo: this.relativeTo !== void 0 ? this.relativeTo : this.route,
        queryParams: this.queryParams,
        fragment: this.fragment,
        queryParamsHandling: this.queryParamsHandling,
        preserveFragment: this.preserveFragment
      });
    }
  };
  _RouterLink.\u0275fac = function RouterLink_Factory(t) {
    return new (t || _RouterLink)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275injectAttribute("tabindex"), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(LocationStrategy));
  };
  _RouterLink.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RouterLink,
    selectors: [["", "routerLink", ""]],
    hostVars: 1,
    hostBindings: function RouterLink_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function RouterLink_click_HostBindingHandler($event) {
          return ctx.onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("target", ctx.target);
      }
    },
    inputs: {
      target: "target",
      queryParams: "queryParams",
      fragment: "fragment",
      queryParamsHandling: "queryParamsHandling",
      state: "state",
      relativeTo: "relativeTo",
      preserveFragment: ["preserveFragment", "preserveFragment", booleanAttribute],
      skipLocationChange: ["skipLocationChange", "skipLocationChange", booleanAttribute],
      replaceUrl: ["replaceUrl", "replaceUrl", booleanAttribute],
      routerLink: "routerLink"
    },
    standalone: true,
    features: [\u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature]
  });
  let RouterLink2 = _RouterLink;
  return RouterLink2;
})();
var RouterLinkActive = /* @__PURE__ */ (() => {
  const _RouterLinkActive = class _RouterLinkActive {
    get isActive() {
      return this._isActive;
    }
    constructor(router, element, renderer, cdr, link) {
      this.router = router;
      this.element = element;
      this.renderer = renderer;
      this.cdr = cdr;
      this.link = link;
      this.classes = [];
      this._isActive = false;
      this.routerLinkActiveOptions = {
        exact: false
      };
      this.isActiveChange = new EventEmitter();
      this.routerEventsSubscription = router.events.subscribe((s) => {
        if (s instanceof NavigationEnd) {
          this.update();
        }
      });
    }
    /** @nodoc */
    ngAfterContentInit() {
      of(this.links.changes, of(null)).pipe(mergeAll()).subscribe((_) => {
        this.update();
        this.subscribeToEachLinkOnChanges();
      });
    }
    subscribeToEachLinkOnChanges() {
      this.linkInputChangesSubscription?.unsubscribe();
      const allLinkChanges = [...this.links.toArray(), this.link].filter((link) => !!link).map((link) => link.onChanges);
      this.linkInputChangesSubscription = from(allLinkChanges).pipe(mergeAll()).subscribe((link) => {
        if (this._isActive !== this.isLinkActive(this.router)(link)) {
          this.update();
        }
      });
    }
    set routerLinkActive(data2) {
      const classes = Array.isArray(data2) ? data2 : data2.split(" ");
      this.classes = classes.filter((c) => !!c);
    }
    /** @nodoc */
    ngOnChanges(changes) {
      this.update();
    }
    /** @nodoc */
    ngOnDestroy() {
      this.routerEventsSubscription.unsubscribe();
      this.linkInputChangesSubscription?.unsubscribe();
    }
    update() {
      if (!this.links || !this.router.navigated)
        return;
      queueMicrotask(() => {
        const hasActiveLinks = this.hasActiveLinks();
        if (this._isActive !== hasActiveLinks) {
          this._isActive = hasActiveLinks;
          this.cdr.markForCheck();
          this.classes.forEach((c) => {
            if (hasActiveLinks) {
              this.renderer.addClass(this.element.nativeElement, c);
            } else {
              this.renderer.removeClass(this.element.nativeElement, c);
            }
          });
          if (hasActiveLinks && this.ariaCurrentWhenActive !== void 0) {
            this.renderer.setAttribute(this.element.nativeElement, "aria-current", this.ariaCurrentWhenActive.toString());
          } else {
            this.renderer.removeAttribute(this.element.nativeElement, "aria-current");
          }
          this.isActiveChange.emit(hasActiveLinks);
        }
      });
    }
    isLinkActive(router) {
      const options = isActiveMatchOptions(this.routerLinkActiveOptions) ? this.routerLinkActiveOptions : (
        // While the types should disallow `undefined` here, it's possible without strict inputs
        this.routerLinkActiveOptions.exact || false
      );
      return (link) => link.urlTree ? router.isActive(link.urlTree, options) : false;
    }
    hasActiveLinks() {
      const isActiveCheckFn = this.isLinkActive(this.router);
      return this.link && isActiveCheckFn(this.link) || this.links.some(isActiveCheckFn);
    }
  };
  _RouterLinkActive.\u0275fac = function RouterLinkActive_Factory(t) {
    return new (t || _RouterLinkActive)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(RouterLink, 8));
  };
  _RouterLinkActive.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RouterLinkActive,
    selectors: [["", "routerLinkActive", ""]],
    contentQueries: function RouterLinkActive_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, RouterLink, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.links = _t);
      }
    },
    inputs: {
      routerLinkActiveOptions: "routerLinkActiveOptions",
      ariaCurrentWhenActive: "ariaCurrentWhenActive",
      routerLinkActive: "routerLinkActive"
    },
    outputs: {
      isActiveChange: "isActiveChange"
    },
    exportAs: ["routerLinkActive"],
    standalone: true,
    features: [\u0275\u0275NgOnChangesFeature]
  });
  let RouterLinkActive2 = _RouterLinkActive;
  return RouterLinkActive2;
})();
function isActiveMatchOptions(options) {
  return !!options.paths;
}
var ROUTER_SCROLLER = /* @__PURE__ */ new InjectionToken("");
function provideRouter(routes, ...features) {
  return makeEnvironmentProviders([{
    provide: ROUTES,
    multi: true,
    useValue: routes
  }, typeof ngDevMode === "undefined" || ngDevMode ? {
    provide: ROUTER_IS_PROVIDED,
    useValue: true
  } : [], {
    provide: ActivatedRoute,
    useFactory: rootRoute,
    deps: [Router]
  }, {
    provide: APP_BOOTSTRAP_LISTENER,
    multi: true,
    useFactory: getBootstrapListener
  }, features.map((feature) => feature.\u0275providers)]);
}
function rootRoute(router) {
  return router.routerState.root;
}
function routerFeature(kind, providers) {
  return {
    \u0275kind: kind,
    \u0275providers: providers
  };
}
var ROUTER_IS_PROVIDED = /* @__PURE__ */ new InjectionToken("", {
  providedIn: "root",
  factory: () => false
});
function getBootstrapListener() {
  const injector = inject(Injector);
  return (bootstrappedComponentRef) => {
    const ref = injector.get(ApplicationRef);
    if (bootstrappedComponentRef !== ref.components[0]) {
      return;
    }
    const router = injector.get(Router);
    const bootstrapDone = injector.get(BOOTSTRAP_DONE);
    if (injector.get(INITIAL_NAVIGATION) === 1) {
      router.initialNavigation();
    }
    injector.get(ROUTER_PRELOADER, null, InjectFlags.Optional)?.setUpPreloading();
    injector.get(ROUTER_SCROLLER, null, InjectFlags.Optional)?.init();
    router.resetRootComponentType(ref.componentTypes[0]);
    if (!bootstrapDone.closed) {
      bootstrapDone.next();
      bootstrapDone.complete();
      bootstrapDone.unsubscribe();
    }
  };
}
var BOOTSTRAP_DONE = /* @__PURE__ */ new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "bootstrap done indicator" : "", {
  factory: () => {
    return new Subject();
  }
});
var INITIAL_NAVIGATION = /* @__PURE__ */ new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "initial navigation" : "", {
  providedIn: "root",
  factory: () => 1
  /* InitialNavigation.EnabledNonBlocking */
});
var ROUTER_PRELOADER = /* @__PURE__ */ new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router preloader" : "");
function withRouterConfig(options) {
  const providers = [{
    provide: ROUTER_CONFIGURATION,
    useValue: options
  }];
  return routerFeature(5, providers);
}
function withComponentInputBinding() {
  const providers = [RoutedComponentInputBinder, {
    provide: INPUT_BINDER,
    useExisting: RoutedComponentInputBinder
  }];
  return routerFeature(8, providers);
}

// src/app/models/Cite.ts
var Cite = class {
  constructor() {
    this.tags = [];
    this.tags = [];
  }
  getId() {
    return this.id;
  }
  setId(id) {
    this.id = id;
    return this;
  }
  getAuthor() {
    return this.author;
  }
  setAuthor(author) {
    this.author = author;
    return this;
  }
  getCite() {
    return this.cite;
  }
  setCite(cite) {
    this.cite = cite;
    return this;
  }
  getTags() {
    return this.tags ?? [];
  }
  setTags(tags = []) {
    if (tags === void 0) {
      return this;
    }
    this.tags = tags;
    return this;
  }
  addTag(tag) {
    if (this.tags && !this.tags.includes(tag.trim())) {
      this.tags.push(tag.trim());
    }
    return this;
  }
  hasTags() {
    return !!this.tags.length;
  }
};

// src/app/fixtures/data.ts
var data = [
  {
    cite: `Chaque commencement rec\xE8le une magie cach\xE9e.`,
    author: `Hermann Hesse`,
    tags: ["espoir"]
  },
  {
    cite: `Rarement nous pensons \xE0 ce que nous avons, mais souvent \xE0 ce qui nous manque.`,
    author: `Arthur Schopenhauer`,
    tags: ["simplicit\xE9"]
  },
  {
    cite: `Comme le dauphin j'ai le dos fin.`,
    author: `Ma\xEEtre Reiki Kanak`
  },
  {
    cite: `L'\xE2me porte les couleurs de tes pens\xE9es.`,
    author: `Marc Aur\xE8le`
  },
  {
    cite: `Apprenons \xE0 tendre la main pas seulement pour recevoir, mais \xE9galement pour donner.`,
    author: `Wembo Jah Olela`,
    tags: ["g\xE9n\xE9rosit\xE9"]
  },
  {
    cite: `Peu importe o\xF9 nous sommes, ma maison n'est pas un lieu, ma maison c'est toi.`,
    author: `Fynn Kliemann`,
    tags: ["amour"]
  },
  {
    cite: `Pour faire du bien, personne n'a besoin de r\xE9fl\xE9chir.`,
    author: `Johann Wolfgang Von Goethe`,
    tags: ["bienveillance"]
  },
  {
    cite: `Il n'y a que deux fa\xE7ons de vivre sa vie : l'une en faisant comme si rien n'\xE9tait un miracle, l'autre en faisant comme si tout \xE9tait un miracle.`,
    author: `Albert Einstein`,
    tags: ["joie"]
  },
  {
    cite: `La facult\xE9 de se mettre dans la peau des autres et de r\xE9fl\xE9chir \xE0 la mani\xE8re dont on agirait \xE0 leur place est tr\xE8s utile si on veut apprendre \xE0 aimer quelqu'un.`,
    author: `Dalai Lama`,
    tags: ["amour"]
  },
  {
    cite: `R\xE9pands tes bienfaits sur tes amis, pour qu'ils t'aiment plus tendrement encore ; r\xE9pands-les sur tes ennemis, pour qu'ils deviennent enfin tes amis.`,
    author: `Cl\xE9obus de Lindos`,
    tags: ["amiti\xE9"]
  },
  {
    cite: `Souris au monde et le monde te sourira.`,
    author: `Soeur Emmanuelle`,
    tags: ["joie"]
  },
  {
    cite: `L'humour a non seulement quelque chose de lib\xE9rateur, mais encore quelque chose de sublime et d'\xE9lev\xE9.`,
    author: `Sigmund Freud`,
    tags: ["rire"]
  },
  {
    cite: `On ne voit bien qu'avec le coeur. L'essentiel est invisible pour les yeux.`,
    author: `Antoine de Saint-Exup\xE9ry`
  },
  {
    cite: `Seuls les sens peuvent gu\xE9rir l'\xE2me, tout comme l'\xE2me seule peut gu\xE9rir les sens.`,
    author: `Oscar Wilde`
  },
  {
    cite: `L'amour n'est pas dans l'autre, il est en nous-m\xEAmes ; nous le r\xE9veillons. Mais pour ce r\xE9veil, nous avons besoin de l'autre.`,
    author: `Paulo Coelho`
  },
  {
    cite: `L'ornement de la main, ce sont ses doigts.`,
    author: `Proverbe africain`,
    tags: ["proverbe"]
  },
  {
    cite: `L'optimiste rit pour oublier ; le pessimiste oublie de rire.`,
    author: `Anonyme`
  },
  {
    cite: `Parfois on ne per\xE7oit l'amour car la vie quotidienne peut nous rendre aveugle.`,
    author: `Anonyme`
  },
  {
    cite: `Ecouter, c'est aimer.`,
    author: `Fran\xE7ois Lelord`,
    tags: ["amour"]
  },
  {
    cite: `Si tu veux la lune, ne te cache pas durant la nuit. Si tu veux une rose, n'aie pas peur des \xE9pines. Si tu veux l'amour, ne cache pas ta vrai personne.`,
    author: `Rumi`,
    tags: ["amour"]
  },
  {
    cite: `Les r\xEAves \xE9veill\xE9s maintiennent notre \xE9quilibre mental.`,
    author: `Elisabeth Maria Maurer`
  },
  {
    cite: `L'\xE9nergie suit les pens\xE9es.`,
    author: `Tony Robbins`
  },
  {
    cite: `Les questions sont les cl\xE9s pour acc\xE9der au tr\xE9sors.`,
    author: `Georg-Wilhelm Exler`
  },
  {
    cite: `L'amour ne voit pas avec les yeux mais avec l'\xE2me.`,
    author: `William Shakespeare`
  },
  {
    cite: `L'espoir, c'est rentrer sous la pluie et sortir sous un beau soleil.`,
    author: `Proverbe africain`,
    tags: ["proverbe"]
  },
  {
    cite: `Les folies sont les seules choses qu'on ne regrette jamais.`,
    author: `Oscar Wilde`
  },
  {
    cite: `Un sourire est une clef secr\xE8te qui ouvre bien des coeurs.`,
    author: `Baden-Powell`
  },
  {
    cite: `Le chocolat plonge des \xEAtres par ailleurs normaux dans d'\xE9tranges \xE9tats extatiques.`,
    author: `John West`
  },
  {
    cite: `On a deux vies. La deuxi\xE8me commence le jour o\xF9 on r\xE9alise qu'on en a juste une.`,
    author: `Confucius`
  },
  {
    cite: `Je vais \xEAtre jaloux de cette tour. Elle est plus c\xE9l\xE8bre que moi.`,
    author: `Gustave Eiffel`
  },
  {
    cite: `Je me moque de savoir beaucoup de choses : je veux savoir des choses que j'aime.`,
    author: `Jules Renard`
  },
  {
    cite: `Nous portons en nous des merveilles que nous cherchons en dehors de nous.`,
    author: `Thomas Browne`
  },
  {
    cite: `L\xE0 o\xF9 l'on s'aime il ne fait jamais nuit.`,
    author: `Proverbe africain`,
    tags: ["proverbe"]
  },
  {
    cite: `Le risque de prendre une mauvaise d\xE9cision n'est rien compar\xE9 \xE0 la terreur de l'ind\xE9cision.`,
    author: `Maimonide`
  },
  {
    cite: `En tentant l'impossible, on peut atteindre le plus haut niveau du possible.`,
    author: `August Strindberg`
  },
  {
    cite: `Souris \xE0 la vie pour qu'elle te sourit.`,
    author: `Proverbe tunisien`,
    tags: ["proverbe"]
  },
  {
    cite: `A coeur vaillant rien d'impossible.`,
    author: `Jacques Coeur`
  },
  {
    cite: `L'important n'est pas ce que l'on regarde mais ce que l'on voit.`,
    author: `Henry David Thoreau`
  },
  {
    cite: `A travers les feuilles d'un bon livre, on pourra entendre un \xE9cho qui ressemble aux bruits des f\xF4rets.`,
    author: `Henry David Thoreau`
  },
  {
    cite: `Assure-toi que la bougie est allum\xE9e avant d'\xE9teindre l'allumette.`,
    author: `Proverbe cr\xE9ole`,
    tags: ["proverbe"]
  },
  {
    cite: `Quand l'amour grandit en toi, la beaut\xE9 fat de m\xEAme. Car l'amour est la beaut\xE9 de l'\xE2me.`,
    author: `Marcel Proust`
  },
  {
    cite: `Le v\xE9ritable voyage de d\xE9couverte ne consiste pas \xE0 chercher de nouveaux paysages, mais \xE0 avoir de nouveaux yeux.`,
    author: `Marcel Proust`
  },
  {
    cite: `Dans la vie tu as deux choix le matin : soit tu te recouches pour poursuivre ton r\xEAve, soit tu te l\xE8ves pour le r\xE9aliser.`,
    author: `Axel Albanel`
  },
  {
    cite: `La diplomatie, c'est faire et dire les plus vilaines choses de la mani\xE8re la plus \xE9l\xE9gante.`,
    author: `Isaac Goldberg`
  },
  {
    cite: `Choisissez un travail que vous aimez et vous n'aurez pas \xE0 travailler un seul jour de votre vie.`,
    author: `Confucius`
  },
  {
    cite: `L'imagination vaut bien des voyages et elle co\xFBte moins cher.`,
    author: `George William Curtis`
  },
  {
    cite: `Faites que le r\xEAve d\xE9vore votre vie, afin que la vie ne d\xE9vore votre r\xEAve.`,
    author: `Antoine de Saint-Exup\xE9ry`
  },
  {
    cite: `Deviens sans cesse celui que tu es, sois le ma\xEEtre et le sculpteur de toi-m\xEAme.`,
    author: `Friederich Nietzsche`
  },
  {
    cite: `La nature nous a donn\xE9 une langue et deux oreilles, afin que nous \xE9coutions le double de ce que nous disons.`,
    author: `Z\xE9non`
  },
  {
    cite: `Chaque baiser est un tremblement de terre.`,
    author: `George Gordon Byron`
  },
  {
    cite: `Un grand \xE9crivain se remarque au nombre de pages qu'il ne publie pas.`,
    author: `St\xE9phane Mallarm\xE9`
  },
  {
    cite: `Fais ce que tu aimes et fais-le souvent.`,
    author: `Anonyme`
  },
  {
    cite: `Aimer savoir est humain, savoir aimer est divin.`,
    author: `Joseph Roux`
  },
  {
    cite: `Plus le visage est s\xE9rieux, plus le sourire est beau.`,
    author: `Fran\xE7ois Ren\xE9 de Chateaubriand`
  },
  {
    cite: `Le sourire que tu envoies revient vers toi.`,
    author: `Proverbe hindou`,
    tags: ["proverbe"]
  },
  {
    cite: `Le sourire fait fondre la glace, installe la confiance et gu\xE9rit les blessures, c'est la clef des relations humaines sinc\xE8res.`,
    author: `Voltaire`
  },
  {
    cite: `On n'est jamais puni pour avoir fait mourir de rire.`,
    author: `Proverbe chinois`,
    tags: ["proverbe"]
  },
  {
    cite: `Il y a autant de beaut\xE9s qu'il y a de mani\xE8res habituelles de chercher le bonheur.`,
    author: `Charles Baudelaire`
  },
  {
    cite: `Toute r\xE9v\xE9lation d'un secret est la faute de celui qui l'a confi\xE9.`,
    author: `Jean de La Bruy\xE8re`
  },
  {
    cite: `A celui qui sait attendre tout vient \xE0 temps .`,
    author: `Fran\xE7ois Rabelais`
  },
  {
    cite: `On voyage pour changer, non de lieu, mais d'id\xE9es.`,
    author: `Hippolyte Taine`
  },
  {
    cite: `Fruits et racines ont m\xEAme commune mesure qui est l'arbre.`,
    author: `Antoine de Saint-Exup\xE9ry`
  },
  {
    cite: `La beaut\xE9 est dans les yeux de celui qui regarde.`,
    author: `Oscar Wilde`
  },
  {
    cite: `Les amis sont des compagnons de voyage, qui nous aident \xE0 avancer sur le chemin d\u2019une vie plus heureuse.`,
    author: `Pythagore`
  },
  {
    cite: `Le plaisir est le bonheur des fous, le bonheur est le plaisir des sages.`,
    author: `Jules Barbey d'Aurevilly`
  },
  {
    cite: `La joie est en tout, il suffit de savoir l'extraire.`,
    author: `Confucius`
  },
  {
    cite: `La table est l'entremetteuse de l'amiti\xE9.`,
    author: `Proverbe fran\xE7ais`,
    tags: ["proverbe"]
  },
  {
    cite: `Le g\xE9nie, c'est l'enfance retrouv\xE9e \xE0 volont\xE9.`,
    author: `Charles Baudelaire`
  },
  {
    cite: `Le rem\xE8de \xE0 l'ennui c'est la curiosit\xE9. La curiosit\xE9 elle, est sans rem\xE8de.`,
    author: `Anonyme`
  },
  {
    cite: `Il n'est pas de plaisir plus doux que de surprendre un homme en lui donnant plus qu'il n'esp\xE8re.`,
    author: `Charles Baudelaire`
  },
  {
    cite: `Sachez vous \xE9loigner car, lorsque vous reviendrez \xE0 votre travail votre jugement sera plus s\xFBr.`,
    author: `L\xE9onard de Vinci`
  },
  {
    cite: `C'est l'incertitude qui nous charme. Tout devient merveilleux dans la brume.`,
    author: `Oscar Wilde`
  },
  {
    cite: `La bonne volont\xE9 raccourcit le chemin.`,
    author: `Proverbe br\xE9silien`,
    tags: ["proverbe"]
  },
  {
    cite: `Bonne cuisine et bon vin, c'est le paradis sur terre.`,
    author: `Henri IV`
  },
  {
    cite: `La musique est la langue des \xE9motions.`,
    author: `Emmanuel Kant`
  },
  {
    cite: `Gu\xE9rir parfois, soulager souvent, \xE9couter toujours.`,
    author: `Louis Pasteur`
  },
  {
    cite: `Les mots manquent aux \xE9motions.`,
    author: `Victor Hugo`
  },
  {
    cite: `Le plaisir se ramasse la joie se cueille et le bonheur se cultive.`,
    author: `Bouddha`
  },
  {
    cite: `Que ton baiser ait l'ardeur du soleil et la rose te donnera tout son parfum.`,
    author: `Proverbe kurde`,
    tags: ["proverbe"]
  },
  {
    cite: `Quand ce que vous pensez, ce que vous dites et ce que vous faites sont en harmonie, le bonheur vous appartient.`,
    author: `Gandhi`
  },
  {
    cite: `Qui veut faire le bonheur des autres a d\xE9j\xE0 fait le sien.`,
    author: `Proverbe chinois`,
    tags: ["proverbe"]
  },
  {
    cite: `La sagesse, c'est d'avoir des r\xEAves suffisamment grands pour ne pas les perdre de vue lorsqu'on les poursuit.`,
    author: `Oscar Wilde`
  },
  {
    cite: `Eclaire demain avec aujourd'hui !`,
    author: `Elizabeth Barret Browning`
  },
  {
    cite: `Apprends \xE0 \xE9crire tes blessures dans le sable et \xE0 graver tes joies dans la pierre.`,
    author: `Lao Tseu`
  },
  {
    cite: `Maison de paille o\xF9 l'on rit vaut mieux qu'un palais o\xF9 l'on pleure.`,
    author: `Proverbe chinois`,
    tags: ["proverbe"]
  },
  {
    cite: `Toute l'invention consiste \xE0 faire quelque chose de rien.`,
    author: `Jean Racine`
  },
  {
    cite: `L'id\xE9al de l'amiti\xE9 c'est de se sentir un et de rester deux.`,
    author: `Anne Sophie Swetchine`
  },
  {
    cite: `Un seul homme arm\xE9 de courage vaut une majorit\xE9.`,
    author: `Andrew Jackson`
  },
  {
    cite: `La Tour Eiffel ne devait durer que 20 ans, ... elle est devenue aussi \xE9ternelle que Paris !`,
    author: `Anonyme`
  },
  {
    cite: `En se posant sur la branche, le papillon craint de la briser.`,
    author: `Proverbe arm\xE9nien`,
    tags: ["proverbe"]
  },
  {
    cite: `Il ne faut avoir aucun regret pour le pass\xE9, aucun remords pour le pr\xE9sent, et une confiance in\xE9branlable pour l'avenir.`,
    author: `Jean Jaur\xE8s`
  },
  {
    cite: `Un peu de jalousie \xE9veille un amour heureux qui s'endort.`,
    author: `Mme Deshouli\xE8res`
  },
  {
    cite: `La simplicit\xE9 est la sophistication supr\xEAme.`,
    author: `L\xE9onard de Vinci`
  },
  {
    cite: `Supprimons de la vie toute raison d'ennuis : car il est court le temps qui nous est imparti !`,
    author: `M\xE9nandre`
  },
  {
    cite: `Quelque d\xE9licat que l'on soit en amour, on pardonne plus de fautes que dans l'amiti\xE9.`,
    author: `Jean de La Bruy\xE8re`
  },
  {
    cite: `Le travail, en autres avantages, a celui de raccourcir les journ\xE9es et d'\xE9tendre la vie.`,
    author: `Denis Diderot`
  },
  {
    cite: `Si nous prenons la nature pour guide, nous ne nous \xE9garerons jamais.`,
    author: `Cic\xE9ron`
  },
  {
    cite: `L'accent circonflexe est l'hirondelle de l'\xE9criture.`,
    author: `Jules Renard`
  },
  {
    cite: `L'\xE9motion artistique cesse o\xF9 l'analyse et la pens\xE9e interviennent.`,
    author: `Max Jacob`
  },
  {
    cite: `La pens\xE9e n'est qu'un \xE9clair au milieu de la nuit. Mais c'est cet \xE9clair qui est tout.`,
    author: `Henri Poincar\xE9`
  },
  {
    cite: `L'accent est l'\xE2me du discours, il lui donne le sentiment et la v\xE9rit\xE9.`,
    author: `Jean-Jacques Rousseau`
  },
  {
    cite: `La crainte du danger est mille fois plus terrifiante que le danger pr\xE9sent.`,
    author: `Daniel Defoe`
  },
  {
    cite: `La lutte donne au triomphe la saveur de la passion, et la victoire embellit la conqu\xEAte.`,
    author: `Georges Meredith`
  },
  {
    cite: `De toutes les passions, la seule vraiment respectable me parait \xEAtre la gourmandise.`,
    author: `Guy de Maupassant`
  },
  {
    cite: `Jamais les mots ne manquent aux id\xE9es ; ce sont les id\xE9es qui manquent aux mots.`,
    author: `Joseph Joubert`
  },
  {
    cite: `L'\xE2ge auquel on partage tout est g\xE9n\xE9ralement l'\xE2ge o\xF9 on n'a rien.`,
    author: `Alphonse Karr`
  },
  {
    cite: `Une erreur originale vaut mieux qu'une v\xE9rit\xE9 banale.`,
    author: `Fiodor Dosto\xEFevski`
  },
  {
    cite: `Le veinard est celui qui arrive \xE0 tout ; le malchanceux est celui \xE0 qui tout arrive.`,
    author: `Eug\xE8ne Labiche`
  },
  {
    cite: `La seule limite \xE0 notre \xE9panouissement de demain sera nos doutes d'aujourd'hui.`,
    author: `Franklin Delano Roosevelt`
  },
  {
    cite: `Il n'y a pas de moyen pour polir le h\xE9risson.`,
    author: `Aristophane`
  },
  {
    cite: `L'amour qui na\xEEt subitement est le plus long \xE0 gu\xE9rir.`,
    author: `Jean de La Bruy\xE8re`
  },
  {
    cite: `Il n'y a pas de plus grande joie que celle qu'on n'attend pas.`,
    author: `Sophocle`
  },
  {
    cite: `Quand la col\xE8re emplit ton coeur, ne laisse pas ta langue aboyer en vain.`,
    author: `Sappho`
  },
  {
    cite: `Un grain de gaiet\xE9 assaisonne tout.`,
    author: `Baltasar Gracian`
  },
  {
    cite: `Qui rougit est d\xE9j\xE0 coupable, la vraie innocence n'a honte de rien.`,
    author: `Jean-Jacques Rousseau`
  },
  {
    cite: `Il n'y a point de g\xE9nie sans grain de folie.`,
    author: `Aristote`
  },
  {
    cite: `J'aime le lit, c'est le seul endroit o\xF9, comme le chat, je puis faire le mort en respirant, tout en \xE9tant vivant.`,
    author: `Arthur Cravan`
  },
  {
    cite: `Le seul homme \xE0 ne jamais faire d'erreur est celui qui ne fait rien.`,
    author: `Th\xE9odore Roosevelt`
  },
  {
    cite: `Le plus grand voyageur est celui qui a su faire une fois le tour de lui-m\xEAme.`,
    author: `Confucius`
  },
  {
    cite: `C'est la nuit qu'il est beau de croire \xE0 la lumi\xE8re.`,
    author: `Edmond Rostand`
  },
  {
    cite: `Pour l'amour d'une rose, le jardinier devient l'esclave de mille \xE9pines.`,
    author: `Proverbe turc`,
    tags: ["proverbe"]
  },
  {
    cite: `D\xE9ploie ton jeune courage, enfant ; c'est ainsi qu'on s'\xE9l\xE8ve jusqu'aux astres.`,
    author: `Virgile`
  },
  {
    cite: `Nul ne veut le bien public que quand il s'accorde avec le sien.`,
    author: `Jean-Jacques Rousseau`
  },
  {
    cite: `On avale \xE0 pleine gorg\xE9e le mensonge qui nous flatte, et l'on boit goutte \xE0 goutte une v\xE9rit\xE9 qui nous est am\xE8re.`,
    author: `Denis Diderot`
  },
  {
    cite: `Appelons hommes de g\xE9nie qui font vite ce que nous faisons lentement.`,
    author: `Joseph Joubert`
  },
  {
    cite: `Rien n'est s\xE9rieux en ce bas monde que le rire.`,
    author: `Gustave Flaubert`
  },
  {
    cite: `Les soucis enlaidissent, c'est la joie qui fait fleurir.`,
    author: `Proverbe berb\xE8re`,
    tags: ["proverbe"]
  },
  {
    cite: `Qui fait rire l'esprit se rend ma\xEEtre du coeur.`,
    author: `Cardinal de Bernis`
  },
  {
    cite: `On ne peut apprendre au crabe \xE0 marcher droit.`,
    author: `Aristophane`
  },
  {
    cite: `Ferme les yeux et tu verras.`,
    author: `Joseph Joubert`
  },
  {
    cite: `L'homme le plus heureux est celui qui fait le bonheur d'un plus grand nombre d'autres.`,
    author: `Denis Diderot`
  },
  {
    cite: `A l'oiseau, le nid; \xE0 l'araign\xE9e, la toile; \xE0 l'homme, l'amiti\xE9.`,
    author: `William Blake`
  },
  {
    cite: `Rien ne s'accomplit dans ce monde sans passion.`,
    author: `Georg Whilhelm Friedrich Hegel`
  },
  {
    cite: `N'engage pas de d\xE9bat lors d'un d\xEEner car celui qui n'a pas faim aura le dernier mot.`,
    author: `Richard Whately`
  },
  {
    cite: `Les paroles sages tombent quelquefois dans l'oreille d'un sourd ; mais un mot gentil n'est jamais perdu.`,
    author: `Arthur Helps`
  },
  {
    cite: `Je crois beaucoup en la chance, et je constate que plus je travaille, plus elle me sourit.`,
    author: `Thomas Jefferson`
  },
  {
    cite: `L'exp\xE9rience est un peigne que la nature nous donne une fois que nous sommes chauves.`,
    author: `Proverbe belge`,
    tags: ["proverbe"]
  },
  {
    cite: `Le rire et le sommeil sont les meilleurs rem\xE8des du monde.`,
    author: `Proverbe irlandais`,
    tags: ["proverbe"]
  },
  {
    cite: `L'enfance est un papillon qui se h\xE2te de br\xFBler ses blanches ailes aux flammes de la jeunesse.`,
    author: `Aloysius Bertrand`
  },
  {
    cite: `La puissance, c'est imposer sa volont\xE9 aux autres. La force, c'est se l'imposer \xE0 soi-m\xEAme.`,
    author: `Lao Zi`
  },
  {
    cite: `A No\xEBl, je n'ai pas plus envie de rose que je ne voudrais de neige au printemps. J'aime chaque saison pour ce qu'elle apporte.`,
    author: `William Shakespeare`
  },
  {
    cite: `Le meilleur secret pour ne jamais tomber c'est de rester toujours assis.`,
    author: `Stendhal`
  },
  {
    cite: `La vari\xE9t\xE9 est la v\xE9ritable \xE9pice de la vie. Qui lui donne toute sa saveur.`,
    author: `William Cowper`
  },
  {
    cite: `Pour retrouver sa jeunesse, il n'y a qu'\xE0 recommencer ses folies.`,
    author: `Th\xE9odore Roosevelt`
  },
  {
    cite: `Le rire que tu offres te sera rendu au centuple.`,
    author: `Proverbe chinois`,
    tags: ["proverbe"]
  },
  {
    cite: `Pour les habits, rien ne vaut les neufs, pour les amis, rien ne vaut les vieux.`,
    author: `Proverbe chinois`,
    tags: ["proverbe"]
  },
  {
    cite: `Il y a toujours un peu de folie dans l'amour mais il y a toujours un peu de raison dans la folie.`,
    author: `Friederich Nietzsche`
  },
  {
    cite: `Faire caca, c'est se lib\xE9rer d'un poids.`,
    author: `Camille Richard`
  },
  {
    cite: `L'exp\xE9rience est le nom que l'on donne \xE0 ses erreurs.`,
    author: `Oscar Wilde`
  },
  {
    cite: `Le bonheur est la plus grande des conqu\xEAtes, celle qu'on fait contre le destin qui nous est impos\xE9.`,
    author: `Albert Camus`
  },
  {
    cite: `On ne devrait vivre que pour le plaisir. Rien ne vieillit comme le bonheur.`,
    author: `Oscar Wilde`
  },
  {
    cite: `Ne juge aucun homme avant d'avoir march\xE9 avec ses mocassins durant deux lunes.`,
    author: `Proverbe am\xE9rindien`,
    tags: ["proverbe"]
  },
  {
    cite: `Vous ne parviendrez jamais \xE0 faire des sages si vous ne faites d'abord des polissons.`,
    author: `Jean-Jacques Rousseau`
  },
  {
    cite: `Ce qui \xE9tonne, \xE9tonne une fois, mais ce qui est admirable est de plus en plus admir\xE9.`,
    author: `Joseph Joubert`
  },
  {
    cite: `Ce qui est admirable, ce n'est pas que le champ des \xE9toiles soit si vaste, c'est que l'homme l'ait mesur\xE9.`,
    author: `Anatole France`
  },
  {
    cite: `Le tout c'est d'avoir du g\xE9nie \xE0 vingt ans et du talent \xE0 quatre-vingts.`,
    author: `Camille Corot`
  },
  {
    cite: `Une image vaut mille mots.`,
    author: `Confucius`
  },
  {
    cite: `La mesure de l'amour c'est d'aimer sans mesure.`,
    author: `Saint-Augustin`
  },
  {
    cite: `No\xEBl n'est pas un jour ni une saison, c'est un \xE9tat d'esprit.`,
    author: `John Calvin Coolidge`
  },
  {
    cite: `Il n'est pas d'hiver sans neige, de printemps sans soleil, et de joie sans \xEAtre partag\xE9e.`,
    author: `Proverbe serbe`,
    tags: ["proverbe"]
  },
  {
    cite: `Les plus beaux mots du monde ne sont que des sons inutiles si vous ne pouvez pas les comprendre.`,
    author: `Anatole France`
  },
  {
    cite: `Si haut que parvienne une chose lanc\xE9e, c'est \xE0 terre qu'elle retourne.`,
    author: `Proverbe africain`,
    tags: ["proverbe"]
  },
  {
    cite: `H\xE2te-toi de bien vivre et songe que chaque jour est \xE0 lui seul une vie.`,
    author: `S\xE9n\xE8que`
  },
  {
    cite: `Tout \xE2ge porte ses fruits, il faut savoir les cueillir.`,
    author: `Raymond Radiguet`
  },
  {
    cite: `Nul devoir n'est plus sous-estim\xE9 que celui d'\xEAtre heureux.`,
    author: `Robert Louis Stevenson`
  },
  {
    cite: `Peu de gens ont le courage d'\xEAtre l\xE2ches devant t\xE9moins.`,
    author: `Th\xE9ophile Gautier`
  },
  {
    cite: `L'or te donne la terre, la terre te donne de l'or.`,
    author: `Proverbe indien`,
    tags: ["proverbe"]
  },
  {
    cite: `Le regard est le m\xE9diateur des coeurs.`,
    author: `Anonyme`
  },
  {
    cite: `Ce n'est pas parce que les choses sont difficiles que nous n'osons pas, c'est parce que nous n'osons pas qu'elles sont difficiles.`,
    author: `S\xE9n\xE8que`
  },
  {
    cite: `En art comme en amour, l'instinct suffit.`,
    author: `Anatole France`
  },
  {
    cite: `Le cadeau, dira-t-on, n'a rien de somptueux, mais venant d'un ami, tout nous est pr\xE9cieux.`,
    author: `Th\xE9ocrite`
  },
  {
    cite: `La franchise ne consiste pas \xE0 dire tout ce que l'on pense mais \xE0 penser tout ce que l'on dit.`,
    author: `Proverbe tchadien`,
    tags: ["proverbe"]
  },
  {
    cite: `Les petits cadeaux entretiennent l'amiti\xE9. Le premier qui a dit dela voulait se faire donner quelque chose.`,
    author: `Eug\xE8ne Scribe`
  },
  {
    cite: `Les premiers sentiments sont toujours les plus naturels.`,
    author: `Madame de S\xE9vign\xE9`
  },
  {
    cite: `Qui ne peut comme il veut, doit vouloir comme il peut.`,
    author: `T\xE9rence`
  },
  {
    cite: `Etre jeune, c'est avoir un esprit qui calcule et un coeur qui ne calcule pas.`,
    author: `Ren\xE9 Bazin`
  },
  {
    cite: `La s\xE9duction supr\xEAme n'est pas d'exprimer ses sentiments. C'est de les faire soup\xE7onner.`,
    author: `Jules Barbey d'Aurevilly`
  },
  {
    cite: `L'action ne doit pas \xEAtre une r\xE9action mais une cr\xE9ation.`,
    author: `Censier (droit f\xE9odal)`
  },
  {
    cite: `On ne devrait s'\xE9tonner que de pouvoir encore s'\xE9tonner.`,
    author: `Fran\xE7ois de La Rochefoucauld`
  },
  {
    cite: `Le coeur n'a pas de ma\xEEtre, il n'est pas un esclave, et de toute contrainte il sait briser l'entrave.`,
    author: `Adam Mickiewicz`
  },
  {
    cite: `Le pass\xE9 est un phare, et non un port.`,
    author: `Proverbe russe`,
    tags: ["proverbe"]
  },
  {
    cite: `La parole est moiti\xE9 \xE0 celui qui parle, moiti\xE9 \xE0 celui qui \xE9coute.`,
    author: `Michel de Montaigne`
  },
  {
    cite: `Un po\xE8me est un myst\xE8re dont le lecteur doit chercher la clef.`,
    author: `St\xE9phane Mallarm\xE9`
  },
  {
    cite: `La vie est trop courte pour \xEAtre petite.`,
    author: `Proverbe anglais`,
    tags: ["proverbe"]
  },
  {
    cite: `Dans une avalanche, aucun flocon ne se sent jamais responsable.`,
    author: `Voltaire`
  },
  {
    cite: `A vingt ans, c'est la volont\xE9 qui r\xE8gne, \xE0 trente ans l'esprit, et \xE0 quarante le jugement.`,
    author: `Benjamin Franklin`
  },
  {
    cite: `Ayez le courage de ne pas savoir un grand nombre de choses afin d'\xE9viter la certitude de ne rien savoir.`,
    author: `Sydney Smith`
  },
  {
    cite: `Je crois pouvoir dire d'un poste \xE9minent et d\xE9licat qu'on y monte plus ais\xE9ment qu'on ne s'y conserve.`,
    author: `Jean de La Bruy\xE8re`
  },
  {
    cite: `Ecrire, c'est d\xE9j\xE0 mettre du noir sur du blanc.`,
    author: `St\xE9phane Mallarm\xE9`
  },
  {
    cite: `Il est temps de vivre la vie que tu t'es imagin\xE9e.`,
    author: `Henry James`
  },
  {
    cite: `Qu'importe aux coeurs unis ce qui change autour d'eux.`,
    author: `Alphonse de Lamartine`
  },
  {
    cite: `N'allez pas l\xE0 o\xF9 le chemin peut mener. Allez l\xE0 o\xF9 il n'y a pas de chemin et laissez une trace.`,
    author: `Ralph Waldo Emerson`
  },
  {
    cite: `Lorsqu'on tire sur un seul fil de la nature, on d\xE9couvre qu'il est attach\xE9 au reste du monde.`,
    author: `John Muir`
  },
  {
    cite: `L'exp\xE9rience est une lanterne que l'on porte sur le dos et qui n'\xE9claire jamais que le chemin parcouru.`,
    author: `Confucius`
  },
  {
    cite: `La nature fait les choses sans se presser, et pourtant tout est accompli.`,
    author: `Lao Zi`
  },
  {
    cite: `Apprends comme si tu devais vivre pour toujours et vis comme si tu devais mourir ce soir !`,
    author: `Proverbe tib\xE9tain`,
    tags: ["proverbe"]
  },
  {
    cite: `Si tu veux \xEAtre heureux, sois-le.`,
    author: `Proverbe chinois`,
    tags: ["proverbe"]
  },
  {
    cite: `Le grand inconv\xE9nient des livres nouveaux est de nous emp\xEAcher de lire les anciens.`,
    author: `Joseph Joubert`
  },
  {
    cite: `On ne doit pas juger du m\xE9rite d'un homme par ses grandes qualit\xE9s, mais par l'usage qu'il en sait faire.`,
    author: `Jean de La Bruy\xE8re`
  },
  {
    cite: `J'ai d\xE9cid\xE9 d'\xEAtre heureux, c'est meilleur pour la sant\xE9.`,
    author: `Voltaire`
  },
  {
    cite: `Un instant de bonheur vaut mille ans dans l'histoire.`,
    author: `Voltaire`
  },
  {
    cite: `Toute beaut\xE9 est une joie \xE9ternelle.`,
    author: `John Keats`
  },
  {
    cite: `J'ai toujours pr\xE9f\xE9r\xE9 la folie des passions \xE0 la sagesse de l'indiff\xE9rence.`,
    author: `Anatole France`
  },
  {
    cite: `Une joie partag\xE9e est une double joie, un chagrin partag\xE9 est un demi-chagrin.`,
    author: `Jacques Deval`
  },
  {
    cite: `Un seul \xEAtre vous manque et tout est d\xE9peupl\xE9.`,
    author: `Alphonse de Lamartine`
  },
  {
    cite: `Si votre coeur est une rose, votre bouche dira des mots parfum\xE9s.`,
    author: `Proverbe russe`,
    tags: ["proverbe"]
  },
  {
    cite: `Ce que l'on con\xE7oit bien s'\xE9nonce clairement, et les mots pour le dire arrivent ais\xE9ment.`,
    author: `Nicolas Boileau`
  },
  {
    cite: `Ann\xE9es de cerises rouges met le rire sur les bouches.`,
    author: `Proverbe fran\xE7ais`,
    tags: ["proverbe"]
  },
  {
    cite: `Quelle noblesse d'avoir un ami, mais combien plus noble d'\xEAtre un ami.`,
    author: `Richard Wagner`
  },
  {
    cite: `Pour les femmes, la douceur est le meilleur moyen d'avoir raison.`,
    author: `Madame de Maintenon`
  },
  {
    cite: `La perfection est un chemin, non une fin.`,
    author: `Proverbe cor\xE9en`,
    tags: ["proverbe"]
  },
  {
    cite: `Quiconque a bu une tasse de chocolat r\xE9siste \xE0 une journ\xE9e de voyage.`,
    author: `Johann Wolfgang Von Goethe`
  },
  {
    cite: `Un des bonheurs de l'amiti\xE9, c'est de savoir \xE0 qui confier un secret.`,
    author: `Alessandro Manzoni`
  },
  {
    cite: `Dis-toi d'abord ce que tu veux \xEAtre, puis fais ce qu'il faut pour le devenir.`,
    author: `Epict\xE8te`
  },
  {
    cite: `L'art est une d\xE9monstration dont la nature est la preuve.`,
    author: `George Sand`
  },
  {
    cite: `L'art d'\xEAtre tant\xF4t tr\xE8s audacieux et tant\xF4t tr\xE8s prudent est l'art de r\xE9ussir.`,
    author: `Napol\xE9on Bonaparte`
  },
  {
    cite: `L\u2019amour, c\u2019est la fusion, l\u2019identification de deux \xEAtres qui s\u2019admirent et s\u2019adorent l\u2019un l\u2019autre.`,
    author: `George Sand`
  },
  {
    cite: `L'art de l'\xE9crivain consiste surtout \xE0 nous faire oublier qu'il emploie des mots.`,
    author: `Henri Bergson`
  },
  {
    cite: `Le d\xE9sordre est simplement l'ordre que nous ne cherchons pas.`,
    author: `Henri Bergson`
  },
  {
    cite: `Le style est comme le cristal, sa puret\xE9 fait son \xE9clat.`,
    author: `Victor Hugo`
  },
  {
    cite: `L'homme devrait mettre autant d'ardeur \xE0 simplifier sa vie qu'il en met \xE0 la compliquer.`,
    author: `Henri Bergson`
  },
  {
    cite: `Il faut agir en homme de pens\xE9e et penser en homme d'action.`,
    author: `Henri Bergson`
  },
  {
    cite: `R\xEAver c'est se d\xE9sint\xE9resser.`,
    author: `Henri Bergson`
  },
  {
    cite: `Quoi que tu r\xEAves d'entreprendre, commence-le. L'audace a du g\xE9nie, du pouvoir, de la magie.`,
    author: `Johann Wolfgang Von Goethe`
  },
  {
    cite: `En mati\xE8re de sentiment, le manque de logique est la meilleure preuve de la sinc\xE9rit\xE9.`,
    author: `L\xE9on Tolsto\xEF`
  },
  {
    cite: `Le d\xE9faut de l'\xE9galit\xE9, c'est que nous ne la voulons qu'avec nos sup\xE9rieurs.`,
    author: `Henri Becque`
  },
  {
    cite: `Papillon, ce billet doux pli\xE9 cherche une adresse de fleur.`,
    author: `Jules Renard`
  },
  {
    cite: `Si vous voulez que vos r\xEAves se r\xE9alisent, ne dormez pas.`,
    author: `Proverbe juif`,
    tags: ["proverbe"]
  },
  {
    cite: `Si les cieux pleurent, la terre vivra.`,
    author: `Proverbe hawaiien`,
    tags: ["proverbe"]
  },
  {
    cite: `Les r\xEAves d'un chat sont peupl\xE9s de souris.`,
    author: `Proverbe libanais`,
    tags: ["proverbe"]
  },
  {
    cite: `Nul n'est plus chanceux que celui qui croit \xE0 sa chance.`,
    author: `Proverbe allemand`,
    tags: ["proverbe"]
  },
  {
    cite: `On peut aussi b\xE2tir quelque chose de beau avec les pierres qui entravent le chemin.`,
    author: `Johann Wolfgang Von Goethe`
  },
  {
    cite: `Tout ce que tu feras sera d\xE9risoire, mais il est essentiel que tu le fasses.`,
    author: `Gandhi`
  },
  {
    cite: `La rose n'a d'\xE9pines que pour celui qui veut la cueillir.`,
    author: `Proverbe chinois`,
    tags: ["proverbe"]
  },
  {
    cite: `Chaque homme cache en lui un enfant qui veut jouer..`,
    author: `Friederich Nietzsche`
  },
  {
    cite: `Pour savoir o\xF9 l'on va, il faut savoir o\xF9 l'on est.`,
    author: `Proverbe tchadien`,
    tags: ["proverbe"]
  },
  {
    cite: `Sans la musique, la vie serait une erreur.`,
    author: `Friederich Nietzsche`
  },
  {
    cite: `A No\xEBl, amusons-nous, profitons-en, car No\xEBl ce n'est qu'une fois par an.`,
    author: `Thomas Tusser`
  },
  {
    cite: `Un homme sans culture, tel un chat sans moustaches, se sent perdu.`,
    author: `Anonyme`
  },
  {
    cite: `La science d\xE9crit la nature, la po\xE9sie la peint et l'embellit.`,
    author: `Georges-Louis Leclerc de Buffon`
  },
  {
    cite: `Si on ne cultive pas le bonheur comment voulez vous qu'il pousse ?`,
    author: `Po\xE8te inconnu`
  },
  {
    cite: `Une fleur fane m\xEAme si on l'aime ; une mauvaise herbe cro\xEEt m\xEAme si on ne l'aime pas.`,
    author: `D\xF6gen`
  },
  {
    cite: `Quand tu lances la fl\xE8che de la v\xE9rit\xE9, trempe toujours la pointe dans du miel.`,
    author: `Proverbe arabe`,
    tags: ["proverbe"]
  },
  {
    cite: `L'esp\xE9rance d'une joie est presque \xE9gale \xE0 la joie.`,
    author: `William Shakespeare`
  },
  {
    cite: `Qui donne ne doit jamais s'en souvenir. Qui re\xE7oit ne doit jamais oublier.`,
    author: `Proverbe h\xE9breu`,
    tags: ["proverbe"]
  },
  {
    cite: `Une fois la partie termin\xE9e, le roi et le pion retournent dans la m\xEAme bo\xEEte.`,
    author: `Proverbe italien`,
    tags: ["proverbe"]
  },
  {
    cite: `Bien \xEAtre : \xE9tat d'esprit produit par la contemplation des ennuis d'autrui.`,
    author: `Ambrose Bierce`
  },
  {
    cite: `La vie, ce n'est pas d'attendre que l'orage passe, c'est d'apprendre \xE0 danser sous la pluie.`,
    author: `S\xE9n\xE8que`
  },
  {
    cite: `L'humour est une disposition d'esprit qui fait qu'on exprime avec gravit\xE9 des choses frivoles et avec l\xE9g\xE8ret\xE9 des choses s\xE9rieuses.`,
    author: `Afred Capus`
  },
  {
    cite: `Accepter l'id\xE9e d'une d\xE9faite, c'est \xEAtre vaincu.`,
    author: `Mar\xE9chal Foch`
  },
  {
    cite: `Le but n'est pas toujours plac\xE9 pour \xEAtre atteint, mais pour servir de point de mire.`,
    author: `Joseph Joubert`
  },
  {
    cite: `Si on veut conna\xEEtre un peuple, il faut \xE9couter sa musique.`,
    author: `Platon`
  },
  {
    cite: `On peut peindre une fleur, mais pas son odeur.`,
    author: `Proverbe italien`,
    tags: ["proverbe"]
  },
  {
    cite: `Parmi les cinq sens, la vue, l'ou\xEFe et l'odorat connaissent moins d'interdits que le toucher et le go\xFBt.`,
    author: `L\xE9onard de Vinci`
  },
  {
    cite: `On n'a jamais fait de grande d\xE9couverte sans hypoth\xE8se audacieuse.`,
    author: `L\xE9onard de Vinci`
  },
  {
    cite: `L'exp\xE9rience prouve que celui qui n'a jamais confiance en personne ne sera jamais d\xE9\xE7u.`,
    author: `L\xE9onard de Vinci`
  },
  {
    cite: `L'attention de celui qui \xE9coute sert d'accompagnement dans la musique du discours.`,
    author: `Joseph Joubert`
  },
  {
    cite: `L'homme n'a point de port, le temps n'a pas de rive ; Il coule et nous passons !`,
    author: `Alphonse de Lamartine`
  },
  {
    cite: `On se sert des couleurs, mais on peint avec le sentiment.`,
    author: `Jean Chardin`
  },
  {
    cite: `Si on ne peut pas rire au paradis, je ne tiens pas \xE0 y aller.`,
    author: `Martin Luther`
  },
  {
    cite: `L'amour n'est pas seulement un sentiment, il est un art aussi.`,
    author: `Honor\xE9 de Balzac`
  },
  {
    cite: `Un homme sans culture, c'est comme un z\xE8bre sans rayure. C'est un \xE2ne.`,
    author: `Proverbe africain`,
    tags: ["proverbe"]
  },
  {
    cite: `Nous pesons rarement dans la m\xEAme balance des offenses que nous faisons et les offenses que l'on nous fait.`,
    author: `Esope`
  },
  {
    cite: `Il faut toujours se r\xE9server le droit de rire le lendemain de ses id\xE9es de la veille.`,
    author: `Napol\xE9on Bonaparte`
  },
  {
    cite: `Le cri du sentiment est toujours absurde ; mais il est sublime parce qu'il est absurde.`,
    author: `Charles Baudelaire`
  },
  {
    cite: `Lorsque les hommes travaillent ensemble, les montagnes se changent en or.`,
    author: `Proverbe chinois`,
    tags: ["proverbe"]
  },
  {
    cite: `Il faut toujours bien faire ce qu'on fait, m\xEAme une folie.`,
    author: `Honor\xE9 de Balzac`
  },
  {
    cite: `Sourire trois fois par tous les jours rend inutile tout m\xE9dicament.`,
    author: `Proverbe chinois`,
    tags: ["proverbe"]
  },
  {
    cite: `Le sourire est le m\xEAme dans toutes les langues.`,
    author: `Proverbe mexicain`,
    tags: ["proverbe"]
  },
  {
    cite: `Tout portrait qu'on peint avec \xE2me est un portrait, non du mod\xE8le, mais de l'artiste.`,
    author: `Oscar Wilde`
  },
  {
    cite: `C'est par l'adresse que vaut le b\xFBcheron, bien plus que par la force.`,
    author: `Hom\xE8re`
  },
  {
    cite: `La plus perdue de toutes les journ\xE9es est celle o\xF9 l'on a pas ri.`,
    author: `Nicolas de Chamfort`
  },
  {
    cite: `Nous tissons notre destin, nous le tirons de nous comme l'araign\xE9e de la toile.`,
    author: `Fran\xE7ois Mauriac`
  },
  {
    cite: `Il faut faire le sacrifice de ses pr\xE9f\xE9rences mais pas celui de ses convictions.`,
    author: `Ren\xE9 Bazin`
  },
  {
    cite: `La musique commence l\xE0 o\xF9 s'arr\xEAte le pouvoir des mots.`,
    author: `Richard Wagner`
  },
  {
    cite: `La joie n'est pas dans les choses, elle est en nous.`,
    author: `Richard Wagner`
  },
  {
    cite: `Toute ascension vers un endroit merveilleux se fait par un escalier en spirale.`,
    author: `Fran\xE7ois Bacon`
  },
  {
    cite: `La nature fait les hommes semblables, la vie les rend diff\xE9rents.`,
    author: `Confucius`
  },
  {
    cite: `Une heure de conversation vaut mieux que cinquante lettres.`,
    author: `Madame de S\xE9vign\xE9`
  },
  {
    cite: `Sabot qui brille n'est pas toujours celui qui chausse le mieux.`,
    author: `Proverbe fran\xE7ais`,
    tags: ["proverbe"]
  },
  {
    cite: `Ce qui est ha\xEFssable, ne le fait pas \xE0 ton prochain ; c'est l\xE0 toute la loi. Le reste n'est que commentaire.`,
    author: `Rabi Hillel`
  },
  {
    cite: `Un rire sinc\xE8re est un rayon de soleil dans une maison.`,
    author: `William Thackeray`
  },
  {
    cite: `Le bonheur c'est un regard, un mot, un sourire pour ceux qui s'aiment.`,
    author: `Delphine de Girardin`
  },
  {
    cite: `Nous sommes plus curieux du sens des r\xEAves que des choses que nous voyons \xE9veill\xE9s.`,
    author: `Diog\xE8ne`
  },
  {
    cite: `Je ne te dis pas que tu es un bon \xE0 rien, je te dis que tu es mauvais en tout !`,
    author: `Le schpountz`
  },
  {
    cite: `Trouver n'est rien, c'est le plan qui est difficile.`,
    author: `Fiodor Dosto\xEFevski`
  },
  {
    cite: `Le monde ne mourra jamais par manque de merveilles mais uniquement par manque d'\xE9merveillement.`,
    author: `Gilbert Keith Chersterton`
  },
  {
    cite: `La modestie est le meilleur app\xE2t pour aller \xE0 la p\xEAche aux compliments.`,
    author: `Gilbert Keith Chersterton`
  },
  {
    cite: `Une civilisation me parait se d\xE9finir \xE0 la fois pas des questions qu'elle pose et par celles qu'elle ne pose pas.`,
    author: `Andr\xE9 Malraux`
  },
  {
    cite: `Si vous voulez que la vie vous sourit, apportez-lui d'abord votre bonne humeur.`,
    author: `Spinoza`
  },
  {
    cite: `Tant de mains pour transformer ce monde, et si peu de regards pour le contempler !`,
    author: `Julien Gracq`
  },
  {
    cite: `Trois bougies repoussent les t\xE9n\xE8bres ; la v\xE9rit\xE9, la connaissance et les lois de la nature.`,
    author: `Proverbe celtique`,
    tags: ["proverbe"]
  },
  {
    cite: `Aimez les yeux ouverts.`,
    author: `Jorge Bucay`,
    tags: ["extrait"]
  },
  {
    cite: `La beaut\xE9 des choses existe dans l'esprit de celui qui les contemple.`,
    author: `David Hume`
  },
  {
    cite: `Lire, c'est voyager ; voyager, c'est lire.`,
    author: `Victor Hugo`
  },
  {
    cite: `Le bonheur n'est pas la destination, mais la mani\xE8re de voyager.`,
    author: `Proverbe br\xE9silien`,
    tags: ["proverbe"]
  },
  {
    cite: `Un roman, c'est un miroir qu'on prom\xE8ne le long du chemin.`,
    author: `Stendhal`
  },
  {
    cite: `Le bonheur arrive \xE0 ceux qui rient.`,
    author: `Proverbe japonais`,
    tags: ["proverbe"]
  },
  {
    cite: `Le bonheur est une chose qui se multiplie quand il se divise.`,
    author: `Proverbe br\xE9silien`,
    tags: ["proverbe"]
  },
  {
    cite: `Il n'est pas de plus lourd fardeau que d'avoir trop de d\xE9sirs.`,
    author: `Lao Zi`
  },
  {
    cite: `Le plaisir de l'habitude est souvent plus doux encore que celui de la nouveaut\xE9.`,
    author: `Marcel Proust`
  },
  {
    cite: `La nuit n'est peut-\xEAtre que la paupi\xE8re du jour.`,
    author: `Omar Khayy\xE2m`
  },
  {
    cite: `La patience est l'art d'esp\xE9rer.`,
    author: `Luc de Vauvenargues`
  },
  {
    cite: `Le bonheur, c'est de continuer \xE0 d\xE9sirer ce qu'on poss\xE8de.`,
    author: `Friederich Nietzsche`
  },
  {
    cite: `Le parfait bonheur ne consiste qu'\xE0 rendre les hommes heureux.`,
    author: `Jean-Baptiste Rousseau`
  },
  {
    cite: `Le soir de la vie apporte avec soi sa lampe.`,
    author: `Joseph Joubert`
  },
  {
    cite: `Les grandes choses peuvent se manifester par de petit signes.`,
    author: `Sigmund Freud`
  },
  {
    cite: `Il n'y a point de chemin vers le bonheur, le bonheur est le chemin.`,
    author: `Lao Tseu`
  },
  {
    cite: `Le bonheur est un r\xEAve d'enfant r\xE9alis\xE9 \xE0 l'\xE2ge adulte.`,
    author: `Sigmund Freud`
  },
  {
    cite: `Fais ton bonheur par le bonheur d'autrui.`,
    author: `Voltaire`
  },
  {
    cite: `Le bonheur est en m\xEAme temps ce qu'il y a de meilleur, de plus beau et de plus agr\xE9able.`,
    author: `Aristote`
  },
  {
    cite: `Il ne faut pas dire oui avec la bouche et non avec le coeur.`,
    author: `Lao Tseu`
  },
  {
    cite: `Ne fais rien dans ta vie, qui te fasse redouter que ton voisin en prenne connaissance.`,
    author: `Epicure`
  },
  {
    cite: `Qu'on me donne six heures pour couper un arbre, j'en passerai quatre \xE0 pr\xE9parer ma hache.`,
    author: `Abraham Lincoln`
  },
  {
    cite: `On met plus de passion \xE0 obtenir ce qu'on n'a pas qu'\xE0 conserver ce qu'on a.`,
    author: `Stendhal`
  },
  {
    cite: `Notre plus grande gloire n'est pas de ne jamais tomber, mais de nous relever chaque fois.`,
    author: `Confucius`
  },
  {
    cite: `Les cons\xE9quences de la col\xE8re sont beaucoup plus graves que les causes.`,
    author: `Marc Aur\xE8le`
  },
  {
    cite: `Chaque coup de col\xE8re est un coup de vieux, chaque sourire est un coup de jeune.`,
    author: `Proverbe chinois`,
    tags: ["proverbe"]
  },
  {
    cite: `La d\xE9couverte d'un mets nouveau fait plus pour le bonheur du genre humain que la d\xE9couverte d'une \xE9toile.`,
    author: `Jean Anthelme Brillat-Savarin`
  },
  {
    cite: `La science est le savoir organis\xE9. La sagesse est la vie organis\xE9e.`,
    author: `Emmanuel Kant`
  },
  {
    cite: `Si je r\xEAve tout seul, cela reste un r\xEAve. Si nous r\xEAvons ensemble, c'est le d\xE9but de la r\xE9alit\xE9.`,
    author: `Proverbe persan`,
    tags: ["pens\xE9e positive", "proverbe"]
  },
  {
    cite: `Il n'est pas de joie qui \xE9gale celle de se cr\xE9er de nouvelles amiti\xE9s.`,
    author: `Proverbe chinois`,
    tags: ["pens\xE9e positive", "proverbe"]
  },
  {
    cite: `L'\xE9chec est seulement l'opportunit\xE9 de recommencer d'une fa\xE7on plus intelligente.`,
    author: `Henry Ford`
  },
  {
    cite: `N'attendez pas d'\xEAtre heureux pour sourire. Souriez plut\xF4t afin d'\xEAtre heureux.`,
    author: `Edward L. Kramer`
  },
  {
    cite: `Cherche un arbre et laisse-lui t'apprendre le calme.`,
    author: `Eckhart Tolle`
  },
  {
    cite: `S'\xE9loigner de tout rapproche un peu de l'essentiel.`,
    author: `Lo\xEFc Peyron`
  },
  {
    cite: `Ceux qui r\xEAvent \xE9veill\xE9s ont connaissance de mille choses \xE9chappent \xE0 ceux qui ne r\xEAvent qu'endormis.`,
    author: `Edgar Allan Poe`
  },
  {
    cite: `Qui m'aime me suive, disait le vent.`,
    author: `Sylvain Tesson`
  },
  {
    cite: `Ignore toutes les choses qui t'emp\xEAchent d'avancer, en particulier celles qui sont dans ta t\xEAte.`,
    author: `Meryl Streep`
  },
  {
    cite: `La vie seule ne suffit pas. On a aussi besoin d'un rayon de soleil, de libert\xE9 et d'une petite fleur.`,
    author: `Hans Christian Andersen`
  },
  {
    cite: `Les deux jours les plus importants de votre vie sont le jour o\xF9 vous \xEAtes n\xE9 et le jour o\xF9 vous d\xE9couvrez pourquoi.`,
    author: `Mark Twain`
  },
  {
    cite: `Le bonheur est souvent la seule chose que l'on puisse donner sans l'avoir, et c'est en le donnant qu'on l'acquiert.`,
    author: `Voltaire`
  },
  {
    cite: `La vie, c'est un livre qu'on aime, c'est un enfant qui joue \xE0 vos pieds, un outil qu'on tient bien dans sa main, un banc pour se reposer le soir devant sa maison.`,
    author: `Jean Anouilh`,
    tags: ["extrait", "Antigone"]
  },
  {
    cite: `Je suis ma propre muse.`,
    author: `Frida Kahlo`
  },
  {
    cite: `\xCAtre heureux ne signifie pas que tout est parfait. Cela signifie que vous avez d\xE9cid\xE9 de regarder au-del\xE0 des imperfections.`,
    author: `Aristote`
  },
  {
    cite: `Seule, je ne peux pas changer le monde, mais je peux jeter une pierre dans l'eau et cr\xE9er de nombreuses ondulations.`,
    author: `M\xE8re Teresa`
  },
  {
    cite: `Tout ce que les hommes ont fait de beau et de bien, ils l'ont fait avec leurs r\xEAves.`,
    author: `Bernard Moitessier`
  },
  {
    cite: `Nous n'avons pas besoin de magie pour changer le monde. Nous portons d\xE9j\xE0 tout le pouvoir dont nous avons besoin \xE0 l'int\xE9rieur de nous.`,
    author: `J. K. Rowling`,
    tags: ["bien-\xEAtre"]
  },
  {
    cite: `Un seul moment de joie chasse cent moments de tristesse.`,
    author: `Proverbe chinois`,
    tags: ["proverbe", "joie"]
  },
  {
    cite: `N'oubliez pas que la terre se r\xE9jouit de sentir vos pieds nus et que les vents joueraient volontiers avec vos cheveux.`,
    author: `Khalil Gibran`
  },
  {
    cite: `Il n'y a pas de honte \xE0 pr\xE9f\xE9rer le bonheur.`,
    author: `Albert Camus`
  },
  {
    cite: `Il n'est jamais trop tard pour devenir ce que l'on aurait pu \xEAtre.`,
    author: `George Eliot`
  },
  {
    cite: `Va prendre tes le\xE7ons dans la nature.`,
    author: `L\xE9onard de Vinci`
  },
  {
    cite: `Le meilleur moment pour planter un arbre, c'\xE9tait il y a vingt ans. Le second, c'est maintenant.`,
    author: `Proverbe chinois`,
    tags: ["proverbe"]
  },
  {
    cite: `Je ne peux rester sans rien faire...  Je vais faire la sieste.`,
    author: `Yvan Audouard`
  },
  {
    cite: `La vie n'est pas faite pour se trouver ; la vie est faite pour se cr\xE9er.`,
    author: `George Bernard Shaw`
  },
  {
    cite: `On voit mourir toute chose anim\xE9e lorsque du corps l'\xE2me subtile part. Je suis le corps, toi la meilleure part: O\xF9 es-tu donc, \xF6 \xE2me bien-aim\xE9e ?`,
    author: `Louise Lab\xE9`,
    tags: ["extrait", "Sonnet VII"]
  },
  {
    cite: `Dans la vie. Rien n'est \xE0 craindre. Tout est \xE0 comprendre.`,
    author: `Marie Curie`
  },
  {
    cite: `Rien n'est jamais fini. Il suffit d'un peu de bonheur pour que tout recommence.`,
    author: `Emile Zola`,
    tags: ["extrait", "Germinal"]
  },
  {
    cite: `Entourez-vous de choses qui vous rendent vraiment heureux.`,
    author: `Marie Kondo`
  },
  {
    cite: `Il se faut s'entraider c'est la loi de nature.`,
    author: `Jean de La Fontaine`
  },
  {
    cite: `Apr\xE8s le verbe aimer, aider est le plus beau verbe du monde.`,
    author: `Baronne Berthe Von Suttner`
  },
  {
    cite: `La curiosit\xE9 est une gourmandise: voir, c'est d\xE9vorer.`,
    author: `Victor Hugo`
  },
  {
    cite: `La vie est un d\xE9fi \xE0 relever, un bonheur \xE0 m\xE9riter, une aventure \xE0 tenter.`,
    author: `M\xE8re Teresa`
  },
  {
    cite: `Quelle musique, le silence !`,
    author: `Jean Anouilh`
  },
  {
    cite: `Le temps est notre ami.`,
    author: `Christine Cayol`
  },
  {
    cite: `Sans effort d'imagination, ou de r\xEAves, nous perdons l'excitation des possibilit\xE9s. Apr\xE8s tout, r\xEAver est une sorte de planification.`,
    author: `Gloria Steinen`
  },
  {
    cite: `Je souhaite dans ma maison, Une femme ayant sa raison, Un chat passant parmi les livres, Des amis en toute saison Sans lesquels je ne peux pas vivre.`,
    author: `Guillaume Apollinaire`
  },
  {
    cite: `Gr\xE2ce aux r\xEAves le monde a \xE9t\xE9 r\xE9invent\xE9 plus souvent qu'il n'y a d'\xE9toiles dans le ciel.`,
    author: `Lloyd Jones`
  },
  {
    cite: `Ne garde rien de ce qui t'a fait tant de mal, les lettres, les photos, les listes dee courses, les partitions, les marque-pages. Ne garde rien, ne jette rien non plus, fais-en cadeau \xE0 quelqu'un qui trouvera \xE7a beau.`,
    author: `C\xE9cile Coulon`,
    tags: ["extrait", "Les Ronces"]
  },
  {
    cite: `Ne laissez personne vous voler votre imagination, votre cr\xE9ativit\xE9 ou votre curiosit\xE9. C'est votre place dans le monde, c'est votre vie.`,
    author: `Mae C. Jemison`
  },
  {
    cite: `Si tu n'arrives pas \xE0 penser, marche ; Si tu penses trop, marche ; Si tu penses mal, marche encore.`,
    author: `Jean Giono`
  },
  {
    cite: `Le ciel \xE9toil\xE9 offre une le\xE7on de sagesse \xE0 qui sait le regarder: s'y perdre. C'est se trouver.`,
    author: `Michel Onfray`
  },
  {
    cite: `Ne renoncez pas \xE0 faire ce que vous voulez vraiment faire. L\xE0 o\xF9 il y a des r\xEAves, de l'amour et de l'inspiration, vous ne pourrez pas vous tromper.`,
    author: `Ella Fitzgerald`
  },
  {
    cite: `Le succ\xE8s est de vous aimer, d'aimer ce que vous faites et d'aimer la fa\xE7on dont vous le faites.`,
    author: `Maya Angelou`
  },
  {
    cite: `Ne cessez jamais d'\xEAtre fantasque. Et ne donnez jamais \xE0 qui que ce soit la responsabilit\xE9 de votre vie..`,
    author: `Mary Oliver`
  },
  {
    cite: `La joie est en tout, il faut savoir l'extraire.`,
    author: `Mary Oliver`
  },
  {
    cite: `La vie est une grande toile vierge: \xE0 vous d'y ajouter le plus de couleurs possible.`,
    author: `Danny Kaye`
  },
  {
    cite: `Quand je me prom\xE8ne, je sens toujours qu'au coin de la rue. Il y a quelque chose de merveilleux qui m'attend.`,
    author: `Sophia Loren`
  },
  {
    cite: `Le bonheur est un seul bouquet : confus l\xE9ger fondant sucr\xE9.`,
    author: `Paul Eluard`
  },
  {
    cite: `Qui s\xE8me le silence r\xE9colte la paix.`,
    author: `Proverbe tha\xEFlandais`,
    tags: ["proverbe"]
  },
  {
    cite: `La vie a beaucoup plus d'imagination que nous.`,
    author: `Fran\xE7ois Truffaut`
  },
  {
    cite: `Le vrai bonheur serait de se souvenir du pr\xE9sent.`,
    author: `Jules Renard`
  },
  {
    cite: `Les erreurs ne se regrettent pas, elles s'assument. La peur ne se fuit pas, elle se surmonte. L'amour ne se crie pas, il se prouve !`,
    author: `Simone Weil`
  },
  {
    cite: `Il ne faut pas se mettre en col\xE8re contre les choses, cela ne leur fait absolument rien.`,
    author: `Germaine de Sta\xEBl`
  },
  {
    cite: `Le bout du monde est le fond du jardin contiennent la m\xEAme quantit\xE9 de merveilles.`,
    author: `Christian Bobin`
  },
  {
    cite: `Vivre c'est aider un autre \xE0 vivre.`,
    author: `Jacques de Bourbon Busser`
  },
  {
    cite: `La v\xE9ritable amiti\xE9 ne g\xE8le pas en hiver.`,
    author: `Proverbe allemand`,
    tags: ["proverbe"]
  },
  {
    cite: `L'art est le plus beau des mensonges.`,
    author: `Claude Debussy`
  },
  {
    cite: `Ralentissez et tout devient plus beau.`,
    author: `David Lynch`
  },
  {
    cite: `Ecris sur ton coeur que chaque jour est le plus beau jour de l'ann\xE9e.`,
    author: `Ralph Waldo Emerson`
  },
  {
    cite: `Le plus grand \xE9chec est de ne pas avoir le courage d'oser.`,
    author: `Abb\xE9 Pierre`
  },
  {
    cite: `Avant de vous diagnostiquer comme d\xE9pressif ou en \xE9tat de faible estime de vous-m\xEAme, commencez par vous assurer que vous n'\xEAtes juste pas, en fait, entour\xE9 par des trous du cul.`,
    author: `William Gibson`
  },
  {
    cite: `L'app\xE9tit vient en mangeant, la soif disparait en buvant.`,
    author: `Fran\xE7ois Rabelais`
  },
  {
    cite: `Le cr\xE9ateur, en obligeant l'homme \xE0 manger pour vivre, l'y invite par l'app\xE9tit et le r\xE9compense par le plaisir.`,
    author: `Jean Anthelme Brillat-Savarin`
  },
  {
    cite: `La gourmandise commence quand on n'a plus faim.`,
    author: `Alphonse Daudet`
  },
  {
    cite: `Si vous n'\xEAtes pas capable d'un peu de sorcellerie, ce n'est pas la peine de vous m\xEAler de cuisine.`,
    author: `Colette`
  },
  {
    cite: `Bien manger, c'est atteindre le ciel.`,
    author: `Proverbe chinois`,
    tags: ["proverbe"]
  },
  {
    cite: `Si je p\xE9tais tout ce que j'ai mang\xE9, je serais sur la lune.`,
    author: `Camille Richard`
  },
  {
    cite: `La joie prolonge la vie.`,
    author: `Ben Sira`
  },
  {
    cite: `La bouche garde le silence pour \xE9couter parler le coeur.`,
    author: `Alfred de Musset`
  },
  {
    cite: `Il n'y a qu'une sorte d'amour, mais il y en a mille diff\xE9rentes copies.`,
    author: `Fran\xE7ois de La Rochefoucauld`
  },
  {
    cite: `La vie est courte, mais un sourire ne prend qu'une seconde.`,
    author: `Proverbe cubain`,
    tags: ["proverbe"]
  },
  {
    cite: `Au milieu de l'hiver, j'ai d\xE9couvert en moi un invincible \xE9t\xE9.`,
    author: `Albert Camus`
  },
  {
    cite: `Le voyage est un retour vers l'essentiel.`,
    author: `Proverbe tib\xE9tain`,
    tags: ["proverbe"]
  },
  {
    cite: `Le bonheur est une petite chose que l'on grignote, assis par terre, au soleil.`,
    author: `Jean Giraudoux`
  },
  {
    cite: `Fais du bien \xE0 ton corps pour que ton \xE2me ait envie d'y rester.`,
    author: `Proverbe indien`,
    tags: ["proverbe"]
  },
  {
    cite: `Le bonheur a les bras ouverts et les yeux ferm\xE9s.`,
    author: `Proverbe allemand`,
    tags: ["proverbe"]
  },
  {
    cite: `H\xE2tons-nous de succomber \xE0 la tentation avant qu'elle ne s'\xE9loigne.`,
    author: `Epicure`
  },
  {
    cite: `Il faut toujours viser la lune, car m\xEAme en cas d'\xE9chec, on atterrit dans les \xE9toiles.`,
    author: `Oscar Wilde`
  },
  {
    cite: `Vivre de telle sorte qu'il te faille d\xE9sirer revivre, c'est l\xE0 ton devoir.`,
    author: `Nietzsche`
  },
  {
    cite: `Les oreilles et les yeux sont les portes et les fen\xEAtres de l'\xE2me.`,
    author: `Joseph Joubert`
  },
  {
    cite: `Quelle flamme pourrait \xE9galer le rayon de soleil d'un jour d'hiver ?`,
    author: `Henry David Thoreau`
  },
  {
    cite: `Grand est celui qui n'a pas perdu son coeur d'enfant.`,
    author: `Meng-Tsen`
  },
  {
    cite: `Je cherche les petites notes qui s'aiment.`,
    author: `Wolfgang Amadeus Mozart`
  },
  {
    cite: `La vrai g\xE9n\xE9rosit\xE9 envers l'avenir consiste \xE0 tout donner au pr\xE9sent.`,
    author: `Albert Camus`,
    tags: ["g\xE9n\xE9rosit\xE9"]
  },
  {
    cite: `L'\xE9t\xE9, un \xE9blouissement comme est la neige, Celle qui vient l\xE9g\xE8re et ne dure pas, et rien de nous n'en trouble la lumi\xE8re D'eau qui s'est condens\xE9e puis s'\xE9vapore.`,
    author: `Yves Bonnefoy`,
    tags: []
  },
  {
    cite: `No\xEBl n'est pas une saison, c'est un sentiment.`,
    author: `Edna Ferber`,
    tags: ["f\xEAte"]
  },
  {
    cite: `No\xEBl est l\xE0, ce joyeux no\xEBl, des cadeaux plein les bras, qui r\xE9chauffe nos coeurs et apporte la joie, jour des plus beaux souvenirs, plus beau jour de l'ann\xE9e.`,
    author: `Washington Irving`,
    tags: ["no\xEBl"]
  },
  {
    cite: `La chose la plus commune, d\xE8s qu'on nous la cache, devient un d\xE9lice.`,
    author: `Oscar Wilde`,
    tags: ["curiosit\xE9"]
  },
  {
    cite: `Le bonheur n'est pas chose ais\xE9e. Il est tr\xE8s difficile de le trouver en nous, il est impossible de le trouver ailleurs.`,
    author: `Bouddha`,
    tags: ["bonheur", "pens\xE9e"]
  },
  {
    cite: `Entre amis, il est si beau que le silence soit d'or, mais le rire bon et frais l'est beaucoup plus encore.`,
    author: `Friederich Nietzsche`,
    tags: ["amiti\xE9"]
  },
  {
    cite: `L'art vise \xE0 imprimer en nous des sentiments plut\xF4t qu'\xE0 les exprimer.`,
    author: `Henri Bergson`,
    tags: ["art"]
  },
  {
    cite: `Les hommes naissent ignorants, pas stupides, la stupidit\xE9 est le r\xE9sultat de l'\xE9ducation.`,
    author: `Bertrand Russell`,
    tags: ["\xE9ducation", "intelligence"]
  },
  {
    cite: `Il n'y a rien d'impossible quand on s'aime.`,
    author: `George Sand`,
    tags: ["amour"]
  },
  {
    cite: `Il n'est pas de joie qui \xE9gale celle de se cr\xE9er de nouvelles amiti\xE9s.`,
    author: `Proverbe japonais`,
    tags: ["proverbe"]
  },
  {
    cite: `Veux-tu vivre heureux ? Voyage avec deux sacs, l'un pour donner, l'autre pour recevoir.`,
    author: `Johann Wolfgang Von Goethe`,
    tags: ["bonheur"]
  },
  {
    cite: `La v\xE9ritable indulgence consiste \xE0 comprendre et \xE0 pardonner les fautes qu'on ne serait pas capable de commettre.`,
    author: `Victor Hugo`,
    tags: ["pardon"]
  },
  {
    cite: `Le plus grand secret pour le bonheur, c'est d'\xEAtre bien avec soi.`,
    author: `Bernard Le Bouyer de Fontenelle`,
    tags: ["bonheur", "bien-\xEAtre"]
  },
  {
    cite: `L'amiti\xE9 double les joies et r\xE9duit de moiti\xE9 les peines.`,
    author: `Francis Bacon`,
    tags: ["amiti\xE9"]
  },
  {
    cite: `Tous les tr\xE9sors de la terre ne valent pas le bonheur d'\xEAtre aim\xE9.`,
    author: `Calderon`,
    tags: ["amour"]
  },
  {
    cite: `Il y a trois sortes de savoir : le savoir proprement dit, le savoir-faire et le savoir-vivre ; les deux derners dispensent assez bien du premier.`,
    author: `Charles Maurice de Talleyrand-P\xE9rigord`,
    tags: []
  },
  {
    cite: `Si vous avez confiance en vous-m\xEAme, vous inspirerez confiance aux autres.`,
    author: `Johann Wolfgang Von Goethe`,
    tags: ["confiance"]
  },
  {
    cite: `Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la m\xEAme direction.`,
    author: `Antoine de Saint-Exup\xE9ry`,
    tags: ["amour"]
  },
  {
    cite: `Il n'y a qu'un chemin possible pour le bonheur, c'est de cesser de nous tracasser pour des choses qui ne d\xE9pendent pas de notre volont\xE9.`,
    author: `Epict\xE8te`,
    tags: ["bonheur"]
  },
  {
    cite: `L\xE0 o\xF9 le coeur est, les pieds n'h\xE9sitent pas \xE0 y aller.`,
    author: `Proverbe togolais`,
    tags: ["proverbe"]
  },
  {
    cite: `Vis comme si tu devais mourir demain, apprends comme si tu devais vivre toujours.`,
    author: `Gandhi`,
    tags: ["motivation"]
  },
  {
    cite: `Le contraire de la mis\xE8re ce n'est pas la richesse. Le contraire de la mis\xE8re, c'est le partage.`,
    author: `Abb\xE9 Pierre`,
    tags: ["partage"]
  },
  {
    cite: `Chaque fois que l'on refuse 1 milliard pour le logement, c'est 10 milliards que l'on pr\xE9pare pour les tribunaux, les prisons, les asiles de fous.`,
    author: `Abb\xE9 Pierre`,
    tags: ["perspective"]
  },
  {
    cite: `La vie est un myst\xE8re qu'il faut vivre, et non un probl\xE8me qu'il faut r\xE9soudre.`,
    author: `Gandhi`,
    tags: []
  },
  {
    cite: `La pens\xE9e n'est qu'un \xE9clair qu milieu de la nuit. Mais c'est un \xE9clair qui est tout.`,
    author: `Henri Pointcar\xE9`,
    tags: []
  },
  {
    cite: `Le bonheur ne vient pas \xE0 ceux qui l'attendent assis.`,
    author: `Baden-Powell`,
    tags: ["bonheur"]
  },
  {
    cite: `Le savant est fier d'avoir tant appris ; le sage est humble d'en savoir si peu.`,
    author: `William Cowper`,
    tags: []
  },
  {
    cite: `Je ne cherche pas \xE0 conna\xEEtre les r\xE9ponses, je cherche \xE0 comprendre les questions.`,
    author: `Confucius`,
    tags: ["savoir"]
  },
  {
    cite: `Rien ne peut r\xE9sister \xE0 l'assaut du rire.`,
    author: `Mark Twain`,
    tags: ["rire"]
  },
  {
    cite: `Celui qui a rendu service doit se taire, c'est \xE0 celui qui l'a re\xE7u de parler.`,
    author: `S\xE9n\xE8que`,
    tags: []
  },
  {
    cite: `Curiosit\xE9 n'est que vanit\xE9. Le plus souvent, on ne veut savoir que pour en parler.`,
    author: `Blaise Pascal`,
    tags: []
  },
  {
    cite: `L'erreur n'annule pas la valeur de l'effort accompli.`,
    author: `Proverbe africain`,
    tags: ["proverbe"]
  },
  {
    cite: `L'art est une d\xE9monstration dont la nature est la preuve.`,
    author: `George Sand`,
    tags: []
  },
  {
    cite: `Le meilleur moyen de teninr sa parole est de ne jamais la donner.`,
    author: `Napol\xE9on Bonaparte`,
    tags: []
  },
  {
    cite: `Les mots me font l'effet d'un pensionnat de petits gar\xE7ons que la phrase m\xE8ne en promenade.`,
    author: `Georges Courteline`,
    tags: ["litt\xE9rature"]
  },
  {
    cite: `Chacun est une lune, avec une face cach\xE9e.`,
    author: `Mark Twain`,
    tags: []
  },
  {
    cite: `Il faut deux ans pour apprendre \xE0 parler et toute une vie pour apprendre \xE0 se taire.`,
    author: `Proverbe chinois`,
    tags: ["proverbe"]
  },
  {
    cite: `Deux choses instruisent l'homme de toute sa nature : l'instinct et l'exp\xE9rience.`,
    author: `Blaise Pascal`,
    tags: []
  },
  {
    cite: `La critique est une chose bien commode : on attaque avec un mot, il faut des pages pour se d\xE9fendre.`,
    author: `Jean-Jacques Rousseau`,
    tags: []
  },
  {
    cite: `L'amour n'est pas aveugle, il est aveuglant.`,
    author: `Yvan Audouard`,
    tags: ["amour"]
  },
  {
    cite: `Une lecture amusante est aussi utile \xE0 la sant\xE9 que l'exercice du corps.`,
    author: `Emmanuel Kant`,
    tags: []
  },
  {
    cite: `Touch\xE9 par l'amour, tout homme devient po\xE8te.`,
    author: `Platon`,
    tags: ["amour"]
  },
  {
    cite: `Il n'y a rien de plus triste qu'une vie sans hasard.`,
    author: `Honor\xE9 de Balzac`,
    tags: []
  },
  {
    cite: `La col\xE8re est comme une avalanche qui se brise sur ce qu'elle brise.`,
    author: `S\xE9n\xE8que`,
    tags: []
  },
  {
    cite: `Les merveilles naissent sans qu'on les s\xE8me.`,
    author: `Proverbe proven\xE7al`,
    tags: ["proverbe"]
  },
  {
    cite: `Le silence est un ami qui ne trahit jamais.`,
    author: `Confucius`,
    tags: []
  },
  {
    cite: `Ecrire c'est une fa\xE7on sans \xEAtre interrompu.`,
    author: `Jules Renard`,
    tags: []
  },
  {
    cite: `Je me moque de savoir beaucoup de choses : je veux savoir des choses que j'aime.`,
    author: `Jules Renard`,
    tags: ["connaissance"]
  },
  {
    cite: `C'est No\xEBl dans le coeur qui met No\xEBl dans l'air.`,
    author: `William Thomas Ellis`,
    tags: ["no\xEBl"]
  },
  {
    cite: `Un mois avant, un mois apr\xE8s No\xEBl, le froid est bon et naturel.`,
    author: `Proverbe fran\xE7ais`,
    tags: ["adage", "proverbe", "no\xEBl"]
  },
  {
    cite: `No\xEBl, c'est le printemps de l'esprit ; c'est tout promesse.`,
    author: `Alain`,
    tags: ["no\xEBl", "Emile-Auguste Chartier", "extrait", `Les saisons de l'esprit`]
  },
  {
    cite: `Il ne faut pas chercher \xE0 rajouter des ann\xE9es \xE0 sa vie, mais plut\xF4t essayer de rajouter de la vie \xE0 ses ann\xE9es.`,
    author: `John Fitzgerald Kennedy`,
    tags: ["vie"]
  },
  {
    cite: `Qu'elle soit n\xE9cessaire, ou m\xEAme justifi\xE9e, ne croyez jamais que la guerre n'est pas un crime.`,
    author: `Ernest Hemingway`,
    tags: ["guerre", "crime"]
  },
  {
    cite: `La joie de vivre est une \xE9motion contagieuse.`,
    author: `Edward D. Wynot`,
    tags: ["bonheur"]
  },
  {
    cite: `La beaut\xE9 commence le jour o\xF9 tu d\xE9cides d'\xEAtre toi-m\xEAme.`,
    author: `Coco Chanel`,
    tags: []
  },
  {
    cite: `Quand la vie te donne un lundi, plonge-le dans les paillettes et scintille toue la journ\xE9e.`,
    author: `Ella Woodward`,
    tags: ["bonheur", "difficult\xE9e"]
  },
  {
    cite: `Sors des sentiers battus. Explore. R\xEAve. D\xE9couvre.`,
    author: `Mark Twain`,
    tags: []
  },
  {
    cite: `Je ne veux d\xE9sormais collectionner que les moments de bonheur.`,
    author: `Stendhal`,
    tags: ["bonheur"]
  },
  {
    cite: `Soyez vous-m\xEAme, les autres sont d\xE9j\xE0 pris.`,
    author: `Oscar Wilde`,
    tags: []
  },
  {
    cite: `Je ne perds jamais, soit je gagne, soit j'apprends.`,
    author: `Nelson Mandela`,
    tags: []
  },
  {
    cite: `Fais de ta vie un r\xEAve, et d'un r\xEAve une r\xE9alit\xE9.`,
    author: `Antoinde de Saint-Exup\xE9ry`,
    tags: ["R\xEAve"]
  },
  {
    cite: `Il n'y a rien de mieux qu'un ami. Sauf peut-\xEAtre un ami avec du chocolat.`,
    author: `Lynda Grayson`,
    tags: ["amiti\xE9"]
  },
  {
    cite: `Je peux le faire et le ferai. Vous pouvez commencer \xE0 regarder.`,
    author: `Carry Green`,
    tags: []
  },
  {
    cite: `"C'est impossible" di la fiert\xE9. "C'est risqu\xE9" dit l'exp\xE9rience. "C'est sans issue" dit la raison."Essayons" mlurmure le coeur.`,
    author: `William Arthur Ward`,
    tags: []
  },
  {
    cite: `La vie, c'est comme une bo\xEEte de chocolats, on ne sait jamais sur quoi on va tomber.`,
    author: `Winston groom`,
    tags: ["extrait", "Forrest Gump"]
  },
  {
    cite: `Donne \xE0 chaque jour la chance de devenir le plus beau jour de ta vie.`,
    author: `Makr Twain`,
    tags: ["bonheur"]
  },
  {
    cite: `Tous les enfants ont du g\xE9nie, le tout c'est de le faire appara\xEEtre.`,
    author: `Charlie Chaplin`,
    tags: ["enfance"]
  },
  {
    cite: `La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'\xE9quilibre.`,
    author: `Albert Einstein`,
    tags: []
  },
  {
    cite: `Il ne faut pas attendre d'\xEAtre parfait pour commencer quelque chose de bien.`,
    author: `Abb\xE9 Pierre`,
    tags: []
  },
  {
    cite: `J'ai un petit c\xF4t\xE9 sir\xE8ne. Certains jours, on dirait que je me suis peign\xE9e avec une fourchette.`,
    author: `Emmanuelle Cortes`,
    tags: []
  },
  {
    cite: `Il n'y a aucune limite \xE0 ce que nous pouvons accomplir en tant que filles.`,
    author: `Michelle Obama`,
    tags: ["f\xE9minisme"]
  },
  {
    cite: `Il y a deux choses qui changent notre vie : les gens que nous rencontrons et les livres que nous lisons.`,
    author: `Harvey MacKay`,
    tags: []
  },
  {
    cite: `Une journ\xE9e sans rire est une journ\xE9e de perdue.`,
    author: `Charlie Chaplin`,
    tags: ["rire", "bonheur"]
  },
  {
    cite: `N'oublions pas : un livre, un stylo, un enfant et un enseignant peuvent changer le monde.`,
    author: `Malala Yousazai`,
    tags: []
  },
  {
    cite: `Don't worry, be happy.`,
    author: `Bob Marley`,
    tags: ["Chanson"]
  },
  {
    cite: `I have a dream.`,
    author: `Martin Luther King`,
    tags: []
  },
  {
    cite: `Neuf personnes sur dix aiment le chocolat ; la dixi\xE8me ment.`,
    author: `John G. Tullius`,
    tags: []
  },
  {
    cite: `Mais alors, si le monde n'a absolument aucun sens, qu'est ce qui nous emp\xEAche d'en inventer un ?.`,
    author: `Lewis Caroll`,
    tags: []
  },
  {
    cite: `Le bonheur vient vers ceux qui croient en lui.`,
    author: `Ali Obn Abu Talib`,
    tags: ["bonheur"]
  },
  {
    cite: `Pour \xEAtre irrempla\xE7able, il faut \xEAtre diff\xE9rente.`,
    author: `Coco Chanel`,
    tags: []
  },
  {
    cite: `\xCAtre en vacances, c'est n'avoir rien \xE0 faire et avoir toute la journ\xE9e pour le faire.`,
    author: `Robert Orban`,
    tags: ["vacance", "oisivet\xE9"]
  },
  {
    cite: `On n'a jamais autant besoin de vacances que lorsqu'on en revient.`,
    author: `Ann Landers`,
    tags: ["fatigue"]
  },
  {
    cite: `Celui qui dit que le bonheur ne s'ach\xE8te pas \xE0 oubli\xE9 qu'il y a les petits chiots.`,
    author: `Gene Hill`,
    tags: ["bonheur", "capitalisme"]
  },
  {
    cite: `Le secret du bonheuret le comble de l'art, c'est de vivre comme tout le monde, en n'\xE9tant comme personne.`,
    author: `Simone de Beauvoir`,
    tags: []
  },
  {
    cite: `La fin d'une chose marque le commencement d'une nouvelle.`,
    author: `Antoine de Saint-Exup\xE9ry`,
    tags: []
  },
  {
    cite: `La musique donne une \xE2me \xE0 nos coeurs et des ailes \xE0 la pens\xE9e.`,
    author: `Platon`,
    tags: []
  },
  {
    cite: `Un sourire co\xFBte moins cher que l'\xE9lectricit\xE9, mais donne autant de lumi\xE8re.`,
    author: `Abb\xE9 Pierre`,
    tags: []
  },
  {
    cite: `Les grandes choses peuvent se manifester par de petits signes.`,
    author: `Freud`,
    tags: []
  },
  {
    cite: `Aimer une personne pour son apparence, c'est comme aimer un livre pour sa reliure.`,
    author: `Laure Conan`,
    tags: ["amour"]
  },
  {
    cite: `Si nous voulons nous pardonner les uns aux autres, commen\xE7ons d'abord par nous comprendre les uns les autres.`,
    author: `Emma Goldman`,
    tags: ["pardon"]
  },
  {
    cite: `Ceux qui ne bougent pas, ne remarquent pas leur cha\xEEnes.`,
    author: `Rosa Luxembourg`,
    tags: ["libert\xE9"]
  },
  {
    cite: `La r\xE9volution sera la floraison de l'humanit\xE9 comme l'amour est la floraison du coeur.`,
    author: `Louise Michel`,
    tags: ["amour", "libert\xE9"]
  },
  {
    cite: `Ne jamais se laisser abattre par des personnes ou par des \xE9v\xE9nements.`,
    author: `Marie Curie`,
    tags: []
  },
  {
    cite: `Si nous faisions tout ce que nous sommes capables de faire, nous en serions abasourdis.`,
    author: `Thomas Edison`,
    tags: []
  },
  {
    cite: `Si ta volont\xE9 te l\xE2che, d\xE9passe-la !.`,
    author: `Emily Dickinson`,
    tags: ["ostination"]
  },
  {
    cite: `Que cette ann\xE9e vous soit heureuse ; que la paix, le repos et la sant\xE9 vous tiennent lieu de fortune.`,
    author: `Madame de S\xE9vign\xE9`,
    tags: []
  },
  {
    cite: `Le v\xE9ritable amour ne conna\xEEt ni le soup\xE7on ni la m\xE9fiance.`,
    author: `George Sand`,
    tags: ["amour"]
  },
  {
    cite: `Un des bonheurs de l'amiti\xE9 c'est d'avoir \xE0 qui confier un secret.`,
    author: `Alessandro Mansoni`,
    tags: ["amiti\xE9"]
  },
  {
    cite: `Le bonheur tient dans la main, il suffit d'un tout petit rien, mais beaucoup de coeur pour qu'il sonne l'heure.`,
    author: `Josiane Coeijmans`,
    tags: ["bonheur"]
  },
  {
    cite: `Tout s'arrange sous l'influence d'une pens\xE9e heureuse et optimiste.`,
    author: `George Sand`,
    tags: []
  },
  {
    cite: `Le courage est le prix que la vie exige pour accorder la paix.`,
    author: `Amelia Earhart`,
    tags: ["courage"]
  },
  {
    cite: `Impossible de bien r\xE9fl\xE9chir, de bien aimer, de bien dormir si on n'a pas mang\xE9.`,
    author: `Virginia Woolf`,
    tags: ["nourriture"]
  },
  {
    cite: `Chacun rec\xE8le en lui une for\xEAt vierge, une \xE9tendue de neige o\xF9 nul oiseau n'a laiss\xE9 son empreinte.`,
    author: `Virginia Woolf`,
    tags: []
  },
  {
    cite: `Ma devise - sans limites.`,
    author: `Isadora Duncan`,
    tags: []
  },
  {
    cite: `Forte comme un homme, plus forte que la plupart d'entre eux.`,
    author: `Lozen`,
    tags: ["f\xE9minisme"]
  },
  {
    cite: `L'amour a d'autres yeux que le commun des hommes.`,
    author: `Jean Racine`,
    tags: ["amour"]
  },
  {
    cite: `N'oublions jamais que No\xEBl est le souci du vrai partage, ce n'est pas un miracle, mais une fa\xE7on de vivre quotidien.`,
    author: `Josiane Coeijmans`,
    tags: ["No\xEBl"]
  },
  {
    cite: `Une lumi\xE8re ici requiert une ombre l\xE0-bas.`,
    author: `Virginia Woolf`,
    tags: []
  },
  {
    cite: `La femme est pr\xE9cieuse, elle donne naissance aux enfants.`,
    author: `Olympe de Gouges`,
    tags: []
  },
  {
    cite: `Les plus beaux livres sont ceux qui n'ont jamais \xE9t\xE9 \xE9crits.`,
    author: `Anatole France`,
    tags: ["lit\xE9rature"]
  },
  {
    cite: `Je n'enseigne pas aux enfants, je leur donne de la joie.`,
    author: `Isadora Duncan`,
    tags: ["bonheur"]
  },
  {
    cite: `La danse est le mouvement de l'univers concentr\xE9 dans un individu.`,
    author: `Isadora Duncan`,
    tags: []
  },
  {
    cite: `La paresse peut para\xEEtre attrayante, mais le travail apporte la satisfaction.`,
    author: `Anne Frank`,
    tags: ["travail"]
  },
  {
    cite: `Un livre, c'est un billet de voyage \xE0 la port\xE9e de tous.`,
    author: `Josiane Coeijmans`,
    tags: ["lit\xE9rature"]
  },
  {
    cite: `Tous les secrets de l'\xE2me d'un auteur, toutes sses exp\xE9riences, toutes les qualit\xE9s de son esprit sont grav\xE9s dans son oeuvre.`,
    author: `Virginia Woolf`,
    tags: ["lit\xE9rature"]
  },
  {
    cite: `N'oubliez pas qu'il faut prendre la vie avec s\xE9r\xE9nit\xE9 et joie quoi qu'il arrive.`,
    author: `Rosa Luxembourg`,
    tags: ["bonheur", "joie"]
  },
  {
    cite: `L'humour est le premier des dons \xE0 p\xE9rir dans une langue \xE9trang\xE8re.`,
    author: `Virginia Woolf`,
    tags: ["humour"]
  },
  {
    cite: `D'une fa\xE7on g\xE9n\xE9rale, on ne doit pas oublier d'\xEAtre bon, car la bont\xE9, dans les relations avec les hommes, fait bien plus qua la s\xE9v\xE9rit\xE9.`,
    author: `Rosa Luxembourg`,
    tags: []
  },
  {
    cite: `Prenez-moi tout mais laissez-moi l'extase et je serai plus riche que mes semblables.`,
    author: `Emily Dickinson`,
    tags: ["plaisir"]
  },
  {
    cite: `Quand on a bonne conscience, c'est No\xEBl en permanence.`,
    author: `Benjamin Franklin`,
    tags: ["honn\xEAtet\xE9"]
  },
  {
    cite: `Si la vie est un roman, prends ta plume et viens \xE9crire avec moi, les plus beaux chapitres.`,
    author: `Josiane Coeijmans`,
    tags: ["amour"]
  },
  {
    cite: `Notre plus grande faiblesse r\xE9side dans l'abandon ; la fa\xE7on la plus s\xFBre de r\xE9ussir est d'essayer une autre fois.`,
    author: `Thomas Edison`,
    tags: ["succ\xE8s", "pers\xE9v\xE9rance"]
  },
  {
    cite: `Le courage croit en osant et la peur en h\xE9sitant.`,
    author: `Proverbe romain`,
    tags: ["courage", "peur"]
  },
  {
    cite: `Dans les grandes choses, avant l'effort qui r\xE9ussit, il y a presque toujours des efforts qui passent inaper\xE7us.`,
    author: `Laure Conan`,
    tags: []
  },
  {
    cite: `Le bonheur, c'est cet instant, cette lueur qui embellit le jour et rejaillit sur autrui.`,
    author: `Josiane Coeijmans`,
    tags: ["bonheur"]
  },
  {
    cite: `Les choses n'arrivent quasi jamais comme on se les imagine.`,
    author: `Madame de S\xE9vign\xE9`,
    tags: ["hasard"]
  },
  {
    cite: `Il n\u2019y a pas plus de raison de trop s\u2019accuser de ses d\xE9fauts que de s\u2019en trop excuser.`,
    author: `Madeleine de Souvr\xE9`,
    tags: ["humilit\xE9", "confiance"]
  },
  {
    cite: `La nature est \xE9ternellement jeune, belle et g\xE9n\xE9reuse. Elle verse la po\xE9sie et la beaut\xE9 \xE0 tous les \xEAtres, \xE0 toutes les plantes, qu'on laisse s'y d\xE9velopper.`,
    author: `George Sand`,
    tags: []
  },
  {
    cite: `La famille, c'est l'amour sans regrets et sans amertume.`,
    author: `Ninon de Lenclos`,
    tags: ["amour"]
  },
  {
    cite: `Cultive tes pens\xE9es, des fleurs pourraient en fleurir.`,
    author: `Josiane Coeijmans`,
    tags: ["pens\xE9e"]
  },
  {
    cite: `Il n'appartient qu'\xE0 celle que le hasard a \xE9lev\xE9e \xE0 une place \xE9minente, de donner du poids \xE0 l'essor des Droits de la Femme et d'en acc\xE9l\xE9rer les succ\xE8s.`,
    author: `Olympe de Gouges`,
    tags: []
  },
  {
    cite: `L'amour a un caract\xE8re si particulier qu'on ne peut le cacher o\xF9 il est, ni le feindre o\xF9 il n'est pas.`,
    author: `Madeleine de Souvr\xE9`,
    tags: ["amour"]
  },
  {
    cite: `La vie chante aussi dans le sable qui craque sous les pas lents et lourds des gardes, quand on sait l'\xE9couter.`,
    author: `Rosa Luxemburg`,
    tags: []
  },
  {
    cite: `La gastronomie fait trembler d'intelligence nos narines.`,
    author: `Charles Monselet`,
    tags: ["\xE9picurien"]
  },
  {
    cite: `Quand on rentre en soi-m\xEAme, on s'aper\xE7oit qu'on poss\xE8de exactement ce que l'on d\xE9sirait.`,
    author: `Simone Weil`,
    tags: []
  },
  {
    cite: `Les choses ne sont pas bonnes parce qu'elles sont vieilles, elles sont vieilles parce qu'elles sont bonnes.`,
    author: `A. Toulouse`,
    tags: []
  },
  {
    cite: `Nous devons croire que nous sommes dou\xE9s pour quelque chose, et que cette chose, \xE0 n'importe quel prix, doit \xEAtre atteinte.`,
    author: `Marie Curie`,
    tags: ["confiance"]
  },
  {
    cite: `Soyez des hommes ou mieux : des surhommes. Soyez fid\xE8les aux buts trac\xE9s.`,
    author: `Mary Shelley`,
    tags: []
  },
  {
    cite: `Je suis une femme libre.`,
    author: `Olympe de Gouges`,
    tags: ["f\xE9minisme"]
  },
  {
    cite: `Je fais le plus de choses que je peux par amour pour me reposer d'en faire tant par n\xE9cessit\xE9.`,
    author: `Marie No\xEBl`,
    tags: []
  },
  {
    cite: `Les chefs-d'oeuvres ne sont jamais que des tentatives heureuses.`,
    author: `George Sand`,
    tags: ["chance"]
  },
  {
    cite: `Les d\xE9tails font la perfection, et la perfection n'est pas un d\xE9tail.`,
    author: `L\xE9onard de Vinci`,
    tags: []
  },
  {
    cite: `Je fais le plus de choses que je peux par amour pour me reposer d'en faire tant par n\xE9cessit\xE9.`,
    author: `Marie No\xEBl`,
    tags: ["amour"]
  },
  {
    cite: `Celui m\xEAme qui veut \xE9crire son r\xEAve se doit d'\xEAtre infiniment \xE9veill\xE9.`,
    author: `Paul Val\xE9ry`,
    tags: []
  },
  {
    cite: `Le beau est ce qu'on ne peut pas vouloir change.`,
    author: `Simone Weil`,
    tags: []
  },
  {
    cite: `C'est le miracle de l'amour de n'avoir pas besoin de mots pour se comprendre.`,
    author: `Laure Conan`,
    tags: ["amour"]
  },
  {
    cite: `L'attention est la forme la plus rare et la plus pure de la g\xE9n\xE9rosit\xE9.`,
    author: `Simone Weil`,
    tags: []
  }
  // {cite: `.`, author: ``, tags: []},
];
var cites = from(data).pipe(
  // filter to prevent duplicated rows
  distinct(({
    cite
  }) => cite),
  // transform each item into a Cite Object
  map((next, index) => {
    return new Cite().setId(index).setCite(next.cite).setAuthor(next.author).setTags(next.tags);
  }),
  // restore into one stream of items (from() will send a complete event that allows toArray() to be triggered)
  toArray(),
  take(1)
  // auto unsubscribe, force complete
);

// src/app/tools/CiteOfTheDay.service.ts
var CiteOfTheDay = class _CiteOfTheDay {
  static getStartYear(citesCount) {
    let startPoint = 1;
    let padding = "";
    let substrLength = 4;
    while (citesCount > startPoint * 365 && startPoint <= 1e4) {
      startPoint *= 10;
      padding += "0";
      substrLength--;
    }
    const startYearDate = /* @__PURE__ */ new Date();
    startYearDate.setFullYear(parseInt((/* @__PURE__ */ new Date()).getFullYear().toString(10).substr(0, substrLength) + padding, 0));
    return startYearDate.getFullYear();
  }
  static yearIs366Days(year) {
    const monthFebruaryIndex = 1;
    const estimatedLastDayOfFebruary = new Date(year, monthFebruaryIndex, 29);
    return estimatedLastDayOfFebruary.getMonth() === monthFebruaryIndex;
  }
  static getLastDayOfMonth(iYear, jMonth) {
    return new Date(iYear, jMonth + 1, 0).getDate();
  }
  static getNumberOfDayInCurrentYear(today, iYear) {
    let numberOfDayInCurrentYear = 0;
    for (let jMonth = 0; jMonth <= today.getMonth(); jMonth++) {
      if (jMonth === today.getMonth()) {
        numberOfDayInCurrentYear += today.getDate();
        break;
      }
      numberOfDayInCurrentYear += _CiteOfTheDay.getLastDayOfMonth(iYear, jMonth);
    }
    return numberOfDayInCurrentYear;
  }
  static getStackOfYears(aDate, startYear) {
    const years = [];
    const currentYear = aDate.getFullYear();
    if (currentYear === startYear) {
      years[currentYear] = _CiteOfTheDay.getNumberOfDayInCurrentYear(aDate, currentYear);
      return years;
    }
    for (let iYear = startYear; iYear <= currentYear; iYear++) {
      if (iYear === currentYear) {
        years[iYear] = _CiteOfTheDay.getNumberOfDayInCurrentYear(aDate, iYear);
        break;
      }
      years[iYear] = _CiteOfTheDay.yearIs366Days(iYear) ? 366 : 365;
    }
    return years;
  }
  static getCiteOfTheDay(cites2) {
    const startYear = _CiteOfTheDay.getStartYear(cites2.length);
    const years = _CiteOfTheDay.getStackOfYears(/* @__PURE__ */ new Date(), startYear);
    const days = years.reduce((previous, current) => previous + current);
    let citeIndex = 0;
    for (let i = 1; i <= days; i++) {
      if (citeIndex === cites2.length) {
        citeIndex = 0;
        continue;
      }
      citeIndex++;
    }
    return cites2[citeIndex];
  }
};

// src/app/services/Cites.ts
var Cites = /* @__PURE__ */ (() => {
  const _Cites = class _Cites {
    constructor(router) {
      this.router = router;
      this.originalCites = [];
      this.cites = new BehaviorSubject([]);
      this.cites$ = this.cites.asObservable().pipe(
        // this is for a kind of immutability: if something push/pop/shift/... the CiteI[] it
        // won't alter every subcriber that has saved the data
        // map(next => rfdc()(next)), // @todo find why it destroy the original object : Cite
        // become a simple object & the proto is not copied
        map((next) => {
          return next.map((cite) => {
            const newCite = new Cite();
            newCite.setId(cite.getId()).setAuthor(cite.getAuthor()).setCite(cite.getCite()).setTags(cite.getTags());
            return newCite;
          });
        }),
        distinct(),
        take(1)
        // auto unsubscribe, force complete
      );
      this.count = 0;
      cites.pipe(tap((next) => this.originalCites = next), tap((next) => this.count = next.length), switchMap(() => this.reset())).subscribe();
    }
    reset() {
      return of(this.originalCites).pipe(filter((value) => !!value), tap((next) => this.cites.next(next)));
    }
    search(search) {
      if (!this.cites.getValue()) {
        return EMPTY;
      }
      return of(this.cites.getValue()).pipe(switchMap((next) => from(next)), filter((item) => {
        if (!search) {
          return true;
        }
        return item && (item.getCite().toLowerCase().includes(search.toLowerCase()) || item.getAuthor().toLowerCase().includes(search.toLowerCase()) || item.getTags().includes(search.toLowerCase()));
      }), toArray());
    }
    searchByAuthor(author) {
      if (!this.cites.getValue()) {
        return EMPTY;
      }
      return of(this.cites.getValue()).pipe(switchMap((next) => from(next)), filter((item) => {
        return item && item.getAuthor().toLowerCase().includes(author.toLowerCase());
      }), toArray());
    }
    countSearchFoundCites() {
      if (
        //this.router.snapshot.queryParams &&
        this.router.snapshot?.queryParams["q"]
      ) {
        return this.count;
      }
      if (this.originalCites) {
        this.count = this.originalCites.length;
      }
      return this.count;
    }
    getCiteOfTheDay() {
      return this.cites.pipe(map((cites2) => CiteOfTheDay.getCiteOfTheDay(cites2)));
    }
    getRandomCite() {
      return this.cites.pipe(map((cites2) => cites2[Math.floor(Math.random() * cites2.length)]));
    }
  };
  _Cites.\u0275fac = function Cites_Factory(t) {
    return new (t || _Cites)(\u0275\u0275inject(ActivatedRoute));
  };
  _Cites.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Cites,
    factory: _Cites.\u0275fac
  });
  let Cites2 = _Cites;
  return Cites2;
})();

export {
  ActivatedRoute,
  RouterOutlet,
  Router,
  RouterLink,
  RouterLinkActive,
  provideRouter,
  withRouterConfig,
  withComponentInputBinding,
  Cites
};
/*! Bundled license information:

@angular/router/fesm2022/router.mjs:
  (**
   * @license Angular v17.0.1
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-DQUYI5GF.js.map
