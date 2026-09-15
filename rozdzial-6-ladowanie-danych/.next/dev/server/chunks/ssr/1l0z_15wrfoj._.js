module.exports = [
"[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canUseDOM",
    ()=>canUseDOM,
    "composeEventHandlers",
    ()=>composeEventHandlers,
    "getActiveElement",
    ()=>getActiveElement,
    "getOwnerDocument",
    ()=>getOwnerDocument,
    "getOwnerWindow",
    ()=>getOwnerWindow,
    "isFrame",
    ()=>isFrame
]);
var __defProp = Object.defineProperty;
var __name = (target, value)=>__defProp(target, "name", {
        value,
        configurable: true
    });
// src/primitive.tsx
var canUseDOM = !!(("TURBOPACK compile-time value", "undefined") !== "undefined" && window.document && window.document.createElement);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
    return /* @__PURE__ */ __name(function handleEvent(event) {
        originalEventHandler?.(event);
        if (checkForDefaultPrevented === false || !event || !event.defaultPrevented) {
            return ourEventHandler?.(event);
        }
    }, "handleEvent");
}
__name(composeEventHandlers, "composeEventHandlers");
function getOwnerWindow(element) {
    if ("TURBOPACK compile-time truthy", 1) {
        throw new Error("Cannot access window outside of the DOM");
    }
    return element?.ownerDocument?.defaultView ?? window;
}
__name(getOwnerWindow, "getOwnerWindow");
function getOwnerDocument(element) {
    if ("TURBOPACK compile-time truthy", 1) {
        throw new Error("Cannot access document outside of the DOM");
    }
    return element?.ownerDocument ?? document;
}
__name(getOwnerDocument, "getOwnerDocument");
function getActiveElement(node, activeDescendant = false) {
    const { activeElement } = getOwnerDocument(node);
    if (!activeElement?.nodeName) {
        return null;
    }
    if (isFrame(activeElement) && activeElement.contentDocument) {
        return getActiveElement(activeElement.contentDocument.body, activeDescendant);
    }
    if (activeDescendant) {
        const id = activeElement.getAttribute("aria-activedescendant");
        if (id) {
            const element = getOwnerDocument(activeElement).getElementById(id);
            if (element) {
                return element;
            }
        }
    }
    return activeElement;
}
__name(getActiveElement, "getActiveElement");
function isFrame(element) {
    return element.tagName === "IFRAME";
}
__name(isFrame, "isFrame");
;
}),
"[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/primitive/dist/internal/is-development.true.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IS_DEVELOPMENT",
    ()=>IS_DEVELOPMENT
]);
// src/internal/is-development.true.ts
var IS_DEVELOPMENT = true;
;
}),
"[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-collection/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCollection",
    ()=>createCollection,
    "unstable_createCollection",
    ()=>createCollection2
]);
// src/collection-legacy.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
var __defProp = Object.defineProperty;
var __name = (target, value)=>__defProp(target, "name", {
        value,
        configurable: true
    });
;
;
;
;
;
// @__NO_SIDE_EFFECTS__
function createCollection(name) {
    const PROVIDER_NAME = name + "CollectionProvider";
    const [createCollectionContext, createCollectionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(PROVIDER_NAME);
    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
        collectionRef: {
            current: null
        },
        itemMap: /* @__PURE__ */ new Map()
    });
    const CollectionProvider = /* @__PURE__ */ __name((props)=>{
        const { scope, children } = props;
        const ref = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
        const itemMap = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](/* @__PURE__ */ new Map()).current;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CollectionProviderImpl, {
            scope,
            itemMap,
            collectionRef: ref,
            children
        });
    }, "CollectionProvider");
    CollectionProvider.displayName = PROVIDER_NAME;
    const COLLECTION_SLOT_NAME = name + "CollectionSlot";
    const CollectionSlotImpl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSlot"])(COLLECTION_SLOT_NAME);
    const CollectionSlot = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { scope, children } = props;
        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
        const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.collectionRef);
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CollectionSlotImpl, {
            ref: composedRefs,
            children
        });
    });
    CollectionSlot.displayName = COLLECTION_SLOT_NAME;
    const ITEM_SLOT_NAME = name + "CollectionItemSlot";
    const ITEM_DATA_ATTR = "data-radix-collection-item";
    const CollectionItemSlotImpl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSlot"])(ITEM_SLOT_NAME);
    const CollectionItemSlot = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { scope, children, ...itemData } = props;
        const ref = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
        const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
        const context = useCollectionContext(ITEM_SLOT_NAME, scope);
        __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
            context.itemMap.set(ref, {
                ref,
                ...itemData
            });
            return ()=>void context.itemMap.delete(ref);
        });
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CollectionItemSlotImpl, {
            ...{
                [ITEM_DATA_ATTR]: ""
            },
            ref: composedRefs,
            children
        });
    });
    CollectionItemSlot.displayName = ITEM_SLOT_NAME;
    function useCollection(scope) {
        const context = useCollectionContext(name + "CollectionConsumer", scope);
        const getItems = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
            const collectionNode = context.collectionRef.current;
            if (!collectionNode) return [];
            const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
            const items = Array.from(context.itemMap.values());
            const orderedItems = items.sort((a, b)=>orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current));
            return orderedItems;
        }, [
            context.collectionRef,
            context.itemMap
        ]);
        return getItems;
    }
    __name(useCollection, "useCollection");
    return [
        {
            Provider: CollectionProvider,
            Slot: CollectionSlot,
            ItemSlot: CollectionItemSlot
        },
        useCollection,
        createCollectionScope
    ];
}
__name(createCollection, "createCollection");
;
;
;
;
// src/ordered-dictionary.ts
var __instanciated = /* @__PURE__ */ new WeakMap();
var OrderedDict = class _OrderedDict extends Map {
    static{
        __name(this, "OrderedDict");
    }
    #keys;
    constructor(entries){
        super(entries);
        this.#keys = [
            ...super.keys()
        ];
        __instanciated.set(this, true);
    }
    set(key, value) {
        if (__instanciated.get(this)) {
            if (this.has(key)) {
                this.#keys[this.#keys.indexOf(key)] = key;
            } else {
                this.#keys.push(key);
            }
        }
        super.set(key, value);
        return this;
    }
    insert(index, key, value) {
        const has = this.has(key);
        const length = this.#keys.length;
        const relativeIndex = toSafeInteger(index);
        let actualIndex = relativeIndex >= 0 ? relativeIndex : length + relativeIndex;
        const safeIndex = actualIndex < 0 || actualIndex >= length ? -1 : actualIndex;
        if (safeIndex === this.size || has && safeIndex === this.size - 1 || safeIndex === -1) {
            this.set(key, value);
            return this;
        }
        const size = this.size + (has ? 0 : 1);
        if (relativeIndex < 0) {
            actualIndex++;
        }
        const keys = [
            ...this.#keys
        ];
        let nextValue;
        let shouldSkip = false;
        for(let i = actualIndex; i < size; i++){
            if (actualIndex === i) {
                let nextKey = keys[i];
                if (keys[i] === key) {
                    nextKey = keys[i + 1];
                }
                if (has) {
                    this.delete(key);
                }
                nextValue = this.get(nextKey);
                this.set(key, value);
            } else {
                if (!shouldSkip && keys[i - 1] === key) {
                    shouldSkip = true;
                }
                const currentKey = keys[shouldSkip ? i : i - 1];
                const currentValue = nextValue;
                nextValue = this.get(currentKey);
                this.delete(currentKey);
                this.set(currentKey, currentValue);
            }
        }
        return this;
    }
    with(index, key, value) {
        const copy = new _OrderedDict(this);
        copy.insert(index, key, value);
        return copy;
    }
    before(key) {
        const index = this.#keys.indexOf(key) - 1;
        if (index < 0) {
            return void 0;
        }
        return this.entryAt(index);
    }
    /**
   * Sets a new key-value pair at the position before the given key.
   */ setBefore(key, newKey, value) {
        const index = this.#keys.indexOf(key);
        if (index === -1) {
            return this;
        }
        return this.insert(index, newKey, value);
    }
    after(key) {
        let index = this.#keys.indexOf(key);
        index = index === -1 || index === this.size - 1 ? -1 : index + 1;
        if (index === -1) {
            return void 0;
        }
        return this.entryAt(index);
    }
    /**
   * Sets a new key-value pair at the position after the given key.
   */ setAfter(key, newKey, value) {
        const index = this.#keys.indexOf(key);
        if (index === -1) {
            return this;
        }
        return this.insert(index + 1, newKey, value);
    }
    first() {
        return this.entryAt(0);
    }
    last() {
        return this.entryAt(-1);
    }
    clear() {
        this.#keys = [];
        return super.clear();
    }
    delete(key) {
        const deleted = super.delete(key);
        if (deleted) {
            this.#keys.splice(this.#keys.indexOf(key), 1);
        }
        return deleted;
    }
    deleteAt(index) {
        const key = this.keyAt(index);
        if (key !== void 0) {
            return this.delete(key);
        }
        return false;
    }
    at(index) {
        const key = at(this.#keys, index);
        if (key !== void 0) {
            return this.get(key);
        }
    }
    entryAt(index) {
        const key = at(this.#keys, index);
        if (key !== void 0) {
            return [
                key,
                this.get(key)
            ];
        }
    }
    indexOf(key) {
        return this.#keys.indexOf(key);
    }
    keyAt(index) {
        return at(this.#keys, index);
    }
    from(key, offset) {
        const index = this.indexOf(key);
        if (index === -1) {
            return void 0;
        }
        let dest = index + offset;
        if (dest < 0) dest = 0;
        if (dest >= this.size) dest = this.size - 1;
        return this.at(dest);
    }
    keyFrom(key, offset) {
        const index = this.indexOf(key);
        if (index === -1) {
            return void 0;
        }
        let dest = index + offset;
        if (dest < 0) dest = 0;
        if (dest >= this.size) dest = this.size - 1;
        return this.keyAt(dest);
    }
    find(predicate, thisArg) {
        let index = 0;
        for (const entry of this){
            if (Reflect.apply(predicate, thisArg, [
                entry,
                index,
                this
            ])) {
                return entry;
            }
            index++;
        }
        return void 0;
    }
    findIndex(predicate, thisArg) {
        let index = 0;
        for (const entry of this){
            if (Reflect.apply(predicate, thisArg, [
                entry,
                index,
                this
            ])) {
                return index;
            }
            index++;
        }
        return -1;
    }
    filter(predicate, thisArg) {
        const entries = [];
        let index = 0;
        for (const entry of this){
            if (Reflect.apply(predicate, thisArg, [
                entry,
                index,
                this
            ])) {
                entries.push(entry);
            }
            index++;
        }
        return new _OrderedDict(entries);
    }
    map(callbackfn, thisArg) {
        const entries = [];
        let index = 0;
        for (const entry of this){
            entries.push([
                entry[0],
                Reflect.apply(callbackfn, thisArg, [
                    entry,
                    index,
                    this
                ])
            ]);
            index++;
        }
        return new _OrderedDict(entries);
    }
    reduce(...args) {
        const [callbackfn, initialValue] = args;
        let index = 0;
        let accumulator = initialValue ?? this.at(0);
        for (const entry of this){
            if (index === 0 && args.length === 1) {
                accumulator = entry;
            } else {
                accumulator = Reflect.apply(callbackfn, this, [
                    accumulator,
                    entry,
                    index,
                    this
                ]);
            }
            index++;
        }
        return accumulator;
    }
    reduceRight(...args) {
        const [callbackfn, initialValue] = args;
        let accumulator = initialValue ?? this.at(-1);
        for(let index = this.size - 1; index >= 0; index--){
            const entry = this.at(index);
            if (index === this.size - 1 && args.length === 1) {
                accumulator = entry;
            } else {
                accumulator = Reflect.apply(callbackfn, this, [
                    accumulator,
                    entry,
                    index,
                    this
                ]);
            }
        }
        return accumulator;
    }
    toSorted(compareFn) {
        const entries = [
            ...this.entries()
        ].sort(compareFn);
        return new _OrderedDict(entries);
    }
    toReversed() {
        const reversed = new _OrderedDict();
        for(let index = this.size - 1; index >= 0; index--){
            const key = this.keyAt(index);
            const element = this.get(key);
            reversed.set(key, element);
        }
        return reversed;
    }
    toSpliced(...args) {
        const entries = [
            ...this.entries()
        ];
        entries.splice(...args);
        return new _OrderedDict(entries);
    }
    slice(start, end) {
        const result = new _OrderedDict();
        let stop = this.size - 1;
        if (start === void 0) {
            return result;
        }
        if (start < 0) {
            start = start + this.size;
        }
        if (end !== void 0 && end > 0) {
            stop = end - 1;
        }
        for(let index = start; index <= stop; index++){
            const key = this.keyAt(index);
            const element = this.get(key);
            result.set(key, element);
        }
        return result;
    }
    every(predicate, thisArg) {
        let index = 0;
        for (const entry of this){
            if (!Reflect.apply(predicate, thisArg, [
                entry,
                index,
                this
            ])) {
                return false;
            }
            index++;
        }
        return true;
    }
    some(predicate, thisArg) {
        let index = 0;
        for (const entry of this){
            if (Reflect.apply(predicate, thisArg, [
                entry,
                index,
                this
            ])) {
                return true;
            }
            index++;
        }
        return false;
    }
};
function at(array, index) {
    if ("at" in Array.prototype) {
        return Array.prototype.at.call(array, index);
    }
    const actualIndex = toSafeIndex(array, index);
    return actualIndex === -1 ? void 0 : array[actualIndex];
}
__name(at, "at");
function toSafeIndex(array, index) {
    const length = array.length;
    const relativeIndex = toSafeInteger(index);
    const actualIndex = relativeIndex >= 0 ? relativeIndex : length + relativeIndex;
    return actualIndex < 0 || actualIndex >= length ? -1 : actualIndex;
}
__name(toSafeIndex, "toSafeIndex");
function toSafeInteger(number) {
    return number !== number || number === 0 ? 0 : Math.trunc(number);
}
__name(toSafeInteger, "toSafeInteger");
;
// @__NO_SIDE_EFFECTS__
function createCollection2(name) {
    const PROVIDER_NAME = name + "CollectionProvider";
    const [createCollectionContext, createCollectionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(PROVIDER_NAME);
    const [CollectionContextProvider, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
        collectionElement: null,
        collectionRef: {
            current: null
        },
        collectionRefObject: {
            current: null
        },
        itemMap: new OrderedDict(),
        setItemMap: /* @__PURE__ */ __name(()=>void 0, "setItemMap")
    });
    const CollectionProvider = /* @__PURE__ */ __name(({ state, ...props })=>{
        return state ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CollectionProviderImpl, {
            ...props,
            state
        }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CollectionInit, {
            ...props
        });
    }, "CollectionProvider");
    CollectionProvider.displayName = PROVIDER_NAME;
    const CollectionInit = /* @__PURE__ */ __name((props)=>{
        const state = useInitCollection();
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CollectionProviderImpl, {
            ...props,
            state
        });
    }, "CollectionInit");
    CollectionInit.displayName = PROVIDER_NAME + "Init";
    const CollectionProviderImpl = /* @__PURE__ */ __name((props)=>{
        const { scope, children, state } = props;
        const ref = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
        const [collectionElement, setCollectionElement] = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
        const composeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(ref, setCollectionElement);
        const [itemMap, setItemMap] = state;
        __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
            if (!collectionElement) return;
            const observer = getChildListObserver(()=>{});
            observer.observe(collectionElement, {
                childList: true,
                subtree: true
            });
            return ()=>{
                observer.disconnect();
            };
        }, [
            collectionElement
        ]);
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CollectionContextProvider, {
            scope,
            itemMap,
            setItemMap,
            collectionRef: composeRefs,
            collectionRefObject: ref,
            collectionElement,
            children
        });
    }, "CollectionProviderImpl");
    CollectionProviderImpl.displayName = PROVIDER_NAME + "Impl";
    const COLLECTION_SLOT_NAME = name + "CollectionSlot";
    const CollectionSlotImpl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSlot"])(COLLECTION_SLOT_NAME);
    const CollectionSlot = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { scope, children } = props;
        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
        const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.collectionRef);
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CollectionSlotImpl, {
            ref: composedRefs,
            children
        });
    });
    CollectionSlot.displayName = COLLECTION_SLOT_NAME;
    const ITEM_SLOT_NAME = name + "CollectionItemSlot";
    const ITEM_DATA_ATTR = "data-radix-collection-item";
    const CollectionItemSlotImpl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSlot"])(ITEM_SLOT_NAME);
    const CollectionItemSlot = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { scope, children, ...itemData } = props;
        const ref = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
        const [element, setElement] = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
        const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref, setElement);
        const context = useCollectionContext(ITEM_SLOT_NAME, scope);
        const { setItemMap } = context;
        const itemDataRef = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](itemData);
        if (!shallowEqual(itemDataRef.current, itemData)) {
            itemDataRef.current = itemData;
        }
        const memoizedItemData = itemDataRef.current;
        __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
            const itemData2 = memoizedItemData;
            setItemMap((map)=>{
                if (!element) {
                    return map;
                }
                if (!map.has(element)) {
                    map.set(element, {
                        ...itemData2,
                        element
                    });
                    return map.toSorted(sortByDocumentPosition);
                }
                return map.set(element, {
                    ...itemData2,
                    element
                }).toSorted(sortByDocumentPosition);
            });
            return ()=>{
                setItemMap((map)=>{
                    if (!element || !map.has(element)) {
                        return map;
                    }
                    map.delete(element);
                    return new OrderedDict(map);
                });
            };
        }, [
            element,
            memoizedItemData,
            setItemMap
        ]);
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CollectionItemSlotImpl, {
            ...{
                [ITEM_DATA_ATTR]: ""
            },
            ref: composedRefs,
            children
        });
    });
    CollectionItemSlot.displayName = ITEM_SLOT_NAME;
    function useInitCollection() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](new OrderedDict());
    }
    __name(useInitCollection, "useInitCollection");
    function useCollection(scope) {
        const { itemMap } = useCollectionContext(name + "CollectionConsumer", scope);
        return itemMap;
    }
    __name(useCollection, "useCollection");
    const functions = {
        createCollectionScope,
        useCollection,
        useInitCollection
    };
    return [
        {
            Provider: CollectionProvider,
            Slot: CollectionSlot,
            ItemSlot: CollectionItemSlot
        },
        functions
    ];
}
__name(createCollection2, "createCollection");
function shallowEqual(a, b) {
    if (a === b) return true;
    if (typeof a !== "object" || typeof b !== "object") return false;
    if (a == null || b == null) return false;
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    for (const key of keysA){
        if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
        if (a[key] !== b[key]) return false;
    }
    return true;
}
__name(shallowEqual, "shallowEqual");
function isElementPreceding(a, b) {
    return !!(b.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_PRECEDING);
}
__name(isElementPreceding, "isElementPreceding");
function sortByDocumentPosition(a, b) {
    return !a[1].element || !b[1].element ? 0 : isElementPreceding(a[1].element, b[1].element) ? -1 : 1;
}
__name(sortByDocumentPosition, "sortByDocumentPosition");
function getChildListObserver(callback) {
    const observer = new MutationObserver((mutationsList)=>{
        for (const mutation of mutationsList){
            if (mutation.type === "childList") {
                callback();
                return;
            }
        }
    });
    return observer;
}
__name(getChildListObserver, "getChildListObserver");
;
}),
"[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "composeRefs",
    ()=>composeRefs,
    "useComposedRefs",
    ()=>useComposedRefs
]);
// src/compose-refs.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __defProp = Object.defineProperty;
var __name = (target, value)=>__defProp(target, "name", {
        value,
        configurable: true
    });
;
function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== void 0) {
        ref.current = value;
    }
}
__name(setRef, "setRef");
function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup == "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup == "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
__name(composeRefs, "composeRefs");
function useComposedRefs(...refs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](composeRefs(...refs), refs);
}
__name(useComposedRefs, "useComposedRefs");
;
}),
"[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createContext",
    ()=>createContext2,
    "createContextScope",
    ()=>createContextScope
]);
// src/create-context.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __defProp = Object.defineProperty;
var __name = (target, value)=>__defProp(target, "name", {
        value,
        configurable: true
    });
;
;
// @__NO_SIDE_EFFECTS__
function createContext2(rootComponentName, defaultContext) {
    const Context = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
    Context.displayName = rootComponentName + "Context";
    const Provider = /* @__PURE__ */ __name((props)=>{
        const { children, ...context } = props;
        const value = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>context, Object.values(context));
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
            value,
            children
        });
    }, "Provider");
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName, options = {}) {
        const { optional = false } = options;
        const context = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](Context);
        if (context) return context;
        if (defaultContext !== void 0) return defaultContext;
        if (optional) return void 0;
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    __name(useContext2, "useContext");
    return [
        Provider,
        useContext2
    ];
}
__name(createContext2, "createContext");
// @__NO_SIDE_EFFECTS__
function createContextScope(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    function createContext3(rootComponentName, defaultContext) {
        const BaseContext = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
        BaseContext.displayName = rootComponentName + "Context";
        const index = defaultContexts.length;
        defaultContexts = [
            ...defaultContexts,
            defaultContext
        ];
        const Provider = /* @__PURE__ */ __name((props)=>{
            const { scope, children, ...context } = props;
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const value = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>context, Object.values(context));
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
                value,
                children
            });
        }, "Provider");
        Provider.displayName = rootComponentName + "Provider";
        function useContext2(consumerName, scope, options = {}) {
            const { optional = false } = options;
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const context = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](Context);
            if (context) return context;
            if (defaultContext !== void 0) return defaultContext;
            if (optional) return void 0;
            throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        __name(useContext2, "useContext");
        return [
            Provider,
            useContext2
        ];
    }
    __name(createContext3, "createContext");
    const createScope = /* @__PURE__ */ __name(()=>{
        const scopeContexts = defaultContexts.map((defaultContext)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
        });
        return /* @__PURE__ */ __name(function useScope(scope) {
            const contexts = scope?.[scopeName] || scopeContexts;
            return __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
                    [`__scope${scopeName}`]: {
                        ...scope,
                        [scopeName]: contexts
                    }
                }), [
                scope,
                contexts
            ]);
        }, "useScope");
    }, "createScope");
    createScope.scopeName = scopeName;
    return [
        createContext3,
        composeContextScopes(createScope, ...createContextScopeDeps)
    ];
}
__name(createContextScope, "createContextScope");
function composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope = /* @__PURE__ */ __name(()=>{
        const scopeHooks = scopes.map((createScope2)=>({
                useScope: createScope2(),
                scopeName: createScope2.scopeName
            }));
        return /* @__PURE__ */ __name(function useComposedScopes(overrideScopes) {
            const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName })=>{
                const scopeProps = useScope(overrideScopes);
                const currentScope = scopeProps[`__scope${scopeName}`];
                return {
                    ...nextScopes2,
                    ...currentScope
                };
            }, {});
            return __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
                    [`__scope${baseScope.scopeName}`]: nextScopes
                }), [
                nextScopes
            ]);
        }, "useComposedScopes");
    }, "createScope");
    createScope.scopeName = baseScope.scopeName;
    return createScope;
}
__name(composeContextScopes, "composeContextScopes");
;
}),
"[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-direction/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DirectionProvider",
    ()=>DirectionProvider,
    "Provider",
    ()=>Provider,
    "useDirection",
    ()=>useDirection
]);
// src/direction.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
var __defProp = Object.defineProperty;
var __name = (target, value)=>__defProp(target, "name", {
        value,
        configurable: true
    });
;
;
var DirectionContext = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](void 0);
var DirectionProvider = /* @__PURE__ */ __name((props)=>{
    const { dir, children } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DirectionContext.Provider, {
        value: dir,
        children
    });
}, "DirectionProvider");
function useDirection(localDir) {
    const globalDir = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](DirectionContext);
    return localDir || globalDir || "ltr";
}
__name(useDirection, "useDirection");
var Provider = DirectionProvider;
;
}),
"[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-id/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useId",
    ()=>useId
]);
// src/id.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-ssr] (ecmascript)");
var __defProp = Object.defineProperty;
var __name = (target, value)=>__defProp(target, "name", {
        value,
        configurable: true
    });
;
;
var useReactId = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[" useId ".trim().toString()] || (()=>void 0);
var count = 0;
function useId(deterministicId) {
    const [id, setId] = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(useReactId());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (!deterministicId) setId((reactId)=>reactId ?? String(count++));
    }, [
        deterministicId
    ]);
    return deterministicId || (id ? `radix-${id}` : "");
}
__name(useId, "useId");
;
}),
"[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-presence/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Presence",
    ()=>Presence,
    "Root",
    ()=>Root
]);
// src/presence.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
var __defProp = Object.defineProperty;
var __name = (target, value)=>__defProp(target, "name", {
        value,
        configurable: true
    });
;
;
;
function useStateMachine(initialState, machine) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"]((state, event)=>{
        const nextState = machine[state][event];
        return nextState ?? state;
    }, initialState);
}
__name(useStateMachine, "useStateMachine");
// src/presence.tsx
var Presence = /* @__PURE__ */ __name((props)=>{
    const { present, children } = props;
    const presence = usePresence(present);
    const child = typeof children === "function" ? children({
        present: presence.isPresent
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(children);
    const ref = useStableComposedRefs(presence.ref, getElementRef(child));
    const forceMount = typeof children === "function";
    return forceMount || presence.isPresent ? __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](child, {
        ref
    }) : null;
}, "Presence");
function usePresence(present) {
    const [node, setNode] = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    const stylesRef = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const prevPresentRef = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](present);
    const prevAnimationNameRef = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]("none");
    const mountAnimationNameRef = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](void 0);
    const initialState = present ? "mounted" : "unmounted";
    const [state, send] = useStateMachine(initialState, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (state === "mounted") {
            prevAnimationNameRef.current = mountAnimationNameRef.current ?? getAnimationName(stylesRef.current);
            mountAnimationNameRef.current = void 0;
        } else {
            prevAnimationNameRef.current = "none";
        }
    }, [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const styles = stylesRef.current;
        const wasPresent = prevPresentRef.current;
        const hasPresentChanged = wasPresent !== present;
        if (hasPresentChanged) {
            const prevAnimationName = prevAnimationNameRef.current;
            const currentAnimationName = getAnimationName(styles);
            if (present) {
                mountAnimationNameRef.current = currentAnimationName;
                send("MOUNT");
            } else if (currentAnimationName === "none" || styles?.display === "none") {
                send("UNMOUNT");
            } else {
                const isAnimating = prevAnimationName !== currentAnimationName;
                if (wasPresent && isAnimating) {
                    send("ANIMATION_OUT");
                } else {
                    send("UNMOUNT");
                }
            }
            prevPresentRef.current = present;
        }
    }, [
        present,
        send
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (node) {
            let timeoutId;
            const ownerWindow = node.ownerDocument.defaultView ?? window;
            const handleAnimationEnd = /* @__PURE__ */ __name((event)=>{
                const currentAnimationName = getAnimationName(stylesRef.current);
                const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName));
                if (event.target === node && isCurrentAnimation) {
                    send("ANIMATION_END");
                    if (!prevPresentRef.current) {
                        const currentFillMode = node.style.animationFillMode;
                        node.style.animationFillMode = "forwards";
                        timeoutId = ownerWindow.setTimeout(()=>{
                            if (node.style.animationFillMode === "forwards") {
                                node.style.animationFillMode = currentFillMode;
                            }
                        });
                    }
                }
            }, "handleAnimationEnd");
            const handleAnimationStart = /* @__PURE__ */ __name((event)=>{
                if (event.target === node) {
                    prevAnimationNameRef.current = getAnimationName(stylesRef.current);
                }
            }, "handleAnimationStart");
            node.addEventListener("animationstart", handleAnimationStart);
            node.addEventListener("animationcancel", handleAnimationEnd);
            node.addEventListener("animationend", handleAnimationEnd);
            return ()=>{
                ownerWindow.clearTimeout(timeoutId);
                node.removeEventListener("animationstart", handleAnimationStart);
                node.removeEventListener("animationcancel", handleAnimationEnd);
                node.removeEventListener("animationend", handleAnimationEnd);
            };
        } else {
            send("ANIMATION_END");
        }
    }, [
        node,
        send
    ]);
    return {
        isPresent: [
            "mounted",
            "unmountSuspended"
        ].includes(state),
        ref: __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((node2)=>{
            if (node2) {
                const styles = getComputedStyle(node2);
                stylesRef.current = styles;
                mountAnimationNameRef.current = getAnimationName(styles);
            } else {
                stylesRef.current = null;
            }
            setNode(node2);
        }, [])
    };
}
__name(usePresence, "usePresence");
function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== void 0) {
        ref.current = value;
    }
}
__name(setRef, "setRef");
function useStableComposedRefs(...refs) {
    const refsRef = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](refs);
    refsRef.current = refs;
    return __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((node)=>{
        const currentRefs = refsRef.current;
        let hasCleanup = false;
        const cleanups = currentRefs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup === "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup === "function") {
                        cleanup();
                    } else {
                        setRef(currentRefs[i], null);
                    }
                }
            };
        }
    }, []);
}
__name(useStableComposedRefs, "useStableComposedRefs");
function getAnimationName(styles) {
    return styles?.animationName || "none";
}
__name(getAnimationName, "getAnimationName");
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
__name(getElementRef, "getElementRef");
var Root = Presence;
;
}),
"[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
// src/primitive.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __defProp = Object.defineProperty;
var __name = (target, value)=>__defProp(target, "name", {
        value,
        configurable: true
    });
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSlot"])(`Primitive.${node}`);
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot : node;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
__name(dispatchDiscreteCustomEvent, "dispatchDiscreteCustomEvent");
var Root = Primitive;
;
}),
"[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-roving-focus/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Item",
    ()=>Item,
    "Root",
    ()=>Root,
    "RovingFocusGroup",
    ()=>RovingFocusGroup,
    "RovingFocusGroupItem",
    ()=>RovingFocusGroupItem,
    "createRovingFocusGroupScope",
    ()=>createRovingFocusGroupScope
]);
// src/roving-focus-group.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-collection/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-id/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-direction/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$is$2d$hydrated$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-use-is-hydrated/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
var __defProp = Object.defineProperty;
var __name = (target, value)=>__defProp(target, "name", {
        value,
        configurable: true
    });
;
;
;
;
;
;
;
;
;
;
;
;
;
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
var GROUP_NAME = "RovingFocusGroup";
var [Collection, useCollection, createCollectionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCollection"])(GROUP_NAME);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(GROUP_NAME, [
    createCollectionScope
]);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
var RovingFocusGroup = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](// blank line to reduce diff noise
/* @__PURE__ */ __name(function RovingFocusGroup2(props, forwardedRef) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Provider, {
        scope: props.__scopeRovingFocusGroup,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Slot, {
            scope: props.__scopeRovingFocusGroup,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(RovingFocusGroupImpl, {
                ...props,
                ref: forwardedRef
            })
        })
    });
}, "RovingFocusGroup"));
var RovingFocusGroupImpl = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](/* @__PURE__ */ __name(function RovingFocusGroupImpl2(props, forwardedRef) {
    const { __scopeRovingFocusGroup, orientation, loop = false, dir, currentTabStopId: currentTabStopIdProp, defaultCurrentTabStopId, onCurrentTabStopIdChange, onEntryFocus, preventScrollOnEntryFocus = false, ...groupProps } = props;
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])(dir);
    const [currentTabStopId, setCurrentTabStopId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: currentTabStopIdProp,
        defaultProp: defaultCurrentTabStopId ?? null,
        onChange: onCurrentTabStopIdChange,
        caller: GROUP_NAME
    });
    const [isTabbingBackOut, setIsTabbingBackOut] = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const handleEntryFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onEntryFocus);
    const getItems = useCollection(__scopeRovingFocusGroup);
    const isClickFocusRef = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const [focusableItemsCount, setFocusableItemsCount] = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const node = ref.current;
        if (node) {
            node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
            return ()=>node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
        }
    }, [
        handleEntryFocus
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(RovingFocusProvider, {
        scope: __scopeRovingFocusGroup,
        orientation,
        dir: direction,
        loop,
        currentTabStopId,
        onItemFocus: __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((tabStopId)=>setCurrentTabStopId(tabStopId), [
            setCurrentTabStopId
        ]),
        onItemShiftTab: __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>setIsTabbingBackOut(true), []),
        onFocusableItemAdd: __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>setFocusableItemsCount((prevCount)=>prevCount + 1), []),
        onFocusableItemRemove: __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>setFocusableItemsCount((prevCount)=>prevCount - 1), []),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
            tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
            "data-orientation": orientation,
            ...groupProps,
            ref: composedRefs,
            style: {
                outline: "none",
                ...props.style
            },
            onMouseDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onMouseDown, ()=>{
                isClickFocusRef.current = true;
            }),
            onFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocus, (event)=>{
                const isKeyboardFocus = !isClickFocusRef.current;
                if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
                    const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
                    event.currentTarget.dispatchEvent(entryFocusEvent);
                    if (!entryFocusEvent.defaultPrevented) {
                        const items = getItems().filter((item)=>item.focusable);
                        const activeItem = items.find((item)=>item.active);
                        const currentItem = items.find((item)=>item.id === currentTabStopId);
                        const candidateItems = [
                            activeItem,
                            currentItem,
                            ...items
                        ].filter(Boolean);
                        const candidateNodes = candidateItems.map((item)=>item.ref.current);
                        focusFirst(candidateNodes, preventScrollOnEntryFocus);
                    }
                }
                isClickFocusRef.current = false;
            }),
            onBlur: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onBlur, ()=>setIsTabbingBackOut(false))
        })
    });
}, "RovingFocusGroupImpl"));
var ITEM_NAME = "RovingFocusGroupItem";
var RovingFocusGroupItem = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](// blank line to reduce diff noise
/* @__PURE__ */ __name(function RovingFocusGroupItem2(props, forwardedRef) {
    const { __scopeRovingFocusGroup, focusable = true, active = false, tabStopId, children, ...itemProps } = props;
    const autoId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const id = tabStopId || autoId;
    const context = useRovingFocusContext(ITEM_NAME, __scopeRovingFocusGroup);
    const isCurrentTabStop = context.currentTabStopId === id;
    const getItems = useCollection(__scopeRovingFocusGroup);
    const { onFocusableItemAdd, onFocusableItemRemove, currentTabStopId } = context;
    const isHydrated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$is$2d$hydrated$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsHydrated"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (!isHydrated || !focusable) {
            return;
        }
        onFocusableItemAdd();
        return ()=>onFocusableItemRemove();
    }, [
        isHydrated,
        focusable,
        onFocusableItemAdd,
        onFocusableItemRemove
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (isHydrated || !focusable) {
            return;
        }
        onFocusableItemAdd();
        return ()=>onFocusableItemRemove();
    }, [
        isHydrated,
        focusable,
        onFocusableItemAdd,
        onFocusableItemRemove
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.ItemSlot, {
        scope: __scopeRovingFocusGroup,
        id,
        focusable,
        active,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
            tabIndex: isCurrentTabStop ? 0 : -1,
            "data-orientation": context.orientation,
            ...itemProps,
            ref: forwardedRef,
            onMouseDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onMouseDown, (event)=>{
                if (!focusable) event.preventDefault();
                else context.onItemFocus(id);
            }),
            onFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocus, ()=>context.onItemFocus(id)),
            onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onKeyDown, (event)=>{
                if (event.key === "Tab" && event.shiftKey) {
                    context.onItemShiftTab();
                    return;
                }
                if (event.target !== event.currentTarget) return;
                const focusIntent = getFocusIntent(event, context.orientation, context.dir);
                if (focusIntent !== void 0) {
                    if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
                    event.preventDefault();
                    const items = getItems().filter((item)=>item.focusable);
                    let candidateNodes = items.map((item)=>item.ref.current);
                    if (focusIntent === "last") candidateNodes.reverse();
                    else if (focusIntent === "prev" || focusIntent === "next") {
                        if (focusIntent === "prev") candidateNodes.reverse();
                        const currentIndex = candidateNodes.indexOf(event.currentTarget);
                        candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                    }
                    setTimeout(()=>focusFirst(candidateNodes));
                }
            }),
            children: typeof children === "function" ? children({
                isCurrentTabStop,
                hasTabStop: currentTabStopId != null
            }) : children
        })
    });
}, "RovingFocusGroupItem"));
var MAP_KEY_TO_FOCUS_INTENT = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};
function getDirectionAwareKey(key, dir) {
    if (dir !== "rtl") return key;
    return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
__name(getDirectionAwareKey, "getDirectionAwareKey");
function getFocusIntent(event, orientation, dir) {
    const key = getDirectionAwareKey(event.key, dir);
    if (orientation === "vertical" && [
        "ArrowLeft",
        "ArrowRight"
    ].includes(key)) return void 0;
    if (orientation === "horizontal" && [
        "ArrowUp",
        "ArrowDown"
    ].includes(key)) return void 0;
    return MAP_KEY_TO_FOCUS_INTENT[key];
}
__name(getFocusIntent, "getFocusIntent");
function focusFirst(candidates, preventScroll = false) {
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates){
        if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
        candidate.focus({
            preventScroll
        });
        if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
    }
}
__name(focusFirst, "focusFirst");
function wrapArray(array, startIndex) {
    return array.map((_, index)=>array[(startIndex + index) % array.length]);
}
__name(wrapArray, "wrapArray");
var Root = RovingFocusGroup;
var Item = RovingFocusGroupItem;
;
}),
"[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Slot,
    "Slot",
    ()=>Slot,
    "Slottable",
    ()=>Slottable,
    "createSlot",
    ()=>createSlot,
    "createSlottable",
    ()=>createSlottable
]);
// src/slot.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __defProp = Object.defineProperty;
var __name = (target, value)=>__defProp(target, "name", {
        value,
        configurable: true
    });
;
;
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
    const Slot2 = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef((props, forwardedRef)=>{
        let { children, ...slotProps } = props;
        let slottableElement = null;
        let hasSlottable = false;
        const newChildren = [];
        if (isLazyComponent(children) && typeof use === "function") {
            children = use(children._payload);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Children.forEach(children, (maybeSlottable)=>{
            if (isSlottable(maybeSlottable)) {
                hasSlottable = true;
                const slottable = maybeSlottable;
                let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
                if (isLazyComponent(child) && typeof use === "function") {
                    child = use(child._payload);
                }
                slottableElement = getSlottableElementFromSlottable(slottable, child);
                newChildren.push(slottableElement?.props?.children);
            } else {
                newChildren.push(maybeSlottable);
            }
        });
        if (slottableElement) {
            slottableElement = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.cloneElement(slottableElement, void 0, newChildren);
        } else if (// A `Slottable` was found but it didn't resolve to a single element (e.g.
        // it wrapped multiple elements, text, or a render-prop `child` that
        // wasn't an element). Don't fall back to treating the `Slottable` wrapper
        // itself as the slot target — throw a descriptive error below instead.
        !hasSlottable && __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Children.count(children) === 1 && __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isValidElement(children)) {
            slottableElement = children;
        }
        const slottableElementRef = slottableElement ? getElementRef(slottableElement) : void 0;
        const composedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, slottableElementRef);
        if (!slottableElement) {
            if (children || children === 0) {
                throw new Error(hasSlottable ? createSlottableError(ownerName) : createSlotError(ownerName));
            }
            return children;
        }
        const mergedProps = mergeProps(slotProps, slottableElement.props ?? {});
        if (slottableElement.type !== __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Fragment) {
            mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.cloneElement(slottableElement, mergedProps);
    });
    Slot2.displayName = `${ownerName}.Slot`;
    return Slot2;
}
__name(createSlot, "createSlot");
var Slot = /* @__PURE__ */ createSlot("Slot");
var SLOTTABLE_IDENTIFIER = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
    const Slottable2 = /* @__PURE__ */ __name((props)=>"child" in props ? props.children(props.child) : props.children, "Slottable");
    Slottable2.displayName = `${ownerName}.Slottable`;
    Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
    return Slottable2;
}
__name(createSlottable, "createSlottable");
var Slottable = /* @__PURE__ */ createSlottable("Slottable");
var getSlottableElementFromSlottable = /* @__PURE__ */ __name((slottable, child)=>{
    if ("child" in slottable.props) {
        const child2 = slottable.props.child;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isValidElement(child2)) return null;
        return __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.cloneElement(child2, void 0, slottable.props.children(child2.props.children));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isValidElement(child) ? child : null;
}, "getSlottableElementFromSlottable");
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    const result = childPropValue(...args);
                    slotPropValue(...args);
                    return result;
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
__name(mergeProps, "mergeProps");
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
__name(getElementRef, "getElementRef");
function isSlottable(child) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
__name(isSlottable, "isSlottable");
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
function isLazyComponent(element) {
    return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
__name(isLazyComponent, "isLazyComponent");
function isPromiseLike(value) {
    return typeof value === "object" && value !== null && "then" in value;
}
__name(isPromiseLike, "isPromiseLike");
var createSlotError = /* @__PURE__ */ __name((ownerName)=>{
    return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
}, "createSlotError");
var createSlottableError = /* @__PURE__ */ __name((ownerName)=>{
    return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
}, "createSlottableError");
var use = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[" use ".trim().toString()];
;
}),
"[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Content",
    ()=>Content,
    "List",
    ()=>List,
    "Root",
    ()=>Root2,
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger,
    "Trigger",
    ()=>Trigger,
    "createTabsScope",
    ()=>createTabsScope
]);
// src/tabs.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-roving-focus/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-presence/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-direction/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-id/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
var __defProp = Object.defineProperty;
var __name = (target, value)=>__defProp(target, "name", {
        value,
        configurable: true
    });
;
;
;
;
;
;
;
;
;
;
;
var TABS_NAME = "Tabs";
var [createTabsContext, createTabsScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(TABS_NAME, [
    __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRovingFocusGroupScope"]
]);
var useRovingFocusGroupScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRovingFocusGroupScope"])();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](// blank line to reduce diff noise
/* @__PURE__ */ __name(function Tabs2(props, forwardedRef) {
    const { __scopeTabs, value: valueProp, onValueChange, defaultValue, orientation = "horizontal", dir, activationMode = "automatic", ...tabsProps } = props;
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])(dir);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: valueProp,
        onChange: onValueChange,
        defaultProp: defaultValue ?? "",
        caller: TABS_NAME
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(TabsProvider, {
        scope: __scopeTabs,
        baseId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(),
        value,
        onValueChange: setValue,
        orientation,
        dir: direction,
        activationMode,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
            dir: direction,
            "data-orientation": orientation,
            ...tabsProps,
            ref: forwardedRef
        })
    });
}, "Tabs"));
var TAB_LIST_NAME = "TabsList";
var TabsList = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](// blank line to reduce diff noise
/* @__PURE__ */ __name(function TabsList2(props, forwardedRef) {
    const { __scopeTabs, loop = true, ...listProps } = props;
    const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation: context.orientation,
        dir: context.dir,
        loop,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
            role: "tablist",
            "aria-orientation": context.orientation,
            ...listProps,
            ref: forwardedRef
        })
    });
}, "TabsList"));
var TRIGGER_NAME = "TabsTrigger";
var TabsTrigger = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](/* @__PURE__ */ __name(function TabsTrigger2(props, forwardedRef) {
    const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
    const context = useTabsContext(TRIGGER_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: isSelected,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].button, {
            type: "button",
            role: "tab",
            "aria-selected": isSelected,
            "aria-controls": contentId,
            "data-state": isSelected ? "active" : "inactive",
            "data-disabled": disabled ? "" : void 0,
            disabled,
            id: triggerId,
            ...triggerProps,
            ref: forwardedRef,
            onMouseDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onMouseDown, (event)=>{
                if (!disabled && event.button === 0 && event.ctrlKey === false) {
                    context.onValueChange(value);
                } else {
                    event.preventDefault();
                }
            }),
            onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onKeyDown, (event)=>{
                if (disabled || event.target !== event.currentTarget) {
                    return;
                }
                if ([
                    " ",
                    "Enter"
                ].includes(event.key)) {
                    context.onValueChange(value);
                }
            }),
            onFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocus, ()=>{
                const isAutomaticActivation = context.activationMode !== "manual";
                if (!isSelected && !disabled && isAutomaticActivation) {
                    context.onValueChange(value);
                }
            })
        })
    });
}, "TabsTrigger"));
var CONTENT_NAME = "TabsContent";
var TabsContent = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](/* @__PURE__ */ __name(function TabsContent2(props, forwardedRef) {
    const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
    const context = useTabsContext(CONTENT_NAME, __scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    const isMountAnimationPreventedRef = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](isSelected);
    __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const rAF = requestAnimationFrame(()=>isMountAnimationPreventedRef.current = false);
        return ()=>cancelAnimationFrame(rAF);
    }, []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || isSelected,
        children: ({ present })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
                "data-state": isSelected ? "active" : "inactive",
                "data-orientation": context.orientation,
                role: "tabpanel",
                "aria-labelledby": triggerId,
                hidden: !present,
                id: contentId,
                tabIndex: 0,
                ...contentProps,
                ref: forwardedRef,
                style: {
                    ...props.style,
                    animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
                },
                children: present && children
            })
    });
}, "TabsContent"));
function makeTriggerId(baseId, value) {
    return `${baseId}-trigger-${value}`;
}
__name(makeTriggerId, "makeTriggerId");
function makeContentId(baseId, value) {
    return `${baseId}-content-${value}`;
}
__name(makeContentId, "makeContentId");
var Root2 = Tabs;
var List = TabsList;
var Trigger = TabsTrigger;
var Content = TabsContent;
;
}),
"[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-ssr] (ecmascript) <export * as Tabs>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-ssr] (ecmascript)");
}),
"[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCallbackRef",
    ()=>useCallbackRef
]);
// src/use-callback-ref.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __defProp = Object.defineProperty;
var __name = (target, value)=>__defProp(target, "name", {
        value,
        configurable: true
    });
;
function useCallbackRef(callback) {
    const callbackRef = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](callback);
    __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        callbackRef.current = callback;
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>(...args)=>callbackRef.current?.(...args), []);
}
__name(useCallbackRef, "useCallbackRef");
;
}),
"[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useControllableState",
    ()=>useControllableState,
    "useControllableStateReducer",
    ()=>useControllableStateReducer
]);
// src/use-controllable-state.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$internal$2f$is$2d$development$2e$true$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/primitive/dist/internal/is-development.true.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$effect$2d$event$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-use-effect-event/dist/index.mjs [app-ssr] (ecmascript)");
var __defProp = Object.defineProperty;
var __name = (target, value)=>__defProp(target, "name", {
        value,
        configurable: true
    });
;
;
;
var useInsertionEffect = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[" useInsertionEffect ".trim().toString()] || __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"];
function useControllableState({ prop, defaultProp, onChange = /* @__PURE__ */ __name(()=>{}, "onChange"), caller }) {
    const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
        defaultProp,
        onChange
    });
    const isControlled = prop !== void 0;
    const value = isControlled ? prop : uncontrolledProp;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$internal$2f$is$2d$development$2e$true$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IS_DEVELOPMENT"]) {
        const isControlledRef = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(prop !== void 0);
        __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(()=>{
            const wasControlled = isControlledRef.current;
            if (wasControlled !== isControlled) {
                const from = wasControlled ? "controlled" : "uncontrolled";
                const to = isControlled ? "controlled" : "uncontrolled";
                console.warn(`${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
            }
            isControlledRef.current = isControlled;
        }, [
            isControlled,
            caller
        ]);
    }
    const setValue = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useCallback((nextValue)=>{
        if (isControlled) {
            const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
            if (value2 !== prop) {
                onChangeRef.current?.(value2);
            }
        } else {
            setUncontrolledProp(nextValue);
        }
    }, [
        isControlled,
        prop,
        setUncontrolledProp,
        onChangeRef
    ]);
    return [
        value,
        setValue
    ];
}
__name(useControllableState, "useControllableState");
function useUncontrolledState({ defaultProp, onChange }) {
    const [value, setValue] = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(defaultProp);
    const prevValueRef = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(value);
    const onChangeRef = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(onChange);
    useInsertionEffect(()=>{
        onChangeRef.current = onChange;
    }, [
        onChange
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(()=>{
        if (prevValueRef.current !== value) {
            onChangeRef.current?.(value);
            prevValueRef.current = value;
        }
    }, [
        value,
        prevValueRef
    ]);
    return [
        value,
        setValue,
        onChangeRef
    ];
}
__name(useUncontrolledState, "useUncontrolledState");
function isFunction(value) {
    return typeof value === "function";
}
__name(isFunction, "isFunction");
;
;
;
var SYNC_STATE = Symbol("RADIX:SYNC_STATE");
function useControllableStateReducer(reducer, userArgs, initialArg, init) {
    const { prop: controlledState, defaultProp, onChange: onChangeProp, caller } = userArgs;
    const isControlled = controlledState !== void 0;
    const onChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$effect$2d$event$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffectEvent"])(onChangeProp);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$internal$2f$is$2d$development$2e$true$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IS_DEVELOPMENT"]) {
        const isControlledRef = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(controlledState !== void 0);
        __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(()=>{
            const wasControlled = isControlledRef.current;
            if (wasControlled !== isControlled) {
                const from = wasControlled ? "controlled" : "uncontrolled";
                const to = isControlled ? "controlled" : "uncontrolled";
                console.warn(`${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
            }
            isControlledRef.current = isControlled;
        }, [
            isControlled,
            caller
        ]);
    }
    const args = [
        {
            ...initialArg,
            state: defaultProp
        }
    ];
    if (init) {
        args.push(init);
    }
    const [internalState, dispatch] = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useReducer((state2, action)=>{
        if (action.type === SYNC_STATE) {
            return {
                ...state2,
                state: action.state
            };
        }
        const next = reducer(state2, action);
        if (isControlled && !Object.is(next.state, state2.state)) {
            onChange(next.state);
        }
        return next;
    }, ...args);
    const uncontrolledState = internalState.state;
    const prevValueRef = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(uncontrolledState);
    __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(()=>{
        if (prevValueRef.current !== uncontrolledState) {
            prevValueRef.current = uncontrolledState;
            if (!isControlled) {
                onChange(uncontrolledState);
            }
        }
    }, [
        uncontrolledState,
        prevValueRef,
        isControlled
    ]);
    const state = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>{
        const isControlled2 = controlledState !== void 0;
        if (isControlled2) {
            return {
                ...internalState,
                state: controlledState
            };
        }
        return internalState;
    }, [
        internalState,
        controlledState
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(()=>{
        if (isControlled && !Object.is(controlledState, internalState.state)) {
            dispatch({
                type: SYNC_STATE,
                state: controlledState
            });
        }
    }, [
        controlledState,
        internalState.state,
        isControlled
    ]);
    return [
        state,
        dispatch
    ];
}
__name(useControllableStateReducer, "useControllableStateReducer");
;
}),
"[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-use-effect-event/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEffectEvent",
    ()=>useEffectEvent
]);
// src/use-effect-event.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __defProp = Object.defineProperty;
var __name = (target, value)=>__defProp(target, "name", {
        value,
        configurable: true
    });
;
;
var useReactEffectEvent = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[" useEffectEvent ".trim().toString()];
var useReactInsertionEffect = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[" useInsertionEffect ".trim().toString()];
function useEffectEvent(callback) {
    if (typeof useReactEffectEvent === "function") {
        return useReactEffectEvent(callback);
    }
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(()=>{
        throw new Error("Cannot call an event handler while rendering.");
    });
    if (typeof useReactInsertionEffect === "function") {
        useReactInsertionEffect(()=>{
            ref.current = callback;
        });
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
            ref.current = callback;
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>(...args)=>ref.current?.(...args), []);
}
__name(useEffectEvent, "useEffectEvent");
;
}),
"[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-use-is-hydrated/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsHydrated",
    ()=>useIsHydrated2
]);
// src/use-is-hydrated.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __defProp = Object.defineProperty;
var __name = (target, value)=>__defProp(target, "name", {
        value,
        configurable: true
    });
;
;
var _isHydrated = false;
function useIsHydrated() {
    const [isHydrated, setIsHydrated] = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(_isHydrated);
    __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(()=>{
        if (!_isHydrated) {
            _isHydrated = true;
            setIsHydrated(true);
        }
    }, []);
    return isHydrated;
}
__name(useIsHydrated, "useIsHydrated");
// src/use-is-hydrated.tsx
var useReactSyncExternalStore = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[" useSyncExternalStore ".trim().toString()];
function subscribe() {
    return ()=>{};
}
__name(subscribe, "subscribe");
function useIsHydratedModern() {
    return useReactSyncExternalStore(subscribe, ()=>true, ()=>false);
}
__name(useIsHydratedModern, "useIsHydratedModern");
var useIsHydrated2 = typeof useReactSyncExternalStore === "function" ? useIsHydratedModern : useIsHydrated;
;
}),
"[project]/rozdzial-6-ladowanie-danych/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLayoutEffect",
    ()=>useLayoutEffect2
]);
// src/use-layout-effect.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
var useLayoutEffect2 = globalThis?.document ? __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"] : ()=>{};
;
}),
"[project]/rozdzial-6-ladowanie-danych/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/rozdzial-6-ladowanie-danych/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cva",
    ()=>cva,
    "cx",
    ()=>cx
]);
/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"];
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
}),
"[project]/rozdzial-6-ladowanie-danych/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/rozdzial-6-ladowanie-danych/node_modules/cn/dist/engine.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "createCn",
    ()=>createCn,
    "createEngine",
    ()=>createEngine,
    "twJoin",
    ()=>twJoin,
    "wrapClsx",
    ()=>wrapClsx
]);
//#region src/engine.ts
const IS_JSC = "line" in /* @__PURE__ */ new Error();
const EXTERNAL = -1;
const DEAD = -1;
const fnv = (str, s, e)=>{
    let h = 2166136261;
    for(let p = s; p < e; p++)h = Math.imul(h ^ str.charCodeAt(p), 16777619);
    return h;
};
const spanHash = (str, s, e)=>{
    const len = e - s;
    let h = Math.imul(len, 2654435761) ^ str.charCodeAt(s);
    if (len > 3) {
        const q = len >> 2;
        const m = len >> 1;
        h = Math.imul(h ^ str.charCodeAt(s + 1) << 8 ^ str.charCodeAt(s + 2) << 16 ^ str.charCodeAt(s + q), 2246822507);
        h = Math.imul(h ^ str.charCodeAt(s + m) << 8 ^ str.charCodeAt(s + m + q) << 16 ^ str.charCodeAt(e - 3), 3266489909);
        h ^= str.charCodeAt(e - 2) << 8 ^ str.charCodeAt(e - 1) << 16;
        for(let p = s + 3, q = e - 4; p < s + 8 && p < q; p++, q--)h = Math.imul(h ^ str.charCodeAt(p) ^ str.charCodeAt(q) << 8, 16777619);
    }
    return h ^ h >>> 15 | 0;
};
const createEngine = (T, validatorImpls, options = {})=>{
    const { GROUP_COUNT, edgeStart, labelStart, labelText, edgeTarget, nodeGroup, nodeVlist, vlistPat, vlistOps, vlistRef, vlistGroup, litAnchor, litGroup, litPool, poolOffsets, poolText, adjGid, adjStart, adjTgt, patGid, patTgt, postfixLookupGroups, customValidatorNames, orderSensitiveModifiers } = T;
    const adjRow = new Int32Array(GROUP_COUNT).fill(-1);
    for(let i = 0; i < adjGid.length; i++)adjRow[adjGid[i]] = i;
    let maxAdj = 0;
    for(let r = 0; r + 1 < adjStart.length; r++){
        const n = adjStart[r + 1] - adjStart[r];
        if (n > maxAdj) maxAdj = n;
    }
    let CLAIM_PER_TOKEN = 32;
    while(CLAIM_PER_TOKEN < 2 * (1 + maxAdj + patGid.length))CLAIM_PER_TOKEN <<= 1;
    const vgStart = new Int32Array(vlistRef.length + 1);
    for(let l = 0; l < vlistRef.length; l++)vgStart[l + 1] = vgStart[l] + vlistPat[vlistRef[l] + 1] - vlistPat[vlistRef[l]];
    const postfixLookupSet = new Uint8Array(GROUP_COUNT);
    for(let i = 0; i < postfixLookupGroups.length; i++)postfixLookupSet[postfixLookupGroups[i]] = 1;
    const nodeCount = edgeStart.length - 1;
    const nodeHasLit = new Uint8Array(nodeCount);
    let litMaxLen = 0;
    let litNoArb = true;
    for(let i = 0; i < litAnchor.length; i++){
        nodeHasLit[litAnchor[i]] = 1;
        const len = poolOffsets[litPool[i] * 2 + 1];
        if (len > litMaxLen) litMaxLen = len;
        const c0 = poolText.charCodeAt(poolOffsets[litPool[i] * 2]);
        if (c0 === 91 || c0 === 40) litNoArb = false;
    }
    let LIT_SIZE = 1;
    while(LIT_SIZE < litAnchor.length * 2)LIT_SIZE <<= 1;
    const litTable = new Int32Array(LIT_SIZE).fill(-1);
    for(let i = 0; i < litAnchor.length; i++){
        const off = poolOffsets[litPool[i] * 2];
        let idx = (fnv(poolText, off, off + poolOffsets[litPool[i] * 2 + 1]) ^ Math.imul(litAnchor[i], 2654435761) | 0) & LIT_SIZE - 1;
        while(litTable[idx] !== -1)idx = idx + 1 & LIT_SIZE - 1;
        litTable[idx] = i;
    }
    const litProbe = (anchor, input, s, e)=>{
        let idx = (fnv(input, s, e) ^ Math.imul(anchor, 2654435761) | 0) & LIT_SIZE - 1;
        const len = e - s;
        for(;;){
            const entry = litTable[idx];
            if (entry === -1) return -1;
            if (litAnchor[entry] === anchor && poolOffsets[litPool[entry] * 2 + 1] === len) {
                const off = poolOffsets[litPool[entry] * 2];
                let ok = true;
                for(let k = 0; k < len; k++)if (poolText.charCodeAt(off + k) !== input.charCodeAt(s + k)) {
                    ok = false;
                    break;
                }
                if (ok) return litGroup[entry];
            }
            idx = idx + 1 & LIT_SIZE - 1;
        }
    };
    const cacheSize = options.cacheSize ?? 8192;
    const RAW_PREFIX = options.prefix ?? T.prefix ?? "";
    const FULL_PREFIX = RAW_PREFIX === "" ? "" : RAW_PREFIX + ":";
    const FPL = FULL_PREFIX.length;
    const vCustom = (customValidatorNames ?? []).map((name)=>{
        const fn = validatorImpls && validatorImpls[name];
        if (!fn) throw new Error("cn: missing validator " + name);
        return fn;
    });
    const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
    const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
    const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
    const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
    let aKind = 0;
    let aLabelS = -1;
    let aLabelE = -1;
    let aValS = -1;
    let aValE = -1;
    const isWordCode = (c)=>c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c === 95;
    const isUniWS = (c)=>/\s/.test(String.fromCharCode(c));
    const analyzeArb = (input, s, e)=>{
        aKind = 0;
        aLabelS = -1;
        if (e - s < 3) return;
        const c0 = input.charCodeAt(s);
        const cl = input.charCodeAt(e - 1);
        if (c0 === 91 && cl === 93) aKind = 1;
        else if (c0 === 40 && cl === 41) aKind = 2;
        else return;
        aValS = s + 1;
        aValE = e - 1;
        let p = s + 1;
        if (isWordCode(input.charCodeAt(p))) {
            p++;
            while(p < e - 1){
                const c = input.charCodeAt(p);
                if (!isWordCode(c) && c !== 45) break;
                p++;
            }
            if (p < e - 2 && input.charCodeAt(p) === 58) {
                aLabelS = s + 1;
                aLabelE = p;
                aValS = p + 1;
            }
        }
    };
    const spanEq = (input, s, e, str)=>{
        if (e - s !== str.length) return false;
        for(let i = 0; i < str.length; i++)if (input.charCodeAt(s + i) !== str.charCodeAt(i)) return false;
        return true;
    };
    const fractionRegex = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/;
    const tshirtRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
    const isNumStr = (v)=>!!v && !Number.isNaN(Number(v));
    const spanIsNamedContainerQuery = (input, s, e)=>{
        if (e - s < 11 || !spanEq(input, s, s + 10, "@container")) return false;
        if (input.charCodeAt(s + 10) === 47) return e - s >= 12;
        const c11 = input.charCodeAt(s + 11);
        return c11 === 115 && e - s >= 17 && spanEq(input, s + 10, s + 16, "-size/") || c11 === 110 && e - s >= 19 && spanEq(input, s + 10, s + 18, "-normal/");
    };
    const VKIND = [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        2
    ];
    const VLABELS = "length|number|number weight|family-name|position percentage|length size bg-size|image url|shadow|length|family-name|position percentage|length size bg-size|image url|shadow|number weight".split("|").map((s)=>s.split(" "));
    const VFALL = [
        2,
        3,
        1,
        0,
        0,
        0,
        4,
        5,
        0,
        0,
        0,
        0,
        0,
        1,
        1
    ];
    const runValidator = (op, input, s, e)=>{
        if (op >= 10) {
            if (op >= 25) return vCustom[op - 25](input.slice(s, e));
            const i = op - 10;
            if (aKind !== VKIND[i]) return false;
            if (aLabelS >= 0) {
                for (const L of VLABELS[i])if (spanEq(input, aLabelS, aLabelE, L)) return true;
                return false;
            }
            switch(VFALL[i]){
                case 0:
                    return false;
                case 1:
                    return true;
                case 2:
                    {
                        const v = input.slice(aValS, aValE);
                        return lengthUnitRegex.test(v) && !colorFunctionRegex.test(v);
                    }
                case 3:
                    return isNumStr(input.slice(aValS, aValE));
                case 4:
                    return imageRegex.test(input.slice(aValS, aValE));
                default:
                    return shadowRegex.test(input.slice(aValS, aValE));
            }
        }
        switch(op){
            case 0:
                return true;
            case 1:
                return aKind === 0;
            case 2:
                return aKind === 1;
            case 3:
                return aKind === 2;
            case 4:
                return fractionRegex.test(input.slice(s, e));
            case 5:
                return isNumStr(input.slice(s, e));
            case 6:
                {
                    const v = input.slice(s, e);
                    return !!v && Number.isInteger(Number(v));
                }
            case 7:
                return e > s && input.charCodeAt(e - 1) === 37 && isNumStr(input.slice(s, e - 1));
            case 8:
                return tshirtRegex.test(input.slice(s, e));
            default:
                return spanIsNamedContainerQuery(input, s, e);
        }
    };
    const orderSensitive = new Set(typeof orderSensitiveModifiers === "string" ? orderSensitiveModifiers.split(" ") : orderSensitiveModifiers);
    const internSpan = (map, input, s, e, imp, make)=>{
        const h = fnv(input, s, e) ^ (imp ? 2654435769 : 0) | 0;
        let bucket = map.get(h);
        if (bucket !== void 0) outer: for(let b = 0; b < bucket.length; b++){
            const en = bucket[b];
            if (en.imp !== imp || en.k.length !== e - s) continue;
            for(let i = 0; i < en.k.length; i++)if (en.k.charCodeAt(i) !== input.charCodeAt(s + i)) continue outer;
            return en.id;
        }
        else map.set(h, bucket = []);
        const k = input.slice(s, e);
        const id = make(k);
        bucket.push({
            k,
            imp,
            id
        });
        return id;
    };
    let ctxByHash = /* @__PURE__ */ new Map();
    let ctxByCanon = /* @__PURE__ */ new Map();
    let nextCtxId = 2;
    const MAX_CTX = 4096;
    const canonicalizeContext = (raw, important)=>{
        const mods = [];
        let dB = 0, dP = 0, start = 0;
        for(let i = 0; i < raw.length; i++){
            const c = raw.charCodeAt(i);
            if (dB === 0 && dP === 0 && c === 58) {
                mods.push(raw.slice(start, i));
                start = i + 1;
            } else if (c === 91) dB++;
            else if (c === 93) dB--;
            else if (c === 40) dP++;
            else if (c === 41) dP--;
        }
        mods.push(raw.slice(start));
        let canonical = mods[0];
        if (mods.length > 1) {
            const result = [];
            let segment = [];
            for (const mod of mods)if (mod.charCodeAt(0) === 91 || orderSensitive.has(mod)) {
                if (segment.length) {
                    result.push(...segment.sort());
                    segment = [];
                }
                result.push(mod);
            } else segment.push(mod);
            if (segment.length) result.push(...segment.sort());
            canonical = result.join(":");
        }
        const key = important ? canonical + " !" : canonical;
        let id = ctxByCanon.get(key);
        if (id === void 0) ctxByCanon.set(key, id = nextCtxId++);
        return id;
    };
    let dynByHash = /* @__PURE__ */ new Map();
    let nextDynId = GROUP_COUNT;
    const MAX_DYN = GROUP_COUNT + 4096;
    const newDynId = ()=>nextDynId++;
    const ID_LIMIT = 2097152;
    const TOKEN_TABLE = 8192;
    const memoHash = new Int32Array(TOKEN_TABLE);
    const memoStr = new Array(TOKEN_TABLE).fill(null);
    const memoGid = new Int32Array(TOKEN_TABLE);
    const memoCtx = new Int32Array(TOKEN_TABLE);
    const memoFlags = new Uint8Array(TOKEN_TABLE);
    let memoTick = 0;
    const memoPut = (way0, input, ts, te, h, gid, ctxId, flags)=>{
        let slot = way0;
        if (memoStr[way0] !== null) {
            if (memoStr[way0 | 1] === null) slot = way0 | 1;
            else if ((memoTick++ & 3) === 0) slot = way0 | memoTick >> 2 & 1;
            else return;
        }
        memoStr[slot] = input.slice(ts, te);
        memoHash[slot] = h;
        memoGid[slot] = gid;
        memoCtx[slot] = ctxId;
        memoFlags[slot] = flags;
    };
    const memoReset = ()=>memoStr.fill(null);
    let cap = 256;
    let tokI32 = [
        new Int32Array(cap),
        new Int32Array(cap),
        new Int32Array(cap),
        new Int32Array(cap)
    ];
    let [tokStart, tokEnd, tokGid, tokCtx] = tokI32;
    let tokFlags = new Uint8Array(cap);
    let keep = new Uint8Array(cap);
    const growTokens = ()=>{
        cap *= 2;
        tokI32 = tokI32.map((a)=>{
            const n = new Int32Array(cap);
            n.set(a);
            return n;
        });
        [tokStart, tokEnd, tokGid, tokCtx] = tokI32;
        const nf = new Uint8Array(cap);
        nf.set(tokFlags);
        tokFlags = nf;
        keep = new Uint8Array(cap);
    };
    let ckptCap = 64;
    let ckptNode = new Int32Array(ckptCap);
    let ckptTail = new Int32Array(ckptCap);
    const claim0 = new Int32Array(GROUP_COUNT);
    let CLAIM_TABLE = 2048;
    let claimShift = 21;
    let claimKeys = new Float64Array(CLAIM_TABLE);
    let claimEpochs = new Int32Array(CLAIM_TABLE);
    let epoch = 0;
    const claimTest = (ctx, gid)=>{
        if (ctx === 0 && gid < GROUP_COUNT) {
            if (claim0[gid] === epoch) return 1;
            claim0[gid] = epoch;
            return 0;
        }
        const key = ctx * 2097152 + gid + 1;
        let idx = Math.imul(key, 2654435761) >>> claimShift;
        for(;;){
            if (claimEpochs[idx] !== epoch) break;
            if (claimKeys[idx] === key) return 1;
            idx = idx + 1 & CLAIM_TABLE - 1;
        }
        claimKeys[idx] = key;
        claimEpochs[idx] = epoch;
        return 0;
    };
    const resolveAt = (input, bs, endPos, nodeAt, ckptAt)=>{
        if (endPos - bs >= 2 && input.charCodeAt(bs) === 91 && input.charCodeAt(endPos - 1) === 93) {
            let colon = -1;
            for(let p = bs + 1; p < endPos - 1; p++)if (input.charCodeAt(p) === 58) {
                colon = p;
                break;
            }
            if (colon === -1 || colon === bs + 1) return EXTERNAL;
            return internSpan(dynByHash, input, bs + 1, colon, 0, newDynId);
        }
        if (nodeAt >= 0 && nodeGroup[nodeAt] >= 0) return nodeGroup[nodeAt];
        for(let k = ckptAt - 1; k >= 0; k--){
            const tailStart = ckptTail[k];
            if (tailStart > endPos) continue;
            const nodeId = ckptNode[k];
            const tlen = endPos - tailStart;
            if (nodeHasLit[nodeId] === 1 && tlen > 0 && tlen <= litMaxLen) {
                const c0 = input.charCodeAt(tailStart);
                if (litNoArb === false || c0 !== 91 && c0 !== 40) {
                    const g = litProbe(nodeId, input, tailStart, endPos);
                    if (g >= 0) return g;
                }
            }
            const vl = nodeVlist[nodeId];
            if (vl < 0) continue;
            const pat = vlistRef[vl];
            const vs = vlistPat[pat];
            const ve = vlistPat[pat + 1];
            if (vs === ve) continue;
            analyzeArb(input, tailStart, endPos);
            const g0 = vgStart[vl] - vs;
            for(let v = vs; v < ve; v++)if (runValidator(vlistOps[v], input, tailStart, endPos)) return vlistGroup[g0 + v];
        }
        return EXTERNAL;
    };
    const mergeClassList = (input)=>{
        const n = input.length;
        let tokenCount = 0;
        let totalTokenChars = 0;
        let sawNonSpaceWS = false;
        if (nextCtxId > MAX_CTX || ctxByHash.size > MAX_CTX) {
            ctxByHash = /* @__PURE__ */ new Map();
            ctxByCanon = /* @__PURE__ */ new Map();
            nextCtxId = 2;
            memoReset();
        }
        if (nextDynId > MAX_DYN) {
            dynByHash = /* @__PURE__ */ new Map();
            nextDynId = GROUP_COUNT;
            memoReset();
        }
        let i = 0;
        while(i < n){
            let c = input.charCodeAt(i);
            if (c === 32 || c >= 9 && c <= 13 || c >= 160 && isUniWS(c)) {
                if (c !== 32) sawNonSpaceWS = true;
                i++;
                continue;
            }
            const ts = i;
            let th = 0;
            while(i < n){
                c = input.charCodeAt(i);
                if (c <= 32) {
                    if (c === 32) break;
                    if (c >= 9 && c <= 13) {
                        sawNonSpaceWS = true;
                        break;
                    }
                } else if (c >= 160 && isUniWS(c)) {
                    sawNonSpaceWS = true;
                    break;
                }
                th = Math.imul(th ^ c, 16777619);
                i++;
            }
            const te = i;
            const len = te - ts;
            if (tokenCount === cap) growTokens();
            const t = tokenCount++;
            tokStart[t] = ts;
            tokEnd[t] = te;
            totalTokenChars += len;
            th ^= Math.imul(len, 2654435761);
            const h = th ^ th >>> 15 | 0;
            const way0 = h & 8190;
            {
                let hitAt = -1;
                if (memoHash[way0] === h && memoStr[way0] !== null && memoStr[way0].length === len) hitAt = way0;
                else if (memoHash[way0 | 1] === h && memoStr[way0 | 1] !== null && memoStr[way0 | 1].length === len) hitAt = way0 | 1;
                if (hitAt >= 0) {
                    const s = memoStr[hitAt];
                    let ok = true;
                    for(let k = 0; k < len; k++)if (s.charCodeAt(k) !== input.charCodeAt(ts + k)) {
                        ok = false;
                        break;
                    }
                    if (ok) {
                        tokGid[t] = memoGid[hitAt];
                        tokCtx[t] = memoCtx[hitAt];
                        tokFlags[t] = memoFlags[hitAt];
                        continue;
                    }
                }
            }
            let pts = ts;
            if (FPL !== 0) {
                if (te - ts <= FPL || !input.startsWith(FULL_PREFIX, ts)) {
                    tokGid[t] = EXTERNAL;
                    memoPut(way0, input, ts, te, h, EXTERNAL, 0, 0);
                    continue;
                }
                pts = ts + FPL;
            }
            let depthB = 0, depthP = 0;
            let lastColon = -1, lastSlash = -1;
            for(let p = pts; p < te; p++){
                const pc = input.charCodeAt(p);
                if (depthB === 0 && depthP === 0) {
                    if (pc === 58) {
                        lastColon = p;
                        continue;
                    }
                    if (pc === 47) {
                        lastSlash = p;
                        continue;
                    }
                }
                if (pc === 91) depthB++;
                else if (pc === 93) depthB--;
                else if (pc === 40) depthP++;
                else if (pc === 41) depthP--;
            }
            const modStart = lastColon >= pts ? lastColon + 1 : pts;
            let bs = modStart;
            let be = te;
            let important = false;
            let prefixShift = 0;
            if (be > bs && input.charCodeAt(be - 1) === 33) {
                important = true;
                be--;
            } else if (be > bs && input.charCodeAt(bs) === 33) {
                important = true;
                bs++;
                prefixShift = 1;
            }
            let postfixEnd = -1;
            if (lastSlash > modStart) {
                postfixEnd = lastSlash + prefixShift;
                if (postfixEnd >= be) postfixEnd = -1;
            }
            let feedStart = bs;
            if (be - bs > 1 && input.charCodeAt(bs) === 45) feedStart = bs + 1;
            let node = 0;
            let lp = 0;
            let le = 0;
            let pending = -1;
            let ckptTop = 0;
            if (nodeVlist[0] >= 0 || nodeHasLit[0] === 1) {
                ckptNode[0] = 0;
                ckptTail[0] = feedStart;
                ckptTop = 1;
            }
            let slashNode = DEAD;
            let slashCkpt = 0;
            for(let p = feedStart; p < be; p++){
                if (p === postfixEnd) {
                    slashNode = lp < le ? DEAD : node;
                    slashCkpt = ckptTop;
                }
                if (node !== DEAD) {
                    const cc = input.charCodeAt(p);
                    let arrived = -1;
                    if (lp < le) {
                        if (labelText.charCodeAt(lp) === cc) {
                            lp++;
                            if (lp === le) arrived = node = pending;
                        } else node = DEAD;
                    } else {
                        const es = edgeStart[node];
                        const ee = edgeStart[node + 1];
                        let next = DEAD;
                        for(let e = es; e < ee; e++){
                            const ls = labelStart[e];
                            if (labelText.charCodeAt(ls) === cc) {
                                if (labelStart[e + 1] - ls === 1) arrived = next = edgeTarget[e];
                                else {
                                    lp = ls + 1;
                                    le = labelStart[e + 1];
                                    pending = edgeTarget[e];
                                    next = node;
                                }
                                break;
                            }
                        }
                        node = next;
                    }
                    if (arrived >= 0 && (nodeVlist[arrived] >= 0 || nodeHasLit[arrived] === 1) && p + 1 < be && input.charCodeAt(p + 1) === 45) {
                        if (ckptTop === ckptCap) {
                            ckptCap *= 2;
                            const nv = new Int32Array(ckptCap);
                            nv.set(ckptNode);
                            ckptNode = nv;
                            const nt = new Int32Array(ckptCap);
                            nt.set(ckptTail);
                            ckptTail = nt;
                        }
                        ckptNode[ckptTop] = arrived;
                        ckptTail[ckptTop] = p + 2;
                        ckptTop++;
                    }
                }
            }
            if (postfixEnd === be) {
                slashNode = lp < le ? DEAD : node;
                slashCkpt = ckptTop;
            }
            const endNode = lp < le ? DEAD : node;
            let gid;
            let hasPostfix = false;
            if (postfixEnd >= 0) {
                hasPostfix = true;
                gid = resolveAt(input, bs, postfixEnd, slashNode, slashCkpt);
                if (gid !== EXTERNAL && gid < GROUP_COUNT && postfixLookupSet[gid]) {
                    const gidFull = resolveAt(input, bs, be, endNode, ckptTop);
                    if (gidFull !== EXTERNAL && gidFull !== gid) {
                        gid = gidFull;
                        hasPostfix = false;
                    }
                } else if (gid === EXTERNAL) {
                    gid = resolveAt(input, bs, be, endNode, ckptTop);
                    hasPostfix = false;
                }
            } else gid = resolveAt(input, bs, be, endNode, ckptTop);
            let ctxId = 0;
            let flags = 0;
            if (gid === EXTERNAL) tokGid[t] = EXTERNAL;
            else {
                flags = hasPostfix ? 1 : 0;
                ctxId = pts >= lastColon ? important ? 1 : 0 : internSpan(ctxByHash, input, pts, lastColon, important ? 1 : 0, (k)=>canonicalizeContext(k, important));
                tokGid[t] = gid;
                tokFlags[t] = flags;
                tokCtx[t] = ctxId;
            }
            memoPut(way0, input, ts, te, h, gid, ctxId, flags);
        }
        if (tokenCount === 0) return "";
        if (tokenCount === 1) return tokStart[0] === 0 && tokEnd[0] === n ? input : input.slice(tokStart[0], tokEnd[0]);
        if (tokenCount * CLAIM_PER_TOKEN > CLAIM_TABLE) {
            while(tokenCount * CLAIM_PER_TOKEN > CLAIM_TABLE){
                CLAIM_TABLE <<= 1;
                claimShift--;
            }
            claimKeys = new Float64Array(CLAIM_TABLE);
            claimEpochs = new Int32Array(CLAIM_TABLE);
        }
        if (nextCtxId >= ID_LIMIT || nextDynId >= ID_LIMIT) throw new Error("cn: too many distinct classes in one merge");
        epoch = epoch + 1 | 0;
        if (epoch === 0) {
            claim0.fill(0);
            claimEpochs.fill(0);
            epoch = 1;
        }
        let didDrop = false;
        for(let t = tokenCount - 1; t >= 0; t--){
            const gid = tokGid[t];
            if (gid === EXTERNAL) {
                keep[t] = 1;
                continue;
            }
            const ctxId = tokCtx[t];
            if (claimTest(ctxId, gid) === 1) {
                keep[t] = 0;
                didDrop = true;
                continue;
            }
            keep[t] = 1;
            if (gid < GROUP_COUNT) {
                const r = adjRow[gid];
                if (r >= 0) for(let k = adjStart[r]; k < adjStart[r + 1]; k++)claimTest(ctxId, adjTgt[k]);
                if (tokFlags[t] & 1) {
                    for(let k = 0; k < patGid.length; k++)if (patGid[k] === gid) claimTest(ctxId, patTgt[k]);
                }
            }
        }
        if (!didDrop && !sawNonSpaceWS && n === totalTokenChars + tokenCount - 1) return input;
        let out = "";
        let t = 0;
        while(t < tokenCount){
            if (!keep[t]) {
                t++;
                continue;
            }
            const runStart = tokStart[t];
            let runEnd = tokEnd[t];
            let u = t + 1;
            while(u < tokenCount && keep[u] && tokStart[u] === runEnd + 1 && input.charCodeAt(runEnd) === 32){
                runEnd = tokEnd[u];
                u++;
            }
            if (out.length > 0) out += " ";
            out += input.slice(runStart, runEnd);
            t = u;
        }
        return out;
    };
    const DOOR_SIZE = 16384;
    const door = new Int32Array(DOOR_SIZE * 2);
    let doorBase = 0;
    let doorEpoch = 1;
    let cache = Object.create(null);
    let prevCache = Object.create(null);
    let cacheMap = /* @__PURE__ */ new Map();
    let prevCacheMap = /* @__PURE__ */ new Map();
    let cacheCount = 0;
    let doorMarks = 0;
    const rotateDoor = ()=>{
        doorBase ^= DOOR_SIZE;
        doorEpoch = doorEpoch + 1 | 0;
        doorMarks = 0;
    };
    const mergeCached = (input)=>{
        let merged = cache[input];
        if (merged !== void 0) return merged;
        const hash = spanHash(input, 0, input.length);
        const slot = (hash & 16383) + doorBase;
        const wasSeen = door[slot] === (hash ^ doorEpoch) || door[slot ^ DOOR_SIZE] === (hash ^ doorEpoch - 1);
        if (wasSeen) {
            merged = prevCache[input];
            if (merged !== void 0) {
                cache[input] = merged;
                return merged;
            }
        }
        merged = mergeClassList(input);
        if (wasSeen) {
            cache[input] = merged;
            if (++cacheCount > cacheSize) {
                cacheCount = 0;
                prevCache = cache;
                cache = Object.create(null);
                rotateDoor();
            }
        } else {
            door[slot] = hash ^ doorEpoch;
            if (++doorMarks > DOOR_SIZE) rotateDoor();
        }
        return merged;
    };
    const mergeCachedMap = (input)=>{
        let merged = cacheMap.get(input);
        if (merged !== void 0) return merged;
        const hash = spanHash(input, 0, input.length);
        const slot = (hash & 16383) + doorBase;
        const wasSeen = door[slot] === (hash ^ doorEpoch) || door[slot ^ DOOR_SIZE] === (hash ^ doorEpoch - 1);
        if (wasSeen) {
            merged = prevCacheMap.get(input);
            if (merged !== void 0) {
                cacheMap.set(input, merged);
                return merged;
            }
        }
        merged = mergeClassList(input);
        if (wasSeen) {
            cacheMap.set(input, merged);
            if (++cacheCount > cacheSize) {
                cacheCount = 0;
                prevCacheMap = cacheMap;
                cacheMap = /* @__PURE__ */ new Map();
                rotateDoor();
            }
        } else {
            door[slot] = hash ^ doorEpoch;
            if (++doorMarks > DOOR_SIZE) rotateDoor();
        }
        return merged;
    };
    const seenBefore = (input)=>{
        const hash = spanHash(input, 0, input.length);
        const slot = (hash & 16383) + doorBase;
        if (door[slot] === (hash ^ doorEpoch) || door[slot ^ DOOR_SIZE] === (hash ^ doorEpoch - 1)) return true;
        door[slot] = hash ^ doorEpoch;
        if (++doorMarks > DOOR_SIZE) rotateDoor();
        return false;
    };
    const mergeString = cacheSize === 0 ? mergeClassList : IS_JSC ? (input)=>{
        const merged = cacheMap.get(input);
        return merged !== void 0 ? merged : mergeCachedMap(input);
    } : mergeCached;
    const merge = function() {
        return arguments.length === 1 && typeof arguments[0] === "string" ? mergeString(arguments[0]) : mergeString(twJoin.apply(null, arguments));
    };
    return {
        merge,
        mergeString,
        seenBefore: cacheSize === 0 ? ()=>false : seenBefore,
        mergeUncached: mergeClassList
    };
};
const resolveValue = (v, clsxMode)=>{
    if (!v) return "";
    if (typeof v === "string") return v;
    let out = "";
    if (typeof v.length === "number" && (clsxMode ? Array.isArray(v) : true)) {
        const arr = v;
        for(let i = 0; i < arr.length; i++){
            const item = arr[i];
            if (!item) continue;
            const r = typeof item === "string" ? item : resolveValue(item, clsxMode);
            if (r) {
                if (out) out += " ";
                out += r;
            }
        }
        return out;
    }
    if (clsxMode) {
        if (typeof v === "number") return "" + v;
        if (typeof v === "object") {
            for(const k in v)if (v[k]) {
                if (out) out += " ";
                out += k;
            }
        }
    }
    return out;
};
const joinArgs = (args, clsxMode)=>{
    let s = "";
    for(let i = 0; i < args.length; i++){
        const a = args[i];
        if (!a) continue;
        const r = typeof a === "string" ? a : resolveValue(a, clsxMode);
        if (r) {
            if (s) s += " ";
            s += r;
        }
    }
    return s;
};
/** join-only, `twJoin`-compatible (strings + nested arrays, falsy skipped) */ const twJoin = function() {
    return joinArgs(arguments, false);
};
/** join-only, `clsx`-compatible (no merging) */ const clsx = function() {
    return joinArgs(arguments, true);
};
const wrapClsx = (mergeString, fresh)=>{
    const seenBefore = fresh === void 0 ? ()=>true : fresh.seenBefore;
    const mergeUncached = fresh === void 0 ? mergeString : fresh.mergeUncached;
    let argCache = /* @__PURE__ */ new Map();
    let prevArgCache = /* @__PURE__ */ new Map();
    let argCount = 0;
    let lastHit = null;
    const match3 = (e, v0, v1, v2)=>{
        let k = 0;
        if (v0) {
            if (v0 !== e.a0) return false;
            k = 1;
        }
        if (v1) {
            if (v1 !== (k === 0 ? e.a0 : e.a1)) return false;
            k++;
        }
        if (v2) {
            if (v2 !== (k === 0 ? e.a0 : k === 1 ? e.a1 : e.a2)) return false;
            k++;
        }
        return k === e.t;
    };
    const matchN = (e, vals)=>{
        const ea = e.a;
        let k = 0;
        for(let i = 0; i < vals.length; i++){
            const v = vals[i];
            if (!v) continue;
            if (v !== ea[k]) return false;
            k++;
        }
        return k === e.t;
    };
    const resolveArgs = (vals, probed)=>{
        const nArgs = vals.length;
        const pred = lastHit === null ? null : lastHit.n;
        if (!probed) {
            if (pred !== null && matchN(pred, vals)) {
                lastHit = pred;
                return pred.r;
            }
            if (lastHit !== null && lastHit !== pred && matchN(lastHit, vals)) return lastHit.r;
        }
        let first = "";
        let firstIdx = -1;
        let truthy = 0;
        let hasResolvedValue = false;
        for(let i = 0; i < nArgs; i++){
            let v = vals[i];
            if (!v) continue;
            if (typeof v !== "string") {
                v = vals[i] = resolveValue(v, true);
                if (!v) continue;
                hasResolvedValue = true;
            }
            if (firstIdx < 0) {
                first = v;
                firstIdx = i;
            }
            truthy++;
        }
        if (truthy === 0) return "";
        if (truthy === 1) return mergeString(first);
        if (hasResolvedValue) {
            if (pred !== null && matchN(pred, vals)) {
                lastHit = pred;
                return pred.r;
            }
            if (lastHit !== null && lastHit !== pred && matchN(lastHit, vals)) return lastHit.r;
        }
        let bucket = argCache.get(first);
        if (bucket === void 0) {
            bucket = prevArgCache.get(first);
            if (bucket !== void 0) argCache.set(first, bucket);
        }
        let hit = null;
        if (bucket !== void 0) outer: for(let b = 0; b < bucket.length; b++){
            const e = bucket[b];
            if (e.t !== truthy) continue;
            const ea = e.a;
            let k = 1;
            for(let i = firstIdx + 1; i < nArgs; i++){
                const v = vals[i];
                if (v && v !== ea[k++]) continue outer;
            }
            hit = e;
            break;
        }
        if (hit === null) {
            let joined = first;
            const a = [
                first
            ];
            for(let i = firstIdx + 1; i < nArgs; i++){
                const v = vals[i];
                if (!v) continue;
                joined += " " + v;
                a.push(v);
            }
            if (!seenBefore(joined)) return mergeUncached(joined);
            hit = {
                r: mergeString(joined),
                t: a.length,
                a0: a[0],
                a1: a[1],
                a2: a[2] ?? "",
                a,
                n: null
            };
            if (bucket === void 0) argCache.set(first, bucket = []);
            if (bucket.length >= 256) bucket.shift();
            bucket.push(hit);
            if (++argCount > 1e3) {
                argCount = 0;
                prevArgCache = argCache;
                argCache = /* @__PURE__ */ new Map();
            }
        }
        if (lastHit !== null && lastHit !== hit) lastHit.n = hit;
        lastHit = hit;
        return hit.r;
    };
    const mergeSingleValue = (value)=>Array.isArray(value) ? resolveArgs(value.slice(), false) : mergeString(resolveValue(value, true));
    return function(v0, v1, v2) {
        const nArgs = arguments.length;
        if ((nArgs | 1) === 3) {
            const lh = lastHit;
            if (lh !== null) {
                const pred = lh.n;
                if (pred !== null && match3(pred, v0, v1, v2)) {
                    lastHit = pred;
                    return pred.r;
                }
                if (lh !== pred && match3(lh, v0, v1, v2)) return lh.r;
            }
            return resolveArgs([
                v0,
                v1,
                v2
            ], true);
        }
        if (nArgs === 1) return typeof v0 === "string" ? mergeString(v0) : mergeSingleValue(v0);
        const lh = lastHit;
        if (lh !== null) {
            const pred = lh.n;
            if (pred !== null) {
                const pa = pred.a;
                let k = 0;
                let ok = true;
                for(let i = 0; i < nArgs; i++){
                    const v = arguments[i];
                    if (!v) continue;
                    if (v !== pa[k]) {
                        ok = false;
                        break;
                    }
                    k++;
                }
                if (ok && k === pred.t) {
                    lastHit = pred;
                    return pred.r;
                }
            }
            if (lh !== pred) {
                const la = lh.a;
                let k = 0;
                let ok = true;
                for(let i = 0; i < nArgs; i++){
                    const v = arguments[i];
                    if (!v) continue;
                    if (v !== la[k]) {
                        ok = false;
                        break;
                    }
                    k++;
                }
                if (ok && k === lh.t) return lh.r;
            }
        }
        const vals = [];
        for(let i = 0; i < nArgs; i++)vals.push(arguments[i]);
        return resolveArgs(vals, true);
    };
};
/**
* Create a `cn` function bound to compiled tables — the entry point for
* project-compiled (`cn build`) tables:
*
* ```ts
* import tables from "./cn-tables.js"
* import { createCn } from "cn/engine"
* export const cn = createCn(tables)
* ```
*/ const createCn = (tables, validatorImpls, options)=>{
    const engine = createEngine(tables, validatorImpls, options);
    return wrapClsx(engine.mergeString, engine);
};
;
}),
"[project]/rozdzial-6-ladowanie-danych/node_modules/cn/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "twMerge",
    ()=>twMerge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$cn$2f$dist$2f$tables$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/cn/dist/tables.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$cn$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/cn/dist/engine.js [app-ssr] (ecmascript)");
;
;
//#region src/index.ts
const instance = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$cn$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEngine"])(__TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$cn$2f$dist$2f$tables$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
/**
* Merge Tailwind CSS classes with clsx-style arguments (strings, arrays,
* objects, conditionals). Drop-in replacement for `twMerge(clsx(...))`.
*/ const cn = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$cn$2f$dist$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrapClsx"])(instance.mergeString, instance);
/** tailwind-merge–compatible variadic merge (strings + nested arrays). */ const twMerge = instance.merge;
;
}),
"[project]/rozdzial-6-ladowanie-danych/node_modules/cn/dist/tables.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>tables_generated_default
]);
//#region src/tables.generated.ts
const P = 48;
const U = (s, o = 0)=>{
    const out = new Int32Array(s.length);
    for(let i = 0; i < s.length; i++)out[i] = s.charCodeAt(i) - P - o;
    return out;
};
const PS = (counts)=>{
    const out = new Int32Array(counts.length + 1);
    for(let i = 0; i < counts.length; i++)out[i + 1] = out[i] + counts[i];
    return out;
};
const DZ = (s)=>{
    const out = new Int32Array(s.length);
    let a = 0;
    for(let i = 0; i < s.length; i++){
        const z = s.charCodeAt(i) - P;
        a += z >>> 1 ^ -(z & 1);
        out[i] = a;
    }
    return out;
};
const GROUP_COUNT = 384;
const customValidatorNames = [];
const edgeStart = PS(U("E0500002005282000000002000150000020021820000011200000003022202000300004200120000200420001200021200301200010400162000010000220021010:2192001200220012000220012000200200200400010200040000000000400200108200110100000022010313000162002000020020012020080213000228200000000082000000000120002000120020020040101020300130001001010"));
const labelStart = PS(U(":11111111211111119311546544411119731869:671397415686432441111111111161114151214313433415:78311132233313187211117221449443411141111151152226611131111112212518142224214215421421542142424242516171151615616347111111111197911327451111111111111111111113134714133513411111311111111111111111111112444411111342312715245411117:3"));
const labelText = "@containerabcdefghinlmoprstunderlineviawzccentlignnimatespectuto-colsrowsaglorightnessckdrop-sisbcontrastfiltergrayscalehue-rotateinvertopacityslurrightnessaturateepia-coniclinearpositionradialsizeockurrderttom-belrstxyespacing-xyaretoursorlnt-umnsendspantartainentrasteividerop-shadowurationcorationlay-xyasendillexontromlter-featuresstretchapr-xyayscaleidow-colsrowsue-rotatedentlinesetvert-beringsxyeshadoweiadingftnest-clamp-imageabein-lrstxyskx--b-coniclpositionrsizet-x-y-fromto-fromto-inearfromto-fromto-adialfromto-fromtofromtofromtofromtoblockhinlinew-screenesblockhinlinewbjectpacityrutlinederigin-offsetbelrstxyesrspective-originaceholderioghtng-offsettateundedw-xyz-belrstlreseslr-endspantartaturatecepiahizekewpace-taleroll-xyz-barmpbelrstxyesbelrstxyes-thumbrackadowrink-xyxyartrokeabextora-shadowpckingnsformitionlate-xyz-offsetill-changeoom";
const edgeTarget = (()=>{
    const N = edgeStart.length - 1;
    const sizes = new Int32Array(N);
    for(let i = N - 1; i >= 0; i--){
        let s = 1;
        let c = i + 1;
        for(let k = edgeStart[i]; k < edgeStart[i + 1]; k++){
            s += sizes[c];
            c += sizes[c];
        }
        sizes[i] = s;
    }
    const out = new Int32Array(edgeStart[N]);
    let e = 0;
    for(let i = 0; i < N; i++){
        let c = i + 1;
        for(let k = edgeStart[i]; k < edgeStart[i + 1]; k++){
            out[e++] = c;
            c += sizes[c];
        }
    }
    return out;
})();
const nodeGroup = U("02000000000000900<=0?000B000F00F00ŏI0J0LNPRTVX0000]_a00000000000000000000000rst0000000zŏ00000000000ŏ0000000ŏ00000000000000000000000000000000000000000000000000000000000000Ë000000000000000000000Þ000000000000000000ð0000000ø0ùúûüýþÿĀāĂăĄąĆ000000000000000000000000000000000000000000ħ0ĨĪ00000000000000000000ļĽ00000Ŭ000000", 1);
const vlistPat = PS(U("1233333593464636351265367151576"));
const vlistOps = U("93203242332583253248325D>E?F@03263243255B:032523853:0325B:8GA032542H<C=12727B:0324325853;D>E?3257D>03258432585:0325B:;0328B:032");
const vlistRef = U("012123445661666666789111:5;;;;;;;;444;;;:62999<1161=62>>?61:21@ABCD4446996:64E:::;:?::64:F114GHHIHHHHIHH1HH1HH1HHHHHH::EJK4444::EJ4444441691;644444114244444:;L6666555555555555555999666664444444444444444444444226?6:66644M9N?D:111::::6DJ199");
const vlistGroup = DZ("0202002020020020020020020020020200200200200200200200002020202001003040106000200200200200200200200200200200200200200200200200200200200200200200200200200200200020020020020020020002020200202002002002002002002002002002020002002020020200220200200200200200200200200200200020020020000200020002000200200200020020020002000200200200020020202002020202000200200020022000200200020020002002000200220002002000200W0Z00020020002002020002002000200g0j0002002000200200020020002002000200200020020002000200002000002002002002002000200020000200002002002002002002002020020020200200200200200200200200202020020020020020020020020002002002020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020002002002002002002000200200200200200200200200200020202020002000200020002002002002000020200200");
const nodeVlist = (()=>{
    const out = /* @__PURE__ */ new Int32Array(319).fill(-1);
    const A = DZ("02422242:222222242224222242442222222422222244442242226224222426222422442462222422622222222626222462242622422622422424242422222222422222222242422222222222222222622442224222222222222224424442262222222222222222222226224222424242422224422422422222");
    const V = DZ("02222222222222222222202222222222222222222222221422222222222222222222222222222222222Y\\222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221422222222222222222222222222222222222222Ŀł222222222222222222");
    for(let i = 0; i < A.length; i++)out[A[i]] = V[i];
    return out;
})();
const SETS = "container |break-after- all auto avoid avoid-page column left page right|break-before- all auto avoid avoid-page column left page right|break-inside-a uto void void-column void-page|box-decoration- clone slice|box- border content| contents flow-root hidden table table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group| not-sr-only sr-only|float- end left none right start|clear- both end left none right start|isolat e ion-auto|overflow- auto clip hidden scroll visible|overflow-x- auto clip hidden scroll visible|overflow-y- auto clip hidden scroll visible|overscroll- auto contain none|overscroll-x- auto contain none|overscroll-y- auto contain none| absolute fixed relative static sticky| collapse invisible visible|justify- around baseline between center center-safe end end-safe evenly normal start stretch|justify-items- center center-safe end end-safe normal start stretch|justify-self- auto center center-safe end end-safe start stretch|items- baseline baseline-last center center-safe end end-safe start stretch|self- auto baseline baseline-last center center-safe end end-safe start stretch|place-content- around baseline between center center-safe end end-safe evenly start stretch|place-items- baseline center center-safe end end-safe start stretch|place-self- auto center center-safe end end-safe start stretch| antialiased subpixel-antialiased| italic not-italic|normal-nums |ordinal |slashed-zero | lining-nums oldstyle-nums| proportional-nums tabular-nums| diagonal-fractions stacked-fractions| no-underline overline| capitalize lowercase normal-case uppercase|truncate |whitespace- break-spaces normal nowrap pre pre-line pre-wrap|break- all keep normal words|wrap- anywhere break-word normal|hyphens- auto manual none|mix-blend- color color-burn color-dodge darken difference exclusion hard-light hue lighten luminosity multiply normal overlay plus-darker plus-lighter saturation screen soft-light|table- auto fixed|caption- bottom top|backface- hidden visible|appearance- auto none|scheme- dark light light-dark normal only-dark only-light|field-sizing- content fixed|pointer-events- auto none|resize  -none -x -y|snap- align-none center end start|snap- always normal|snap- both none x y|snap- mandatory proximity|touch- auto manipulation none|touch-pan- left right x|touch-pan- down up y|touch-pinch-zoom |select- all auto none text|forced-color-adjust- auto none| normal size| baseline bottom middle sub super text-bottom text-top top|none | auto square video| auto fr max min px| auto full px| fixed local scroll|clip- border content padding text|origin- border content padding| bottom bottom-left bottom-right center left left-bottom left-top right right-bottom right-top top top-left top-right| no-repeat repeat repeat-round repeat-space repeat-x repeat-y| auto contain cover| gradient-to-b gradient-to-bl gradient-to-br gradient-to-l gradient-to-r gradient-to-t gradient-to-tl gradient-to-tr none|blend- color color-burn color-dodge darken difference exclusion hard-light hue lighten luminosity multiply normal overlay saturation screen soft-light|to- b bl br l r t tl tr| auto dvh fit full lh lvh max min px screen svh| dashed dotted double hidden none solid| collapse separate|px |auto |full | content none strict| inline-size size|layout |paint |style | around baseline between center center-safe end end-safe evenly normal start stretch| alias all-scroll auto cell col-resize context-menu copy crosshair default e-resize ew-resize grab grabbing help move n-resize ne-resize nesw-resize no-drop none not-allowed ns-resize nw-resize nwse-resize pointer progress row-resize s-resize se-resize sw-resize text vertical-text w-resize wait zoom-in zoom-out| dashed dotted double solid wavy| auto from-font|reverse |initial | in in-out initial linear out| col col-reverse row row-reverse| nowrap wrap wrap-reverse| auto initial none| black bold extrabold extralight light medium normal semibold thin| condensed expanded extra-condensed extra-expanded normal semi-condensed semi-expanded ultra-condensed ultra-expanded|flow- col col-dense dense row row-dense| none subgrid| auto dvh dvw fit full lh lvh lvw max min px screen svh svw| block flex grid table| auto dvw fit full lvw max min px screen svw| loose none normal px relaxed snug tight|through |item | inside outside| decimal disc none| auto px| clip-border clip-content clip-fill clip-padding clip-stroke clip-view no-clip| add exclude intersect subtract| alpha luminance match|origin- border content fill padding stroke view|type- alpha luminance| circle ellipse| closest-corner closest-side farthest-corner farthest-side|at- bottom bottom-left bottom-right center left left-bottom left-top right right-bottom right-top top top-left top-right| dvh fit full lh lvh max min none px screen svh| auto dvh dvw fit full lh lvh lvw max min none px screen svh svw| dvw fit full lvw max min none px screen svw| auto dvh dvw fit full lvh lvw max min none prose px svh svw| auto dvh dvw fit full lvh lvw max min none px screen svh svw| contain cover fill none scale-down| first last none| distant dramatic midrange near none normal|inset | full none|3d | auto smooth|gutter- auto both stable| auto none thin| inner none| auto dvh dvw fit full lvh lvw max min px svh svw|base | center end justify left right start| clip ellipsis| balance nowrap pretty wrap| normal tight tighter wide wider widest| cpu gpu none| 3d flat| all colors none opacity shadow transform| discrete normal| full px| auto dvh dvw fit full lvh lvw max min px screen svh svw| auto contents scroll transform".split("|").map((s)=>{
    const tails = s.split(" ");
    const prefix = tails.shift();
    for(let i = 0; i < tails.length; i++)tails[i] = prefix + tails[i];
    return tails;
});
const AA = DZ("0000000000000000000000000000000000000000000000000000000000000262242:6@200000006:240B428:4422400002046044222426220026642642462026224222824220022400000000\\00N222422242222222224062242222222422226264222422222222222222442804222422222222222222222222220<4<0204260002444020204224422");
const AG = DZ("ɠ222222222222222222222222222222222222222222222222222222222222˕4222226>ʶ22ʷʺʷ2ʸʷ42ʴ2ʓ22>621422ɶ222ɹɼɷɺɷɺ22ɱ42222ɨ2ɧ26622ɘɓ244ƸƵ222]d24242ǖǓƚÄȫ2263ȨȥȨ2222222ǣ222222222222222222ǂƽ2ƾƵ2222222422222ƜƑ22222222222222222222144Ŧţ22Ţş222222222222222222222ĸ2ı68ĦģĦɡŰ4Ġ«®ĝ822ĔđĔ2ē2222622");
const AS = DZ("02222222222222222222222222222222222222222222222222222222222222222203062222222222IL2200IL021042222]`222IL0gj2e50n2222U00X202[^2y0000560|{~22>22|22222222222G000qOVI00000}2>40000B00000I¨­000°00000000000000021Q²±00´000000000000000000000222HGHa5¾222Ã6À2222ÍÐ000­°2±");
const litAnchor = /* @__PURE__ */ new Int32Array(991);
const litGroup = /* @__PURE__ */ new Int32Array(991);
const litPool = /* @__PURE__ */ new Int32Array(991);
let poolText = "";
const poolOffsets = /* @__PURE__ */ new Int32Array(1030);
{
    const tailRef = /* @__PURE__ */ new Map();
    let nextRef = 0;
    let e = 0;
    for(let i = 0; i < AA.length; i++)for (const tail of SETS[AS[i]]){
        let r = tailRef.get(tail);
        if (r === void 0) {
            r = nextRef++;
            tailRef.set(tail, r);
            poolOffsets[r * 2] = poolText.length;
            poolOffsets[r * 2 + 1] = tail.length;
            poolText += tail;
        }
        litAnchor[e] = AA[i];
        litGroup[e] = AG[i];
        litPool[e] = r;
        e++;
    }
}const adjGid = DZ("0b2N:222@R>F@286¦2@H2D266226FB22B2>BD\\6N22222Z222D222p");
const adjStart = PS(U("1::22222432:222:22:22>222222:22:2221322511111311111114"));
const adjTgt = DZ("24A;33N=C@H4A;33N=C@<2;363@QTQʰ222ˉºŴŽ2R2=18cƴÅŇÜÛŲǝȈ:ħ25=11D3A@216Er25;11B3?<438Cn9@7=<8192>2E121@9@EHE@9>2T25511<398216=V25511<398216=ƧNž2Đå242L222290000f22500ɛ000ǘ222");
const patGid = U("ĳ");
const patTgt = U("");
const postfixLookupGroups = U("1");
const orderSensitiveModifiers = "* ** after backdrop before details-content file first-letter first-line marker placeholder selection";
var tables_generated_default = {
    GROUP_COUNT,
    customValidatorNames,
    edgeStart,
    labelStart,
    labelText,
    edgeTarget,
    nodeGroup,
    nodeVlist,
    vlistPat,
    vlistOps,
    vlistRef,
    vlistGroup,
    litAnchor,
    litGroup,
    litPool,
    poolOffsets,
    poolText,
    adjGid,
    adjStart,
    adjTgt,
    patGid,
    patTgt,
    postfixLookupGroups,
    orderSensitiveModifiers
};
;
}),
];

//# sourceMappingURL=1l0z_15wrfoj._.js.map